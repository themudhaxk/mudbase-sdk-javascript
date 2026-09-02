# EmailTemplateCatalogItem

One row from GET /email/templates (full catalog for the project).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [optional] [default to undefined]
**isCustomized** | **boolean** | True if this project has a stored override for this template name. | [optional] [default to undefined]
**effectiveSource** | **string** | Which layer is used at send time for this name. | [optional] [default to undefined]
**subjectSnippet** | **string** |  | [optional] [default to undefined]
**updatedAt** | **string** |  | [optional] [default to undefined]
**version** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { EmailTemplateCatalogItem } from 'mudbase-sdk';

const instance: EmailTemplateCatalogItem = {
    name,
    isCustomized,
    effectiveSource,
    subjectSnippet,
    updatedAt,
    version,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
