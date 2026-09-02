# UpdateCollectionPermissionsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**conditions** | **object** |  | [optional] [default to undefined]
**dataScope** | **string** | &#x60;all&#x60; &#x3D; no automatic row-owner filter. &#x60;own&#x60; &#x3D; only documents where the owner field matches the authenticated app user. | [optional] [default to undefined]
**ownerField** | **string** | Optional override for the document field when dataScope is &#x60;own&#x60; (default &#x60;settings.dataOwnerField&#x60;, usually &#x60;createdBy&#x60;). | [optional] [default to undefined]

## Example

```typescript
import { UpdateCollectionPermissionsRequest } from 'mudbase-sdk';

const instance: UpdateCollectionPermissionsRequest = {
    actions,
    conditions,
    dataScope,
    ownerField,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
