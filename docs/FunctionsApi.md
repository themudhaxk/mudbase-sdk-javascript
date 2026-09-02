# FunctionsApi

All URIs are relative to *https://cloud.mudbase.dev*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**activateFunction**](#activatefunction) | **POST** /api/functions/projects/{projectId}/functions/{functionId}/activate | Activate function|
|[**createFunction**](#createfunction) | **POST** /api/functions/projects/{projectId}/functions | Create function|
|[**deactivateFunction**](#deactivatefunction) | **POST** /api/functions/projects/{projectId}/functions/{functionId}/deactivate | Deactivate function|
|[**deleteFunction**](#deletefunction) | **DELETE** /api/functions/projects/{projectId}/functions/{functionId} | Delete function|
|[**executeFunction**](#executefunction) | **POST** /api/functions/projects/{projectId}/functions/{functionId}/execute | Execute function|
|[**getFunction**](#getfunction) | **GET** /api/functions/projects/{projectId}/functions/{functionId} | Get function|
|[**getFunctionExecution**](#getfunctionexecution) | **GET** /api/functions/projects/{projectId}/functions/{functionId}/executions/{executionId} | Get execution status|
|[**getFunctionLogs**](#getfunctionlogs) | **GET** /api/functions/projects/{projectId}/functions/{functionId}/logs | Get function execution logs|
|[**getFunctionVersions**](#getfunctionversions) | **GET** /api/functions/projects/{projectId}/functions/{functionId}/versions | Get function versions|
|[**listFunctions**](#listfunctions) | **GET** /api/functions/projects/{projectId}/functions | List functions|
|[**retryFunctionExecution**](#retryfunctionexecution) | **POST** /api/functions/projects/{projectId}/functions/{functionId}/retry/{executionIndex} | Retry failed execution|
|[**rollbackFunction**](#rollbackfunction) | **POST** /api/functions/projects/{projectId}/functions/{functionId}/rollback | Rollback to previous version|
|[**simulateFunctionTrigger**](#simulatefunctiontrigger) | **POST** /api/functions/projects/{projectId}/functions/{functionId}/simulate | Simulate trigger|
|[**triggerFunctionWebhook**](#triggerfunctionwebhook) | **POST** /api/functions/webhook/{projectId} | Trigger webhook functions|
|[**updateFunction**](#updatefunction) | **PUT** /api/functions/projects/{projectId}/functions/{functionId} | Update function|

# **activateFunction**
> FunctionResponse activateFunction()

Activate a deactivated function. Active functions can be triggered.

### Example

```typescript
import {
    FunctionsApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new FunctionsApi(configuration);

let projectId: string; // (default to undefined)
let functionId: string; // (default to undefined)

const { status, data } = await apiInstance.activateFunction(
    projectId,
    functionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|
| **functionId** | [**string**] |  | defaults to undefined|


### Return type

**FunctionResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Function activated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createFunction**
> FunctionResponse createFunction(createFunctionRequest)

Create a new serverless function. Trigger types: http, document, file, webhook, wallet, cron, messaging. Sandbox globals available today: `payload`, `context`, `env`, `console`. Function code runs in an isolated worker with no ambient network or database access — it can only read its trigger payload, the `env` vars you configure, and return a JSON-serializable result; it cannot yet call back into your project\'s database, storage, messaging, or wallet APIs from inside the function body. If you need to read or write project data from a function, call the regular REST API (with your own API key) from your own backend in response to the function\'s returned result, rather than from within the function\'s own code. 

### Example

```typescript
import {
    FunctionsApi,
    Configuration,
    CreateFunctionRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new FunctionsApi(configuration);

let projectId: string; // (default to undefined)
let createFunctionRequest: CreateFunctionRequest; //

const { status, data } = await apiInstance.createFunction(
    projectId,
    createFunctionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createFunctionRequest** | **CreateFunctionRequest**|  | |
| **projectId** | [**string**] |  | defaults to undefined|


### Return type

**FunctionResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Function created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deactivateFunction**
> FunctionResponse deactivateFunction()

Deactivate a function. Deactivated functions will not be triggered.

### Example

```typescript
import {
    FunctionsApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new FunctionsApi(configuration);

let projectId: string; // (default to undefined)
let functionId: string; // (default to undefined)

const { status, data } = await apiInstance.deactivateFunction(
    projectId,
    functionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|
| **functionId** | [**string**] |  | defaults to undefined|


### Return type

**FunctionResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Function deactivated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteFunction**
> DeleteFunction200Response deleteFunction()

Delete a function permanently. This is a destructive operation.

### Example

```typescript
import {
    FunctionsApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new FunctionsApi(configuration);

let projectId: string; // (default to undefined)
let functionId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteFunction(
    projectId,
    functionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|
| **functionId** | [**string**] |  | defaults to undefined|


### Return type

**DeleteFunction200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Function deleted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **executeFunction**
> FunctionExecutionResponse executeFunction()

Manually execute a function with custom payload. Payload is merged with auto-injected trigger context. Rate limited (data mutation rate limiter). Enforces maxExecutionsPerMinute/maxExecutionsPerHour.  This endpoint is asynchronous: it returns 202 immediately with an `executionId`, before the function has necessarily finished running. Poll `GET /api/functions/projects/{projectId}/functions/{functionId}/executions/{executionId}` until `status` leaves `queued`/`running` to get the real result, error, and duration. 

### Example

```typescript
import {
    FunctionsApi,
    Configuration,
    ExecuteFunctionRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new FunctionsApi(configuration);

let projectId: string; // (default to undefined)
let functionId: string; // (default to undefined)
let executeFunctionRequest: ExecuteFunctionRequest; // (optional)

const { status, data } = await apiInstance.executeFunction(
    projectId,
    functionId,
    executeFunctionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **executeFunctionRequest** | **ExecuteFunctionRequest**|  | |
| **projectId** | [**string**] |  | defaults to undefined|
| **functionId** | [**string**] |  | defaults to undefined|


### Return type

**FunctionExecutionResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | Execution accepted (queued or run synchronously) — poll the executions endpoint for the outcome |  -  |
|**400** | Payload exceeds the function\&#39;s configured max payload size |  -  |
|**429** | Rate limit exceeded (maxExecutionsPerMinute/maxExecutionsPerHour, or the data-mutation rate limiter) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFunction**
> FunctionResponse getFunction()

Get function details by ID including createdBy/updatedBy.

### Example

```typescript
import {
    FunctionsApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new FunctionsApi(configuration);

let projectId: string; // (default to undefined)
let functionId: string; // (default to undefined)

const { status, data } = await apiInstance.getFunction(
    projectId,
    functionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|
| **functionId** | [**string**] |  | defaults to undefined|


### Return type

**FunctionResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Function details |  -  |
|**404** | Function not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFunctionExecution**
> FunctionExecutionStatusResponse getFunctionExecution()

Poll this after Execute function or Simulate trigger to get the real outcome — both of those endpoints return 202 immediately and do not carry the result themselves. `status` is one of `queued`, `provisioning`, `running`, `success`, `failed`, `timeout`; `result`/`error`/`durationMs`/`logs` are only populated once `status` leaves `queued`/`running`. 

### Example

```typescript
import {
    FunctionsApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new FunctionsApi(configuration);

let projectId: string; // (default to undefined)
let functionId: string; // (default to undefined)
let executionId: string; // (default to undefined)

const { status, data } = await apiInstance.getFunctionExecution(
    projectId,
    functionId,
    executionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|
| **functionId** | [**string**] |  | defaults to undefined|
| **executionId** | [**string**] |  | defaults to undefined|


### Return type

**FunctionExecutionStatusResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Execution status |  -  |
|**404** | Execution not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFunctionLogs**
> FunctionLogsResponse getFunctionLogs()

Get execution logs with pagination. Includes stats (totalExecutions, successful, failed, successRate, avgExecutionTime, lastRun).

### Example

```typescript
import {
    FunctionsApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new FunctionsApi(configuration);

let projectId: string; // (default to undefined)
let functionId: string; // (default to undefined)
let limit: number; // (optional) (default to 50)
let offset: number; // (optional) (default to 0)

const { status, data } = await apiInstance.getFunctionLogs(
    projectId,
    functionId,
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|
| **functionId** | [**string**] |  | defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to 50|
| **offset** | [**number**] |  | (optional) defaults to 0|


### Return type

**FunctionLogsResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Function logs and stats |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFunctionVersions**
> GetFunctionVersions200Response getFunctionVersions()

List all code versions for a function. Used for rollback.

### Example

```typescript
import {
    FunctionsApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new FunctionsApi(configuration);

let projectId: string; // (default to undefined)
let functionId: string; // (default to undefined)

const { status, data } = await apiInstance.getFunctionVersions(
    projectId,
    functionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|
| **functionId** | [**string**] |  | defaults to undefined|


### Return type

**GetFunctionVersions200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Function versions |  -  |
|**404** | Function not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listFunctions**
> FunctionListResponse listFunctions()

List serverless functions in a project with optional search and filters. Supports trigger types: http, event, document, file, webhook, wallet, cron, messaging. 

### Example

```typescript
import {
    FunctionsApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new FunctionsApi(configuration);

let projectId: string; // (default to undefined)
let page: number; // (optional) (default to 1)
let limit: number; // (optional) (default to 20)
let search: string; //Search by name or description (optional) (default to undefined)
let triggerType: 'http' | 'event' | 'document' | 'file' | 'webhook' | 'wallet' | 'cron' | 'messaging'; //Filter by trigger type (optional) (default to undefined)
let isActive: boolean; //Filter by active status (true/false) (optional) (default to undefined)

const { status, data } = await apiInstance.listFunctions(
    projectId,
    page,
    limit,
    search,
    triggerType,
    isActive
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|
| **page** | [**number**] |  | (optional) defaults to 1|
| **limit** | [**number**] |  | (optional) defaults to 20|
| **search** | [**string**] | Search by name or description | (optional) defaults to undefined|
| **triggerType** | [**&#39;http&#39; | &#39;event&#39; | &#39;document&#39; | &#39;file&#39; | &#39;webhook&#39; | &#39;wallet&#39; | &#39;cron&#39; | &#39;messaging&#39;**]**Array<&#39;http&#39; &#124; &#39;event&#39; &#124; &#39;document&#39; &#124; &#39;file&#39; &#124; &#39;webhook&#39; &#124; &#39;wallet&#39; &#124; &#39;cron&#39; &#124; &#39;messaging&#39;>** | Filter by trigger type | (optional) defaults to undefined|
| **isActive** | [**boolean**] | Filter by active status (true/false) | (optional) defaults to undefined|


### Return type

**FunctionListResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Functions list |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retryFunctionExecution**
> FunctionExecutionResponse retryFunctionExecution()

Retry a failed execution by its index (0-based) in the logs. Cannot retry successful executions.

### Example

```typescript
import {
    FunctionsApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new FunctionsApi(configuration);

let projectId: string; // (default to undefined)
let functionId: string; // (default to undefined)
let executionIndex: number; //0-based index of the execution in logs (default to undefined)

const { status, data } = await apiInstance.retryFunctionExecution(
    projectId,
    functionId,
    executionIndex
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|
| **functionId** | [**string**] |  | defaults to undefined|
| **executionIndex** | [**number**] | 0-based index of the execution in logs | defaults to undefined|


### Return type

**FunctionExecutionResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Retry result |  -  |
|**400** | Cannot retry successful execution |  -  |
|**404** | Function or execution not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rollbackFunction**
> FunctionResponse rollbackFunction(rollbackFunctionRequest)

Rollback function code to a previous version. Version number is required.

### Example

```typescript
import {
    FunctionsApi,
    Configuration,
    RollbackFunctionRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new FunctionsApi(configuration);

let projectId: string; // (default to undefined)
let functionId: string; // (default to undefined)
let rollbackFunctionRequest: RollbackFunctionRequest; //

const { status, data } = await apiInstance.rollbackFunction(
    projectId,
    functionId,
    rollbackFunctionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **rollbackFunctionRequest** | **RollbackFunctionRequest**|  | |
| **projectId** | [**string**] |  | defaults to undefined|
| **functionId** | [**string**] |  | defaults to undefined|


### Return type

**FunctionResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Function rolled back |  -  |
|**400** | Version number is required |  -  |
|**404** | Function or version not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **simulateFunctionTrigger**
> FunctionExecutionResponse simulateFunctionTrigger()

Test a function with simulated trigger context. Use to verify document, file, webhook, wallet, or cron payloads. Executes the function with the provided eventContext merged into the payload.  Asynchronous, same pattern as Execute function: returns 202 immediately with an `executionId`. Poll `GET /api/functions/projects/{projectId}/functions/{functionId}/executions/{executionId}` for the real result. 

### Example

```typescript
import {
    FunctionsApi,
    Configuration,
    SimulateFunctionTriggerRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new FunctionsApi(configuration);

let projectId: string; // (default to undefined)
let functionId: string; // (default to undefined)
let simulateFunctionTriggerRequest: SimulateFunctionTriggerRequest; // (optional)

const { status, data } = await apiInstance.simulateFunctionTrigger(
    projectId,
    functionId,
    simulateFunctionTriggerRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **simulateFunctionTriggerRequest** | **SimulateFunctionTriggerRequest**|  | |
| **projectId** | [**string**] |  | defaults to undefined|
| **functionId** | [**string**] |  | defaults to undefined|


### Return type

**FunctionExecutionResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | Simulation accepted — poll the executions endpoint for the outcome |  -  |
|**404** | Function not found or inactive |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **triggerFunctionWebhook**
> TriggerFunctionWebhook200Response triggerFunctionWebhook()

Public endpoint for external services to trigger functions with `trigger.type: webhook`. No authentication required. Optionally verify using `X-Webhook-Secret` header (configure per project or via FUNCTION_WEBHOOK_SECRET). Rate limited to 120 requests per 15 minutes per IP (per-org adjustable). 

### Example

```typescript
import {
    FunctionsApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new FunctionsApi(configuration);

let projectId: string; // (default to undefined)
let xWebhookSecret: string; //Optional webhook secret for verification (optional) (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.triggerFunctionWebhook(
    projectId,
    xWebhookSecret,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **projectId** | [**string**] |  | defaults to undefined|
| **xWebhookSecret** | [**string**] | Optional webhook secret for verification | (optional) defaults to undefined|


### Return type

**TriggerFunctionWebhook200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, text/plain
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Functions triggered successfully |  -  |
|**400** | Invalid project ID |  -  |
|**401** | Invalid webhook secret |  -  |
|**404** | Project not found |  -  |
|**429** | Rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateFunction**
> FunctionResponse updateFunction()

Update function configuration. Code changes are versioned automatically.

### Example

```typescript
import {
    FunctionsApi,
    Configuration,
    UpdateFunctionRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new FunctionsApi(configuration);

let projectId: string; // (default to undefined)
let functionId: string; // (default to undefined)
let updateFunctionRequest: UpdateFunctionRequest; // (optional)

const { status, data } = await apiInstance.updateFunction(
    projectId,
    functionId,
    updateFunctionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateFunctionRequest** | **UpdateFunctionRequest**|  | |
| **projectId** | [**string**] |  | defaults to undefined|
| **functionId** | [**string**] |  | defaults to undefined|


### Return type

**FunctionResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Function updated |  -  |
|**404** | Function not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

