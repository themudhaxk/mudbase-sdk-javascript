# APIKeysApi

All URIs are relative to *https://cloud.mudbase.dev*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createApiKey**](#createapikey) | **POST** /api/api-keys | Create API key|
|[**deleteApiKey**](#deleteapikey) | **DELETE** /api/api-keys/{id} | Delete API key|
|[**getApiKeyUsage**](#getapikeyusage) | **GET** /api/api-keys/{id}/usage | Get API key usage|
|[**listApiKeys**](#listapikeys) | **GET** /api/api-keys | List API keys|
|[**regenerateApiKey**](#regenerateapikey) | **POST** /api/api-keys/{id}/regenerate | Regenerate API key secret|
|[**updateApiKey**](#updateapikey) | **PATCH** /api/api-keys/{id} | Update API key|

# **createApiKey**
> CreateApiKey201Response createApiKey(createApiKeyRequest)

Create a new API key for a project with specified permissions. Requires organization-level authentication (JWT Bearer token). API keys are not supported for this endpoint. 

### Example

```typescript
import {
    APIKeysApi,
    Configuration,
    CreateApiKeyRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new APIKeysApi(configuration);

let createApiKeyRequest: CreateApiKeyRequest; //

const { status, data } = await apiInstance.createApiKey(
    createApiKeyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createApiKeyRequest** | **CreateApiKeyRequest**|  | |


### Return type

**CreateApiKey201Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**400** | Validation failed (e.g. invalid permissions format, invalid or past expiresAt) |  -  |
|**201** | API key created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteApiKey**
> MessageResponse deleteApiKey()

Delete an API key. Requires organization-level authentication (JWT Bearer token). API keys are not supported for this endpoint. 

### Example

```typescript
import {
    APIKeysApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new APIKeysApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deleteApiKey(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**MessageResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | API key deleted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getApiKeyUsage**
> ApiKeyUsageResponse getApiKeyUsage()

Get usage statistics for a specific API key including request count, rate limit status, and last used timestamp. Requires organization-level authentication (JWT Bearer token). API keys are not supported for this endpoint. 

### Example

```typescript
import {
    APIKeysApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new APIKeysApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getApiKeyUsage(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ApiKeyUsageResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | API key usage statistics |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listApiKeys**
> ListApiKeys200Response listApiKeys()

List all API keys for the authenticated organization. Requires organization-level authentication (JWT Bearer token). API keys are not supported for this endpoint. 

### Example

```typescript
import {
    APIKeysApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new APIKeysApi(configuration);

const { status, data } = await apiInstance.listApiKeys();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ListApiKeys200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | API keys list |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **regenerateApiKey**
> RegenerateApiKey200Response regenerateApiKey()

Regenerate the secret for an API key. The old secret will be invalidated immediately. Accepts: OrgBearerAuth (for admin users), ProjectBearerAuth (JWT for authenticated users), or ApiKeyAuth (X-API-Key for programmatic access). Both ProjectBearerAuth and ApiKeyAuth are fully implemented. 

### Example

```typescript
import {
    APIKeysApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new APIKeysApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.regenerateApiKey(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**RegenerateApiKey200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | API key regenerated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateApiKey**
> UpdateApiKey200Response updateApiKey(updateApiKeyRequest)

Update an API key\'s configuration (name, permissions, status). Requires organization-level authentication (JWT Bearer token). API keys are not supported for this endpoint. 

### Example

```typescript
import {
    APIKeysApi,
    Configuration,
    UpdateApiKeyRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new APIKeysApi(configuration);

let id: string; // (default to undefined)
let updateApiKeyRequest: UpdateApiKeyRequest; //

const { status, data } = await apiInstance.updateApiKey(
    id,
    updateApiKeyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateApiKeyRequest** | **UpdateApiKeyRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**UpdateApiKey200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | API key updated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

