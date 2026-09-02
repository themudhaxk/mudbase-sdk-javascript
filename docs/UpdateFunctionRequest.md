# UpdateFunctionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**code** | **string** |  | [optional] [default to undefined]
**trigger** | [**FunctionTrigger**](FunctionTrigger.md) |  | [optional] [default to undefined]
**environment** | **object** |  | [optional] [default to undefined]
**isActive** | **boolean** |  | [optional] [default to undefined]
**limits** | [**UpdateFunctionRequestLimits**](UpdateFunctionRequestLimits.md) |  | [optional] [default to undefined]
**retryPolicy** | [**UpdateFunctionRequestRetryPolicy**](UpdateFunctionRequestRetryPolicy.md) |  | [optional] [default to undefined]
**versionComment** | **string** | Comment for version when code is updated | [optional] [default to undefined]

## Example

```typescript
import { UpdateFunctionRequest } from 'mudbase-sdk';

const instance: UpdateFunctionRequest = {
    name,
    description,
    code,
    trigger,
    environment,
    isActive,
    limits,
    retryPolicy,
    versionComment,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
