# OrgDnsInstructionsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **boolean** |  | [default to undefined]
**domain** | [**OrgDomainEntryOrgConsole**](OrgDomainEntryOrgConsole.md) |  | [default to undefined]
**dnsVerificationInstructions** | **string** | Plain-language reminder to add the ownership TXT from the domain’s DNS checklist, then use Verify DNS in the organization’s domain settings. | [optional] [default to undefined]

## Example

```typescript
import { OrgDnsInstructionsResponse } from 'mudbase-sdk';

const instance: OrgDnsInstructionsResponse = {
    success,
    domain,
    dnsVerificationInstructions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
