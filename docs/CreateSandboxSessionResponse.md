# CreateSandboxSessionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **boolean** |  | [optional] [default to undefined]
**sessionId** | **string** | MongoDB ObjectId of the created session. | [optional] [default to undefined]
**wsUrl** | **string** | WebSocket URL for connecting to the sandbox via the gateway. | [optional] [default to undefined]
**token** | **string** | Short-lived JWT (60 s) for the sandbox gateway WebSocket. | [optional] [default to undefined]
**expiresAt** | **string** | When the token expires. Use /connect-token to refresh. | [optional] [default to undefined]
**language** | **string** |  | [optional] [default to undefined]
**languageVersion** | **string** |  | [optional] [default to undefined]
**timeoutAt** | **string** | When the session will auto-terminate due to inactivity. | [optional] [default to undefined]
**publicUrl** | **string** | Stable HTTPS URL for the session (https://sb-{sessionId}.cells.mudbase.dev). Present when the sandbox image supports public port exposure; null otherwise.  | [optional] [default to undefined]

## Example

```typescript
import { CreateSandboxSessionResponse } from './api';

const instance: CreateSandboxSessionResponse = {
    success,
    sessionId,
    wsUrl,
    token,
    expiresAt,
    language,
    languageVersion,
    timeoutAt,
    publicUrl,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
