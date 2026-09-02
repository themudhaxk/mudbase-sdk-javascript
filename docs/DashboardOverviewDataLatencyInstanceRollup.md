# DashboardOverviewDataLatencyInstanceRollup

In-process p50/p95/p99 for this Node instance (ephemeral; multi-pod differs per replica)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scope** | **string** |  | [optional] [default to undefined]
**p50Ms** | **number** |  | [optional] [default to undefined]
**p95Ms** | **number** |  | [optional] [default to undefined]
**p99Ms** | **number** |  | [optional] [default to undefined]
**meanMs** | **number** |  | [optional] [default to undefined]
**samplesApprox** | **number** |  | [optional] [default to undefined]
**templatesTracked** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { DashboardOverviewDataLatencyInstanceRollup } from 'mudbase-sdk';

const instance: DashboardOverviewDataLatencyInstanceRollup = {
    scope,
    p50Ms,
    p95Ms,
    p99Ms,
    meanMs,
    samplesApprox,
    templatesTracked,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
