# CollectionsApi

All URIs are relative to *https://cloud.mudbase.dev*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createCollection**](#createcollection) | **POST** /api/schemas/projects/{projectId}/collections | Create new collection|
|[**deleteCollection**](#deletecollection) | **DELETE** /api/schemas/projects/{projectId}/collections/{collectionId} | Delete collection|
|[**getCollection**](#getcollection) | **GET** /api/schemas/projects/{projectId}/collections/{collectionId} | Get single collection|
|[**listCollections**](#listcollections) | **GET** /api/schemas/projects/{projectId}/collections | List collections in project|
|[**updateCollection**](#updatecollection) | **PATCH** /api/schemas/projects/{projectId}/collections/{collectionId} | Update collection|

# **createCollection**
> CreateCollection201Response createCollection(createCollectionRequest)

Create a new collection in a project. Accepts: OrgBearerAuth (for admin users), ProjectBearerAuth (JWT for authenticated users), or ApiKeyAuth (X-API-Key for programmatic access). Both ProjectBearerAuth and ApiKeyAuth are fully implemented. 

### Example

```typescript
import {
    CollectionsApi,
    Configuration,
    CreateCollectionRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new CollectionsApi(configuration);

let projectId: string; // (default to undefined)
let createCollectionRequest: CreateCollectionRequest; //

const { status, data } = await apiInstance.createCollection(
    projectId,
    createCollectionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCollectionRequest** | **CreateCollectionRequest**|  | |
| **projectId** | [**string**] |  | defaults to undefined|


### Return type

**CreateCollection201Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Collection created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteCollection**
> MessageResponse deleteCollection()

Delete a collection permanently. This is a destructive operation. Accepts: OrgBearerAuth (for admin users), ProjectBearerAuth (JWT for authenticated users), or ApiKeyAuth (X-API-Key for programmatic access). Both ProjectBearerAuth and ApiKeyAuth are fully implemented. 

### Example

```typescript
import {
    CollectionsApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new CollectionsApi(configuration);

let projectId: string; // (default to undefined)
let collectionId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteCollection(
    projectId,
    collectionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|
| **collectionId** | [**string**] |  | defaults to undefined|


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
|**200** | Collection deleted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCollection**
> Collection getCollection()

Get collection details by ID. Accepts: OrgBearerAuth (for admin users), ProjectBearerAuth (JWT for authenticated users), or ApiKeyAuth (X-API-Key for programmatic access). Both ProjectBearerAuth and ApiKeyAuth are fully implemented. 

### Example

```typescript
import {
    CollectionsApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new CollectionsApi(configuration);

let projectId: string; // (default to undefined)
let collectionId: string; // (default to undefined)

const { status, data } = await apiInstance.getCollection(
    projectId,
    collectionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|
| **collectionId** | [**string**] |  | defaults to undefined|


### Return type

**Collection**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Collection details |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listCollections**
> ListCollections200Response listCollections()

List all collections in a project. Accepts: OrgBearerAuth (for admin users), ProjectBearerAuth (JWT for authenticated users), or ApiKeyAuth (X-API-Key for programmatic access). Both ProjectBearerAuth and ApiKeyAuth are fully implemented. 

### Example

```typescript
import {
    CollectionsApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new CollectionsApi(configuration);

let projectId: string; // (default to undefined)

const { status, data } = await apiInstance.listCollections(
    projectId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|


### Return type

**ListCollections200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Collections list |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateCollection**
> CreateCollection201Response updateCollection(updateCollectionRequest)

Update collection configuration (name, fields, permissions). Accepts: OrgBearerAuth (for admin users), ProjectBearerAuth (JWT for authenticated users), or ApiKeyAuth (X-API-Key for programmatic access). Both ProjectBearerAuth and ApiKeyAuth are fully implemented. 

### Example

```typescript
import {
    CollectionsApi,
    Configuration,
    UpdateCollectionRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new CollectionsApi(configuration);

let projectId: string; // (default to undefined)
let collectionId: string; // (default to undefined)
let updateCollectionRequest: UpdateCollectionRequest; //

const { status, data } = await apiInstance.updateCollection(
    projectId,
    collectionId,
    updateCollectionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateCollectionRequest** | **UpdateCollectionRequest**|  | |
| **projectId** | [**string**] |  | defaults to undefined|
| **collectionId** | [**string**] |  | defaults to undefined|


### Return type

**CreateCollection201Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Collection updated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

