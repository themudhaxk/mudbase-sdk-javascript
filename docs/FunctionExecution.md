# FunctionExecution


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** |  | [optional] [default to undefined]
**executedAt** | **string** |  | [optional] [default to undefined]
**executionTime** | **number** |  | [optional] [default to undefined]
**success** | **boolean** |  | [optional] [default to undefined]
**payload** | **object** |  | [optional] [default to undefined]
**result** | **object** |  | [optional] [default to undefined]
**error** | **string** |  | [optional] [default to undefined]
**triggerType** | **string** |  | [optional] [default to undefined]
**triggerEvent** | **string** |  | [optional] [default to undefined]
**invokedBy** | **string** |  | [optional] [default to undefined]
**retryCount** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { FunctionExecution } from 'mudbase-sdk';

const instance: FunctionExecution = {
    _id,
    executedAt,
    executionTime,
    success,
    payload,
    result,
    error,
    triggerType,
    triggerEvent,
    invokedBy,
    retryCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
