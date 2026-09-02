# SendMessageRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]
**content** | **string** | Plaintext body; omit when sending e2ee (use e2ee.ciphertext for E2EE text) | [optional] [default to undefined]
**e2ee** | [**SendMessageRequestE2ee**](SendMessageRequestE2ee.md) |  | [optional] [default to undefined]
**replyTo** | **string** |  | [optional] [default to undefined]
**mentions** | **Array&lt;string&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { SendMessageRequest } from 'mudbase-sdk';

const instance: SendMessageRequest = {
    type,
    content,
    e2ee,
    replyTo,
    mentions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
