# DashboardOverviewDataUptime

Organization-wide uptime KPI; platformProbe* is infra (Mongo); projectHttp* is this project only for comparison.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scope** | **string** |  | [optional] [default to undefined]
**displayPct30d** | **number** |  | [optional] [default to undefined]
**displaySource** | **string** |  | [optional] [default to undefined]
**isPreliminary** | **boolean** |  | [optional] [default to undefined]
**platformProbePct30d** | **number** |  | [optional] [default to undefined]
**platformSamples** | **number** |  | [optional] [default to undefined]
**platformOkSamples** | **number** |  | [optional] [default to undefined]
**orgHttpNon5xxPct30d** | **number** |  | [optional] [default to undefined]
**orgHttpSampled30d** | **number** |  | [optional] [default to undefined]
**orgHttp5xx30d** | **number** | Metered 5xx count from UsageStat (trackApiCall) | [optional] [default to undefined]
**projectHttp5xx30d** | **number** | This project’s metered 5xx count (30d) | [optional] [default to undefined]
**globalHttpNon5xxPct30d** | **number** | Deprecated alias for orgHttpNon5xxPct30d | [optional] [default to undefined]
**globalHttpSampled30d** | **number** | Deprecated alias for orgHttpSampled30d | [optional] [default to undefined]
**requestNon5xxPct30d** | **number** | Deprecated alias for orgHttpNon5xxPct30d | [optional] [default to undefined]
**requestSampled30d** | **number** | Deprecated alias for orgHttpSampled30d | [optional] [default to undefined]
**projectHttpNon5xxPct30d** | **number** |  | [optional] [default to undefined]
**projectHttpSampled30d** | **number** |  | [optional] [default to undefined]
**help** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { DashboardOverviewDataUptime } from 'mudbase-sdk';

const instance: DashboardOverviewDataUptime = {
    scope,
    displayPct30d,
    displaySource,
    isPreliminary,
    platformProbePct30d,
    platformSamples,
    platformOkSamples,
    orgHttpNon5xxPct30d,
    orgHttpSampled30d,
    orgHttp5xx30d,
    projectHttp5xx30d,
    globalHttpNon5xxPct30d,
    globalHttpSampled30d,
    requestNon5xxPct30d,
    requestSampled30d,
    projectHttpNon5xxPct30d,
    projectHttpSampled30d,
    help,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
