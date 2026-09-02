# AdminApproveOrgDomainCnameRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**verifyDns** | **boolean** | When true, public DNS CNAME chain for hostname must match Fly &#x60;dns_requirements.cname&#x60; when stored, else &#x60;CUSTOM_DOMAIN_API_CNAME_TARGET&#x60;. | [optional] [default to undefined]

## Example

```typescript
import { AdminApproveOrgDomainCnameRequest } from 'mudbase-sdk';

const instance: AdminApproveOrgDomainCnameRequest = {
    verifyDns,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
