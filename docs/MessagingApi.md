# MessagingApi

All URIs are relative to *https://cloud.mudbase.dev*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getMessageHistory**](#getmessagehistory) | **GET** /api/messaging/projects/{projectId}/messaging/history | Get message history|
|[**getMessageStats**](#getmessagestats) | **GET** /api/messaging/projects/{projectId}/messaging/stats | Get message statistics|
|[**getProjectFcmConfig**](#getprojectfcmconfig) | **GET** /api/messaging/projects/{projectId}/messaging/push-config | Get bring-your-own push credentials status (masked)|
|[**getProjectSmsByo**](#getprojectsmsbyo) | **GET** /api/messaging/projects/{projectId}/messaging/sms-provider | Get BYO SMS provider configuration (masked)|
|[**listDeviceTokens**](#listdevicetokens) | **GET** /api/messaging/projects/{projectId}/messaging/devices | List registered device tokens|
|[**patchProjectFcmConfig**](#patchprojectfcmconfig) | **PATCH** /api/messaging/projects/{projectId}/messaging/push-config | Set or clear your own push service account (optional)|
|[**patchProjectSmsByo**](#patchprojectsmsbyo) | **PATCH** /api/messaging/projects/{projectId}/messaging/sms-provider | Update BYO SMS provider credentials|
|[**registerDeviceToken**](#registerdevicetoken) | **POST** /api/messaging/projects/{projectId}/messaging/devices | Register a device push token|
|[**sendEmail**](#sendemail) | **POST** /api/messaging/projects/{projectId}/messaging/email | Send email|
|[**sendPushNotification**](#sendpushnotification) | **POST** /api/messaging/projects/{projectId}/messaging/push | Send push notification|
|[**sendSMS**](#sendsms) | **POST** /api/messaging/projects/{projectId}/messaging/sms | Send SMS|
|[**unregisterDeviceToken**](#unregisterdevicetoken) | **DELETE** /api/messaging/projects/{projectId}/messaging/devices | Unregister a device push token|

# **getMessageHistory**
> MessageHistoryResponse getMessageHistory()

Get message history (push, email, SMS) with filtering and pagination. Accepts: OrgBearerAuth (for admin users), ProjectBearerAuth (JWT for authenticated users), or ApiKeyAuth (X-API-Key for programmatic access). Both ProjectBearerAuth and ApiKeyAuth are fully implemented. 

### Example

```typescript
import {
    MessagingApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new MessagingApi(configuration);

let projectId: string; // (default to undefined)
let type: 'push' | 'email' | 'sms'; // (optional) (default to undefined)
let page: number; // (optional) (default to 1)
let limit: number; // (optional) (default to 20)
let status: 'sent' | 'failed' | 'pending'; // (optional) (default to undefined)

const { status, data } = await apiInstance.getMessageHistory(
    projectId,
    type,
    page,
    limit,
    status
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|
| **type** | [**&#39;push&#39; | &#39;email&#39; | &#39;sms&#39;**]**Array<&#39;push&#39; &#124; &#39;email&#39; &#124; &#39;sms&#39;>** |  | (optional) defaults to undefined|
| **page** | [**number**] |  | (optional) defaults to 1|
| **limit** | [**number**] |  | (optional) defaults to 20|
| **status** | [**&#39;sent&#39; | &#39;failed&#39; | &#39;pending&#39;**]**Array<&#39;sent&#39; &#124; &#39;failed&#39; &#124; &#39;pending&#39;>** |  | (optional) defaults to undefined|


### Return type

**MessageHistoryResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Message history |  -  |
|**403** | App role feature permission denied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMessageStats**
> MessageStatsResponse getMessageStats()

Get messaging statistics including total messages, success rates, and breakdown by type (push, email, SMS). Accepts: OrgBearerAuth (for admin users), ProjectBearerAuth (JWT for authenticated users), or ApiKeyAuth (X-API-Key for programmatic access). Both ProjectBearerAuth and ApiKeyAuth are fully implemented. 

### Example

```typescript
import {
    MessagingApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new MessagingApi(configuration);

let projectId: string; // (default to undefined)
let startDate: string; // (optional) (default to undefined)
let endDate: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getMessageStats(
    projectId,
    startDate,
    endDate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|
| **startDate** | [**string**] |  | (optional) defaults to undefined|
| **endDate** | [**string**] |  | (optional) defaults to undefined|


### Return type

**MessageStatsResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Message statistics |  -  |
|**403** | App role feature permission denied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getProjectFcmConfig**
> GetProjectFcmConfig200Response getProjectFcmConfig()

Returns whether this project has its own push provider credentials stored (encrypted). This is an optional, advanced override - push works out of the box with platform-managed credentials, so when no per-project credentials are stored, push is sent with the platform-managed credentials.

### Example

```typescript
import {
    MessagingApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new MessagingApi(configuration);

let projectId: string; // (default to undefined)

const { status, data } = await apiInstance.getProjectFcmConfig(
    projectId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|


### Return type

**GetProjectFcmConfig200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Bring-your-own push credentials flags |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getProjectSmsByo**
> GetProjectSmsByo200Response getProjectSmsByo()

Returns enabled flag, provider kind, default sender, and whether credentials are stored. Secrets are never returned. 

### Example

```typescript
import {
    MessagingApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new MessagingApi(configuration);

let projectId: string; // (default to undefined)

const { status, data } = await apiInstance.getProjectSmsByo(
    projectId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|


### Return type

**GetProjectSmsByo200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | SMS BYO settings |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listDeviceTokens**
> DeviceListResponse listDeviceTokens()

List the device push tokens registered to a project, most-recently-seen first.  Accepts: OrgBearerAuth (for admin users), ProjectBearerAuth (JWT for authenticated users), or ApiKeyAuth (X-API-Key for programmatic access). 

### Example

```typescript
import {
    MessagingApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new MessagingApi(configuration);

let projectId: string; // (default to undefined)

const { status, data } = await apiInstance.listDeviceTokens(
    projectId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|


### Return type

**DeviceListResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Registered device tokens |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patchProjectFcmConfig**
> patchProjectFcmConfig(patchProjectFcmConfigRequest)

Optional advanced step - push works out of the box with platform-managed credentials, so most projects never call this. Use it only to deliver push from your own push provider account. Body `serviceAccountJson` is the Firebase service account JSON you download from your own Firebase project (stored encrypted). Send `clear: true` to remove it and go back to the platform-managed credentials. 

### Example

```typescript
import {
    MessagingApi,
    Configuration,
    PatchProjectFcmConfigRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new MessagingApi(configuration);

let projectId: string; // (default to undefined)
let patchProjectFcmConfigRequest: PatchProjectFcmConfigRequest; //

const { status, data } = await apiInstance.patchProjectFcmConfig(
    projectId,
    patchProjectFcmConfigRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchProjectFcmConfigRequest** | **PatchProjectFcmConfigRequest**|  | |
| **projectId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated |  -  |
|**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patchProjectSmsByo**
> GetProjectSmsByo200Response patchProjectSmsByo(projectSmsByoPatchRequest)

Body `config` is provider-specific JSON stored encrypted per organization: - **twilio** — `accountSid`, `authToken` (required). Optional `from` sender override used if the send request does not specify `from` and `defaultFrom` is empty. - **termii** — `apiKey` (required). Optional `from` sender name (e.g. brand label). - **africastalking** — `username`, `apiKey` (both required). Optional `from` shortcode or sender ID. On enable, the API validates credentials with a lightweight ping (no SMS sent). See request body **Examples** for sample payloads. 

### Example

```typescript
import {
    MessagingApi,
    Configuration,
    ProjectSmsByoPatchRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new MessagingApi(configuration);

let projectId: string; // (default to undefined)
let projectSmsByoPatchRequest: ProjectSmsByoPatchRequest; //

const { status, data } = await apiInstance.patchProjectSmsByo(
    projectId,
    projectSmsByoPatchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectSmsByoPatchRequest** | **ProjectSmsByoPatchRequest**|  | |
| **projectId** | [**string**] |  | defaults to undefined|


### Return type

**GetProjectSmsByo200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated configuration |  -  |
|**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registerDeviceToken**
> DeviceRegisteredResponse registerDeviceToken(deviceRegisterRequest)

Register a device\'s push token with a project so it can receive push notifications. A client registers its token here first; the send endpoint (`/messaging/push`) only delivers to tokens that are registered to the project, so a caller cannot push to arbitrary or other-tenant tokens.  Registration is idempotent - re-registering a token that already exists just refreshes it (updates `platform` and `lastSeenAt`) instead of creating a duplicate. Each project has a cap on the number of registered tokens; when the cap is reached, the least-recently-seen tokens are evicted to make room, so a register-on-launch call never fails.  Push works out of the box with platform-managed credentials - no provider setup is required to start registering tokens and sending push.  Accepts: OrgBearerAuth (for admin users), ProjectBearerAuth (JWT for authenticated users), or ApiKeyAuth (X-API-Key for programmatic access). 

### Example

```typescript
import {
    MessagingApi,
    Configuration,
    DeviceRegisterRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new MessagingApi(configuration);

let projectId: string; // (default to undefined)
let deviceRegisterRequest: DeviceRegisterRequest; //

const { status, data } = await apiInstance.registerDeviceToken(
    projectId,
    deviceRegisterRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deviceRegisterRequest** | **DeviceRegisterRequest**|  | |
| **projectId** | [**string**] |  | defaults to undefined|


### Return type

**DeviceRegisteredResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Device token registered |  -  |
|**400** | Bad request |  -  |
|**403** | App role feature permission denied |  -  |
|**429** | Device registration rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sendEmail**
> MessageSentResponse sendEmail(emailRequest)

Send an email message to one or more recipients. Accepts: OrgBearerAuth (for admin users), ProjectBearerAuth (JWT for authenticated users), or ApiKeyAuth (X-API-Key for programmatic access). Both ProjectBearerAuth and ApiKeyAuth are fully implemented. 

### Example

```typescript
import {
    MessagingApi,
    Configuration,
    EmailRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new MessagingApi(configuration);

let projectId: string; // (default to undefined)
let emailRequest: EmailRequest; //

const { status, data } = await apiInstance.sendEmail(
    projectId,
    emailRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **emailRequest** | **EmailRequest**|  | |
| **projectId** | [**string**] |  | defaults to undefined|


### Return type

**MessageSentResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Email sent |  -  |
|**403** | App role feature permission denied |  -  |
|**429** | Per-project messaging send rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sendPushNotification**
> MessageSentResponse sendPushNotification(pushNotificationRequest)

Send a push notification to one or more devices. Accepts: OrgBearerAuth (for admin users), ProjectBearerAuth (JWT for authenticated users), or ApiKeyAuth (X-API-Key for programmatic access). Both ProjectBearerAuth and ApiKeyAuth are fully implemented. 

### Example

```typescript
import {
    MessagingApi,
    Configuration,
    PushNotificationRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new MessagingApi(configuration);

let projectId: string; // (default to undefined)
let pushNotificationRequest: PushNotificationRequest; //

const { status, data } = await apiInstance.sendPushNotification(
    projectId,
    pushNotificationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pushNotificationRequest** | **PushNotificationRequest**|  | |
| **projectId** | [**string**] |  | defaults to undefined|


### Return type

**MessageSentResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Push notification sent |  -  |
|**403** | App role feature permission denied |  -  |
|**429** | Per-project messaging send rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sendSMS**
> MessageSentResponse sendSMS(sMSRequest)

Send an SMS message to one or more phone numbers. Uses project BYO SMS when configured; otherwise the platform SMS provider if set. Accepts: OrgBearerAuth (for admin users), ProjectBearerAuth (JWT for authenticated users), or ApiKeyAuth (X-API-Key for programmatic access). Both ProjectBearerAuth and ApiKeyAuth are fully implemented. 

### Example

```typescript
import {
    MessagingApi,
    Configuration,
    SMSRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new MessagingApi(configuration);

let projectId: string; // (default to undefined)
let sMSRequest: SMSRequest; //

const { status, data } = await apiInstance.sendSMS(
    projectId,
    sMSRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sMSRequest** | **SMSRequest**|  | |
| **projectId** | [**string**] |  | defaults to undefined|


### Return type

**MessageSentResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | SMS sent |  -  |
|**403** | App role feature permission denied |  -  |
|**429** | Per-project messaging send rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unregisterDeviceToken**
> DeviceUnregisteredResponse unregisterDeviceToken(deviceUnregisterRequest)

Remove a device push token from a project - call this on logout or when a token rotates, so the send endpoint stops delivering to it.  The token to remove is sent in the request body. Removing a token that is not registered is a no-op and still returns 200 (with `removed: false`).  Accepts: OrgBearerAuth (for admin users), ProjectBearerAuth (JWT for authenticated users), or ApiKeyAuth (X-API-Key for programmatic access). 

### Example

```typescript
import {
    MessagingApi,
    Configuration,
    DeviceUnregisterRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new MessagingApi(configuration);

let projectId: string; // (default to undefined)
let deviceUnregisterRequest: DeviceUnregisterRequest; //

const { status, data } = await apiInstance.unregisterDeviceToken(
    projectId,
    deviceUnregisterRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deviceUnregisterRequest** | **DeviceUnregisterRequest**|  | |
| **projectId** | [**string**] |  | defaults to undefined|


### Return type

**DeviceUnregisteredResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Device token removed (or already absent) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

