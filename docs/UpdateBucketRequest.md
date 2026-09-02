# UpdateBucketRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Updated name of the bucket | [optional] [default to undefined]
**isPublic** | **boolean** | Update whether the bucket is publicly accessible | [optional] [default to undefined]
**settings** | **object** | Updated bucket settings | [optional] [default to undefined]

## Example

```typescript
import { UpdateBucketRequest } from 'mudbase-sdk';

const instance: UpdateBucketRequest = {
    name,
    isPublic,
    settings,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
