# SandboxSession


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** | Session ObjectId. | [optional] [default to undefined]
**language** | **string** |  | [optional] [default to undefined]
**languageVersion** | **string** |  | [optional] [default to undefined]
**status** | **string** | Current lifecycle state of the session. | [optional] [default to undefined]
**startedAt** | **string** |  | [optional] [default to undefined]
**endedAt** | **string** |  | [optional] [default to undefined]
**timeoutAt** | **string** |  | [optional] [default to undefined]
**totalCpuMs** | **number** | Cumulative CPU milliseconds consumed. | [optional] [default to undefined]
**totalRamByteSeconds** | **number** | Cumulative RAM byte-seconds consumed. | [optional] [default to undefined]
**endReason** | **string** | Why the session ended (e.g. timeout, explicit_close, idle_suspend). Null if the session is still active.  | [optional] [default to undefined]
**image** | **string** | Docker image tag used for this session. | [optional] [default to undefined]
**publicUrl** | **string** | Stable HTTPS public URL for the session. | [optional] [default to undefined]

## Example

```typescript
import { SandboxSession } from './api';

const instance: SandboxSession = {
    _id,
    language,
    languageVersion,
    status,
    startedAt,
    endedAt,
    timeoutAt,
    totalCpuMs,
    totalRamByteSeconds,
    endReason,
    image,
    publicUrl,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
