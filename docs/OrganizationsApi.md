# OrganizationsApi

All URIs are relative to *https://cloud.mudbase.dev*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addOrgCustomDomain**](#addorgcustomdomain) | **POST** /api/orgs/{orgId}/projects/{projectId}/domains | Add a custom domain|
|[**createOrganization**](#createorganization) | **POST** /api/orgs | ~~Create new organization~~ (disabled)|
|[**deleteOrgCustomDomain**](#deleteorgcustomdomain) | **DELETE** /api/orgs/{orgId}/projects/{projectId}/domains/{hostname} | Remove a custom domain|
|[**deleteOrganization**](#deleteorganization) | **DELETE** /api/orgs/{orgId} | Delete organization|
|[**deleteSubOrganization**](#deletesuborganization) | **DELETE** /api/orgs/{orgId}/suborgs/{suborgId} | ~~Delete sub-organization~~ (deprecated)|
|[**getOrgCustomDomainDnsInstructions**](#getorgcustomdomaindnsinstructions) | **GET** /api/orgs/{orgId}/projects/{projectId}/domains/{hostname}/dns-instructions | Get DNS TXT record instructions for one hostname|
|[**getOrganization**](#getorganization) | **GET** /api/orgs/{orgId} | Get organization details by ID|
|[**getOrganizationMembers**](#getorganizationmembers) | **GET** /api/orgs/{orgId}/members | Get organization members|
|[**getOrganizationUsage**](#getorganizationusage) | **GET** /api/orgs/{orgId}/usage | Get organization usage and billing|
|[**getOrganizationUsers**](#getorganizationusers) | **GET** /api/orgs/{orgId}/users | List organization users with metadata|
|[**getProjectUsers**](#getprojectusers) | **GET** /api/orgs/{orgId}/projects/{projectId}/users | List project users with metadata|
|[**getSubOrganizations**](#getsuborganizations) | **GET** /api/orgs/{orgId}/suborgs | ~~Get sub-organizations~~ (deprecated)|
|[**getUserOverview**](#getuseroverview) | **GET** /api/orgs/{orgId}/users/{userId}/overview | Get user overview and data footprint|
|[**internalCustomDomainAddon**](#internalcustomdomainaddon) | **POST** /internal/org/custom-domain-addon | Enable/disable Growth/Scale custom domain add-on (internal)|
|[**internalCustomDomainSweepStatus**](#internalcustomdomainsweepstatus) | **GET** /internal/custom-domain/sweep-status | Custom domain background sweep status (internal)|
|[**internalDomainDnsRecheckBatch**](#internaldomaindnsrecheckbatch) | **POST** /internal/domain-dns/recheck-batch | Batch DNS re-verification for drift (internal)|
|[**internalProvisionEnterprise**](#internalprovisionenterprise) | **POST** /internal/provision-enterprise | Provision enterprise dedicated API/DB (internal)|
|[**inviteSubOrganizationMember**](#invitesuborganizationmember) | **POST** /api/orgs/{orgId}/suborgs/{suborgId}/invite | ~~Invite member to sub-organization~~ (deprecated)|
|[**inviteTeamMember**](#inviteteammember) | **POST** /api/orgs/{orgId}/invite | Invite team member to organization|
|[**listOrgCustomDomains**](#listorgcustomdomains) | **GET** /api/orgs/{orgId}/projects/{projectId}/domains | List custom domains and DNS verification hints|
|[**listOrganizations**](#listorganizations) | **GET** /api/orgs | Get all organizations for user|
|[**orgCustomDomainPlatformReady**](#orgcustomdomainplatformready) | **POST** /api/orgs/{orgId}/projects/{projectId}/domains/{hostname}/platform-ready | Notify platform ops that hosting or edge work is ready (email)|
|[**orgCustomDomainSubmitCname**](#orgcustomdomainsubmitcname) | **POST** /api/orgs/{orgId}/projects/{projectId}/domains/{hostname}/submit-cname | Custom domain step 2 (optional): org confirms routing CNAME was added|
|[**orgCustomDomainSubmitPlatformDnsVerificationDeprecated**](#orgcustomdomainsubmitplatformdnsverificationdeprecated) | **POST** /api/orgs/{orgId}/projects/{projectId}/domains/{hostname}/submit-platform-dns-verification | Deprecated — use POST .../verify-platform-dns|
|[**orgCustomDomainVerifyPlatformDns**](#orgcustomdomainverifyplatformdns) | **POST** /api/orgs/{orgId}/projects/{projectId}/domains/{hostname}/verify-platform-dns | Custom domain step 3: verify platform DNS (manual TXT or Fly certificate readiness)|
|[**patchOrgCustomDomain**](#patchorgcustomdomain) | **PATCH** /api/orgs/{orgId}/projects/{projectId}/domains/{hostname} | Update domain status or regenerate verification token|
|[**removeSubOrganizationMember**](#removesuborganizationmember) | **DELETE** /api/orgs/{orgId}/suborgs/{suborgId}/members/{userId} | ~~Remove member from sub-organization~~ (deprecated)|
|[**removeTeamMember**](#removeteammember) | **DELETE** /api/orgs/{orgId}/members/{userId} | Remove team member from organization|
|[**setOrgPrimaryDomain**](#setorgprimarydomain) | **PATCH** /api/orgs/{orgId}/projects/{projectId}/domains/primary | Set primary custom domain|
|[**updateMemberRole**](#updatememberrole) | **PATCH** /api/orgs/{orgId}/members/{userId}/role | Update member role|
|[**updateOrganization**](#updateorganization) | **PATCH** /api/orgs/{orgId} | Update organization|
|[**updateOrganizationPlan**](#updateorganizationplan) | **PATCH** /api/orgs/plan/{orgId} | Update organization plan|
|[**updateSubOrganization**](#updatesuborganization) | **PATCH** /api/orgs/{orgId}/suborgs/{suborgId} | ~~Update sub-organization~~ (deprecated)|
|[**updateSubOrganizationMemberRole**](#updatesuborganizationmemberrole) | **PATCH** /api/orgs/{orgId}/suborgs/{suborgId}/members/{userId}/role | ~~Update sub-organization member role~~ (deprecated)|
|[**updateUserAccountStatus**](#updateuseraccountstatus) | **PATCH** /api/orgs/{orgId}/users/{userId}/status | Update user account status (activate or suspend)|
|[**verifyOrgCustomDomainDns**](#verifyorgcustomdomaindns) | **POST** /api/orgs/{orgId}/projects/{projectId}/domains/{hostname}/verify-dns | Verify domain ownership via DNS TXT|

# **addOrgCustomDomain**
> OrgAddDomainResponse addOrgCustomDomain(addOrgDomainRequest)

Creates a pending domain row; the response **`domain`** uses the compact **`OrgDomainEntryOrgConsole`** shape (**`dnsRecords`** includes the Mudbase ownership TXT). **`dnsRecords`** may include Mudbase TXT and routing CNAME only until Mudbase TXT succeeds and Fly ACME (if enabled) provisions a certificate. **`flyCertificateStatus`** is typically omitted until Fly ACME runs after first successful **`verify-dns`**. 

### Example

```typescript
import {
    OrganizationsApi,
    Configuration,
    AddOrgDomainRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new OrganizationsApi(configuration);

let orgId: string; // (default to undefined)
let projectId: string; // (default to undefined)
let addOrgDomainRequest: AddOrgDomainRequest; //

const { status, data } = await apiInstance.addOrgCustomDomain(
    orgId,
    projectId,
    addOrgDomainRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addOrgDomainRequest** | **AddOrgDomainRequest**|  | |
| **orgId** | [**string**] |  | defaults to undefined|
| **projectId** | [**string**] |  | defaults to undefined|


### Return type

**OrgAddDomainResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Domain created; includes dnsRecords and human-readable instructions (no extra GET required). |  -  |
|**400** | Validation, limit, or hostname_in_use |  -  |
|**429** | domain_rate_limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createOrganization**
> createOrganization(createOrganizationRequest)

~~Create a new organization.~~ This endpoint is disabled and kept only for backward compatibility in documentation. Requires: OrgBearerAuth (organization-level authentication only). 

### Example

```typescript
import {
    OrganizationsApi,
    Configuration,
    CreateOrganizationRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new OrganizationsApi(configuration);

let createOrganizationRequest: CreateOrganizationRequest; //

const { status, data } = await apiInstance.createOrganization(
    createOrganizationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createOrganizationRequest** | **CreateOrganizationRequest**|  | |


### Return type

void (empty response body)

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**403** | Organization creation disabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteOrgCustomDomain**
> deleteOrgCustomDomain()


### Example

```typescript
import {
    OrganizationsApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new OrganizationsApi(configuration);

let orgId: string; // (default to undefined)
let projectId: string; // (default to undefined)
let hostname: string; // (default to undefined)

const { status, data } = await apiInstance.deleteOrgCustomDomain(
    orgId,
    projectId,
    hostname
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orgId** | [**string**] |  | defaults to undefined|
| **projectId** | [**string**] |  | defaults to undefined|
| **hostname** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Removed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteOrganization**
> DeleteOrganization200Response deleteOrganization()

Delete an organization permanently. This is a destructive operation. Requires JWT Bearer token authentication. Both OrgBearerAuth and ProjectBearerAuth are supported (they use the same JWT token format). These are organization-level operations. 

### Example

```typescript
import {
    OrganizationsApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new OrganizationsApi(configuration);

let orgId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteOrganization(
    orgId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orgId** | [**string**] |  | defaults to undefined|


### Return type

**DeleteOrganization200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Organization deleted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteSubOrganization**
> DeleteSubOrganization200Response deleteSubOrganization()


### Example

```typescript
import {
    OrganizationsApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new OrganizationsApi(configuration);

let orgId: string; // (default to undefined)
let suborgId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteSubOrganization(
    orgId,
    suborgId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orgId** | [**string**] |  | defaults to undefined|
| **suborgId** | [**string**] |  | defaults to undefined|


### Return type

**DeleteSubOrganization200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Sub-organization deleted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getOrgCustomDomainDnsInstructions**
> OrgDnsInstructionsResponse getOrgCustomDomainDnsInstructions()

Returns the same shape as list/add for one hostname (URL-encode `hostname` in the path), including **`dnsRecords`** and **`flyCertificateStatus`** when applicable. See **`listOrgCustomDomains`** for how Fly ACME and Cloudflare SaaS affect those fields. 

### Example

```typescript
import {
    OrganizationsApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new OrganizationsApi(configuration);

let orgId: string; // (default to undefined)
let projectId: string; // (default to undefined)
let hostname: string; // (default to undefined)

const { status, data } = await apiInstance.getOrgCustomDomainDnsInstructions(
    orgId,
    projectId,
    hostname
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orgId** | [**string**] |  | defaults to undefined|
| **projectId** | [**string**] |  | defaults to undefined|
| **hostname** | [**string**] |  | defaults to undefined|


### Return type

**OrgDnsInstructionsResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Domain row with DNS hints |  -  |
|**404** | domain_not_found |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getOrganization**
> Organization getOrganization()

Get organization details by ID. Requires: OrgBearerAuth (organization-level authentication only). 

### Example

```typescript
import {
    OrganizationsApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new OrganizationsApi(configuration);

let orgId: string; // (default to undefined)

const { status, data } = await apiInstance.getOrganization(
    orgId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orgId** | [**string**] |  | defaults to undefined|


### Return type

**Organization**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Organization details |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getOrganizationMembers**
> GetOrganizationMembers200Response getOrganizationMembers()

Get all members of an organization. Requires organization-level authentication (JWT Bearer token). API keys are not supported for this endpoint. 

### Example

```typescript
import {
    OrganizationsApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new OrganizationsApi(configuration);

let orgId: string; // (default to undefined)

const { status, data } = await apiInstance.getOrganizationMembers(
    orgId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orgId** | [**string**] |  | defaults to undefined|


### Return type

**GetOrganizationMembers200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Organization members |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getOrganizationUsage**
> GetOrganizationUsage200Response getOrganizationUsage()

Get usage statistics and billing information for an organization. Requires: OrgBearerAuth (organization-level authentication only). 

### Example

```typescript
import {
    OrganizationsApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new OrganizationsApi(configuration);

let orgId: string; // (default to undefined)

const { status, data } = await apiInstance.getOrganizationUsage(
    orgId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orgId** | [**string**] |  | defaults to undefined|


### Return type

**GetOrganizationUsage200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Usage and billing information |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getOrganizationUsers**
> GetOrganizationUsers200Response getOrganizationUsers()

Get all users in the organization with metadata (email, full name, role, accountStatus, phone, lastLogin, etc.). Optional query `status` filters by accountStatus (pending, active, suspended). Requires organization access and owner or admin role. 

### Example

```typescript
import {
    OrganizationsApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new OrganizationsApi(configuration);

let orgId: string; // (default to undefined)
let status: 'pending' | 'active' | 'suspended'; //Filter by account status (pending, active, suspended) (optional) (default to undefined)

const { status, data } = await apiInstance.getOrganizationUsers(
    orgId,
    status
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orgId** | [**string**] |  | defaults to undefined|
| **status** | [**&#39;pending&#39; | &#39;active&#39; | &#39;suspended&#39;**]**Array<&#39;pending&#39; &#124; &#39;active&#39; &#124; &#39;suspended&#39;>** | Filter by account status (pending, active, suspended) | (optional) defaults to undefined|


### Return type

**GetOrganizationUsers200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Organization users with metadata |  -  |
|**401** | Authentication required |  -  |
|**403** | Access denied |  -  |
|**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getProjectUsers**
> GetProjectUsers200Response getProjectUsers()

Get all users in a project with metadata (email, full name, role, accountStatus, etc.). Optional query `status` filters by accountStatus. Project must belong to the organization. Requires owner or admin role. 

### Example

```typescript
import {
    OrganizationsApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new OrganizationsApi(configuration);

let orgId: string; // (default to undefined)
let projectId: string; // (default to undefined)
let status: 'pending' | 'active' | 'suspended'; //Filter by account status (pending, active, suspended) (optional) (default to undefined)

const { status, data } = await apiInstance.getProjectUsers(
    orgId,
    projectId,
    status
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orgId** | [**string**] |  | defaults to undefined|
| **projectId** | [**string**] |  | defaults to undefined|
| **status** | [**&#39;pending&#39; | &#39;active&#39; | &#39;suspended&#39;**]**Array<&#39;pending&#39; &#124; &#39;active&#39; &#124; &#39;suspended&#39;>** | Filter by account status (pending, active, suspended) | (optional) defaults to undefined|


### Return type

**GetProjectUsers200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Project users with metadata |  -  |
|**401** | Authentication required |  -  |
|**403** | Access denied |  -  |
|**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSubOrganizations**
> GetSubOrganizations200Response getSubOrganizations()

Get all sub-organizations under a parent organization. Requires: OrgBearerAuth (organization-level authentication only). 

### Example

```typescript
import {
    OrganizationsApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new OrganizationsApi(configuration);

let orgId: string; // (default to undefined)

const { status, data } = await apiInstance.getSubOrganizations(
    orgId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orgId** | [**string**] |  | defaults to undefined|


### Return type

**GetSubOrganizations200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of sub-organizations |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUserOverview**
> GetUserOverview200Response getUserOverview()

Get a user\'s profile plus footprint (files count/size, sessions, API keys, collections in project). Use for dashboard to see everything tied to the user. Requires owner or admin role. 

### Example

```typescript
import {
    OrganizationsApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new OrganizationsApi(configuration);

let orgId: string; // (default to undefined)
let userId: string; // (default to undefined)

const { status, data } = await apiInstance.getUserOverview(
    orgId,
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orgId** | [**string**] |  | defaults to undefined|
| **userId** | [**string**] |  | defaults to undefined|


### Return type

**GetUserOverview200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | User and footprint |  -  |
|**401** | Authentication required |  -  |
|**403** | Access denied |  -  |
|**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **internalCustomDomainAddon**
> internalCustomDomainAddon(internalCustomDomainAddonRequest)


### Example

```typescript
import {
    OrganizationsApi,
    Configuration,
    InternalCustomDomainAddonRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new OrganizationsApi(configuration);

let internalCustomDomainAddonRequest: InternalCustomDomainAddonRequest; //

const { status, data } = await apiInstance.internalCustomDomainAddon(
    internalCustomDomainAddonRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **internalCustomDomainAddonRequest** | **InternalCustomDomainAddonRequest**|  | |


### Return type

void (empty response body)

### Authorization

[InternalApiKey](../README.md#InternalApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **internalCustomDomainSweepStatus**
> internalCustomDomainSweepStatus()

Returns the last automated custom-domain sweep (TXT recheck + Fly ACME retry), job env flags, and Fly deploy troubleshooting hints when the proxy reports the app is not listening on 0.0.0.0:PORT. Requires header `X-Internal-Api-Key` (same as other /internal routes).

### Example

```typescript
import {
    OrganizationsApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new OrganizationsApi(configuration);

const { status, data } = await apiInstance.internalCustomDomainSweepStatus();
```

### Parameters
This endpoint does not have any parameters.


### Return type

void (empty response body)

### Authorization

[InternalApiKey](../README.md#InternalApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | sweep payload, jobConfig, flyHttpListenTroubleshooting |  -  |
|**401** | Unauthorized |  -  |
|**503** | INTERNAL_API_KEY not configured |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **internalDomainDnsRecheckBatch**
> internalDomainDnsRecheckBatch()


### Example

```typescript
import {
    OrganizationsApi,
    Configuration,
    InternalDomainDnsRecheckBatchRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new OrganizationsApi(configuration);

let internalDomainDnsRecheckBatchRequest: InternalDomainDnsRecheckBatchRequest; // (optional)

const { status, data } = await apiInstance.internalDomainDnsRecheckBatch(
    internalDomainDnsRecheckBatchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **internalDomainDnsRecheckBatchRequest** | **InternalDomainDnsRecheckBatchRequest**|  | |


### Return type

void (empty response body)

### Authorization

[InternalApiKey](../README.md#InternalApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Summary counts |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **internalProvisionEnterprise**
> internalProvisionEnterprise(provisionEnterpriseRequest)


### Example

```typescript
import {
    OrganizationsApi,
    Configuration,
    ProvisionEnterpriseRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new OrganizationsApi(configuration);

let provisionEnterpriseRequest: ProvisionEnterpriseRequest; //

const { status, data } = await apiInstance.internalProvisionEnterprise(
    provisionEnterpriseRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **provisionEnterpriseRequest** | **ProvisionEnterpriseRequest**|  | |


### Return type

void (empty response body)

### Authorization

[InternalApiKey](../README.md#InternalApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Applied or idempotent no-op |  -  |
|**403** | not_enterprise_plan |  -  |
|**409** | provision_conflict |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **inviteSubOrganizationMember**
> InviteSubOrganizationMember200Response inviteSubOrganizationMember(inviteMemberRequest)


### Example

```typescript
import {
    OrganizationsApi,
    Configuration,
    InviteMemberRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new OrganizationsApi(configuration);

let orgId: string; // (default to undefined)
let suborgId: string; // (default to undefined)
let inviteMemberRequest: InviteMemberRequest; //

const { status, data } = await apiInstance.inviteSubOrganizationMember(
    orgId,
    suborgId,
    inviteMemberRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **inviteMemberRequest** | **InviteMemberRequest**|  | |
| **orgId** | [**string**] |  | defaults to undefined|
| **suborgId** | [**string**] |  | defaults to undefined|


### Return type

**InviteSubOrganizationMember200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Invitation sent |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **inviteTeamMember**
> InviteTeamMember200Response inviteTeamMember(inviteMemberRequest)

Send an invitation to a user to join the organization. Requires JWT Bearer token authentication. Both OrgBearerAuth and ProjectBearerAuth are supported (they use the same JWT token format). These are organization-level operations. 

### Example

```typescript
import {
    OrganizationsApi,
    Configuration,
    InviteMemberRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new OrganizationsApi(configuration);

let orgId: string; // (default to undefined)
let inviteMemberRequest: InviteMemberRequest; //

const { status, data } = await apiInstance.inviteTeamMember(
    orgId,
    inviteMemberRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **inviteMemberRequest** | **InviteMemberRequest**|  | |
| **orgId** | [**string**] |  | defaults to undefined|


### Return type

**InviteTeamMember200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Invitation sent |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listOrgCustomDomains**
> OrgDomainsListResponse listOrgCustomDomains()

Returns allowed hostnames for **this project**, primary hostname (per project), API base URL, and per-domain DNS guidance.  Each row uses **`dnsRecords`** for the Mudbase ownership TXT (purpose **`mudbase_ownership`**) and routing **CNAME** from Fly **`dns_requirements.cname`** when Fly ACME has provisioned (else fallback **`CUSTOM_DOMAIN_API_CNAME_TARGET`**), and—when Fly ACME is enabled (**`FLY_API_TOKEN`** + **`CUSTOM_DOMAIN_FLY_ACME_ENABLED`**)—Fly rows (`fly_ownership`, `acme_challenge`, etc.) after the org has passed Mudbase TXT at least once. **`flyCertificateStatus`** mirrors Fly’s certificate state when ACME automation is on (e.g. `pending_validation`, `active`).  **`cloudflareEdge`** appears only when Cloudflare SSL-for-SaaS env is configured. Fly ACME and Cloudflare SaaS are mutually exclusive on the server.  Requires Growth, Scale, or Enterprise plan (custom domains included in plan features). 

### Example

```typescript
import {
    OrganizationsApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new OrganizationsApi(configuration);

let orgId: string; // (default to undefined)
let projectId: string; // (default to undefined)

const { status, data } = await apiInstance.listOrgCustomDomains(
    orgId,
    projectId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orgId** | [**string**] |  | defaults to undefined|
| **projectId** | [**string**] |  | defaults to undefined|


### Return type

**OrgDomainsListResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Domain list and hints |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listOrganizations**
> ListOrganizations200Response listOrganizations()

Get all organizations the authenticated user belongs to. Requires: OrgBearerAuth (organization-level authentication only). 

### Example

```typescript
import {
    OrganizationsApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new OrganizationsApi(configuration);

const { status, data } = await apiInstance.listOrganizations();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ListOrganizations200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of organizations |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orgCustomDomainPlatformReady**
> orgCustomDomainPlatformReady()

Legacy optional ping: ops are emailed automatically on first successful Mudbase TXT verify. Use this only for an extra nudge. Sends an email to ops while the domain is in platform setup (after Mudbase TXT verification through later pipeline states). Recipients default to `admin@mudhaxkservices.com` and `admin@mudbase.dev` when `CUSTOM_DOMAIN_OPS_NOTIFY_EMAILS` is unset; override with that env (comma/space-separated). Returns **503** `email_provider_not_configured` if no email provider is configured (e.g. missing `ZEPTOMAIL_SEND_TOKEN`). 

### Example

```typescript
import {
    OrganizationsApi,
    Configuration,
    OrgCustomDomainPlatformReadyRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new OrganizationsApi(configuration);

let orgId: string; // (default to undefined)
let projectId: string; // (default to undefined)
let hostname: string; // (default to undefined)
let orgCustomDomainPlatformReadyRequest: OrgCustomDomainPlatformReadyRequest; // (optional)

const { status, data } = await apiInstance.orgCustomDomainPlatformReady(
    orgId,
    projectId,
    hostname,
    orgCustomDomainPlatformReadyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orgCustomDomainPlatformReadyRequest** | **OrgCustomDomainPlatformReadyRequest**|  | |
| **orgId** | [**string**] |  | defaults to undefined|
| **projectId** | [**string**] |  | defaults to undefined|
| **hostname** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ops notified |  -  |
|**400** | custom_domain_invalid_state |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**503** | email_provider_not_configured — email provider not configured on the server |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orgCustomDomainSubmitCname**
> OrgPatchDomainResponse orgCustomDomainSubmitCname()

Usually unnecessary. With Fly ACME default automation, Mudbase TXT verify may already set `cname_approved`. Legacy pipelines may queue `cname_pending_staff` until staff **`approve-cname`**. Use **`routingCnameTarget`** from **`GET .../projects/{projectId}/domains`** (Fly **`dns_requirements.cname`** when provisioned, else **`CUSTOM_DOMAIN_API_CNAME_TARGET`**). 

### Example

```typescript
import {
    OrganizationsApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new OrganizationsApi(configuration);

let orgId: string; // (default to undefined)
let projectId: string; // (default to undefined)
let hostname: string; // (default to undefined)

const { status, data } = await apiInstance.orgCustomDomainSubmitCname(
    orgId,
    projectId,
    hostname
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orgId** | [**string**] |  | defaults to undefined|
| **projectId** | [**string**] |  | defaults to undefined|
| **hostname** | [**string**] |  | defaults to undefined|


### Return type

**OrgPatchDomainResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated domain row |  -  |
|**400** | custom_domain_invalid_state |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orgCustomDomainSubmitPlatformDnsVerificationDeprecated**
> OrgPatchDomainResponse orgCustomDomainSubmitPlatformDnsVerificationDeprecated()

Deprecated alias of **`orgCustomDomainVerifyPlatformDns`** (same behavior — manual TXT and/or Fly ACME path per server config).

### Example

```typescript
import {
    OrganizationsApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new OrganizationsApi(configuration);

let orgId: string; // (default to undefined)
let projectId: string; // (default to undefined)
let hostname: string; // (default to undefined)

const { status, data } = await apiInstance.orgCustomDomainSubmitPlatformDnsVerificationDeprecated(
    orgId,
    projectId,
    hostname
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orgId** | [**string**] |  | defaults to undefined|
| **projectId** | [**string**] |  | defaults to undefined|
| **hostname** | [**string**] |  | defaults to undefined|


### Return type

**OrgPatchDomainResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Same as verify-platform-dns |  -  |
|**400** | Error |  -  |
|**503** | dns_lookup_error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orgCustomDomainVerifyPlatformDns**
> OrgPatchDomainResponse orgCustomDomainVerifyPlatformDns()

**Manual path (no Fly ACME):** After staff **`PATCH .../platform-dns-verification`**, the org adds the published TXT and calls this endpoint. The API resolves public TXT at **`platformDnsVerification.recordName`** and matches **`recordValue`**. On success, `status` → **`platform_dns_pending_review`** until staff **`POST .../activate`**.  **Fly ACME path (default):** When Fly ACME is enabled and **`CUSTOM_DOMAIN_FLY_LEGACY_STAFF_PIPELINE`** is **not** set, the org calls this after Mudbase TXT and Fly DNS rows are in place (status typically **`cname_approved`** from automated verify-dns). The API triggers Fly **`POST .../check`** and **`GET`** certificate with bounded retries. On success, `status` → **`active`** and the org may receive the activation email—**no** staff **`approve-cname`** or **`activate`** required.  **Fly legacy:** If **`CUSTOM_DOMAIN_FLY_LEGACY_STAFF_PIPELINE=true`**, behavior matches the older flow: staff **`approve-cname`** may be required first; after a ready Fly cert, **`status`** becomes **`active`** only when **`CUSTOM_DOMAIN_FLY_AUTO_ACTIVATE=true`**, else **`platform_dns_pending_review`** until staff **`activate`**.  **`platform_dns_verification_failed`** may include **`details.flyStatus`** / **`details.flyError`** on the Fly path. 

### Example

```typescript
import {
    OrganizationsApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new OrganizationsApi(configuration);

let orgId: string; // (default to undefined)
let projectId: string; // (default to undefined)
let hostname: string; // (default to undefined)

const { status, data } = await apiInstance.orgCustomDomainVerifyPlatformDns(
    orgId,
    projectId,
    hostname
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orgId** | [**string**] |  | defaults to undefined|
| **projectId** | [**string**] |  | defaults to undefined|
| **hostname** | [**string**] |  | defaults to undefined|


### Return type

**OrgPatchDomainResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Domain row updated (&#x60;OrgPatchDomainResponse.domain&#x60;). Manual TXT path typically sets &#x60;platform_dns_pending_review&#x60;. Fly ACME default automation: typically &#x60;active&#x60; when the certificate is ready. Fly legacy staff pipeline: may set &#x60;platform_dns_pending_review&#x60; unless &#x60;CUSTOM_DOMAIN_FLY_AUTO_ACTIVATE&#x60; is enabled. Body may include refreshed &#x60;dnsRecords&#x60; and &#x60;flyCertificateStatus&#x60; on the Fly path. |  -  |
|**400** | custom_domain_invalid_state, platform_dns_verification_failed (manual TXT mismatch or Fly cert not active yet; see response details on Fly path) |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**503** | dns_lookup_error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patchOrgCustomDomain**
> OrgPatchDomainResponse patchOrgCustomDomain()


### Example

```typescript
import {
    OrganizationsApi,
    Configuration,
    PatchOrgDomainRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new OrganizationsApi(configuration);

let orgId: string; // (default to undefined)
let projectId: string; // (default to undefined)
let hostname: string; // (default to undefined)
let patchOrgDomainRequest: PatchOrgDomainRequest; // (optional)

const { status, data } = await apiInstance.patchOrgCustomDomain(
    orgId,
    projectId,
    hostname,
    patchOrgDomainRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchOrgDomainRequest** | **PatchOrgDomainRequest**|  | |
| **orgId** | [**string**] |  | defaults to undefined|
| **projectId** | [**string**] |  | defaults to undefined|
| **hostname** | [**string**] |  | defaults to undefined|


### Return type

**OrgPatchDomainResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated; domain object includes dnsTxtHost and dnsTxtValue |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **removeSubOrganizationMember**
> RemoveTeamMember200Response removeSubOrganizationMember()


### Example

```typescript
import {
    OrganizationsApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new OrganizationsApi(configuration);

let orgId: string; // (default to undefined)
let suborgId: string; // (default to undefined)
let userId: string; // (default to undefined)

const { status, data } = await apiInstance.removeSubOrganizationMember(
    orgId,
    suborgId,
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orgId** | [**string**] |  | defaults to undefined|
| **suborgId** | [**string**] |  | defaults to undefined|
| **userId** | [**string**] |  | defaults to undefined|


### Return type

**RemoveTeamMember200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Member removed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **removeTeamMember**
> RemoveTeamMember200Response removeTeamMember()

Remove a user from the organization. Requires JWT Bearer token authentication. Both OrgBearerAuth and ProjectBearerAuth are supported (they use the same JWT token format). These are organization-level operations. 

### Example

```typescript
import {
    OrganizationsApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new OrganizationsApi(configuration);

let orgId: string; // (default to undefined)
let userId: string; // (default to undefined)

const { status, data } = await apiInstance.removeTeamMember(
    orgId,
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orgId** | [**string**] |  | defaults to undefined|
| **userId** | [**string**] |  | defaults to undefined|


### Return type

**RemoveTeamMember200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Member removed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setOrgPrimaryDomain**
> setOrgPrimaryDomain(setOrgPrimaryDomainRequest)


### Example

```typescript
import {
    OrganizationsApi,
    Configuration,
    SetOrgPrimaryDomainRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new OrganizationsApi(configuration);

let orgId: string; // (default to undefined)
let projectId: string; // (default to undefined)
let setOrgPrimaryDomainRequest: SetOrgPrimaryDomainRequest; //

const { status, data } = await apiInstance.setOrgPrimaryDomain(
    orgId,
    projectId,
    setOrgPrimaryDomainRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **setOrgPrimaryDomainRequest** | **SetOrgPrimaryDomainRequest**|  | |
| **orgId** | [**string**] |  | defaults to undefined|
| **projectId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Primary updated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateMemberRole**
> UpdateMemberRole200Response updateMemberRole(updateMemberRoleRequest)

Update a member\'s role in the organization. Requires organization-level authentication (JWT Bearer token). API keys are not supported for this endpoint. 

### Example

```typescript
import {
    OrganizationsApi,
    Configuration,
    UpdateMemberRoleRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new OrganizationsApi(configuration);

let orgId: string; // (default to undefined)
let userId: string; // (default to undefined)
let updateMemberRoleRequest: UpdateMemberRoleRequest; //

const { status, data } = await apiInstance.updateMemberRole(
    orgId,
    userId,
    updateMemberRoleRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateMemberRoleRequest** | **UpdateMemberRoleRequest**|  | |
| **orgId** | [**string**] |  | defaults to undefined|
| **userId** | [**string**] |  | defaults to undefined|


### Return type

**UpdateMemberRole200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Role updated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateOrganization**
> UpdateOrganization200Response updateOrganization(updateOrganizationRequest)

Update organization details. Requires organization-level authentication (JWT Bearer token). API keys are not supported for this endpoint. 

### Example

```typescript
import {
    OrganizationsApi,
    Configuration,
    UpdateOrganizationRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new OrganizationsApi(configuration);

let orgId: string; // (default to undefined)
let updateOrganizationRequest: UpdateOrganizationRequest; //

const { status, data } = await apiInstance.updateOrganization(
    orgId,
    updateOrganizationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateOrganizationRequest** | **UpdateOrganizationRequest**|  | |
| **orgId** | [**string**] |  | defaults to undefined|


### Return type

**UpdateOrganization200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Organization updated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateOrganizationPlan**
> UpdateOrganizationPlan200Response updateOrganizationPlan(updateOrganizationPlanRequest)


### Example

```typescript
import {
    OrganizationsApi,
    Configuration,
    UpdateOrganizationPlanRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new OrganizationsApi(configuration);

let orgId: string; // (default to undefined)
let updateOrganizationPlanRequest: UpdateOrganizationPlanRequest; //

const { status, data } = await apiInstance.updateOrganizationPlan(
    orgId,
    updateOrganizationPlanRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateOrganizationPlanRequest** | **UpdateOrganizationPlanRequest**|  | |
| **orgId** | [**string**] |  | defaults to undefined|


### Return type

**UpdateOrganizationPlan200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Plan updated (or error if trying to upgrade to paid) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateSubOrganization**
> UpdateSubOrganization200Response updateSubOrganization(updateOrganizationRequest)

Update a sub-organization\'s configuration. Requires JWT Bearer token authentication. Both OrgBearerAuth and ProjectBearerAuth are supported (they use the same JWT token format). These are organization-level operations. 

### Example

```typescript
import {
    OrganizationsApi,
    Configuration,
    UpdateOrganizationRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new OrganizationsApi(configuration);

let orgId: string; // (default to undefined)
let suborgId: string; // (default to undefined)
let updateOrganizationRequest: UpdateOrganizationRequest; //

const { status, data } = await apiInstance.updateSubOrganization(
    orgId,
    suborgId,
    updateOrganizationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateOrganizationRequest** | **UpdateOrganizationRequest**|  | |
| **orgId** | [**string**] |  | defaults to undefined|
| **suborgId** | [**string**] |  | defaults to undefined|


### Return type

**UpdateSubOrganization200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Sub-organization updated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateSubOrganizationMemberRole**
> UpdateMemberRole200Response updateSubOrganizationMemberRole(updateMemberRoleRequest)


### Example

```typescript
import {
    OrganizationsApi,
    Configuration,
    UpdateMemberRoleRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new OrganizationsApi(configuration);

let orgId: string; // (default to undefined)
let suborgId: string; // (default to undefined)
let userId: string; // (default to undefined)
let updateMemberRoleRequest: UpdateMemberRoleRequest; //

const { status, data } = await apiInstance.updateSubOrganizationMemberRole(
    orgId,
    suborgId,
    userId,
    updateMemberRoleRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateMemberRoleRequest** | **UpdateMemberRoleRequest**|  | |
| **orgId** | [**string**] |  | defaults to undefined|
| **suborgId** | [**string**] |  | defaults to undefined|
| **userId** | [**string**] |  | defaults to undefined|


### Return type

**UpdateMemberRole200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Role updated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateUserAccountStatus**
> UpdateUserAccountStatus200Response updateUserAccountStatus(updateUserAccountStatusRequest)

Set a user\'s account status to active or suspended. Used to approve pending users or suspend/activate accounts. Cannot change status of an organization owner. Requires owner or admin role. 

### Example

```typescript
import {
    OrganizationsApi,
    Configuration,
    UpdateUserAccountStatusRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new OrganizationsApi(configuration);

let orgId: string; // (default to undefined)
let userId: string; // (default to undefined)
let updateUserAccountStatusRequest: UpdateUserAccountStatusRequest; //

const { status, data } = await apiInstance.updateUserAccountStatus(
    orgId,
    userId,
    updateUserAccountStatusRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateUserAccountStatusRequest** | **UpdateUserAccountStatusRequest**|  | |
| **orgId** | [**string**] |  | defaults to undefined|
| **userId** | [**string**] |  | defaults to undefined|


### Return type

**UpdateUserAccountStatus200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | User status updated |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |
|**403** | Access denied |  -  |
|**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **verifyOrgCustomDomainDns**
> OrgVerifyCustomDomainDnsSuccessResponse verifyOrgCustomDomainDns()

Looks up TXT at `_mudbase-verify.<hostname>` for value `mudbase-domain-verification=<token>`.  When the server has **`CLOUDFLARE_API_TOKEN`** and **`CLOUDFLARE_ZONE_ID`** configured (and Fly ACME is **not** enabled), a successful verify also creates or refreshes a Cloudflare Custom Hostname (SSL for SaaS) and returns **`cloudflare`** with DCV hints.  When **Fly ACME** is enabled (**`FLY_API_TOKEN`** + **`CUSTOM_DOMAIN_FLY_ACME_ENABLED=true`** + app slug), a successful verify calls Fly’s Certificates API (`POST .../certificates/acme`) and persists DNS requirements. If Fly returns DNS rows and **`CUSTOM_DOMAIN_FLY_LEGACY_STAFF_PIPELINE`** is **not** set, status advances to **`cname_approved`** in the same response (no staff **`approve-cname`**); **`org.domain.cname_staff_queued`** is not logged for that path. Otherwise (legacy Fly or non-Fly), first success from `pending`/`failed` may move to **`cname_pending_staff`** and queue staff as before.  The **200** response may include **`dnsRecords`**, **`flyCertificateStatus`**, and **`routingCnameTarget`** from Fly’s **`dns_requirements.cname`** when provisioned.  Cloudflare SaaS and Fly ACME cannot both be enabled; the API process refuses to start if both are configured. 

### Example

```typescript
import {
    OrganizationsApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new OrganizationsApi(configuration);

let orgId: string; // (default to undefined)
let projectId: string; // (default to undefined)
let hostname: string; // (default to undefined)

const { status, data } = await apiInstance.verifyOrgCustomDomainDns(
    orgId,
    projectId,
    hostname
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orgId** | [**string**] |  | defaults to undefined|
| **projectId** | [**string**] |  | defaults to undefined|
| **hostname** | [**string**] |  | defaults to undefined|


### Return type

**OrgVerifyCustomDomainDnsSuccessResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | TXT verified. Fly ACME (default automation): often &#x60;cname_approved&#x60; when Fly returns DNS requirements; legacy Fly or non-Fly may show &#x60;cname_pending_staff&#x60; or &#x60;dns_verified&#x60;. Includes &#x60;dnsTxtHost&#x60;/&#x60;dnsTxtValue&#x60;, optional &#x60;cloudflare&#x60; (Cloudflare SaaS), optional &#x60;dnsRecords&#x60; + &#x60;flyCertificateStatus&#x60; when Fly ACME ran after this verify. |  -  |
|**400** | dns_verification_failed (TXT missing or wrong); body includes dnsTxtHost, dnsTxtValue, challengeHost, expectedTxt |  -  |
|**503** | dns_lookup_error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

