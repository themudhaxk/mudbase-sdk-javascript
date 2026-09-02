# VerifyProjectEmailSmtpDomainRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain** | **string** |  | [optional] [default to undefined]
**fromEmail** | **string** |  | [optional] [default to undefined]
**persist** | **boolean** | If true and checks pass, persist domainVerifiedAt on the project | [optional] [default to undefined]

## Example

```typescript
import { VerifyProjectEmailSmtpDomainRequest } from 'mudbase-sdk';

const instance: VerifyProjectEmailSmtpDomainRequest = {
    domain,
    fromEmail,
    persist,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
