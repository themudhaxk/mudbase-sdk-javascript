# SimulateAppPermissionsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**role** | **string** | App role slug (same as &#x60;roleSlug&#x60; elsewhere) | [default to undefined]
**roleSlug** | **string** | Alias for &#x60;role&#x60; | [optional] [default to undefined]
**operationId** | **string** | OpenAPI operationId (e.g. &#x60;sendEmail&#x60;, &#x60;executeIntegration&#x60;). When set, path simulation is optional. | [optional] [default to undefined]
**method** | **string** |  | [optional] [default to undefined]
**pathname** | **string** | Full path e.g. &#x60;/api/messaging/projects/{id}/messaging/email&#x60; | [optional] [default to undefined]
**path** | **string** | Alias for &#x60;pathname&#x60; | [optional] [default to undefined]

## Example

```typescript
import { SimulateAppPermissionsRequest } from 'mudbase-sdk';

const instance: SimulateAppPermissionsRequest = {
    role,
    roleSlug,
    operationId,
    method,
    pathname,
    path,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
