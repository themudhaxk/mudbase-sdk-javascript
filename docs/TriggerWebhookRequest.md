# TriggerWebhookRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**projectId** | **string** | Target project (must belong to your org) | [default to undefined]
**url** | **string** | HTTPS URL validated against SSRF rules | [default to undefined]
**event** | **string** | Event name (sent as X-MUDBASE-Event) | [default to undefined]
**payload** | **object** | JSON body POSTed to your endpoint | [default to undefined]
**method** | **string** |  | [optional] [default to MethodEnum_Post]

## Example

```typescript
import { TriggerWebhookRequest } from 'mudbase-sdk';

const instance: TriggerWebhookRequest = {
    projectId,
    url,
    event,
    payload,
    method,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
