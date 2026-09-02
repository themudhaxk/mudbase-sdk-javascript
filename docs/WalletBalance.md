# WalletBalance


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **string** |  | [optional] [default to undefined]
**chain** | **string** |  | [optional] [default to undefined]
**confirmed** | **string** | Confirmed balance (string to handle large numbers) | [optional] [default to undefined]
**unconfirmed** | **string** | Unconfirmed balance (string to handle large numbers) | [optional] [default to undefined]
**total** | **string** | Total balance (string to handle large numbers) | [optional] [default to undefined]
**currency** | **string** |  | [optional] [default to undefined]
**lastUpdated** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { WalletBalance } from 'mudbase-sdk';

const instance: WalletBalance = {
    address,
    chain,
    confirmed,
    unconfirmed,
    total,
    currency,
    lastUpdated,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
