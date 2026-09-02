# GetSubscriptionTiers200ResponsePlansInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**price** | **number** | Monthly price in cents | [optional] [default to undefined]
**priceYearly** | **number** | Yearly price in cents (8% off) | [optional] [default to undefined]
**currency** | **string** |  | [optional] [default to undefined]
**priceId** | **string** |  | [optional] [default to undefined]
**limits** | **object** |  | [optional] [default to undefined]
**overages** | **object** |  | [optional] [default to undefined]
**enforcement** | **object** | Per-resource enforcement (blocking, billing_only, etc.) | [optional] [default to undefined]

## Example

```typescript
import { GetSubscriptionTiers200ResponsePlansInner } from 'mudbase-sdk';

const instance: GetSubscriptionTiers200ResponsePlansInner = {
    id,
    name,
    description,
    price,
    priceYearly,
    currency,
    priceId,
    limits,
    overages,
    enforcement,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
