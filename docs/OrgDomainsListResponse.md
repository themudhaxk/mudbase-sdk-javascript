# OrgDomainsListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domains** | [**Array&lt;OrgDomainEntryOrgConsole&gt;**](OrgDomainEntryOrgConsole.md) |  | [optional] [default to undefined]
**dnsVerificationInstructions** | **string** | Plain-language reminder to add the ownership TXT from each domain’s DNS checklist, then use Verify DNS in the organization’s domain settings. | [optional] [default to undefined]
**primaryHostname** | **string** |  | [optional] [default to undefined]
**apiBaseUrl** | **string** |  | [optional] [default to undefined]
**maxDomains** | **number** |  | [optional] [default to undefined]
**customDomainAllowed** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { OrgDomainsListResponse } from 'mudbase-sdk';

const instance: OrgDomainsListResponse = {
    domains,
    dnsVerificationInstructions,
    primaryHostname,
    apiBaseUrl,
    maxDomains,
    customDomainAllowed,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
