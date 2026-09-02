# WebhookStatsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**statusStats** | [**Array&lt;WebhookStatsResponseStatusStatsInner&gt;**](WebhookStatsResponseStatusStatsInner.md) | Grouped by delivery status | [default to undefined]
**eventStats** | [**Array&lt;WebhookStatsResponseEventStatsInner&gt;**](WebhookStatsResponseEventStatsInner.md) | Grouped by event name | [default to undefined]
**period** | **string** |  | [default to undefined]

## Example

```typescript
import { WebhookStatsResponse } from 'mudbase-sdk';

const instance: WebhookStatsResponse = {
    statusStats,
    eventStats,
    period,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
