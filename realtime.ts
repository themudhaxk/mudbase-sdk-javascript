/* tslint:disable */
/* eslint-disable */
/**
 * MUDBASESDK - Realtime
 *
 * Firebase-style realtime data listeners for the Mudbase database, layered on top of
 * the platform's Socket.IO transport. Subscribe to live document changes with a single
 * `.onSnapshot()` call and get an unsubscribe function back - no manual socket wiring.
 *
 *   const rt = new MudbaseRealtime({ projectId, token });
 *   const unsub = rt.collection("posts").onSnapshot((change) => { ... });
 *   const unsub = rt.doc("posts", id).onSnapshot((change) => { ... });
 *   const unsub = rt.collection("posts").where({ published: true }).onSnapshot((snap) => { ... });
 *
 * This file is hand-written (not produced by OpenAPI Generator) because the realtime
 * transport is not described by the REST OpenAPI spec. It is listed in
 * `.openapi-generator-ignore` so regeneration does not overwrite it.
 *
 * See REALTIME.md for the full usage guide.
 */

import type { Socket } from "socket.io-client";
import { io as defaultIo } from "socket.io-client";
import type { Configuration } from "./configuration";
import { BASE_PATH } from "./base";

/** A function that tears down a subscription. Safe to call more than once. */
export type Unsubscribe = () => void;

/**
 * Document-level change actions the server emits as `db:create` / `db:update` / `db:delete`,
 * plus collection (schema) change actions emitted as `db:collection_created` / `_updated` /
 * `_deleted`. These are the real event names emitted by the live server, not the older
 * `data:change` names in some server-side docs.
 */
export type MudbaseChangeAction =
  | "create"
  | "update"
  | "delete"
  | "collection_created"
  | "collection_updated"
  | "collection_deleted";

/**
 * A single realtime change delivered to a `collection(...).onSnapshot()` or
 * `doc(...).onSnapshot()` listener. Mirrors the server payload
 * `{ projectId, collectionId, action, data, timestamp }`.
 *
 * For `create` / `update`, `data` is the document. For `delete`, `data` is `{ id }`.
 * For the `collection_*` schema actions, `data` is the collection definition.
 */
export interface MudbaseChange<T = any> {
  action: MudbaseChangeAction;
  projectId: string;
  collectionId: string;
  data: T;
  timestamp: string;
}

/**
 * A query snapshot delivered to a `collection(...).where(query).onSnapshot()` listener.
 * The server re-runs the query on every underlying change and emits the full matching
 * result set as `query:change` `{ queryId, collectionId, projectId, documents, timestamp }`,
 * so - unlike collection/doc listeners, which deliver deltas - a query listener always
 * receives the current set of matching documents.
 */
export interface MudbaseQuerySnapshot<T = any> {
  queryId: string;
  projectId: string;
  collectionId: string;
  documents: T[];
  timestamp: string;
}

/** Called when the server rejects a subscription or the socket reports an error. */
export type SnapshotErrorHandler = (error: Error) => void;

/**
 * Options for {@link MudbaseRealtime}.
 *
 * Supply the same credentials you already use with the REST SDK: either pass a
 * `Configuration` (its `accessToken`/`basePath` are reused) or a raw `token`/`getToken`.
 */
export interface MudbaseRealtimeOptions {
  /** The Mudbase project id every subscription is scoped to. Required. */
  projectId: string;
  /**
   * A JWT for the Socket.IO handshake. Can be a string or a (sync/async) function that
   * returns one - use the function form when the token is refreshed over time. If omitted,
   * `configuration.accessToken` is used.
   */
  token?: string | (() => string | Promise<string>);
  /**
   * The REST SDK `Configuration`. When present, its `accessToken` is reused as the socket
   * token (unless `token` is given) and its `basePath` as the server URL (unless `basePath`
   * is given).
   */
  configuration?: Configuration;
  /** Server URL. Defaults to `configuration.basePath`, then the SDK's `BASE_PATH`. */
  basePath?: string;
  /** Extra options forwarded to the underlying Socket.IO client (e.g. `transports`). */
  socketOptions?: Record<string, any>;
  /**
   * Inject a Socket.IO `io(...)` factory (mainly for testing). Defaults to the real
   * `socket.io-client` `io`.
   */
  ioClient?: typeof defaultIo;
}

