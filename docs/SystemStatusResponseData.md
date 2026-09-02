# SystemStatusResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uptime** | **number** |  | [optional] [default to undefined]
**memory** | [**SystemStatusResponseDataMemory**](SystemStatusResponseDataMemory.md) |  | [optional] [default to undefined]
**cpu** | [**SystemStatusResponseDataCpu**](SystemStatusResponseDataCpu.md) |  | [optional] [default to undefined]
**requests** | [**SystemStatusResponseDataRequests**](SystemStatusResponseDataRequests.md) |  | [optional] [default to undefined]
**database** | [**SystemStatusResponseDataDatabase**](SystemStatusResponseDataDatabase.md) |  | [optional] [default to undefined]
**storage** | [**SystemStatusResponseDataStorage**](SystemStatusResponseDataStorage.md) |  | [optional] [default to undefined]

## Example

```typescript
import { SystemStatusResponseData } from 'mudbase-sdk';

const instance: SystemStatusResponseData = {
    uptime,
    memory,
    cpu,
    requests,
    database,
    storage,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
