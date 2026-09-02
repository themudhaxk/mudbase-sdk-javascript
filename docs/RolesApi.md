# RolesApi

All URIs are relative to *https://cloud.mudbase.dev*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**assignRole**](#assignrole) | **POST** /api/orgs/{orgId}/users/{userId}/role | ~~Assign custom role to user~~ (deprecated)|
|[**checkPermissions**](#checkpermissions) | **GET** /api/orgs/{orgId}/users/{userId}/permissions | ~~Check user permissions~~ (deprecated)|
|[**createRole**](#createrole) | **POST** /api/orgs/{orgId}/roles | ~~Create custom role~~ (deprecated)|
|[**deleteRole**](#deleterole) | **DELETE** /api/orgs/{orgId}/roles/{roleId} | ~~Delete role~~ (deprecated)|
|[**getRole**](#getrole) | **GET** /api/orgs/{orgId}/roles/{roleId} | ~~Get role details~~ (deprecated)|
|[**getUsersByRole**](#getusersbyrole) | **GET** /api/orgs/{orgId}/roles/{roleSlug}/users | ~~Get users with specific role~~ (deprecated)|
|[**listRoles**](#listroles) | **GET** /api/orgs/{orgId}/roles | ~~List all roles~~ (deprecated)|
|[**removeRole**](#removerole) | **DELETE** /api/orgs/{orgId}/users/{userId}/role | ~~Remove custom role from user~~ (deprecated)|
|[**updateRole**](#updaterole) | **PUT** /api/orgs/{orgId}/roles/{roleId} | ~~Update role~~ (deprecated)|

# **assignRole**
> AssignRole200Response assignRole(assignRoleRequest)

Assign a custom role to a user in the organization. Requires JWT Bearer token authentication. Both OrgBearerAuth and ProjectBearerAuth are supported (they use the same JWT token format). These are organization-level operations. 

### Example

```typescript
import {
    RolesApi,
    Configuration,
    AssignRoleRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new RolesApi(configuration);

let orgId: string; // (default to undefined)
let userId: string; // (default to undefined)
let assignRoleRequest: AssignRoleRequest; //

const { status, data } = await apiInstance.assignRole(
    orgId,
    userId,
    assignRoleRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **assignRoleRequest** | **AssignRoleRequest**|  | |
| **orgId** | [**string**] |  | defaults to undefined|
| **userId** | [**string**] |  | defaults to undefined|


### Return type

**AssignRole200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Role assigned successfully |  -  |
|**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **checkPermissions**
> CheckPermissions200Response checkPermissions()

Get all permissions for a user (system + custom role combined)

### Example

```typescript
import {
    RolesApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new RolesApi(configuration);

let orgId: string; // (default to undefined)
let userId: string; // (default to undefined)

const { status, data } = await apiInstance.checkPermissions(
    orgId,
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orgId** | [**string**] |  | defaults to undefined|
| **userId** | [**string**] |  | defaults to undefined|


### Return type

**CheckPermissions200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | User permissions |  -  |
|**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createRole**
> CreateRole201Response createRole(createRoleRequest)

Create a new custom role with specific permissions for your organization. Requires JWT Bearer token authentication. Both OrgBearerAuth and ProjectBearerAuth are supported (they use the same JWT token format). These are organization-level operations. 

### Example

```typescript
import {
    RolesApi,
    Configuration,
    CreateRoleRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new RolesApi(configuration);

let orgId: string; // (default to undefined)
let createRoleRequest: CreateRoleRequest; //

const { status, data } = await apiInstance.createRole(
    orgId,
    createRoleRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createRoleRequest** | **CreateRoleRequest**|  | |
| **orgId** | [**string**] |  | defaults to undefined|


### Return type

**CreateRole201Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Role created successfully |  -  |
|**400** | Bad request |  -  |
|**403** | Access denied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteRole**
> DeleteRole200Response deleteRole()

Delete a custom role. Cannot delete system roles or roles with active users. Requires JWT Bearer token authentication. Both OrgBearerAuth and ProjectBearerAuth are supported (they use the same JWT token format). These are organization-level operations. 

### Example

```typescript
import {
    RolesApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new RolesApi(configuration);

let orgId: string; // (default to undefined)
let roleId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteRole(
    orgId,
    roleId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orgId** | [**string**] |  | defaults to undefined|
| **roleId** | [**string**] |  | defaults to undefined|


### Return type

**DeleteRole200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Role deleted successfully |  -  |
|**400** | Cannot delete role with active users |  -  |
|**403** | Cannot delete system roles |  -  |
|**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRole**
> GetRole200Response getRole()

Get details of a specific custom role. Requires: OrgBearerAuth (organization-level authentication only). 

### Example

```typescript
import {
    RolesApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new RolesApi(configuration);

let orgId: string; // (default to undefined)
let roleId: string; // (default to undefined)

const { status, data } = await apiInstance.getRole(
    orgId,
    roleId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orgId** | [**string**] |  | defaults to undefined|
| **roleId** | [**string**] |  | defaults to undefined|


### Return type

**GetRole200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Role details |  -  |
|**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUsersByRole**
> GetUsersByRole200Response getUsersByRole()


### Example

```typescript
import {
    RolesApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new RolesApi(configuration);

let orgId: string; // (default to undefined)
let roleSlug: string; // (default to undefined)

const { status, data } = await apiInstance.getUsersByRole(
    orgId,
    roleSlug
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orgId** | [**string**] |  | defaults to undefined|
| **roleSlug** | [**string**] |  | defaults to undefined|


### Return type

**GetUsersByRole200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of users with this role |  -  |
|**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listRoles**
> ListRoles200Response listRoles()

Get all custom roles for the organization. Requires: OrgBearerAuth (organization-level authentication only). 

### Example

```typescript
import {
    RolesApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new RolesApi(configuration);

let orgId: string; // (default to undefined)

const { status, data } = await apiInstance.listRoles(
    orgId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orgId** | [**string**] |  | defaults to undefined|


### Return type

**ListRoles200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of roles |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **removeRole**
> AssignRole200Response removeRole()

Remove a custom role from a user in the organization. Requires JWT Bearer token authentication. Both OrgBearerAuth and ProjectBearerAuth are supported (they use the same JWT token format). These are organization-level operations. 

### Example

```typescript
import {
    RolesApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new RolesApi(configuration);

let orgId: string; // (default to undefined)
let userId: string; // (default to undefined)

const { status, data } = await apiInstance.removeRole(
    orgId,
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orgId** | [**string**] |  | defaults to undefined|
| **userId** | [**string**] |  | defaults to undefined|


### Return type

**AssignRole200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Custom role removed successfully |  -  |
|**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateRole**
> UpdateRole200Response updateRole(updateRoleRequest)


### Example

```typescript
import {
    RolesApi,
    Configuration,
    UpdateRoleRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new RolesApi(configuration);

let orgId: string; // (default to undefined)
let roleId: string; // (default to undefined)
let updateRoleRequest: UpdateRoleRequest; //

const { status, data } = await apiInstance.updateRole(
    orgId,
    roleId,
    updateRoleRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateRoleRequest** | **UpdateRoleRequest**|  | |
| **orgId** | [**string**] |  | defaults to undefined|
| **roleId** | [**string**] |  | defaults to undefined|


### Return type

**UpdateRole200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Role updated successfully |  -  |
|**403** | Cannot modify system roles |  -  |
|**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

