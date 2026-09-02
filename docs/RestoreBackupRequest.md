# RestoreBackupRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**restoreMode** | **string** |  | [optional] [default to undefined]
**collections** | **Array&lt;string&gt;** | Optional: specific collections to restore | [optional] [default to undefined]
**confirmation** | **string** |  | [default to undefined]

## Example

```typescript
import { RestoreBackupRequest } from 'mudbase-sdk';

const instance: RestoreBackupRequest = {
    restoreMode,
    collections,
    confirmation,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
