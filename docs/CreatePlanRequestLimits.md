# CreatePlanRequestLimits

Plan caps; null or omitted fields mean unlimited where applicable.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apiCalls** | **number** |  | [optional] [default to undefined]
**storage** | **number** |  | [optional] [default to undefined]
**bandwidth** | **number** |  | [optional] [default to undefined]
**users** | **number** |  | [optional] [default to undefined]
**customLimits** | [**Array&lt;CreatePlanRequestLimitsCustomLimitsInner&gt;**](CreatePlanRequestLimitsCustomLimitsInner.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CreatePlanRequestLimits } from 'mudbase-sdk';

const instance: CreatePlanRequestLimits = {
    apiCalls,
    storage,
    bandwidth,
    users,
    customLimits,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
