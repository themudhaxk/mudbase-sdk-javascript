# LoginLocalUser200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **string** |  | [optional] [default to undefined]
**token** | **string** |  | [optional] [default to undefined]
**refreshToken** | **string** |  | [optional] [default to undefined]
**expiresIn** | **number** | Access token TTL in seconds | [optional] [default to undefined]
**user** | [**LoginLocalUser200ResponseUser**](LoginLocalUser200ResponseUser.md) |  | [optional] [default to undefined]

## Example

```typescript
import { LoginLocalUser200Response } from 'mudbase-sdk';

const instance: LoginLocalUser200Response = {
    message,
    token,
    refreshToken,
    expiresIn,
    user,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
