# Withdraw200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transactionId** | **string** |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**signedTx** | **string** | Signed transaction (hex for EVM/UTXO, base64 for Solana, object for Tron). Send as-is in broadcast body. | [optional] [default to undefined]
**chain** | **string** | Chain id for broadcast (e.g. ethereum, bitcoin, solana). | [optional] [default to undefined]
**fromAddress** | **string** | Sender address; must be registered for org when broadcasting. | [optional] [default to undefined]
**currency** | **string** |  | [optional] [default to undefined]
**amount** | **number** |  | [optional] [default to undefined]
**toAddress** | **string** |  | [optional] [default to undefined]
**message** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { Withdraw200ResponseData } from 'mudbase-sdk';

const instance: Withdraw200ResponseData = {
    transactionId,
    status,
    signedTx,
    chain,
    fromAddress,
    currency,
    amount,
    toAddress,
    message,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
