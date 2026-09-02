# SimulateFunctionTriggerRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**trigger** | **object** | Simulated trigger (type, event) | [optional] [default to undefined]
**eventContext** | **object** | Simulated event context (document, file, webhook, wallet, message) | [optional] [default to undefined]
**payload** | **object** | Additional payload | [optional] [default to undefined]

## Example

```typescript
import { SimulateFunctionTriggerRequest } from 'mudbase-sdk';

const instance: SimulateFunctionTriggerRequest = {
    trigger,
    eventContext,
    payload,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
