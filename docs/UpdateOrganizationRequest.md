# UpdateOrganizationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**logo** | **string** | Optional logo URL. Not used for emails (org emails use platform logo). | [optional] [default to undefined]
**website** | **string** |  | [optional] [default to undefined]
**settings** | **object** |  | [optional] [default to undefined]

## Example

```typescript
import { UpdateOrganizationRequest } from 'mudbase-sdk';

const instance: UpdateOrganizationRequest = {
    name,
    description,
    logo,
    website,
    settings,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
