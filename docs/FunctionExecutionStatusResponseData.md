# FunctionExecutionStatusResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**executionId** | **string** |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**durationMs** | **number** | Duration in milliseconds (null until completed) | [optional] [default to undefined]
**result** | **object** |  | [optional] [default to undefined]
**error** | **string** |  | [optional] [default to undefined]
**errorClass** | **string** |  | [optional] [default to undefined]
**logs** | [**FunctionExecutionStatusResponseDataLogs**](FunctionExecutionStatusResponseDataLogs.md) |  | [optional] [default to undefined]
**machine** | **object** |  | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]
**startedAt** | **string** |  | [optional] [default to undefined]
**completedAt** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { FunctionExecutionStatusResponseData } from 'mudbase-sdk';

const instance: FunctionExecutionStatusResponseData = {
    executionId,
    status,
    durationMs,
    result,
    error,
    errorClass,
    logs,
    machine,
    createdAt,
    startedAt,
    completedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
