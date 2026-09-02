# Function


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**projectId** | **string** |  | [optional] [default to undefined]
**trigger** | [**FunctionTrigger**](FunctionTrigger.md) |  | [optional] [default to undefined]
**stats** | [**FunctionStats**](FunctionStats.md) |  | [optional] [default to undefined]
**isActive** | **boolean** |  | [optional] [default to undefined]
**createdBy** | **string** |  | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]
**updatedAt** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { Function } from 'mudbase-sdk';

const instance: Function = {
    _id,
    name,
    description,
    projectId,
    trigger,
    stats,
    isActive,
    createdBy,
    createdAt,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
