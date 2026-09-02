# GetScannerMetrics200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metrics** | [**{ [key: string]: GetScannerMetrics200ResponseMetricsValue; }**](GetScannerMetrics200ResponseMetricsValue.md) |  | [optional] [default to undefined]
**lagAlertThreshold** | **number** | Block lag threshold above which alerts are raised | [optional] [default to undefined]
**alerts** | [**Array&lt;GetScannerMetrics200ResponseAlertsInner&gt;**](GetScannerMetrics200ResponseAlertsInner.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GetScannerMetrics200Response } from 'mudbase-sdk';

const instance: GetScannerMetrics200Response = {
    metrics,
    lagAlertThreshold,
    alerts,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
