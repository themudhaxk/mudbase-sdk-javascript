# WebhooksApi

All URIs are relative to *https://cloud.mudbase.dev*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**configureWebhook**](#configurewebhook) | **PUT** /api/webhooks/projects/{projectId}/config | Create or update project webhook|
|[**getWebhookConfig**](#getwebhookconfig) | **GET** /api/webhooks/projects/{projectId}/config | Get project webhook configuration|
|[**getWebhookStats**](#getwebhookstats) | **GET** /api/webhooks/stats | Get webhook delivery statistics|
|[**listProjectWebhookLogs**](#listprojectwebhooklogs) | **GET** /api/webhooks/projects/{projectId} | List webhook delivery logs (project)|
|[**listWebhooks**](#listwebhooks) | **GET** /api/webhooks | List webhook delivery logs (organization)|
|[**retryWebhook**](#retrywebhook) | **POST** /api/webhooks/retry/{webhookId} | Retry a failed webhook delivery|
|[**testWebhookTransformation**](#testwebhooktransformation) | **POST** /api/webhooks/projects/{projectId}/test-transformation | Test webhook transformation|
|[**triggerWebhook**](#triggerwebhook) | **POST** /api/webhooks/trigger | Manually trigger an outbound webhook|

# **configureWebhook**
> ConfigureWebhook200Response configureWebhook()

Set or update the project webhook URL and options. This is how you **add** or **create** a webhook for a project: provide **webhookUrl** to enable delivery; omit or set to null to disable. Optionally set **webhookSecret**, **webhookEvents**, **webhookVersion**, and **transformations**. Plan limits (webhooks per project) apply when adding a new URL. Requires ProjectBearerAuth (JWT) or ApiKeyAuth (X-API-Key) with project update access. 

### Example

```typescript
import {
    WebhooksApi,
    Configuration,
    ConfigureWebhookRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let projectId: string; // (default to undefined)
let configureWebhookRequest: ConfigureWebhookRequest; // (optional)

const { status, data } = await apiInstance.configureWebhook(
    projectId,
    configureWebhookRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **configureWebhookRequest** | **ConfigureWebhookRequest**|  | |
| **projectId** | [**string**] |  | defaults to undefined|


### Return type

**ConfigureWebhook200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Webhook configuration updated |  -  |
|**403** | Project webhook limit reached for your plan |  -  |
|**404** | Project not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getWebhookConfig**
> GetWebhookConfig200Response getWebhookConfig()

Get the current webhook URL, events, version, and transformations for a project. This is **where Mudbase POSTs event payloads**; it does **not** return a `webhookId`. Delivery ids (`WebhookLog._id`) come from **`POST /api/webhooks/trigger`** or automatic deliveries, and from **list logs** endpoints.  Requires ProjectBearerAuth (JWT) or ApiKeyAuth (X-API-Key) with project read access. 

### Example

```typescript
import {
    WebhooksApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let projectId: string; // (default to undefined)

const { status, data } = await apiInstance.getWebhookConfig(
    projectId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|


### Return type

**GetWebhookConfig200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Webhook configuration |  -  |
|**404** | Project not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getWebhookStats**
> WebhookStatsResponse getWebhookStats()

Aggregates **`WebhookLog`** rows for your organization over the last **`days`** (default 7). Optional **`projectId`** filters to a project in your org.  Returns **`statusStats`** (counts and average duration per delivery **status**) and **`eventStats`** (counts and success rate per **event** name).  **Auth:** Organization JWT only (`authRequired`). 

### Example

```typescript
import {
    WebhooksApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let projectId: string; //Optional; limit stats to this project. (optional) (default to undefined)
let days: number; // (optional) (default to 7)

const { status, data } = await apiInstance.getWebhookStats(
    projectId,
    days
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] | Optional; limit stats to this project. | (optional) defaults to undefined|
| **days** | [**number**] |  | (optional) defaults to 7|


### Return type

**WebhookStatsResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Aggregated webhook log statistics |  -  |
|**400** | Bad request |  -  |
|**404** | Project not found or not in your org |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listProjectWebhookLogs**
> WebhookListResponse listProjectWebhookLogs()

Same **`WebhookLog`** documents as **`GET /api/webhooks`**, scoped to **`projectId`** in the path. Accepts **org JWT**, **project JWT**, or **project API key** with project read access.  Each item’s **`_id`** is the id returned as **`webhookId`** from **`POST /api/webhooks/trigger`** and used in **`POST /api/webhooks/retry/{webhookId}`**. 

### Example

```typescript
import {
    WebhooksApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let projectId: string; // (default to undefined)
let page: number; // (optional) (default to 1)
let limit: number; // (optional) (default to 20)
let status: 'pending' | 'success' | 'failed' | 'retrying'; // (optional) (default to undefined)
let event: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.listProjectWebhookLogs(
    projectId,
    page,
    limit,
    status,
    event
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|
| **page** | [**number**] |  | (optional) defaults to 1|
| **limit** | [**number**] |  | (optional) defaults to 20|
| **status** | [**&#39;pending&#39; | &#39;success&#39; | &#39;failed&#39; | &#39;retrying&#39;**]**Array<&#39;pending&#39; &#124; &#39;success&#39; &#124; &#39;failed&#39; &#124; &#39;retrying&#39;>** |  | (optional) defaults to undefined|
| **event** | [**string**] |  | (optional) defaults to undefined|


### Return type

**WebhookListResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Webhook delivery logs for the project |  -  |
|**401** | Authentication required |  -  |
|**403** | Access denied |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listWebhooks**
> WebhookListResponse listWebhooks()

Paginated **webhook delivery logs** for your organization (each row is one outbound HTTP attempt). Optional **`projectId`** query filters to a project that belongs to your org.  Use each log document’s **`_id`** (MongoDB ObjectId) as **`webhookId`** when calling **`POST /api/webhooks/retry/{webhookId}`** after a failed delivery. Organization **JWT only** (`OrgBearerAuth`); project API keys are not accepted on this route. 

### Example

```typescript
import {
    WebhooksApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let page: number; // (optional) (default to 1)
let limit: number; // (optional) (default to 20)
let status: 'pending' | 'success' | 'failed' | 'retrying'; // (optional) (default to undefined)
let event: string; // (optional) (default to undefined)
let projectId: string; //Optional; restrict logs to this project (must belong to your org). (optional) (default to undefined)

const { status, data } = await apiInstance.listWebhooks(
    page,
    limit,
    status,
    event,
    projectId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] |  | (optional) defaults to 1|
| **limit** | [**number**] |  | (optional) defaults to 20|
| **status** | [**&#39;pending&#39; | &#39;success&#39; | &#39;failed&#39; | &#39;retrying&#39;**]**Array<&#39;pending&#39; &#124; &#39;success&#39; &#124; &#39;failed&#39; &#124; &#39;retrying&#39;>** |  | (optional) defaults to undefined|
| **event** | [**string**] |  | (optional) defaults to undefined|
| **projectId** | [**string**] | Optional; restrict logs to this project (must belong to your org). | (optional) defaults to undefined|


### Return type

**WebhookListResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Webhook delivery logs |  -  |
|**400** | Bad request |  -  |
|**403** | Access denied |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retryWebhook**
> RetryWebhookResponse retryWebhook()

**`webhookId`** (path) = **`WebhookLog._id`** (MongoDB ObjectId)—the same value returned as **`webhookId`** from **`POST /api/webhooks/trigger`** and as **`_id`** on **`GET /api/webhooks`** / **`GET /api/webhooks/projects/{projectId}`**.  **Not** the string **`webhookId`** field stored on the log document (e.g. `manual-173…`); use the document **`_id`** for this path.  Resets a non-success log to **pending** and re-delivers. **400** if status is already **`success`**.  **Auth:** Organization JWT only; project API keys are not accepted. 

### Example

```typescript
import {
    WebhooksApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let webhookId: string; //WebhookLog document `_id` (delivery log id). (default to undefined)

const { status, data } = await apiInstance.retryWebhook(
    webhookId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webhookId** | [**string**] | WebhookLog document &#x60;_id&#x60; (delivery log id). | defaults to undefined|


### Return type

**RetryWebhookResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Retry queued |  -  |
|**400** | Log already succeeded |  -  |
|**401** | Authentication required |  -  |
|**403** | Access denied |  -  |
|**404** | Log not found or not in your org |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **testWebhookTransformation**
> TestWebhookTransformation200Response testWebhookTransformation(testWebhookTransformationRequest)

Apply transformation rules to a sample payload and return original and transformed payloads. Requires ProjectBearerAuth (JWT) or ApiKeyAuth (X-API-Key) with project update access. 

### Example

```typescript
import {
    WebhooksApi,
    Configuration,
    TestWebhookTransformationRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let projectId: string; // (default to undefined)
let testWebhookTransformationRequest: TestWebhookTransformationRequest; //

const { status, data } = await apiInstance.testWebhookTransformation(
    projectId,
    testWebhookTransformationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **testWebhookTransformationRequest** | **TestWebhookTransformationRequest**|  | |
| **projectId** | [**string**] |  | defaults to undefined|


### Return type

**TestWebhookTransformation200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Transformation result |  -  |
|**400** | payload and transformations are required |  -  |
|**404** | Project not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **triggerWebhook**
> TriggerWebhookResponse triggerWebhook(triggerWebhookRequest)

Queues an HTTP delivery to **`url`** for **`projectId`** (must belong to your org). Creates a **`WebhookLog`** row, runs delivery, and returns the new log’s **`_id`**.  **Response field `webhookId`:** This is the **MongoDB `_id` of the delivery log** (same as the log’s **`_id`** in list endpoints). It is **not** part of the request body and is **not** the project `webhookSecret` from **`PUT .../config`**.  **Auth:** Org JWT, project JWT, or project API key with **project `update`** permission. 

### Example

```typescript
import {
    WebhooksApi,
    Configuration,
    TriggerWebhookRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let triggerWebhookRequest: TriggerWebhookRequest; //

const { status, data } = await apiInstance.triggerWebhook(
    triggerWebhookRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **triggerWebhookRequest** | **TriggerWebhookRequest**|  | |


### Return type

**TriggerWebhookResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Delivery queued; **&#x60;webhookId&#x60;** is the new log document **&#x60;_id&#x60;** |  -  |
|**400** | Missing projectId, invalid project id, or invalid URL (SSRF guard) |  -  |
|**404** | Project not found or not in your org |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

