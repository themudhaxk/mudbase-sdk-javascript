# ProjectFeesApi

All URIs are relative to *https://cloud.mudbase.dev*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**cancelPayout**](#cancelpayout) | **POST** /api/admin/payouts/{payoutId}/cancel | ~~Cancel payout (Admin)~~ (deprecated)|
|[**confirmAddressVerification**](#confirmaddressverification) | **POST** /api/projects/{projectId}/fee-settings/{currency}/confirm-verification | ~~Confirm address verification~~ (deprecated)|
|[**createOrUpdateFeeSettings**](#createorupdatefeesettings) | **POST** /api/projects/{projectId}/fee-settings | ~~Create or update project fee settings~~ (deprecated)|
|[**getAdminPayoutDashboard**](#getadminpayoutdashboard) | **GET** /api/admin/payouts/dashboard | ~~Get admin payout dashboard (Admin)~~ (deprecated)|
|[**getCurrencyFeeBalance**](#getcurrencyfeebalance) | **GET** /api/projects/{projectId}/fee-balances/{currency} | ~~Get currency fee balance~~ (deprecated)|
|[**getFeeBalances**](#getfeebalances) | **GET** /api/projects/{projectId}/fee-balances | ~~Get all fee balances~~ (deprecated)|
|[**getFeeSettings**](#getfeesettings) | **GET** /api/projects/{projectId}/fee-settings | ~~Get project fee settings~~ (deprecated)|
|[**getPayoutHistory**](#getpayouthistory) | **GET** /api/projects/{projectId}/payout-history | ~~Get payout history~~ (deprecated)|
|[**getPendingPayouts**](#getpendingpayouts) | **GET** /api/admin/payouts/pending | ~~Get all pending payouts (Admin)~~ (deprecated)|
|[**getProjectFeeDashboard**](#getprojectfeedashboard) | **GET** /api/projects/{projectId}/fee-dashboard | ~~Get fee dashboard~~ (deprecated)|
|[**initiateAddressVerification**](#initiateaddressverification) | **POST** /api/projects/{projectId}/fee-settings/{currency}/verify-address | ~~Initiate address verification~~ (deprecated)|
|[**processPayout**](#processpayout) | **POST** /api/admin/payouts/{payoutId}/process | ~~Manually process payout (Admin)~~ (deprecated)|
|[**requestManualPayout**](#requestmanualpayout) | **POST** /api/projects/{projectId}/payouts/request-manual | ~~Request manual payout~~ (deprecated)|
|[**updateCurrencyFeeSettings**](#updatecurrencyfeesettings) | **PATCH** /api/projects/{projectId}/fee-settings/{currency} | ~~Update currency fee settings~~ (deprecated)|

# **cancelPayout**
> ApplyRoleFeaturePreset200Response cancelPayout()


### Example

```typescript
import {
    ProjectFeesApi,
    Configuration,
    PlatformAdminDetachMemberRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new ProjectFeesApi(configuration);

let payoutId: string; // (default to undefined)
let platformAdminDetachMemberRequest: PlatformAdminDetachMemberRequest; // (optional)

const { status, data } = await apiInstance.cancelPayout(
    payoutId,
    platformAdminDetachMemberRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **platformAdminDetachMemberRequest** | **PlatformAdminDetachMemberRequest**|  | |
| **payoutId** | [**string**] |  | defaults to undefined|


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
|**200** | Payout cancelled |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |
|**403** | Access denied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **confirmAddressVerification**
> ConfirmAddressVerification200Response confirmAddressVerification(confirmAddressVerificationRequest)

Confirm address verification by providing the transaction hash of the test transaction sent to the payout address. Accepts: OrgBearerAuth (for admin users), ProjectBearerAuth (JWT for authenticated users), or ApiKeyAuth (X-API-Key for programmatic access). Both ProjectBearerAuth and ApiKeyAuth are fully implemented. 

### Example

```typescript
import {
    ProjectFeesApi,
    Configuration,
    ConfirmAddressVerificationRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new ProjectFeesApi(configuration);

let projectId: string; // (default to undefined)
let currency: string; // (default to undefined)
let confirmAddressVerificationRequest: ConfirmAddressVerificationRequest; //

const { status, data } = await apiInstance.confirmAddressVerification(
    projectId,
    currency,
    confirmAddressVerificationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **confirmAddressVerificationRequest** | **ConfirmAddressVerificationRequest**|  | |
| **projectId** | [**string**] |  | defaults to undefined|
| **currency** | [**string**] |  | defaults to undefined|


### Return type

**ConfirmAddressVerification200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Address verified |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createOrUpdateFeeSettings**
> ApplyRoleFeaturePreset200Response createOrUpdateFeeSettings(createOrUpdateFeeSettingsRequest)

Create or update fee settings for a project. Configure transaction fees, payout addresses, and thresholds for supported cryptocurrencies. Accepts: OrgBearerAuth (for admin users), ProjectBearerAuth (JWT for authenticated users), or ApiKeyAuth (X-API-Key for programmatic access). Both ProjectBearerAuth and ApiKeyAuth are fully implemented. 

### Example

```typescript
import {
    ProjectFeesApi,
    Configuration,
    CreateOrUpdateFeeSettingsRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new ProjectFeesApi(configuration);

let projectId: string; // (default to undefined)
let createOrUpdateFeeSettingsRequest: CreateOrUpdateFeeSettingsRequest; //

const { status, data } = await apiInstance.createOrUpdateFeeSettings(
    projectId,
    createOrUpdateFeeSettingsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createOrUpdateFeeSettingsRequest** | **CreateOrUpdateFeeSettingsRequest**|  | |
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
|**200** | Fee settings updated |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |
|**403** | Access denied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAdminPayoutDashboard**
> GetAdminPayoutDashboard200Response getAdminPayoutDashboard()


### Example

```typescript
import {
    ProjectFeesApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new ProjectFeesApi(configuration);

const { status, data } = await apiInstance.getAdminPayoutDashboard();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetAdminPayoutDashboard200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Admin dashboard statistics |  -  |
|**401** | Authentication required |  -  |
|**403** | Access denied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCurrencyFeeBalance**
> GetCurrencyFeeBalance200Response getCurrencyFeeBalance()

Get fee balance for a specific cryptocurrency in a project. Accepts: OrgBearerAuth (for admin users), ProjectBearerAuth (JWT for authenticated users), or ApiKeyAuth (X-API-Key for programmatic access). Both ProjectBearerAuth and ApiKeyAuth are fully implemented. 

### Example

```typescript
import {
    ProjectFeesApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new ProjectFeesApi(configuration);

let projectId: string; // (default to undefined)
let currency: string; // (default to undefined)

const { status, data } = await apiInstance.getCurrencyFeeBalance(
    projectId,
    currency
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|
| **currency** | [**string**] |  | defaults to undefined|


### Return type

**GetCurrencyFeeBalance200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Currency balance |  -  |
|**404** | Resource not found |  -  |
|**401** | Authentication required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFeeBalances**
> GetFeeBalances200Response getFeeBalances()

Get fee balances for all currencies in a project, including collected amounts, thresholds, and payout status. Accepts: OrgBearerAuth (for admin users), ProjectBearerAuth (JWT for authenticated users), or ApiKeyAuth (X-API-Key for programmatic access). Both ProjectBearerAuth and ApiKeyAuth are fully implemented. 

### Example

```typescript
import {
    ProjectFeesApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new ProjectFeesApi(configuration);

let projectId: string; // (default to undefined)

const { status, data } = await apiInstance.getFeeBalances(
    projectId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|


### Return type

**GetFeeBalances200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Fee balances |  -  |
|**401** | Authentication required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFeeSettings**
> TestWalletWebhook200Response getFeeSettings()

Get all fee settings configured for a project. Accepts: OrgBearerAuth (for admin users), ProjectBearerAuth (JWT for authenticated users), or ApiKeyAuth (X-API-Key for programmatic access). Both ProjectBearerAuth and ApiKeyAuth are fully implemented. 

### Example

```typescript
import {
    ProjectFeesApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new ProjectFeesApi(configuration);

let projectId: string; // (default to undefined)

const { status, data } = await apiInstance.getFeeSettings(
    projectId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|


### Return type

**TestWalletWebhook200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Fee settings |  -  |
|**404** | Resource not found |  -  |
|**401** | Authentication required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPayoutHistory**
> GetPayoutHistory200Response getPayoutHistory()

Get historical payout records for a project with pagination. Accepts: OrgBearerAuth (for admin users), ProjectBearerAuth (JWT for authenticated users), or ApiKeyAuth (X-API-Key for programmatic access). Both ProjectBearerAuth and ApiKeyAuth are fully implemented. 

### Example

```typescript
import {
    ProjectFeesApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new ProjectFeesApi(configuration);

let projectId: string; // (default to undefined)
let limit: number; // (optional) (default to 20)
let page: number; // (optional) (default to 1)
let currency: string; // (optional) (default to undefined)
let status: 'scheduled' | 'processing' | 'completed' | 'failed' | 'requires_attention'; // (optional) (default to undefined)

const { status, data } = await apiInstance.getPayoutHistory(
    projectId,
    limit,
    page,
    currency,
    status
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to 20|
| **page** | [**number**] |  | (optional) defaults to 1|
| **currency** | [**string**] |  | (optional) defaults to undefined|
| **status** | [**&#39;scheduled&#39; | &#39;processing&#39; | &#39;completed&#39; | &#39;failed&#39; | &#39;requires_attention&#39;**]**Array<&#39;scheduled&#39; &#124; &#39;processing&#39; &#124; &#39;completed&#39; &#124; &#39;failed&#39; &#124; &#39;requires_attention&#39;>** |  | (optional) defaults to undefined|


### Return type

**GetPayoutHistory200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Payout history |  -  |
|**401** | Authentication required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPendingPayouts**
> GetPendingPayouts200Response getPendingPayouts()


### Example

```typescript
import {
    ProjectFeesApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new ProjectFeesApi(configuration);

let status: string; // (optional) (default to undefined)
let currency: string; // (optional) (default to undefined)
let limit: number; // (optional) (default to 50)
let page: number; // (optional) (default to 1)

const { status, data } = await apiInstance.getPendingPayouts(
    status,
    currency,
    limit,
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **status** | [**string**] |  | (optional) defaults to undefined|
| **currency** | [**string**] |  | (optional) defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to 50|
| **page** | [**number**] |  | (optional) defaults to 1|


### Return type

**GetPendingPayouts200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Pending payouts |  -  |
|**401** | Authentication required |  -  |
|**403** | Access denied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getProjectFeeDashboard**
> GetProjectFeeDashboard200Response getProjectFeeDashboard()


### Example

```typescript
import {
    ProjectFeesApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new ProjectFeesApi(configuration);

let projectId: string; // (default to undefined)

const { status, data } = await apiInstance.getProjectFeeDashboard(
    projectId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|


### Return type

**GetProjectFeeDashboard200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Fee dashboard data |  -  |
|**401** | Authentication required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **initiateAddressVerification**
> InitiateAddressVerification200Response initiateAddressVerification()

Initiate verification process for a payout address. Requires sending a small test transaction to verify ownership. Accepts: OrgBearerAuth (for admin users), ProjectBearerAuth (JWT for authenticated users), or ApiKeyAuth (X-API-Key for programmatic access). Both ProjectBearerAuth and ApiKeyAuth are fully implemented. 

### Example

```typescript
import {
    ProjectFeesApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new ProjectFeesApi(configuration);

let projectId: string; // (default to undefined)
let currency: string; // (default to undefined)

const { status, data } = await apiInstance.initiateAddressVerification(
    projectId,
    currency
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|
| **currency** | [**string**] |  | defaults to undefined|


### Return type

**InitiateAddressVerification200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Verification initiated |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **processPayout**
> ApplyRoleFeaturePreset200Response processPayout()


### Example

```typescript
import {
    ProjectFeesApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new ProjectFeesApi(configuration);

let payoutId: string; // (default to undefined)

const { status, data } = await apiInstance.processPayout(
    payoutId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **payoutId** | [**string**] |  | defaults to undefined|


### Return type

**ApplyRoleFeaturePreset200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Payout processing initiated |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |
|**403** | Access denied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **requestManualPayout**
> ApplyRoleFeaturePreset200Response requestManualPayout(requestManualPayoutRequest)

Request a manual payout for collected fees. Requires sufficient balance above the threshold. Accepts: OrgBearerAuth (for admin users), ProjectBearerAuth (JWT for authenticated users), or ApiKeyAuth (X-API-Key for programmatic access). Both ProjectBearerAuth and ApiKeyAuth are fully implemented. 

### Example

```typescript
import {
    ProjectFeesApi,
    Configuration,
    RequestManualPayoutRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new ProjectFeesApi(configuration);

let projectId: string; // (default to undefined)
let requestManualPayoutRequest: RequestManualPayoutRequest; //

const { status, data } = await apiInstance.requestManualPayout(
    projectId,
    requestManualPayoutRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestManualPayoutRequest** | **RequestManualPayoutRequest**|  | |
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
|**200** | Manual payout requested |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateCurrencyFeeSettings**
> ApplyRoleFeaturePreset200Response updateCurrencyFeeSettings(updateCurrencyFeeSettingsRequest)

Update fee settings for a specific cryptocurrency in a project. Accepts: OrgBearerAuth (for admin users), ProjectBearerAuth (JWT for authenticated users), or ApiKeyAuth (X-API-Key for programmatic access). Both ProjectBearerAuth and ApiKeyAuth are fully implemented. 

### Example

```typescript
import {
    ProjectFeesApi,
    Configuration,
    UpdateCurrencyFeeSettingsRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new ProjectFeesApi(configuration);

let projectId: string; // (default to undefined)
let currency: 'BTC' | 'ETH' | 'BNB' | 'LTC' | 'SOL' | 'TRX' | 'USDT-ETH' | 'USDT-BSC' | 'USDT-TRX' | 'USDT-SOL'; // (default to undefined)
let updateCurrencyFeeSettingsRequest: UpdateCurrencyFeeSettingsRequest; //

const { status, data } = await apiInstance.updateCurrencyFeeSettings(
    projectId,
    currency,
    updateCurrencyFeeSettingsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateCurrencyFeeSettingsRequest** | **UpdateCurrencyFeeSettingsRequest**|  | |
| **projectId** | [**string**] |  | defaults to undefined|
| **currency** | [**&#39;BTC&#39; | &#39;ETH&#39; | &#39;BNB&#39; | &#39;LTC&#39; | &#39;SOL&#39; | &#39;TRX&#39; | &#39;USDT-ETH&#39; | &#39;USDT-BSC&#39; | &#39;USDT-TRX&#39; | &#39;USDT-SOL&#39;**]**Array<&#39;BTC&#39; &#124; &#39;ETH&#39; &#124; &#39;BNB&#39; &#124; &#39;LTC&#39; &#124; &#39;SOL&#39; &#124; &#39;TRX&#39; &#124; &#39;USDT-ETH&#39; &#124; &#39;USDT-BSC&#39; &#124; &#39;USDT-TRX&#39; &#124; &#39;USDT-SOL&#39;>** |  | defaults to undefined|


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
|**200** | Currency fee settings updated |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |
|**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

