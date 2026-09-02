# WalletWebhook


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** |  | [optional] [default to undefined]
**url** | **string** |  | [optional] [default to undefined]
**events** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**filters** | [**WalletWebhookFilters**](WalletWebhookFilters.md) |  | [optional] [default to undefined]
**isActive** | **boolean** |  | [optional] [default to undefined]
**stats** | [**WalletWebhookStats**](WalletWebhookStats.md) |  | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]
**updatedAt** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { WalletWebhook } from 'mudbase-sdk';

const instance: WalletWebhook = {
    _id,
    url,
    events,
    filters,
    isActive,
    stats,
    createdAt,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
