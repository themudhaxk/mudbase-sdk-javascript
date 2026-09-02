# WalletApi

All URIs are relative to *https://cloud.mudbase.dev*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**broadcastNonCustodialTransaction**](#broadcastnoncustodialtransaction) | **POST** /api/wallet/non-custodial/broadcast | Broadcast a client-signed transaction|
|[**calculateWalletFee**](#calculatewalletfee) | **POST** /api/wallet/calculate-fee | Get network fee only (alias for POST /api/wallet/estimate-network-fee)|
|[**createWallet**](#createwallet) | **POST** /api/wallet/create | Create new wallet (for testing non-custodial)|
|[**createWalletWebhook**](#createwalletwebhook) | **POST** /api/wallet/non-custodial/webhooks | Create a wallet webhook|
|[**deleteNonCustodialAddress**](#deletenoncustodialaddress) | **DELETE** /api/wallet/non-custodial/addresses/{addressId} | Delete or deactivate a monitored wallet address|
|[**deleteWalletWebhook**](#deletewalletwebhook) | **DELETE** /api/wallet/non-custodial/webhooks/{webhookId} | Delete a wallet webhook|
|[**estimateNetworkFee**](#estimatenetworkfee) | **POST** /api/wallet/estimate-network-fee | Estimate network fee (preferred; reads from fee oracle cache)|
|[**estimateNonCustodialGas**](#estimatenoncustodialgas) | **POST** /api/wallet/non-custodial/estimate-gas | Estimate network fee from blockchain (all supported chains; not controlled by Mudbase)|
|[**generatePrivateKey**](#generateprivatekey) | **POST** /api/wallet/generate-key | Generate private key|
|[**getAllFees**](#getallfees) | **GET** /api/wallet/fees | Get all chain network fees (fee oracle snapshot)|
|[**getBalance**](#getbalance) | **GET** /api/wallet/{walletId}/balance | Get wallet balance|
|[**getCancelParams**](#getcancelparams) | **POST** /api/wallet/non-custodial/cancel | Get replacement tx params for cancel (stuck EVM tx)|
|[**getNetworkStatus**](#getnetworkstatus) | **GET** /api/wallet/network-status | Get network status (congestion + fee metric per chain)|
|[**getNonCustodialAddress**](#getnoncustodialaddress) | **GET** /api/wallet/non-custodial/addresses/{addressId} | Get non-custodial address by ID|
|[**getNonCustodialBalance**](#getnoncustodialbalance) | **GET** /api/wallet/non-custodial/addresses/{addressId}/balance | Get balance for a non-custodial address|
|[**getNonCustodialTransactionByHash**](#getnoncustodialtransactionbyhash) | **GET** /api/wallet/non-custodial/transactions/{txHash} | Get transaction by hash|
|[**getNonCustodialTransactions**](#getnoncustodialtransactions) | **GET** /api/wallet/non-custodial/addresses/{addressId}/transactions | Get transaction history for a non-custodial address|
|[**getSpeedUpParams**](#getspeedupparams) | **POST** /api/wallet/non-custodial/speed-up | Get replacement tx params for speed-up (stuck EVM tx)|
|[**getSupportedCurrencies**](#getsupportedcurrencies) | **GET** /api/wallet/currencies | Get supported currencies and chains|
|[**getTransaction**](#gettransaction) | **GET** /api/wallet/transactions/{transactionId} | Get transaction details|
|[**getTransactionHistory**](#gettransactionhistory) | **GET** /api/wallet/transactions | Get transaction history (custodial wallets; same monitoring as non-custodial)|
|[**getUserWallets**](#getuserwallets) | **GET** /api/wallet | Get user wallets|
|[**getWalletFeeConfig**](#getwalletfeeconfig) | **GET** /api/wallet/projects/{projectId}/fee-config | Get project fee configuration (for non-custodial / external users)|
|[**getWalletPrivateKey**](#getwalletprivatekey) | **GET** /api/wallet/{walletId}/private-key | Get wallet private key (WARNING: Sensitive data; for testing non-custodial)|
|[**getWalletWebhookLogs**](#getwalletwebhooklogs) | **GET** /api/wallet/non-custodial/webhooks/{webhookId}/logs | Get webhook delivery logs|
|[**listNonCustodialAddresses**](#listnoncustodialaddresses) | **GET** /api/wallet/non-custodial/addresses | List registered non-custodial addresses|
|[**listWalletWebhooks**](#listwalletwebhooks) | **GET** /api/wallet/non-custodial/webhooks | List wallet webhooks|
|[**registerNonCustodialAddress**](#registernoncustodialaddress) | **POST** /api/wallet/non-custodial/register-address | Register a non-custodial wallet address|
|[**testWalletWebhook**](#testwalletwebhook) | **POST** /api/wallet/non-custodial/webhooks/test | Test a webhook delivery (sends a single test payload)|
|[**updateNonCustodialAddress**](#updatenoncustodialaddress) | **PUT** /api/wallet/non-custodial/addresses/{addressId} | Update a monitored wallet address|
|[**updateWalletFeeConfig**](#updatewalletfeeconfig) | **PATCH** /api/wallet/projects/{projectId}/fee-config | Update project fee configuration (for non-custodial / external users)|
|[**updateWalletWebhook**](#updatewalletwebhook) | **PUT** /api/wallet/non-custodial/webhooks/{webhookId} | Update a wallet webhook|
|[**validateAddress**](#validateaddress) | **POST** /api/wallet/validate-address | Validate cryptocurrency address|
|[**withdraw**](#withdraw) | **POST** /api/wallet/{walletId}/withdraw | Prepare withdrawal (semi-transaction; broadcast via non-custodial)|

# **broadcastNonCustodialTransaction**
> BroadcastNonCustodialTransaction200Response broadcastNonCustodialTransaction(broadcastNonCustodialTransactionRequest)

Broadcast a transaction that has been signed client-side. The transaction must be fully signed before sending. The fromAddress must be registered and belong to your organization (POST /api/wallet/non-custodial/register-address). **Supported chains:** EVM (ethereum, polygon, arbitrum, optimism, base, bsc, binance, avalanche, celo), UTXO (bitcoin, litecoin, dogecoin), and chain-specific (tron, solana, ton, cardano). Use `binance` or `bsc` for BNB Smart Chain. **Testing with custodial:** You can create a wallet via POST /api/wallet/create, get its private key via GET /api/wallet/{walletId}/private-key, register that address with POST /api/wallet/non-custodial/register-address, then build a signed tx (using POST /api/wallet/estimate-network-fee or estimate-gas for fees) and broadcast it here to test the non-custodial flow end-to-end. 

### Example

```typescript
import {
    WalletApi,
    Configuration,
    BroadcastNonCustodialTransactionRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new WalletApi(configuration);

let broadcastNonCustodialTransactionRequest: BroadcastNonCustodialTransactionRequest; //

const { status, data } = await apiInstance.broadcastNonCustodialTransaction(
    broadcastNonCustodialTransactionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **broadcastNonCustodialTransactionRequest** | **BroadcastNonCustodialTransactionRequest**|  | |


### Return type

**BroadcastNonCustodialTransaction200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Transaction broadcast successfully |  -  |
|**400** | Bad request |  -  |
|**403** | Access denied |  -  |
|**401** | Authentication required |  -  |
|**429** | Rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **calculateWalletFee**
> CalculateWalletFee200Response calculateWalletFee(estimateNetworkFeeRequest)

Returns **network fee only**, estimated from the blockchain (RPC / fee APIs). No platform fee or project fee. **Same as POST /api/wallet/estimate-network-fee.** Prefer estimate-network-fee for clarity. Supported currencies: BTC, ETH, BNB, LTC, SOL, TRX, USDT, MATIC, AVAX, CELO, DOGE, TON, ADA. For USDT, `network` is required (ETH, BSC, TRX, SOL, POLYGON). Use `?fresh=1` or header `X-Fee-Fresh: true` for a fresh estimate (bypass cache) right before building the transaction for broadcast. 

### Example

```typescript
import {
    WalletApi,
    Configuration,
    EstimateNetworkFeeRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new WalletApi(configuration);

let estimateNetworkFeeRequest: EstimateNetworkFeeRequest; //
let fresh: '1'; //Bypass cache and fetch current fee (use right before building tx for broadcast) (optional) (default to undefined)

const { status, data } = await apiInstance.calculateWalletFee(
    estimateNetworkFeeRequest,
    fresh
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **estimateNetworkFeeRequest** | **EstimateNetworkFeeRequest**|  | |
| **fresh** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Bypass cache and fetch current fee (use right before building tx for broadcast) | (optional) defaults to undefined|


### Return type

**CalculateWalletFee200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Network fee only (from blockchain). No platform or project fee. |  -  |
|**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createWallet**
> CreateWallet201Response createWallet(createWalletRequest)

Create a custodial wallet. **Custodial is not used in production.** Use this to **test non-custodial flows**: create a wallet, get its private key (GET /api/wallet/{walletId}/private-key), register the same address with POST /api/wallet/non-custodial/register-address, then use estimate-network-fee and POST /api/wallet/non-custodial/broadcast to build and send a signed transaction. Transaction monitoring (pending/confirmed) applies to both custodial and non-custodial WalletTransaction records. 

### Example

```typescript
import {
    WalletApi,
    Configuration,
    CreateWalletRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new WalletApi(configuration);

let createWalletRequest: CreateWalletRequest; //

const { status, data } = await apiInstance.createWallet(
    createWalletRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createWalletRequest** | **CreateWalletRequest**|  | |


### Return type

**CreateWallet201Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Wallet created successfully |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createWalletWebhook**
> CreateWalletWebhook201Response createWalletWebhook(createWalletWebhookRequest)


### Example

```typescript
import {
    WalletApi,
    Configuration,
    CreateWalletWebhookRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new WalletApi(configuration);

let createWalletWebhookRequest: CreateWalletWebhookRequest; //

const { status, data } = await apiInstance.createWalletWebhook(
    createWalletWebhookRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createWalletWebhookRequest** | **CreateWalletWebhookRequest**|  | |


### Return type

**CreateWalletWebhook201Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Webhook created successfully |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |
|**429** | Rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteNonCustodialAddress**
> DeleteFunction200Response deleteNonCustodialAddress()

**Soft delete (default):** Omit **permanent** or set to false. The address is deactivated (isActive = false); it no longer appears in list or receives monitoring but the record remains for audit. **Permanent delete:** Set query **permanent=true** to remove the address record from the database. Use when you need to fully remove the monitored address. 

### Example

```typescript
import {
    WalletApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new WalletApi(configuration);

let addressId: string; // (default to undefined)
let permanent: boolean; //If true, permanently delete the address from the database; if false or omitted, only deactivate (soft delete) (optional) (default to false)

const { status, data } = await apiInstance.deleteNonCustodialAddress(
    addressId,
    permanent
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addressId** | [**string**] |  | defaults to undefined|
| **permanent** | [**boolean**] | If true, permanently delete the address from the database; if false or omitted, only deactivate (soft delete) | (optional) defaults to false|


### Return type

**DeleteFunction200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Address deactivated or permanently deleted |  -  |
|**404** | Resource not found |  -  |
|**401** | Authentication required |  -  |
|**429** | Rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteWalletWebhook**
> DeleteFunction200Response deleteWalletWebhook()


### Example

```typescript
import {
    WalletApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new WalletApi(configuration);

let webhookId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteWalletWebhook(
    webhookId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webhookId** | [**string**] |  | defaults to undefined|


### Return type

**DeleteFunction200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Webhook deleted successfully |  -  |
|**404** | Resource not found |  -  |
|**401** | Authentication required |  -  |
|**429** | Rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **estimateNetworkFee**
> EstimateNetworkFee200Response estimateNetworkFee(estimateNetworkFeeRequest)

Returns **network fee only** from the blockchain. **Preferred endpoint** for network fee. Uses a fee oracle: fees are polled every 15–20s and cached, so responses are fast and RPC load is minimal (same strategy as large wallets). No platform fee. Request/response identical to POST /api/wallet/calculate-fee (which is an alias). See docs/FEE_ARCHITECTURE.md. Supported currencies: BTC, ETH, BNB, LTC, SOL, TRX, USDT, MATIC, AVAX, CELO, DOGE, TON, ADA. For USDT, `network` is required (ETH, BSC, TRX, SOL, POLYGON). **Fresh fee before broadcast:** To avoid stuck transactions, get a fresh estimate right before building/signing: use query `?fresh=1` or header `X-Fee-Fresh: true` to bypass cache. 

### Example

```typescript
import {
    WalletApi,
    Configuration,
    EstimateNetworkFeeRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new WalletApi(configuration);

let estimateNetworkFeeRequest: EstimateNetworkFeeRequest; //
let fresh: '1'; //Bypass cache and fetch current fee from RPC/fee API (use right before building tx for broadcast) (optional) (default to undefined)

const { status, data } = await apiInstance.estimateNetworkFee(
    estimateNetworkFeeRequest,
    fresh
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **estimateNetworkFeeRequest** | **EstimateNetworkFeeRequest**|  | |
| **fresh** | [**&#39;1&#39;**]**Array<&#39;1&#39;>** | Bypass cache and fetch current fee from RPC/fee API (use right before building tx for broadcast) | (optional) defaults to undefined|


### Return type

**EstimateNetworkFee200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Network fee only (from blockchain). No platform or project fee. |  -  |
|**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **estimateNonCustodialGas**
> EstimateNonCustodialGas200Response estimateNonCustodialGas(estimateNonCustodialGasRequest)

**Network fee (from blockchain only).** Returns network fee **estimated directly from the blockchain** via RPC or fee APIs. **Not controlled by Mudbase.** Both POST /api/wallet/estimate-network-fee (or calculate-fee) and this endpoint return network fee only; use either for gas/fee display. This endpoint is chain-oriented and supports full transaction shape for EVM. **EVM chains:** ethereum, polygon, arbitrum, optimism, base, bsc, binance, avalanche, celo — require `transaction` (from, and to/value or tokenAddress/amount). Response includes gasLimit, gasPrice, networkFee, estimatedTime, currency. **Non-EVM chains:** bitcoin, litecoin, dogecoin, solana, tron, ton, cardano — only `chain` is required; `transaction` is optional/ignored. Returns networkFee, estimatedTime, currency (and e.g. satPerVb for UTXO). See docs/FEE_ARCHITECTURE.md. Results cached 15s. 

### Example

```typescript
import {
    WalletApi,
    Configuration,
    EstimateNonCustodialGasRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new WalletApi(configuration);

let estimateNonCustodialGasRequest: EstimateNonCustodialGasRequest; //

const { status, data } = await apiInstance.estimateNonCustodialGas(
    estimateNonCustodialGasRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **estimateNonCustodialGasRequest** | **EstimateNonCustodialGasRequest**|  | |


### Return type

**EstimateNonCustodialGas200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Network fee from blockchain RPC (not from Mudbase logic) |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |
|**429** | Rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generatePrivateKey**
> GeneratePrivateKey200Response generatePrivateKey(generatePrivateKeyRequest)


### Example

```typescript
import {
    WalletApi,
    Configuration,
    GeneratePrivateKeyRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new WalletApi(configuration);

let generatePrivateKeyRequest: GeneratePrivateKeyRequest; //

const { status, data } = await apiInstance.generatePrivateKey(
    generatePrivateKeyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **generatePrivateKeyRequest** | **GeneratePrivateKeyRequest**|  | |


### Return type

**GeneratePrivateKey200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Private key generated |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAllFees**
> GetAllFees200Response getAllFees()

Returns **all chain network fees** in one call. Reads from the fee oracle cache (no RPC during the request). Each chain returns the **full fee object** (networkFee, gasPriceGwei, congestion, estimatedTime, feeTiers for EVM, etc.) for frontend/UX. Use for dashboards or \"current fees\" screens. 

### Example

```typescript
import {
    WalletApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new WalletApi(configuration);

const { status, data } = await apiInstance.getAllFees();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetAllFees200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Fee oracle snapshot (chain -&gt; full fee object) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getBalance**
> GetBalance200Response getBalance()


### Example

```typescript
import {
    WalletApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new WalletApi(configuration);

let walletId: string; // (default to undefined)

const { status, data } = await apiInstance.getBalance(
    walletId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **walletId** | [**string**] |  | defaults to undefined|


### Return type

**GetBalance200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Wallet balance |  -  |
|**404** | Resource not found |  -  |
|**401** | Authentication required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCancelParams**
> GetCancelParams200Response getCancelParams(getCancelParamsRequest)

Returns **replacement transaction params** to cancel a stuck EVM transaction (same nonce, to=self, value=0, data=0x, higher gas). Client signs and broadcasts via POST /api/wallet/non-custodial/broadcast. Address must be registered for your organization. EVM chains only. 

### Example

```typescript
import {
    WalletApi,
    Configuration,
    GetCancelParamsRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new WalletApi(configuration);

let getCancelParamsRequest: GetCancelParamsRequest; //

const { status, data } = await apiInstance.getCancelParams(
    getCancelParamsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **getCancelParamsRequest** | **GetCancelParamsRequest**|  | |


### Return type

**GetCancelParams200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Cancel tx params (client signs and broadcasts via /broadcast) |  -  |
|**400** | Bad request |  -  |
|**403** | Access denied |  -  |
|**404** | Resource not found |  -  |
|**401** | Authentication required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getNetworkStatus**
> GetNetworkStatus200Response getNetworkStatus()

Returns **network status** per chain (congestion and main fee metric). Use to show network health before sending transactions. Same data as GET /fees but trimmed to congestion + gasPriceGwei (EVM) or satPerVb (UTXO) and networkFee. 

### Example

```typescript
import {
    WalletApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new WalletApi(configuration);

const { status, data } = await apiInstance.getNetworkStatus();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetNetworkStatus200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Network status per chain |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getNonCustodialAddress**
> NonCustodialAddressResponse getNonCustodialAddress()


### Example

```typescript
import {
    WalletApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new WalletApi(configuration);

let addressId: string; // (default to undefined)

const { status, data } = await apiInstance.getNonCustodialAddress(
    addressId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addressId** | [**string**] |  | defaults to undefined|


### Return type

**NonCustodialAddressResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Address details |  -  |
|**404** | Resource not found |  -  |
|**401** | Authentication required |  -  |
|**429** | Rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getNonCustodialBalance**
> GetNonCustodialBalance200Response getNonCustodialBalance()


### Example

```typescript
import {
    WalletApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new WalletApi(configuration);

let addressId: string; // (default to undefined)

const { status, data } = await apiInstance.getNonCustodialBalance(
    addressId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addressId** | [**string**] |  | defaults to undefined|


### Return type

**GetNonCustodialBalance200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Balance information |  -  |
|**404** | Resource not found |  -  |
|**401** | Authentication required |  -  |
|**429** | Rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getNonCustodialTransactionByHash**
> GetNonCustodialTransactionByHash200Response getNonCustodialTransactionByHash()

Returns a transaction by its hash. The **chain** query parameter is required because the same hash format can exist on different chains (e.g. 0x-style on EVM chains). 

### Example

```typescript
import {
    WalletApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new WalletApi(configuration);

let txHash: string; //Transaction hash (e.g. 0x... for EVM, or block explorer format for UTXO) (default to undefined)
let chain: 'ethereum' | 'binance' | 'polygon' | 'celo' | 'bitcoin' | 'litecoin' | 'solana' | 'tron' | 'ripple' | 'cardano' | 'dogecoin' | 'ton'; //Chain the transaction belongs to (required for lookup) (default to undefined)

const { status, data } = await apiInstance.getNonCustodialTransactionByHash(
    txHash,
    chain
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **txHash** | [**string**] | Transaction hash (e.g. 0x... for EVM, or block explorer format for UTXO) | defaults to undefined|
| **chain** | [**&#39;ethereum&#39; | &#39;binance&#39; | &#39;polygon&#39; | &#39;celo&#39; | &#39;bitcoin&#39; | &#39;litecoin&#39; | &#39;solana&#39; | &#39;tron&#39; | &#39;ripple&#39; | &#39;cardano&#39; | &#39;dogecoin&#39; | &#39;ton&#39;**]**Array<&#39;ethereum&#39; &#124; &#39;binance&#39; &#124; &#39;polygon&#39; &#124; &#39;celo&#39; &#124; &#39;bitcoin&#39; &#124; &#39;litecoin&#39; &#124; &#39;solana&#39; &#124; &#39;tron&#39; &#124; &#39;ripple&#39; &#124; &#39;cardano&#39; &#124; &#39;dogecoin&#39; &#124; &#39;ton&#39;>** | Chain the transaction belongs to (required for lookup) | defaults to undefined|


### Return type

**GetNonCustodialTransactionByHash200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Transaction details |  -  |
|**400** | Bad Request - missing or invalid chain (add ?chain&#x3D;ethereum) |  -  |
|**404** | Resource not found |  -  |
|**401** | Authentication required |  -  |
|**429** | Rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getNonCustodialTransactions**
> GetNonCustodialTransactions200Response getNonCustodialTransactions()


### Example

```typescript
import {
    WalletApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new WalletApi(configuration);

let addressId: string; // (default to undefined)
let limit: number; // (optional) (default to 50)
let page: number; // (optional) (default to 1)

const { status, data } = await apiInstance.getNonCustodialTransactions(
    addressId,
    limit,
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addressId** | [**string**] |  | defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to 50|
| **page** | [**number**] |  | (optional) defaults to 1|


### Return type

**GetNonCustodialTransactions200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Transaction history |  -  |
|**404** | Resource not found |  -  |
|**401** | Authentication required |  -  |
|**429** | Rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSpeedUpParams**
> GetSpeedUpParams200Response getSpeedUpParams(getSpeedUpParamsRequest)

Returns **replacement transaction params** for a stuck EVM transaction (same nonce, same to/value/data, higher gas). Client signs the replacement and broadcasts via POST /api/wallet/non-custodial/broadcast. Address must be registered for your organization. Use when a tx has been pending >5 min (stuck). EVM chains only. 

### Example

```typescript
import {
    WalletApi,
    Configuration,
    GetSpeedUpParamsRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new WalletApi(configuration);

let getSpeedUpParamsRequest: GetSpeedUpParamsRequest; //

const { status, data } = await apiInstance.getSpeedUpParams(
    getSpeedUpParamsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **getSpeedUpParamsRequest** | **GetSpeedUpParamsRequest**|  | |


### Return type

**GetSpeedUpParams200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Replacement tx params (client signs and broadcasts via /broadcast) |  -  |
|**400** | Bad request |  -  |
|**403** | Access denied |  -  |
|**404** | Resource not found |  -  |
|**401** | Authentication required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSupportedCurrencies**
> GetSupportedCurrencies200Response getSupportedCurrencies()

Returns the list of **platform-supported cryptocurrencies and chains** for non-custodial wallets, broadcast, and multi-chain use. Custodial wallet is no longer used in production; this endpoint is the source of truth for supported chains and currencies. **Supported:** BTC, LTC, DOGE, ETH, ETC, CELO, SOL, TRX, TON, Polygon (MATIC), Arbitrum, Optimism, Base, BSC/BNB, Avalanche (AVAX), Cardano (ADA), USDT. Each item includes **code** (currency symbol), **name** (display name), **chain** (chain id for API calls). USDT includes **networks** (ETH, BSC, TRX, SOL, POLYGON). Use **chain** with non-custodial endpoints (register-address, broadcast, estimate-gas). Use **code** for display and fee/currency selection. This is a public endpoint - no authentication required. 

### Example

```typescript
import {
    WalletApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new WalletApi(configuration);

const { status, data } = await apiInstance.getSupportedCurrencies();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetSupportedCurrencies200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Supported currencies and chains (currencies array and count) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTransaction**
> GetTransaction200Response getTransaction()


### Example

```typescript
import {
    WalletApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new WalletApi(configuration);

let transactionId: string; // (default to undefined)

const { status, data } = await apiInstance.getTransaction(
    transactionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transactionId** | [**string**] |  | defaults to undefined|


### Return type

**GetTransaction200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Transaction details |  -  |
|**404** | Resource not found |  -  |
|**401** | Authentication required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTransactionHistory**
> GetTransactionHistory200Response getTransactionHistory()

Returns transaction history for custodial wallets. Transactions are stored and monitored the same way as non-custodial (WalletTransaction); status updates (pending, broadcast, confirmed, failed) and stuck detection apply to both. 

### Example

```typescript
import {
    WalletApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new WalletApi(configuration);

let walletId: string; // (optional) (default to undefined)
let limit: number; // (optional) (default to 20)
let page: number; // (optional) (default to 1)

const { status, data } = await apiInstance.getTransactionHistory(
    walletId,
    limit,
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **walletId** | [**string**] |  | (optional) defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to 20|
| **page** | [**number**] |  | (optional) defaults to 1|


### Return type

**GetTransactionHistory200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Transaction history |  -  |
|**401** | Authentication required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUserWallets**
> GetUserWallets200Response getUserWallets()


### Example

```typescript
import {
    WalletApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new WalletApi(configuration);

let projectId: string; // (optional) (default to undefined)
let currency: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getUserWallets(
    projectId,
    currency
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | (optional) defaults to undefined|
| **currency** | [**string**] |  | (optional) defaults to undefined|


### Return type

**GetUserWallets200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | User wallets list (custodial; for testing) |  -  |
|**401** | Authentication required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getWalletFeeConfig**
> GetWalletFeeConfig200Response getWalletFeeConfig()

Get project-level fee settings (enabled flag and fee percentage). **For non-custodial / external users** — e.g. when your app charges a fee on payouts or transfers. Custodial wallet is no longer used in production. Applies to all supported chains/currencies for that project. 

### Example

```typescript
import {
    WalletApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new WalletApi(configuration);

let projectId: string; //Project ID (default to undefined)

const { status, data } = await apiInstance.getWalletFeeConfig(
    projectId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] | Project ID | defaults to undefined|


### Return type

**GetWalletFeeConfig200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Fee configuration (applies to all supported currencies/chains for this project) |  -  |
|**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getWalletPrivateKey**
> GetWalletPrivateKey200Response getWalletPrivateKey()

Returns the wallet private key. **For testing non-custodial only:** use this key to sign a transaction locally, then register the wallet address via POST /api/wallet/non-custodial/register-address and broadcast the signed tx via POST /api/wallet/non-custodial/broadcast. 

### Example

```typescript
import {
    WalletApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new WalletApi(configuration);

let walletId: string; // (default to undefined)

const { status, data } = await apiInstance.getWalletPrivateKey(
    walletId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **walletId** | [**string**] |  | defaults to undefined|


### Return type

**GetWalletPrivateKey200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Private key (shown only once) |  -  |
|**403** | Access denied |  -  |
|**404** | Resource not found |  -  |
|**401** | Authentication required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getWalletWebhookLogs**
> GetWalletWebhookLogs200Response getWalletWebhookLogs()


### Example

```typescript
import {
    WalletApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new WalletApi(configuration);

let webhookId: string; // (default to undefined)
let limit: number; // (optional) (default to 50)

const { status, data } = await apiInstance.getWalletWebhookLogs(
    webhookId,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webhookId** | [**string**] |  | defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to 50|


### Return type

**GetWalletWebhookLogs200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Webhook delivery logs |  -  |
|**401** | Authentication required |  -  |
|**404** | Resource not found |  -  |
|**429** | Rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listNonCustodialAddresses**
> ListNonCustodialAddresses200Response listNonCustodialAddresses()


### Example

```typescript
import {
    WalletApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new WalletApi(configuration);

let chain: 'ethereum' | 'binance' | 'bsc' | 'polygon' | 'arbitrum' | 'optimism' | 'base' | 'avalanche' | 'celo' | 'bitcoin' | 'litecoin' | 'dogecoin' | 'solana' | 'tron' | 'ripple' | 'cardano' | 'ton'; //Filter by chain (optional) (optional) (default to undefined)
let projectId: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.listNonCustodialAddresses(
    chain,
    projectId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chain** | [**&#39;ethereum&#39; | &#39;binance&#39; | &#39;bsc&#39; | &#39;polygon&#39; | &#39;arbitrum&#39; | &#39;optimism&#39; | &#39;base&#39; | &#39;avalanche&#39; | &#39;celo&#39; | &#39;bitcoin&#39; | &#39;litecoin&#39; | &#39;dogecoin&#39; | &#39;solana&#39; | &#39;tron&#39; | &#39;ripple&#39; | &#39;cardano&#39; | &#39;ton&#39;**]**Array<&#39;ethereum&#39; &#124; &#39;binance&#39; &#124; &#39;bsc&#39; &#124; &#39;polygon&#39; &#124; &#39;arbitrum&#39; &#124; &#39;optimism&#39; &#124; &#39;base&#39; &#124; &#39;avalanche&#39; &#124; &#39;celo&#39; &#124; &#39;bitcoin&#39; &#124; &#39;litecoin&#39; &#124; &#39;dogecoin&#39; &#124; &#39;solana&#39; &#124; &#39;tron&#39; &#124; &#39;ripple&#39; &#124; &#39;cardano&#39; &#124; &#39;ton&#39;>** | Filter by chain (optional) | (optional) defaults to undefined|
| **projectId** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ListNonCustodialAddresses200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of registered addresses |  -  |
|**401** | Authentication required |  -  |
|**429** | Rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listWalletWebhooks**
> ListWalletWebhooks200Response listWalletWebhooks()


### Example

```typescript
import {
    WalletApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new WalletApi(configuration);

let projectId: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.listWalletWebhooks(
    projectId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ListWalletWebhooks200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of webhooks |  -  |
|**401** | Authentication required |  -  |
|**429** | Rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registerNonCustodialAddress**
> NonCustodialAddressResponse registerNonCustodialAddress(registerNonCustodialAddressRequest)

Register a public wallet address for monitoring and indexing. All key operations (generation, signing) occur client-side only. 

### Example

```typescript
import {
    WalletApi,
    Configuration,
    RegisterNonCustodialAddressRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new WalletApi(configuration);

let registerNonCustodialAddressRequest: RegisterNonCustodialAddressRequest; //

const { status, data } = await apiInstance.registerNonCustodialAddress(
    registerNonCustodialAddressRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **registerNonCustodialAddressRequest** | **RegisterNonCustodialAddressRequest**|  | |


### Return type

**NonCustodialAddressResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Address registered successfully |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |
|**429** | Rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **testWalletWebhook**
> TestWalletWebhook200Response testWalletWebhook(testWalletWebhookRequest)


### Example

```typescript
import {
    WalletApi,
    Configuration,
    TestWalletWebhookRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new WalletApi(configuration);

let testWalletWebhookRequest: TestWalletWebhookRequest; //

const { status, data } = await apiInstance.testWalletWebhook(
    testWalletWebhookRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **testWalletWebhookRequest** | **TestWalletWebhookRequest**|  | |


### Return type

**TestWalletWebhook200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Test result |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |
|**429** | Rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateNonCustodialAddress**
> UpdateNonCustodialAddress200Response updateNonCustodialAddress()

Update metadata for a registered non-custodial address. Only **label** and **derivationPath** can be updated; address and chain are immutable. 

### Example

```typescript
import {
    WalletApi,
    Configuration,
    UpdateNonCustodialAddressRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new WalletApi(configuration);

let addressId: string; // (default to undefined)
let updateNonCustodialAddressRequest: UpdateNonCustodialAddressRequest; // (optional)

const { status, data } = await apiInstance.updateNonCustodialAddress(
    addressId,
    updateNonCustodialAddressRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateNonCustodialAddressRequest** | **UpdateNonCustodialAddressRequest**|  | |
| **addressId** | [**string**] |  | defaults to undefined|


### Return type

**UpdateNonCustodialAddress200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Address updated successfully |  -  |
|**400** | Validation error (e.g. label too long, invalid derivation path) |  -  |
|**404** | Resource not found |  -  |
|**401** | Authentication required |  -  |
|**429** | Rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateWalletFeeConfig**
> UpdateWalletFeeConfig200Response updateWalletFeeConfig()

Update project-level fee settings. **For non-custodial / external users** — e.g. fee charged on payouts or transfers. Custodial wallet is no longer used in production. Applies to **all supported currencies** (BTC, ETH, BNB, LTC, SOL, TRX, USDT). **feePercentage** is a decimal: use `0.01` for 1%, `0.005` for 0.5%, etc. (min 0, max 1). 

### Example

```typescript
import {
    WalletApi,
    Configuration,
    UpdateWalletFeeConfigRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new WalletApi(configuration);

let projectId: string; //Project ID (default to undefined)
let updateWalletFeeConfigRequest: UpdateWalletFeeConfigRequest; // (optional)

const { status, data } = await apiInstance.updateWalletFeeConfig(
    projectId,
    updateWalletFeeConfigRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateWalletFeeConfigRequest** | **UpdateWalletFeeConfigRequest**|  | |
| **projectId** | [**string**] | Project ID | defaults to undefined|


### Return type

**UpdateWalletFeeConfig200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Fee configuration updated |  -  |
|**400** | Bad request |  -  |
|**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateWalletWebhook**
> UpdateWalletWebhook200Response updateWalletWebhook(updateWalletWebhookRequest)


### Example

```typescript
import {
    WalletApi,
    Configuration,
    UpdateWalletWebhookRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new WalletApi(configuration);

let webhookId: string; // (default to undefined)
let updateWalletWebhookRequest: UpdateWalletWebhookRequest; //

const { status, data } = await apiInstance.updateWalletWebhook(
    webhookId,
    updateWalletWebhookRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateWalletWebhookRequest** | **UpdateWalletWebhookRequest**|  | |
| **webhookId** | [**string**] |  | defaults to undefined|


### Return type

**UpdateWalletWebhook200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Webhook updated successfully |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |
|**404** | Resource not found |  -  |
|**429** | Rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **validateAddress**
> ValidateAddress200Response validateAddress(validateAddressRequest)


### Example

```typescript
import {
    WalletApi,
    Configuration,
    ValidateAddressRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new WalletApi(configuration);

let validateAddressRequest: ValidateAddressRequest; //

const { status, data } = await apiInstance.validateAddress(
    validateAddressRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **validateAddressRequest** | **ValidateAddressRequest**|  | |


### Return type

**ValidateAddress200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Address validation result |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **withdraw**
> Withdraw200Response withdraw(withdrawRequest)

**Semi-transaction:** Builds and signs the withdrawal but does **not** broadcast. Returns `signedTx`, `chain`, and `fromAddress` so the client can broadcast via POST /api/wallet/non-custodial/broadcast. The wallet address must be registered for your organization before broadcasting. Supports all platform chains/currencies (EVM, UTXO, Tron, Solana, USDT on ETH/BSC/TRX/SOL/POLYGON). Use for testing the non-custodial flow: create custodial wallet, get private key, register address, then call withdraw to get signed tx and broadcast it manually. 

### Example

```typescript
import {
    WalletApi,
    Configuration,
    WithdrawRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new WalletApi(configuration);

let walletId: string; // (default to undefined)
let withdrawRequest: WithdrawRequest; //

const { status, data } = await apiInstance.withdraw(
    walletId,
    withdrawRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **withdrawRequest** | **WithdrawRequest**|  | |
| **walletId** | [**string**] |  | defaults to undefined|


### Return type

**Withdraw200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Semi-transaction ready; broadcast via POST /api/wallet/non-custodial/broadcast |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |
|**403** | Access denied |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

