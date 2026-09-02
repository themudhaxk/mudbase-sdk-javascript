# GetDashboardOrganizationDetail200ResponseOrganization


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**slug** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**plan** | **string** |  | [optional] [default to undefined]
**txPlan** | **string** |  | [optional] [default to undefined]
**deploymentType** | **string** |  | [optional] [default to undefined]
**dedicated** | **object** |  | [optional] [default to undefined]
**preferredRegion** | **string** |  | [optional] [default to undefined]
**lastProvisionRequestId** | **string** |  | [optional] [default to undefined]
**infrastructureEnvironments** | **Array&lt;object&gt;** |  | [optional] [default to undefined]
**isPlatformShell** | **boolean** |  | [optional] [default to undefined]
**settings** | **object** |  | [optional] [default to undefined]
**limits** | **object** |  | [optional] [default to undefined]
**usage** | **object** |  | [optional] [default to undefined]
**effective** | **object** |  | [optional] [default to undefined]
**billing** | **object** |  | [optional] [default to undefined]
**customDomains** | **Array&lt;object&gt;** |  | [optional] [default to undefined]
**isActive** | **boolean** |  | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]
**createdBy** | **object** |  | [optional] [default to undefined]
**members** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**projectCount** | **number** |  | [optional] [default to undefined]
**userCount** | **number** |  | [optional] [default to undefined]
**projects** | [**Array&lt;GetDashboardOrganizationDetail200ResponseOrganizationProjectsInner&gt;**](GetDashboardOrganizationDetail200ResponseOrganizationProjectsInner.md) |  | [optional] [default to undefined]
**users** | [**Array&lt;GetDashboardOrganizationDetail200ResponseOrganizationUsersInner&gt;**](GetDashboardOrganizationDetail200ResponseOrganizationUsersInner.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GetDashboardOrganizationDetail200ResponseOrganization } from 'mudbase-sdk';

const instance: GetDashboardOrganizationDetail200ResponseOrganization = {
    _id,
    name,
    slug,
    description,
    plan,
    txPlan,
    deploymentType,
    dedicated,
    preferredRegion,
    lastProvisionRequestId,
    infrastructureEnvironments,
    isPlatformShell,
    settings,
    limits,
    usage,
    effective,
    billing,
    customDomains,
    isActive,
    createdAt,
    createdBy,
    members,
    projectCount,
    userCount,
    projects,
    users,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
