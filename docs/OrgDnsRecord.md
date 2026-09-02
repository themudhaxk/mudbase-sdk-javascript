# OrgDnsRecord


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | DNS record type (TXT, CNAME, …) | [default to undefined]
**name** | **string** | Owner name / FQDN to create at the customer\&#39;s DNS host | [default to undefined]
**value** | **string** | Record value or CNAME target | [default to undefined]
**purpose** | **string** | mudbase_ownership, routing, fly_ownership, acme_challenge, or fly (legacy bucket). | [default to undefined]

## Example

```typescript
import { OrgDnsRecord } from 'mudbase-sdk';

const instance: OrgDnsRecord = {
    type,
    name,
    value,
    purpose,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
