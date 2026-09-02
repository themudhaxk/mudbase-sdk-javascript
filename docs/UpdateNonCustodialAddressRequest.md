# UpdateNonCustodialAddressRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **string** | Human-readable label for the address | [optional] [default to undefined]
**derivationPath** | **string** | BIP derivation path (e.g. m/44\&#39;/60\&#39;/0\&#39;/0/0); can be set to null to clear | [optional] [default to undefined]

## Example

```typescript
import { UpdateNonCustodialAddressRequest } from 'mudbase-sdk';

const instance: UpdateNonCustodialAddressRequest = {
    label,
    derivationPath,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
