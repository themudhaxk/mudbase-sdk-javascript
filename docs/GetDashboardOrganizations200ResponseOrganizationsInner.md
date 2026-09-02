# GetDashboardOrganizations200ResponseOrganizationsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**slug** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**plan** | **string** |  | [optional] [default to undefined]
**deploymentType** | **string** |  | [optional] [default to undefined]
**dedicatedApiBaseUrl** | **string** |  | [optional] [default to undefined]
**isActive** | **boolean** |  | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]
**createdBy** | [**GetDashboardOrganizations200ResponseOrganizationsInnerCreatedBy**](GetDashboardOrganizations200ResponseOrganizationsInnerCreatedBy.md) |  | [optional] [default to undefined]
**projectCount** | **number** |  | [optional] [default to undefined]
**userCount** | **number** |  | [optional] [default to undefined]
**projects** | [**Array&lt;GetOrganizationUsers200ResponseUsersInnerProject&gt;**](GetOrganizationUsers200ResponseUsersInnerProject.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GetDashboardOrganizations200ResponseOrganizationsInner } from 'mudbase-sdk';

const instance: GetDashboardOrganizations200ResponseOrganizationsInner = {
    _id,
    name,
    slug,
    description,
    plan,
    deploymentType,
    dedicatedApiBaseUrl,
    isActive,
    createdAt,
    createdBy,
    projectCount,
    userCount,
    projects,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
