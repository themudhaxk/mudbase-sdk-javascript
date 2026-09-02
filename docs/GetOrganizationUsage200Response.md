# GetOrganizationUsage200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**usage** | [**Usage**](Usage.md) |  | [optional] [default to undefined]
**limits** | [**Limits**](Limits.md) |  | [optional] [default to undefined]
**plan** | [**Plan**](Plan.md) |  | [optional] [default to undefined]
**billing** | [**Billing**](Billing.md) |  | [optional] [default to undefined]
**suborgs** | [**Array&lt;GetOrganizationUsage200ResponseAllOfSuborgsInner&gt;**](GetOrganizationUsage200ResponseAllOfSuborgsInner.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GetOrganizationUsage200Response } from 'mudbase-sdk';

const instance: GetOrganizationUsage200Response = {
    usage,
    limits,
    plan,
    billing,
    suborgs,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
