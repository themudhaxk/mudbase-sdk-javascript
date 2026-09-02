# GetCancelParamsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**txId** | **string** | WalletTransaction _id | [optional] [default to undefined]
**txHash** | **string** | mainTxHash or txHash of the stuck transaction | [optional] [default to undefined]
**chain** | **string** |  | [default to undefined]

## Example

```typescript
import { GetCancelParamsRequest } from 'mudbase-sdk';

const instance: GetCancelParamsRequest = {
    txId,
    txHash,
    chain,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
