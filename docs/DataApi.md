# DataApi

All URIs are relative to *https://cloud.mudbase.dev*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createData**](#createdata) | **POST** /api/data/projects/{projectId}/collections/{collectionId}/data | Create data in collection|
|[**deleteData**](#deletedata) | **DELETE** /api/data/projects/{projectId}/collections/{collectionId}/data/{documentId} | Delete document|
|[**getData**](#getdata) | **GET** /api/data/projects/{projectId}/collections/{collectionId}/data/{documentId} | Get single document|
|[**listData**](#listdata) | **GET** /api/data/projects/{projectId}/collections/{collectionId}/data | List data in collection|
|[**updateData**](#updatedata) | **PATCH** /api/data/projects/{projectId}/collections/{collectionId}/data/{documentId} | Update document|

# **createData**
> DataResponse createData(body)


### Example

```typescript
import {
    DataApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new DataApi(configuration);

let projectId: string; // (default to undefined)
let collectionId: string; // (default to undefined)
let body: object; //

const { status, data } = await apiInstance.createData(
    projectId,
    collectionId,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **projectId** | [**string**] |  | defaults to undefined|
| **collectionId** | [**string**] |  | defaults to undefined|


### Return type

**DataResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Data created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteData**
> MessageResponse deleteData()

Delete a document from a collection. Accepts: OrgBearerAuth (for admin users), ProjectBearerAuth (JWT for authenticated users), or ApiKeyAuth (X-API-Key for programmatic access). Both ProjectBearerAuth and ApiKeyAuth are fully implemented. 

### Example

```typescript
import {
    DataApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new DataApi(configuration);

let projectId: string; // (default to undefined)
let collectionId: string; // (default to undefined)
let documentId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteData(
    projectId,
    collectionId,
    documentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|
| **collectionId** | [**string**] |  | defaults to undefined|
| **documentId** | [**string**] |  | defaults to undefined|


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
|**200** | Data deleted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getData**
> DataResponse getData()


### Example

```typescript
import {
    DataApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new DataApi(configuration);

let projectId: string; // (default to undefined)
let collectionId: string; // (default to undefined)
let documentId: string; // (default to undefined)

const { status, data } = await apiInstance.getData(
    projectId,
    collectionId,
    documentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|
| **collectionId** | [**string**] |  | defaults to undefined|
| **documentId** | [**string**] |  | defaults to undefined|


### Return type

**DataResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Document data |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listData**
> DataListResponse listData()

List all documents in a collection. Accepts: OrgBearerAuth (for admin users), ProjectBearerAuth (JWT for authenticated users), or ApiKeyAuth (X-API-Key for programmatic access). Both ProjectBearerAuth and ApiKeyAuth are fully implemented. 

### Example

```typescript
import {
    DataApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new DataApi(configuration);

let projectId: string; // (default to undefined)
let collectionId: string; // (default to undefined)
let page: number; // (optional) (default to 1)
let limit: number; // (optional) (default to 20)
let sort: string; // (optional) (default to '-createdAt')
let filter: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.listData(
    projectId,
    collectionId,
    page,
    limit,
    sort,
    filter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|
| **collectionId** | [**string**] |  | defaults to undefined|
| **page** | [**number**] |  | (optional) defaults to 1|
| **limit** | [**number**] |  | (optional) defaults to 20|
| **sort** | [**string**] |  | (optional) defaults to '-createdAt'|
| **filter** | [**string**] |  | (optional) defaults to undefined|


### Return type

**DataListResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Data list |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateData**
> DataResponse updateData(body)

Update a document in a collection. Accepts: OrgBearerAuth (for admin users), ProjectBearerAuth (JWT for authenticated users), or ApiKeyAuth (X-API-Key for programmatic access). Both ProjectBearerAuth and ApiKeyAuth are fully implemented. 

### Example

```typescript
import {
    DataApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new DataApi(configuration);

let projectId: string; // (default to undefined)
let collectionId: string; // (default to undefined)
let documentId: string; // (default to undefined)
let body: object; //

const { status, data } = await apiInstance.updateData(
    projectId,
    collectionId,
    documentId,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **projectId** | [**string**] |  | defaults to undefined|
| **collectionId** | [**string**] |  | defaults to undefined|
| **documentId** | [**string**] |  | defaults to undefined|


### Return type

**DataResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Data updated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

