# BroadcastNonCustodialTransactionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chain** | **string** | Blockchain for broadcast (EVM, UTXO, or chain-specific) | [default to undefined]
**signedTx** | **string** | Fully signed transaction (hex string) | [default to undefined]
**fromAddress** | **string** | Address that signed the transaction (must be registered) | [default to undefined]

## Example

```typescript
import { BroadcastNonCustodialTransactionRequest } from 'mudbase-sdk';

const instance: BroadcastNonCustodialTransactionRequest = {
    chain,
    signedTx,
    fromAddress,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
