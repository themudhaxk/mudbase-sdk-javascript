# DashboardOverviewData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**project** | [**DashboardOverviewDataProject**](DashboardOverviewDataProject.md) |  | [optional] [default to undefined]
**requests** | [**DashboardOverviewDataRequests**](DashboardOverviewDataRequests.md) |  | [optional] [default to undefined]
**activeUsers** | [**DashboardOverviewDataActiveUsers**](DashboardOverviewDataActiveUsers.md) |  | [optional] [default to undefined]
**latency** | [**DashboardOverviewDataLatency**](DashboardOverviewDataLatency.md) |  | [optional] [default to undefined]
**uptime** | [**DashboardOverviewDataUptime**](DashboardOverviewDataUptime.md) |  | [optional] [default to undefined]
**requestVolume14d** | [**Array&lt;DashboardOverviewDataRequestVolume14dInner&gt;**](DashboardOverviewDataRequestVolume14dInner.md) |  | [optional] [default to undefined]
**recentActivity** | [**Array&lt;DashboardActivityItem&gt;**](DashboardActivityItem.md) |  | [optional] [default to undefined]
**generatedAt** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { DashboardOverviewData } from 'mudbase-sdk';

const instance: DashboardOverviewData = {
    project,
    requests,
    activeUsers,
    latency,
    uptime,
    requestVolume14d,
    recentActivity,
    generatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
