# UsersApi

All URIs are relative to *https://cloud.mudbase.dev*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiMeBootstrapGet**](#apimebootstrapget) | **GET** /api/me/bootstrap | Dashboard bootstrap (session + orgs + default org + projects)|
|[**changePassword**](#changepassword) | **PATCH** /api/users/password | Change password|
|[**disable2FA**](#disable2fa) | **POST** /api/users/2fa/disable | Disable 2FA|
|[**eraseUserData**](#eraseuserdata) | **POST** /api/users/me/erase | Delete user data (GDPR Article 17)|
|[**exportUserData**](#exportuserdata) | **GET** /api/users/me/export | Export user data (GDPR Article 15)|
|[**getCurrentUser**](#getcurrentuser) | **GET** /api/users/me | Get current user profile|
|[**linkOAuthProvider**](#linkoauthprovider) | **GET** /api/users/me/oauth-providers/link/{provider} | Link OAuth provider to account|
|[**listOAuthProviders**](#listoauthproviders) | **GET** /api/users/me/oauth-providers | List linked OAuth providers|
|[**resendVerificationEmail**](#resendverificationemail) | **POST** /api/users/resend-verification | Resend verification email|
|[**setup2FA**](#setup2fa) | **POST** /api/users/2fa/setup | Setup 2FA|
|[**unlinkOAuthProvider**](#unlinkoauthprovider) | **DELETE** /api/users/me/oauth-providers/{provider} | Unlink OAuth provider|
|[**updateUserProfile**](#updateuserprofile) | **PATCH** /api/users/update | Update user profile|
|[**verify2FA**](#verify2fa) | **POST** /api/users/2fa/verify | Verify and enable 2FA|
|[**verifyEmail**](#verifyemail) | **POST** /api/users/verify-email | Verify email address (organization and project)|

# **apiMeBootstrapGet**
> ApiMeBootstrapGet200Response apiMeBootstrapGet()

Consolidated dashboard warmup in a single round-trip. Returns the session user, the user\'s organizations, the resolved default organization, and that org\'s projects. Shapes match GET /api/auth/session, GET /api/orgs and GET /api/projects.

### Example

```typescript
import {
    UsersApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

const { status, data } = await apiInstance.apiMeBootstrapGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiMeBootstrapGet200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Bootstrap payload |  -  |
|**401** | Authentication required |  -  |
|**500** | Failed to load bootstrap data |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **changePassword**
> MessageResponse changePassword(changePasswordRequest)

Change the current user\'s password. Accepts JWT Bearer token (OrgBearerAuth or ProjectBearerAuth - both are the same JWT token format). API keys are not supported for this endpoint. 

### Example

```typescript
import {
    UsersApi,
    Configuration,
    ChangePasswordRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let changePasswordRequest: ChangePasswordRequest; //

const { status, data } = await apiInstance.changePassword(
    changePasswordRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **changePasswordRequest** | **ChangePasswordRequest**|  | |


### Return type

**MessageResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Password changed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **disable2FA**
> MessageResponse disable2FA(disable2FARequest)

Disable two-factor authentication for the current user. Requires JWT Bearer token authentication. Both OrgBearerAuth and ProjectBearerAuth are supported (they use the same JWT token format). API keys are not supported for this endpoint. 

### Example

```typescript
import {
    UsersApi,
    Configuration,
    Disable2FARequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let disable2FARequest: Disable2FARequest; //

const { status, data } = await apiInstance.disable2FA(
    disable2FARequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **disable2FARequest** | **Disable2FARequest**|  | |


### Return type

**MessageResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 2FA disabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **eraseUserData**
> EraseUserData200Response eraseUserData(eraseUserDataRequest)

Request account erasure (right to be forgotten). Anonymizes PII, revokes all sessions and API keys, and disables the account immediately (not a grace period - the effect is immediate and irreversible). Accepts JWT Bearer token (OrgBearerAuth or ProjectBearerAuth - both are the same JWT token format). API keys are not supported for this endpoint.  Requires re-proving your current password (skipped only for OAuth-only accounts with no password set) and, if 2FA is enabled, a fresh TOTP code - the same step-up re-authentication already required by the less-destructive `PATCH /api/users/password` and `POST /api/users/2fa/disable`. 

### Example

```typescript
import {
    UsersApi,
    Configuration,
    EraseUserDataRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let eraseUserDataRequest: EraseUserDataRequest; //

const { status, data } = await apiInstance.eraseUserData(
    eraseUserDataRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **eraseUserDataRequest** | **EraseUserDataRequest**|  | |


### Return type

**EraseUserData200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Account erased |  -  |
|**400** | Missing/invalid confirm, currentPassword, or totpToken |  -  |
|**409** | Sole owner of one or more organizations - transfer or delete them first |  -  |
|**401** | Authentication required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **exportUserData**
> ExportUserData200Response exportUserData()

Export all user data in JSON format for GDPR data portability compliance. Accepts JWT Bearer token (OrgBearerAuth or ProjectBearerAuth - both are the same JWT token format). API keys are not supported for this endpoint. 

### Example

```typescript
import {
    UsersApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

const { status, data } = await apiInstance.exportUserData();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ExportUserData200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | User data export |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCurrentUser**
> GetCurrentUser200Response getCurrentUser()

Get the current authenticated user\'s profile. Accepts JWT Bearer token (OrgBearerAuth or ProjectBearerAuth - both are the same JWT token format). 

### Example

```typescript
import {
    UsersApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

const { status, data } = await apiInstance.getCurrentUser();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetCurrentUser200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | User profile |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **linkOAuthProvider**
> linkOAuthProvider()

Initiate OAuth flow to link a new provider to the current account. Accepts JWT Bearer token (OrgBearerAuth or ProjectBearerAuth - both are the same JWT token format). API keys are not supported for this endpoint. 

### Example

```typescript
import {
    UsersApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let provider: 'google' | 'github' | 'facebook' | 'microsoft' | 'apple' | 'twitter' | 'discord' | 'linkedin'; // (default to undefined)
let projectId: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.linkOAuthProvider(
    provider,
    projectId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **provider** | [**&#39;google&#39; | &#39;github&#39; | &#39;facebook&#39; | &#39;microsoft&#39; | &#39;apple&#39; | &#39;twitter&#39; | &#39;discord&#39; | &#39;linkedin&#39;**]**Array<&#39;google&#39; &#124; &#39;github&#39; &#124; &#39;facebook&#39; &#124; &#39;microsoft&#39; &#124; &#39;apple&#39; &#124; &#39;twitter&#39; &#124; &#39;discord&#39; &#124; &#39;linkedin&#39;>** |  | defaults to undefined|
| **projectId** | [**string**] |  | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**302** | Redirect to OAuth provider |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listOAuthProviders**
> ListOAuthProviders200Response listOAuthProviders()

Get all OAuth providers linked to the current user\'s account. Accepts JWT Bearer token (OrgBearerAuth or ProjectBearerAuth - both are the same JWT token format). API keys are not supported for this endpoint. 

### Example

```typescript
import {
    UsersApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

const { status, data } = await apiInstance.listOAuthProviders();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ListOAuthProviders200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of linked OAuth providers |  -  |
|**401** | Authentication required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resendVerificationEmail**
> MessageResponse resendVerificationEmail()

Sends a new verification email to the authenticated user. Rate limited (e.g. 3 requests per 15 minutes per user). For project-scoped users the link includes project context. 

### Example

```typescript
import {
    UsersApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

const { status, data } = await apiInstance.resendVerificationEmail();
```

### Parameters
This endpoint does not have any parameters.


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
|**200** | Verification email sent |  -  |
|**400** | Email already verified |  -  |
|**429** | Too many requests (rate limit) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setup2FA**
> TwoFASetupResponse setup2FA()

Setup two-factor authentication for the current user. Requires JWT Bearer token authentication. Both OrgBearerAuth and ProjectBearerAuth are supported (they use the same JWT token format). API keys are not supported for this endpoint. 

### Example

```typescript
import {
    UsersApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

const { status, data } = await apiInstance.setup2FA();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**TwoFASetupResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 2FA setup data |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unlinkOAuthProvider**
> UnlinkOAuthProvider200Response unlinkOAuthProvider()

Remove an OAuth provider from the current account. Cannot unlink if it\'s the only authentication method. Requires JWT Bearer token authentication. Both OrgBearerAuth and ProjectBearerAuth are supported (they use the same JWT token format). API keys are not supported for this endpoint. 

### Example

```typescript
import {
    UsersApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let provider: 'google' | 'github' | 'facebook' | 'microsoft' | 'apple' | 'twitter' | 'discord' | 'linkedin'; // (default to undefined)

const { status, data } = await apiInstance.unlinkOAuthProvider(
    provider
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **provider** | [**&#39;google&#39; | &#39;github&#39; | &#39;facebook&#39; | &#39;microsoft&#39; | &#39;apple&#39; | &#39;twitter&#39; | &#39;discord&#39; | &#39;linkedin&#39;**]**Array<&#39;google&#39; &#124; &#39;github&#39; &#124; &#39;facebook&#39; &#124; &#39;microsoft&#39; &#124; &#39;apple&#39; &#124; &#39;twitter&#39; &#124; &#39;discord&#39; &#124; &#39;linkedin&#39;>** |  | defaults to undefined|


### Return type

**UnlinkOAuthProvider200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Provider unlinked successfully |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateUserProfile**
> UpdateUserProfile200Response updateUserProfile(updateUserRequest)

Update the current user\'s profile. Requires JWT Bearer token authentication. Both OrgBearerAuth and ProjectBearerAuth are supported (they use the same JWT token format). API keys are not supported for this endpoint. 

### Example

```typescript
import {
    UsersApi,
    Configuration,
    UpdateUserRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let updateUserRequest: UpdateUserRequest; //

const { status, data } = await apiInstance.updateUserProfile(
    updateUserRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateUserRequest** | **UpdateUserRequest**|  | |


### Return type

**UpdateUserProfile200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Profile updated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **verify2FA**
> MessageResponse verify2FA(verify2FARequest)

Verify and enable two-factor authentication for the current user. Accepts JWT Bearer token (OrgBearerAuth or ProjectBearerAuth - both are the same JWT token format). API keys are not supported for this endpoint. 

### Example

```typescript
import {
    UsersApi,
    Configuration,
    Verify2FARequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let verify2FARequest: Verify2FARequest; //

const { status, data } = await apiInstance.verify2FA(
    verify2FARequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **verify2FARequest** | **Verify2FARequest**|  | |


### Return type

**MessageResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 2FA enabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **verifyEmail**
> MessageResponse verifyEmail(verifyEmailAuthRequest)

Verifies the user\'s email using the token from the link sent at signup. Works for both organization (platform) and project-based signups; the token is from the verification link (e.g. verify-email?token=... for org, or verify-email?token=...&project=... for project). 

### Example

```typescript
import {
    UsersApi,
    Configuration,
    VerifyEmailAuthRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let verifyEmailAuthRequest: VerifyEmailAuthRequest; //

const { status, data } = await apiInstance.verifyEmail(
    verifyEmailAuthRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **verifyEmailAuthRequest** | **VerifyEmailAuthRequest**|  | |


### Return type

**MessageResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Email verified |  -  |
|**400** | Invalid verification token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

