# SendMessageRequestE2ee

Opaque end-to-end encrypted payload (base64 ciphertext). Server cannot decrypt. Only for type=text.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | **number** |  | [optional] [default to 1]
**scheme** | **string** |  | [optional] [default to undefined]
**ciphertext** | **string** | Base64-encoded ciphertext | [optional] [default to undefined]
**nonce** | **string** |  | [optional] [default to undefined]
**ephemeralPublicKey** | **string** |  | [optional] [default to undefined]
**senderKeyId** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { SendMessageRequestE2ee } from 'mudbase-sdk';

const instance: SendMessageRequestE2ee = {
    version,
    scheme,
    ciphertext,
    nonce,
    ephemeralPublicKey,
    senderKeyId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
