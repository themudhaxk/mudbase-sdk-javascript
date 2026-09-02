# RoleElevationApi

All URIs are relative to *https://cloud.mudbase.dev*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**approveRoleElevation**](#approveroleelevation) | **POST** /api/orgs/{orgId}/role-elevation/{requestId}/approve | Approve/reject role elevation request (admin only)|
|[**getPendingRoleElevationRequests**](#getpendingroleelevationrequests) | **GET** /api/orgs/{orgId}/role-elevation/pending | Get pending role elevation requests (admin only)|
|[**getRoleElevationStatus**](#getroleelevationstatus) | **GET** /api/projects/{projectId}/role-elevation/status | Get role elevation status|
|[**requestRoleElevation**](#requestroleelevation) | **POST** /api/projects/{projectId}/role-elevation/request | Request role elevation|
|[**uploadVerificationDocuments**](#uploadverificationdocuments) | **POST** /api/projects/{projectId}/role-elevation/documents | Upload verification documents|

# **approveRoleElevation**
> ApproveRoleElevation200Response approveRoleElevation(approveRoleElevationRequest)

Admin approves or rejects a role elevation request

### Example

```typescript
import {
    RoleElevationApi,
    Configuration,
    ApproveRoleElevationRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new RoleElevationApi(configuration);

let orgId: string; // (default to undefined)
let requestId: string; // (default to undefined)
let approveRoleElevationRequest: ApproveRoleElevationRequest; //

const { status, data } = await apiInstance.approveRoleElevation(
    orgId,
    requestId,
    approveRoleElevationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **approveRoleElevationRequest** | **ApproveRoleElevationRequest**|  | |
| **orgId** | [**string**] |  | defaults to undefined|
| **requestId** | [**string**] |  | defaults to undefined|


### Return type

**ApproveRoleElevation200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Request approved/rejected |  -  |
|**400** | Requirements not met |  -  |
|**403** | Insufficient permissions |  -  |
|**404** | Request not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPendingRoleElevationRequests**
> GetPendingRoleElevationRequests200Response getPendingRoleElevationRequests()

Get all pending role elevation requests requiring admin approval

### Example

```typescript
import {
    RoleElevationApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new RoleElevationApi(configuration);

let orgId: string; // (default to undefined)
let status: 'pending' | 'approved' | 'rejected'; // (optional) (default to 'pending')
let page: number; // (optional) (default to 1)
let limit: number; // (optional) (default to 50)

const { status, data } = await apiInstance.getPendingRoleElevationRequests(
    orgId,
    status,
    page,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orgId** | [**string**] |  | defaults to undefined|
| **status** | [**&#39;pending&#39; | &#39;approved&#39; | &#39;rejected&#39;**]**Array<&#39;pending&#39; &#124; &#39;approved&#39; &#124; &#39;rejected&#39;>** |  | (optional) defaults to 'pending'|
| **page** | [**number**] |  | (optional) defaults to 1|
| **limit** | [**number**] |  | (optional) defaults to 50|


### Return type

**GetPendingRoleElevationRequests200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of pending requests |  -  |
|**403** | Insufficient permissions |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRoleElevationStatus**
> GetRoleElevationStatus200Response getRoleElevationStatus()

Get status of pending role elevation requests for current user

### Example

```typescript
import {
    RoleElevationApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new RoleElevationApi(configuration);

let projectId: string; // (default to undefined)
let roleSlug: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getRoleElevationStatus(
    projectId,
    roleSlug
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|
| **roleSlug** | [**string**] |  | (optional) defaults to undefined|


### Return type

**GetRoleElevationStatus200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of role elevation requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **requestRoleElevation**
> RequestRoleElevation200Response requestRoleElevation(requestRoleElevationRequest)

User requests to upgrade to a specific role. May require payment, KYC, or admin approval based on role configuration.

### Example

```typescript
import {
    RoleElevationApi,
    Configuration,
    RequestRoleElevationRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new RoleElevationApi(configuration);

let projectId: string; // (default to undefined)
let requestRoleElevationRequest: RequestRoleElevationRequest; //

const { status, data } = await apiInstance.requestRoleElevation(
    projectId,
    requestRoleElevationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestRoleElevationRequest** | **RequestRoleElevationRequest**|  | |
| **projectId** | [**string**] |  | defaults to undefined|


### Return type

**RequestRoleElevation200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Role elevation request created or auto-approved |  -  |
|**400** | Invalid request or already has role |  -  |
|**403** | Cannot request role with higher hierarchy |  -  |
|**404** | Role not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uploadVerificationDocuments**
> uploadVerificationDocuments(uploadVerificationDocumentsRequest)

Upload KYC/verification documents for role elevation

### Example

```typescript
import {
    RoleElevationApi,
    Configuration,
    UploadVerificationDocumentsRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new RoleElevationApi(configuration);

let projectId: string; // (default to undefined)
let uploadVerificationDocumentsRequest: UploadVerificationDocumentsRequest; //

const { status, data } = await apiInstance.uploadVerificationDocuments(
    projectId,
    uploadVerificationDocumentsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uploadVerificationDocumentsRequest** | **UploadVerificationDocumentsRequest**|  | |
| **projectId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Documents uploaded successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

