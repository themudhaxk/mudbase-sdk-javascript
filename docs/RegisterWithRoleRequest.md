# RegisterWithRoleRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **string** |  | [default to undefined]
**password** | **string** |  | [default to undefined]
**firstName** | **string** |  | [default to undefined]
**lastName** | **string** |  | [default to undefined]
**projectId** | **string** |  | [default to undefined]
**agreedToTerms** | **boolean** | Must be &#x60;true&#x60; - the server rejects the request otherwise. Required to stop a direct API call from creating an account without accepting the Terms of Service and Privacy Policy. | [default to undefined]

## Example

```typescript
import { RegisterWithRoleRequest } from 'mudbase-sdk';

const instance: RegisterWithRoleRequest = {
    email,
    password,
    firstName,
    lastName,
    projectId,
    agreedToTerms,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
