# AdminApi

All URIs are relative to *https://cloud.mudbase.dev*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAdminAuditEvents**](#getadminauditevents) | **GET** /api/admin/audit/events | List audit log events|
|[**getDashboardOrganizationDetail**](#getdashboardorganizationdetail) | **GET** /api/admin/dashboard/organizations/{orgId} | Get organization detail with projects and users (Admin)|
|[**getDashboardOrganizations**](#getdashboardorganizations) | **GET** /api/admin/dashboard/organizations | List all organizations (Admin)|
|[**platformAdminActivateOrgCustomDomain**](#platformadminactivateorgcustomdomain) | **POST** /api/admin/orgs/{orgId}/domains/{hostname}/activate | Mark custom domain live (legacy / non-Fly / manual completion)|
|[**platformAdminApproveOrgCustomDomainCname**](#platformadminapproveorgcustomdomaincname) | **POST** /api/admin/orgs/{orgId}/domains/{hostname}/approve-cname | Approve routing CNAME (legacy / non-automated pipeline)|
|[**platformAdminCreateBillingCheckoutLink**](#platformadmincreatebillingcheckoutlink) | **POST** /api/admin/orgs/{orgId}/billing/checkout-link | Create checkout link for org (platform admin)|
|[**platformAdminCreateBillingSubscriptionLink**](#platformadmincreatebillingsubscriptionlink) | **POST** /api/admin/orgs/{orgId}/billing/subscription-link | Create subscription (payment plan) checkout link for org (platform admin)|
|[**platformAdminCustomDomainAddon**](#platformadmincustomdomainaddon) | **POST** /api/admin/orgs/{orgId}/custom-domain-addon | Enable/disable Growth/Scale custom domain add-on (JWT admin)|
|[**platformAdminDetachMember**](#platformadmindetachmember) | **POST** /api/admin/orgs/{orgId}/members/{userId}/detach | Detach user from organization (platform admin)|
|[**platformAdminDomainDnsRecheckBatch**](#platformadmindomaindnsrecheckbatch) | **POST** /api/admin/domain-dns/recheck-batch | Batch custom-domain DNS recheck (JWT admin)|
|[**platformAdminGetSecurityEvents**](#platformadmingetsecurityevents) | **GET** /api/admin/security/events | List in-memory security events (platform admin)|
|[**platformAdminPatchMemberRole**](#platformadminpatchmemberrole) | **PATCH** /api/admin/orgs/{orgId}/members/{userId}/role | Set org member role (platform admin)|
|[**platformAdminPatchOrgBillingContract**](#platformadminpatchorgbillingcontract) | **PATCH** /api/admin/orgs/{orgId}/billing-contract | Patch staff billing contract metadata (platform admin)|
|[**platformAdminPatchOrgCustomDomainPlatformDnsVerification**](#platformadminpatchorgcustomdomainplatformdnsverification) | **PATCH** /api/admin/orgs/{orgId}/domains/{hostname}/platform-dns-verification | Publish platform DNS verification record for the customer (non-Fly / legacy)|
|[**platformAdminPatchOrgLimits**](#platformadminpatchorglimits) | **PATCH** /api/admin/orgs/{orgId}/limits | Patch per-org limit overrides|
|[**platformAdminPatchOrgPlan**](#platformadminpatchorgplan) | **PATCH** /api/admin/orgs/{orgId}/plan | Set organization billing plan (platform admin)|
|[**platformAdminPatchOrgStatus**](#platformadminpatchorgstatus) | **PATCH** /api/admin/orgs/{orgId}/status | Set organization active flag and platform notes (platform admin)|
|[**platformAdminPatchProject**](#platformadminpatchproject) | **PATCH** /api/admin/orgs/{orgId}/projects/{projectId} | Patch project (platform admin)|
|[**platformAdminProvisionEnterprise**](#platformadminprovisionenterprise) | **POST** /api/admin/orgs/{orgId}/provision-enterprise | Provision enterprise dedicated endpoints (JWT admin)|

# **getAdminAuditEvents**
> GetAdminAuditEvents200Response getAdminAuditEvents()

Paginated AuditLog entries. Omit orgId for cross-org recent events. 

### Example

```typescript
import {
    AdminApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let orgId: string; // (optional) (default to undefined)
let action: string; // (optional) (default to undefined)
let actionPrefix: string; //Prefix match on action (e.g. org.) (optional) (default to undefined)
let resource: string; // (optional) (default to undefined)
let severity: 'low' | 'medium' | 'high' | 'critical'; // (optional) (default to undefined)
let page: number; // (optional) (default to 1)
let limit: number; // (optional) (default to 50)

const { status, data } = await apiInstance.getAdminAuditEvents(
    orgId,
    action,
    actionPrefix,
    resource,
    severity,
    page,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orgId** | [**string**] |  | (optional) defaults to undefined|
| **action** | [**string**] |  | (optional) defaults to undefined|
| **actionPrefix** | [**string**] | Prefix match on action (e.g. org.) | (optional) defaults to undefined|
| **resource** | [**string**] |  | (optional) defaults to undefined|
| **severity** | [**&#39;low&#39; | &#39;medium&#39; | &#39;high&#39; | &#39;critical&#39;**]**Array<&#39;low&#39; &#124; &#39;medium&#39; &#124; &#39;high&#39; &#124; &#39;critical&#39;>** |  | (optional) defaults to undefined|
| **page** | [**number**] |  | (optional) defaults to 1|
| **limit** | [**number**] |  | (optional) defaults to 50|


### Return type

**GetAdminAuditEvents200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Audit events page |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |
|**403** | Access denied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getDashboardOrganizationDetail**
> GetDashboardOrganizationDetail200Response getDashboardOrganizationDetail()

Includes limits, usage, effective entitlements (getEntitlements), redacted billing summary, customDomains (from allowedDomains), deploymentType, dedicated, txPlan, settings, enterprise fields. 

### Example

```typescript
import {
    AdminApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let orgId: string; // (default to undefined)

const { status, data } = await apiInstance.getDashboardOrganizationDetail(
    orgId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orgId** | [**string**] |  | defaults to undefined|


### Return type

**GetDashboardOrganizationDetail200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Organization with projects and users |  -  |
|**401** | Authentication required |  -  |
|**403** | Access denied |  -  |
|**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getDashboardOrganizations**
> GetDashboardOrganizations200Response getDashboardOrganizations()

Customer orgs only (`isPlatformShell` excluded). Default sort by `name` ascending; override with `sort` / `sortDir`. Optional `q` (name/slug substring, or 24-char hex org `_id`), `plan`, `isActive`. If query param `limit` is sent, response is paginated (`page`, `pages`, `total`). Without `limit`, all matching orgs are returned (small deployments). 

### Example

```typescript
import {
    AdminApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let q: string; //Case-insensitive match on name or slug (optional) (default to undefined)
let plan: 'free' | 'basic' | 'starter' | 'growth' | 'scale' | 'enterprise'; // (optional) (default to undefined)
let isActive: 'true' | 'false'; // (optional) (default to undefined)
let page: number; // (optional) (default to 1)
let limit: number; //When present, enables pagination (optional) (default to 50)
let sort: 'name' | 'createdAt' | 'slug' | 'plan'; // (optional) (default to 'name')
let sortDir: 'asc' | 'desc'; // (optional) (default to 'asc')

const { status, data } = await apiInstance.getDashboardOrganizations(
    q,
    plan,
    isActive,
    page,
    limit,
    sort,
    sortDir
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **q** | [**string**] | Case-insensitive match on name or slug | (optional) defaults to undefined|
| **plan** | [**&#39;free&#39; | &#39;basic&#39; | &#39;starter&#39; | &#39;growth&#39; | &#39;scale&#39; | &#39;enterprise&#39;**]**Array<&#39;free&#39; &#124; &#39;basic&#39; &#124; &#39;starter&#39; &#124; &#39;growth&#39; &#124; &#39;scale&#39; &#124; &#39;enterprise&#39;>** |  | (optional) defaults to undefined|
| **isActive** | [**&#39;true&#39; | &#39;false&#39;**]**Array<&#39;true&#39; &#124; &#39;false&#39;>** |  | (optional) defaults to undefined|
| **page** | [**number**] |  | (optional) defaults to 1|
| **limit** | [**number**] | When present, enables pagination | (optional) defaults to 50|
| **sort** | [**&#39;name&#39; | &#39;createdAt&#39; | &#39;slug&#39; | &#39;plan&#39;**]**Array<&#39;name&#39; &#124; &#39;createdAt&#39; &#124; &#39;slug&#39; &#124; &#39;plan&#39;>** |  | (optional) defaults to 'name'|
| **sortDir** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** |  | (optional) defaults to 'asc'|


### Return type

**GetDashboardOrganizations200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Organizations with project and user counts |  -  |
|**401** | Authentication required |  -  |
|**403** | Access denied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **platformAdminActivateOrgCustomDomain**
> AdminCustomDomainMutationResponse platformAdminActivateOrgCustomDomain()

Sets `status` to `active`. When `CUSTOM_DOMAIN_LEGACY_ACTIVATE_FROM_DNS_VERIFIED` is false (strict pipeline), requires `platform_dns_pending_review`. Default legacy mode allows activation from `dns_verified` for backward compatibility.  **Fly ACME default automation:** Org **`verify-platform-dns`** typically sets **`active`** when the Fly certificate is ready; staff **`activate`** is optional (e.g. notifications or edge cases). With **`CUSTOM_DOMAIN_FLY_LEGACY_STAFF_PIPELINE=true`**, org go-live may still require this call unless **`CUSTOM_DOMAIN_FLY_AUTO_ACTIVATE=true`**. 

### Example

```typescript
import {
    AdminApi,
    Configuration,
    PlatformAdminActivateOrgCustomDomainRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let orgId: string; // (default to undefined)
let hostname: string; // (default to undefined)
let platformAdminActivateOrgCustomDomainRequest: PlatformAdminActivateOrgCustomDomainRequest; // (optional)

const { status, data } = await apiInstance.platformAdminActivateOrgCustomDomain(
    orgId,
    hostname,
    platformAdminActivateOrgCustomDomainRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **platformAdminActivateOrgCustomDomainRequest** | **PlatformAdminActivateOrgCustomDomainRequest**|  | |
| **orgId** | [**string**] |  | defaults to undefined|
| **hostname** | [**string**] |  | defaults to undefined|


### Return type

**AdminCustomDomainMutationResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Domain activated |  -  |
|**400** | custom_domain_dns_required or custom_domain_activate_pipeline_incomplete |  -  |
|**401** | Authentication required |  -  |
|**403** | Access denied |  -  |
|**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **platformAdminApproveOrgCustomDomainCname**
> AdminCustomDomainMutationResponse platformAdminApproveOrgCustomDomainCname()

**Legacy / manual pipeline:** From `cname_pending_staff` or legacy `dns_verified` → `cname_approved`. Optional **`verifyDns`** checks the public CNAME chain against **`routingCnameTarget`** (Fly **`dns_requirements.cname`** when stored, else **`CUSTOM_DOMAIN_API_CNAME_TARGET`**).  **Not used** on the default Fly ACME deployment: Mudbase **`verify-dns`** advances to **`cname_approved`** when Fly returns DNS requirements and **`CUSTOM_DOMAIN_FLY_LEGACY_STAFF_PIPELINE`** is unset. 

### Example

```typescript
import {
    AdminApi,
    Configuration,
    AdminApproveOrgDomainCnameRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let orgId: string; // (default to undefined)
let hostname: string; // (default to undefined)
let adminApproveOrgDomainCnameRequest: AdminApproveOrgDomainCnameRequest; // (optional)

const { status, data } = await apiInstance.platformAdminApproveOrgCustomDomainCname(
    orgId,
    hostname,
    adminApproveOrgDomainCnameRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adminApproveOrgDomainCnameRequest** | **AdminApproveOrgDomainCnameRequest**|  | |
| **orgId** | [**string**] |  | defaults to undefined|
| **hostname** | [**string**] |  | defaults to undefined|


### Return type

**AdminCustomDomainMutationResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated domain |  -  |
|**400** | custom_domain_invalid_state or cname_verification_failed |  -  |
|**401** | Authentication required |  -  |
|**403** | Access denied |  -  |
|**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **platformAdminCreateBillingCheckoutLink**
> platformAdminCreateBillingCheckoutLink(adminBillingCheckoutLinkRequest)

Returns a payment URL. Enterprise pricing uses org.billing.contractAmountCents unless amountCents or chargeAmountCents is set. Optional sendEmail uses template org_billing_checkout. 

### Example

```typescript
import {
    AdminApi,
    Configuration,
    AdminBillingCheckoutLinkRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let orgId: string; // (default to undefined)
let adminBillingCheckoutLinkRequest: AdminBillingCheckoutLinkRequest; //

const { status, data } = await apiInstance.platformAdminCreateBillingCheckoutLink(
    orgId,
    adminBillingCheckoutLinkRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adminBillingCheckoutLinkRequest** | **AdminBillingCheckoutLinkRequest**|  | |
| **orgId** | [**string**] |  | defaults to undefined|


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
|**200** | Link created (and optionally email sent) |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |
|**403** | Access denied |  -  |
|**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **platformAdminCreateBillingSubscriptionLink**
> platformAdminCreateBillingSubscriptionLink(adminBillingCheckoutLinkRequest)

Same request body as checkout-link. Creates or reuses a platform payment plan, then returns a payment URL with payment_plan set. First charge uses tx_ref prefix mudbase_org_sub_. Renewals for non-mudbase_ references are processed via billing webhooks. Optional sendEmail uses template org_billing_checkout with recurring labeling. 

### Example

```typescript
import {
    AdminApi,
    Configuration,
    AdminBillingCheckoutLinkRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let orgId: string; // (default to undefined)
let adminBillingCheckoutLinkRequest: AdminBillingCheckoutLinkRequest; //

const { status, data } = await apiInstance.platformAdminCreateBillingSubscriptionLink(
    orgId,
    adminBillingCheckoutLinkRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adminBillingCheckoutLinkRequest** | **AdminBillingCheckoutLinkRequest**|  | |
| **orgId** | [**string**] |  | defaults to undefined|


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
|**200** | Subscription link created (includes a provider payment-plan id; optionally email sent) |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |
|**403** | Access denied |  -  |
|**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **platformAdminCustomDomainAddon**
> platformAdminCustomDomainAddon(platformAdminCustomDomainAddonRequest)


### Example

```typescript
import {
    AdminApi,
    Configuration,
    PlatformAdminCustomDomainAddonRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let orgId: string; // (default to undefined)
let platformAdminCustomDomainAddonRequest: PlatformAdminCustomDomainAddonRequest; //

const { status, data } = await apiInstance.platformAdminCustomDomainAddon(
    orgId,
    platformAdminCustomDomainAddonRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **platformAdminCustomDomainAddonRequest** | **PlatformAdminCustomDomainAddonRequest**|  | |
| **orgId** | [**string**] |  | defaults to undefined|


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
|**200** | Updated add-on flag |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |
|**403** | Access denied |  -  |
|**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **platformAdminDetachMember**
> platformAdminDetachMember()

Clears user.org and user.project; does not delete the user account.

### Example

```typescript
import {
    AdminApi,
    Configuration,
    PlatformAdminDetachMemberRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let orgId: string; // (default to undefined)
let userId: string; // (default to undefined)
let platformAdminDetachMemberRequest: PlatformAdminDetachMemberRequest; // (optional)

const { status, data } = await apiInstance.platformAdminDetachMember(
    orgId,
    userId,
    platformAdminDetachMemberRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **platformAdminDetachMemberRequest** | **PlatformAdminDetachMemberRequest**|  | |
| **orgId** | [**string**] |  | defaults to undefined|
| **userId** | [**string**] |  | defaults to undefined|


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
|**200** | Detached |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |
|**403** | Access denied |  -  |
|**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **platformAdminDomainDnsRecheckBatch**
> platformAdminDomainDnsRecheckBatch()


### Example

```typescript
import {
    AdminApi,
    Configuration,
    PlatformAdminDomainDnsRecheckBatchRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let platformAdminDomainDnsRecheckBatchRequest: PlatformAdminDomainDnsRecheckBatchRequest; // (optional)

const { status, data } = await apiInstance.platformAdminDomainDnsRecheckBatch(
    platformAdminDomainDnsRecheckBatchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **platformAdminDomainDnsRecheckBatchRequest** | **PlatformAdminDomainDnsRecheckBatchRequest**|  | |


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
|**200** | Batch summary |  -  |
|**401** | Authentication required |  -  |
|**403** | Access denied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **platformAdminGetSecurityEvents**
> platformAdminGetSecurityEvents()


### Example

```typescript
import {
    AdminApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let window: '1h' | '24h' | '7d'; // (optional) (default to '24h')
let type: string; // (optional) (default to undefined)
let limit: number; // (optional) (default to 200)

const { status, data } = await apiInstance.platformAdminGetSecurityEvents(
    window,
    type,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **window** | [**&#39;1h&#39; | &#39;24h&#39; | &#39;7d&#39;**]**Array<&#39;1h&#39; &#124; &#39;24h&#39; &#124; &#39;7d&#39;>** |  | (optional) defaults to '24h'|
| **type** | [**string**] |  | (optional) defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to 200|


### Return type

void (empty response body)

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Recent security events |  -  |
|**401** | Authentication required |  -  |
|**403** | Access denied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **platformAdminPatchMemberRole**
> platformAdminPatchMemberRole(adminMemberRolePatchRequest)


### Example

```typescript
import {
    AdminApi,
    Configuration,
    AdminMemberRolePatchRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let orgId: string; // (default to undefined)
let userId: string; // (default to undefined)
let adminMemberRolePatchRequest: AdminMemberRolePatchRequest; //

const { status, data } = await apiInstance.platformAdminPatchMemberRole(
    orgId,
    userId,
    adminMemberRolePatchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adminMemberRolePatchRequest** | **AdminMemberRolePatchRequest**|  | |
| **orgId** | [**string**] |  | defaults to undefined|
| **userId** | [**string**] |  | defaults to undefined|


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
|**200** | Updated user metadata |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |
|**403** | Access denied |  -  |
|**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **platformAdminPatchOrgBillingContract**
> platformAdminPatchOrgBillingContract(adminOrgBillingContractPatchRequest)


### Example

```typescript
import {
    AdminApi,
    Configuration,
    AdminOrgBillingContractPatchRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let orgId: string; // (default to undefined)
let adminOrgBillingContractPatchRequest: AdminOrgBillingContractPatchRequest; //

const { status, data } = await apiInstance.platformAdminPatchOrgBillingContract(
    orgId,
    adminOrgBillingContractPatchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adminOrgBillingContractPatchRequest** | **AdminOrgBillingContractPatchRequest**|  | |
| **orgId** | [**string**] |  | defaults to undefined|


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
|**200** | Redacted billing summary including contract fields |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |
|**403** | Access denied |  -  |
|**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **platformAdminPatchOrgCustomDomainPlatformDnsVerification**
> AdminCustomDomainMutationResponse platformAdminPatchOrgCustomDomainPlatformDnsVerification(adminPlatformDnsVerificationPatchRequest)

**Manual step-3 path** (no Fly ACME, or staff override): Sets `platformDnsVerification` and moves `cname_approved` → `platform_dns_pending`. When `resetCustomerPlatformDnsSubmission` is true and status was `platform_dns_pending_review`, returns customer to `platform_dns_pending` and clears their submission timestamp. By default (`notifyOrg` not false), emails **`org.billing.email`** with record type, name, content, and TTL so the customer can add DNS and call **POST .../verify-platform-dns**. Set `CUSTOM_DOMAIN_CONSOLE_URL` for a console link in that email.  **Fly ACME (default):** Not part of the org go-live path; **`dnsRecords`** come from Fly. This endpoint returns **`400` `custom_domain_invalid_state`** unless **`CUSTOM_DOMAIN_FLY_ALLOW_STAFF_PLATFORM_DNS_OVERRIDE=true`** (support-only override). 

### Example

```typescript
import {
    AdminApi,
    Configuration,
    AdminPlatformDnsVerificationPatchRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let orgId: string; // (default to undefined)
let hostname: string; // (default to undefined)
let adminPlatformDnsVerificationPatchRequest: AdminPlatformDnsVerificationPatchRequest; //

const { status, data } = await apiInstance.platformAdminPatchOrgCustomDomainPlatformDnsVerification(
    orgId,
    hostname,
    adminPlatformDnsVerificationPatchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adminPlatformDnsVerificationPatchRequest** | **AdminPlatformDnsVerificationPatchRequest**|  | |
| **orgId** | [**string**] |  | defaults to undefined|
| **hostname** | [**string**] |  | defaults to undefined|


### Return type

**AdminCustomDomainMutationResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated domain |  -  |
|**400** | Validation, custom_domain_invalid_state, or Fly ACME owns DNS instructions (use override env for support) |  -  |
|**401** | Authentication required |  -  |
|**403** | Access denied |  -  |
|**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **platformAdminPatchOrgLimits**
> PlatformAdminPatchOrgLimits200Response platformAdminPatchOrgLimits(adminOrgLimitsPatchRequest)

Merges the JSON body into `Org.limits`. Effective caps are `PLANS[plan].limits` merged with overrides (`getEntitlements`). For orgs not on `enterprise`, each finite numeric value must not exceed the Scale plan default for that key. `null` means unlimited (same as plan semantics). Recorded in audit as `org.limits_update`. 

### Example

```typescript
import {
    AdminApi,
    Configuration,
    AdminOrgLimitsPatchRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let orgId: string; // (default to undefined)
let adminOrgLimitsPatchRequest: AdminOrgLimitsPatchRequest; //

const { status, data } = await apiInstance.platformAdminPatchOrgLimits(
    orgId,
    adminOrgLimitsPatchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adminOrgLimitsPatchRequest** | **AdminOrgLimitsPatchRequest**|  | |
| **orgId** | [**string**] |  | defaults to undefined|


### Return type

**PlatformAdminPatchOrgLimits200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated stored limits and merged effective entitlements |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |
|**403** | Access denied |  -  |
|**404** | Organization not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **platformAdminPatchOrgPlan**
> platformAdminPatchOrgPlan(adminOrgPlanPatchRequest)

Sets plan and resets Org.limits to plan defaults. Applies storage downgrade markers and clears dedicated infra when leaving enterprise. Audit org.admin_plan_change. 

### Example

```typescript
import {
    AdminApi,
    Configuration,
    AdminOrgPlanPatchRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let orgId: string; // (default to undefined)
let adminOrgPlanPatchRequest: AdminOrgPlanPatchRequest; //

const { status, data } = await apiInstance.platformAdminPatchOrgPlan(
    orgId,
    adminOrgPlanPatchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adminOrgPlanPatchRequest** | **AdminOrgPlanPatchRequest**|  | |
| **orgId** | [**string**] |  | defaults to undefined|


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
|**200** | Updated plan, limits, effective entitlements |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |
|**403** | Access denied |  -  |
|**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **platformAdminPatchOrgStatus**
> platformAdminPatchOrgStatus(adminOrgStatusPatchRequest)


### Example

```typescript
import {
    AdminApi,
    Configuration,
    AdminOrgStatusPatchRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let orgId: string; // (default to undefined)
let adminOrgStatusPatchRequest: AdminOrgStatusPatchRequest; //

const { status, data } = await apiInstance.platformAdminPatchOrgStatus(
    orgId,
    adminOrgStatusPatchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adminOrgStatusPatchRequest** | **AdminOrgStatusPatchRequest**|  | |
| **orgId** | [**string**] |  | defaults to undefined|


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
|**200** | Updated status fields |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |
|**403** | Access denied |  -  |
|**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **platformAdminPatchProject**
> platformAdminPatchProject(adminProjectPatchRequest)


### Example

```typescript
import {
    AdminApi,
    Configuration,
    AdminProjectPatchRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let orgId: string; // (default to undefined)
let projectId: string; // (default to undefined)
let adminProjectPatchRequest: AdminProjectPatchRequest; //

const { status, data } = await apiInstance.platformAdminPatchProject(
    orgId,
    projectId,
    adminProjectPatchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adminProjectPatchRequest** | **AdminProjectPatchRequest**|  | |
| **orgId** | [**string**] |  | defaults to undefined|
| **projectId** | [**string**] |  | defaults to undefined|


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
|**200** | Updated project stub |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |
|**403** | Access denied |  -  |
|**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **platformAdminProvisionEnterprise**
> platformAdminProvisionEnterprise(adminProvisionEnterpriseBody)

Same as POST /internal/provision-enterprise; orgId from path.

### Example

```typescript
import {
    AdminApi,
    Configuration,
    AdminProvisionEnterpriseBody
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let orgId: string; // (default to undefined)
let adminProvisionEnterpriseBody: AdminProvisionEnterpriseBody; //

const { status, data } = await apiInstance.platformAdminProvisionEnterprise(
    orgId,
    adminProvisionEnterpriseBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adminProvisionEnterpriseBody** | **AdminProvisionEnterpriseBody**|  | |
| **orgId** | [**string**] |  | defaults to undefined|


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
|**200** | Provisioning result |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |
|**403** | Access denied |  -  |
|**404** | Resource not found |  -  |
|**409** | Provision conflict |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

