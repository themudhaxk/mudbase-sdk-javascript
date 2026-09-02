# RefreshToken200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **string** |  | [optional] [default to undefined]
**token** | **string** | New JWT access token | [optional] [default to undefined]
**refreshToken** | **string** | New refresh token (store and use for next refresh) | [optional] [default to undefined]
**expiresIn** | **number** | Access token TTL in seconds | [optional] [default to undefined]

## Example

```typescript
import { RefreshToken200Response } from 'mudbase-sdk';

const instance: RefreshToken200Response = {
    message,
    token,
    refreshToken,
    expiresIn,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
