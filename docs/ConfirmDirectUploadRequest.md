# ConfirmDirectUploadRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | The S3 object key returned when the presigned PUT URL was issued | [default to undefined]
**projectId** | **string** |  | [default to undefined]
**originalName** | **string** |  | [optional] [default to undefined]
**contentType** | **string** |  | [optional] [default to undefined]
**size** | **number** |  | [optional] [default to undefined]
**bucket** | **string** |  | [optional] [default to undefined]
**isPublic** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { ConfirmDirectUploadRequest } from 'mudbase-sdk';

const instance: ConfirmDirectUploadRequest = {
    key,
    projectId,
    originalName,
    contentType,
    size,
    bucket,
    isPublic,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
