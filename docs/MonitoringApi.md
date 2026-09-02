# MonitoringApi

All URIs are relative to *https://cloud.mudbase.dev*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createMonitoringAlert**](#createmonitoringalert) | **POST** /api/monitoring/alerts | Create monitoring alert|
|[**getMonitoringAnalytics**](#getmonitoringanalytics) | **GET** /api/monitoring/analytics | Get usage analytics (time series)|
|[**getMonitoringErrors**](#getmonitoringerrors) | **GET** /api/monitoring/errors | Get error logs|
|[**getMonitoringLatencyInsights**](#getmonitoringlatencyinsights) | **GET** /api/monitoring/latency-insights | Latency insights (route templates, percentiles, impact scores)|
|[**getMonitoringLogs**](#getmonitoringlogs) | **GET** /api/monitoring/logs | Get audit logs|
|[**getMonitoringPerformance**](#getmonitoringperformance) | **GET** /api/monitoring/performance | Get performance metrics|
|[**getMonitoringQueueMetrics**](#getmonitoringqueuemetrics) | **GET** /api/monitoring/queue-metrics | Usage metering queue job counts|
|[**getScannerMetrics**](#getscannermetrics) | **GET** /api/monitoring/scanner-metrics | Get block scanner metrics|
|[**listMonitoringAlerts**](#listmonitoringalerts) | **GET** /api/monitoring/alerts | List monitoring alerts|

# **createMonitoringAlert**
> createMonitoringAlert(createMonitoringAlertRequest)

Create a monitoring alert (plan limit alertsPerProject enforced).

### Example

```typescript
import {
    MonitoringApi,
    Configuration,
    CreateMonitoringAlertRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new MonitoringApi(configuration);

let createMonitoringAlertRequest: CreateMonitoringAlertRequest; //

const { status, data } = await apiInstance.createMonitoringAlert(
    createMonitoringAlertRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createMonitoringAlertRequest** | **CreateMonitoringAlertRequest**|  | |


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
|**201** | Alert created |  -  |
|**401** | Authentication required |  -  |
|**403** | Alert limit reached for your plan |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMonitoringAnalytics**
> MonitoringAnalyticsResponse getMonitoringAnalytics()

Aggregates UsageStat by day/week/month. Optional **projectId** scopes to one project. Query **days** (1–90) for a rolling window (e.g. **days=14**); when set, overrides **period**. 

### Example

```typescript
import {
    MonitoringApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new MonitoringApi(configuration);

let projectId: string; // (optional) (default to undefined)
let period: 'day' | 'week' | 'month'; // (optional) (default to 'month')
let granularity: 'day' | 'week' | 'month'; // (optional) (default to 'day')
let days: number; //Rolling window in days (1–90); when set, period becomes last_N_days (optional) (default to undefined)

const { status, data } = await apiInstance.getMonitoringAnalytics(
    projectId,
    period,
    granularity,
    days
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | (optional) defaults to undefined|
| **period** | [**&#39;day&#39; | &#39;week&#39; | &#39;month&#39;**]**Array<&#39;day&#39; &#124; &#39;week&#39; &#124; &#39;month&#39;>** |  | (optional) defaults to 'month'|
| **granularity** | [**&#39;day&#39; | &#39;week&#39; | &#39;month&#39;**]**Array<&#39;day&#39; &#124; &#39;week&#39; &#124; &#39;month&#39;>** |  | (optional) defaults to 'day'|
| **days** | [**number**] | Rolling window in days (1–90); when set, period becomes last_N_days | (optional) defaults to undefined|


### Return type

**MonitoringAnalyticsResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Stats series and totals |  -  |
|**401** | Authentication required |  -  |
|**404** | Project not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMonitoringErrors**
> getMonitoringErrors()


### Example

```typescript
import {
    MonitoringApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new MonitoringApi(configuration);

const { status, data } = await apiInstance.getMonitoringErrors();
```

### Parameters
This endpoint does not have any parameters.


### Return type

void (empty response body)

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Error logs |  -  |
|**401** | Authentication required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMonitoringLatencyInsights**
> getMonitoringLatencyInsights()

Per-process snapshot: normalized **routeKey** (METHOD + path template), **p50/p95/p99**, 4xx/5xx counts, **impactScore**, **alertsSuggested**, **rps**, **inFlight**, **eventLoopLagP99Ms**. One buffer per server instance. 

### Example

```typescript
import {
    MonitoringApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new MonitoringApi(configuration);

const { status, data } = await apiInstance.getMonitoringLatencyInsights();
```

### Parameters
This endpoint does not have any parameters.


### Return type

void (empty response body)

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Latency insights payload |  -  |
|**401** | Authentication required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMonitoringLogs**
> MonitoringLogsResponse getMonitoringLogs()

Paginated audit trail for the org. Use **projectId** to scope to one project; **level=all** or **audit** for full activity feed. Each entry includes **activityTitle** and **activityDetail** for dashboard copy. Requires monitoring read permission. 

### Example

```typescript
import {
    MonitoringApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new MonitoringApi(configuration);

let page: number; // (optional) (default to 1)
let limit: number; // (optional) (default to 20)
let projectId: string; //Filter to this project (must belong to org) (optional) (default to undefined)
let userId: string; //Filter to this user\'s audit entries (optional) (default to undefined)
let level: string; //error|security|all|audit|low|medium|high|critical (optional) (default to 'error')
let startDate: string; // (optional) (default to undefined)
let endDate: string; // (optional) (default to undefined)
let action: string; // (optional) (default to undefined)
let resource: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getMonitoringLogs(
    page,
    limit,
    projectId,
    userId,
    level,
    startDate,
    endDate,
    action,
    resource
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] |  | (optional) defaults to 1|
| **limit** | [**number**] |  | (optional) defaults to 20|
| **projectId** | [**string**] | Filter to this project (must belong to org) | (optional) defaults to undefined|
| **userId** | [**string**] | Filter to this user\&#39;s audit entries | (optional) defaults to undefined|
| **level** | [**string**] | error|security|all|audit|low|medium|high|critical | (optional) defaults to 'error'|
| **startDate** | [**string**] |  | (optional) defaults to undefined|
| **endDate** | [**string**] |  | (optional) defaults to undefined|
| **action** | [**string**] |  | (optional) defaults to undefined|
| **resource** | [**string**] |  | (optional) defaults to undefined|


### Return type

**MonitoringLogsResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Audit logs with pagination |  -  |
|**400** | Invalid userId format |  -  |
|**401** | Authentication required |  -  |
|**404** | Project not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMonitoringPerformance**
> MonitoringPerformanceResponse getMonitoringPerformance()

Response time stats from AuditLog where available. With **projectId**, falls back to UsageStat latency averages when audit data is sparse (**latencySource** may be **usage_stat**). 

### Example

```typescript
import {
    MonitoringApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new MonitoringApi(configuration);

let projectId: string; // (optional) (default to undefined)
let period: 'hour' | 'day' | 'week'; // (optional) (default to 'hour')

const { status, data } = await apiInstance.getMonitoringPerformance(
    projectId,
    period
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | (optional) defaults to undefined|
| **period** | [**&#39;hour&#39; | &#39;day&#39; | &#39;week&#39;**]**Array<&#39;hour&#39; &#124; &#39;day&#39; &#124; &#39;week&#39;>** |  | (optional) defaults to 'hour'|


### Return type

**MonitoringPerformanceResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Performance metrics |  -  |
|**401** | Authentication required |  -  |
|**404** | Project not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMonitoringQueueMetrics**
> getMonitoringQueueMetrics()

BullMQ **usage-events** queue counts when `USE_METERING_QUEUE` and `REDIS_URL` are set.

### Example

```typescript
import {
    MonitoringApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new MonitoringApi(configuration);

const { status, data } = await apiInstance.getMonitoringQueueMetrics();
```

### Parameters
This endpoint does not have any parameters.


### Return type

void (empty response body)

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Queue depth snapshot |  -  |
|**401** | Authentication required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getScannerMetrics**
> GetScannerMetrics200Response getScannerMetrics()

Returns per-chain block scanner lag and health. Used for observability of ETH/UTXO block-based wallet monitoring. Alerts when lag exceeds threshold.

### Example

```typescript
import {
    MonitoringApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new MonitoringApi(configuration);

const { status, data } = await apiInstance.getScannerMetrics();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetScannerMetrics200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Scanner metrics and optional lag alerts |  -  |
|**401** | Authentication required |  -  |
|**500** | Failed to fetch scanner metrics |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listMonitoringAlerts**
> listMonitoringAlerts()


### Example

```typescript
import {
    MonitoringApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new MonitoringApi(configuration);

const { status, data } = await apiInstance.listMonitoringAlerts();
```

### Parameters
This endpoint does not have any parameters.


### Return type

void (empty response body)

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of alerts |  -  |
|**401** | Authentication required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

