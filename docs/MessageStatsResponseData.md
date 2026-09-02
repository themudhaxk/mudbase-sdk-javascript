# MessageStatsResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**totalMessages** | **number** |  | [optional] [default to undefined]
**byType** | [**MessageStatsResponseDataByType**](MessageStatsResponseDataByType.md) |  | [optional] [default to undefined]
**byStatus** | [**MessageStatsResponseDataByStatus**](MessageStatsResponseDataByStatus.md) |  | [optional] [default to undefined]
**successRate** | **number** |  | [optional] [default to undefined]
**period** | [**MessageStatsResponseDataPeriod**](MessageStatsResponseDataPeriod.md) |  | [optional] [default to undefined]

## Example

```typescript
import { MessageStatsResponseData } from 'mudbase-sdk';

const instance: MessageStatsResponseData = {
    totalMessages,
    byType,
    byStatus,
    successRate,
    period,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
