# EstimateNonCustodialGasRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chain** | **string** | Chain id. For EVM, transaction is required. For non-EVM (UTXO, Solana, Tron, TON, Cardano) only chain is needed. | [default to undefined]
**transaction** | [**EstimateNonCustodialGasRequestTransaction**](EstimateNonCustodialGasRequestTransaction.md) |  | [optional] [default to undefined]

## Example

```typescript
import { EstimateNonCustodialGasRequest } from 'mudbase-sdk';

const instance: EstimateNonCustodialGasRequest = {
    chain,
    transaction,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
