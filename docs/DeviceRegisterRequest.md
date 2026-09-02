# DeviceRegisterRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token** | **string** | The device push token issued to your app by its push client. | [default to undefined]
**platform** | **string** | The device platform. Defaults to &#x60;unknown&#x60; when omitted or unrecognized. | [optional] [default to PlatformEnum_Unknown]

## Example

```typescript
import { DeviceRegisterRequest } from 'mudbase-sdk';

const instance: DeviceRegisterRequest = {
    token,
    platform,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
