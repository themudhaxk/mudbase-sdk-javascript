# OrgCloudflareEdgeHints

Cloudflare SSL for SaaS Custom Hostname hints after Mudbase verify (when CLOUDFLARE_* env is set)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**saasIntegrationEnabled** | **boolean** |  | [optional] [default to undefined]
**skipped** | **boolean** |  | [optional] [default to undefined]
**reason** | **string** |  | [optional] [default to undefined]
**customHostnameId** | **string** |  | [optional] [default to undefined]
**hostnameStatus** | **string** |  | [optional] [default to undefined]
**sslStatus** | **string** |  | [optional] [default to undefined]
**ownershipVerification** | [**OrgCloudflareEdgeHintsOwnershipVerification**](OrgCloudflareEdgeHintsOwnershipVerification.md) |  | [optional] [default to undefined]
**sslValidationRecords** | [**Array&lt;OrgCloudflareSslValidationRecord&gt;**](OrgCloudflareSslValidationRecord.md) |  | [optional] [default to undefined]
**lastError** | **string** |  | [optional] [default to undefined]
**instructions** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { OrgCloudflareEdgeHints } from 'mudbase-sdk';

const instance: OrgCloudflareEdgeHints = {
    saasIntegrationEnabled,
    skipped,
    reason,
    customHostnameId,
    hostnameStatus,
    sslStatus,
    ownershipVerification,
    sslValidationRecords,
    lastError,
    instructions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
