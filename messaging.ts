/* tslint:disable */
/* eslint-disable */
/**
 * MUDBASESDK - Messaging (push token helper)
 *
 * First-party, provider-agnostic client helper for acquiring a browser push token, so an
 * app can ask the user for notification permission and obtain a device push token WITHOUT
 * wiring up any third-party push SDK or config in the browser. The token it returns is meant
 * to be handed straight to `MessagingApi.registerDeviceToken`:
 *
 *   import { MudbaseMessaging, MessagingApi, Configuration } from "mudbase-sdk";
 *
 *   const messaging = new MudbaseMessaging({
 *     applicationServerKeyUrl: "https://cloud.mudbase.dev/api/messaging/projects/<id>/messaging/web-push/key",
 *   });
 *
 *   if (await messaging.requestPermission() === "granted") {
 *     const pushToken = await messaging.getPushToken();
 *     await new MessagingApi(new Configuration({ accessToken })).registerDeviceToken({
 *       projectId,
 *       deviceRegisterRequest: { token: pushToken.token, platform: pushToken.platform },
 *     });
 *   }
 *
 * It is built on the standard W3C Notifications, Service Worker and Push APIs (native Web
 * Push with a VAPID application server key). Nothing here references, imports, or exposes any
 * underlying push service - the browser subscribes directly to the Mudbase-served application
 * server key.
 *
 * This file is hand-written (not produced by OpenAPI Generator) because token acquisition is
 * a browser-side concern the REST OpenAPI spec does not describe. It is listed in
 * `.openapi-generator-ignore` so regeneration does not overwrite it.
 *
 * IMPORTANT (delivery dependency): `requestPermission()`, `getPermissionState()` and
 * `isSupported()` are complete and work today. `getPushToken()` produces a native Web Push
 * subscription - end-to-end delivery of that subscription additionally requires the Mudbase
 * project to have web-push delivery enabled server-side (the application server key endpoint
 * plus the web-push send path). Until a project is served an application server key,
 * `getPushToken()` throws a clear error rather than returning a token that cannot be
 * delivered. See MESSAGING.md.
 */

/** The device platform reported to `registerDeviceToken`. */
export type MudbasePushPlatform = "web" | "ios" | "android" | "unknown";

/**
 * A push token ready to pass to `MessagingApi.registerDeviceToken`. `token` is an opaque
 * string; for the browser it is the serialized native Web Push subscription. Spread the
 * first two fields straight into a `DeviceRegisterRequest`:
 *
 *   const t = await messaging.getPushToken();
 *   await api.registerDeviceToken({ projectId, deviceRegisterRequest: { token: t.token, platform: t.platform } });
 */
export interface MudbasePushToken {
  /** Opaque token string for `DeviceRegisterRequest.token`. */
  token: string;
  /** The originating platform. Always `"web"` for browser subscriptions. */
  platform: MudbasePushPlatform;
  /** The raw serialized browser push subscription (endpoint + keys), when acquired via the Web Push API. */
  subscription?: PushSubscriptionJSON;
}

/**
 * The minimal surface of the browser `Notification` global this helper uses. Injectable so
 * the helper is testable (and SSR-safe) without a real DOM.
 */
export interface NotificationPermissionApi {
  readonly permission: NotificationPermission;
  requestPermission(): Promise<NotificationPermission>;
}

/**
 * Options for {@link MudbaseMessaging}.
 *
 * Supply the Web Push application server key (VAPID public key) one of three ways:
 * `applicationServerKey` (a base64url string you already have), `getApplicationServerKey`
 * (a sync/async function), or `applicationServerKeyUrl` (a Mudbase endpoint the helper
 * fetches the key from). The key is always served first-party by Mudbase.
 */
export interface MudbaseMessagingOptions {
  /**
   * The Web Push application server key (VAPID public key) as a base64url string. Prefer
   * sourcing this from Mudbase (see `applicationServerKeyUrl`) rather than hardcoding it.
   */
  applicationServerKey?: string;
  /** A (sync or async) function that returns the base64url application server key. */
  getApplicationServerKey?: () => string | Promise<string>;
  /**
   * A Mudbase endpoint the helper fetches the application server key from. The response may
   * be the raw key string or JSON of the shape `{ key }` / `{ applicationServerKey }` /
   * `{ data: { key } }`.
   */
  applicationServerKeyUrl?: string;
  /**
   * Path to the service worker script that receives pushes, registered on demand when no
   * `serviceWorkerRegistration` is supplied. Defaults to `"/mudbase-messaging-sw.js"`.
   */
  serviceWorkerPath?: string;
  /**
   * An existing `ServiceWorkerRegistration` to subscribe against (use this when your app
   * already registers its own service worker). When omitted, the helper registers
   * `serviceWorkerPath` itself.
   */
  serviceWorkerRegistration?: ServiceWorkerRegistration;
  /**
   * Inject the `Notification` permission surface (mainly for testing / SSR). Defaults to the
   * global `Notification`.
   */
  notificationApi?: NotificationPermissionApi;
  /**
   * Inject the `navigator.serviceWorker` container (mainly for testing / SSR). Defaults to
   * the global `navigator.serviceWorker`.
   */
  serviceWorkerContainer?: ServiceWorkerContainer;
  /** Inject a `fetch` implementation used to fetch `applicationServerKeyUrl`. Defaults to the global `fetch`. */
  fetchFn?: typeof fetch;
}

