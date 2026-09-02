# ApiProjectsProjectIdKybSessionsPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workflowId** | **string** | Overrides the organization\&#39;s default KYB workflow. | [optional] [default to undefined]
**vendorBusinessId** | **string** | Your own identifier for the business being verified. | [optional] [default to undefined]
**vendorData** | **string** | Arbitrary reference echoed back on webhooks. | [optional] [default to undefined]
**callback** | **string** | Where to redirect the business user after the hosted flow. | [optional] [default to undefined]
**language** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ApiProjectsProjectIdKybSessionsPostRequest } from 'mudbase-sdk';

const instance: ApiProjectsProjectIdKybSessionsPostRequest = {
    workflowId,
    vendorBusinessId,
    vendorData,
    callback,
    language,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
