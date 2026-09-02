# GetBillingEstimate200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**period** | **string** | Current month YYYY-MM | [optional] [default to undefined]
**lineItems** | [**Array&lt;GetBillingEstimate200ResponseLineItemsInner&gt;**](GetBillingEstimate200ResponseLineItemsInner.md) |  | [optional] [default to undefined]
**estimatedOverageCents** | **number** |  | [optional] [default to undefined]
**estimatedOverage** | **string** |  | [optional] [default to undefined]
**forecastOverageCents** | **number** |  | [optional] [default to undefined]
**forecastOverage** | **string** |  | [optional] [default to undefined]
**message** | **string** | Human-readable forecast when applicable | [optional] [default to undefined]
**spendLimits** | [**GetBillingEstimate200ResponseSpendLimits**](GetBillingEstimate200ResponseSpendLimits.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GetBillingEstimate200Response } from 'mudbase-sdk';

const instance: GetBillingEstimate200Response = {
    period,
    lineItems,
    estimatedOverageCents,
    estimatedOverage,
    forecastOverageCents,
    forecastOverage,
    message,
    spendLimits,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
