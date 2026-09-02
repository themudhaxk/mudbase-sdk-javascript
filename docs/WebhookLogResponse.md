# WebhookLogResponse

Last HTTP response from your server (if any)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **number** | HTTP status code from your endpoint | [optional] [default to undefined]
**body** | **object** | Parsed JSON when possible; otherwise structure varies | [optional] [default to undefined]
**headers** | **object** |  | [optional] [default to undefined]

## Example

```typescript
import { WebhookLogResponse } from 'mudbase-sdk';

const instance: WebhookLogResponse = {
    status,
    body,
    headers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
