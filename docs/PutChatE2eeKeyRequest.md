# PutChatE2eeKeyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identityPublicKey** | **string** | Base64-encoded public key (algorithm defined by client; opaque to server) | [default to undefined]
**keyVersion** | **number** | Optional; defaults to incrementing stored version | [optional] [default to undefined]

## Example

```typescript
import { PutChatE2eeKeyRequest } from 'mudbase-sdk';

const instance: PutChatE2eeKeyRequest = {
    identityPublicKey,
    keyVersion,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
