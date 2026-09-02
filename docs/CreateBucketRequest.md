# CreateBucketRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the bucket | [default to undefined]
**isPublic** | **boolean** | Whether the bucket is publicly accessible | [optional] [default to false]
**settings** | **object** | Additional bucket settings | [optional] [default to undefined]

## Example

```typescript
import { CreateBucketRequest } from 'mudbase-sdk';

const instance: CreateBucketRequest = {
    name,
    isPublic,
    settings,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
