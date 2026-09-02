# BackupsApi

All URIs are relative to *https://cloud.mudbase.dev*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createBackup**](#createbackup) | **POST** /api/projects/{projectId}/backups | Create project backup|
|[**deleteBackup**](#deletebackup) | **DELETE** /api/projects/{projectId}/backups/{backupId} | Delete backup|
|[**listBackups**](#listbackups) | **GET** /api/projects/{projectId}/backups | List project backups|
|[**restoreBackup**](#restorebackup) | **POST** /api/projects/{projectId}/backups/{backupId}/restore | Restore from backup|

# **createBackup**
> CreateBackup201Response createBackup()

Create a backup of project data, optionally including files and wallets. Supports both JWT Bearer token and API key authentication.

### Example

```typescript
import {
    BackupsApi,
    Configuration,
    CreateBackupRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new BackupsApi(configuration);

let projectId: string; // (default to undefined)
let createBackupRequest: CreateBackupRequest; // (optional)

const { status, data } = await apiInstance.createBackup(
    projectId,
    createBackupRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createBackupRequest** | **CreateBackupRequest**|  | |
| **projectId** | [**string**] |  | defaults to undefined|


### Return type

**CreateBackup201Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Backup created successfully |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |
|**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteBackup**
> DeleteBackup200Response deleteBackup()

Delete a project backup. Supports both JWT Bearer token and API key authentication.

### Example

```typescript
import {
    BackupsApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new BackupsApi(configuration);

let projectId: string; // (default to undefined)
let backupId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteBackup(
    projectId,
    backupId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|
| **backupId** | [**string**] |  | defaults to undefined|


### Return type

**DeleteBackup200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Backup deleted successfully |  -  |
|**401** | Authentication required |  -  |
|**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listBackups**
> ListBackups200Response listBackups()

Get all backups for a project. Supports both JWT Bearer token and API key authentication.

### Example

```typescript
import {
    BackupsApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new BackupsApi(configuration);

let projectId: string; // (default to undefined)

const { status, data } = await apiInstance.listBackups(
    projectId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|


### Return type

**ListBackups200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of backups |  -  |
|**401** | Authentication required |  -  |
|**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **restoreBackup**
> RestoreBackup200Response restoreBackup(restoreBackupRequest)

Restore project data from a backup. Supports replace or merge modes. Supports both JWT Bearer token and API key authentication.

### Example

```typescript
import {
    BackupsApi,
    Configuration,
    RestoreBackupRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new BackupsApi(configuration);

let projectId: string; // (default to undefined)
let backupId: string; // (default to undefined)
let restoreBackupRequest: RestoreBackupRequest; //

const { status, data } = await apiInstance.restoreBackup(
    projectId,
    backupId,
    restoreBackupRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **restoreBackupRequest** | **RestoreBackupRequest**|  | |
| **projectId** | [**string**] |  | defaults to undefined|
| **backupId** | [**string**] |  | defaults to undefined|


### Return type

**RestoreBackup200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Restore initiated |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |
|**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

