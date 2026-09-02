# WalletTransaction


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** |  | [optional] [default to undefined]
**txHash** | **string** |  | [optional] [default to undefined]
**mainTxHash** | **string** |  | [optional] [default to undefined]
**address** | **string** |  | [optional] [default to undefined]
**chain** | **string** |  | [optional] [default to undefined]
**from** | **string** |  | [optional] [default to undefined]
**to** | **string** |  | [optional] [default to undefined]
**fromAddress** | **string** |  | [optional] [default to undefined]
**toAddress** | **string** |  | [optional] [default to undefined]
**amount** | **string** | Transaction amount (string to handle large numbers) | [optional] [default to undefined]
**currency** | **string** |  | [optional] [default to undefined]
**type** | **string** |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**mainTxStatus** | **string** |  | [optional] [default to undefined]
**confirmations** | **number** |  | [optional] [default to undefined]
**blockNumber** | **number** |  | [optional] [default to undefined]
**blockHash** | **string** |  | [optional] [default to undefined]
**networkFee** | **string** | Network fee (string to handle large numbers) | [optional] [default to undefined]
**mainTxConfirmedAt** | **string** |  | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]
**updatedAt** | **string** |  | [optional] [default to undefined]
**tokenTransfers** | [**Array&lt;WalletTransactionTokenTransfersInner&gt;**](WalletTransactionTokenTransfersInner.md) | Parsed token transfer list (incoming and outgoing) when available | [optional] [default to undefined]

## Example

```typescript
import { WalletTransaction } from 'mudbase-sdk';

const instance: WalletTransaction = {
    _id,
    txHash,
    mainTxHash,
    address,
    chain,
    from,
    to,
    fromAddress,
    toAddress,
    amount,
    currency,
    type,
    status,
    mainTxStatus,
    confirmations,
    blockNumber,
    blockHash,
    networkFee,
    mainTxConfirmedAt,
    createdAt,
    updatedAt,
    tokenTransfers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
