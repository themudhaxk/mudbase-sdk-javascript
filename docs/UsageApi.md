# UsageApi

All URIs are relative to *https://cloud.mudbase.dev*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getOverage**](#getoverage) | **GET** /api/usage/overage | Get current overage line items|
|[**getProjectUsageStats**](#getprojectusagestats) | **GET** /api/usage/projects/{projectId} | Get project usage|
|[**getProjectUsageSummary**](#getprojectusagesummary) | **GET** /api/usage/projects/{projectId}/summary | Project dashboard usage summary|
|[**getUsage**](#getusage) | **GET** /api/usage | Get organization usage|
|[**getUsageTrends**](#getusagetrends) | **GET** /api/usage/trends | Get usage trends|
|[**getUsageWarnings**](#getusagewarnings) | **GET** /api/usage/warnings | Get usage warnings|

# **getOverage**
> GetOverage200Response getOverage()

Returns overage line items for the authenticated organization\'s current billing period (current month). Used by dashboards and billing UIs. Requires org-level JWT (authRequired). 

### Example

```typescript
import {
    UsageApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new UsageApi(configuration);

const { status, data } = await apiInstance.getOverage();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetOverage200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Overage line items for current period |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |
|**503** | Service temporarily unavailable. Returned when the organization is restricted (e.g. suspended due to unpaid overage, spend limit exceeded, or API usage limit reached). End-users see a generic message; the real reason is logged server-side only.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getProjectUsageStats**
> ProjectUsageStatsResponse getProjectUsageStats()

Get usage statistics for a project (API calls, storage, bandwidth, database operations). Accepts: OrgBearerAuth (for admin users), ProjectBearerAuth (JWT for authenticated users), or ApiKeyAuth (X-API-Key for programmatic access). Both ProjectBearerAuth and ApiKeyAuth are fully implemented. 

### Example

```typescript
import {
    UsageApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new UsageApi(configuration);

let projectId: string; // (default to undefined)
let period: 'day' | 'week' | 'month'; // (optional) (default to 'month')

const { status, data } = await apiInstance.getProjectUsageStats(
    projectId,
    period
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|
| **period** | [**&#39;day&#39; | &#39;week&#39; | &#39;month&#39;**]**Array<&#39;day&#39; &#124; &#39;week&#39; &#124; &#39;month&#39;>** |  | (optional) defaults to 'month'|


### Return type

**ProjectUsageStatsResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Project usage statistics |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getProjectUsageSummary**
> ProjectUsageSummaryResponse getProjectUsageSummary()

Lightweight dashboard metrics for a project: requests today vs yesterday with % change, active users (24h/7d/30d), 7d active-user trend, 14-day request volume series, per-project openapi-docs latency (today/7d), and uptime (30d) from org HTTP non-5xx when enough samples else DB heartbeats. Same auth as GET /api/usage/projects/{projectId} (org JWT, project JWT, or API key scoped to the project). 

### Example

```typescript
import {
    UsageApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new UsageApi(configuration);

let projectId: string; // (default to undefined)

const { status, data } = await apiInstance.getProjectUsageSummary(
    projectId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|


### Return type

**ProjectUsageSummaryResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Summary payload |  -  |
|**401** | Authentication required |  -  |
|**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUsage**
> UsageStatsResponse getUsage()


### Example

```typescript
import {
    UsageApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new UsageApi(configuration);

let period: 'day' | 'week' | 'month' | 'year'; // (optional) (default to 'month')
let startDate: string; // (optional) (default to undefined)
let endDate: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getUsage(
    period,
    startDate,
    endDate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **period** | [**&#39;day&#39; | &#39;week&#39; | &#39;month&#39; | &#39;year&#39;**]**Array<&#39;day&#39; &#124; &#39;week&#39; &#124; &#39;month&#39; &#124; &#39;year&#39;>** |  | (optional) defaults to 'month'|
| **startDate** | [**string**] |  | (optional) defaults to undefined|
| **endDate** | [**string**] |  | (optional) defaults to undefined|


### Return type

**UsageStatsResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Usage statistics |  -  |
|**503** | Service temporarily unavailable. Returned when the organization is restricted (e.g. suspended due to unpaid overage, spend limit exceeded, or API usage limit reached). End-users see a generic message; the real reason is logged server-side only.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUsageTrends**
> UsageTrendsResponse getUsageTrends()

Get usage trends over time for the authenticated organization or project. Accepts: OrgBearerAuth (for admin users), ProjectBearerAuth (JWT for authenticated users), or ApiKeyAuth (X-API-Key for programmatic access). Both ProjectBearerAuth and ApiKeyAuth are fully implemented. 

### Example

```typescript
import {
    UsageApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new UsageApi(configuration);

let days: number; // (optional) (default to 30)

const { status, data } = await apiInstance.getUsageTrends(
    days
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **days** | [**number**] |  | (optional) defaults to 30|


### Return type

**UsageTrendsResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Usage trends |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUsageWarnings**
> GetUsageWarnings200Response getUsageWarnings()

Returns usage warnings for the authenticated org (e.g. at 80% and 95% of plan limits). Requires org-level JWT.

### Example

```typescript
import {
    UsageApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new UsageApi(configuration);

const { status, data } = await apiInstance.getUsageWarnings();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetUsageWarnings200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Usage warnings |  -  |
|**400** | Organization required |  -  |
|**401** | Authentication required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

