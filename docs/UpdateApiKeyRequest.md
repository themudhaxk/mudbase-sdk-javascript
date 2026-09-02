# UpdateApiKeyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [optional] [default to undefined]
**permissions** | [**Array&lt;ApiKeyPermission&gt;**](ApiKeyPermission.md) |  | [optional] [default to undefined]
**rateLimit** | [**RateLimit**](RateLimit.md) |  | [optional] [default to undefined]
**isActive** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { UpdateApiKeyRequest } from 'mudbase-sdk';

const instance: UpdateApiKeyRequest = {
    name,
    permissions,
    rateLimit,
    isActive,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
