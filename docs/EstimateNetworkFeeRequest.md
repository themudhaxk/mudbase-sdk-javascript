# EstimateNetworkFeeRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **string** | Currency code | [default to undefined]
**amount** | **number** | Transaction amount (used for display; fee is chain-based) | [default to undefined]
**network** | **string** | Required for USDT; network on which USDT is sent | [optional] [default to undefined]

## Example

```typescript
import { EstimateNetworkFeeRequest } from 'mudbase-sdk';

const instance: EstimateNetworkFeeRequest = {
    currency,
    amount,
    network,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
