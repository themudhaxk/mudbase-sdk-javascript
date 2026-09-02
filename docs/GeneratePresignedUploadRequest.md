# GeneratePresignedUploadRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**projectId** | **string** |  | [default to undefined]
**bucket** | **string** |  | [optional] [default to 'default']
**originalName** | **string** |  | [default to undefined]
**contentType** | **string** |  | [optional] [default to undefined]
**isPublic** | **boolean** |  | [optional] [default to false]

## Example

```typescript
import { GeneratePresignedUploadRequest } from 'mudbase-sdk';

const instance: GeneratePresignedUploadRequest = {
    projectId,
    bucket,
    originalName,
    contentType,
    isPublic,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
