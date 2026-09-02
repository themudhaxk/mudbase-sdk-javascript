# ApiKycWebhookConfigPut200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**webhookUrl** | **string** |  | [optional] [default to undefined]
**secretSet** | **boolean** |  | [optional] [default to undefined]
**webhookSecret** | **string** | Only present when generateSecret was true. | [optional] [default to undefined]

## Example

```typescript
import { ApiKycWebhookConfigPut200Response } from 'mudbase-sdk';

const instance: ApiKycWebhookConfigPut200Response = {
    webhookUrl,
    secretSet,
    webhookSecret,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
