# AdminOrgLimitsPatchRequest

Partial org limit overrides for platform admins. At least one property required. Keys match `PLANS[*].limits` in the backend; integers are non-negative or null for unlimited. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**projects** | **number** |  | [optional] [default to undefined]
**storage** | **number** |  | [optional] [default to undefined]
**bandwidth** | **number** |  | [optional] [default to undefined]
**apiCalls** | **number** |  | [optional] [default to undefined]
**buckets** | **number** |  | [optional] [default to undefined]
**collections** | **number** |  | [optional] [default to undefined]
**realtimeConnections** | **number** |  | [optional] [default to undefined]
**realtimeMessages** | **number** |  | [optional] [default to undefined]
**chatMessagesPerMonth** | **number** |  | [optional] [default to undefined]
**monitoredWallets** | **number** |  | [optional] [default to undefined]
**walletWebhooksPerOrg** | **number** |  | [optional] [default to undefined]
**apiKeysPerProject** | **number** |  | [optional] [default to undefined]
**webhooksPerProject** | **number** |  | [optional] [default to undefined]
**functionsPerProject** | **number** |  | [optional] [default to undefined]
**functionInvocationsPerMonth** | **number** |  | [optional] [default to undefined]
**messagingMessagesPerMonth** | **number** |  | [optional] [default to undefined]
**smsPerMonth** | **number** |  | [optional] [default to undefined]
**chatChannelsPerProject** | **number** |  | [optional] [default to undefined]
**backupsPerProject** | **number** |  | [optional] [default to undefined]
**restoresPerMonth** | **number** |  | [optional] [default to undefined]
**integrationsPerProject** | **number** |  | [optional] [default to undefined]
**rolesPerOrg** | **number** |  | [optional] [default to undefined]
**alertsPerProject** | **number** |  | [optional] [default to undefined]
**blockchainChains** | **number** |  | [optional] [default to undefined]
**teamUsers** | **number** |  | [optional] [default to undefined]
**bugAnalysis** | [**AdminOrgLimitsPatchRequestBugAnalysis**](AdminOrgLimitsPatchRequestBugAnalysis.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AdminOrgLimitsPatchRequest } from 'mudbase-sdk';

const instance: AdminOrgLimitsPatchRequest = {
    projects,
    storage,
    bandwidth,
    apiCalls,
    buckets,
    collections,
    realtimeConnections,
    realtimeMessages,
    chatMessagesPerMonth,
    monitoredWallets,
    walletWebhooksPerOrg,
    apiKeysPerProject,
    webhooksPerProject,
    functionsPerProject,
    functionInvocationsPerMonth,
    messagingMessagesPerMonth,
    smsPerMonth,
    chatChannelsPerProject,
    backupsPerProject,
    restoresPerMonth,
    integrationsPerProject,
    rolesPerOrg,
    alertsPerProject,
    blockchainChains,
    teamUsers,
    bugAnalysis,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
