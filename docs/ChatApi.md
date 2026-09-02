# ChatApi

All URIs are relative to *https://cloud.mudbase.dev*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addParticipant**](#addparticipant) | **POST** /api/chat/projects/{projectId}/chats/{chatId}/participants | Add participant to chat|
|[**addReaction**](#addreaction) | **POST** /api/chat/projects/{projectId}/chats/{chatId}/messages/{messageId}/reactions | Add reaction to message|
|[**createChat**](#createchat) | **POST** /api/chat/projects/{projectId}/chats | Create new chat|
|[**deleteMessage**](#deletemessage) | **DELETE** /api/chat/projects/{projectId}/chats/{chatId}/messages/{messageId} | Delete message|
|[**editMessage**](#editmessage) | **PATCH** /api/chat/projects/{projectId}/chats/{chatId}/messages/{messageId} | Edit message|
|[**getChatDetails**](#getchatdetails) | **GET** /api/chat/projects/{projectId}/chats/{chatId} | Get chat details|
|[**getChatE2eeParticipantKeys**](#getchate2eeparticipantkeys) | **GET** /api/chat/projects/{projectId}/chats/{chatId}/e2ee/participant-keys | List participant E2EE public keys|
|[**getChatMessages**](#getchatmessages) | **GET** /api/chat/projects/{projectId}/chats/{chatId}/messages | Get chat messages|
|[**getUserChats**](#getuserchats) | **GET** /api/chat/projects/{projectId}/chats | Get user chats|
|[**markMessagesAsRead**](#markmessagesasread) | **POST** /api/chat/projects/{projectId}/chats/{chatId}/messages/read | Mark messages as read|
|[**putChatE2eeKey**](#putchate2eekey) | **PUT** /api/chat/projects/{projectId}/me/chat-e2ee-key | Register chat E2EE identity public key|
|[**removeParticipant**](#removeparticipant) | **DELETE** /api/chat/projects/{projectId}/chats/{chatId}/participants | Remove participant from chat|
|[**removeReaction**](#removereaction) | **DELETE** /api/chat/projects/{projectId}/chats/{chatId}/messages/{messageId}/reactions | Remove reaction from message|
|[**sendMessage**](#sendmessage) | **POST** /api/chat/projects/{projectId}/chats/{chatId}/messages | Send message|

# **addParticipant**
> AddParticipant200Response addParticipant(addParticipantRequest)


### Example

```typescript
import {
    ChatApi,
    Configuration,
    AddParticipantRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new ChatApi(configuration);

let projectId: string; // (default to undefined)
let chatId: string; // (default to undefined)
let addParticipantRequest: AddParticipantRequest; //

const { status, data } = await apiInstance.addParticipant(
    projectId,
    chatId,
    addParticipantRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addParticipantRequest** | **AddParticipantRequest**|  | |
| **projectId** | [**string**] |  | defaults to undefined|
| **chatId** | [**string**] |  | defaults to undefined|


### Return type

**AddParticipant200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Participant added |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **addReaction**
> AddReaction200Response addReaction(addReactionRequest)


### Example

```typescript
import {
    ChatApi,
    Configuration,
    AddReactionRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new ChatApi(configuration);

let projectId: string; // (default to undefined)
let chatId: string; // (default to undefined)
let messageId: string; // (default to undefined)
let addReactionRequest: AddReactionRequest; //

const { status, data } = await apiInstance.addReaction(
    projectId,
    chatId,
    messageId,
    addReactionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addReactionRequest** | **AddReactionRequest**|  | |
| **projectId** | [**string**] |  | defaults to undefined|
| **chatId** | [**string**] |  | defaults to undefined|
| **messageId** | [**string**] |  | defaults to undefined|


### Return type

**AddReaction200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Reaction added |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createChat**
> CreateChat201Response createChat(createChatRequest)


### Example

```typescript
import {
    ChatApi,
    Configuration,
    CreateChatRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new ChatApi(configuration);

let projectId: string; // (default to undefined)
let createChatRequest: CreateChatRequest; //

const { status, data } = await apiInstance.createChat(
    projectId,
    createChatRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createChatRequest** | **CreateChatRequest**|  | |
| **projectId** | [**string**] |  | defaults to undefined|


### Return type

**CreateChat201Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Chat created |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteMessage**
> MessageResponse deleteMessage()


### Example

```typescript
import {
    ChatApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new ChatApi(configuration);

let projectId: string; // (default to undefined)
let chatId: string; // (default to undefined)
let messageId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteMessage(
    projectId,
    chatId,
    messageId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|
| **chatId** | [**string**] |  | defaults to undefined|
| **messageId** | [**string**] |  | defaults to undefined|


### Return type

**MessageResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Message deleted |  -  |
|**401** | Authentication required |  -  |
|**403** | Access denied |  -  |
|**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **editMessage**
> EditMessage200Response editMessage(editMessageRequest)


### Example

```typescript
import {
    ChatApi,
    Configuration,
    EditMessageRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new ChatApi(configuration);

let projectId: string; // (default to undefined)
let chatId: string; // (default to undefined)
let messageId: string; // (default to undefined)
let editMessageRequest: EditMessageRequest; //

const { status, data } = await apiInstance.editMessage(
    projectId,
    chatId,
    messageId,
    editMessageRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **editMessageRequest** | **EditMessageRequest**|  | |
| **projectId** | [**string**] |  | defaults to undefined|
| **chatId** | [**string**] |  | defaults to undefined|
| **messageId** | [**string**] |  | defaults to undefined|


### Return type

**EditMessage200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Message edited |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |
|**403** | Access denied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getChatDetails**
> GetChatDetails200Response getChatDetails()


### Example

```typescript
import {
    ChatApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new ChatApi(configuration);

let projectId: string; // (default to undefined)
let chatId: string; // (default to undefined)

const { status, data } = await apiInstance.getChatDetails(
    projectId,
    chatId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|
| **chatId** | [**string**] |  | defaults to undefined|


### Return type

**GetChatDetails200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Chat details |  -  |
|**401** | Authentication required |  -  |
|**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getChatE2eeParticipantKeys**
> GetChatE2eeParticipantKeys200Response getChatE2eeParticipantKeys()

Returns registered identity public keys for users in this chat (for client-side key distribution).

### Example

```typescript
import {
    ChatApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new ChatApi(configuration);

let projectId: string; // (default to undefined)
let chatId: string; // (default to undefined)

const { status, data } = await apiInstance.getChatE2eeParticipantKeys(
    projectId,
    chatId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|
| **chatId** | [**string**] |  | defaults to undefined|


### Return type

**GetChatE2eeParticipantKeys200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Participant keys |  -  |
|**401** | Authentication required |  -  |
|**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getChatMessages**
> GetChatMessages200Response getChatMessages()


### Example

```typescript
import {
    ChatApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new ChatApi(configuration);

let projectId: string; // (default to undefined)
let chatId: string; // (default to undefined)
let page: number; // (optional) (default to 1)
let limit: number; // (optional) (default to 50)
let before: string; // (optional) (default to undefined)
let after: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getChatMessages(
    projectId,
    chatId,
    page,
    limit,
    before,
    after
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|
| **chatId** | [**string**] |  | defaults to undefined|
| **page** | [**number**] |  | (optional) defaults to 1|
| **limit** | [**number**] |  | (optional) defaults to 50|
| **before** | [**string**] |  | (optional) defaults to undefined|
| **after** | [**string**] |  | (optional) defaults to undefined|


### Return type

**GetChatMessages200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Messages list |  -  |
|**401** | Authentication required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUserChats**
> GetUserChats200Response getUserChats()


### Example

```typescript
import {
    ChatApi,
    Configuration
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new ChatApi(configuration);

let projectId: string; // (default to undefined)
let page: number; // (optional) (default to 1)
let limit: number; // (optional) (default to 20)

const { status, data } = await apiInstance.getUserChats(
    projectId,
    page,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] |  | defaults to undefined|
| **page** | [**number**] |  | (optional) defaults to 1|
| **limit** | [**number**] |  | (optional) defaults to 20|


### Return type

**GetUserChats200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | User chats list |  -  |
|**401** | Authentication required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **markMessagesAsRead**
> MarkMessagesAsRead200Response markMessagesAsRead(markMessagesAsReadRequest)


### Example

```typescript
import {
    ChatApi,
    Configuration,
    MarkMessagesAsReadRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new ChatApi(configuration);

let projectId: string; // (default to undefined)
let chatId: string; // (default to undefined)
let markMessagesAsReadRequest: MarkMessagesAsReadRequest; //

const { status, data } = await apiInstance.markMessagesAsRead(
    projectId,
    chatId,
    markMessagesAsReadRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **markMessagesAsReadRequest** | **MarkMessagesAsReadRequest**|  | |
| **projectId** | [**string**] |  | defaults to undefined|
| **chatId** | [**string**] |  | defaults to undefined|


### Return type

**MarkMessagesAsRead200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Messages marked as read |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putChatE2eeKey**
> PutChatE2eeKey200Response putChatE2eeKey(putChatE2eeKeyRequest)

Stores your long-term public key for end-to-end encrypted chat (key agreement). Private keys never leave the client. Required for other participants to encrypt to you. 

### Example

```typescript
import {
    ChatApi,
    Configuration,
    PutChatE2eeKeyRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new ChatApi(configuration);

let projectId: string; // (default to undefined)
let putChatE2eeKeyRequest: PutChatE2eeKeyRequest; //

const { status, data } = await apiInstance.putChatE2eeKey(
    projectId,
    putChatE2eeKeyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putChatE2eeKeyRequest** | **PutChatE2eeKeyRequest**|  | |
| **projectId** | [**string**] |  | defaults to undefined|


### Return type

**PutChatE2eeKey200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Key saved |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **removeParticipant**
> MessageResponse removeParticipant(removeParticipantRequest)


### Example

```typescript
import {
    ChatApi,
    Configuration,
    RemoveParticipantRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new ChatApi(configuration);

let projectId: string; // (default to undefined)
let chatId: string; // (default to undefined)
let removeParticipantRequest: RemoveParticipantRequest; //

const { status, data } = await apiInstance.removeParticipant(
    projectId,
    chatId,
    removeParticipantRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **removeParticipantRequest** | **RemoveParticipantRequest**|  | |
| **projectId** | [**string**] |  | defaults to undefined|
| **chatId** | [**string**] |  | defaults to undefined|


### Return type

**MessageResponse**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Participant removed |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **removeReaction**
> RemoveReaction200Response removeReaction(addReactionRequest)


### Example

```typescript
import {
    ChatApi,
    Configuration,
    AddReactionRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new ChatApi(configuration);

let projectId: string; // (default to undefined)
let chatId: string; // (default to undefined)
let messageId: string; // (default to undefined)
let addReactionRequest: AddReactionRequest; //

const { status, data } = await apiInstance.removeReaction(
    projectId,
    chatId,
    messageId,
    addReactionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addReactionRequest** | **AddReactionRequest**|  | |
| **projectId** | [**string**] |  | defaults to undefined|
| **chatId** | [**string**] |  | defaults to undefined|
| **messageId** | [**string**] |  | defaults to undefined|


### Return type

**RemoveReaction200Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Reaction removed |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sendMessage**
> SendMessage201Response sendMessage(sendMessageRequest)


### Example

```typescript
import {
    ChatApi,
    Configuration,
    SendMessageRequest
} from 'mudbase-sdk';

const configuration = new Configuration();
const apiInstance = new ChatApi(configuration);

let projectId: string; // (default to undefined)
let chatId: string; // (default to undefined)
let sendMessageRequest: SendMessageRequest; //

const { status, data } = await apiInstance.sendMessage(
    projectId,
    chatId,
    sendMessageRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sendMessageRequest** | **SendMessageRequest**|  | |
| **projectId** | [**string**] |  | defaults to undefined|
| **chatId** | [**string**] |  | defaults to undefined|


### Return type

**SendMessage201Response**

### Authorization

[OrgBearerAuth](../README.md#OrgBearerAuth), [ProjectBearerAuth](../README.md#ProjectBearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Message sent |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

