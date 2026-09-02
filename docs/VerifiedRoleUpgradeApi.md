# VerifiedRoleUpgradeApi

All URIs are relative to *https://cloud.mudbase.dev*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**verifiedRoleUpgrade**](#verifiedroleupgrade) | **POST** /api/orgs/{orgId}/users/{userId}/upgrade | Verified role upgrade with payment verification|

# **verifiedRoleUpgrade**
> VerifiedRoleUpgrade200Response verifiedRoleUpgrade(verifiedRoleUpgradeRequest)

Upgrade user role after verifying payment and KYC. Prevents replay attacks.

### Example

```typescript
import {
    VerifiedRoleUpgradeApi,
    Configuration,
    VerifiedRoleUpgradeRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new VerifiedRoleUpgradeApi(configuration);

let orgId: string; // (default to undefined)
let userId: string; // (default to undefined)
let verifiedRoleUpgradeRequest: VerifiedRoleUpgradeRequest; //

const { status, data } = await apiInstance.verifiedRoleUpgrade(
    orgId,
    userId,
    verifiedRoleUpgradeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **verifiedRoleUpgradeRequest** | **VerifiedRoleUpgradeRequest**|  | |
| **orgId** | [**string**] |  | defaults to undefined|
| **userId** | [**string**] |  | defaults to undefined|


### Return type

**VerifiedRoleUpgrade200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Role upgraded successfully |  -  |
|**403** | Payment verification failed or insufficient permissions |  -  |
|**404** | User or role not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

