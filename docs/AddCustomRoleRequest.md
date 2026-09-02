# AddCustomRoleRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**slug** | **string** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**signupEndpoint** | **string** |  | [default to undefined]
**requiresApproval** | **boolean** |  | [optional] [default to undefined]
**requiresPayment** | **boolean** |  | [optional] [default to undefined]
**requiresKYC** | **boolean** |  | [optional] [default to undefined]
**defaultPermissions** | [**Array&lt;AddCustomRoleRequestDefaultPermissionsInner&gt;**](AddCustomRoleRequestDefaultPermissionsInner.md) | Optional global/base permissions. For collection-level CRUD use &#x60;collectionPermissions&#x60;. | [optional] [default to undefined]
**collectionPermissions** | [**{ [key: string]: CreateRoleRequestCollectionPermissionsValue; }**](CreateRoleRequestCollectionPermissionsValue.md) | Per-collection CRUD map (collection slug &#x3D;&gt; actions or {actions,conditions}). | [optional] [default to undefined]
**metadata** | **object** |  | [optional] [default to undefined]
**featurePermissions** | **{ [key: string]: { [key: string]: boolean; }; }** | App JWT feature toggles stored on &#x60;MultiRoleFeature.roles[].featurePermissions&#x60;. Structure: &#x60;{ [resource: string]: { [action: string]: boolean } }&#x60;. Only **explicit &#x60;false&#x60;** on a key that matches the resolved gate denies; missing resources/actions imply no extra denial.  **Canonical map** of &#x60;(resource, action)&#x60; pairs enforced at runtime: &#x60;services/appRoleFeatureMap.js&#x60; (&#x60;RULES&#x60;). Regenerate inventory: &#x60;node scripts/verify-app-role-feature-map.js&#x60;.  **Messaging** also accepts legacy keys (&#x60;email&#x60;, &#x60;sms&#x60;, &#x60;push&#x60;, &#x60;history&#x60;, &#x60;stats&#x60;) alongside &#x60;send_email&#x60;, &#x60;send_sms&#x60;, &#x60;send_push&#x60;, &#x60;read_history&#x60;, &#x60;read_stats&#x60; — see &#x60;services/appRoleFeatureService.js&#x60; (&#x60;MESSAGING_SYNONYMS&#x60;).  | Resource | Actions (boolean keys under the resource object) | |----------|--------------------------------------------------| | &#x60;messaging&#x60; | &#x60;send_email&#x60;, &#x60;send_sms&#x60;, &#x60;send_push&#x60;, &#x60;read_history&#x60;, &#x60;read_stats&#x60; (legacy: &#x60;email&#x60;, &#x60;sms&#x60;, &#x60;push&#x60;, &#x60;history&#x60;, &#x60;stats&#x60;) | | &#x60;integration&#x60; | &#x60;read&#x60;, &#x60;create&#x60;, &#x60;update&#x60;, &#x60;delete&#x60;, &#x60;execute&#x60;, &#x60;test&#x60;, &#x60;export&#x60;, &#x60;read_usage&#x60; | | &#x60;functions&#x60; | &#x60;create&#x60;, &#x60;read&#x60;, &#x60;update&#x60;, &#x60;delete&#x60;, &#x60;execute&#x60;, &#x60;simulate&#x60; | | &#x60;data&#x60; | &#x60;create&#x60;, &#x60;read&#x60;, &#x60;update&#x60;, &#x60;delete&#x60; | | &#x60;search&#x60; | &#x60;query&#x60;, &#x60;suggestions&#x60;, &#x60;read_analytics&#x60; | | &#x60;usage&#x60; | &#x60;read&#x60; | | &#x60;storage&#x60; | &#x60;read&#x60;, &#x60;create&#x60;, &#x60;update&#x60;, &#x60;delete&#x60;, &#x60;upload&#x60; | | &#x60;chat&#x60; | &#x60;read&#x60;, &#x60;create&#x60;, &#x60;update&#x60;, &#x60;delete&#x60; | | &#x60;realtime&#x60; | &#x60;read_analytics&#x60;, &#x60;read_active_users&#x60;, &#x60;presence&#x60;, &#x60;read_throughput&#x60;, &#x60;read_history&#x60; | | &#x60;roleElevation&#x60; | &#x60;request&#x60;, &#x60;status&#x60;, &#x60;documents&#x60; | | &#x60;webhooks&#x60; | &#x60;config_read&#x60;, &#x60;config_update&#x60;, &#x60;test_transformation&#x60; |  | [optional] [default to undefined]

## Example

```typescript
import { AddCustomRoleRequest } from 'mudbase-sdk';

const instance: AddCustomRoleRequest = {
    slug,
    name,
    description,
    signupEndpoint,
    requiresApproval,
    requiresPayment,
    requiresKYC,
    defaultPermissions,
    collectionPermissions,
    metadata,
    featurePermissions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
