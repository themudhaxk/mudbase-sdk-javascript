# AuthConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**providers** | [**Array&lt;AuthProvider&gt;**](AuthProvider.md) |  | [optional] [default to undefined]
**notifyOnNewSignIn** | **boolean** | When true, a \&quot;new sign-in detected\&quot; email is sent to the user on each project-based sign-in (local or OAuth). Counts against the org\&#39;s messaging/email plan quota. Default false. Organization-based sign-in always sends this email (no quota deduction).  | [optional] [default to false]

## Example

```typescript
import { AuthConfig } from 'mudbase-sdk';

const instance: AuthConfig = {
    providers,
    notifyOnNewSignIn,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
