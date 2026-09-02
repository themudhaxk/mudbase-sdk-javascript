# UsageStatsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**usage** | [**Usage**](Usage.md) |  | [optional] [default to undefined]
**limits** | [**Limits**](Limits.md) |  | [optional] [default to undefined]
**plan** | [**Plan**](Plan.md) |  | [optional] [default to undefined]
**period** | **string** |  | [optional] [default to undefined]
**percentages** | [**UsageStatsResponsePercentages**](UsageStatsResponsePercentages.md) |  | [optional] [default to undefined]

## Example

```typescript
import { UsageStatsResponse } from 'mudbase-sdk';

const instance: UsageStatsResponse = {
    usage,
    limits,
    plan,
    period,
    percentages,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
