# DashboardOverviewDataLatency

Per-project weighted mean latency from UsageStat for routes in openapi-docs.yaml (customer/project API only).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scope** | **string** |  | [optional] [default to undefined]
**avgMsToday** | **number** |  | [optional] [default to undefined]
**avgMs7d** | **number** |  | [optional] [default to undefined]
**latencySamplesToday** | **number** | Count of openapi-docs–scoped latency samples for this project (UTC today) | [optional] [default to undefined]
**latencyNeedsTraffic** | **boolean** |  | [optional] [default to undefined]
**interpretation** | **string** | Why mean can differ from typical latency; points to latency-insights | [optional] [default to undefined]
**instanceRollup** | [**DashboardOverviewDataLatencyInstanceRollup**](DashboardOverviewDataLatencyInstanceRollup.md) |  | [optional] [default to undefined]
**topRoutesByImpactHint** | [**Array&lt;DashboardOverviewDataLatencyTopRoutesByImpactHintInner&gt;**](DashboardOverviewDataLatencyTopRoutesByImpactHintInner.md) | Top route templates by impact score on this instance (debugging hint) | [optional] [default to undefined]

## Example

```typescript
import { DashboardOverviewDataLatency } from 'mudbase-sdk';

const instance: DashboardOverviewDataLatency = {
    scope,
    avgMsToday,
    avgMs7d,
    latencySamplesToday,
    latencyNeedsTraffic,
    interpretation,
    instanceRollup,
    topRoutesByImpactHint,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
