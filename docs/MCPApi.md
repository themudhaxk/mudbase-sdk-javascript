# MCPApi

All URIs are relative to *https://cloud.mudbase.dev*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**mcpConfigGet**](#mcpconfigget) | **GET** /mcp/config | MCP connection status for the current org|

# **mcpConfigGet**
> McpConfigGet200Response mcpConfigGet()

Whether the org\'s plan includes MCP access and, when enabled, the endpoint URL an MCP client should connect to (the org\'s dedicated API host if it has dedicated infrastructure, otherwise the shared platform host). Auth here is the normal dashboard session - this powers the console\'s MCP settings page, distinct from the API-key-authenticated POST / endpoint an actual MCP client calls.

### Example

```typescript
import {
    MCPApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new MCPApi(configuration);

const { status, data } = await apiInstance.mcpConfigGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**McpConfigGet200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | MCP status for the current org |  -  |
|**401** | Authentication required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

