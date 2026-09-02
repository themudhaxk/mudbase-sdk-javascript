# AddOnsApi

All URIs are relative to *https://cloud.mudbase.dev*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiAddonsGet**](#apiaddonsget) | **GET** /api/addons | List the add-on catalog|
|[**apiProjectsProjectIdAddonsAddonInvokePost**](#apiprojectsprojectidaddonsaddoninvokepost) | **POST** /api/projects/{projectId}/addons/{addon}/invoke | Invoke an add-on for a project|
|[**apiProjectsProjectIdAddonsJobsIdGet**](#apiprojectsprojectidaddonsjobsidget) | **GET** /api/projects/{projectId}/addons/jobs/{id} | Get an add-on job status|

# **apiAddonsGet**
> ApiAddonsGet200Response apiAddonsGet()

Returns the available add-ons (key, metadata, pricing) the caller can invoke.

### Example

```typescript
import {
    AddOnsApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new AddOnsApi(configuration);

const { status, data } = await apiInstance.apiAddonsGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiAddonsGet200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Add-on catalog |  -  |
|**401** | Authentication required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiProjectsProjectIdAddonsAddonInvokePost**
> ApiProjectsProjectIdAddonsAddonInvokePost200Response apiProjectsProjectIdAddonsAddonInvokePost()

Runs the named add-on against the project. Returns the job synchronously (200) when it completes immediately, or 202 with a pending job when processing continues in the background.

### Example

```typescript
import {
    AddOnsApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new AddOnsApi(configuration);

let projectId: string; // (default to undefined)
let addon: string; //Add-on key from the catalog. (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.apiProjectsProjectIdAddonsAddonInvokePost(
    projectId,
    addon,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **projectId** | [**string**] |  | defaults to undefined|
| **addon** | [**string**] | Add-on key from the catalog. | defaults to undefined|


### Return type

**ApiProjectsProjectIdAddonsAddonInvokePost200Response**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Add-on job completed |  -  |
|**202** | Add-on job accepted and processing |  -  |
|**400** | Invalid add-on key or input |  -  |
|**401** | Authentication required |  -  |
|**403** | Project ownership required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiProjectsProjectIdAddonsJobsIdGet**
> ApiProjectsProjectIdAddonsAddonInvokePost200Response apiProjectsProjectIdAddonsJobsIdGet()


### Example

```typescript
import {
    AddOnsApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new AddOnsApi(configuration);

let projectId: string; // (default to undefined)
let id: string; //Add-on job id. (default to undefined)

const { status, data } = await apiInstance.apiProjectsProjectIdAddonsJobsIdGet(
    projectId,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|
| **id** | [**string**] | Add-on job id. | defaults to undefined|


### Return type

**ApiProjectsProjectIdAddonsAddonInvokePost200Response**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The add-on job |  -  |
|**401** | Authentication required |  -  |
|**403** | Project ownership required |  -  |
|**404** | Add-on job not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

