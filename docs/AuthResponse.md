# AuthResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **string** |  | [optional] [default to undefined]
**token** | **string** | JWT access token (use in Authorization Bearer header) | [optional] [default to undefined]
**refreshToken** | **string** | JWT refresh token (use with POST /api/auth/refresh to get new token pair) | [optional] [default to undefined]
**expiresIn** | **number** | Access token TTL in seconds (e.g. 1800 for 30 minutes) | [optional] [default to undefined]
**user** | [**User**](User.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AuthResponse } from 'mudbase-sdk';

const instance: AuthResponse = {
    message,
    token,
    refreshToken,
    expiresIn,
    user,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
