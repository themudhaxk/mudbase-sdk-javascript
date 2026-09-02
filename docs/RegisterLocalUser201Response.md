# RegisterLocalUser201Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **string** |  | [optional] [default to undefined]
**requireVerification** | **boolean** | true when email verification is required; no token in response | [optional] [default to undefined]
**token** | **string** | Present only when requireEmailVerification is false | [optional] [default to undefined]
**refreshToken** | **string** | Present only when requireEmailVerification is false | [optional] [default to undefined]
**expiresIn** | **number** | Present only when token is returned | [optional] [default to undefined]
**user** | [**RegisterLocalUser201ResponseUser**](RegisterLocalUser201ResponseUser.md) |  | [optional] [default to undefined]

## Example

```typescript
import { RegisterLocalUser201Response } from 'mudbase-sdk';

const instance: RegisterLocalUser201Response = {
    message,
    requireVerification,
    token,
    refreshToken,
    expiresIn,
    user,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
