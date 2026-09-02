# ProjectSmtpTestRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**to** | **string** | Recipient for verification and test message | [default to undefined]
**useSaved** | **boolean** | When true, use saved SMTP config; otherwise supply host/auth fields below | [optional] [default to true]
**host** | **string** |  | [optional] [default to undefined]
**port** | **number** |  | [optional] [default to undefined]
**secure** | **boolean** |  | [optional] [default to undefined]
**authUser** | **string** |  | [optional] [default to undefined]
**authPass** | **string** |  | [optional] [default to undefined]
**fromEmail** | **string** |  | [optional] [default to undefined]
**fromName** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ProjectSmtpTestRequest } from 'mudbase-sdk';

const instance: ProjectSmtpTestRequest = {
    to,
    useSaved,
    host,
    port,
    secure,
    authUser,
    authPass,
    fromEmail,
    fromName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
