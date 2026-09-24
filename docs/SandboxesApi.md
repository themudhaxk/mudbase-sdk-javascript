# SandboxesApi

All URIs are relative to *https://cloud.mudbase.dev*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**closeSandboxSession**](#closesandboxsession) | **DELETE** /api/sandboxes/projects/{projectId}/sessions/{sessionId} | Close sandbox session|
|[**createSandboxSession**](#createsandboxsession) | **POST** /api/sandboxes/projects/{projectId} | Create sandbox session|
|[**execSandboxSession**](#execsandboxsession) | **POST** /api/sandboxes/projects/{projectId}/sessions/{sessionId}/exec | Execute command in session|
|[**exposeSandboxPort**](#exposesandboxport) | **POST** /api/sandboxes/projects/{projectId}/sessions/{sessionId}/expose | Expose sandbox port|
|[**getSandboxConnectToken**](#getsandboxconnecttoken) | **POST** /api/sandboxes/projects/{projectId}/sessions/{sessionId}/connect-token | Issue connect token|
|[**getSandboxSession**](#getsandboxsession) | **GET** /api/sandboxes/projects/{projectId}/sessions/{sessionId} | Get sandbox session|
|[**listSandboxSessions**](#listsandboxsessions) | **GET** /api/sandboxes/projects/{projectId} | List sandbox sessions|
|[**resumeSandboxSession**](#resumesandboxsession) | **POST** /api/sandboxes/projects/{projectId}/sessions/{sessionId}/resume | Resume sandbox session|
|[**suspendSandboxSession**](#suspendsandboxsession) | **POST** /api/sandboxes/projects/{projectId}/sessions/{sessionId}/suspend | Suspend sandbox session|

# **closeSandboxSession**
> CloseSandboxSession200Response closeSandboxSession()

Explicitly terminate a sandbox session. The machine is destroyed and all in-memory state is discarded. Idempotent: closing an already-ended session returns 200. 

### Example

```typescript
import {
    SandboxesApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new SandboxesApi(configuration);

let projectId: string; // (default to undefined)
let sessionId: string; // (default to undefined)

const { status, data } = await apiInstance.closeSandboxSession(
    projectId,
    sessionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|
| **sessionId** | [**string**] |  | defaults to undefined|


### Return type

**CloseSandboxSession200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Session closed |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |
|**404** | Session not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createSandboxSession**
> CreateSandboxSessionResponse createSandboxSession(createSandboxSessionRequest)

Create a new isolated sandbox session for the project. The session boots an execution environment for the requested language and returns connection credentials (WebSocket URL and a short-lived JWT).  Supported languages and versions are determined by the images registered with the sandbox gateway. The session is automatically terminated after `timeoutSeconds` seconds of inactivity. 

### Example

```typescript
import {
    SandboxesApi,
    Configuration,
    CreateSandboxSessionRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new SandboxesApi(configuration);

let projectId: string; // (default to undefined)
let createSandboxSessionRequest: CreateSandboxSessionRequest; //

const { status, data } = await apiInstance.createSandboxSession(
    projectId,
    createSandboxSessionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createSandboxSessionRequest** | **CreateSandboxSessionRequest**|  | |
| **projectId** | [**string**] |  | defaults to undefined|


### Return type

**CreateSandboxSessionResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Session created |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |
|**403** | Sandbox feature not enabled for this org plan |  -  |
|**429** | Concurrent session limit or resource limit exceeded |  -  |
|**503** | Failed to create sandbox session |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **execSandboxSession**
> string execSandboxSession(execSandboxRequest)

Run a shell command inside a running sandbox and stream the output as Server-Sent Events (SSE). Each event carries one line of stdout/stderr or a final `exit` event with the process exit code.  If the session is currently suspended it is automatically resumed before the command is executed; the call blocks until the machine is running.  **Event stream format**  Each SSE event has a `data` field. Lines from stdout/stderr are prefixed with `stdout:` or `stderr:`. The final event has `data: exit:<code>`.  **Abort:** close the HTTP connection to cancel the command early. 

### Example

```typescript
import {
    SandboxesApi,
    Configuration,
    ExecSandboxRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new SandboxesApi(configuration);

let projectId: string; // (default to undefined)
let sessionId: string; // (default to undefined)
let execSandboxRequest: ExecSandboxRequest; //

const { status, data } = await apiInstance.execSandboxSession(
    projectId,
    sessionId,
    execSandboxRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **execSandboxRequest** | **ExecSandboxRequest**|  | |
| **projectId** | [**string**] |  | defaults to undefined|
| **sessionId** | [**string**] |  | defaults to undefined|


### Return type

**string**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text/event-stream, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | SSE stream. Content-Type is &#x60;text/event-stream&#x60;. Each event is one line of stdout/stderr or the final exit event.  |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |
|**404** | Session not found |  -  |
|**409** | Session is not running |  -  |
|**502** | Gateway returned an error proxying the exec request |  -  |
|**503** | Failed to exec in sandbox |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **exposeSandboxPort**
> ExposeSandboxPortResponse exposeSandboxPort(exposeSandboxPortRequest)

Expose an internal port on a running sandbox so the user\'s application is reachable from the internet at the session\'s stable public URL (`https://sb-{sessionId}.cells.mudbase.dev`). The caller is responsible for appending any path the application requires.  Use `access: \"token-gated\"` to require a `portToken` Bearer header on every request to the exposed URL, preventing public access. 

### Example

```typescript
import {
    SandboxesApi,
    Configuration,
    ExposeSandboxPortRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new SandboxesApi(configuration);

let projectId: string; // (default to undefined)
let sessionId: string; // (default to undefined)
let exposeSandboxPortRequest: ExposeSandboxPortRequest; //

const { status, data } = await apiInstance.exposeSandboxPort(
    projectId,
    sessionId,
    exposeSandboxPortRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **exposeSandboxPortRequest** | **ExposeSandboxPortRequest**|  | |
| **projectId** | [**string**] |  | defaults to undefined|
| **sessionId** | [**string**] |  | defaults to undefined|


### Return type

**ExposeSandboxPortResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Port exposed |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |
|**404** | Session not found |  -  |
|**409** | Session is not running |  -  |
|**503** | Failed to expose port |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSandboxConnectToken**
> GetSandboxConnectToken200Response getSandboxConnectToken()

Issue a fresh 60-second gateway JWT for an existing session. Use this when the original token from `POST .../sandboxes/projects/{projectId}` has expired (tokens are short-lived) and you need to reconnect to the same session. If the session is currently suspended it is automatically resumed before the token is issued; the call blocks until the machine is running. 

### Example

```typescript
import {
    SandboxesApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new SandboxesApi(configuration);

let projectId: string; // (default to undefined)
let sessionId: string; // (default to undefined)

const { status, data } = await apiInstance.getSandboxConnectToken(
    projectId,
    sessionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|
| **sessionId** | [**string**] |  | defaults to undefined|


### Return type

**GetSandboxConnectToken200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Fresh gateway JWT |  -  |
|**401** | Authentication required |  -  |
|**404** | Session not found |  -  |
|**409** | Session is ended or in error state |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSandboxSession**
> GetSandboxSession200Response getSandboxSession()

Return the status and metadata of a single sandbox session.

### Example

```typescript
import {
    SandboxesApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new SandboxesApi(configuration);

let projectId: string; // (default to undefined)
let sessionId: string; // (default to undefined)

const { status, data } = await apiInstance.getSandboxSession(
    projectId,
    sessionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|
| **sessionId** | [**string**] |  | defaults to undefined|


### Return type

**GetSandboxSession200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Session details |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |
|**404** | Session not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listSandboxSessions**
> ListSandboxSessions200Response listSandboxSessions()

Returns all running (and recently ended) sandbox sessions for the authenticated org. Results are not filtered by project; pass `projectId` to scope the list to a single project if needed. 

### Example

```typescript
import {
    SandboxesApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new SandboxesApi(configuration);

let projectId: string; // (default to undefined)

const { status, data } = await apiInstance.listSandboxSessions(
    projectId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|


### Return type

**ListSandboxSessions200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Session list |  -  |
|**401** | Authentication required |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resumeSandboxSession**
> ResumeSandboxSession200Response resumeSandboxSession()

Resume a suspended sandbox session. The machine is restarted from its frozen state. Returns immediately; the caller should poll `GET .../sessions/{sessionId}` until `status` is `running`. 

### Example

```typescript
import {
    SandboxesApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new SandboxesApi(configuration);

let projectId: string; // (default to undefined)
let sessionId: string; // (default to undefined)

const { status, data } = await apiInstance.resumeSandboxSession(
    projectId,
    sessionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|
| **sessionId** | [**string**] |  | defaults to undefined|


### Return type

**ResumeSandboxSession200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Session resumed |  -  |
|**401** | Authentication required |  -  |
|**404** | Session not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **suspendSandboxSession**
> SuspendSandboxSession200Response suspendSandboxSession()

Freeze an always-on sandbox session. The machine\'s memory state is preserved and the session resumes on the next connection. Only sessions with `alwaysOn: true` can be suspended. 

### Example

```typescript
import {
    SandboxesApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new SandboxesApi(configuration);

let projectId: string; // (default to undefined)
let sessionId: string; // (default to undefined)

const { status, data } = await apiInstance.suspendSandboxSession(
    projectId,
    sessionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|
| **sessionId** | [**string**] |  | defaults to undefined|


### Return type

**SuspendSandboxSession200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Session suspended |  -  |
|**400** | Session is not an always-on session |  -  |
|**401** | Authentication required |  -  |
|**404** | Session not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

