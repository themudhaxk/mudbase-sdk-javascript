# CalculateWalletFee200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **string** | Request currency / native currency for the chain | [optional] [default to undefined]
**network** | **string** |  | [optional] [default to undefined]
**amount** | **number** |  | [optional] [default to undefined]
**chain** | **string** | Chain id used for estimation | [optional] [default to undefined]
**networkFee** | **string** | Human-readable network fee from blockchain | [optional] [default to undefined]
**estimatedTime** | **string** |  | [optional] [default to undefined]
**congestion** | **string** | Network congestion level (EVM from gas price; UTXO from sat/vB) | [optional] [default to undefined]
**gasLimit** | **string** | (EVM only) Gas limit | [optional] [default to undefined]
**gasPrice** | **string** | (EVM only) Gas price in wei | [optional] [default to undefined]
**gasPriceGwei** | **number** | (EVM only) Gas price in Gwei | [optional] [default to undefined]
**estimatedCost** | **string** | (EVM only) Cost in wei | [optional] [default to undefined]
**satPerVb** | **number** | (UTXO only) Satoshis per vbyte | [optional] [default to undefined]
**feeSat** | **number** | (UTXO only) Fee in satoshis | [optional] [default to undefined]
**lamports** | **number** | (Solana only) Fee in lamports | [optional] [default to undefined]
**feeTiers** | [**{ [key: string]: CalculateWalletFee200ResponseDataFeeTiersValue; }**](CalculateWalletFee200ResponseDataFeeTiersValue.md) | (EVM only) slow / normal / fast tiers; each has gasPriceGwei, networkFee | [optional] [default to undefined]
**gasSpikeWarning** | **boolean** | True when current gas is ≥5× chain minimum (consider warning user) | [optional] [default to undefined]

## Example

```typescript
import { CalculateWalletFee200ResponseData } from 'mudbase-sdk';

const instance: CalculateWalletFee200ResponseData = {
    currency,
    network,
    amount,
    chain,
    networkFee,
    estimatedTime,
    congestion,
    gasLimit,
    gasPrice,
    gasPriceGwei,
    estimatedCost,
    satPerVb,
    feeSat,
    lamports,
    feeTiers,
    gasSpikeWarning,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
