# OrgEdgeHints

Edge SSL (SSL-for-SaaS) custom hostname hints returned after Mudbase verification (when the edge SSL integration is configured)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**saasIntegrationEnabled** | **boolean** |  | [optional] [default to undefined]
**skipped** | **boolean** |  | [optional] [default to undefined]
**reason** | **string** |  | [optional] [default to undefined]
**customHostnameId** | **string** |  | [optional] [default to undefined]
**hostnameStatus** | **string** |  | [optional] [default to undefined]
**sslStatus** | **string** |  | [optional] [default to undefined]
**ownershipVerification** | [**OrgEdgeHintsOwnershipVerification**](OrgEdgeHintsOwnershipVerification.md) |  | [optional] [default to undefined]
**sslValidationRecords** | [**Array&lt;OrgSslValidationRecord&gt;**](OrgSslValidationRecord.md) |  | [optional] [default to undefined]
**lastError** | **string** |  | [optional] [default to undefined]
**instructions** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { OrgEdgeHints } from 'mudbase-sdk';

const instance: OrgEdgeHints = {
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
