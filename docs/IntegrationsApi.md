# IntegrationsApi

All URIs are relative to *https://cloud.mudbase.dev*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createFromTemplate**](#createfromtemplate) | **POST** /api/integrations/projects/{projectId}/integrations/from-template | Create integration from template|
|[**createIntegration**](#createintegration) | **POST** /api/integrations/projects/{projectId}/integrations | Create new integration|
|[**deleteIntegration**](#deleteintegration) | **DELETE** /api/integrations/projects/{projectId}/integrations/{integrationId} | Delete integration|
|[**executeIntegration**](#executeintegration) | **POST** /api/integrations/projects/{projectId}/integrations/{integrationId}/execute | Execute integration|
|[**exportIntegration**](#exportintegration) | **GET** /api/integrations/projects/{projectId}/integrations/{integrationId}/export | Export integration|
|[**getIntegration**](#getintegration) | **GET** /api/integrations/projects/{projectId}/integrations/{integrationId} | Get integration details|
|[**getIntegrations**](#getintegrations) | **GET** /api/integrations/projects/{projectId}/integrations | Get project integrations|
|[**getTemplates**](#gettemplates) | **GET** /api/integrations/templates | Get integration templates|
|[**getUsageStats**](#getusagestats) | **GET** /api/integrations/projects/{projectId}/integrations/{integrationId}/usage | Get integration usage statistics|
|[**importIntegration**](#importintegration) | **POST** /api/integrations/projects/{projectId}/integrations/import | Import integration|
|[**testIntegration**](#testintegration) | **POST** /api/integrations/projects/{projectId}/integrations/{integrationId}/test | Test integration|
|[**updateIntegration**](#updateintegration) | **PATCH** /api/integrations/projects/{projectId}/integrations/{integrationId} | Update integration|

# **createFromTemplate**
> CreateIntegration201Response createFromTemplate(createFromTemplateRequest)

Create a new integration using a pre-configured template. Accepts: OrgBearerAuth (for admin users), ProjectBearerAuth (JWT for authenticated users), or ApiKeyAuth (X-API-Key for programmatic access). Both ProjectBearerAuth and ApiKeyAuth are fully implemented. 

### Example

```typescript
import {
    IntegrationsApi,
    Configuration,
    CreateFromTemplateRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new IntegrationsApi(configuration);

let projectId: string; // (default to undefined)
let createFromTemplateRequest: CreateFromTemplateRequest; //

const { status, data } = await apiInstance.createFromTemplate(
    projectId,
    createFromTemplateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createFromTemplateRequest** | **CreateFromTemplateRequest**|  | |
| **projectId** | [**string**] |  | defaults to undefined|


### Return type

**CreateIntegration201Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Integration created from template |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createIntegration**
> CreateIntegration201Response createIntegration(createIntegrationRequest)

Create a new third-party service integration for a project. Accepts: OrgBearerAuth (for admin users), ProjectBearerAuth (JWT for authenticated users), or ApiKeyAuth (X-API-Key for programmatic access). Both ProjectBearerAuth and ApiKeyAuth are fully implemented. 

### Example

```typescript
import {
    IntegrationsApi,
    Configuration,
    CreateIntegrationRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new IntegrationsApi(configuration);

let projectId: string; // (default to undefined)
let createIntegrationRequest: CreateIntegrationRequest; //

const { status, data } = await apiInstance.createIntegration(
    projectId,
    createIntegrationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createIntegrationRequest** | **CreateIntegrationRequest**|  | |
| **projectId** | [**string**] |  | defaults to undefined|


### Return type

**CreateIntegration201Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Integration created |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteIntegration**
> MessageResponse deleteIntegration()

Delete an integration from a project. Accepts: OrgBearerAuth (for admin users), ProjectBearerAuth (JWT for authenticated users), or ApiKeyAuth (X-API-Key for programmatic access). Both ProjectBearerAuth and ApiKeyAuth are fully implemented. 

### Example

```typescript
import {
    IntegrationsApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new IntegrationsApi(configuration);

let projectId: string; // (default to undefined)
let integrationId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteIntegration(
    projectId,
    integrationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|
| **integrationId** | [**string**] |  | defaults to undefined|


### Return type

**MessageResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Integration deleted |  -  |
|**401** | Authentication required |  -  |
|**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **executeIntegration**
> TestWalletWebhook200Response executeIntegration(executeIntegrationRequest)

Execute an integration action (API call) with specified endpoint and parameters. Accepts: OrgBearerAuth (for admin users), ProjectBearerAuth (JWT for authenticated users), or ApiKeyAuth (X-API-Key for programmatic access). Both ProjectBearerAuth and ApiKeyAuth are fully implemented. 

### Example

```typescript
import {
    IntegrationsApi,
    Configuration,
    ExecuteIntegrationRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new IntegrationsApi(configuration);

let projectId: string; // (default to undefined)
let integrationId: string; // (default to undefined)
let executeIntegrationRequest: ExecuteIntegrationRequest; //

const { status, data } = await apiInstance.executeIntegration(
    projectId,
    integrationId,
    executeIntegrationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **executeIntegrationRequest** | **ExecuteIntegrationRequest**|  | |
| **projectId** | [**string**] |  | defaults to undefined|
| **integrationId** | [**string**] |  | defaults to undefined|


### Return type

**TestWalletWebhook200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Integration executed |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **exportIntegration**
> CreateIntegration201Response exportIntegration()

Export integration configuration for backup or migration. Accepts: OrgBearerAuth (for admin users), ProjectBearerAuth (JWT for authenticated users), or ApiKeyAuth (X-API-Key for programmatic access). Both ProjectBearerAuth and ApiKeyAuth are fully implemented. 

### Example

```typescript
import {
    IntegrationsApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new IntegrationsApi(configuration);

let projectId: string; // (default to undefined)
let integrationId: string; // (default to undefined)

const { status, data } = await apiInstance.exportIntegration(
    projectId,
    integrationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|
| **integrationId** | [**string**] |  | defaults to undefined|


### Return type

**CreateIntegration201Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Integration export data |  -  |
|**401** | Authentication required |  -  |
|**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getIntegration**
> GetIntegration200Response getIntegration()

Get details of a specific integration. Accepts: OrgBearerAuth (for admin users), ProjectBearerAuth (JWT for authenticated users), or ApiKeyAuth (X-API-Key for programmatic access). Both ProjectBearerAuth and ApiKeyAuth are fully implemented. 

### Example

```typescript
import {
    IntegrationsApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new IntegrationsApi(configuration);

let projectId: string; // (default to undefined)
let integrationId: string; // (default to undefined)

const { status, data } = await apiInstance.getIntegration(
    projectId,
    integrationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|
| **integrationId** | [**string**] |  | defaults to undefined|


### Return type

**GetIntegration200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Integration details |  -  |
|**401** | Authentication required |  -  |
|**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getIntegrations**
> GetIntegrations200Response getIntegrations()

List all integrations configured for a project. Accepts: OrgBearerAuth (for admin users), ProjectBearerAuth (JWT for authenticated users), or ApiKeyAuth (X-API-Key for programmatic access). Both ProjectBearerAuth and ApiKeyAuth are fully implemented. 

### Example

```typescript
import {
    IntegrationsApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new IntegrationsApi(configuration);

let projectId: string; // (default to undefined)

const { status, data } = await apiInstance.getIntegrations(
    projectId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|


### Return type

**GetIntegrations200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Integrations list |  -  |
|**401** | Authentication required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTemplates**
> GetTemplates200Response getTemplates()

Get available integration templates for third-party service connections. Accepts: OrgBearerAuth (for admin users), ProjectBearerAuth (JWT for authenticated users), or ApiKeyAuth (X-API-Key for programmatic access). Both ProjectBearerAuth and ApiKeyAuth are fully implemented. 

### Example

```typescript
import {
    IntegrationsApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new IntegrationsApi(configuration);

const { status, data } = await apiInstance.getTemplates();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetTemplates200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Integration templates list |  -  |
|**401** | Authentication required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUsageStats**
> GetUsageStats200Response getUsageStats()

Get usage statistics for an integration (total calls, success/failure rates). Accepts: OrgBearerAuth (for admin users), ProjectBearerAuth (JWT for authenticated users), or ApiKeyAuth (X-API-Key for programmatic access). Both ProjectBearerAuth and ApiKeyAuth are fully implemented. 

### Example

```typescript
import {
    IntegrationsApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new IntegrationsApi(configuration);

let projectId: string; // (default to undefined)
let integrationId: string; // (default to undefined)
let period: 'day' | 'week' | 'month'; // (optional) (default to 'month')

const { status, data } = await apiInstance.getUsageStats(
    projectId,
    integrationId,
    period
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|
| **integrationId** | [**string**] |  | defaults to undefined|
| **period** | [**&#39;day&#39; | &#39;week&#39; | &#39;month&#39;**]**Array<&#39;day&#39; &#124; &#39;week&#39; &#124; &#39;month&#39;>** |  | (optional) defaults to 'month'|


### Return type

**GetUsageStats200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Usage statistics |  -  |
|**401** | Authentication required |  -  |
|**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **importIntegration**
> CreateIntegration201Response importIntegration(importIntegrationRequest)

Import an integration configuration from exported data. Accepts: OrgBearerAuth (for admin users), ProjectBearerAuth (JWT for authenticated users), or ApiKeyAuth (X-API-Key for programmatic access). Both ProjectBearerAuth and ApiKeyAuth are fully implemented. 

### Example

```typescript
import {
    IntegrationsApi,
    Configuration,
    ImportIntegrationRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new IntegrationsApi(configuration);

let projectId: string; // (default to undefined)
let importIntegrationRequest: ImportIntegrationRequest; //

const { status, data } = await apiInstance.importIntegration(
    projectId,
    importIntegrationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **importIntegrationRequest** | **ImportIntegrationRequest**|  | |
| **projectId** | [**string**] |  | defaults to undefined|


### Return type

**CreateIntegration201Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Integration imported |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **testIntegration**
> TestWalletWebhook200Response testIntegration(testIntegrationRequest)

Test an integration connection and configuration. Accepts: OrgBearerAuth (for admin users), ProjectBearerAuth (JWT for authenticated users), or ApiKeyAuth (X-API-Key for programmatic access). Both ProjectBearerAuth and ApiKeyAuth are fully implemented. 

### Example

```typescript
import {
    IntegrationsApi,
    Configuration,
    TestIntegrationRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new IntegrationsApi(configuration);

let projectId: string; // (default to undefined)
let integrationId: string; // (default to undefined)
let testIntegrationRequest: TestIntegrationRequest; //

const { status, data } = await apiInstance.testIntegration(
    projectId,
    integrationId,
    testIntegrationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **testIntegrationRequest** | **TestIntegrationRequest**|  | |
| **projectId** | [**string**] |  | defaults to undefined|
| **integrationId** | [**string**] |  | defaults to undefined|


### Return type

**TestWalletWebhook200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Integration test result |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateIntegration**
> CreateIntegration201Response updateIntegration(updateIntegrationRequest)

Update integration configuration (name, config, credentials). Accepts: OrgBearerAuth (for admin users), ProjectBearerAuth (JWT for authenticated users), or ApiKeyAuth (X-API-Key for programmatic access). Both ProjectBearerAuth and ApiKeyAuth are fully implemented. 

### Example

```typescript
import {
    IntegrationsApi,
    Configuration,
    UpdateIntegrationRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new IntegrationsApi(configuration);

let projectId: string; // (default to undefined)
let integrationId: string; // (default to undefined)
let updateIntegrationRequest: UpdateIntegrationRequest; //

const { status, data } = await apiInstance.updateIntegration(
    projectId,
    integrationId,
    updateIntegrationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateIntegrationRequest** | **UpdateIntegrationRequest**|  | |
| **projectId** | [**string**] |  | defaults to undefined|
| **integrationId** | [**string**] |  | defaults to undefined|


### Return type

**CreateIntegration201Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Integration updated |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |
|**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

