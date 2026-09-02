# Organization


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**slug** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**logo** | **string** | Optional logo URL. Org-related emails use the platform logo (env); this field is for legacy or future UI use only. | [optional] [default to undefined]
**website** | **string** |  | [optional] [default to undefined]
**plan** | [**Plan**](Plan.md) |  | [optional] [default to undefined]
**usage** | [**Usage**](Usage.md) |  | [optional] [default to undefined]
**limits** | [**Limits**](Limits.md) |  | [optional] [default to undefined]
**billing** | [**Billing**](Billing.md) |  | [optional] [default to undefined]
**settings** | **object** | May include customDomainAddon (optional billing/legacy flag; not required for custom domains on Growth/Scale). | [optional] [default to undefined]
**deploymentType** | **string** |  | [optional] [default to undefined]
**dedicated** | **object** | Dedicated API/DB routing; may include edgeTlsStatus, infraMeteringLastReportAt. | [optional] [default to undefined]
**preferredRegion** | **string** |  | [optional] [default to undefined]
**infrastructureEnvironments** | **Array&lt;object&gt;** |  | [optional] [default to undefined]
**allowedDomains** | **Array&lt;object&gt;** |  | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]
**updatedAt** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { Organization } from 'mudbase-sdk';

const instance: Organization = {
    _id,
    name,
    slug,
    description,
    logo,
    website,
    plan,
    usage,
    limits,
    billing,
    settings,
    deploymentType,
    dedicated,
    preferredRegion,
    infrastructureEnvironments,
    allowedDomains,
    createdAt,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
