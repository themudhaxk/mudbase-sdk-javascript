# Project


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**slug** | **string** |  | [optional] [default to undefined]
**org** | **string** |  | [optional] [default to undefined]
**auth** | [**AuthConfig**](AuthConfig.md) |  | [optional] [default to undefined]
**database** | [**DatabaseConfig**](DatabaseConfig.md) |  | [optional] [default to undefined]
**storage** | [**StorageConfig**](StorageConfig.md) |  | [optional] [default to undefined]
**settings** | [**ProjectSettings**](ProjectSettings.md) |  | [optional] [default to undefined]
**usage** | [**ProjectUsage**](ProjectUsage.md) |  | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]
**updatedAt** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { Project } from 'mudbase-sdk';

const instance: Project = {
    _id,
    name,
    description,
    slug,
    org,
    auth,
    database,
    storage,
    settings,
    usage,
    createdAt,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
