# ApiKycWebhookConfigPutRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**webhookUrl** | **string** | Destination URL. Send null or empty string to clear. | [optional] [default to undefined]
**webhookSecret** | **string** | Explicit signing secret (min 16 chars). Send null or empty string to clear. | [optional] [default to undefined]
**generateSecret** | **boolean** | When true, the server generates a new secret and returns it once. | [optional] [default to undefined]

## Example

```typescript
import { ApiKycWebhookConfigPutRequest } from 'mudbase-sdk';

const instance: ApiKycWebhookConfigPutRequest = {
    webhookUrl,
    webhookSecret,
    generateSecret,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
