# WithdrawRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**toAddress** | **string** | Recipient address (chain-specific format). | [default to undefined]
**amount** | **number** | Amount to send (numeric; currency from wallet). | [default to undefined]
**network** | **string** | For USDT wallets only; ETH, BSC, TRX, SOL, or POLYGON. | [optional] [default to undefined]
**_options** | **object** |  | [optional] [default to undefined]

## Example

```typescript
import { WithdrawRequest } from 'mudbase-sdk';

const instance: WithdrawRequest = {
    toAddress,
    amount,
    network,
    _options,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
