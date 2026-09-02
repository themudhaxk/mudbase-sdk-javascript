# UpdateMultiRoleSettingsRequestSettings

Feature toggles for signup behavior (not per-role approval flags).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowMultipleRoles** | **boolean** | Whether an end user may hold multiple app roles. | [optional] [default to undefined]
**requireRoleSelection** | **boolean** | If true, signup must pick a role; if false and &#x60;autoAssignDefault&#x60; is true, &#x60;defaultRole&#x60; is used when omitted. | [optional] [default to undefined]
**autoAssignDefault** | **boolean** | When true, assigns &#x60;defaultRole&#x60; when the client does not specify a role at signup. | [optional] [default to undefined]
**dataOwnerField** | **string** | Default document field for dataScope &#x60;own&#x60; (e.g. createdBy, userId). | [optional] [default to 'createdBy']

## Example

```typescript
import { UpdateMultiRoleSettingsRequestSettings } from 'mudbase-sdk';

const instance: UpdateMultiRoleSettingsRequestSettings = {
    allowMultipleRoles,
    requireRoleSelection,
    autoAssignDefault,
    dataOwnerField,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
