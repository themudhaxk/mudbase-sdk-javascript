# RegisterWithRole201Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **string** |  | [optional] [default to undefined]
**requireVerification** | **boolean** | True when the project requires email verification before a session is issued - no token is returned in that case. | [optional] [default to undefined]
**token** | **string** | JWT access token. Absent when requireVerification is true. | [optional] [default to undefined]
**refreshToken** | **string** | JWT refresh token. Absent when requireVerification is true. | [optional] [default to undefined]
**expiresIn** | **number** | Access token TTL in seconds. Absent when requireVerification is true. | [optional] [default to undefined]
**user** | [**RegisterWithRole201ResponseUser**](RegisterWithRole201ResponseUser.md) |  | [optional] [default to undefined]
**role** | [**RegisterWithRole201ResponseRole**](RegisterWithRole201ResponseRole.md) |  | [optional] [default to undefined]

## Example

```typescript
import { RegisterWithRole201Response } from 'mudbase-sdk';

const instance: RegisterWithRole201Response = {
    message,
    requireVerification,
    token,
    refreshToken,
    expiresIn,
    user,
    role,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
