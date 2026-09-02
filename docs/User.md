# User


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** |  | [optional] [default to undefined]
**email** | **string** |  | [optional] [default to undefined]
**firstName** | **string** |  | [optional] [default to undefined]
**lastName** | **string** |  | [optional] [default to undefined]
**fullName** | **string** |  | [optional] [default to undefined]
**avatar** | **string** |  | [optional] [default to undefined]
**role** | **string** |  | [optional] [default to undefined]
**customRole** | **string** | Application-level role slug from the project\&#39;s Multi-Role feature (e.g. \&quot;customer\&quot;, \&quot;seller\&quot;). Null for org-level (org/admin/member/viewer) users who aren\&#39;t project end-users. | [optional] [default to undefined]
**isAnonymous** | **boolean** | True for a guest session created via POST /api/auth/anonymous that hasn\&#39;t been converted to a full account yet. | [optional] [default to undefined]
**emailVerified** | **boolean** |  | [optional] [default to undefined]
**phoneVerified** | **boolean** |  | [optional] [default to undefined]
**twoFactorEnabled** | **boolean** |  | [optional] [default to undefined]
**lastLogin** | **string** |  | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]
**updatedAt** | **string** |  | [optional] [default to undefined]
**org** | [**OrganizationSummary**](OrganizationSummary.md) |  | [optional] [default to undefined]

## Example

```typescript
import { User } from 'mudbase-sdk';

const instance: User = {
    _id,
    email,
    firstName,
    lastName,
    fullName,
    avatar,
    role,
    customRole,
    isAnonymous,
    emailVerified,
    phoneVerified,
    twoFactorEnabled,
    lastLogin,
    createdAt,
    updatedAt,
    org,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
