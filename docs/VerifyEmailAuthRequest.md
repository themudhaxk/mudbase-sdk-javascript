# VerifyEmailAuthRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token** | **string** | Verification token from the email link | [default to undefined]
**projectId** | **string** | Optional; for project signup context (redirect hint) | [optional] [default to undefined]

## Example

```typescript
import { VerifyEmailAuthRequest } from 'mudbase-sdk';

const instance: VerifyEmailAuthRequest = {
    token,
    projectId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
