# EmailRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**to** | [**EmailRequestTo**](EmailRequestTo.md) |  | [default to undefined]
**subject** | **string** |  | [default to undefined]
**html** | **string** |  | [optional] [default to undefined]
**text** | **string** |  | [optional] [default to undefined]
**templateId** | **string** |  | [optional] [default to undefined]
**templateData** | **object** |  | [optional] [default to undefined]

## Example

```typescript
import { EmailRequest } from 'mudbase-sdk';

const instance: EmailRequest = {
    to,
    subject,
    html,
    text,
    templateId,
    templateData,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
