/**
 * Messaging push-token helper tests. Uses Node's built-in test runner (node:test) with the
 * browser surfaces (Notification, service worker, PushManager, fetch) injected as fakes, so
 * no real DOM, browser or live server is needed. Run with `npm test` (which builds first so
 * this can import ./dist/messaging.js).
 */
import { test } from "node:test";
import assert from "node:assert/strict";
// Import the CommonJS build, same rationale as realtime.test.mjs: the ESM bundle's
// extensionless relative imports don't resolve under Node's native ESM loader.
import { MudbaseMessaging } from "../dist/messaging.js";

/** A minimal Notification stand-in with a settable permission and a scripted prompt result. */
function makeNotificationApi(permission = "default", promptResult = "granted") {
  return {
    permission,
    async requestPermission() {
      this.permission = promptResult;
      return promptResult;
    },
  };
}

/** A fake PushSubscription whose toJSON matches the real serialized shape. */
function makeSubscription(endpoint = "https://push.example/ep-1") {
  return {
    _unsubscribed: false,
    toJSON() {
      return { endpoint, expirationTime: null, keys: { p256dh: "p256dh-key", auth: "auth-key" } };
    },
    async unsubscribe() {
      this._unsubscribed = true;
      return true;
    },
  };
}

/** A fake ServiceWorkerRegistration with an injectable pushManager. */
function makeRegistration(existing = null) {
  const subscribeCalls = [];
  const registration = {
    pushManager: {
      async getSubscription() {
        return registration._current;
      },
      async subscribe(opts) {
        subscribeCalls.push(opts);
        registration._current = makeSubscription("https://push.example/subscribed");
        return registration._current;
      },
    },
    _current: existing,
    _subscribeCalls: subscribeCalls,
  };
  return registration;
}

/** A fake navigator.serviceWorker container returning a fixed registration. */
function makeSwContainer(registration) {
  const calls = [];
  return {
    _registerCalls: calls,
    async register(path) {
      calls.push(path);
      return registration;
    },
    ready: Promise.resolve(registration),
  };
}

// PushManager must exist as a global for isSupported() to pass; add a stub for the test run.
if (typeof globalThis.PushManager === "undefined") {
  globalThis.PushManager = function PushManager() {};
}

test("isSupported() reflects the injected browser surfaces", () => {
  const supported = MudbaseMessaging.isSupported({
    notificationApi: makeNotificationApi(),
    serviceWorkerContainer: makeSwContainer(makeRegistration()),
  });
  assert.equal(supported, true);

  // Missing the service worker container => not supported.
  assert.equal(MudbaseMessaging.isSupported({ notificationApi: makeNotificationApi() }), false);
});

test("getPermissionState() reports current permission without prompting", () => {
  const notificationApi = makeNotificationApi("default", "granted");
  const m = new MudbaseMessaging({ notificationApi });
  assert.equal(m.getPermissionState(), "default");
  // Reading state must not have flipped permission (no prompt).
  assert.equal(notificationApi.permission, "default");
});

test("requestPermission() prompts only when undecided and returns the result", async () => {
  const notificationApi = makeNotificationApi("default", "granted");
  const m = new MudbaseMessaging({ notificationApi });
  assert.equal(await m.requestPermission(), "granted");

  // Already granted => returns immediately, does not re-run the prompt to something else.
  const already = makeNotificationApi("granted", "denied");
  const m2 = new MudbaseMessaging({ notificationApi: already });
  assert.equal(await m2.requestPermission(), "granted");
});

test("getPushToken() subscribes with the application server key and returns a registerDeviceToken-ready token", async () => {
  const registration = makeRegistration();
  const m = new MudbaseMessaging({
    notificationApi: makeNotificationApi("granted", "granted"),
    serviceWorkerContainer: makeSwContainer(registration),
    applicationServerKey: "BClient_test_key_base64url",
  });

  const pushToken = await m.getPushToken();
  assert.equal(pushToken.platform, "web");
  assert.equal(registration._subscribeCalls.length, 1);
  assert.equal(registration._subscribeCalls[0].userVisibleOnly, true);
  assert.ok(registration._subscribeCalls[0].applicationServerKey instanceof Uint8Array);

  const parsed = JSON.parse(pushToken.token);
  assert.equal(parsed.endpoint, "https://push.example/subscribed");
  assert.deepEqual(pushToken.subscription.keys, { p256dh: "p256dh-key", auth: "auth-key" });
});

test("getPushToken() reuses an existing subscription instead of re-subscribing", async () => {
  const registration = makeRegistration(makeSubscription("https://push.example/existing"));
  const m = new MudbaseMessaging({
    notificationApi: makeNotificationApi("granted", "granted"),
    serviceWorkerContainer: makeSwContainer(registration),
    applicationServerKey: "BClient_test_key_base64url",
  });

  const pushToken = await m.getPushToken();
  assert.equal(registration._subscribeCalls.length, 0, "must not create a second subscription");
  assert.equal(JSON.parse(pushToken.token).endpoint, "https://push.example/existing");
});

test("getPushToken() throws when permission is not granted", async () => {
  const m = new MudbaseMessaging({
    notificationApi: makeNotificationApi("denied", "denied"),
    serviceWorkerContainer: makeSwContainer(makeRegistration()),
    applicationServerKey: "BClient_test_key_base64url",
  });
  await assert.rejects(() => m.getPushToken(), /permission was not granted/);
});

test("getPushToken() throws a clear error when no application server key is available", async () => {
  const m = new MudbaseMessaging({
    notificationApi: makeNotificationApi("granted", "granted"),
    serviceWorkerContainer: makeSwContainer(makeRegistration()),
    // no applicationServerKey / url / getter
  });
  await assert.rejects(() => m.getPushToken(), /application server key/);
});

test("application server key is fetched from applicationServerKeyUrl (JSON `key`)", async () => {
  const registration = makeRegistration();
  const fetchCalls = [];
  const fetchFn = async (url) => {
    fetchCalls.push(url);
    return {
      ok: true,
      status: 200,
      headers: { get: () => "application/json" },
      async json() {
        return { key: "BFetched_key_base64url" };
      },
    };
  };
  const m = new MudbaseMessaging({
    notificationApi: makeNotificationApi("granted", "granted"),
    serviceWorkerContainer: makeSwContainer(registration),
    applicationServerKeyUrl: "https://cloud.example.dev/web-push/key",
    fetchFn,
  });

  const pushToken = await m.getPushToken();
  assert.deepEqual(fetchCalls, ["https://cloud.example.dev/web-push/key"]);
  assert.equal(pushToken.platform, "web");
  assert.ok(registration._subscribeCalls[0].applicationServerKey instanceof Uint8Array);
});

test("deletePushToken() unsubscribes and returns the removed token, or null when none", async () => {
  const existing = makeSubscription("https://push.example/to-remove");
  const registration = makeRegistration(existing);
  const m = new MudbaseMessaging({
    notificationApi: makeNotificationApi("granted", "granted"),
    serviceWorkerContainer: makeSwContainer(registration),
    applicationServerKey: "BClient_test_key_base64url",
  });

  const removed = await m.deletePushToken();
  assert.equal(JSON.parse(removed).endpoint, "https://push.example/to-remove");
  assert.equal(existing._unsubscribed, true);

  // With no active subscription, returns null.
  const empty = new MudbaseMessaging({
    notificationApi: makeNotificationApi("granted", "granted"),
    serviceWorkerContainer: makeSwContainer(makeRegistration()),
  });
  assert.equal(await empty.deletePushToken(), null);
});
