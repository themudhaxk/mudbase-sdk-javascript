# GetSupportedCurrencies200ResponseDataCurrenciesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **string** | Currency symbol (BTC, ETH, MATIC, BNB, etc.) | [optional] [default to undefined]
**name** | **string** | Display name (e.g. Bitcoin, Polygon, Arbitrum One) | [optional] [default to undefined]
**chain** | **string** | Chain id for API use (e.g. ethereum, polygon, arbitrum) | [optional] [default to undefined]
**networks** | **Array&lt;string&gt;** | For USDT only; networks on which USDT is supported (ETH, BSC, TRX, SOL, POLYGON) | [optional] [default to undefined]

## Example

```typescript
import { GetSupportedCurrencies200ResponseDataCurrenciesInner } from 'mudbase-sdk';

const instance: GetSupportedCurrencies200ResponseDataCurrenciesInner = {
    code,
    name,
    chain,
    networks,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
