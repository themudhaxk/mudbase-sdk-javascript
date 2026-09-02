# EditMessageRequestE2ee

New opaque ciphertext (E2EE messages only)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | **number** |  | [optional] [default to undefined]
**scheme** | **string** |  | [optional] [default to undefined]
**ciphertext** | **string** |  | [optional] [default to undefined]
**nonce** | **string** |  | [optional] [default to undefined]
**ephemeralPublicKey** | **string** |  | [optional] [default to undefined]
**senderKeyId** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { EditMessageRequestE2ee } from 'mudbase-sdk';

const instance: EditMessageRequestE2ee = {
    version,
    scheme,
    ciphertext,
    nonce,
    ephemeralPublicKey,
    senderKeyId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
