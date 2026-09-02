# ApiKeyUsageResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**usage** | [**ApiKeyUsage**](ApiKeyUsage.md) |  | [optional] [default to undefined]
**rateLimit** | [**RateLimit**](RateLimit.md) |  | [optional] [default to undefined]
**isActive** | **boolean** |  | [optional] [default to undefined]
**expiresAt** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ApiKeyUsageResponse } from 'mudbase-sdk';

const instance: ApiKeyUsageResponse = {
    usage,
    rateLimit,
    isActive,
    expiresAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
