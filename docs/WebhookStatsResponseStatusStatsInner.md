# WebhookStatsResponseStatusStatsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** | Status key (pending, success, failed, retrying) | [optional] [default to undefined]
**count** | **number** |  | [optional] [default to undefined]
**avgDuration** | **number** | Average duration in ms for that status bucket | [optional] [default to undefined]

## Example

```typescript
import { WebhookStatsResponseStatusStatsInner } from 'mudbase-sdk';

const instance: WebhookStatsResponseStatusStatsInner = {
    _id,
    count,
    avgDuration,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
