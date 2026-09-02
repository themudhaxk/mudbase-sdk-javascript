# FunctionExecutionResponse

Response from Execute function / Simulate trigger. Both endpoints are async (202) and only hand back an executionId — see FunctionExecutionStatusResponse for the real outcome. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **boolean** |  | [optional] [default to undefined]
**data** | [**FunctionExecutionResponseData**](FunctionExecutionResponseData.md) |  | [optional] [default to undefined]

## Example

```typescript
import { FunctionExecutionResponse } from 'mudbase-sdk';

const instance: FunctionExecutionResponse = {
    success,
    data,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
