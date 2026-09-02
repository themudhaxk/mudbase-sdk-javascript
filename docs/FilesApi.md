# FilesApi

All URIs are relative to *https://cloud.mudbase.dev*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiFilesDownloadFileIdGet**](#apifilesdownloadfileidget) | **GET** /api/files/download/{fileId} | Get a download URL for a file|
|[**confirmDirectUpload**](#confirmdirectupload) | **POST** /api/files/upload/confirm | Confirm direct upload (scan + finalize metadata)|
|[**deleteFile**](#deletefile) | **DELETE** /api/bucket/projects/{projectId}/buckets/{bucketId}/files/{fileId} | Delete file|
|[**downloadBucketFile**](#downloadbucketfile) | **GET** /api/bucket/files/{fileId}/download | Download file from bucket|
|[**downloadFile**](#downloadfile) | **GET** /api/files/{fileId}/download | Generate a presigned URL for downloading a file|
|[**generatePresignedUpload**](#generatepresignedupload) | **POST** /api/files/upload/presigned | Generate a presigned PUT URL for direct browser upload|
|[**generateSignedUrl**](#generatesignedurl) | **POST** /api/bucket/projects/{projectId}/buckets/{bucketId}/files/{fileId}/signed-url | Generate signed URL for file|
|[**getFile**](#getfile) | **GET** /api/bucket/projects/{projectId}/buckets/{bucketId}/files/{fileId} | Get file metadata|
|[**listFiles**](#listfiles) | **GET** /api/bucket/projects/{projectId}/buckets/{bucketId}/files | List files in bucket|
|[**uploadFiles**](#uploadfiles) | **POST** /api/bucket/projects/{projectId}/buckets/{bucketId}/files | Upload files to bucket|

# **apiFilesDownloadFileIdGet**
> ApiFilesDownloadFileIdGet200Response apiFilesDownloadFileIdGet()

Returns a URL to download the file. For private files a short-lived signed URL is generated; the lifetime can be tuned per request via the optional expiresIn query parameter (seconds, clamped to a safe server-configured range). For public (public-read) files the permanent world-readable URL is returned with isPublic true and a warning, since signing a public object provides no protection. Accepts a JWT (Bearer) or a project API key.

### Example

```typescript
import {
    FilesApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let fileId: string; // (default to undefined)
let expiresIn: number; //Signed-URL lifetime in seconds for private files. Clamped to the server\'s min/max range; ignored for public files. Defaults to the server\'s configured expiry. (optional) (default to undefined)

const { status, data } = await apiInstance.apiFilesDownloadFileIdGet(
    fileId,
    expiresIn
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**string**] |  | defaults to undefined|
| **expiresIn** | [**number**] | Signed-URL lifetime in seconds for private files. Clamped to the server\&#39;s min/max range; ignored for public files. Defaults to the server\&#39;s configured expiry. | (optional) defaults to undefined|


### Return type

**ApiFilesDownloadFileIdGet200Response**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Download URL (signed for private files, permanent for public files) |  -  |
|**403** | Access denied or download limit exceeded |  -  |
|**404** | File not found |  -  |
|**500** | Failed to generate download URL |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **confirmDirectUpload**
> ConfirmUploadResponse confirmDirectUpload(confirmDirectUploadRequest)

After a client uploads directly to S3 using the presigned PUT URL, call this endpoint to have the server scan the object, create the File record, and optionally quarantine if infected.

### Example

```typescript
import {
    FilesApi,
    Configuration,
    ConfirmDirectUploadRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let confirmDirectUploadRequest: ConfirmDirectUploadRequest; //

const { status, data } = await apiInstance.confirmDirectUpload(
    confirmDirectUploadRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **confirmDirectUploadRequest** | **ConfirmDirectUploadRequest**|  | |


### Return type

**ConfirmUploadResponse**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | File confirmed and metadata stored |  -  |
|**400** | Bad request or file quarantined |  -  |
|**401** | Authentication required |  -  |
|**403** | Access denied |  -  |
|**413** | File or request body exceeds plan single-upload limit (or platform ceiling) |  -  |
|**429** | Rate limit exceeded |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteFile**
> MessageResponse deleteFile()

Delete a file from a bucket permanently. Accepts: OrgBearerAuth (for admin users), ProjectBearerAuth (JWT for authenticated users), or ApiKeyAuth (X-API-Key for programmatic access). Both ProjectBearerAuth and ApiKeyAuth are fully implemented. 

### Example

```typescript
import {
    FilesApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let projectId: string; // (default to undefined)
let bucketId: string; // (default to undefined)
let fileId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteFile(
    projectId,
    bucketId,
    fileId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|
| **bucketId** | [**string**] |  | defaults to undefined|
| **fileId** | [**string**] |  | defaults to undefined|


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
|**200** | File deleted successfully |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |
|**403** | Access denied |  -  |
|**409** | Resource conflict |  -  |
|**429** | Rate limit exceeded |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **downloadBucketFile**
> File downloadBucketFile()

Download a file from a bucket. For public files, no authentication is required. For private files, a download token (obtained via signed URL endpoint) is required in the query parameter. Accepts: Token-based authentication via query parameter (for private files), or no authentication (for public files). 

### Example

```typescript
import {
    FilesApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let fileId: string; // (default to undefined)
let token: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.downloadBucketFile(
    fileId,
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**string**] |  | defaults to undefined|
| **token** | [**string**] |  | (optional) defaults to undefined|


### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | File download |  * Content-Type -  <br>  * Content-Length -  <br>  * Content-Disposition -  <br>  |
|**403** | Access denied or invalid token |  -  |
|**404** | File not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **downloadFile**
> SignedUrlResponse downloadFile()

Returns a time-limited provider-signed URL (S3) for direct download. Server enforces RBAC before issuing the URL.

### Example

```typescript
import {
    FilesApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let fileId: string; // (default to undefined)
let token: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.downloadFile(
    fileId,
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**string**] |  | defaults to undefined|
| **token** | [**string**] |  | (optional) defaults to undefined|


### Return type

**SignedUrlResponse**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Signed URL generated |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |
|**403** | Access denied |  -  |
|**409** | Resource conflict |  -  |
|**429** | Rate limit exceeded |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generatePresignedUpload**
> PresignedPostResponse generatePresignedUpload(generatePresignedUploadRequest)

Issue a presigned PUT URL for clients to upload directly to object storage. The server stores the issued key with expiry and RBAC is enforced. PUT (not POST) is used because Cloudflare R2 does not implement the S3 POST Object API. The client must PUT the file body to `url` with the exact `headers` returned (a Content-Type mismatch fails with SignatureDoesNotMatch). `maxFileUploadBytes` is enforced server-side by `/api/files/upload/confirm` after the upload, not by the presigned URL itself. 

### Example

```typescript
import {
    FilesApi,
    Configuration,
    GeneratePresignedUploadRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let generatePresignedUploadRequest: GeneratePresignedUploadRequest; //

const { status, data } = await apiInstance.generatePresignedUpload(
    generatePresignedUploadRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **generatePresignedUploadRequest** | **GeneratePresignedUploadRequest**|  | |


### Return type

**PresignedPostResponse**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Presigned PUT URL |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |
|**403** | Access denied |  -  |
|**429** | Rate limit exceeded |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generateSignedUrl**
> SignedUrlResponse generateSignedUrl()

Generate a time-limited signed URL for downloading a private file. Accepts: OrgBearerAuth (for admin users), ProjectBearerAuth (JWT for authenticated users), or ApiKeyAuth (X-API-Key for programmatic access). Both ProjectBearerAuth and ApiKeyAuth are fully implemented. 

### Example

```typescript
import {
    FilesApi,
    Configuration,
    GenerateSignedUrlRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let projectId: string; // (default to undefined)
let bucketId: string; // (default to undefined)
let fileId: string; // (default to undefined)
let generateSignedUrlRequest: GenerateSignedUrlRequest; // (optional)

const { status, data } = await apiInstance.generateSignedUrl(
    projectId,
    bucketId,
    fileId,
    generateSignedUrlRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **generateSignedUrlRequest** | **GenerateSignedUrlRequest**|  | |
| **projectId** | [**string**] |  | defaults to undefined|
| **bucketId** | [**string**] |  | defaults to undefined|
| **fileId** | [**string**] |  | defaults to undefined|


### Return type

**SignedUrlResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Signed URL generated |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |
|**403** | Access denied |  -  |
|**409** | Resource conflict |  -  |
|**429** | Rate limit exceeded |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFile**
> FileResponse getFile()

Get metadata for a specific file in a bucket. Accepts: OrgBearerAuth (for admin users), ProjectBearerAuth (JWT for authenticated users), or ApiKeyAuth (X-API-Key for programmatic access). Both ProjectBearerAuth and ApiKeyAuth are fully implemented. 

### Example

```typescript
import {
    FilesApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let projectId: string; // (default to undefined)
let bucketId: string; // (default to undefined)
let fileId: string; // (default to undefined)

const { status, data } = await apiInstance.getFile(
    projectId,
    bucketId,
    fileId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|
| **bucketId** | [**string**] |  | defaults to undefined|
| **fileId** | [**string**] |  | defaults to undefined|


### Return type

**FileResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | File metadata |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |
|**403** | Access denied |  -  |
|**409** | Resource conflict |  -  |
|**429** | Rate limit exceeded |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listFiles**
> FileListResponse listFiles()


### Example

```typescript
import {
    FilesApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let projectId: string; // (default to undefined)
let bucketId: string; // (default to undefined)
let page: number; // (optional) (default to 1)
let limit: number; // (optional) (default to 20)
let search: string; // (optional) (default to undefined)
let type: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.listFiles(
    projectId,
    bucketId,
    page,
    limit,
    search,
    type
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|
| **bucketId** | [**string**] |  | defaults to undefined|
| **page** | [**number**] |  | (optional) defaults to 1|
| **limit** | [**number**] |  | (optional) defaults to 20|
| **search** | [**string**] |  | (optional) defaults to undefined|
| **type** | [**string**] |  | (optional) defaults to undefined|


### Return type

**FileListResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of files |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |
|**403** | Access denied |  -  |
|**409** | Resource conflict |  -  |
|**429** | Rate limit exceeded |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uploadFiles**
> FileUploadResponse uploadFiles()

Upload one or more files to a storage bucket using multipart/form-data. Per-file size is limited by the org plan (`maxFileUploadBytes`) and bucket `maxFileSize`, whichever is stricter. Exceeding the limit returns **413**. Accepts: OrgBearerAuth (for admin users), ProjectBearerAuth (JWT for authenticated users), or ApiKeyAuth (X-API-Key for programmatic access). Both ProjectBearerAuth and ApiKeyAuth are fully implemented. 

### Example

```typescript
import {
    FilesApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let projectId: string; // (default to undefined)
let bucketId: string; // (default to undefined)
let files: Array<File>; // (default to undefined)

const { status, data } = await apiInstance.uploadFiles(
    projectId,
    bucketId,
    files
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|
| **bucketId** | [**string**] |  | defaults to undefined|
| **files** | **Array&lt;File&gt;** |  | defaults to undefined|


### Return type

**FileUploadResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Files uploaded successfully |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |
|**403** | Access denied |  -  |
|**409** | Resource conflict |  -  |
|**413** | File or request body exceeds plan single-upload limit (or platform ceiling) |  -  |
|**429** | Rate limit exceeded |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

