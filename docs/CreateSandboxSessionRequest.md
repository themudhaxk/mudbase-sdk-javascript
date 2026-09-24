# CreateSandboxSessionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**language** | **string** | Runtime language identifier (e.g. python, javascript, bash). | [default to undefined]
**languageVersion** | **string** | Exact version string for the language runtime (e.g. \&quot;3.12\&quot;, \&quot;20\&quot;). | [default to undefined]
**timeoutSeconds** | **number** | Seconds of inactivity before the session is automatically terminated. Minimum 30.  | [optional] [default to 300]
**autoSuspendMinutes** | **number** | Minutes of inactivity before the session is automatically suspended (always-on sessions only). 0 disables auto-suspend.  | [optional] [default to undefined]

## Example

```typescript
import { CreateSandboxSessionRequest } from 'mudbase-sdk';

const instance: CreateSandboxSessionRequest = {
    language,
    languageVersion,
    timeoutSeconds,
    autoSuspendMinutes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
