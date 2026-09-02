# ApiKeyPermission


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource** | **string** | Resource scope for this permission (auth, database, storage, functions, realtime, messaging) | [default to undefined]
**actions** | **Array&lt;string&gt;** | Allowed actions on the resource | [default to undefined]

## Example

```typescript
import { ApiKeyPermission } from 'mudbase-sdk';

const instance: ApiKeyPermission = {
    resource,
    actions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
