# GetProjectCaptchaConfig200ResponseCaptcha


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **boolean** | Whether CAPTCHA is enabled for this project | [optional] [default to undefined]
**version** | **string** | reCAPTCHA version (v2 or v3) | [optional] [default to undefined]
**siteKey** | **string** | Public site key for frontend integration | [optional] [default to undefined]
**minScore** | **number** | Minimum score threshold for reCAPTCHA v3 | [optional] [default to undefined]

## Example

```typescript
import { GetProjectCaptchaConfig200ResponseCaptcha } from 'mudbase-sdk';

const instance: GetProjectCaptchaConfig200ResponseCaptcha = {
    enabled,
    version,
    siteKey,
    minScore,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
