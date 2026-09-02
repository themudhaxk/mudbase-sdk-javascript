# WalletTransactionTokenTransfersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tokenAddress** | **string** |  | [optional] [default to undefined]
**from** | **string** |  | [optional] [default to undefined]
**to** | **string** |  | [optional] [default to undefined]
**value** | **string** | Raw token units (string to preserve precision) | [optional] [default to undefined]
**formattedAmount** | **string** | Human-readable token amount (units) | [optional] [default to undefined]
**tokenSymbol** | **string** |  | [optional] [default to undefined]
**tokenDecimals** | **number** |  | [optional] [default to undefined]
**isIncoming** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { WalletTransactionTokenTransfersInner } from 'mudbase-sdk';

const instance: WalletTransactionTokenTransfersInner = {
    tokenAddress,
    from,
    to,
    value,
    formattedAmount,
    tokenSymbol,
    tokenDecimals,
    isIncoming,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
