# EstimateNetworkFee200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **boolean** |  | [optional] [default to undefined]
**data** | **object** | Same shape as POST /api/wallet/calculate-fee response (chain, networkFee, estimatedTime, currency, and chain-specific fields). | [optional] [default to undefined]

## Example

```typescript
import { EstimateNetworkFee200Response } from 'mudbase-sdk';

const instance: EstimateNetworkFee200Response = {
    success,
    data,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