type ChangeListener = {
  kind: "collection";
  collectionId: string;
  /** When set, only changes to this document id are delivered (doc listener). */
  documentId?: string;
  cb: (change: MudbaseChange) => void;
  onError?: SnapshotErrorHandler;
};

type QueryListener = {
  kind: "query";
  queryId: string;
  collectionId: string;
  query: Record<string, any>;
  cb: (snapshot: MudbaseQuerySnapshot) => void;
  onError?: SnapshotErrorHandler;
};

type AnyListener = ChangeListener | QueryListener;

const DB_CHANGE_EVENTS: string[] = [
  "db:create",
  "db:update",
  "db:delete",
  "db:collection_created",
  "db:collection_updated",
  "db:collection_deleted",
];

let queryCounter = 0;
function nextQueryId(): string {
  queryCounter += 1;
  const rand = Math.random().toString(36).slice(2, 10);
  return `q_${Date.now().toString(36)}_${queryCounter}_${rand}`;
}

function docIdOf(data: any): string | undefined {
  if (data == null || typeof data !== "object") return undefined;
  const raw = data._id ?? data.id;
  return raw == null ? undefined : String(raw);
}

/**
 * A live handle to a Mudbase database, exposing Firebase-style `.collection()` / `.doc()`
 * accessors whose `.onSnapshot()` delivers realtime changes over Socket.IO.
 *
 * One `MudbaseRealtime` owns one socket connection, shared across every subscription. The
 * connection is opened lazily on the first `.onSnapshot()` and closed by {@link close}.
 * Server-side room subscriptions are ref-counted, and all active subscriptions are
 * re-established automatically after a reconnect.
 */
export class MudbaseRealtime {
  private readonly projectId: string;
  private readonly basePath: string;
  private readonly socketOptions: Record<string, any>;
  private readonly ioClient: typeof defaultIo;
  private readonly tokenSource?: string | (() => string | Promise<string>);
  private readonly configuration?: Configuration;

  private socket: Socket | null = null;
  private readonly listeners = new Set<AnyListener>();
  /** collectionId -> number of active server-room subscriptions (collection + doc listeners). */
  private readonly collectionRefs = new Map<string, number>();

  constructor(options: MudbaseRealtimeOptions) {
    if (!options || !options.projectId) {
      throw new Error("MudbaseRealtime: `projectId` is required");
    }
    this.projectId = options.projectId;
    this.configuration = options.configuration;
    this.tokenSource = options.token;
    this.basePath = (options.basePath ?? options.configuration?.basePath ?? BASE_PATH).replace(/\/+$/, "");
    this.socketOptions = options.socketOptions ?? {};
    this.ioClient = options.ioClient ?? defaultIo;
  }

  /** A reference to a collection you can subscribe to or narrow with `.where()`. */
  collection(collectionId: string): CollectionRef {
    if (!collectionId) throw new Error("MudbaseRealtime.collection: `collectionId` is required");
    return new CollectionRef(this, collectionId);
  }

  /** A reference to a single document you can subscribe to. */
  doc(collectionId: string, documentId: string): DocumentRef {
    if (!collectionId) throw new Error("MudbaseRealtime.doc: `collectionId` is required");
    if (!documentId) throw new Error("MudbaseRealtime.doc: `documentId` is required");
    return new DocumentRef(this, collectionId, documentId);
  }

  /** Close the underlying socket and drop all subscriptions. */
  close(): void {
    this.listeners.clear();
    this.collectionRefs.clear();
    if (this.socket) {
      this.socket.removeAllListeners();
      this.socket.disconnect();
      this.socket = null;
    }
  }

  /** True once the socket has connected at least once and is currently connected. */
  get connected(): boolean {
    return !!this.socket?.connected;
  }

  // --- internal: token resolution -------------------------------------------------

  private async resolveToken(): Promise<string | undefined> {
    const src = this.tokenSource;
    if (typeof src === "string") return src;
    if (typeof src === "function") return await src();
    // Fall back to the REST SDK Configuration's accessToken (string or function form).
    const at = this.configuration?.accessToken as
      | string
      | ((name?: string, scopes?: string[]) => string | Promise<string>)
      | undefined;
    if (typeof at === "string") return at;
    if (typeof at === "function") return await at();
    return undefined;
  }

