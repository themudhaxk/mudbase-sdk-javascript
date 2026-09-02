# RegisterNonCustodialAddressRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **string** | Public wallet address | [default to undefined]
**chain** | **string** | Blockchain network (EVM, UTXO, or chain-specific). Use bsc or binance for BNB Smart Chain; avalanche for Avalanche C-Chain. | [default to undefined]
**derivationPath** | **string** | HD wallet derivation path (metadata only) | [optional] [default to undefined]
**label** | **string** | Optional label for the address | [optional] [default to undefined]
**projectId** | **string** | Optional project ID | [optional] [default to undefined]

## Example

```typescript
import { RegisterNonCustodialAddressRequest } from 'mudbase-sdk';

const instance: RegisterNonCustodialAddressRequest = {
    address,
    chain,
    derivationPath,
    label,
    projectId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
