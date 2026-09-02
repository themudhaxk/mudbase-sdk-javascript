# ProjectSmtpPatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **boolean** |  | [optional] [default to undefined]
**host** | **string** |  | [optional] [default to undefined]
**port** | **number** |  | [optional] [default to undefined]
**secure** | **boolean** |  | [optional] [default to undefined]
**authUser** | **string** |  | [optional] [default to undefined]
**authPass** | **string** | SMTP password; stored encrypted, never returned on GET | [optional] [default to undefined]
**fromName** | **string** |  | [optional] [default to undefined]
**fromEmail** | **string** |  | [optional] [default to undefined]
**domainVerifiedAt** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ProjectSmtpPatchRequest } from 'mudbase-sdk';

const instance: ProjectSmtpPatchRequest = {
    enabled,
    host,
    port,
    secure,
    authUser,
    authPass,
    fromName,
    fromEmail,
    domainVerifiedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
