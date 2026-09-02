# MonitoringPerformanceResponseMetrics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**totalRequests** | **number** |  | [optional] [default to undefined]
**avgResponseTime** | **number** |  | [optional] [default to undefined]
**minResponseTime** | **number** |  | [optional] [default to undefined]
**maxResponseTime** | **number** |  | [optional] [default to undefined]
**errorCount** | **number** |  | [optional] [default to undefined]
**successCount** | **number** |  | [optional] [default to undefined]
**successRate** | **number** |  | [optional] [default to undefined]
**errorRate** | **number** |  | [optional] [default to undefined]
**latencySource** | **string** | usage_stat when filled from UsageStat | [optional] [default to undefined]

## Example

```typescript
import { MonitoringPerformanceResponseMetrics } from 'mudbase-sdk';

const instance: MonitoringPerformanceResponseMetrics = {
    totalRequests,
    avgResponseTime,
    minResponseTime,
    maxResponseTime,
    errorCount,
    successCount,
    successRate,
    errorRate,
    latencySource,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
