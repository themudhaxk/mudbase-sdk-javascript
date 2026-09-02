# ApiFilesDownloadFileIdGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **string** |  | [optional] [default to undefined]
**expiresIn** | **number** | Seconds until the signed URL expires; null for public files. | [optional] [default to undefined]
**isPublic** | **boolean** | Present and true only when the file is public. | [optional] [default to undefined]
**warning** | **string** | Present only for public files — explains the URL is permanent and unprotected. | [optional] [default to undefined]

## Example

```typescript
import { ApiFilesDownloadFileIdGet200Response } from 'mudbase-sdk';

const instance: ApiFilesDownloadFileIdGet200Response = {
    url,
    expiresIn,
    isPublic,
    warning,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
