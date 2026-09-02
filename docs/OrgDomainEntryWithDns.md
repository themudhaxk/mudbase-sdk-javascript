# OrgDomainEntryWithDns

Full allowed-domain row (admin and legacy): includes **`dnsTxtHost`** / **`dnsTxtValue`**, optional Cloudflare SaaS hints (`cloudflareEdge`), staff-published step-3 TXT (`platformDnsVerification` on the manual path), and unified **`dnsRecords`** when the API builds a checklist. **`routingCnameTarget`** mirrors Fly **`dns_requirements.cname`** when ACME has provisioned, else env fallback. Internal `cloudflareCustomHostname` is not returned; use `cloudflareEdge`. Fly ACME requires **`CUSTOM_DOMAIN_FLY_ACME_ENABLED`** plus **`FLY_API_TOKEN`** and app slug; Cloudflare SSL-for-SaaS and Fly ACME cannot both be enabled on the same deployment. Org-facing routes return the compact **`OrgDomainEntryOrgConsole`** shape instead (no raw `verificationToken` or duplicate TXT keys).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** | Subdocument id when present (MongoDB) | [optional] [default to undefined]
**hostname** | **string** |  | [optional] [default to undefined]
**hostnameNormalized** | **string** |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**isPrimary** | **boolean** |  | [optional] [default to undefined]
**source** | **string** |  | [optional] [default to undefined]
**verificationToken** | **string** |  | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]
**verifiedAt** | **string** |  | [optional] [default to undefined]
**lastVerifiedAt** | **string** |  | [optional] [default to undefined]
**dnsTxtHost** | **string** | FQDN for the TXT record (e.g. _mudbase-verify.example.com) | [optional] [default to undefined]
**dnsTxtValue** | **string** | Exact TXT string value (mudbase-domain-verification&#x3D;&lt;token&gt;) | [optional] [default to undefined]
**cloudflareEdge** | [**OrgCloudflareEdgeHints**](OrgCloudflareEdgeHints.md) |  | [optional] [default to undefined]
**platformActivationPending** | **boolean** | True while Mudbase TXT passed but custom host not yet active (includes CNAME and platform DNS pipeline). | [optional] [default to undefined]
**customDomainLiveForApiTraffic** | **boolean** |  | [optional] [default to undefined]
**customDomainVerificationStep** | **number** | Console wizard step 1–3; null when active/verified. | [optional] [default to undefined]
**routingCnameTarget** | **string** | Routing CNAME target: Fly Certificates API &#x60;dns_requirements.cname&#x60; when Fly ACME has provisioned and stored requirements; otherwise fallback from env &#x60;CUSTOM_DOMAIN_API_CNAME_TARGET&#x60;. | [optional] [default to undefined]
**dnsRecords** | [**Array&lt;OrgDnsRecord&gt;**](OrgDnsRecord.md) | Unified checklist: Mudbase ownership TXT, routing CNAME from Fly &#x60;dns_requirements.cname&#x60; (purpose &#x60;routing&#x60;) when provisioned else env fallback, and Fly rows (&#x60;fly_ownership&#x60;, &#x60;acme_challenge&#x60;, …) when Fly ACME is enabled and the certificate has been provisioned after Mudbase TXT. Empty or absent when Fly ACME is off or not yet provisioned. Prefer this over &#x60;platformDnsVerification&#x60; alone for org-facing DNS UI. | [optional] [default to undefined]
**flyCertificateStatus** | **string** | Fly Certificates API &#x60;status&#x60; when **&#x60;CUSTOM_DOMAIN_FLY_ACME_ENABLED&#x60;** and token/app are configured (e.g. &#x60;pending_validation&#x60;, &#x60;active&#x60;). Null when Fly ACME is not in use for this deployment. | [optional] [default to undefined]
**platformDnsVerification** | [**OrgPlatformDnsVerificationCustomer**](OrgPlatformDnsVerificationCustomer.md) |  | [optional] [default to undefined]
**cnameSubmittedAt** | **string** |  | [optional] [default to undefined]
**cnameApprovedAt** | **string** |  | [optional] [default to undefined]
**platformDnsVerificationSubmittedAt** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { OrgDomainEntryWithDns } from 'mudbase-sdk';

const instance: OrgDomainEntryWithDns = {
    _id,
    hostname,
    hostnameNormalized,
    status,
    isPrimary,
    source,
    verificationToken,
    createdAt,
    verifiedAt,
    lastVerifiedAt,
    dnsTxtHost,
    dnsTxtValue,
    cloudflareEdge,
    platformActivationPending,
    customDomainLiveForApiTraffic,
    customDomainVerificationStep,
    routingCnameTarget,
    dnsRecords,
    flyCertificateStatus,
    platformDnsVerification,
    cnameSubmittedAt,
    cnameApprovedAt,
    platformDnsVerificationSubmittedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
