# EstimateNonCustodialGas200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chain** | **string** | Chain id (e.g. bsc, ethereum, bitcoin) | [optional] [default to undefined]
**gasLimit** | **string** | (EVM only) Estimated gas limit from RPC eth_estimateGas | [optional] [default to undefined]
**gasPrice** | **string** | (EVM only) Gas price in wei | [optional] [default to undefined]
**gasPriceGwei** | **number** | (EVM only) Gas price in Gwei | [optional] [default to undefined]
**estimatedCost** | **string** | (EVM only) Total cost in wei (gasLimit * gasPrice) | [optional] [default to undefined]
**networkFee** | **string** | Human-readable network fee from blockchain (e.g. \&quot;0.00063 ETH\&quot;, \&quot;0.00001 BTC\&quot;) | [optional] [default to undefined]
**estimatedTime** | **string** | Estimated confirmation time when available | [optional] [default to undefined]
**currency** | **string** | Native currency for the chain (ETH, BNB, MATIC, BTC, SOL, TRX, etc.) | [optional] [default to undefined]
**satPerVb** | **number** | (UTXO only) Satoshis per virtual byte | [optional] [default to undefined]
**feeSat** | **number** | (UTXO only) Estimated fee in satoshis | [optional] [default to undefined]
**lamports** | **number** | (Solana only) Fee in lamports | [optional] [default to undefined]

## Example

```typescript
import { EstimateNonCustodialGas200ResponseData } from 'mudbase-sdk';

const instance: EstimateNonCustodialGas200ResponseData = {
    chain,
    gasLimit,
    gasPrice,
    gasPriceGwei,
    estimatedCost,
    networkFee,
    estimatedTime,
    currency,
    satPerVb,
    feeSat,
    lamports,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
