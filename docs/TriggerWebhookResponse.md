# TriggerWebhookResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **string** |  | [default to undefined]
**webhookId** | **string** | WebhookLog._id for this delivery; use in POST /api/webhooks/retry/{webhookId} | [default to undefined]

## Example

```typescript
import { TriggerWebhookResponse } from 'mudbase-sdk';

const instance: TriggerWebhookResponse = {
    message,
    webhookId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
