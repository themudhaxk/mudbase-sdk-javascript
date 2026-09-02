# GetWebhookConfig200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**webhookUrl** | **string** |  | [optional] [default to undefined]
**webhookEvents** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**webhookVersion** | **string** |  | [optional] [default to undefined]
**transformations** | [**Array&lt;GetWebhookConfig200ResponseDataTransformationsInner&gt;**](GetWebhookConfig200ResponseDataTransformationsInner.md) | Transformation rules applied to payloads | [optional] [default to undefined]
**hasSecret** | **boolean** | Whether a webhook secret is configured (value not returned) | [optional] [default to undefined]

## Example

```typescript
import { GetWebhookConfig200ResponseData } from 'mudbase-sdk';

const instance: GetWebhookConfig200ResponseData = {
    webhookUrl,
    webhookEvents,
    webhookVersion,
    transformations,
    hasSecret,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
