# RequestLocalPasswordResetRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **string** |  | [default to undefined]
**projectId** | **string** | Required for project-based reset (sends OTP). Omit for org token link. | [optional] [default to undefined]

## Example

```typescript
import { RequestLocalPasswordResetRequest } from 'mudbase-sdk';

const instance: RequestLocalPasswordResetRequest = {
    email,
    projectId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
