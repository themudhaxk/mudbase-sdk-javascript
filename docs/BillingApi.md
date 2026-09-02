# BillingApi

All URIs are relative to *https://cloud.mudbase.dev*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**cancelSubscription**](#cancelsubscription) | **POST** /api/billing/subscriptions/{subscriptionId}/cancel | Cancel subscription|
|[**checkFeatureAccess**](#checkfeatureaccess) | **GET** /api/billing/public/projects/{projectId}/feature-access | Check feature access (public)|
|[**checkSubscription**](#checksubscription) | **GET** /api/billing/public/projects/{projectId}/subscription | Check subscription status (public)|
|[**createCheckoutSession**](#createcheckoutsession) | **POST** /api/billing/public/projects/{projectId}/checkout | Create checkout session (fiat)|
|[**createPlan**](#createplan) | **POST** /api/billing/projects/{projectId}/plans | Create billing plan|
|[**deletePlan**](#deleteplan) | **DELETE** /api/billing/projects/{projectId}/plans/{planId} | Delete billing plan|
|[**downloadInvoice**](#downloadinvoice) | **GET** /api/billing/projects/{projectId}/invoices/{invoiceId}/download | Download invoice PDF|
|[**enablePaymentProcessing**](#enablepaymentprocessing) | **POST** /api/orgs/{orgId}/payment-processing/enable | Enable payment processing for organization|
|[**exportInvoice**](#exportinvoice) | **GET** /api/billing/projects/{projectId}/invoices/{invoiceId}/export | Export invoice (e.g. PDF URL or file)|
|[**getBillingEstimate**](#getbillingestimate) | **GET** /api/billing/estimate | Get billing estimate and forecast|
|[**getCheckoutPayment**](#getcheckoutpayment) | **GET** /api/billing/public/projects/{projectId}/checkout/{paymentId} | Get checkout payment details (not used for fiat billing)|
|[**getDashboard**](#getdashboard) | **GET** /api/billing/projects/{projectId}/dashboard | Get billing dashboard data|
|[**getFeeBreakdown**](#getfeebreakdown) | **GET** /api/orgs/{orgId}/payment-processing/fee-breakdown | Get fee breakdown for a given amount|
|[**getInvoice**](#getinvoice) | **GET** /api/billing/projects/{projectId}/invoices/{invoiceId} | Get single invoice|
|[**getInvoices**](#getinvoices) | **GET** /api/billing/projects/{projectId}/invoices | List project invoices|
|[**getPaymentRecords**](#getpaymentrecords) | **GET** /api/orgs/{orgId}/payment-processing/records | List fiat payment records for organization|
|[**getPlans**](#getplans) | **GET** /api/billing/projects/{projectId}/plans | Get billing plans|
|[**getPublicPlans**](#getpublicplans) | **GET** /api/billing/public/projects/{projectId}/plans | Get public plans (no auth required)|
|[**getSubscriptionTierById**](#getsubscriptiontierbyid) | **GET** /api/billing/plans/{planId} | Get one subscription tier by id|
|[**getSubscriptionTiers**](#getsubscriptiontiers) | **GET** /api/billing/plans | Get subscription tiers (org-level BaaS plans)|
|[**getSubscriptions**](#getsubscriptions) | **GET** /api/billing/projects/{projectId}/subscriptions | Get subscriptions|
|[**handleFlutterwaveWebhook**](#handleflutterwavewebhook) | **POST** /api/billing/webhooks/flutterwave | Payment gateway webhook|
|[**initializeOrgPlanCheckout**](#initializeorgplancheckout) | **POST** /api/billing/org/checkout | Initialize org-level BaaS plan payment (Starter, Growth, Scale)|
|[**initializePayment**](#initializepayment) | **POST** /api/orgs/{orgId}/payment-processing/initialize-payment | Initialize fiat payment with split (org subaccount + platform fee)|
|[**initializePaymentForProject**](#initializepaymentforproject) | **POST** /api/projects/{projectId}/payment-processing/initialize-payment | Initialize fiat payment (project-scoped)|
|[**recordUsage**](#recordusage) | **POST** /api/billing/public/projects/{projectId}/usage | Record usage (public)|
|[**updatePlan**](#updateplan) | **PATCH** /api/billing/projects/{projectId}/plans/{planId} | Update billing plan|
|[**verifyOrgPlanPayment**](#verifyorgplanpayment) | **POST** /api/billing/org/verify-payment | Verify org-level plan payment|
|[**verifyPayment**](#verifypayment) | **POST** /api/billing/public/projects/{projectId}/verify-payment | Verify payment and create subscription|

# **cancelSubscription**
> DeleteRole200Response cancelSubscription()


### Example

```typescript
import {
    BillingApi,
    Configuration,
    CancelSubscriptionRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let subscriptionId: string; // (default to undefined)
let cancelSubscriptionRequest: CancelSubscriptionRequest; // (optional)

const { status, data } = await apiInstance.cancelSubscription(
    subscriptionId,
    cancelSubscriptionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cancelSubscriptionRequest** | **CancelSubscriptionRequest**|  | |
| **subscriptionId** | [**string**] |  | defaults to undefined|


### Return type

**DeleteRole200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Subscription cancelled |  -  |
|**401** | Authentication required |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **checkFeatureAccess**
> CheckFeatureAccess200Response checkFeatureAccess()


### Example

```typescript
import {
    BillingApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let projectId: string; // (default to undefined)
let email: string; //Customer email (default to undefined)
let feature: string; //Feature slug to check access for (default to undefined)

const { status, data } = await apiInstance.checkFeatureAccess(
    projectId,
    email,
    feature
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|
| **email** | [**string**] | Customer email | defaults to undefined|
| **feature** | [**string**] | Feature slug to check access for | defaults to undefined|


### Return type

**CheckFeatureAccess200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Feature access status |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **checkSubscription**
> CheckSubscription200Response checkSubscription()


### Example

```typescript
import {
    BillingApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let projectId: string; // (default to undefined)
let email: string; //Customer email to check subscription for (default to undefined)

const { status, data } = await apiInstance.checkSubscription(
    projectId,
    email
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|
| **email** | [**string**] | Customer email to check subscription for | defaults to undefined|


### Return type

**CheckSubscription200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Subscription status |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createCheckoutSession**
> CreateCheckoutSession200Response createCheckoutSession(createCheckoutSessionRequest)

**Customer subscription flow — Step 2.** Creates a fiat checkout session. Request body must include planId (from GET public plans), billingCycle (monthly|yearly), and customerInfo.email. Redirect the user to **checkoutUrl** (same URL as authorizationUrl). After payment, call verify-payment with **reference** (mudbase_...). Response includes only fiat fields (no paymentAddress, paymentOptions, network, asset, or pmt_ references). 

### Example

```typescript
import {
    BillingApi,
    Configuration,
    CreateCheckoutSessionRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let projectId: string; //Project ID (default to undefined)
let createCheckoutSessionRequest: CreateCheckoutSessionRequest; //

const { status, data } = await apiInstance.createCheckoutSession(
    projectId,
    createCheckoutSessionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCheckoutSessionRequest** | **CreateCheckoutSessionRequest**|  | |
| **projectId** | [**string**] | Project ID | defaults to undefined|


### Return type

**CreateCheckoutSession200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Checkout session created |  -  |
|**400** | Missing planId, billingCycle, or customerInfo.email |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createPlan**
> CreatePlan201Response createPlan(createPlanRequest)


### Example

```typescript
import {
    BillingApi,
    Configuration,
    CreatePlanRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let projectId: string; // (default to undefined)
let createPlanRequest: CreatePlanRequest; //

const { status, data } = await apiInstance.createPlan(
    projectId,
    createPlanRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createPlanRequest** | **CreatePlanRequest**|  | |
| **projectId** | [**string**] |  | defaults to undefined|


### Return type

**CreatePlan201Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Plan created |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deletePlan**
> MessageResponse deletePlan()


### Example

```typescript
import {
    BillingApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let projectId: string; // (default to undefined)
let planId: string; // (default to undefined)

const { status, data } = await apiInstance.deletePlan(
    projectId,
    planId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|
| **planId** | [**string**] |  | defaults to undefined|


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
|**200** | Plan deleted |  -  |
|**401** | Authentication required |  -  |
|**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **downloadInvoice**
> File downloadInvoice()


### Example

```typescript
import {
    BillingApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let projectId: string; // (default to undefined)
let invoiceId: string; // (default to undefined)

const { status, data } = await apiInstance.downloadInvoice(
    projectId,
    invoiceId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|
| **invoiceId** | [**string**] |  | defaults to undefined|


### Return type

**File**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/pdf, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Invoice PDF file or redirect URL |  -  |
|**401** | Authentication required |  -  |
|**404** | Invoice not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **enablePaymentProcessing**
> EnablePaymentProcessing200Response enablePaymentProcessing(enablePaymentProcessingRequest)

Creates a payment-collection subaccount for the org with the provided bank details. Use USD-capable bank (e.g. country US) for USD settlement. BVN only required when country is NG. Requires owner or admin role.

### Example

```typescript
import {
    BillingApi,
    Configuration,
    EnablePaymentProcessingRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let orgId: string; // (default to undefined)
let enablePaymentProcessingRequest: EnablePaymentProcessingRequest; //

const { status, data } = await apiInstance.enablePaymentProcessing(
    orgId,
    enablePaymentProcessingRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **enablePaymentProcessingRequest** | **EnablePaymentProcessingRequest**|  | |
| **orgId** | [**string**] |  | defaults to undefined|


### Return type

**EnablePaymentProcessing200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Payment processing enabled (or already enabled) |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |
|**403** | Access denied |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **exportInvoice**
> DownloadInvoice200Response exportInvoice()


### Example

```typescript
import {
    BillingApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let projectId: string; // (default to undefined)
let invoiceId: string; // (default to undefined)

const { status, data } = await apiInstance.exportInvoice(
    projectId,
    invoiceId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|
| **invoiceId** | [**string**] |  | defaults to undefined|


### Return type

**DownloadInvoice200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Export result (URL or file) |  -  |
|**401** | Authentication required |  -  |
|**404** | Invoice not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getBillingEstimate**
> GetBillingEstimate200Response getBillingEstimate()

Returns current-month overage estimate and an optional end-of-month forecast for the authenticated organization. Includes spend limit settings (soft/hard) and whether usage is currently blocked. Requires org-level JWT. 

### Example

```typescript
import {
    BillingApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

const { status, data } = await apiInstance.getBillingEstimate();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetBillingEstimate200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Billing estimate and forecast |  -  |
|**401** | Authentication required |  -  |
|**503** | Service temporarily unavailable. Returned when the organization is restricted (e.g. suspended due to unpaid overage, spend limit exceeded, or API usage limit reached). End-users see a generic message; the real reason is logged server-side only.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCheckoutPayment**
> getCheckoutPayment()

**Fiat-only billing:** checkout is completed on the payment gateway\'s hosted page; there is no server-side payment intent to poll. The live API returns **404** for this route. Reserved for compatibility; do not rely on a success body for project billing. 

### Example

```typescript
import {
    BillingApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let projectId: string; // (default to undefined)
let paymentId: string; //Opaque id from checkout (fiat billing does not expose pollable payment state here) (default to undefined)

const { status, data } = await apiInstance.getCheckoutPayment(
    projectId,
    paymentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|
| **paymentId** | [**string**] | Opaque id from checkout (fiat billing does not expose pollable payment state here) | defaults to undefined|


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
|**404** | Payment not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getDashboard**
> GetDashboard200Response getDashboard()


### Example

```typescript
import {
    BillingApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let projectId: string; // (default to undefined)

const { status, data } = await apiInstance.getDashboard(
    projectId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|


### Return type

**GetDashboard200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Dashboard data |  -  |
|**401** | Authentication required |  -  |
|**404** | Project not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFeeBreakdown**
> GetFeeBreakdown200Response getFeeBreakdown()

Returns orgReceives, platformPercent, platformFixed, processingFee for the given amount (7% + $0.50 platform fee; processing fee absorbed from platform share).

### Example

```typescript
import {
    BillingApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let orgId: string; // (default to undefined)
let amount: number; // (default to undefined)
let currency: string; // (optional) (default to 'USD')

const { status, data } = await apiInstance.getFeeBreakdown(
    orgId,
    amount,
    currency
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orgId** | [**string**] |  | defaults to undefined|
| **amount** | [**number**] |  | defaults to undefined|
| **currency** | [**string**] |  | (optional) defaults to 'USD'|


### Return type

**GetFeeBreakdown200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Fee breakdown |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getInvoice**
> GetInvoice200Response getInvoice()


### Example

```typescript
import {
    BillingApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let projectId: string; // (default to undefined)
let invoiceId: string; // (default to undefined)

const { status, data } = await apiInstance.getInvoice(
    projectId,
    invoiceId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|
| **invoiceId** | [**string**] |  | defaults to undefined|


### Return type

**GetInvoice200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Invoice details |  -  |
|**401** | Authentication required |  -  |
|**404** | Invoice not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getInvoices**
> GetInvoices200Response getInvoices()


### Example

```typescript
import {
    BillingApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let projectId: string; // (default to undefined)

const { status, data } = await apiInstance.getInvoices(
    projectId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|


### Return type

**GetInvoices200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Invoices list |  -  |
|**401** | Authentication required |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPaymentRecords**
> GetPaymentRecords200Response getPaymentRecords()

Paginated list of FiatPaymentRecord for this org (txRef, amount, orgReceives, status, paidAt).

### Example

```typescript
import {
    BillingApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let orgId: string; // (default to undefined)
let page: number; // (optional) (default to 1)
let limit: number; // (optional) (default to 20)
let status: 'pending' | 'successful' | 'failed'; // (optional) (default to undefined)

const { status, data } = await apiInstance.getPaymentRecords(
    orgId,
    page,
    limit,
    status
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orgId** | [**string**] |  | defaults to undefined|
| **page** | [**number**] |  | (optional) defaults to 1|
| **limit** | [**number**] |  | (optional) defaults to 20|
| **status** | [**&#39;pending&#39; | &#39;successful&#39; | &#39;failed&#39;**]**Array<&#39;pending&#39; &#124; &#39;successful&#39; &#124; &#39;failed&#39;>** |  | (optional) defaults to undefined|


### Return type

**GetPaymentRecords200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Records and pagination |  -  |
|**401** | Authentication required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPlans**
> GetPlans200Response getPlans()


### Example

```typescript
import {
    BillingApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let projectId: string; // (default to undefined)

const { status, data } = await apiInstance.getPlans(
    projectId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|


### Return type

**GetPlans200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Plans list |  -  |
|**401** | Authentication required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPublicPlans**
> GetPublicPlans200Response getPublicPlans()

**Customer subscription flow — Step 1.** Returns all active plans for the project. Use a plan\'s _id as planId in the checkout request. No authentication required (for pricing/checkout pages). 

### Example

```typescript
import {
    BillingApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let projectId: string; // (default to undefined)

const { status, data } = await apiInstance.getPublicPlans(
    projectId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|


### Return type

**GetPublicPlans200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Public plans list |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSubscriptionTierById**
> GetSubscriptionTierById200Response getSubscriptionTierById()

Returns a single org-level BaaS plan (free, starter, growth, scale, enterprise). Public; no auth required.

### Example

```typescript
import {
    BillingApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let planId: string; //Plan id (free, starter, growth, scale, enterprise) (default to undefined)

const { status, data } = await apiInstance.getSubscriptionTierById(
    planId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **planId** | [**string**] | Plan id (free, starter, growth, scale, enterprise) | defaults to undefined|


### Return type

**GetSubscriptionTierById200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Plan details |  -  |
|**404** | Plan not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSubscriptionTiers**
> GetSubscriptionTiers200Response getSubscriptionTiers()

**Org-level BaaS plan catalog** (source of truth in paymentService.js). Returns Free, Starter ($29), Growth ($69), Scale ($199), Enterprise. Use for pricing page and to get plan ids for POST /api/billing/org/checkout. Public; no auth required. Each plan includes id (free|starter|growth|scale|enterprise), name, description, price (cents), priceYearly (cents, 8% off), currency, limits, overages, enforcement. 

### Example

```typescript
import {
    BillingApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

const { status, data } = await apiInstance.getSubscriptionTiers();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetSubscriptionTiers200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Plan list |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSubscriptions**
> GetSubscriptions200Response getSubscriptions()


### Example

```typescript
import {
    BillingApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let projectId: string; // (default to undefined)

const { status, data } = await apiInstance.getSubscriptions(
    projectId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|


### Return type

**GetSubscriptions200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Subscriptions list |  -  |
|**401** | Authentication required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **handleFlutterwaveWebhook**
> HandleFlutterwaveWebhook200Response handleFlutterwaveWebhook(handleFlutterwaveWebhookRequest)

Receives payment gateway webhook events (charge.completed, payment.successful). No auth; verified by verif-hash header. - Subscription billing: meta without isPaymentProcessing triggers verifyPaymentAndCreateSubscription (mudbase_xxx refs). - Payment processing: meta.isPaymentProcessing === true triggers fiat payment record (mudbase_fiat_xxx refs); org share goes to org subaccount, platform fee to main or configured subaccounts. 

### Example

```typescript
import {
    BillingApi,
    Configuration,
    HandleFlutterwaveWebhookRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let handleFlutterwaveWebhookRequest: HandleFlutterwaveWebhookRequest; //

const { status, data } = await apiInstance.handleFlutterwaveWebhook(
    handleFlutterwaveWebhookRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **handleFlutterwaveWebhookRequest** | **HandleFlutterwaveWebhookRequest**|  | |


### Return type

**HandleFlutterwaveWebhook200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Webhook received |  -  |
|**400** | Invalid or missing event |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **initializeOrgPlanCheckout**
> InitializeOrgPlanCheckout200Response initializeOrgPlanCheckout(initializeOrgPlanCheckoutRequest)

**Org plan payment flow — Step 2.** Creates a payment link for the authenticated org to subscribe to a BaaS plan (starter, growth, scale). Enterprise has no price; use contact-sales flow. Redirect the user to the returned link; after payment, call POST /api/billing/org/verify-payment with the tx_ref from the redirect. Requires org-level JWT. 

### Example

```typescript
import {
    BillingApi,
    Configuration,
    InitializeOrgPlanCheckoutRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let initializeOrgPlanCheckoutRequest: InitializeOrgPlanCheckoutRequest; //

const { status, data } = await apiInstance.initializeOrgPlanCheckout(
    initializeOrgPlanCheckoutRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **initializeOrgPlanCheckoutRequest** | **InitializeOrgPlanCheckoutRequest**|  | |


### Return type

**InitializeOrgPlanCheckout200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Payment link created |  -  |
|**400** | Invalid planName or payment gateway not configured |  -  |
|**401** | Organization context required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **initializePayment**
> InitializePayment200Response initializePayment(initializePaymentRequest)

Creates a payment link. Customer pays; org receives (amount - 7% - $0.50) to their subaccount; platform fee (7% + $0.50, minus processing fee) stays on main account or goes to configured platform subaccounts. Requires payment processing enabled for org.

### Example

```typescript
import {
    BillingApi,
    Configuration,
    InitializePaymentRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let orgId: string; // (default to undefined)
let initializePaymentRequest: InitializePaymentRequest; //

const { status, data } = await apiInstance.initializePayment(
    orgId,
    initializePaymentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **initializePaymentRequest** | **InitializePaymentRequest**|  | |
| **orgId** | [**string**] |  | defaults to undefined|


### Return type

**InitializePayment200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Payment link and fee breakdown |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **initializePaymentForProject**
> initializePaymentForProject(initializePaymentForProjectRequest)

Same as org-level initialize-payment; projectId from path is used for scope and tx_ref. Resolves project to org and uses org\'s payment-processing subaccount.

### Example

```typescript
import {
    BillingApi,
    Configuration,
    InitializePaymentForProjectRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let projectId: string; // (default to undefined)
let initializePaymentForProjectRequest: InitializePaymentForProjectRequest; //

const { status, data } = await apiInstance.initializePaymentForProject(
    projectId,
    initializePaymentForProjectRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **initializePaymentForProjectRequest** | **InitializePaymentForProjectRequest**|  | |
| **projectId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Payment link and fee breakdown (same shape as org-level) |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recordUsage**
> MessageResponse recordUsage(recordUsageRequest)


### Example

```typescript
import {
    BillingApi,
    Configuration,
    RecordUsageRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let projectId: string; // (default to undefined)
let recordUsageRequest: RecordUsageRequest; //

const { status, data } = await apiInstance.recordUsage(
    projectId,
    recordUsageRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recordUsageRequest** | **RecordUsageRequest**|  | |
| **projectId** | [**string**] |  | defaults to undefined|


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
|**200** | Usage recorded |  -  |
|**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updatePlan**
> CreatePlan201Response updatePlan(updatePlanRequest)


### Example

```typescript
import {
    BillingApi,
    Configuration,
    UpdatePlanRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let projectId: string; // (default to undefined)
let planId: string; // (default to undefined)
let updatePlanRequest: UpdatePlanRequest; //

const { status, data } = await apiInstance.updatePlan(
    projectId,
    planId,
    updatePlanRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updatePlanRequest** | **UpdatePlanRequest**|  | |
| **projectId** | [**string**] |  | defaults to undefined|
| **planId** | [**string**] |  | defaults to undefined|


### Return type

**CreatePlan201Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Plan updated |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |
|**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **verifyOrgPlanPayment**
> VerifyOrgPlanPayment200Response verifyOrgPlanPayment()

**Org plan payment flow — Step 3.** Call after the user completes payment (redirect or webhook). Pass tx_ref (or reference) from the payment redirect. Updates org plan and billing; idempotent. No auth required (redirect callback can call this). 

### Example

```typescript
import {
    BillingApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let txRef: string; //Payment reference (mudbase_org_...) from checkout redirect (optional) (default to undefined)
let reference: string; //Alias for tx_ref (optional) (default to undefined)

const { status, data } = await apiInstance.verifyOrgPlanPayment(
    txRef,
    reference
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **txRef** | [**string**] | Payment reference (mudbase_org_...) from checkout redirect | (optional) defaults to undefined|
| **reference** | [**string**] | Alias for tx_ref | (optional) defaults to undefined|


### Return type

**VerifyOrgPlanPayment200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Payment verified and org plan updated |  -  |
|**400** | tx_ref required, invalid reference, or payment verification failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **verifyPayment**
> VerifyPayment200Response verifyPayment()

**Customer subscription flow — Step 3.** Call after the user completes payment. Pass **reference** as query (?reference=mudbase_...). On success, a subscription is created. No auth required when using the platform gateway (mudbase_ refs). Org-level gateway verification may require JWT. References starting with pmt_ are rejected (crypto billing is not enabled on this API). 

### Example

```typescript
import {
    BillingApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let projectId: string; // (default to undefined)
let reference: string; //Payment transaction reference (mudbase_...) (default to undefined)

const { status, data } = await apiInstance.verifyPayment(
    projectId,
    reference
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|
| **reference** | [**string**] | Payment transaction reference (mudbase_...) | defaults to undefined|


### Return type

**VerifyPayment200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Payment verified and subscription created |  -  |
|**400** | reference is required or organization context missing |  -  |
|**403** | Payment does not belong to your organization |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