  // --- internal: connection lifecycle ---------------------------------------------

  private async ensureSocket(): Promise<Socket> {
    if (this.socket) return this.socket;

    const token = await this.resolveToken();
    if (!token) {
      throw new Error(
        "MudbaseRealtime: no auth token available. Pass `token`, `getToken`, or a `configuration` with an `accessToken`.",
      );
    }

    // Guard against a concurrent ensureSocket() having created the socket while we awaited.
    if (this.socket) return this.socket;

    const socket = this.ioClient(this.basePath, {
      auth: { token },
      transports: ["websocket", "polling"],
      ...this.socketOptions,
    });
    this.socket = socket;

    // Re-establish every active subscription after a (re)connect. Socket.IO rooms are
    // per-connection on the server, so a reconnect starts with no rooms joined.
    socket.on("connect", () => {
      for (const l of this.listeners) this.sendSubscribe(socket, l);
    });

    // Surface connection/handshake failures to every listener's error handler.
    socket.on("connect_error", (err: Error) => this.emitError(err));
    socket.on("error", (payload: any) => {
      const message = typeof payload === "string" ? payload : payload?.message ?? "Realtime error";
      this.emitError(new Error(message));
    });

    for (const event of DB_CHANGE_EVENTS) {
      socket.on(event, (payload: any) => this.dispatchChange(payload));
    }
    socket.on("query:change", (payload: any) => this.dispatchQuery(payload));

    return socket;
  }

  private sendSubscribe(socket: Socket, l: AnyListener): void {
    if (l.kind === "query") {
      socket.emit("subscribe:query", {
        projectId: this.projectId,
        collectionId: l.collectionId,
        queryId: l.queryId,
        query: l.query,
      });
    } else {
      socket.emit("subscribe:collection", {
        projectId: this.projectId,
        collectionId: l.collectionId,
      });
    }
  }

  private emitError(error: Error): void {
    for (const l of this.listeners) l.onError?.(error);
  }

  private dispatchChange(payload: any): void {
    if (!payload || typeof payload !== "object") return;
    const change: MudbaseChange = {
      action: payload.action,
      projectId: payload.projectId,
      collectionId: payload.collectionId,
      data: payload.data,
      timestamp: payload.timestamp,
    };
    for (const l of this.listeners) {
      if (l.kind !== "collection") continue;
      if (l.collectionId !== change.collectionId) continue;
      if (l.documentId) {
        // Doc listener: only forward changes to the one document. `delete` carries `{ id }`,
        // `create`/`update` carry the document itself (id under `_id` or `id`).
        if (docIdOf(change.data) !== l.documentId) continue;
      }
      try {
        l.cb(change);
      } catch (err) {
        l.onError?.(err instanceof Error ? err : new Error(String(err)));
      }
    }
  }

  private dispatchQuery(payload: any): void {
    if (!payload || typeof payload !== "object") return;
    const snapshot: MudbaseQuerySnapshot = {
      queryId: payload.queryId,
      projectId: payload.projectId,
      collectionId: payload.collectionId,
      documents: Array.isArray(payload.documents) ? payload.documents : [],
      timestamp: payload.timestamp,
    };
    for (const l of this.listeners) {
      if (l.kind !== "query") continue;
      if (l.queryId !== snapshot.queryId) continue;
      try {
        l.cb(snapshot);
      } catch (err) {
        l.onError?.(err instanceof Error ? err : new Error(String(err)));
      }
    }
  }

  // --- internal: subscription registration (called by the ref classes) -------------

  /** @internal */
  _addCollectionListener(l: ChangeListener): Unsubscribe {
    this.listeners.add(l);
    const refs = (this.collectionRefs.get(l.collectionId) ?? 0) + 1;
    this.collectionRefs.set(l.collectionId, refs);

    // Open the socket (lazily) and join the collection room. Only the first listener for a
    // given collection sends `subscribe:collection`; the reconnect handler re-sends for all.
    this.ensureSocket()
      .then((socket) => {
        if (!this.listeners.has(l)) return; // unsubscribed before connect resolved
        if (refs === 1 || !socket.connected) {
          if (socket.connected) this.sendSubscribe(socket, l);
          // if not yet connected, the "connect" handler will send it
        }
      })
      .catch((err) => l.onError?.(err instanceof Error ? err : new Error(String(err))));

    return () => this._removeCollectionListener(l);
  }

