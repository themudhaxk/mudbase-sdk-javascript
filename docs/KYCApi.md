# KYCApi

All URIs are relative to *https://cloud.mudbase.dev*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiKycEventsGet**](#apikyceventsget) | **GET** /api/kyc/events | List recent compliance webhook deliveries|
|[**apiKycSessionsPost**](#apikycsessionspost) | **POST** /api/kyc/sessions | Start a platform KYC session|
|[**apiKycStatusGet**](#apikycstatusget) | **GET** /api/kyc/status | Get the organization\&#39;s platform KYC status|
|[**apiKycVerificationsIdGet**](#apikycverificationsidget) | **GET** /api/kyc/verifications/{id} | Get a single KYC verification record|
|[**apiKycWebhookConfigGet**](#apikycwebhookconfigget) | **GET** /api/kyc/webhook-config | Get white-label KYC webhook config|
|[**apiKycWebhookConfigPut**](#apikycwebhookconfigput) | **PUT** /api/kyc/webhook-config | Set white-label KYC webhook config|
|[**apiKycWebhookConfigTestPost**](#apikycwebhookconfigtestpost) | **POST** /api/kyc/webhook-config/test | Send a signed test event to the configured webhook endpoint|
|[**apiKycWorkflowsGet**](#apikycworkflowsget) | **GET** /api/kyc/workflows | List available verification workflows|
|[**apiProjectsProjectIdKybSessionsPost**](#apiprojectsprojectidkybsessionspost) | **POST** /api/projects/{projectId}/kyb/sessions | Start a business verification (KYB) session for one of your business customers|

# **apiKycEventsGet**
> apiKycEventsGet()

Audit trail of compliance webhook events received for this organization and whether Mudbase forwarded each one to the organization\'s own endpoint. Owner, admin, and developer roles.

### Example

```typescript
import {
    KYCApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new KYCApi(configuration);

let limit: number; //Maximum number of events to return. (optional) (default to 25)

const { status, data } = await apiInstance.apiKycEventsGet(
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | Maximum number of events to return. | (optional) defaults to 25|


### Return type

void (empty response body)

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Recent events, newest first |  -  |
|**401** | Authentication required |  -  |
|**403** | Insufficient role |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiKycSessionsPost**
> apiKycSessionsPost()

Creates a verification session for the caller\'s organization. Owner/admin only.

### Example

```typescript
import {
    KYCApi,
    Configuration,
    ApiKycSessionsPostRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new KYCApi(configuration);

let apiKycSessionsPostRequest: ApiKycSessionsPostRequest; // (optional)

const { status, data } = await apiInstance.apiKycSessionsPost(
    apiKycSessionsPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiKycSessionsPostRequest** | **ApiKycSessionsPostRequest**|  | |


### Return type

void (empty response body)

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Session created (returns the verification session URL and identifiers) |  -  |
|**401** | Authentication required |  -  |
|**403** | Insufficient role (owner/admin required) |  -  |
|**429** | Rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiKycStatusGet**
> apiKycStatusGet()


### Example

```typescript
import {
    KYCApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new KYCApi(configuration);

const { status, data } = await apiInstance.apiKycStatusGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

void (empty response body)

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Current KYC status for the caller\&#39;s organization |  -  |
|**401** | Authentication required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiKycVerificationsIdGet**
> apiKycVerificationsIdGet()


### Example

```typescript
import {
    KYCApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new KYCApi(configuration);

let id: string; //Verification record id. (default to undefined)

const { status, data } = await apiInstance.apiKycVerificationsIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Verification record id. | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The verification record |  -  |
|**401** | Authentication required |  -  |
|**404** | Verification not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiKycWebhookConfigGet**
> ApiKycWebhookConfigGet200Response apiKycWebhookConfigGet()

Returns the destination URL where the organization\'s own system receives KYC results and whether a signing secret is set. The secret value itself is never returned. Owner/admin only.

### Example

```typescript
import {
    KYCApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new KYCApi(configuration);

const { status, data } = await apiInstance.apiKycWebhookConfigGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiKycWebhookConfigGet200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Current webhook config |  -  |
|**401** | Authentication required |  -  |
|**403** | Insufficient role (owner/admin required) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiKycWebhookConfigPut**
> ApiKycWebhookConfigPut200Response apiKycWebhookConfigPut()

Updates the destination URL and/or signing secret used to deliver KYC results to the organization\'s own system. The outbound URL is SSRF-validated. When generateSecret is true a new secret is created and returned once. Owner/admin only.

### Example

```typescript
import {
    KYCApi,
    Configuration,
    ApiKycWebhookConfigPutRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new KYCApi(configuration);

let apiKycWebhookConfigPutRequest: ApiKycWebhookConfigPutRequest; // (optional)

const { status, data } = await apiInstance.apiKycWebhookConfigPut(
    apiKycWebhookConfigPutRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiKycWebhookConfigPutRequest** | **ApiKycWebhookConfigPutRequest**|  | |


### Return type

**ApiKycWebhookConfigPut200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated webhook config (includes webhookSecret only when freshly generated) |  -  |
|**400** | Invalid webhookUrl or webhookSecret |  -  |
|**401** | Authentication required |  -  |
|**403** | Insufficient role (owner/admin required) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiKycWebhookConfigTestPost**
> ApiKycWebhookConfigTestPost200Response apiKycWebhookConfigTestPost()

Delivers a sample `kyc.test` payload, signed exactly like a real event, so you can confirm your receiver and signature verification work. Ignores your event subscription. Owner/admin only.

### Example

```typescript
import {
    KYCApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new KYCApi(configuration);

const { status, data } = await apiInstance.apiKycWebhookConfigTestPost();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiKycWebhookConfigTestPost200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Delivery outcome |  -  |
|**400** | No webhook URL or signing secret configured |  -  |
|**401** | Authentication required |  -  |
|**403** | Insufficient role (owner/admin required) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiKycWorkflowsGet**
> ApiKycWorkflowsGet200Response apiKycWorkflowsGet()

Returns the verification workflows configured on this Mudbase account, split into kyc (individual identity) and kyb (business verification). Used to choose a default workflow in the console instead of pasting a workflow UUID. Owner/admin only.

### Example

```typescript
import {
    KYCApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new KYCApi(configuration);

const { status, data } = await apiInstance.apiKycWorkflowsGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiKycWorkflowsGet200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Available workflows grouped by product |  -  |
|**401** | Authentication required |  -  |
|**403** | Insufficient role (owner/admin required) |  -  |
|**503** | KYC is not configured on this server |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiProjectsProjectIdKybSessionsPost**
> apiProjectsProjectIdKybSessionsPost()

Creates a KYB session scoped to your project. The workflow is resolved from the request, then the organization\'s configured default KYB workflow, then the platform default. Results arrive at your configured KYC webhook as `kyb.completed`.

### Example

```typescript
import {
    KYCApi,
    Configuration,
    ApiProjectsProjectIdKybSessionsPostRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new KYCApi(configuration);

let projectId: string; // (default to undefined)
let apiProjectsProjectIdKybSessionsPostRequest: ApiProjectsProjectIdKybSessionsPostRequest; // (optional)

const { status, data } = await apiInstance.apiProjectsProjectIdKybSessionsPost(
    projectId,
    apiProjectsProjectIdKybSessionsPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiProjectsProjectIdKybSessionsPostRequest** | **ApiProjectsProjectIdKybSessionsPostRequest**|  | |
| **projectId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | KYB session created (returns the hosted verification URL) |  -  |
|**400** | No KYB workflow configured, or invalid input |  -  |
|**401** | Authentication required |  -  |
|**503** | KYC is not configured on this server |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

