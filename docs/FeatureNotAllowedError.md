# FeatureNotAllowedError

Returned when an app-role feature gate denies access (HTTP 403)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **boolean** |  | [default to undefined]
**error** | **string** |  | [default to undefined]
**resource** | **string** |  | [optional] [default to undefined]
**action** | **string** |  | [optional] [default to undefined]
**message** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { FeatureNotAllowedError } from 'mudbase-sdk';

const instance: FeatureNotAllowedError = {
    success,
    error,
    resource,
    action,
    message,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
