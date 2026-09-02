# VerifiedRoleUpgradeRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**targetRole** | **string** |  | [default to undefined]
**paymentIntentId** | **string** | Payment intent ID from payment provider | [optional] [default to undefined]
**verificationId** | **string** | KYC verification ID (if required) | [optional] [default to undefined]

## Example

```typescript
import { VerifiedRoleUpgradeRequest } from 'mudbase-sdk';

const instance: VerifiedRoleUpgradeRequest = {
    targetRole,
    paymentIntentId,
    verificationId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
