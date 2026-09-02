# EmailTemplateResolved

Effective template body (project override, else global, else built-in).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [optional] [default to undefined]
**subject** | **string** |  | [optional] [default to undefined]
**htmlBody** | **string** |  | [optional] [default to undefined]
**textBody** | **string** |  | [optional] [default to undefined]
**variables** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**updatedAt** | **string** |  | [optional] [default to undefined]
**version** | **number** |  | [optional] [default to undefined]
**isProjectOverride** | **boolean** |  | [optional] [default to undefined]
**effectiveSource** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { EmailTemplateResolved } from 'mudbase-sdk';

const instance: EmailTemplateResolved = {
    name,
    subject,
    htmlBody,
    textBody,
    variables,
    updatedAt,
    version,
    isProjectOverride,
    effectiveSource,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
