# CreateWalletWebhookRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **string** |  | [default to undefined]
**events** | **Array&lt;string&gt;** |  | [default to undefined]
**secret** | **string** | Optional webhook secret for HMAC signing | [optional] [default to undefined]
**filters** | [**CreateWalletWebhookRequestFilters**](CreateWalletWebhookRequestFilters.md) |  | [optional] [default to undefined]
**projectId** | **string** | Optional project ID | [optional] [default to undefined]

## Example

```typescript
import { CreateWalletWebhookRequest } from 'mudbase-sdk';

const instance: CreateWalletWebhookRequest = {
    url,
    events,
    secret,
    filters,
    projectId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
