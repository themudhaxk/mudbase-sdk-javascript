# OrgVerifyCustomDomainDnsSuccessResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **boolean** |  | [default to undefined]
**hostname** | **string** |  | [default to undefined]
**status** | **string** | Domain row status after check (typically cname_pending_staff after first TXT success from pending/failed; legacy dns_verified possible) | [default to undefined]
**verificationToken** | **string** |  | [default to undefined]
**challengeHost** | **string** | Same as dnsTxtHost (_mudbase-verify.&lt;hostname&gt;) | [default to undefined]
**expectedTxt** | **string** | Same as dnsTxtValue | [default to undefined]
**dnsTxtHost** | **string** |  | [default to undefined]
**dnsTxtValue** | **string** |  | [default to undefined]
**cloudflare** | [**OrgCloudflareEdgeHints**](OrgCloudflareEdgeHints.md) |  | [optional] [default to undefined]
**dnsRecords** | [**Array&lt;OrgDnsRecord&gt;**](OrgDnsRecord.md) | Same shape as &#x60;OrgDomainEntryWithDns.dnsRecords&#x60; when Fly ACME ran after this successful verify; omit or empty when Fly ACME is disabled or not provisioned. | [optional] [default to undefined]
**flyCertificateStatus** | **string** | Fly certificate status after verify when Fly ACME is active; null otherwise | [optional] [default to undefined]
**flyAcmeEnabled** | **boolean** | True when Fly ACME would call the Certificates API (token, app, CUSTOM_DOMAIN_FLY_ACME_ENABLED). | [optional] [default to undefined]
**flyAcmeDisabledReason** | **string** | When &#x60;flyAcmeEnabled&#x60; is false, why Fly ACME did not run (ops misconfiguration hint). | [optional] [default to undefined]
**flyProvisionError** | **string** | When Fly ACME is enabled but POST acme failed, Fly API error message for support; null on success. | [optional] [default to undefined]
**flyLegacyStaffPipeline** | **boolean** | When true, &#x60;CUSTOM_DOMAIN_FLY_LEGACY_STAFF_PIPELINE&#x60; is on — status may stay &#x60;cname_pending_staff&#x60; and staff approve-cname is required even if Fly provision succeeds. | [optional] [default to undefined]

## Example

```typescript
import { OrgVerifyCustomDomainDnsSuccessResponse } from 'mudbase-sdk';

const instance: OrgVerifyCustomDomainDnsSuccessResponse = {
    success,
    hostname,
    status,
    verificationToken,
    challengeHost,
    expectedTxt,
    dnsTxtHost,
    dnsTxtValue,
    cloudflare,
    dnsRecords,
    flyCertificateStatus,
    flyAcmeEnabled,
    flyAcmeDisabledReason,
    flyProvisionError,
    flyLegacyStaffPipeline,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
