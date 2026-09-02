# CreateCollectionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [default to undefined]
**slug** | **string** |  | [optional] [default to undefined]
**fields** | [**Array&lt;Field&gt;**](Field.md) |  | [default to undefined]
**permissions** | [**Array&lt;Permission&gt;**](Permission.md) |  | [optional] [default to undefined]
**settings** | **object** |  | [optional] [default to undefined]

## Example

```typescript
import { CreateCollectionRequest } from 'mudbase-sdk';

const instance: CreateCollectionRequest = {
    name,
    slug,
    fields,
    permissions,
    settings,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
