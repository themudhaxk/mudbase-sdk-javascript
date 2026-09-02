# EnablePaymentProcessingRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountBank** | **string** | Bank code (from GET /v3/banks/{country}) | [default to undefined]
**accountNumber** | **string** | Org bank account number | [default to undefined]
**country** | **string** | Country code (e.g. US, NG) | [default to undefined]
**businessName** | **string** |  | [default to undefined]
**businessMobile** | **string** |  | [optional] [default to undefined]
**bvn** | **string** | Required only when country is NG (Nigeria) | [optional] [default to undefined]

## Example

```typescript
import { EnablePaymentProcessingRequest } from 'mudbase-sdk';

const instance: EnablePaymentProcessingRequest = {
    accountBank,
    accountNumber,
    country,
    businessName,
    businessMobile,
    bvn,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
