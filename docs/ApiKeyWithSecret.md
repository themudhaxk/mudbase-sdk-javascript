# ApiKeyWithSecret


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**project** | [**ProjectSummary**](ProjectSummary.md) |  | [optional] [default to undefined]
**permissions** | [**Array&lt;ApiKeyPermission&gt;**](ApiKeyPermission.md) |  | [optional] [default to undefined]
**rateLimit** | [**RateLimit**](RateLimit.md) |  | [optional] [default to undefined]
**usage** | [**ApiKeyUsage**](ApiKeyUsage.md) |  | [optional] [default to undefined]
**isActive** | **boolean** |  | [optional] [default to undefined]
**expiresAt** | **string** |  | [optional] [default to undefined]
**createdBy** | [**UserSummary**](UserSummary.md) |  | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]
**secret** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ApiKeyWithSecret } from 'mudbase-sdk';

const instance: ApiKeyWithSecret = {
    _id,
    name,
    project,
    permissions,
    rateLimit,
    usage,
    isActive,
    expiresAt,
    createdBy,
    createdAt,
    secret,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
