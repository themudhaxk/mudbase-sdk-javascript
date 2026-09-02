# CreateFunctionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**code** | **string** | Function body (async, has access to payload, db, files, messaging, wallet, utils, env, console) | [default to undefined]
**trigger** | [**FunctionTrigger**](FunctionTrigger.md) |  | [default to undefined]
**environment** | **{ [key: string]: string; }** | Per-function env vars injected into sandbox | [optional] [default to undefined]

## Example

```typescript
import { CreateFunctionRequest } from 'mudbase-sdk';

const instance: CreateFunctionRequest = {
    name,
    description,
    code,
    trigger,
    environment,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
