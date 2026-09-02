# BugAnalysisApi

All URIs are relative to *https://cloud.mudbase.dev*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**startBugAnalysisScan**](#startbuganalysisscan) | **POST** /api/bug-analysis/scan | Start bug analysis scan (org-level)|
|[**startBugAnalysisScanByProject**](#startbuganalysisscanbyproject) | **POST** /api/bug-analysis/scan/{projectId} | Start bug analysis scan (project-scoped)|

# **startBugAnalysisScan**
> startBugAnalysisScan()

Start a bug analysis scan. Checks plan limit (scans/month, upload size, runtime) before starting. Currently returns 503 COMING_SOON until the feature is implemented; usage will not be charged until then. 

### Example

```typescript
import {
    BugAnalysisApi,
    Configuration,
    StartBugAnalysisScanRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new BugAnalysisApi(configuration);

let startBugAnalysisScanRequest: StartBugAnalysisScanRequest; // (optional)

const { status, data } = await apiInstance.startBugAnalysisScan(
    startBugAnalysisScanRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **startBugAnalysisScanRequest** | **StartBugAnalysisScanRequest**|  | |


### Return type

void (empty response body)

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Scan started (when implemented) |  -  |
|**400** | Organization required |  -  |
|**403** | Bug analysis limit exceeded for your plan |  -  |
|**503** | Bug analysis not yet available (COMING_SOON) |  -  |
|**401** | Authentication required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **startBugAnalysisScanByProject**
> startBugAnalysisScanByProject()

Same as POST /api/bug-analysis/scan with projectId in path; validates project access. Returns 503 COMING_SOON until implemented.

### Example

```typescript
import {
    BugAnalysisApi,
    Configuration,
    StartBugAnalysisScanByProjectRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new BugAnalysisApi(configuration);

let projectId: string; // (default to undefined)
let startBugAnalysisScanByProjectRequest: StartBugAnalysisScanByProjectRequest; // (optional)

const { status, data } = await apiInstance.startBugAnalysisScanByProject(
    projectId,
    startBugAnalysisScanByProjectRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **startBugAnalysisScanByProjectRequest** | **StartBugAnalysisScanByProjectRequest**|  | |
| **projectId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Scan started (when implemented) |  -  |
|**400** | Organization required |  -  |
|**403** | Bug analysis limit exceeded or project access denied |  -  |
|**503** | Bug analysis not yet available (COMING_SOON) |  -  |
|**401** | Authentication required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

