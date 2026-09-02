# ExportUserData200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exportedAt** | **string** |  | [optional] [default to undefined]
**user** | [**User**](User.md) |  | [optional] [default to undefined]
**projects** | **Array&lt;{ [key: string]: any; }&gt;** |  | [optional] [default to undefined]
**wallets** | **Array&lt;{ [key: string]: any; }&gt;** |  | [optional] [default to undefined]
**transactions** | **Array&lt;{ [key: string]: any; }&gt;** |  | [optional] [default to undefined]
**files** | **Array&lt;{ [key: string]: any; }&gt;** |  | [optional] [default to undefined]
**integrations** | **Array&lt;{ [key: string]: any; }&gt;** |  | [optional] [default to undefined]
**apiKeys** | **Array&lt;{ [key: string]: any; }&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { ExportUserData200Response } from 'mudbase-sdk';

const instance: ExportUserData200Response = {
    exportedAt,
    user,
    projects,
    wallets,
    transactions,
    files,
    integrations,
    apiKeys,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
