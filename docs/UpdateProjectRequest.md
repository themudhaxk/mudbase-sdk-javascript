# UpdateProjectRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**logoUrl** | **string** | Public URL for the project logo/brand image. Prefer uploading via **POST /api/projects/{id}/logo** or **POST /api/projects/{orgId}/projects/{id}/logo** (stored under logo/project/ in platform storage). Used in project-related emails.  | [optional] [default to undefined]
**settings** | [**ProjectSettings**](ProjectSettings.md) |  | [optional] [default to undefined]
**auth** | [**AuthConfig**](AuthConfig.md) |  | [optional] [default to undefined]

## Example

```typescript
import { UpdateProjectRequest } from 'mudbase-sdk';

const instance: UpdateProjectRequest = {
    name,
    description,
    logoUrl,
    settings,
    auth,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
