# CreateApiKeyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [default to undefined]
**projectId** | **string** | MongoDB ObjectId of the project | [default to undefined]
**permissions** | [**Array&lt;ApiKeyPermission&gt;**](ApiKeyPermission.md) | Optional. Permission objects (resource + actions). Omit or pass [] for full access (all resources and actions). Include only the entries you want; remove resources or actions to restrict the key. | [optional] [default to undefined]
**rateLimit** | [**RateLimit**](RateLimit.md) |  | [optional] [default to undefined]
**expiresAt** | **string** | Optional. When provided, must be a valid ISO 8601 date-time in the future. Omit for no expiration. | [optional] [default to undefined]

## Example

```typescript
import { CreateApiKeyRequest } from 'mudbase-sdk';

const instance: CreateApiKeyRequest = {
    name,
    projectId,
    permissions,
    rateLimit,
    expiresAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
