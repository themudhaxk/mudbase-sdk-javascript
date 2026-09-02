# InitializePaymentForProjectRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** |  | [default to undefined]
**currency** | **string** |  | [optional] [default to 'USD']
**customer** | [**InitializePaymentRequestCustomer**](InitializePaymentRequestCustomer.md) |  | [default to undefined]
**metadata** | **object** |  | [optional] [default to undefined]

## Example

```typescript
import { InitializePaymentForProjectRequest } from 'mudbase-sdk';

const instance: InitializePaymentForProjectRequest = {
    amount,
    currency,
    customer,
    metadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
