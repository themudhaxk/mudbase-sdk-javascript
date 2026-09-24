# ExposeSandboxPortResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **boolean** |  | [optional] [default to undefined]
**port** | **number** |  | [optional] [default to undefined]
**publicUrl** | **string** | Root HTTPS URL of the session. Append any path your application uses.  | [optional] [default to undefined]
**portToken** | **string** | Bearer token for token-gated access. Only present when access is \&quot;token-gated\&quot;.  | [optional] [default to undefined]

## Example

```typescript
import { ExposeSandboxPortResponse } from './api';

const instance: ExposeSandboxPortResponse = {
    success,
    port,
    publicUrl,
    portToken,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
