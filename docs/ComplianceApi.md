# ComplianceApi

All URIs are relative to *https://cloud.mudbase.dev*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiGdprErasePost**](#apigdprerasepost) | **POST** /api/gdpr/erase | Erase my personal data (GDPR Art. 17)|
|[**apiGdprExportGet**](#apigdprexportget) | **GET** /api/gdpr/export | Export my personal data (GDPR Art. 15)|
|[**generateAccessReview**](#generateaccessreview) | **POST** /api/compliance/access-review | Generate access review report (SOC 2)|
|[**generateDataProcessingRecord**](#generatedataprocessingrecord) | **POST** /api/compliance/data-processing-record | Generate data processing record (GDPR Article 30)|
|[**getComplianceSummary**](#getcompliancesummary) | **GET** /api/compliance/summary | Get compliance summary|
|[**logSecurityEvent**](#logsecurityevent) | **POST** /api/compliance/security-event | Log security event|

# **apiGdprErasePost**
> ApplyRoleFeaturePreset200Response apiGdprErasePost(apiGdprErasePostRequest)

Anonymizes the subject\'s PII, revokes sessions/tokens, and anonymizes (never hard-deletes) financial/legal-retention records. Idempotent and self-scoped.  Requires re-proving your current password (skipped only for OAuth-only accounts with no password set) and, if 2FA is enabled, a fresh TOTP code - the same step-up re-authentication already required by the less-destructive `PATCH /api/users/password` and `POST /api/users/2fa/disable`. 

### Example

```typescript
import {
    ComplianceApi,
    Configuration,
    ApiGdprErasePostRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new ComplianceApi(configuration);

let apiGdprErasePostRequest: ApiGdprErasePostRequest; //

const { status, data } = await apiInstance.apiGdprErasePost(
    apiGdprErasePostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiGdprErasePostRequest** | **ApiGdprErasePostRequest**|  | |


### Return type

**ApplyRoleFeaturePreset200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Data anonymized (or already anonymized — idempotent) |  -  |
|**400** | Confirmation field missing/not equal to \&quot;DELETE\&quot;, or currentPassword/totpToken missing or invalid |  -  |
|**401** | Authentication required |  -  |
|**409** | Sole owner of one or more organizations - transfer or delete them first |  -  |
|**429** | Rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiGdprExportGet**
> object apiGdprExportGet()

Returns the authenticated subject\'s personal data as a downloadable JSON attachment. Self-scoped — a caller can only export their own data.

### Example

```typescript
import {
    ComplianceApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new ComplianceApi(configuration);

const { status, data } = await apiInstance.apiGdprExportGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**object**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | JSON attachment containing the subject\&#39;s personal data |  -  |
|**401** | Authentication required |  -  |
|**429** | Rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generateAccessReview**
> GenerateAccessReview200Response generateAccessReview(generateAccessReviewRequest)

Generate access review report for compliance audits (SOC 2, ISO 27001, etc.). Requires JWT Bearer token authentication. Both OrgBearerAuth and ProjectBearerAuth are supported (they use the same JWT token format). These are organization-level operations. 

### Example

```typescript
import {
    ComplianceApi,
    Configuration,
    GenerateAccessReviewRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new ComplianceApi(configuration);

let generateAccessReviewRequest: GenerateAccessReviewRequest; //

const { status, data } = await apiInstance.generateAccessReview(
    generateAccessReviewRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **generateAccessReviewRequest** | **GenerateAccessReviewRequest**|  | |


### Return type

**GenerateAccessReview200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Access review report generated |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generateDataProcessingRecord**
> GenerateDataProcessingRecord200Response generateDataProcessingRecord(generateDataProcessingRecordRequest)

Generate GDPR Article 30 compliant data processing record

### Example

```typescript
import {
    ComplianceApi,
    Configuration,
    GenerateDataProcessingRecordRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new ComplianceApi(configuration);

let generateDataProcessingRecordRequest: GenerateDataProcessingRecordRequest; //

const { status, data } = await apiInstance.generateDataProcessingRecord(
    generateDataProcessingRecordRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **generateDataProcessingRecordRequest** | **GenerateDataProcessingRecordRequest**|  | |


### Return type

**GenerateDataProcessingRecord200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Data processing record generated |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getComplianceSummary**
> GetComplianceSummary200Response getComplianceSummary()

Get compliance dashboard data (GDPR, SOC 2, security status). Requires JWT Bearer token authentication. Both OrgBearerAuth and ProjectBearerAuth are supported (they use the same JWT token format). These are organization-level operations.

### Example

```typescript
import {
    ComplianceApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new ComplianceApi(configuration);

const { status, data } = await apiInstance.getComplianceSummary();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetComplianceSummary200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Compliance summary |  -  |
|**401** | Authentication required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **logSecurityEvent**
> LogSecurityEvent200Response logSecurityEvent(logSecurityEventRequest)

Log a security event for compliance and audit purposes

### Example

```typescript
import {
    ComplianceApi,
    Configuration,
    LogSecurityEventRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new ComplianceApi(configuration);

let logSecurityEventRequest: LogSecurityEventRequest; //

const { status, data } = await apiInstance.logSecurityEvent(
    logSecurityEventRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **logSecurityEventRequest** | **LogSecurityEventRequest**|  | |


### Return type

**LogSecurityEvent200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Security event logged |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

