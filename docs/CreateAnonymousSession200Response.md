# CreateAnonymousSession200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **string** |  | [optional] [default to undefined]
**token** | **string** |  | [optional] [default to undefined]
**refreshToken** | **string** | Refresh token for POST /api/auth/refresh | [optional] [default to undefined]
**expiresIn** | **number** |  | [optional] [default to undefined]
**user** | [**CreateAnonymousSession200ResponseUser**](CreateAnonymousSession200ResponseUser.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CreateAnonymousSession200Response } from 'mudbase-sdk';

const instance: CreateAnonymousSession200Response = {
    message,
    token,
    refreshToken,
    expiresIn,
    user,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
