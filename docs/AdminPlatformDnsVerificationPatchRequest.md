# AdminPlatformDnsVerificationPatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recordType** | **string** |  | [optional] [default to undefined]
**recordName** | **string** |  | [default to undefined]
**recordValue** | **string** |  | [default to undefined]
**ttlSeconds** | **number** |  | [optional] [default to undefined]
**staffNote** | **string** |  | [optional] [default to undefined]
**resetCustomerPlatformDnsSubmission** | **boolean** |  | [optional] [default to undefined]
**notifyOrg** | **boolean** | When not false (default), email org billing contact with step-3 DNS instructions after save. | [optional] [default to undefined]

## Example

```typescript
import { AdminPlatformDnsVerificationPatchRequest } from 'mudbase-sdk';

const instance: AdminPlatformDnsVerificationPatchRequest = {
    recordType,
    recordName,
    recordValue,
    ttlSeconds,
    staffNote,
    resetCustomerPlatformDnsSubmission,
    notifyOrg,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
