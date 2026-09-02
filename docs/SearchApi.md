# SearchApi

All URIs are relative to *https://cloud.mudbase.dev*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getSearchAnalytics**](#getsearchanalytics) | **GET** /api/search/projects/{projectId}/search/analytics | Get search analytics|
|[**getSearchSuggestions**](#getsearchsuggestions) | **GET** /api/search/projects/{projectId}/search/suggestions | Get search suggestions|
|[**searchData**](#searchdata) | **GET** /api/search/projects/{projectId}/search | Full-text search|

# **getSearchAnalytics**
> GetSearchAnalytics200Response getSearchAnalytics()

Get search analytics including top queries, search volume, and performance metrics. Accepts: OrgBearerAuth (for admin users), ProjectBearerAuth (JWT for authenticated users), or ApiKeyAuth (X-API-Key for programmatic access). Both ProjectBearerAuth and ApiKeyAuth are fully implemented. 

### Example

```typescript
import {
    SearchApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new SearchApi(configuration);

let projectId: string; // (default to undefined)
let timeframe: '1d' | '7d' | '30d'; // (optional) (default to '7d')

const { status, data } = await apiInstance.getSearchAnalytics(
    projectId,
    timeframe
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|
| **timeframe** | [**&#39;1d&#39; | &#39;7d&#39; | &#39;30d&#39;**]**Array<&#39;1d&#39; &#124; &#39;7d&#39; &#124; &#39;30d&#39;>** |  | (optional) defaults to '7d'|


### Return type

**GetSearchAnalytics200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Search analytics |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSearchSuggestions**
> GetSearchSuggestions200Response getSearchSuggestions()

Get search query suggestions based on partial input. Accepts: OrgBearerAuth (for admin users), ProjectBearerAuth (JWT for authenticated users), or ApiKeyAuth (X-API-Key for programmatic access). Both ProjectBearerAuth and ApiKeyAuth are fully implemented. 

### Example

```typescript
import {
    SearchApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new SearchApi(configuration);

let projectId: string; // (default to undefined)
let q: string; // (default to undefined)
let limit: number; // (optional) (default to 10)

const { status, data } = await apiInstance.getSearchSuggestions(
    projectId,
    q,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|
| **q** | [**string**] |  | defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to 10|


### Return type

**GetSearchSuggestions200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Search suggestions |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **searchData**
> SearchResponse searchData()

Perform full-text search across collections in a project. Accepts: OrgBearerAuth (for admin users), ProjectBearerAuth (JWT for authenticated users), or ApiKeyAuth (X-API-Key for programmatic access). Both ProjectBearerAuth and ApiKeyAuth are fully implemented. 

### Example

```typescript
import {
    SearchApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new SearchApi(configuration);

let projectId: string; // (default to undefined)
let q: string; // (default to undefined)
let collections: string; // (optional) (default to undefined)
let fields: string; // (optional) (default to undefined)
let limit: number; // (optional) (default to 20)
let page: number; // (optional) (default to 1)

const { status, data } = await apiInstance.searchData(
    projectId,
    q,
    collections,
    fields,
    limit,
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|
| **q** | [**string**] |  | defaults to undefined|
| **collections** | [**string**] |  | (optional) defaults to undefined|
| **fields** | [**string**] |  | (optional) defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to 20|
| **page** | [**number**] |  | (optional) defaults to 1|


### Return type

**SearchResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Search results |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

