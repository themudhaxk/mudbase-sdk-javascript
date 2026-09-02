# ApiGdprErasePostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confirm** | **string** | Must equal \&quot;DELETE\&quot; to proceed with erasure. | [default to undefined]
**currentPassword** | **string** | Required unless the account has no password set (OAuth-only) | [optional] [default to undefined]
**totpToken** | **string** | Required only if the account has 2FA enabled | [optional] [default to undefined]

## Example

```typescript
import { ApiGdprErasePostRequest } from 'mudbase-sdk';

const instance: ApiGdprErasePostRequest = {
    confirm,
    currentPassword,
    totpToken,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
