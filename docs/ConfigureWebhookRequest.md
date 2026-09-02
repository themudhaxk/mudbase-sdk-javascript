# ConfigureWebhookRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**webhookUrl** | **string** | URL to receive webhook payloads; set to null or omit to disable | [optional] [default to undefined]
**webhookSecret** | **string** | Optional secret for signing payloads (e.g. X-Webhook-Signature) | [optional] [default to undefined]
**webhookEvents** | **Array&lt;string&gt;** | Event types to send (e.g. collection.insert, collection.update) | [optional] [default to undefined]
**webhookVersion** | **string** | Version string for payload format | [optional] [default to undefined]
**transformations** | [**Array&lt;GetWebhookConfig200ResponseDataTransformationsInner&gt;**](GetWebhookConfig200ResponseDataTransformationsInner.md) | Transformation rules to apply to payloads before delivery | [optional] [default to undefined]

## Example

```typescript
import { ConfigureWebhookRequest } from 'mudbase-sdk';

const instance: ConfigureWebhookRequest = {
    webhookUrl,
    webhookSecret,
    webhookEvents,
    webhookVersion,
    transformations,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
