# UpdateWalletFeeConfigRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **boolean** | Enable or disable project-level fee (for non-custodial fee calculation) | [optional] [default to undefined]
**feePercentage** | **number** | Project fee as decimal (e.g. 0.01 &#x3D; 1%, 0.005 &#x3D; 0.5%) | [optional] [default to undefined]

## Example

```typescript
import { UpdateWalletFeeConfigRequest } from 'mudbase-sdk';

const instance: UpdateWalletFeeConfigRequest = {
    enabled,
    feePercentage,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
