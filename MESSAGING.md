# Mudbase Messaging - push token helper (JS/TS)

A first-party, provider-agnostic way to ask the user for notification permission and acquire a
browser push token, then register it with Mudbase - without wiring up any third-party push SDK
or config in your app. The token drops straight into `registerDeviceToken`.

```bash
npm install mudbase-sdk
```

Nothing else to install: the helper is built on the browser's standard Notifications, Service
Worker and Push APIs (native Web Push with a VAPID application server key served by Mudbase).

## Quick start

```ts
import { MudbaseMessaging, MessagingApi, Configuration } from "mudbase-sdk";

const messaging = new MudbaseMessaging({
  // Mudbase serves your project's Web Push application server key:
  applicationServerKeyUrl:
    "https://cloud.mudbase.dev/api/messaging/projects/<projectId>/messaging/web-push/key",
});

if (!messaging.isSupported()) {
  // Fall back to in-app messaging on browsers without push support.
}

const permission = await messaging.requestPermission();
if (permission === "granted") {
  const pushToken = await messaging.getPushToken();

  const api = new MessagingApi(new Configuration({ accessToken: mudbaseJwt }));
  await api.registerDeviceToken({
    projectId: "<projectId>",
    deviceRegisterRequest: { token: pushToken.token, platform: pushToken.platform },
  });
}
```

To stop receiving push on this device:

```ts
const removed = await messaging.deletePushToken();
if (removed) {
  await api.unregisterDeviceToken({
    projectId: "<projectId>",
    deviceUnregisterRequest: { token: removed },
  });
}
```

## API

### `new MudbaseMessaging(options)`

| Option | Type | Notes |
|---|---|---|
| `applicationServerKey` | `string` | The Web Push application server key (base64url). Prefer sourcing it from Mudbase over hardcoding. |
| `getApplicationServerKey` | `() => string \| Promise<string>` | Return the key from your own code. |
| `applicationServerKeyUrl` | `string` | A Mudbase endpoint the helper fetches the key from (raw string or JSON `{ key }`). |
| `serviceWorkerPath` | `string` | Script to register when you don't pass your own registration. Default `"/mudbase-messaging-sw.js"`. |
| `serviceWorkerRegistration` | `ServiceWorkerRegistration` | Reuse a service worker your app already registered. |
| `notificationApi`, `serviceWorkerContainer`, `fetchFn` | - | Injection seams for testing / SSR. |

### Methods

- `isSupported(): boolean` - true when Notifications, Service Worker and Push are all available. Also a static: `MudbaseMessaging.isSupported()`.
- `getPermissionState(): "granted" | "denied" | "default"` - current permission, without prompting.
- `requestPermission(): Promise<...>` - prompt the user (no-op if already decided) and resolve with the result.
- `getPushToken(options?): Promise<MudbasePushToken>` - ensure permission, subscribe via the Push API, and return `{ token, platform: "web", subscription }` ready for `registerDeviceToken`.
- `deletePushToken(options?): Promise<string | null>` - unsubscribe this browser and return the removed token (for `unregisterDeviceToken`), or `null` if there was none.

`MudbasePushToken.token` is an opaque string. For the browser it is the serialized native Web
Push subscription (endpoint + keys). Pass it verbatim as `DeviceRegisterRequest.token`.

## Service worker

Native Web Push delivers to a service worker. Ship a small worker at `serviceWorkerPath` (default
`/mudbase-messaging-sw.js`) that turns a push into a notification, for example:

```js
self.addEventListener("push", (event) => {
  const payload = event.data ? event.data.json() : {};
  event.waitUntil(
    self.registration.showNotification(payload.title || "Notification", {
      body: payload.body,
      icon: payload.icon,
      data: payload.data,
    }),
  );
});
```

If your app already registers its own worker, pass it as `serviceWorkerRegistration` and the
helper will subscribe against it instead of registering its own.

## Status and requirements

- `isSupported()`, `getPermissionState()` and `requestPermission()` are complete and work today.
- `getPushToken()` performs the full standard Web Push subscription. Delivering pushes to that
  subscription additionally requires the Mudbase project to have **web push enabled server-side**
  (so an application server key is served and pushes are delivered over the Web Push protocol).
  Until a project is served an application server key, `getPushToken()` throws a clear error
  rather than returning a token that cannot be delivered - point `applicationServerKeyUrl` at
  your project's key endpoint once web push is enabled for it.

This helper never references, imports, or exposes any underlying push service. The browser
subscribes directly to the Mudbase-served application server key.
