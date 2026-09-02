# MultiRoleFeatureApi

All URIs are relative to *https://cloud.mudbase.dev*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addCustomRole**](#addcustomrole) | **POST** /api/projects/{projectId}/multi-role/roles | Add custom role|
|[**applyRoleFeaturePreset**](#applyrolefeaturepreset) | **POST** /api/projects/{projectId}/multi-role/roles/{roleSlug}/apply-preset | Apply Admin / User / Viewer feature permission preset|
|[**getAvailableRoles**](#getavailableroles) | **GET** /api/projects/{projectId}/multi-role/roles/available | Get available roles for signup|
|[**getMultiRoleConfig**](#getmultiroleconfig) | **GET** /api/projects/{projectId}/multi-role | Get multi-role feature configuration|
|[**getPermissionsMatrix**](#getpermissionsmatrix) | **GET** /api/projects/{projectId}/permissions-matrix | Get permissions matrix (collections + featurePermissions)|
|[**oauthSignupWithRole**](#oauthsignupwithrole) | **GET** /api/auth/oauth/signup/{role}/{provider}/{projectId} | OAuth signup with specific role|
|[**registerWithRole**](#registerwithrole) | **POST** /api/auth/local/signup/{role} | Register user with specific role (Local Auth)|
|[**simulateAppPermissions**](#simulateapppermissions) | **POST** /api/projects/{projectId}/multi-role/simulate-permissions | Simulate app-role feature permission for a path|
|[**toggleRole**](#togglerole) | **PATCH** /api/projects/{projectId}/multi-role/roles/{roleSlug}/toggle | Toggle role on/off|
|[**updateCollectionPermissions**](#updatecollectionpermissions) | **PATCH** /api/projects/{projectId}/multi-role/roles/{roleSlug}/collections/{collectionId}/permissions | Update collection permissions for a role|
|[**updateMultiRoleSettings**](#updatemultirolesettings) | **PATCH** /api/projects/{projectId}/multi-role/settings | Update multi-role feature settings|
|[**updateProjectRole**](#updateprojectrole) | **PATCH** /api/projects/{projectId}/multi-role/roles/{roleSlug} | Update role configuration|

# **addCustomRole**
> ApplyRoleFeaturePreset200Response addCustomRole(addCustomRoleRequest)

Add a custom role to a project with specific permissions and signup endpoint. Optional **`featurePermissions`** must align with app JWT gates — see `components/schemas/AppRoleFeaturePermissions` and `services/appRoleFeatureMap.js`. Accepts: OrgBearerAuth (for admin users), ProjectBearerAuth (JWT for authenticated users), or ApiKeyAuth (X-API-Key for programmatic access). Both ProjectBearerAuth and ApiKeyAuth are fully implemented. 

### Example

```typescript
import {
    MultiRoleFeatureApi,
    Configuration,
    AddCustomRoleRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new MultiRoleFeatureApi(configuration);

let projectId: string; // (default to undefined)
let addCustomRoleRequest: AddCustomRoleRequest; //

const { status, data } = await apiInstance.addCustomRole(
    projectId,
    addCustomRoleRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addCustomRoleRequest** | **AddCustomRoleRequest**|  | |
| **projectId** | [**string**] |  | defaults to undefined|


### Return type

**ApplyRoleFeaturePreset200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Custom role added |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **applyRoleFeaturePreset**
> ApplyRoleFeaturePreset200Response applyRoleFeaturePreset(applyRoleFeaturePresetRequest)

Sets `featurePermissions` on the role from a bundled preset (`admin`, `user`, `viewer`). Does not change collection CRUD or `dataScope`; use collection permission APIs for those. 

### Example

```typescript
import {
    MultiRoleFeatureApi,
    Configuration,
    ApplyRoleFeaturePresetRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new MultiRoleFeatureApi(configuration);

let projectId: string; // (default to undefined)
let roleSlug: string; // (default to undefined)
let applyRoleFeaturePresetRequest: ApplyRoleFeaturePresetRequest; //

const { status, data } = await apiInstance.applyRoleFeaturePreset(
    projectId,
    roleSlug,
    applyRoleFeaturePresetRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **applyRoleFeaturePresetRequest** | **ApplyRoleFeaturePresetRequest**|  | |
| **projectId** | [**string**] |  | defaults to undefined|
| **roleSlug** | [**string**] |  | defaults to undefined|


### Return type

**ApplyRoleFeaturePreset200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Preset applied |  -  |
|**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAvailableRoles**
> GetAvailableRoles200Response getAvailableRoles()

Get all available roles for user signup in a project. Accepts: OrgBearerAuth (for admin users), ProjectBearerAuth (JWT for authenticated users), or ApiKeyAuth (X-API-Key for programmatic access). Both ProjectBearerAuth and ApiKeyAuth are fully implemented. 

### Example

```typescript
import {
    MultiRoleFeatureApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new MultiRoleFeatureApi(configuration);

let projectId: string; // (default to undefined)

const { status, data } = await apiInstance.getAvailableRoles(
    projectId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|


### Return type

**GetAvailableRoles200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of available roles |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMultiRoleConfig**
> GetMultiRoleConfig200Response getMultiRoleConfig()

Returns project app roles (default one editable `customer` starter until you add more) and settings

### Example

```typescript
import {
    MultiRoleFeatureApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new MultiRoleFeatureApi(configuration);

let projectId: string; // (default to undefined)

const { status, data } = await apiInstance.getMultiRoleConfig(
    projectId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|


### Return type

**GetMultiRoleConfig200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Multi-role configuration |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPermissionsMatrix**
> GetPermissionsMatrix200Response getPermissionsMatrix()

Dashboard helper: per-collection permission rows (role actions, `dataScope`, conditions) and a per-role `featurePermissions` snapshot used by app-role feature gates (messaging, integrations, storage, etc.). 

### Example

```typescript
import {
    MultiRoleFeatureApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new MultiRoleFeatureApi(configuration);

let projectId: string; // (default to undefined)

const { status, data } = await apiInstance.getPermissionsMatrix(
    projectId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|


### Return type

**GetPermissionsMatrix200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Matrix payload |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **oauthSignupWithRole**
> oauthSignupWithRole()

Public endpoint that initiates OAuth signup flow with a specific role assigned during registration. The OAuth provider must be configured and enabled for the project first. The role must be available for signup in the project\'s multi-role configuration. After successful OAuth authentication, the user will be created with the specified role. No authentication required - this is a public signup endpoint. 

### Example

```typescript
import {
    MultiRoleFeatureApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new MultiRoleFeatureApi(configuration);

let role: string; //Path segment must match the role\'s `signupEndpoint` (default `customer`; use each role\'s configured endpoint). (default to undefined)
let provider: 'google' | 'github' | 'facebook' | 'microsoft' | 'apple' | 'twitter' | 'discord' | 'linkedin' | 'dropbox' | 'slack' | 'reddit' | 'twitch' | 'figma' | 'zoom' | 'bitbucket' | 'salesforce' | 'shopify' | 'line' | 'spotify' | 'strava' | 'paypal' | 'asana' | 'trello' | 'okta' | 'gitea' | 'yandex' | 'yahoo' | 'vk' | 'meetup'; // (default to undefined)
let projectId: string; // (default to undefined)
let redirectUrl: string; //The URL to redirect to after authentication (optional) (default to undefined)

const { status, data } = await apiInstance.oauthSignupWithRole(
    role,
    provider,
    projectId,
    redirectUrl
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **role** | [**string**] | Path segment must match the role\&#39;s &#x60;signupEndpoint&#x60; (default &#x60;customer&#x60;; use each role\&#39;s configured endpoint). | defaults to undefined|
| **provider** | [**&#39;google&#39; | &#39;github&#39; | &#39;facebook&#39; | &#39;microsoft&#39; | &#39;apple&#39; | &#39;twitter&#39; | &#39;discord&#39; | &#39;linkedin&#39; | &#39;dropbox&#39; | &#39;slack&#39; | &#39;reddit&#39; | &#39;twitch&#39; | &#39;figma&#39; | &#39;zoom&#39; | &#39;bitbucket&#39; | &#39;salesforce&#39; | &#39;shopify&#39; | &#39;line&#39; | &#39;spotify&#39; | &#39;strava&#39; | &#39;paypal&#39; | &#39;asana&#39; | &#39;trello&#39; | &#39;okta&#39; | &#39;gitea&#39; | &#39;yandex&#39; | &#39;yahoo&#39; | &#39;vk&#39; | &#39;meetup&#39;**]**Array<&#39;google&#39; &#124; &#39;github&#39; &#124; &#39;facebook&#39; &#124; &#39;microsoft&#39; &#124; &#39;apple&#39; &#124; &#39;twitter&#39; &#124; &#39;discord&#39; &#124; &#39;linkedin&#39; &#124; &#39;dropbox&#39; &#124; &#39;slack&#39; &#124; &#39;reddit&#39; &#124; &#39;twitch&#39; &#124; &#39;figma&#39; &#124; &#39;zoom&#39; &#124; &#39;bitbucket&#39; &#124; &#39;salesforce&#39; &#124; &#39;shopify&#39; &#124; &#39;line&#39; &#124; &#39;spotify&#39; &#124; &#39;strava&#39; &#124; &#39;paypal&#39; &#124; &#39;asana&#39; &#124; &#39;trello&#39; &#124; &#39;okta&#39; &#124; &#39;gitea&#39; &#124; &#39;yandex&#39; &#124; &#39;yahoo&#39; &#124; &#39;vk&#39; &#124; &#39;meetup&#39;>** |  | defaults to undefined|
| **projectId** | [**string**] |  | defaults to undefined|
| **redirectUrl** | [**string**] | The URL to redirect to after authentication | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**302** | Redirects to OAuth provider\&#39;s consent screen |  * Location - OAuth provider authorization URL <br>  |
|**400** | OAuth provider not configured, role not found, or validation error |  -  |
|**404** | Project not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registerWithRole**
> RegisterWithRole201Response registerWithRole(registerWithRoleRequest)

Public endpoint for user registration with a specific role. The path segment must match a role\'s `signupEndpoint` (default starter is `customer`; add more roles via multi-role API). No authentication required - this is a public signup endpoint. 

### Example

```typescript
import {
    MultiRoleFeatureApi,
    Configuration,
    RegisterWithRoleRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new MultiRoleFeatureApi(configuration);

let role: string; //Must match the role\'s `signupEndpoint` (default `customer`; other values for roles you add). (default to undefined)
let registerWithRoleRequest: RegisterWithRoleRequest; //

const { status, data } = await apiInstance.registerWithRole(
    role,
    registerWithRoleRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **registerWithRoleRequest** | **RegisterWithRoleRequest**|  | |
| **role** | [**string**] | Must match the role\&#39;s &#x60;signupEndpoint&#x60; (default &#x60;customer&#x60;; other values for roles you add). | defaults to undefined|


### Return type

**RegisterWithRole201Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Registration successful. Two response shapes depending on the project\&#39;s &#x60;requireEmailVerification&#x60; setting - see &#x60;requireVerification&#x60; to distinguish them; &#x60;token&#x60;/&#x60;refreshToken&#x60;/&#x60;expiresIn&#x60; are only present when a session was issued immediately. |  -  |
|**400** | Validation failed, or a user with this email already exists for the project |  -  |
|**403** | Role requires approval, payment, or KYC before it can be self-assigned |  -  |
|**404** | Role not found or not enabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **simulateAppPermissions**
> SimulateAppPermissions200Response simulateAppPermissions(simulateAppPermissionsRequest)

Dashboard-only. Given an app role slug and either an OpenAPI `operationId` **or** HTTP method + pathname, returns whether the role\'s `featurePermissions` would allow the operation for paths that have a feature gate. Unmapped paths or unknown operation IDs return `allowed: true` with reason `no_feature_gate_for_path` or `no_feature_gate_for_operation_id`. 

### Example

```typescript
import {
    MultiRoleFeatureApi,
    Configuration,
    SimulateAppPermissionsRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new MultiRoleFeatureApi(configuration);

let projectId: string; // (default to undefined)
let simulateAppPermissionsRequest: SimulateAppPermissionsRequest; //

const { status, data } = await apiInstance.simulateAppPermissions(
    projectId,
    simulateAppPermissionsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **simulateAppPermissionsRequest** | **SimulateAppPermissionsRequest**|  | |
| **projectId** | [**string**] |  | defaults to undefined|


### Return type

**SimulateAppPermissions200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Simulation result |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **toggleRole**
> ApplyRoleFeaturePreset200Response toggleRole(toggleRoleRequest)


### Example

```typescript
import {
    MultiRoleFeatureApi,
    Configuration,
    ToggleRoleRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new MultiRoleFeatureApi(configuration);

let projectId: string; // (default to undefined)
let roleSlug: string; //Role slug to toggle (e.g. starter `customer` or a role you added). (default to undefined)
let toggleRoleRequest: ToggleRoleRequest; //

const { status, data } = await apiInstance.toggleRole(
    projectId,
    roleSlug,
    toggleRoleRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **toggleRoleRequest** | **ToggleRoleRequest**|  | |
| **projectId** | [**string**] |  | defaults to undefined|
| **roleSlug** | [**string**] | Role slug to toggle (e.g. starter &#x60;customer&#x60; or a role you added). | defaults to undefined|


### Return type

**ApplyRoleFeaturePreset200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Role toggled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateCollectionPermissions**
> ApplyRoleFeaturePreset200Response updateCollectionPermissions(updateCollectionPermissionsRequest)

Update collection-specific permissions for a role in a project. Accepts: OrgBearerAuth (for admin users), ProjectBearerAuth (JWT for authenticated users), or ApiKeyAuth (X-API-Key for programmatic access). Both ProjectBearerAuth and ApiKeyAuth are fully implemented. 

### Example

```typescript
import {
    MultiRoleFeatureApi,
    Configuration,
    UpdateCollectionPermissionsRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new MultiRoleFeatureApi(configuration);

let projectId: string; // (default to undefined)
let roleSlug: string; //Role slug (e.g. starter `customer` or a role you added). (default to undefined)
let collectionId: string; // (default to undefined)
let updateCollectionPermissionsRequest: UpdateCollectionPermissionsRequest; //

const { status, data } = await apiInstance.updateCollectionPermissions(
    projectId,
    roleSlug,
    collectionId,
    updateCollectionPermissionsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateCollectionPermissionsRequest** | **UpdateCollectionPermissionsRequest**|  | |
| **projectId** | [**string**] |  | defaults to undefined|
| **roleSlug** | [**string**] | Role slug (e.g. starter &#x60;customer&#x60; or a role you added). | defaults to undefined|
| **collectionId** | [**string**] |  | defaults to undefined|


### Return type

**ApplyRoleFeaturePreset200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Collection permissions updated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateMultiRoleSettings**
> UpdateMultiRoleSettings200Response updateMultiRoleSettings(updateMultiRoleSettingsRequest)

Update multi-role feature settings for a project: enable/disable the feature, set which app role is the default at signup, and tune `settings` (`allowMultipleRoles`, `requireRoleSelection`, `autoAssignDefault`). This endpoint does **not** edit role definitions or permissions — use `POST/PATCH .../multi-role/roles` for that (same shape as **Add custom role**). Accepts: OrgBearerAuth (for admin users), ProjectBearerAuth (JWT for authenticated users), or ApiKeyAuth (X-API-Key for programmatic access). Both ProjectBearerAuth and ApiKeyAuth are fully implemented. 

### Example

```typescript
import {
    MultiRoleFeatureApi,
    Configuration,
    UpdateMultiRoleSettingsRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new MultiRoleFeatureApi(configuration);

let projectId: string; // (default to undefined)
let updateMultiRoleSettingsRequest: UpdateMultiRoleSettingsRequest; //

const { status, data } = await apiInstance.updateMultiRoleSettings(
    projectId,
    updateMultiRoleSettingsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateMultiRoleSettingsRequest** | **UpdateMultiRoleSettingsRequest**|  | |
| **projectId** | [**string**] |  | defaults to undefined|


### Return type

**UpdateMultiRoleSettings200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Settings updated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateProjectRole**
> ApplyRoleFeaturePreset200Response updateProjectRole(updateProjectRoleRequest)

Partial update of an app role. **`featurePermissions`** keys must match the app-role gate map (`services/appRoleFeatureMap.js`); schema: `components/schemas/AppRoleFeaturePermissions`. 

### Example

```typescript
import {
    MultiRoleFeatureApi,
    Configuration,
    UpdateProjectRoleRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new MultiRoleFeatureApi(configuration);

let projectId: string; // (default to undefined)
let roleSlug: string; //Role slug to update (e.g. starter `customer` or a role you added). (default to undefined)
let updateProjectRoleRequest: UpdateProjectRoleRequest; //Same fields as **Add custom role** — send only fields you want to change. `defaultPermissions` / `collectionPermissions` are normalized the same way as on create. **`featurePermissions`:** `components/schemas/AppRoleFeaturePermissions` (aligned with `services/appRoleFeatureMap.js`). 

const { status, data } = await apiInstance.updateProjectRole(
    projectId,
    roleSlug,
    updateProjectRoleRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateProjectRoleRequest** | **UpdateProjectRoleRequest**| Same fields as **Add custom role** — send only fields you want to change. &#x60;defaultPermissions&#x60; / &#x60;collectionPermissions&#x60; are normalized the same way as on create. **&#x60;featurePermissions&#x60;:** &#x60;components/schemas/AppRoleFeaturePermissions&#x60; (aligned with &#x60;services/appRoleFeatureMap.js&#x60;).  | |
| **projectId** | [**string**] |  | defaults to undefined|
| **roleSlug** | [**string**] | Role slug to update (e.g. starter &#x60;customer&#x60; or a role you added). | defaults to undefined|


### Return type

**ApplyRoleFeaturePreset200Response**

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

