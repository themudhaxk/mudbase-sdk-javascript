# AdminOrgBillingContractPatchRequest

At least one contract field required (excluding reason alone).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contractAmountCents** | **number** |  | [optional] [default to undefined]
**contractCurrency** | **string** |  | [optional] [default to undefined]
**contractBillingInterval** | **string** |  | [optional] [default to undefined]
**contractEffectiveFrom** | **string** |  | [optional] [default to undefined]
**contractNotes** | **string** |  | [optional] [default to undefined]
**reason** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { AdminOrgBillingContractPatchRequest } from 'mudbase-sdk';

const instance: AdminOrgBillingContractPatchRequest = {
    contractAmountCents,
    contractCurrency,
    contractBillingInterval,
    contractEffectiveFrom,
    contractNotes,
    reason,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
