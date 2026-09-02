# GetSpeedUpParamsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**txId** | **string** | WalletTransaction _id (MongoDB ObjectId) | [optional] [default to undefined]
**txHash** | **string** | mainTxHash or txHash of the stuck transaction | [optional] [default to undefined]
**chain** | **string** | EVM chain (speed-up is EVM only) | [default to undefined]

## Example

```typescript
import { GetSpeedUpParamsRequest } from 'mudbase-sdk';

const instance: GetSpeedUpParamsRequest = {
    txId,
    txHash,
    chain,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
