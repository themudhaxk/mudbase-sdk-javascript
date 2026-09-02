# CreateCheckoutSession200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**checkoutUrl** | **string** | Hosted payment URL (same as authorizationUrl) | [optional] [default to undefined]
**authorizationUrl** | **string** | Hosted payment URL | [optional] [default to undefined]
**accessCode** | **string** | Gateway access code | [optional] [default to undefined]
**reference** | **string** | Transaction reference (mudbase_...) for verify-payment | [optional] [default to undefined]
**amount** | **number** |  | [optional] [default to undefined]
**currency** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { CreateCheckoutSession200ResponseData } from 'mudbase-sdk';

const instance: CreateCheckoutSession200ResponseData = {
    checkoutUrl,
    authorizationUrl,
    accessCode,
    reference,
    amount,
    currency,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
