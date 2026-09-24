# GetSandboxConnectToken200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **boolean** |  | [optional] [default to undefined]
**token** | **string** | Short-lived JWT (60 s) for the sandbox gateway. | [optional] [default to undefined]
**wsUrl** | **string** | WebSocket URL for this session. | [optional] [default to undefined]
**expiresAt** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { GetSandboxConnectToken200Response } from './api';

const instance: GetSandboxConnectToken200Response = {
    success,
    token,
    wsUrl,
    expiresAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
