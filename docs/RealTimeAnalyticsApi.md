# RealTimeAnalyticsApi

All URIs are relative to *https://cloud.mudbase.dev*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**checkUserPresence**](#checkuserpresence) | **POST** /api/realtime/projects/{projectId}/presence | Check presence status for users|
|[**getActiveUsers**](#getactiveusers) | **GET** /api/realtime/projects/{projectId}/active-users | Get active users for a project|
|[**getEventThroughput**](#geteventthroughput) | **GET** /api/realtime/projects/{projectId}/throughput | Get event throughput metrics|
|[**getGlobalAnalytics**](#getglobalanalytics) | **GET** /api/realtime/analytics | Get global real-time analytics|
|[**getHistoricalAnalytics**](#gethistoricalanalytics) | **GET** /api/realtime/projects/{projectId}/history | Get historical analytics|
|[**getProjectAnalytics**](#getprojectanalytics) | **GET** /api/realtime/projects/{projectId}/analytics | Get project real-time analytics|

# **checkUserPresence**
> CheckUserPresence200Response checkUserPresence(checkUserPresenceRequest)

Returns online status for specified user IDs

### Example

```typescript
import {
    RealTimeAnalyticsApi,
    Configuration,
    CheckUserPresenceRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new RealTimeAnalyticsApi(configuration);

let projectId: string; // (default to undefined)
let checkUserPresenceRequest: CheckUserPresenceRequest; //

const { status, data } = await apiInstance.checkUserPresence(
    projectId,
    checkUserPresenceRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **checkUserPresenceRequest** | **CheckUserPresenceRequest**|  | |
| **projectId** | [**string**] |  | defaults to undefined|


### Return type

**CheckUserPresence200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Presence status for each user |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |
|**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getActiveUsers**
> GetActiveUsers200Response getActiveUsers()

Returns list of currently connected users

### Example

```typescript
import {
    RealTimeAnalyticsApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new RealTimeAnalyticsApi(configuration);

let projectId: string; // (default to undefined)

const { status, data } = await apiInstance.getActiveUsers(
    projectId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|


### Return type

**GetActiveUsers200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of active users |  -  |
|**401** | Authentication required |  -  |
|**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getEventThroughput**
> GetEventThroughput200Response getEventThroughput()

Returns event throughput for a project

### Example

```typescript
import {
    RealTimeAnalyticsApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new RealTimeAnalyticsApi(configuration);

let projectId: string; // (default to undefined)
let window: number; //Time window in milliseconds (optional) (default to 60000)

const { status, data } = await apiInstance.getEventThroughput(
    projectId,
    window
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|
| **window** | [**number**] | Time window in milliseconds | (optional) defaults to 60000|


### Return type

**GetEventThroughput200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Throughput metrics |  -  |
|**401** | Authentication required |  -  |
|**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getGlobalAnalytics**
> GetGlobalAnalytics200Response getGlobalAnalytics()

Returns system-wide real-time metrics (admin only)

### Example

```typescript
import {
    RealTimeAnalyticsApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new RealTimeAnalyticsApi(configuration);

const { status, data } = await apiInstance.getGlobalAnalytics();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetGlobalAnalytics200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Global analytics data |  -  |
|**401** | Authentication required |  -  |
|**403** | Access denied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getHistoricalAnalytics**
> GetHistoricalAnalytics200Response getHistoricalAnalytics()

Returns historical analytics for charting

### Example

```typescript
import {
    RealTimeAnalyticsApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new RealTimeAnalyticsApi(configuration);

let projectId: string; // (default to undefined)
let period: 'hour' | 'day' | 'week'; //Time period for historical data (optional) (default to 'hour')

const { status, data } = await apiInstance.getHistoricalAnalytics(
    projectId,
    period
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|
| **period** | [**&#39;hour&#39; | &#39;day&#39; | &#39;week&#39;**]**Array<&#39;hour&#39; &#124; &#39;day&#39; &#124; &#39;week&#39;>** | Time period for historical data | (optional) defaults to 'hour'|


### Return type

**GetHistoricalAnalytics200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Historical analytics data |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |
|**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getProjectAnalytics**
> GetProjectAnalytics200Response getProjectAnalytics()

Returns real-time metrics for a specific project (active connections, events, etc.)

### Example

```typescript
import {
    RealTimeAnalyticsApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new RealTimeAnalyticsApi(configuration);

let projectId: string; // (default to undefined)

const { status, data } = await apiInstance.getProjectAnalytics(
    projectId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|


### Return type

**GetProjectAnalytics200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Project analytics data |  -  |
|**401** | Authentication required |  -  |
|**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

