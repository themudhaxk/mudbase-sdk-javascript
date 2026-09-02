# CreateCheckoutSessionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**planId** | **string** | Plan ID to subscribe to | [default to undefined]
**billingCycle** | **string** | Billing interval | [default to undefined]
**customerInfo** | [**CreateCheckoutSessionRequestCustomerInfo**](CreateCheckoutSessionRequestCustomerInfo.md) |  | [default to undefined]
**successUrl** | **string** | Redirect URL after successful payment | [optional] [default to undefined]
**cancelUrl** | **string** | Redirect URL if user cancels | [optional] [default to undefined]

## Example

```typescript
import { CreateCheckoutSessionRequest } from 'mudbase-sdk';

const instance: CreateCheckoutSessionRequest = {
    planId,
    billingCycle,
    customerInfo,
    successUrl,
    cancelUrl,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
