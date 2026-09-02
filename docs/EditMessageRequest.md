# EditMessageRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **string** | New plaintext (non-E2EE messages only) | [optional] [default to undefined]
**e2ee** | [**EditMessageRequestE2ee**](EditMessageRequestE2ee.md) |  | [optional] [default to undefined]

## Example

```typescript
import { EditMessageRequest } from 'mudbase-sdk';

const instance: EditMessageRequest = {
    content,
    e2ee,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
