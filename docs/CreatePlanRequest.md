# CreatePlanRequest

OpenAPI-style body normalized server-side into Plan.pricing (monthly/yearly amounts), features (objects with name/included), and optional limits/trial/metadata. Slug is derived from projectId + name unless a collision occurs. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Display name; also used to generate a unique slug per project. | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**price** | **number** | Amount for the chosen interval. The server fills the other billing period (e.g. yearly ≈ monthly × 12 × 0.8 when interval is month).  | [default to undefined]
**currency** | **string** | ISO currency code (stored lowercased). | [default to undefined]
**interval** | **string** | Which period &#x60;price&#x60; applies to; drives pricing.monthly vs pricing.yearly. | [default to undefined]
**features** | [**Array&lt;CreatePlanRequestFeaturesInner&gt;**](CreatePlanRequestFeaturesInner.md) | Strings become &#x60;{ name, included: true }&#x60;. You may send full feature objects instead.  | [optional] [default to undefined]
**limits** | [**CreatePlanRequestLimits**](CreatePlanRequestLimits.md) |  | [optional] [default to undefined]
**trial** | [**CreatePlanRequestTrial**](CreatePlanRequestTrial.md) |  | [optional] [default to undefined]
**isActive** | **boolean** |  | [optional] [default to true]
**isDefault** | **boolean** | Only one default plan per project is allowed server-side. | [optional] [default to false]
**sortOrder** | **number** | Lower numbers list first in UIs. | [optional] [default to undefined]
**metadata** | **{ [key: string]: any; }** | Arbitrary key/value data stored on the plan document. | [optional] [default to undefined]

## Example

```typescript
import { CreatePlanRequest } from 'mudbase-sdk';

const instance: CreatePlanRequest = {
    name,
    description,
    price,
    currency,
    interval,
    features,
    limits,
    trial,
    isActive,
    isDefault,
    sortOrder,
    metadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
