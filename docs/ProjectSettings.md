# ProjectSettings

Project-level settings. Toggles for verification and default user status apply to project-based and role-based signup. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowAnonymousAuth** | **boolean** | Allow anonymous (unauthenticated) users | [optional] [default to true]
**requireEmailVerification** | **boolean** | When true, users who sign up with email do not receive a token until they verify their email; login is blocked until verified. | [optional] [default to true]
**requirePhoneVerification** | **boolean** | When true, users who sign in with phone (e.g. OTP) must have verified their phone before receiving a token. | [optional] [default to false]
**defaultUserAccountStatus** | **string** | Default account status for new signups. **active** &#x3D; user can use the app immediately. **pending** &#x3D; user must be approved by an org owner/admin (PATCH org user status to active) before they can perform protected operations.  | [optional] [default to DefaultUserAccountStatusEnum_Active]
**enableRealtime** | **boolean** |  | [optional] [default to true]
**enableStorage** | **boolean** |  | [optional] [default to true]
**enableFunctions** | **boolean** |  | [optional] [default to false]

## Example

```typescript
import { ProjectSettings } from 'mudbase-sdk';

const instance: ProjectSettings = {
    allowAnonymousAuth,
    requireEmailVerification,
    requirePhoneVerification,
    defaultUserAccountStatus,
    enableRealtime,
    enableStorage,
    enableFunctions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
