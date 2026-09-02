# InitializePaymentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | Payment amount (e.g. USD) | [default to undefined]
**currency** | **string** |  | [optional] [default to 'USD']
**projectId** | **string** | Optional project scope | [optional] [default to undefined]
**customer** | [**InitializePaymentRequestCustomer**](InitializePaymentRequestCustomer.md) |  | [default to undefined]
**metadata** | **object** | title, description, redirectUrl, etc. | [optional] [default to undefined]

## Example

```typescript
import { InitializePaymentRequest } from 'mudbase-sdk';

const instance: InitializePaymentRequest = {
    amount,
    currency,
    projectId,
    customer,
    metadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
