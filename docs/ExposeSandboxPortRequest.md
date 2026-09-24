# ExposeSandboxPortRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**port** | **number** | Internal port number to expose. | [default to undefined]
**access** | **string** | Access control for the exposed port. - public: no authentication required. - token-gated: requests must carry the portToken as a Bearer header.  | [optional] [default to AccessEnum_Public]

## Example

```typescript
import { ExposeSandboxPortRequest } from './api';

const instance: ExposeSandboxPortRequest = {
    port,
    access,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
