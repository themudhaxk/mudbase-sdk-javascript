# CreateRoleRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**permissions** | [**Array&lt;CreateRoleRequestPermissionsInner&gt;**](CreateRoleRequestPermissionsInner.md) | Legacy resource-level permissions. For data CRUD, prefer &#x60;collectionPermissions&#x60; below. | [optional] [default to undefined]
**hierarchy** | **number** |  | [optional] [default to undefined]
**collectionPermissions** | [**{ [key: string]: CreateRoleRequestCollectionPermissionsValue; }**](CreateRoleRequestCollectionPermissionsValue.md) | Per-collection CRUD map. Keys are collection slugs; value can be action array or object with actions + conditions. | [optional] [default to undefined]

## Example

```typescript
import { CreateRoleRequest } from 'mudbase-sdk';

const instance: CreateRoleRequest = {
    name,
    description,
    permissions,
    hierarchy,
    collectionPermissions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
