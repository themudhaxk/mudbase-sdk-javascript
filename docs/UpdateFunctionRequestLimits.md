# UpdateFunctionRequestLimits


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timeout** | **number** | Max execution time in ms (default 30000) | [optional] [default to undefined]
**maxPayloadSize** | **number** | Max payload size in bytes (default 1MB) | [optional] [default to undefined]
**maxExecutionsPerMinute** | **number** |  | [optional] [default to undefined]
**maxExecutionsPerHour** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { UpdateFunctionRequestLimits } from 'mudbase-sdk';

const instance: UpdateFunctionRequestLimits = {
    timeout,
    maxPayloadSize,
    maxExecutionsPerMinute,
    maxExecutionsPerHour,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
