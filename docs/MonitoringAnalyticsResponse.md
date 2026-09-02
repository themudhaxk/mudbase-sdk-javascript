# MonitoringAnalyticsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**period** | **string** |  | [optional] [default to undefined]
**granularity** | **string** |  | [optional] [default to undefined]
**days** | **number** | Present when rolling window used | [optional] [default to undefined]
**stats** | [**Array&lt;MonitoringAnalyticsResponseStatsInner&gt;**](MonitoringAnalyticsResponseStatsInner.md) |  | [optional] [default to undefined]
**totals** | [**MonitoringAnalyticsResponseTotals**](MonitoringAnalyticsResponseTotals.md) |  | [optional] [default to undefined]

## Example

```typescript
import { MonitoringAnalyticsResponse } from 'mudbase-sdk';

const instance: MonitoringAnalyticsResponse = {
    period,
    granularity,
    days,
    stats,
    totals,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