  private _removeCollectionListener(l: ChangeListener): void {
    if (!this.listeners.delete(l)) return;
    const refs = (this.collectionRefs.get(l.collectionId) ?? 1) - 1;
    if (refs <= 0) {
      this.collectionRefs.delete(l.collectionId);
      if (this.socket?.connected) {
        this.socket.emit("unsubscribe:collection", { collectionId: l.collectionId });
      }
    } else {
      this.collectionRefs.set(l.collectionId, refs);
    }
  }

  /** @internal */
  _addQueryListener(l: QueryListener): Unsubscribe {
    this.listeners.add(l);
    this.ensureSocket()
      .then((socket) => {
        if (!this.listeners.has(l)) return;
        if (socket.connected) this.sendSubscribe(socket, l);
        // otherwise the "connect" handler sends it
      })
      .catch((err) => l.onError?.(err instanceof Error ? err : new Error(String(err))));

    return () => {
      if (!this.listeners.delete(l)) return;
      if (this.socket?.connected) {
        this.socket.emit("unsubscribe:query", { queryId: l.queryId });
      }
    };
  }
}

/** A reference to a collection. Subscribe with `.onSnapshot()` or narrow with `.where()`. */
export class CollectionRef {
  constructor(private readonly rt: MudbaseRealtime, private readonly collectionId: string) {}

  /**
   * Listen for every document change in the collection (`create` / `update` / `delete`) and
   * collection-schema changes. Returns an unsubscribe function.
   */
  onSnapshot(cb: (change: MudbaseChange) => void, onError?: SnapshotErrorHandler): Unsubscribe {
    return this.rt._addCollectionListener({
      kind: "collection",
      collectionId: this.collectionId,
      cb,
      onError,
    });
  }

  /** Alias for {@link onSnapshot}. */
  subscribe(cb: (change: MudbaseChange) => void, onError?: SnapshotErrorHandler): Unsubscribe {
    return this.onSnapshot(cb, onError);
  }

  /** Narrow this collection to documents matching a query (Mongo-style filter). */
  where(query: Record<string, any>): QueryRef {
    return new QueryRef(this.rt, this.collectionId, query ?? {});
  }
}

/** A reference to a single document. */
export class DocumentRef {
  constructor(
    private readonly rt: MudbaseRealtime,
    private readonly collectionId: string,
    private readonly documentId: string,
  ) {}

  /**
   * Listen for changes to this one document. Implemented by subscribing to the document's
   * collection and filtering to this id client-side - the live server delivers document
   * `db:*` events on the collection room, not a per-document room. Returns an unsubscribe
   * function.
   */
  onSnapshot(cb: (change: MudbaseChange) => void, onError?: SnapshotErrorHandler): Unsubscribe {
    return this.rt._addCollectionListener({
      kind: "collection",
      collectionId: this.collectionId,
      documentId: this.documentId,
      cb,
      onError,
    });
  }

  /** Alias for {@link onSnapshot}. */
  subscribe(cb: (change: MudbaseChange) => void, onError?: SnapshotErrorHandler): Unsubscribe {
    return this.onSnapshot(cb, onError);
  }
}

/** A reference to a filtered query. Subscribe with `.onSnapshot()` for live result sets. */
export class QueryRef {
  constructor(
    private readonly rt: MudbaseRealtime,
    private readonly collectionId: string,
    private readonly query: Record<string, any>,
  ) {}

  /**
   * Listen for the live set of documents matching this query. The server re-runs the query
   * on every underlying change and emits the full matching set. Returns an unsubscribe
   * function.
   */
  onSnapshot(
    cb: (snapshot: MudbaseQuerySnapshot) => void,
    onError?: SnapshotErrorHandler,
  ): Unsubscribe {
    return this.rt._addQueryListener({
      kind: "query",
      queryId: nextQueryId(),
      collectionId: this.collectionId,
      query: this.query,
      cb,
      onError,
    });
  }

  /** Alias for {@link onSnapshot}. */
  subscribe(
    cb: (snapshot: MudbaseQuerySnapshot) => void,
    onError?: SnapshotErrorHandler,
  ): Unsubscribe {
    return this.onSnapshot(cb, onError);
  }
}
