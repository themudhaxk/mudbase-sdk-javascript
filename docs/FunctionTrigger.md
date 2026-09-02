# FunctionTrigger


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | Trigger type | [default to undefined]
**event** | **string** | Event name (e.g. create, update, delete for document; uploaded, deleted for file; tx, balance for wallet) | [optional] [default to undefined]
**schedule** | **string** | For cron - minutely, hourly, daily, weekly, or custom cron expression | [optional] [default to undefined]
**path** | **string** | HTTP path for http triggers | [optional] [default to undefined]
**method** | **string** |  | [optional] [default to undefined]
**collectionId** | **string** | For document triggers - filter by collection | [optional] [default to undefined]
**bucketId** | **string** | For file triggers - filter by bucket | [optional] [default to undefined]

## Example

```typescript
import { FunctionTrigger } from 'mudbase-sdk';

const instance: FunctionTrigger = {
    type,
    event,
    schedule,
    path,
    method,
    collectionId,
    bucketId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