/** Options for a single {@link MudbaseMessaging.getPushToken} call, overriding the constructor defaults. */
export interface GetPushTokenOptions {
  applicationServerKey?: string;
  serviceWorkerRegistration?: ServiceWorkerRegistration;
}

function getGlobal<T>(name: string): T | undefined {
  // Read a browser global without a hard reference, so importing this module in Node/SSR
  // does not throw. `globalThis` is available on every supported runtime.
  const g = typeof globalThis !== "undefined" ? (globalThis as Record<string, unknown>) : undefined;
  return g ? (g[name] as T | undefined) : undefined;
}

/**
 * Convert a base64url application server key into the `Uint8Array` the Push API expects. Some
 * browsers accept the base64url string directly, but converting is universally supported.
 */
function applicationServerKeyToBytes(base64Url: string) {
  const padding = "=".repeat((4 - (base64Url.length % 4)) % 4);
  const base64 = (base64Url + padding).replace(/-/g, "+").replace(/_/g, "/");
  const binary =
    typeof atob === "function"
      ? atob(base64)
      : Buffer.from(base64, "base64").toString("binary");
  // Back the view with an explicit ArrayBuffer so the value is a `Uint8Array<ArrayBuffer>`,
  // which satisfies the Push API's `BufferSource` parameter across TypeScript lib versions.
  const bytes = new Uint8Array(new ArrayBuffer(binary.length));
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

/**
 * First-party helper for acquiring a browser push token.
 *
 * The three permission methods (`isSupported`, `getPermissionState`, `requestPermission`) are
 * complete and provider-agnostic. `getPushToken()` performs the standard native Web Push
 * subscription and returns a token for `registerDeviceToken`; its end-to-end delivery depends
 * on the Mudbase project having web-push enabled server-side (see MESSAGING.md).
 */
export class MudbaseMessaging {
  private readonly options: MudbaseMessagingOptions;

  constructor(options: MudbaseMessagingOptions = {}) {
    this.options = options;
  }

  /**
   * True when the current environment supports the browser APIs this helper needs
   * (Notifications, Service Worker and Push). False in Node/SSR or unsupported browsers.
   */
  static isSupported(options: Pick<MudbaseMessagingOptions, "notificationApi" | "serviceWorkerContainer"> = {}): boolean {
    const notification = options.notificationApi ?? getGlobal<NotificationPermissionApi>("Notification");
    const swContainer =
      options.serviceWorkerContainer ??
      (getGlobal<Navigator>("navigator")?.serviceWorker as ServiceWorkerContainer | undefined);
    const pushManager = getGlobal("PushManager");
    return Boolean(notification && swContainer && pushManager);
  }

  /** Instance form of {@link MudbaseMessaging.isSupported}, honoring any injected surfaces. */
  isSupported(): boolean {
    return MudbaseMessaging.isSupported({
      notificationApi: this.options.notificationApi,
      serviceWorkerContainer: this.options.serviceWorkerContainer,
    });
  }

  private notification(): NotificationPermissionApi {
    const api = this.options.notificationApi ?? getGlobal<NotificationPermissionApi>("Notification");
    if (!api) {
      throw new Error(
        "MudbaseMessaging: the Notification API is not available in this environment. Call `getPushToken()` from a browser.",
      );
    }
    return api;
  }

  /**
   * The current notification permission state without prompting: `"granted"`, `"denied"`, or
   * `"default"` (not yet asked). Returns `"denied"` when the environment has no Notification API.
   */
  getPermissionState(): NotificationPermission {
    const api = this.options.notificationApi ?? getGlobal<NotificationPermissionApi>("Notification");
    return api ? api.permission : "denied";
  }

  /**
   * Prompt the user for notification permission (a no-op re-prompt if already decided) and
   * resolve with the resulting state. This is a complete, provider-agnostic operation.
   */
  async requestPermission(): Promise<NotificationPermission> {
    const api = this.notification();
    if (api.permission === "granted" || api.permission === "denied") {
      return api.permission;
    }
    return await api.requestPermission();
  }

  /**
   * Acquire a native Web Push token for this browser and return it ready for
   * `registerDeviceToken`. Ensures permission is granted, resolves the application server key,
   * (re)uses a service worker registration, subscribes via the Push API, and serializes the
   * subscription.
   *
   * Throws with a clear message when the environment is unsupported, permission is not
   * granted, or no application server key is available (which is the case until the Mudbase
   * project has web-push enabled server-side).
   */
  async getPushToken(options: GetPushTokenOptions = {}): Promise<MudbasePushToken> {
    if (!this.isSupported()) {
      throw new Error(
        "MudbaseMessaging: push is not supported in this environment (requires the Notifications, Service Worker and Push APIs).",
      );
    }

    const permission = await this.requestPermission();
    if (permission !== "granted") {
      throw new Error(
        `MudbaseMessaging: notification permission was not granted (state: "${permission}"). A push token can only be obtained after the user grants permission.`,
      );
    }

    const applicationServerKey = await this.resolveApplicationServerKey(options.applicationServerKey);
    const registration = await this.resolveServiceWorkerRegistration(options.serviceWorkerRegistration);

    const existing = await registration.pushManager.getSubscription();
    const subscription =
      existing ??
      (await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: applicationServerKeyToBytes(applicationServerKey),
      }));

    const json = subscription.toJSON();
    return {
      token: JSON.stringify(json),
      platform: "web",
      subscription: json,
    };
  }

  /**
   * Unsubscribe this browser from push and return the removed token string (the same value a
   * prior `getPushToken()` produced) so it can be handed to `unregisterDeviceToken`, or `null`
   * when there was no active subscription.
   */
  async deletePushToken(options: Pick<GetPushTokenOptions, "serviceWorkerRegistration"> = {}): Promise<string | null> {
    if (!this.isSupported()) return null;
    const registration = await this.resolveServiceWorkerRegistration(options.serviceWorkerRegistration);
    const subscription = await registration.pushManager.getSubscription();
    if (!subscription) return null;
    const token = JSON.stringify(subscription.toJSON());
    await subscription.unsubscribe();
    return token;
  }

  // --- internal ------------------------------------------------------------------

  private async resolveApplicationServerKey(perCall?: string): Promise<string> {
    const key =
      perCall ??
      this.options.applicationServerKey ??
      (this.options.getApplicationServerKey ? await this.options.getApplicationServerKey() : undefined) ??
      (this.options.applicationServerKeyUrl ? await this.fetchApplicationServerKey(this.options.applicationServerKeyUrl) : undefined);

    if (!key) {
      throw new Error(
        "MudbaseMessaging: no Web Push application server key available. Provide `applicationServerKey`, " +
          "`getApplicationServerKey`, or `applicationServerKeyUrl`. The Mudbase project must have web push " +
          "enabled for its application server key to be served.",
      );
    }
    return key;
  }

  private async fetchApplicationServerKey(url: string): Promise<string> {
    const fetchFn = this.options.fetchFn ?? getGlobal<typeof fetch>("fetch");
    if (!fetchFn) {
      throw new Error("MudbaseMessaging: no `fetch` available to load `applicationServerKeyUrl`. Provide `fetchFn`.");
    }
    const res = await fetchFn(url);
    if (!res.ok) {
      throw new Error(`MudbaseMessaging: failed to fetch application server key (HTTP ${res.status}).`);
    }
    const contentType = res.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      const body: any = await res.json();
      const key = body?.key ?? body?.applicationServerKey ?? body?.data?.key ?? body?.data?.applicationServerKey;
      if (typeof key === "string" && key) return key;
      throw new Error("MudbaseMessaging: application server key response JSON did not contain a `key`.");
    }
    return (await res.text()).trim();
  }

  private async resolveServiceWorkerRegistration(perCall?: ServiceWorkerRegistration): Promise<ServiceWorkerRegistration> {
    const supplied = perCall ?? this.options.serviceWorkerRegistration;
    if (supplied) return supplied;

    const container =
      this.options.serviceWorkerContainer ??
      (getGlobal<Navigator>("navigator")?.serviceWorker as ServiceWorkerContainer | undefined);
    if (!container) {
      throw new Error("MudbaseMessaging: the Service Worker API is not available in this environment.");
    }
    const path = this.options.serviceWorkerPath ?? "/mudbase-messaging-sw.js";
    const registration = await container.register(path);
    // `container.ready` resolves once a registration is active, so the push subscription is
    // made against an installed worker rather than one still installing.
    return (await container.ready) ?? registration;
  }
}
