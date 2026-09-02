# AuthenticationApi

All URIs are relative to *https://cloud.mudbase.dev*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**acceptInvite**](#acceptinvite) | **POST** /api/auth/accept-invite | Accept organization invitation|
|[**confirmLocalPasswordResetWithOtp**](#confirmlocalpasswordresetwithotp) | **POST** /api/auth/local/password-reset/confirm | Confirm password reset with OTP (project-based)|
|[**convertAnonymousAccount**](#convertanonymousaccount) | **POST** /api/auth/anonymous/convert | Convert anonymous account to full account|
|[**createAnonymousSession**](#createanonymoussession) | **POST** /api/auth/anonymous | Create anonymous session|
|[**getAvailableOAuthProviders**](#getavailableoauthproviders) | **GET** /api/auth/oauth/providers/available | Get all available OAuth providers|
|[**getCurrentSession**](#getcurrentsession) | **GET** /api/auth/session | Get current session|
|[**getLocalSession**](#getlocalsession) | **GET** /api/auth/local/session | Get current session (project-based)|
|[**getOrgOAuthProviders**](#getorgoauthproviders) | **GET** /api/auth/oauth-org/providers | Get available OAuth providers for organization-based auth|
|[**initiateOAuth**](#initiateoauth) | **GET** /api/auth/oauth/{provider}/{projectId} | Initiate OAuth authentication|
|[**initiateOrgOAuth**](#initiateorgoauth) | **GET** /api/auth/oauth-org/{provider} | Initiate OAuth authentication for organization|
|[**loginLocalUser**](#loginlocaluser) | **POST** /api/auth/local/login | Login user (project-based)|
|[**loginUser**](#loginuser) | **POST** /api/auth/login | Login user|
|[**logoutLocalUser**](#logoutlocaluser) | **POST** /api/auth/local/logout | Logout user (project-based)|
|[**logoutUser**](#logoutuser) | **POST** /api/auth/logout | Logout user|
|[**oauthCallback**](#oauthcallback) | **GET** /api/auth/oauth/callback/{provider} | OAuth callback handler (project-based)|
|[**orgOAuthCallback**](#orgoauthcallback) | **GET** /api/auth/oauth-org/callback/{provider} | OAuth callback handler for organization|
|[**refreshToken**](#refreshtoken) | **POST** /api/auth/refresh | Refresh access token (org and project)|
|[**registerLocalUser**](#registerlocaluser) | **POST** /api/auth/local/register | Register new user (project-based)|
|[**registerUser**](#registeruser) | **POST** /api/auth/register | Register new user|
|[**requestLocalPasswordReset**](#requestlocalpasswordreset) | **POST** /api/auth/local/password-reset | Request password reset (project-based, OTP)|
|[**requestPasswordReset**](#requestpasswordreset) | **POST** /api/auth/password-reset | Request password reset (organization / platform)|
|[**resendVerificationAuth**](#resendverificationauth) | **POST** /api/auth/resend-verification | Resend verification email (no auth)|
|[**resetLocalPassword**](#resetlocalpassword) | **POST** /api/auth/local/password-reset/{token} | Reset password with token (project-based, legacy)|
|[**resetPassword**](#resetpassword) | **POST** /api/auth/password-reset/{token} | Reset password with token (organization / platform)|
|[**sendMagicLink**](#sendmagiclink) | **POST** /api/auth/magic-link/send | Send magic link|
|[**sendOTP**](#sendotp) | **POST** /api/auth/otp/send | Send OTP code|
|[**validatePasswordResetToken**](#validatepasswordresettoken) | **POST** /api/auth/password-reset/validate | Validate password reset token|
|[**verifyEmailAuth**](#verifyemailauth) | **POST** /api/auth/verify-email | Verify email address (no auth)|
|[**verifyMagicLink**](#verifymagiclink) | **POST** /api/auth/magic-link/verify | Verify magic link|
|[**verifyOTP**](#verifyotp) | **POST** /api/auth/otp/verify | Verify OTP code|

# **acceptInvite**
> AcceptInvite201Response acceptInvite(acceptInviteRequest)

Accept an organization invitation using the token from the invite email link (e.g. `/invite/{token}?orgId=...`). Creates a new user with the invited email and adds them to the organization with the invited role. Returns a JWT and user so the client can log the user in immediately. No authentication required. 

### Example

```typescript
import {
    AuthenticationApi,
    Configuration,
    AcceptInviteRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let acceptInviteRequest: AcceptInviteRequest; //

const { status, data } = await apiInstance.acceptInvite(
    acceptInviteRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **acceptInviteRequest** | **AcceptInviteRequest**|  | |


### Return type

**AcceptInvite201Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Invitation accepted; user created and added to organization |  -  |
|**400** | Invalid or expired token, or user already exists with this email |  -  |
|**404** | Organization not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **confirmLocalPasswordResetWithOtp**
> MessageResponse confirmLocalPasswordResetWithOtp(confirmLocalPasswordResetWithOtpRequest)

Set new password using the OTP sent to the user\'s email. Call after POST /api/auth/local/password-reset with projectId. Rate limited (OTP limit). If the user\'s email was not yet verified, it is marked as verified upon successful reset. 

### Example

```typescript
import {
    AuthenticationApi,
    Configuration,
    ConfirmLocalPasswordResetWithOtpRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let confirmLocalPasswordResetWithOtpRequest: ConfirmLocalPasswordResetWithOtpRequest; //

const { status, data } = await apiInstance.confirmLocalPasswordResetWithOtp(
    confirmLocalPasswordResetWithOtpRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **confirmLocalPasswordResetWithOtpRequest** | **ConfirmLocalPasswordResetWithOtpRequest**|  | |


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
|**200** | Password reset successful |  -  |
|**400** | Invalid or expired OTP, or validation error |  -  |
|**404** | Resource not found |  -  |
|**429** | Too many attempts (rate limit) |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **convertAnonymousAccount**
> ConvertAnonymousAccount200Response convertAnonymousAccount(convertAnonymousAccountRequest)

Convert an anonymous user session to a full authenticated account. Preserves user data. Requires JWT Bearer token authentication. Both OrgBearerAuth and ProjectBearerAuth are supported (they use the same JWT token format). API keys are not supported for this endpoint. 

### Example

```typescript
import {
    AuthenticationApi,
    Configuration,
    ConvertAnonymousAccountRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let convertAnonymousAccountRequest: ConvertAnonymousAccountRequest; //

const { status, data } = await apiInstance.convertAnonymousAccount(
    convertAnonymousAccountRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **convertAnonymousAccountRequest** | **ConvertAnonymousAccountRequest**|  | |


### Return type

**ConvertAnonymousAccount200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Account converted successfully |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createAnonymousSession**
> CreateAnonymousSession200Response createAnonymousSession()

Create an anonymous user session for guest access. Users can later convert to full accounts.

### Example

```typescript
import {
    AuthenticationApi,
    Configuration,
    CreateAnonymousSessionRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let createAnonymousSessionRequest: CreateAnonymousSessionRequest; // (optional)

const { status, data } = await apiInstance.createAnonymousSession(
    createAnonymousSessionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createAnonymousSessionRequest** | **CreateAnonymousSessionRequest**|  | |


### Return type

**CreateAnonymousSession200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Anonymous session created |  -  |
|**400** | Bad request |  -  |
|**404** | Resource not found |  -  |
|**403** | Access denied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAvailableOAuthProviders**
> GetAvailableOAuthProviders200Response getAvailableOAuthProviders()

Returns a list of all supported OAuth providers with their configuration details

### Example

```typescript
import {
    AuthenticationApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

const { status, data } = await apiInstance.getAvailableOAuthProviders();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetAvailableOAuthProviders200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of available OAuth providers |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCurrentSession**
> SessionResponse getCurrentSession()

Get the current authenticated user session information. Requires JWT Bearer token authentication. Both OrgBearerAuth and ProjectBearerAuth are supported (they use the same JWT token format). API keys are not supported for this endpoint. 

### Example

```typescript
import {
    AuthenticationApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

const { status, data } = await apiInstance.getCurrentSession();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**SessionResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Current session |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getLocalSession**
> GetLocalSession200Response getLocalSession()

Get the current authenticated user session (project-based). Requires JWT Bearer token authentication. Both OrgBearerAuth and ProjectBearerAuth are supported (they use the same JWT token format). API keys are not supported for this endpoint. 

### Example

```typescript
import {
    AuthenticationApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let projectId: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getLocalSession(
    projectId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | (optional) defaults to undefined|


### Return type

**GetLocalSession200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Current session |  -  |
|**401** | Authentication required |  -  |
|**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getOrgOAuthProviders**
> GetOrgOAuthProviders200Response getOrgOAuthProviders()

Returns a list of OAuth providers that are configured and available for organization-based authentication. Providers are configured via environment variables (e.g., GOOGLE_CLIENT_ID, GITHUB_CLIENT_ID). 

### Example

```typescript
import {
    AuthenticationApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

const { status, data } = await apiInstance.getOrgOAuthProviders();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetOrgOAuthProviders200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of available OAuth providers |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **initiateOAuth**
> initiateOAuth()

Initiates OAuth authentication flow for a specified provider and project. The OAuth provider must be configured and enabled for the project first. Returns an HTTP 302 redirect to the OAuth provider\'s consent screen. Note: Swagger \"Try it out\" may show \"Failed to fetch\" for this endpoint due to browser CORS restrictions on cross-origin redirects. Use top-level browser navigation or curl to test. 

### Example

```typescript
import {
    AuthenticationApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let provider: 'google' | 'github' | 'facebook' | 'microsoft' | 'apple' | 'twitter' | 'discord' | 'linkedin' | 'dropbox' | 'slack' | 'reddit' | 'twitch' | 'figma' | 'zoom' | 'bitbucket' | 'salesforce' | 'shopify' | 'line' | 'spotify' | 'strava' | 'paypal' | 'asana' | 'trello' | 'okta' | 'gitea' | 'yandex' | 'yahoo' | 'vk' | 'meetup'; // (default to undefined)
let projectId: string; // (default to undefined)
let redirectUrl: string; //The URL to redirect to after authentication. Must be pre-registered in project settings. (optional) (default to undefined)

const { status, data } = await apiInstance.initiateOAuth(
    provider,
    projectId,
    redirectUrl
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **provider** | [**&#39;google&#39; | &#39;github&#39; | &#39;facebook&#39; | &#39;microsoft&#39; | &#39;apple&#39; | &#39;twitter&#39; | &#39;discord&#39; | &#39;linkedin&#39; | &#39;dropbox&#39; | &#39;slack&#39; | &#39;reddit&#39; | &#39;twitch&#39; | &#39;figma&#39; | &#39;zoom&#39; | &#39;bitbucket&#39; | &#39;salesforce&#39; | &#39;shopify&#39; | &#39;line&#39; | &#39;spotify&#39; | &#39;strava&#39; | &#39;paypal&#39; | &#39;asana&#39; | &#39;trello&#39; | &#39;okta&#39; | &#39;gitea&#39; | &#39;yandex&#39; | &#39;yahoo&#39; | &#39;vk&#39; | &#39;meetup&#39;**]**Array<&#39;google&#39; &#124; &#39;github&#39; &#124; &#39;facebook&#39; &#124; &#39;microsoft&#39; &#124; &#39;apple&#39; &#124; &#39;twitter&#39; &#124; &#39;discord&#39; &#124; &#39;linkedin&#39; &#124; &#39;dropbox&#39; &#124; &#39;slack&#39; &#124; &#39;reddit&#39; &#124; &#39;twitch&#39; &#124; &#39;figma&#39; &#124; &#39;zoom&#39; &#124; &#39;bitbucket&#39; &#124; &#39;salesforce&#39; &#124; &#39;shopify&#39; &#124; &#39;line&#39; &#124; &#39;spotify&#39; &#124; &#39;strava&#39; &#124; &#39;paypal&#39; &#124; &#39;asana&#39; &#124; &#39;trello&#39; &#124; &#39;okta&#39; &#124; &#39;gitea&#39; &#124; &#39;yandex&#39; &#124; &#39;yahoo&#39; &#124; &#39;vk&#39; &#124; &#39;meetup&#39;>** |  | defaults to undefined|
| **projectId** | [**string**] |  | defaults to undefined|
| **redirectUrl** | [**string**] | The URL to redirect to after authentication. Must be pre-registered in project settings. | (optional) defaults to undefined|


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
|**302** | Redirect to OAuth provider\&#39;s consent screen |  * Location - OAuth provider authorization URL <br>  |
|**400** | OAuth provider not configured, not enabled, or missing required server/provider credentials |  -  |
|**404** | Project not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **initiateOrgOAuth**
> initiateOrgOAuth()

Initiates OAuth authentication flow for organization-level signup/login. The OAuth provider must be configured via environment variables (e.g., GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET). After successful authentication, creates a new organization and user account, or logs in existing user. 

### Example

```typescript
import {
    AuthenticationApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let provider: 'google' | 'github' | 'facebook' | 'microsoft' | 'discord' | 'linkedin'; // (default to undefined)
let redirectUrl: string; //The URL to redirect to after authentication (optional) (default to undefined)

const { status, data } = await apiInstance.initiateOrgOAuth(
    provider,
    redirectUrl
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **provider** | [**&#39;google&#39; | &#39;github&#39; | &#39;facebook&#39; | &#39;microsoft&#39; | &#39;discord&#39; | &#39;linkedin&#39;**]**Array<&#39;google&#39; &#124; &#39;github&#39; &#124; &#39;facebook&#39; &#124; &#39;microsoft&#39; &#124; &#39;discord&#39; &#124; &#39;linkedin&#39;>** |  | defaults to undefined|
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
|**302** | Redirect to OAuth provider\&#39;s consent screen |  * Location - OAuth provider authorization URL <br>  |
|**400** | OAuth provider not configured or not supported |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **loginLocalUser**
> LoginLocalUser200Response loginLocalUser(loginLocalUserRequest)

When the project has **requireEmailVerification** enabled and the user has not verified their email, returns 403 with code **EMAIL_VERIFICATION_REQUIRED** (user must verify email first, then login again). 

### Example

```typescript
import {
    AuthenticationApi,
    Configuration,
    LoginLocalUserRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let loginLocalUserRequest: LoginLocalUserRequest; //

const { status, data } = await apiInstance.loginLocalUser(
    loginLocalUserRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loginLocalUserRequest** | **LoginLocalUserRequest**|  | |


### Return type

**LoginLocalUser200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Login successful |  -  |
|**401** | Authentication required |  -  |
|**403** | Email verification required (project has requireEmailVerification and user has not verified) |  -  |
|**429** | Rate limit exceeded |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **loginUser**
> AuthResponse loginUser(loginRequest)


### Example

```typescript
import {
    AuthenticationApi,
    Configuration,
    LoginRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let loginRequest: LoginRequest; //

const { status, data } = await apiInstance.loginUser(
    loginRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loginRequest** | **LoginRequest**|  | |


### Return type

**AuthResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Login successful |  -  |
|**401** | Authentication required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **logoutLocalUser**
> MessageResponse logoutLocalUser()

Logout the current authenticated user session (project-based). Requires JWT Bearer token authentication. Both OrgBearerAuth and ProjectBearerAuth are supported (they use the same JWT token format). API keys are not supported for this endpoint. 

### Example

```typescript
import {
    AuthenticationApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

const { status, data } = await apiInstance.logoutLocalUser();
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
|**200** | Logout successful |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **logoutUser**
> MessageResponse logoutUser()

Logout the current authenticated user session. Requires JWT Bearer token authentication. Both OrgBearerAuth and ProjectBearerAuth are supported (they use the same JWT token format). API keys are not supported for this endpoint. 

### Example

```typescript
import {
    AuthenticationApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

const { status, data } = await apiInstance.logoutUser();
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
|**200** | Logout successful |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **oauthCallback**
> oauthCallback()

Handles OAuth callback for project-based authentication. This route must be matched before /api/auth/oauth/{provider}/{projectId}. Redirects to frontend with query params token, refreshToken, and expiresIn. 

### Example

```typescript
import {
    AuthenticationApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let provider: string; // (default to undefined)

const { status, data } = await apiInstance.oauthCallback(
    provider
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **provider** | [**string**] |  | defaults to undefined|


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
|**302** | Redirect with token, refreshToken, and expiresIn |  * Location - URL with token, refreshToken, expiresIn query params <br>  |
|**400** | Bad request |  -  |
|**429** | Rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orgOAuthCallback**
> orgOAuthCallback()

Handles OAuth callback for organization-based authentication. Creates a new organization and user account if the user doesn\'t exist, or logs in existing user. Redirects to frontend with query params token, refreshToken, and expiresIn. 

### Example

```typescript
import {
    AuthenticationApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let provider: 'google' | 'github' | 'facebook' | 'microsoft' | 'discord' | 'linkedin'; // (default to undefined)
let code: string; //Authorization code from OAuth provider (optional) (default to undefined)
let state: string; //State parameter for CSRF protection (optional) (default to undefined)

const { status, data } = await apiInstance.orgOAuthCallback(
    provider,
    code,
    state
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **provider** | [**&#39;google&#39; | &#39;github&#39; | &#39;facebook&#39; | &#39;microsoft&#39; | &#39;discord&#39; | &#39;linkedin&#39;**]**Array<&#39;google&#39; &#124; &#39;github&#39; &#124; &#39;facebook&#39; &#124; &#39;microsoft&#39; &#124; &#39;discord&#39; &#124; &#39;linkedin&#39;>** |  | defaults to undefined|
| **code** | [**string**] | Authorization code from OAuth provider | (optional) defaults to undefined|
| **state** | [**string**] | State parameter for CSRF protection | (optional) defaults to undefined|


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
|**302** | Redirect with authentication result |  * Location - OAuth provider authorization URL <br>  |
|**400** | OAuth authentication failed |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **refreshToken**
> RefreshToken200Response refreshToken(refreshTokenRequest)

Exchange a valid refresh token for a new JWT access token and refresh token. Works for both **org-based** (platform/dashboard) and **project-based** auth; the same endpoint is used. The previous refresh token is invalidated (rotation). If the same refresh token is used again, the session is revoked (reuse detection). 

### Example

```typescript
import {
    AuthenticationApi,
    Configuration,
    RefreshTokenRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let refreshTokenRequest: RefreshTokenRequest; //

const { status, data } = await apiInstance.refreshToken(
    refreshTokenRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **refreshTokenRequest** | **RefreshTokenRequest**|  | |


### Return type

**RefreshToken200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | New token pair issued |  -  |
|**400** | Missing refresh token |  -  |
|**401** | Invalid or expired refresh token (or reuse detected) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registerLocalUser**
> RegisterLocalUser201Response registerLocalUser(registerLocalUserRequest)

When the project has **requireEmailVerification** enabled (default), the response is 201 with **requireVerification: true** and **no token**; the user must verify their email then sign in via login. When email verification is disabled, a token and refreshToken are returned. 

### Example

```typescript
import {
    AuthenticationApi,
    Configuration,
    RegisterLocalUserRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let registerLocalUserRequest: RegisterLocalUserRequest; //

const { status, data } = await apiInstance.registerLocalUser(
    registerLocalUserRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **registerLocalUserRequest** | **RegisterLocalUserRequest**|  | |


### Return type

**RegisterLocalUser201Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | When project.requireEmailVerification is on (default): no token returned; use requireVerification and message to prompt email verification, then user signs in via login. When off: token and refreshToken returned.  |  -  |
|**400** | Bad request |  -  |
|**404** | Resource not found |  -  |
|**429** | Rate limit exceeded |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registerUser**
> AuthResponse registerUser(registerRequest)


### Example

```typescript
import {
    AuthenticationApi,
    Configuration,
    RegisterRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let registerRequest: RegisterRequest; //

const { status, data } = await apiInstance.registerUser(
    registerRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **registerRequest** | **RegisterRequest**|  | |


### Return type

**AuthResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | User registered successfully |  -  |
|**400** | Bad request |  -  |
|**409** | Resource conflict |  -  |
|**429** | Rate limit exceeded |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **requestLocalPasswordReset**
> MessageResponse requestLocalPasswordReset(requestLocalPasswordResetRequest)

When projectId is provided, sends a 6-digit OTP to the user\'s email (project-based reset uses OTP, not link). When projectId is omitted, sends a token link (org/platform local account). Rate limited. 

### Example

```typescript
import {
    AuthenticationApi,
    Configuration,
    RequestLocalPasswordResetRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let requestLocalPasswordResetRequest: RequestLocalPasswordResetRequest; //

const { status, data } = await apiInstance.requestLocalPasswordReset(
    requestLocalPasswordResetRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestLocalPasswordResetRequest** | **RequestLocalPasswordResetRequest**|  | |


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
|**200** | OTP or reset email sent (generic message to prevent enumeration) |  -  |
|**400** | Bad request |  -  |
|**404** | Resource not found |  -  |
|**429** | Too many requests (rate limit) |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **requestPasswordReset**
> MessageResponse requestPasswordReset(requestPasswordResetRequest)

Sends a password reset link to the user\'s email. Use this for organization (platform) accounts. For project-based accounts use POST /api/auth/local/password-reset with projectId (sends OTP instead). 

### Example

```typescript
import {
    AuthenticationApi,
    Configuration,
    RequestPasswordResetRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let requestPasswordResetRequest: RequestPasswordResetRequest; //

const { status, data } = await apiInstance.requestPasswordReset(
    requestPasswordResetRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestPasswordResetRequest** | **RequestPasswordResetRequest**|  | |


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
|**200** | Password reset email sent (or generic message to prevent enumeration) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resendVerificationAuth**
> MessageResponse resendVerificationAuth(resendVerificationAuthRequest)

Sends a new verification email to the given email (and optional project). For unauthenticated users who have not verified yet. Rate limited (e.g. 3 per 15 min per IP). 

### Example

```typescript
import {
    AuthenticationApi,
    Configuration,
    ResendVerificationAuthRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let resendVerificationAuthRequest: ResendVerificationAuthRequest; //

const { status, data } = await apiInstance.resendVerificationAuth(
    resendVerificationAuthRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resendVerificationAuthRequest** | **ResendVerificationAuthRequest**|  | |


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
|**200** | Verification email sent (or generic message to prevent enumeration) |  -  |
|**400** | Email required |  -  |
|**429** | Too many requests (rate limit) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resetLocalPassword**
> MessageResponse resetLocalPassword(resetLocalPasswordRequest)

Legacy token-based completion. Prefer OTP flow: use POST .../password-reset/confirm with the OTP sent to email for project-based resets. 

### Example

```typescript
import {
    AuthenticationApi,
    Configuration,
    ResetLocalPasswordRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let token: string; // (default to undefined)
let resetLocalPasswordRequest: ResetLocalPasswordRequest; //

const { status, data } = await apiInstance.resetLocalPassword(
    token,
    resetLocalPasswordRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resetLocalPasswordRequest** | **ResetLocalPasswordRequest**|  | |
| **token** | [**string**] |  | defaults to undefined|


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
|**200** | Password reset successful |  -  |
|**400** | Bad request |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resetPassword**
> MessageResponse resetPassword(resetPasswordRequest)

Set new password using the token from the reset link. Validate the token first with POST /api/auth/password-reset/validate before showing the form. If the user\'s email was not yet verified, it is marked as verified upon successful reset. 

### Example

```typescript
import {
    AuthenticationApi,
    Configuration,
    ResetPasswordRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let token: string; // (default to undefined)
let resetPasswordRequest: ResetPasswordRequest; //

const { status, data } = await apiInstance.resetPassword(
    token,
    resetPasswordRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resetPasswordRequest** | **ResetPasswordRequest**|  | |
| **token** | [**string**] |  | defaults to undefined|


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
|**200** | Password reset successful |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sendMagicLink**
> MessageResponse sendMagicLink(magicLinkRequest)


### Example

```typescript
import {
    AuthenticationApi,
    Configuration,
    MagicLinkRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let magicLinkRequest: MagicLinkRequest; //

const { status, data } = await apiInstance.sendMagicLink(
    magicLinkRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **magicLinkRequest** | **MagicLinkRequest**|  | |


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
|**200** | Magic link sent |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sendOTP**
> MessageResponse sendOTP(oTPSendRequest)


### Example

```typescript
import {
    AuthenticationApi,
    Configuration,
    OTPSendRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let oTPSendRequest: OTPSendRequest; //

const { status, data } = await apiInstance.sendOTP(
    oTPSendRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **oTPSendRequest** | **OTPSendRequest**|  | |


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
|**200** | OTP sent |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **validatePasswordResetToken**
> ValidatePasswordResetToken200Response validatePasswordResetToken(validatePasswordResetTokenRequest)

Call before showing the \"set new password\" form. Validates that the token from the reset link is still valid and not expired. Organization (platform) reset only. 

### Example

```typescript
import {
    AuthenticationApi,
    Configuration,
    ValidatePasswordResetTokenRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let validatePasswordResetTokenRequest: ValidatePasswordResetTokenRequest; //

const { status, data } = await apiInstance.validatePasswordResetToken(
    validatePasswordResetTokenRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **validatePasswordResetTokenRequest** | **ValidatePasswordResetTokenRequest**|  | |


### Return type

**ValidatePasswordResetToken200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Token is valid |  -  |
|**400** | Token invalid or expired |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **verifyEmailAuth**
> MessageResponse verifyEmailAuth(verifyEmailAuthRequest)

Verifies the user\'s email using the token from the link sent at signup. Use this for both organization and project signups (unauthenticated). Same behavior as POST /api/users/verify-email. 

### Example

```typescript
import {
    AuthenticationApi,
    Configuration,
    VerifyEmailAuthRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let verifyEmailAuthRequest: VerifyEmailAuthRequest; //

const { status, data } = await apiInstance.verifyEmailAuth(
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
|**400** | Invalid or missing token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **verifyMagicLink**
> AuthResponse verifyMagicLink(verifyMagicLinkRequest)


### Example

```typescript
import {
    AuthenticationApi,
    Configuration,
    VerifyMagicLinkRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let verifyMagicLinkRequest: VerifyMagicLinkRequest; //

const { status, data } = await apiInstance.verifyMagicLink(
    verifyMagicLinkRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **verifyMagicLinkRequest** | **VerifyMagicLinkRequest**|  | |


### Return type

**AuthResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Magic link verified |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **verifyOTP**
> AuthResponse verifyOTP(oTPVerifyRequest)


### Example

```typescript
import {
    AuthenticationApi,
    Configuration,
    OTPVerifyRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let oTPVerifyRequest: OTPVerifyRequest; //

const { status, data } = await apiInstance.verifyOTP(
    oTPVerifyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **oTPVerifyRequest** | **OTPVerifyRequest**|  | |


### Return type

**AuthResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OTP verified |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

