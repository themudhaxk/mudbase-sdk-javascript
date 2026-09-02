# ProjectEmailSendRequest

Either `template` (with optional `data`) or both `subject` and `html` must be provided. `to` may be a string or array of strings. For named templates, **`data`** should supply values for `{{placeholders}}` (see **Email** tag description for the full list). 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**template** | **string** | Registered template name resolved by the email worker | [optional] [default to undefined]
**to** | [**EmailRequestTo**](EmailRequestTo.md) |  | [optional] [default to undefined]
**data** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**subject** | **string** |  | [optional] [default to undefined]
**html** | **string** |  | [optional] [default to undefined]
**idempotencyKey** | **string** |  | [optional] [default to undefined]
**brandingScope** | **string** | Email layout branding; defaults from project context when omitted | [optional] [default to undefined]

## Example

```typescript
import { ProjectEmailSendRequest } from 'mudbase-sdk';

const instance: ProjectEmailSendRequest = {
    template,
    to,
    data,
    subject,
    html,
    idempotencyKey,
    brandingScope,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
