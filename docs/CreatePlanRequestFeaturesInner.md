# CreatePlanRequestFeaturesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**included** | **boolean** |  | [optional] [default to true]
**limit** | **number** | Usage cap for this feature; omit or null for unlimited. | [optional] [default to undefined]

## Example

```typescript
import { CreatePlanRequestFeaturesInner } from 'mudbase-sdk';

const instance: CreatePlanRequestFeaturesInner = {
    name,
    description,
    included,
    limit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
