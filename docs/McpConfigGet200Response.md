# McpConfigGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **boolean** |  | [optional] [default to undefined]
**plan** | **string** |  | [optional] [default to undefined]
**allowedPlans** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**freePromoActive** | **boolean** | True if this org is on the free plan and MCP is temporarily enabled via the launch promo | [optional] [default to undefined]
**freePromoEndsAt** | **string** | When the free-plan MCP promo ends (null if not active) | [optional] [default to undefined]
**endpoint** | **string** |  | [optional] [default to undefined]
**tools** | [**Array&lt;McpConfigGet200ResponseToolsInner&gt;**](McpConfigGet200ResponseToolsInner.md) |  | [optional] [default to undefined]

## Example

```typescript
import { McpConfigGet200Response } from 'mudbase-sdk';

const instance: McpConfigGet200Response = {
    enabled,
    plan,
    allowedPlans,
    freePromoActive,
    freePromoEndsAt,
    endpoint,
    tools,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
