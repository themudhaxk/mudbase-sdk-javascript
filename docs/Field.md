# Field


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [default to undefined]
**type** | **string** |  | [default to undefined]
**required** | **boolean** |  | [optional] [default to undefined]
**unique** | **boolean** |  | [optional] [default to undefined]
**_default** | [**FieldDefault**](FieldDefault.md) |  | [optional] [default to undefined]
**validation** | **object** |  | [optional] [default to undefined]
**ui** | **object** |  | [optional] [default to undefined]

## Example

```typescript
import { Field } from 'mudbase-sdk';

const instance: Field = {
    name,
    type,
    required,
    unique,
    _default,
    validation,
    ui,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
