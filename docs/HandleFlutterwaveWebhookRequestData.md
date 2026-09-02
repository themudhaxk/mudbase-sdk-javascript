# HandleFlutterwaveWebhookRequestData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [optional] [default to undefined]
**tx_ref** | **string** |  | [optional] [default to undefined]
**flw_ref** | **string** |  | [optional] [default to undefined]
**amount** | **number** |  | [optional] [default to undefined]
**currency** | **string** |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**customer** | [**HandleFlutterwaveWebhookRequestDataCustomer**](HandleFlutterwaveWebhookRequestDataCustomer.md) |  | [optional] [default to undefined]
**meta** | **object** | orgId, projectId, planId, billingCycle; or isPaymentProcessing true for fiat payment-processing | [optional] [default to undefined]

## Example

```typescript
import { HandleFlutterwaveWebhookRequestData } from 'mudbase-sdk';

const instance: HandleFlutterwaveWebhookRequestData = {
    id,
    tx_ref,
    flw_ref,
    amount,
    currency,
    status,
    customer,
    meta,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
