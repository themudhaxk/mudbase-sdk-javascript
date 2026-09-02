# OrgPlatformDnsVerificationCustomer

Additional DNS record from platform staff (non-Fly path), or first Fly TXT shim when Fly ACME is enabled. Prefer `dnsRecords` for full instructions. `staffNote` may appear in admin org detail only.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recordType** | **string** |  | [optional] [default to undefined]
**recordName** | **string** |  | [optional] [default to undefined]
**recordValue** | **string** |  | [optional] [default to undefined]
**ttlSeconds** | **number** |  | [optional] [default to undefined]
**staffNote** | **string** |  | [optional] [default to undefined]
**updatedAt** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { OrgPlatformDnsVerificationCustomer } from 'mudbase-sdk';

const instance: OrgPlatformDnsVerificationCustomer = {
    recordType,
    recordName,
    recordValue,
    ttlSeconds,
    staffNote,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
