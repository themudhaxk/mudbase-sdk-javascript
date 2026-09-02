# ProjectSmsByoPatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **boolean** |  | [optional] [default to undefined]
**provider** | **string** |  | [optional] [default to undefined]
**defaultFrom** | **string** | Default sender (E.164 for Twilio; Termii/Africa\&#39;s Talking may use alphanumeric or approved sender IDs per provider rules). | [optional] [default to undefined]
**config** | **{ [key: string]: any; }** | Provider credentials and options (encrypted at rest). Required keys when enabling BYO: **twilio** — &#x60;accountSid&#x60;, &#x60;authToken&#x60;. Optional &#x60;from&#x60;. **termii** — &#x60;apiKey&#x60;. Optional &#x60;from&#x60;. **africastalking** — &#x60;username&#x60;, &#x60;apiKey&#x60;. Optional &#x60;from&#x60;.  | [optional] [default to undefined]

## Example

```typescript
import { ProjectSmsByoPatchRequest } from 'mudbase-sdk';

const instance: ProjectSmsByoPatchRequest = {
    enabled,
    provider,
    defaultFrom,
    config,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
