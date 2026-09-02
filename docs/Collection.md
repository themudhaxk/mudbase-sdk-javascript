# Collection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**slug** | **string** |  | [optional] [default to undefined]
**project** | **string** |  | [optional] [default to undefined]
**fields** | [**Array&lt;Field&gt;**](Field.md) |  | [optional] [default to undefined]
**permissions** | [**Array&lt;Permission&gt;**](Permission.md) |  | [optional] [default to undefined]
**settings** | **object** |  | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]
**updatedAt** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { Collection } from 'mudbase-sdk';

const instance: Collection = {
    _id,
    name,
    slug,
    project,
    fields,
    permissions,
    settings,
    createdAt,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
