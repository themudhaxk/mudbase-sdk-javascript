# AdminBillingCheckoutLinkRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**plan** | **string** |  | [default to undefined]
**billingCycle** | **string** |  | [optional] [default to BillingCycleEnum_Monthly]
**amountCents** | **number** | Monthly amount in cents (overrides catalog; enterprise default is contract) | [optional] [default to undefined]
**chargeAmountCents** | **number** | Exact charge in cents for this checkout (overrides monthly math) | [optional] [default to undefined]
**currency** | **string** |  | [optional] [default to undefined]
**email** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**redirectUrl** | **string** |  | [optional] [default to undefined]
**sendEmail** | **boolean** |  | [optional] [default to false]
**toEmail** | **string** |  | [optional] [default to undefined]
**message** | **string** | Optional note shown in org_billing_checkout email | [optional] [default to undefined]

## Example

```typescript
import { AdminBillingCheckoutLinkRequest } from 'mudbase-sdk';

const instance: AdminBillingCheckoutLinkRequest = {
    plan,
    billingCycle,
    amountCents,
    chargeAmountCents,
    currency,
    email,
    name,
    redirectUrl,
    sendEmail,
    toEmail,
    message,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
