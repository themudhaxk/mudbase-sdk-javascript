# OrgDomainEntryOrgConsole

Org API compact domain row: use **`dnsRecords`** for the Mudbase ownership TXT (purpose `mudbase_ownership`) and routing CNAME. Omits `hostnameNormalized`, `verificationToken`, `dnsTxtHost`, and `dnsTxtValue`. Omits `cloudflareEdge` when Cloudflare SaaS is not configured. Optional keys with no value are omitted from JSON responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** |  | [optional] [default to undefined]
**hostname** | **string** |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**isPrimary** | **boolean** |  | [optional] [default to undefined]
**source** | **string** |  | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]
**verifiedAt** | **string** |  | [optional] [default to undefined]
**lastVerifiedAt** | **string** |  | [optional] [default to undefined]
**cnameSubmittedAt** | **string** |  | [optional] [default to undefined]
**cnameApprovedAt** | **string** |  | [optional] [default to undefined]
**customDomainVerificationStep** | **number** |  | [optional] [default to undefined]
**routingCnameTarget** | **string** |  | [optional] [default to undefined]
**dnsRecords** | [**Array&lt;OrgDnsRecord&gt;**](OrgDnsRecord.md) |  | [optional] [default to undefined]
**platformActivationPending** | **boolean** |  | [optional] [default to undefined]
**customDomainLiveForApiTraffic** | **boolean** |  | [optional] [default to undefined]
**cloudflareEdge** | [**OrgCloudflareEdgeHints**](OrgCloudflareEdgeHints.md) |  | [optional] [default to undefined]
**flyCertificateStatus** | **string** |  | [optional] [default to undefined]
**platformDnsVerification** | [**OrgPlatformDnsVerificationCustomer**](OrgPlatformDnsVerificationCustomer.md) |  | [optional] [default to undefined]
**platformDnsVerificationSubmittedAt** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { OrgDomainEntryOrgConsole } from 'mudbase-sdk';

const instance: OrgDomainEntryOrgConsole = {
    _id,
    hostname,
    status,
    isPrimary,
    source,
    createdAt,
    verifiedAt,
    lastVerifiedAt,
    cnameSubmittedAt,
    cnameApprovedAt,
    customDomainVerificationStep,
    routingCnameTarget,
    dnsRecords,
    platformActivationPending,
    customDomainLiveForApiTraffic,
    cloudflareEdge,
    flyCertificateStatus,
    platformDnsVerification,
    platformDnsVerificationSubmittedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
