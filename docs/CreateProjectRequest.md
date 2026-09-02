# CreateProjectRequest

Project settings (requireEmailVerification, requirePhoneVerification, defaultUserAccountStatus) are not accepted on create; use PATCH to update settings after creation. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**slug** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { CreateProjectRequest } from 'mudbase-sdk';

const instance: CreateProjectRequest = {
    name,
    description,
    slug,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
