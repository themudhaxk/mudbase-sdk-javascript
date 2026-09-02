# SignedUrlResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **boolean** |  | [optional] [default to undefined]
**url** | **string** | Signed URL for file access | [optional] [default to undefined]
**expiresAt** | **string** | Expiration time of the signed URL (optional - some endpoints return expiresIn instead) | [optional] [default to undefined]
**expiresIn** | **number** | Time-to-live in seconds for the signed URL (optional) | [optional] [default to undefined]

## Example

```typescript
import { SignedUrlResponse } from 'mudbase-sdk';

const instance: SignedUrlResponse = {
    success,
    url,
    expiresAt,
    expiresIn,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
