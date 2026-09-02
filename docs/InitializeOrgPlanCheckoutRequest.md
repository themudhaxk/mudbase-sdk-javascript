# InitializeOrgPlanCheckoutRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**planName** | **string** | Plan id from GET /api/billing/plans (excludes free and enterprise) | [default to undefined]
**billingCycle** | **string** | Yearly &#x3D; 8% discount | [optional] [default to BillingCycleEnum_Monthly]
**redirectUrl** | **string** | Override redirect after payment (default FRONTEND_URL/billing/callback) | [optional] [default to undefined]

## Example

```typescript
import { InitializeOrgPlanCheckoutRequest } from 'mudbase-sdk';

const instance: InitializeOrgPlanCheckoutRequest = {
    planName,
    billingCycle,
    redirectUrl,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
