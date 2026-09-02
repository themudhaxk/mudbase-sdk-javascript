# PlatformAdminPatchOrgLimits200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **boolean** |  | [default to undefined]
**orgId** | **string** |  | [default to undefined]
**limits** | **object** | Persisted &#x60;Org.limits&#x60; after merge | [default to undefined]
**effective** | **object** | Full entitlement map from getEntitlements (plan + overrides) | [default to undefined]

## Example

```typescript
import { PlatformAdminPatchOrgLimits200Response } from 'mudbase-sdk';

const instance: PlatformAdminPatchOrgLimits200Response = {
    success,
    orgId,
    limits,
    effective,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
