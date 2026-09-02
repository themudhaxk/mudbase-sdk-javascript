# DashboardOverviewDataRequests


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**today** | **number** | Billing trackApiCall count (UTC day) | [optional] [default to undefined]
**yesterday** | **number** |  | [optional] [default to undefined]
**latencyTrackedToday** | **number** | UsageStat latencyCount for this project (middleware-metered responses) | [optional] [default to undefined]
**latencyTrackedYesterday** | **number** |  | [optional] [default to undefined]
**meteringNote** | **string** |  | [optional] [default to undefined]
**changePct** | **number** |  | [optional] [default to undefined]
**direction** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { DashboardOverviewDataRequests } from 'mudbase-sdk';

const instance: DashboardOverviewDataRequests = {
    today,
    yesterday,
    latencyTrackedToday,
    latencyTrackedYesterday,
    meteringNote,
    changePct,
    direction,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
