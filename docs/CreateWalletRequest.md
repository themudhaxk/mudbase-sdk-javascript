# CreateWalletRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **string** | Currency. USDT requires network (ETH, BSC, TRX, SOL, POLYGON). All platform chains supported for testing non-custodial flows. | [default to undefined]
**projectId** | **string** | Optional project ID | [optional] [default to undefined]
**network** | **string** | Required for USDT; one of ETH, BSC, TRX, SOL, POLYGON | [optional] [default to undefined]
**privateKey** | **string** | Optional custom private key | [optional] [default to undefined]
**label** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { CreateWalletRequest } from 'mudbase-sdk';

const instance: CreateWalletRequest = {
    currency,
    projectId,
    network,
    privateKey,
    label,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
