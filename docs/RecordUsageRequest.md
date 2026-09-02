# RecordUsageRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **string** | Customer email | [default to undefined]
**metric** | **string** | Usage metric name (e.g. api_calls, storage_mb) | [default to undefined]
**quantity** | **number** | Quantity to record | [default to undefined]

## Example

```typescript
import { RecordUsageRequest } from 'mudbase-sdk';

const instance: RecordUsageRequest = {
    email,
    metric,
    quantity,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
