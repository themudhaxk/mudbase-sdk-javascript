# EmailApi

All URIs are relative to *https://cloud.mudbase.dev*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**enqueueProjectEmail**](#enqueueprojectemail) | **POST** /api/projects/{projectId}/email/send | Enqueue project email (worker delivery)|
|[**getProjectEmailAnalytics**](#getprojectemailanalytics) | **GET** /api/projects/{projectId}/analytics/email | Email analytics for a project|
|[**getProjectEmailSmtp**](#getprojectemailsmtp) | **GET** /api/projects/{projectId}/email/smtp | Get project SMTP settings (masked)|
|[**getProjectEmailTemplate**](#getprojectemailtemplate) | **GET** /api/projects/{projectId}/email/templates/{name} | Get one email template (effective content)|
|[**listProjectEmailTemplates**](#listprojectemailtemplates) | **GET** /api/projects/{projectId}/email/templates | List email templates (full catalog for the project)|
|[**patchProjectEmailSmtp**](#patchprojectemailsmtp) | **PATCH** /api/projects/{projectId}/email/smtp | Update project SMTP relay (BYO)|
|[**previewProjectEmailTemplate**](#previewprojectemailtemplate) | **POST** /api/projects/{projectId}/email/templates/{name}/preview | Render template preview (sanitized HTML, no send)|
|[**restoreDefaultProjectEmailTemplate**](#restoredefaultprojectemailtemplate) | **POST** /api/projects/{projectId}/email/templates/{name}/restore-default | Restore from platform global default or remove project override|
|[**testProjectEmailSmtp**](#testprojectemailsmtp) | **POST** /api/projects/{projectId}/email/smtp/test | Verify SMTP and send a test message|
|[**upsertProjectEmailTemplate**](#upsertprojectemailtemplate) | **PUT** /api/projects/{projectId}/email/templates/{name} | Upsert project email template (HTML sanitized; variables must cover {{placeholders}})|
|[**verifyProjectEmailSmtpDomain**](#verifyprojectemailsmtpdomain) | **POST** /api/projects/{projectId}/email/smtp/verify-domain | Check DNS (MX + SPF) for sending domain|

# **enqueueProjectEmail**
> EnqueueProjectEmail202Response enqueueProjectEmail(projectEmailSendRequest)

Queues a transactional email for sending through the email worker and configured provider (platform or per-project SMTP). Provide either `template` (with `data`) or both `subject` and `html`. Returns **202** with `jobId` when accepted. 

### Example

```typescript
import {
    EmailApi,
    Configuration,
    ProjectEmailSendRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let projectId: string; // (default to undefined)
let projectEmailSendRequest: ProjectEmailSendRequest; //

const { status, data } = await apiInstance.enqueueProjectEmail(
    projectId,
    projectEmailSendRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectEmailSendRequest** | **ProjectEmailSendRequest**|  | |
| **projectId** | [**string**] |  | defaults to undefined|


### Return type

**EnqueueProjectEmail202Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | Job accepted |  -  |
|**400** | Bad request |  -  |
|**503** | Email queue unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getProjectEmailAnalytics**
> GetProjectEmailAnalytics200Response getProjectEmailAnalytics()

Aggregated email log stats for the project. Optional `from` and `to` query params filter by date range (ISO 8601). 

### Example

```typescript
import {
    EmailApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let projectId: string; // (default to undefined)
let from: string; // (optional) (default to undefined)
let to: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getProjectEmailAnalytics(
    projectId,
    from,
    to
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|
| **from** | [**string**] |  | (optional) defaults to undefined|
| **to** | [**string**] |  | (optional) defaults to undefined|


### Return type

**GetProjectEmailAnalytics200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Analytics payload |  -  |
|**401** | Authentication required |  -  |
|**403** | Access denied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getProjectEmailSmtp**
> GetProjectEmailSmtp200Response getProjectEmailSmtp()


### Example

```typescript
import {
    EmailApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let projectId: string; // (default to undefined)

const { status, data } = await apiInstance.getProjectEmailSmtp(
    projectId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|


### Return type

**GetProjectEmailSmtp200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | SMTP configuration without secrets |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getProjectEmailTemplate**
> GetProjectEmailTemplate200Response getProjectEmailTemplate()

Returns the template body that would be used when sending: project override if present, else global default, else built-in fallback. **`isProjectOverride`** is true only when this project has a stored row; **`effectiveSource`** is `project`, `global`, or `builtin`. 

### Example

```typescript
import {
    EmailApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let projectId: string; // (default to undefined)
let name: string; // (default to undefined)

const { status, data } = await apiInstance.getProjectEmailTemplate(
    projectId,
    name
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|
| **name** | [**string**] |  | defaults to undefined|


### Return type

**GetProjectEmailTemplate200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Template document (resolved for send) |  -  |
|**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listProjectEmailTemplates**
> ListProjectEmailTemplates200Response listProjectEmailTemplates()

Returns every template name the worker can resolve for this project: **built-in** defaults, **global** platform rows (`project: null` in DB), and **project** overrides. Use **`isCustomized`** to see if this project has its own stored copy; **`effectiveSource`** shows which layer would be used at send time (`project` wins over `global` over `builtin`). 

### Example

```typescript
import {
    EmailApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let projectId: string; // (default to undefined)

const { status, data } = await apiInstance.listProjectEmailTemplates(
    projectId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|


### Return type

**ListProjectEmailTemplates200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Template catalog with customization flags |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patchProjectEmailSmtp**
> GetProjectEmailSmtp200Response patchProjectEmailSmtp(projectSmtpPatchRequest)

Set `authPass` in the body to store an encrypted password (never returned on GET). Validates host/user when enabling. 

### Example

```typescript
import {
    EmailApi,
    Configuration,
    ProjectSmtpPatchRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let projectId: string; // (default to undefined)
let projectSmtpPatchRequest: ProjectSmtpPatchRequest; //

const { status, data } = await apiInstance.patchProjectEmailSmtp(
    projectId,
    projectSmtpPatchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectSmtpPatchRequest** | **ProjectSmtpPatchRequest**|  | |
| **projectId** | [**string**] |  | defaults to undefined|


### Return type

**GetProjectEmailSmtp200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated settings (masked) |  -  |
|**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **previewProjectEmailTemplate**
> previewProjectEmailTemplate()

Body **`sampleData`** is merged with layout defaults; keys should match `{{placeholders}}` in the template (see **Email** tag for the catalog). 

### Example

```typescript
import {
    EmailApi,
    Configuration,
    PreviewProjectEmailTemplateRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let projectId: string; // (default to undefined)
let name: string; // (default to undefined)
let previewProjectEmailTemplateRequest: PreviewProjectEmailTemplateRequest; // (optional)

const { status, data } = await apiInstance.previewProjectEmailTemplate(
    projectId,
    name,
    previewProjectEmailTemplateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **previewProjectEmailTemplateRequest** | **PreviewProjectEmailTemplateRequest**|  | |
| **projectId** | [**string**] |  | defaults to undefined|
| **name** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Rendered subject and HTML |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **restoreDefaultProjectEmailTemplate**
> restoreDefaultProjectEmailTemplate()


### Example

```typescript
import {
    EmailApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let projectId: string; // (default to undefined)
let name: string; // (default to undefined)

const { status, data } = await apiInstance.restoreDefaultProjectEmailTemplate(
    projectId,
    name
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|
| **name** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Restored or deleted override |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **testProjectEmailSmtp**
> DeleteFunction200Response testProjectEmailSmtp(projectSmtpTestRequest)

Rate-limited. With `useSaved: true` (default), uses stored credentials; otherwise pass `host`, `authUser`, `authPass`, etc. 

### Example

```typescript
import {
    EmailApi,
    Configuration,
    ProjectSmtpTestRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let projectId: string; // (default to undefined)
let projectSmtpTestRequest: ProjectSmtpTestRequest; //

const { status, data } = await apiInstance.testProjectEmailSmtp(
    projectId,
    projectSmtpTestRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectSmtpTestRequest** | **ProjectSmtpTestRequest**|  | |
| **projectId** | [**string**] |  | defaults to undefined|


### Return type

**DeleteFunction200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | SMTP verified and test mail sent |  -  |
|**400** | Bad request |  -  |
|**429** | Rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **upsertProjectEmailTemplate**
> upsertProjectEmailTemplate(upsertProjectEmailTemplateRequest)

Saves a **project override** for `name`. HTML is sanitized. **`variables`** must list every `{{token}}` used in `subject`, `htmlBody`, and `textBody` (see **Email** tag description for the full placeholder catalog). 

### Example

```typescript
import {
    EmailApi,
    Configuration,
    UpsertProjectEmailTemplateRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let projectId: string; // (default to undefined)
let name: string; // (default to undefined)
let upsertProjectEmailTemplateRequest: UpsertProjectEmailTemplateRequest; //

const { status, data } = await apiInstance.upsertProjectEmailTemplate(
    projectId,
    name,
    upsertProjectEmailTemplateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **upsertProjectEmailTemplateRequest** | **UpsertProjectEmailTemplateRequest**|  | |
| **projectId** | [**string**] |  | defaults to undefined|
| **name** | [**string**] |  | defaults to undefined|


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
|**200** | Saved template |  -  |
|**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **verifyProjectEmailSmtpDomain**
> verifyProjectEmailSmtpDomain()

Resolves the domain from `domain`, `fromEmail`, or saved `emailSmtp.fromEmail`. Returns whether MX and SPF TXT exist. With `persist: true` and checks passed, sets `emailSmtp.domainVerifiedAt`. 

### Example

```typescript
import {
    EmailApi,
    Configuration,
    VerifyProjectEmailSmtpDomainRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let projectId: string; // (default to undefined)
let verifyProjectEmailSmtpDomainRequest: VerifyProjectEmailSmtpDomainRequest; // (optional)

const { status, data } = await apiInstance.verifyProjectEmailSmtpDomain(
    projectId,
    verifyProjectEmailSmtpDomainRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **verifyProjectEmailSmtpDomainRequest** | **VerifyProjectEmailSmtpDomainRequest**|  | |
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
|**200** | DNS check result |  -  |
|**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

