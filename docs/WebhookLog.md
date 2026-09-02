# WebhookLog

One **outbound delivery attempt** (Mudbase HTTP client → your `url`). **`_id`** is what the API calls **`webhookId`** in **`POST /api/webhooks/trigger`** and **`POST /api/webhooks/retry/{webhookId}`**. The string field **`webhookId`** below is an internal correlation id (e.g. `manual-<timestamp>`), not the path parameter for retry. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** | MongoDB id — use as &#x60;webhookId&#x60; path param for retry | [optional] [default to undefined]
**org** | **string** | Organization that owns the project | [optional] [default to undefined]
**project** | **string** | Project id this delivery belongs to | [optional] [default to undefined]
**webhookId** | **string** | Internal correlation string (e.g. manual-173…), not the retry path id | [optional] [default to undefined]
**url** | **string** |  | [optional] [default to undefined]
**method** | **string** |  | [optional] [default to undefined]
**event** | **string** |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**payload** | **object** | JSON body sent to your endpoint | [optional] [default to undefined]
**headers** | **object** | Outbound request headers (e.g. X-MUDBASE-Event, Content-Type) | [optional] [default to undefined]
**response** | [**WebhookLogResponse**](WebhookLogResponse.md) |  | [optional] [default to undefined]
**duration** | **number** | Round-trip time in milliseconds | [optional] [default to undefined]
**attempts** | **number** |  | [optional] [default to undefined]
**maxAttempts** | **number** |  | [optional] [default to undefined]
**error** | **string** |  | [optional] [default to undefined]
**nextRetry** | **string** |  | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]
**updatedAt** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { WebhookLog } from 'mudbase-sdk';

const instance: WebhookLog = {
    _id,
    org,
    project,
    webhookId,
    url,
    method,
    event,
    status,
    payload,
    headers,
    response,
    duration,
    attempts,
    maxAttempts,
    error,
    nextRetry,
    createdAt,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
