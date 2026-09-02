# DataListResponseDataInner

Document from the collection (includes _id, createdAt, updatedAt, and all collection fields). Additional fields are defined in the collection schema.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** | Document ID (MongoDB ObjectId) - use this as documentId in API calls | [optional] [default to undefined]
**createdAt** | **string** | Document creation timestamp | [optional] [default to undefined]
**updatedAt** | **string** | Document last update timestamp | [optional] [default to undefined]

## Example

```typescript
import { DataListResponseDataInner } from 'mudbase-sdk';

const instance: DataListResponseDataInner = {
    _id,
    createdAt,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
