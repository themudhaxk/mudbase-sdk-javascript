# ConfigureOAuthProviderRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **boolean** | Whether the OAuth provider is enabled | [default to undefined]
**clientId** | **string** | OAuth client ID from the provider | [default to undefined]
**clientSecret** | **string** | OAuth client secret from the provider | [default to undefined]
**scope** | **Array&lt;string&gt;** | OAuth scopes to request | [optional] [default to undefined]
**displayName** | **string** | Custom display name for the provider | [optional] [default to undefined]

## Example

```typescript
import { ConfigureOAuthProviderRequest } from 'mudbase-sdk';

const instance: ConfigureOAuthProviderRequest = {
    enabled,
    clientId,
    clientSecret,
    scope,
    displayName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
