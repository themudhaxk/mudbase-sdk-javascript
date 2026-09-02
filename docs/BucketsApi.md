# BucketsApi

All URIs are relative to *https://cloud.mudbase.dev*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createBucket**](#createbucket) | **POST** /api/bucket/projects/{projectId}/buckets | Create a new bucket|
|[**deleteBucket**](#deletebucket) | **DELETE** /api/bucket/projects/{projectId}/buckets/{bucketId} | Delete bucket|
|[**getBucket**](#getbucket) | **GET** /api/bucket/projects/{projectId}/buckets/{bucketId} | Get bucket details|
|[**listBuckets**](#listbuckets) | **GET** /api/bucket/projects/{projectId}/buckets | List buckets in a project|
|[**updateBucket**](#updatebucket) | **PATCH** /api/bucket/projects/{projectId}/buckets/{bucketId} | Update bucket|

# **createBucket**
> BucketResponse createBucket(createBucketRequest)

Create a new storage bucket in a project. Accepts: OrgBearerAuth (for admin users), ProjectBearerAuth (JWT for authenticated users), or ApiKeyAuth (X-API-Key for programmatic access). Both ProjectBearerAuth and ApiKeyAuth are fully implemented. 

### Example

```typescript
import {
    BucketsApi,
    Configuration,
    CreateBucketRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new BucketsApi(configuration);

let projectId: string; // (default to undefined)
let createBucketRequest: CreateBucketRequest; //

const { status, data } = await apiInstance.createBucket(
    projectId,
    createBucketRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createBucketRequest** | **CreateBucketRequest**|  | |
| **projectId** | [**string**] |  | defaults to undefined|


### Return type

**BucketResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Bucket created successfully |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |
|**403** | Access denied |  -  |
|**409** | Resource conflict |  -  |
|**429** | Rate limit exceeded |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteBucket**
> MessageResponse deleteBucket()

Delete a storage bucket permanently. This is a destructive operation that will also delete all files in the bucket. Accepts: OrgBearerAuth (for admin users), ProjectBearerAuth (JWT for authenticated users), or ApiKeyAuth (X-API-Key for programmatic access). Both ProjectBearerAuth and ApiKeyAuth are fully implemented. 

### Example

```typescript
import {
    BucketsApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new BucketsApi(configuration);

let projectId: string; // (default to undefined)
let bucketId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteBucket(
    projectId,
    bucketId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|
| **bucketId** | [**string**] |  | defaults to undefined|


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
|**200** | Bucket deleted successfully |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |
|**403** | Access denied |  -  |
|**409** | Resource conflict |  -  |
|**429** | Rate limit exceeded |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getBucket**
> BucketResponse getBucket()


### Example

```typescript
import {
    BucketsApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new BucketsApi(configuration);

let projectId: string; // (default to undefined)
let bucketId: string; // (default to undefined)

const { status, data } = await apiInstance.getBucket(
    projectId,
    bucketId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|
| **bucketId** | [**string**] |  | defaults to undefined|


### Return type

**BucketResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Bucket details |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |
|**403** | Access denied |  -  |
|**409** | Resource conflict |  -  |
|**429** | Rate limit exceeded |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listBuckets**
> BucketListResponse listBuckets()

List all storage buckets in a project with pagination and search. Accepts: OrgBearerAuth (for admin users), ProjectBearerAuth (JWT for authenticated users), or ApiKeyAuth (X-API-Key for programmatic access). Both ProjectBearerAuth and ApiKeyAuth are fully implemented. 

### Example

```typescript
import {
    BucketsApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new BucketsApi(configuration);

let projectId: string; // (default to undefined)
let page: number; // (optional) (default to 1)
let limit: number; // (optional) (default to 20)
let search: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.listBuckets(
    projectId,
    page,
    limit,
    search
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|
| **page** | [**number**] |  | (optional) defaults to 1|
| **limit** | [**number**] |  | (optional) defaults to 20|
| **search** | [**string**] |  | (optional) defaults to undefined|


### Return type

**BucketListResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of buckets |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |
|**403** | Access denied |  -  |
|**409** | Resource conflict |  -  |
|**429** | Rate limit exceeded |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateBucket**
> BucketResponse updateBucket(updateBucketRequest)

Update bucket configuration (name, public/private status, settings). Accepts: OrgBearerAuth (for admin users), ProjectBearerAuth (JWT for authenticated users), or ApiKeyAuth (X-API-Key for programmatic access). Both ProjectBearerAuth and ApiKeyAuth are fully implemented. 

### Example

```typescript
import {
    BucketsApi,
    Configuration,
    UpdateBucketRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new BucketsApi(configuration);

let projectId: string; // (default to undefined)
let bucketId: string; // (default to undefined)
let updateBucketRequest: UpdateBucketRequest; //

const { status, data } = await apiInstance.updateBucket(
    projectId,
    bucketId,
    updateBucketRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateBucketRequest** | **UpdateBucketRequest**|  | |
| **projectId** | [**string**] |  | defaults to undefined|
| **bucketId** | [**string**] |  | defaults to undefined|


### Return type

**BucketResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Bucket updated successfully |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |
|**403** | Access denied |  -  |
|**409** | Resource conflict |  -  |
|**429** | Rate limit exceeded |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

