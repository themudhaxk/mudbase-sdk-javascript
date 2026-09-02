# ConfirmUploadResponseScan

Virus scan result (provider, status, detections, raw analysis)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** |  | [optional] [default to undefined]
**provider** | **string** |  | [optional] [default to undefined]
**detections** | **number** |  | [optional] [default to undefined]
**analysis** | **object** | Raw analysis object returned by the scanner (e.g., VirusTotal) | [optional] [default to undefined]

## Example

```typescript
import { ConfirmUploadResponseScan } from 'mudbase-sdk';

const instance: ConfirmUploadResponseScan = {
    status,
    provider,
    detections,
    analysis,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
