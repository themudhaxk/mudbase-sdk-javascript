# ProjectsApi

All URIs are relative to *https://cloud.mudbase.dev*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**configureOAuthProvider**](#configureoauthprovider) | **POST** /api/auth/oauth/projects/{projectId}/providers/{provider} | Configure OAuth provider for a project|
|[**createProject**](#createproject) | **POST** /api/projects/{orgId}/projects | Create new project|
|[**deleteProject**](#deleteproject) | **DELETE** /api/projects/{orgId}/projects/{id} | Delete project|
|[**getOAuthProviderConfig**](#getoauthproviderconfig) | **GET** /api/auth/oauth/projects/{projectId}/providers/{provider} | Get OAuth provider configuration|
|[**getProject**](#getproject) | **GET** /api/projects/{orgId}/projects/{id} | Get single project|
|[**getProjectCaptchaConfig**](#getprojectcaptchaconfig) | **GET** /api/projects/{orgId}/projects/{id}/auth/captcha | Get project CAPTCHA configuration|
|[**getProjectDashboardOverview**](#getprojectdashboardoverview) | **GET** /api/projects/{projectId}/dashboard/overview | Project dashboard overview|
|[**getProjectOAuthProviders**](#getprojectoauthproviders) | **GET** /api/auth/oauth/projects/{projectId}/providers | Get configured OAuth providers for a project|
|[**getProjectUsage**](#getprojectusage) | **GET** /api/projects/{orgId}/projects/{id}/usage | Get project usage statistics|
|[**listProjects**](#listprojects) | **GET** /api/projects/{orgId}/projects | List all projects|
|[**updateOAuthProviderConfig**](#updateoauthproviderconfig) | **PATCH** /api/auth/oauth/projects/{projectId}/providers/{provider} | Update OAuth provider configuration|
|[**updateProject**](#updateproject) | **PATCH** /api/projects/{orgId}/projects/{id} | Update project|
|[**uploadProjectLogo**](#uploadprojectlogo) | **POST** /api/projects/{id}/logo | Upload project logo (by project ID)|
|[**uploadProjectLogoByOrg**](#uploadprojectlogobyorg) | **POST** /api/projects/{orgId}/projects/{id}/logo | Upload project logo (by org and project ID)|

# **configureOAuthProvider**
> ConfigureOAuthProvider200Response configureOAuthProvider(configureOAuthProviderRequest)

Creates or updates the configuration for an OAuth provider for the specified project

### Example

```typescript
import {
    ProjectsApi,
    Configuration,
    ConfigureOAuthProviderRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new ProjectsApi(configuration);

let projectId: string; // (default to undefined)
let provider: 'google' | 'github' | 'facebook' | 'microsoft' | 'apple' | 'twitter' | 'discord' | 'linkedin' | 'dropbox' | 'slack' | 'reddit' | 'twitch' | 'figma' | 'zoom' | 'bitbucket' | 'salesforce' | 'shopify' | 'line' | 'spotify' | 'strava' | 'paypal' | 'asana' | 'trello' | 'okta' | 'gitea' | 'yandex' | 'yahoo' | 'vk' | 'meetup'; // (default to undefined)
let configureOAuthProviderRequest: ConfigureOAuthProviderRequest; //

const { status, data } = await apiInstance.configureOAuthProvider(
    projectId,
    provider,
    configureOAuthProviderRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **configureOAuthProviderRequest** | **ConfigureOAuthProviderRequest**|  | |
| **projectId** | [**string**] |  | defaults to undefined|
| **provider** | [**&#39;google&#39; | &#39;github&#39; | &#39;facebook&#39; | &#39;microsoft&#39; | &#39;apple&#39; | &#39;twitter&#39; | &#39;discord&#39; | &#39;linkedin&#39; | &#39;dropbox&#39; | &#39;slack&#39; | &#39;reddit&#39; | &#39;twitch&#39; | &#39;figma&#39; | &#39;zoom&#39; | &#39;bitbucket&#39; | &#39;salesforce&#39; | &#39;shopify&#39; | &#39;line&#39; | &#39;spotify&#39; | &#39;strava&#39; | &#39;paypal&#39; | &#39;asana&#39; | &#39;trello&#39; | &#39;okta&#39; | &#39;gitea&#39; | &#39;yandex&#39; | &#39;yahoo&#39; | &#39;vk&#39; | &#39;meetup&#39;**]**Array<&#39;google&#39; &#124; &#39;github&#39; &#124; &#39;facebook&#39; &#124; &#39;microsoft&#39; &#124; &#39;apple&#39; &#124; &#39;twitter&#39; &#124; &#39;discord&#39; &#124; &#39;linkedin&#39; &#124; &#39;dropbox&#39; &#124; &#39;slack&#39; &#124; &#39;reddit&#39; &#124; &#39;twitch&#39; &#124; &#39;figma&#39; &#124; &#39;zoom&#39; &#124; &#39;bitbucket&#39; &#124; &#39;salesforce&#39; &#124; &#39;shopify&#39; &#124; &#39;line&#39; &#124; &#39;spotify&#39; &#124; &#39;strava&#39; &#124; &#39;paypal&#39; &#124; &#39;asana&#39; &#124; &#39;trello&#39; &#124; &#39;okta&#39; &#124; &#39;gitea&#39; &#124; &#39;yandex&#39; &#124; &#39;yahoo&#39; &#124; &#39;vk&#39; &#124; &#39;meetup&#39;>** |  | defaults to undefined|


### Return type

**ConfigureOAuthProvider200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OAuth provider configured successfully |  -  |
|**400** | Bad request |  -  |
|**403** | Access denied |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createProject**
> CreateProject201Response createProject(createProjectRequest)

Create a new project in an organization. Requires: OrgBearerAuth (organization-level authentication only). 

### Example

```typescript
import {
    ProjectsApi,
    Configuration,
    CreateProjectRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new ProjectsApi(configuration);

let orgId: string; //Organization ID (default to undefined)
let createProjectRequest: CreateProjectRequest; //

const { status, data } = await apiInstance.createProject(
    orgId,
    createProjectRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createProjectRequest** | **CreateProjectRequest**|  | |
| **orgId** | [**string**] | Organization ID | defaults to undefined|


### Return type

**CreateProject201Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Project created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteProject**
> MessageResponse deleteProject()

Delete a project permanently. This is a destructive operation. Requires JWT Bearer token authentication. Both OrgBearerAuth and ProjectBearerAuth are supported (they use the same JWT token format). These are organization-level operations. 

### Example

```typescript
import {
    ProjectsApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new ProjectsApi(configuration);

let orgId: string; //Organization ID (default to undefined)
let id: string; //Project ID (default to undefined)

const { status, data } = await apiInstance.deleteProject(
    orgId,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orgId** | [**string**] | Organization ID | defaults to undefined|
| **id** | [**string**] | Project ID | defaults to undefined|


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
|**200** | Project deleted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getOAuthProviderConfig**
> GetOAuthProviderConfig200Response getOAuthProviderConfig()

Returns the configuration for a specific OAuth provider for the project (without sensitive data)

### Example

```typescript
import {
    ProjectsApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new ProjectsApi(configuration);

let projectId: string; // (default to undefined)
let provider: 'google' | 'github' | 'facebook' | 'microsoft' | 'apple' | 'twitter' | 'discord' | 'linkedin' | 'dropbox' | 'slack' | 'reddit' | 'twitch' | 'figma' | 'zoom' | 'bitbucket' | 'salesforce' | 'shopify' | 'line' | 'spotify' | 'strava' | 'paypal' | 'asana' | 'trello' | 'okta' | 'gitea' | 'yandex' | 'yahoo' | 'vk' | 'meetup'; // (default to undefined)

const { status, data } = await apiInstance.getOAuthProviderConfig(
    projectId,
    provider
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|
| **provider** | [**&#39;google&#39; | &#39;github&#39; | &#39;facebook&#39; | &#39;microsoft&#39; | &#39;apple&#39; | &#39;twitter&#39; | &#39;discord&#39; | &#39;linkedin&#39; | &#39;dropbox&#39; | &#39;slack&#39; | &#39;reddit&#39; | &#39;twitch&#39; | &#39;figma&#39; | &#39;zoom&#39; | &#39;bitbucket&#39; | &#39;salesforce&#39; | &#39;shopify&#39; | &#39;line&#39; | &#39;spotify&#39; | &#39;strava&#39; | &#39;paypal&#39; | &#39;asana&#39; | &#39;trello&#39; | &#39;okta&#39; | &#39;gitea&#39; | &#39;yandex&#39; | &#39;yahoo&#39; | &#39;vk&#39; | &#39;meetup&#39;**]**Array<&#39;google&#39; &#124; &#39;github&#39; &#124; &#39;facebook&#39; &#124; &#39;microsoft&#39; &#124; &#39;apple&#39; &#124; &#39;twitter&#39; &#124; &#39;discord&#39; &#124; &#39;linkedin&#39; &#124; &#39;dropbox&#39; &#124; &#39;slack&#39; &#124; &#39;reddit&#39; &#124; &#39;twitch&#39; &#124; &#39;figma&#39; &#124; &#39;zoom&#39; &#124; &#39;bitbucket&#39; &#124; &#39;salesforce&#39; &#124; &#39;shopify&#39; &#124; &#39;line&#39; &#124; &#39;spotify&#39; &#124; &#39;strava&#39; &#124; &#39;paypal&#39; &#124; &#39;asana&#39; &#124; &#39;trello&#39; &#124; &#39;okta&#39; &#124; &#39;gitea&#39; &#124; &#39;yandex&#39; &#124; &#39;yahoo&#39; &#124; &#39;vk&#39; &#124; &#39;meetup&#39;>** |  | defaults to undefined|


### Return type

**GetOAuthProviderConfig200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OAuth provider configuration |  -  |
|**404** | Resource not found |  -  |
|**403** | Access denied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getProject**
> Project getProject()

Get project details by ID. Accepts: OrgBearerAuth (for admin users), ProjectBearerAuth (JWT for authenticated users), or ApiKeyAuth (X-API-Key for programmatic access). Both ProjectBearerAuth and ApiKeyAuth are fully implemented. 

### Example

```typescript
import {
    ProjectsApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new ProjectsApi(configuration);

let orgId: string; //Organization ID (default to undefined)
let id: string; //Project ID (default to undefined)

const { status, data } = await apiInstance.getProject(
    orgId,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orgId** | [**string**] | Organization ID | defaults to undefined|
| **id** | [**string**] | Project ID | defaults to undefined|


### Return type

**Project**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Project details |  -  |
|**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getProjectCaptchaConfig**
> GetProjectCaptchaConfig200Response getProjectCaptchaConfig()

Get CAPTCHA configuration for a project. This is a public endpoint that returns the site key  and settings needed for frontend integration. Secret key is never returned. 

### Example

```typescript
import {
    ProjectsApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new ProjectsApi(configuration);

let orgId: string; //Organization ID (default to undefined)
let id: string; //Project ID (default to undefined)

const { status, data } = await apiInstance.getProjectCaptchaConfig(
    orgId,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orgId** | [**string**] | Organization ID | defaults to undefined|
| **id** | [**string**] | Project ID | defaults to undefined|


### Return type

**GetProjectCaptchaConfig200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | CAPTCHA configuration |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getProjectDashboardOverview**
> ProjectDashboardOverviewResponse getProjectDashboardOverview()

Single response for the project overview UI: project info, request counts and day-over-day % change, active users (distinct JWT users with project activity; realtime socket count when available), **Uptime** (30d headline) is organization-wide when enough HTTP samples exist, else DB heartbeat probes. **Average latency** (today / 7d) is **per project** and counts only routes documented in `openapi-docs.yaml` for customer/project API (excludes auth, `/api/users`, `/api/orgs`, role-elevation, and multi-role admin routes). Request volume and active users remain per-project. 14-day API call volume and recent audit activity are per-project. See docs/dashboard-overview-api.md. 

### Example

```typescript
import {
    ProjectsApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new ProjectsApi(configuration);

let projectId: string; // (default to undefined)

const { status, data } = await apiInstance.getProjectDashboardOverview(
    projectId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|


### Return type

**ProjectDashboardOverviewResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Dashboard overview |  -  |
|**401** | Authentication required |  -  |
|**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getProjectOAuthProviders**
> GetProjectOAuthProviders200Response getProjectOAuthProviders()

Returns a list of OAuth providers that are configured and enabled for the specified project

### Example

```typescript
import {
    ProjectsApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new ProjectsApi(configuration);

let projectId: string; // (default to undefined)

const { status, data } = await apiInstance.getProjectOAuthProviders(
    projectId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|


### Return type

**GetProjectOAuthProviders200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of configured OAuth providers |  -  |
|**404** | Resource not found |  -  |
|**403** | Access denied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getProjectUsage**
> ProjectUsageResponse getProjectUsage()


### Example

```typescript
import {
    ProjectsApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new ProjectsApi(configuration);

let orgId: string; //Organization ID (default to undefined)
let id: string; //Project ID (default to undefined)

const { status, data } = await apiInstance.getProjectUsage(
    orgId,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orgId** | [**string**] | Organization ID | defaults to undefined|
| **id** | [**string**] | Project ID | defaults to undefined|


### Return type

**ProjectUsageResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Project usage statistics |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listProjects**
> ListProjects200Response listProjects()

List all projects in an organization. Requires: OrgBearerAuth (organization-level authentication only). 

### Example

```typescript
import {
    ProjectsApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new ProjectsApi(configuration);

let orgId: string; //Organization ID (default to undefined)

const { status, data } = await apiInstance.listProjects(
    orgId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orgId** | [**string**] | Organization ID | defaults to undefined|


### Return type

**ListProjects200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Projects list |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateOAuthProviderConfig**
> ConfigureOAuthProvider200Response updateOAuthProviderConfig(updateOAuthProviderConfigRequest)

Updates the configuration for an OAuth provider for the specified project

### Example

```typescript
import {
    ProjectsApi,
    Configuration,
    UpdateOAuthProviderConfigRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new ProjectsApi(configuration);

let projectId: string; // (default to undefined)
let provider: 'google' | 'github' | 'facebook' | 'microsoft' | 'apple' | 'twitter' | 'discord' | 'linkedin' | 'dropbox' | 'slack' | 'reddit' | 'twitch' | 'figma' | 'zoom' | 'bitbucket' | 'salesforce' | 'shopify' | 'line' | 'spotify' | 'strava' | 'paypal' | 'asana' | 'trello' | 'okta' | 'gitea' | 'yandex' | 'yahoo' | 'vk' | 'meetup'; // (default to undefined)
let updateOAuthProviderConfigRequest: UpdateOAuthProviderConfigRequest; //

const { status, data } = await apiInstance.updateOAuthProviderConfig(
    projectId,
    provider,
    updateOAuthProviderConfigRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateOAuthProviderConfigRequest** | **UpdateOAuthProviderConfigRequest**|  | |
| **projectId** | [**string**] |  | defaults to undefined|
| **provider** | [**&#39;google&#39; | &#39;github&#39; | &#39;facebook&#39; | &#39;microsoft&#39; | &#39;apple&#39; | &#39;twitter&#39; | &#39;discord&#39; | &#39;linkedin&#39; | &#39;dropbox&#39; | &#39;slack&#39; | &#39;reddit&#39; | &#39;twitch&#39; | &#39;figma&#39; | &#39;zoom&#39; | &#39;bitbucket&#39; | &#39;salesforce&#39; | &#39;shopify&#39; | &#39;line&#39; | &#39;spotify&#39; | &#39;strava&#39; | &#39;paypal&#39; | &#39;asana&#39; | &#39;trello&#39; | &#39;okta&#39; | &#39;gitea&#39; | &#39;yandex&#39; | &#39;yahoo&#39; | &#39;vk&#39; | &#39;meetup&#39;**]**Array<&#39;google&#39; &#124; &#39;github&#39; &#124; &#39;facebook&#39; &#124; &#39;microsoft&#39; &#124; &#39;apple&#39; &#124; &#39;twitter&#39; &#124; &#39;discord&#39; &#124; &#39;linkedin&#39; &#124; &#39;dropbox&#39; &#124; &#39;slack&#39; &#124; &#39;reddit&#39; &#124; &#39;twitch&#39; &#124; &#39;figma&#39; &#124; &#39;zoom&#39; &#124; &#39;bitbucket&#39; &#124; &#39;salesforce&#39; &#124; &#39;shopify&#39; &#124; &#39;line&#39; &#124; &#39;spotify&#39; &#124; &#39;strava&#39; &#124; &#39;paypal&#39; &#124; &#39;asana&#39; &#124; &#39;trello&#39; &#124; &#39;okta&#39; &#124; &#39;gitea&#39; &#124; &#39;yandex&#39; &#124; &#39;yahoo&#39; &#124; &#39;vk&#39; &#124; &#39;meetup&#39;>** |  | defaults to undefined|


### Return type

**ConfigureOAuthProvider200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OAuth provider configuration updated successfully |  -  |
|**400** | Bad request |  -  |
|**403** | Access denied |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateProject**
> CreateProject201Response updateProject(updateProjectRequest)

Update project configuration (name, description, settings). **Settings toggles:** **requireEmailVerification** (default true) — when on, new email signups do not get a token until they verify; login is blocked until verified. **requirePhoneVerification** (default false) — when on, phone/OTP users must verify before token. **defaultUserAccountStatus** — **active** (default) or **pending**; when pending, new users must be approved by org owner/admin before they can perform data/storage operations. Requires JWT Bearer token authentication. Both OrgBearerAuth and ProjectBearerAuth are supported (they use the same JWT token format). These are organization-level operations. 

### Example

```typescript
import {
    ProjectsApi,
    Configuration,
    UpdateProjectRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new ProjectsApi(configuration);

let orgId: string; //Organization ID (default to undefined)
let id: string; //Project ID (default to undefined)
let updateProjectRequest: UpdateProjectRequest; //

const { status, data } = await apiInstance.updateProject(
    orgId,
    id,
    updateProjectRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateProjectRequest** | **UpdateProjectRequest**|  | |
| **orgId** | [**string**] | Organization ID | defaults to undefined|
| **id** | [**string**] | Project ID | defaults to undefined|


### Return type

**CreateProject201Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Project updated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uploadProjectLogo**
> UploadProjectLogo200Response uploadProjectLogo()

Upload a logo image for a project. File is stored in the platform storage under **logo/project/{projectId}/_**. The public URL is saved to the project\'s **logoUrl** field and used in project-related emails and UI. Project is resolved from the authenticated user\'s org. Use multipart/form-data with field name **logo**. Allowed types: PNG, JPEG, GIF, WebP. Max size 2MB. 

### Example

```typescript
import {
    ProjectsApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new ProjectsApi(configuration);

let id: string; //Project ID (default to undefined)
let logo: File; //Logo image (PNG, JPEG, GIF, or WebP; max 2MB) (default to undefined)

const { status, data } = await apiInstance.uploadProjectLogo(
    id,
    logo
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Project ID | defaults to undefined|
| **logo** | [**File**] | Logo image (PNG, JPEG, GIF, or WebP; max 2MB) | defaults to undefined|


### Return type

**UploadProjectLogo200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ApiKeyAuth](../README.md#ApiKeyAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Logo uploaded and project logoUrl updated |  -  |
|**400** | No file, invalid type, or size exceeded |  -  |
|**404** | Project not found |  -  |
|**503** | Object storage not configured |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uploadProjectLogoByOrg**
> UploadProjectLogo200Response uploadProjectLogoByOrg()

Upload a logo image for a project. File is stored in the platform storage under **logo/project/{projectId}/_**. The public URL is saved to the project\'s **logoUrl** field. Use multipart/form-data with field name **logo**. Allowed types: PNG, JPEG, GIF, WebP. Max size 2MB. Requires project update permission and membership in the organization. 

### Example

```typescript
import {
    ProjectsApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new ProjectsApi(configuration);

let orgId: string; //Organization ID (default to undefined)
let id: string; //Project ID (default to undefined)
let logo: File; //Logo image (PNG, JPEG, GIF, or WebP; max 2MB) (default to undefined)

const { status, data } = await apiInstance.uploadProjectLogoByOrg(
    orgId,
    id,
    logo
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orgId** | [**string**] | Organization ID | defaults to undefined|
| **id** | [**string**] | Project ID | defaults to undefined|
| **logo** | [**File**] | Logo image (PNG, JPEG, GIF, or WebP; max 2MB) | defaults to undefined|


### Return type

**UploadProjectLogo200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Logo uploaded and project logoUrl updated |  -  |
|**400** | No file, invalid type, or size exceeded |  -  |
|**404** | Project or organization not found |  -  |
|**503** | Object storage not configured |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

