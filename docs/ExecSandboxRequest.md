# ExecSandboxRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cmd** | **Array&lt;string&gt;** | Command and arguments as a string array (exec style, not shell). Example: [\&quot;python\&quot;, \&quot;/workspace/main.py\&quot;]  | [default to undefined]
**timeoutMs** | **number** | Maximum time in milliseconds to wait for the command to complete. Range 1 to 120000 (2 minutes).  | [optional] [default to 30000]
**env** | **{ [key: string]: string; }** | Extra environment variables to inject for this command only. Must be a flat string-to-string map.  | [optional] [default to undefined]
**workingDir** | **string** | Working directory inside the sandbox for this command. | [optional] [default to '/workspace']

## Example

```typescript
import { ExecSandboxRequest } from 'mudbase-sdk';

const instance: ExecSandboxRequest = {
    cmd,
    timeoutMs,
    env,
    workingDir,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
