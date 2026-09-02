## mudbase-sdk@2.0.0

This generator creates TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition will be automatically resolved via `package.json`. ([Reference](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html))

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package then run `npm publish`

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install mudbase-sdk@2.0.0 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```

### Documentation for API Endpoints

All URIs are relative to *https://cloud.mudbase.dev*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*APIKeysApi* | [**createApiKey**](docs/APIKeysApi.md#createapikey) | **POST** /api/api-keys | Create API key
*APIKeysApi* | [**deleteApiKey**](docs/APIKeysApi.md#deleteapikey) | **DELETE** /api/api-keys/{id} | Delete API key
*APIKeysApi* | [**getApiKeyUsage**](docs/APIKeysApi.md#getapikeyusage) | **GET** /api/api-keys/{id}/usage | Get API key usage
*APIKeysApi* | [**listApiKeys**](docs/APIKeysApi.md#listapikeys) | **GET** /api/api-keys | List API keys
*APIKeysApi* | [**regenerateApiKey**](docs/APIKeysApi.md#regenerateapikey) | **POST** /api/api-keys/{id}/regenerate | Regenerate API key secret
*APIKeysApi* | [**updateApiKey**](docs/APIKeysApi.md#updateapikey) | **PATCH** /api/api-keys/{id} | Update API key
*AddOnsApi* | [**apiAddonsGet**](docs/AddOnsApi.md#apiaddonsget) | **GET** /api/addons | List the add-on catalog
*AddOnsApi* | [**apiProjectsProjectIdAddonsAddonInvokePost**](docs/AddOnsApi.md#apiprojectsprojectidaddonsaddoninvokepost) | **POST** /api/projects/{projectId}/addons/{addon}/invoke | Invoke an add-on for a project
*AddOnsApi* | [**apiProjectsProjectIdAddonsJobsIdGet**](docs/AddOnsApi.md#apiprojectsprojectidaddonsjobsidget) | **GET** /api/projects/{projectId}/addons/jobs/{id} | Get an add-on job status
*AdminApi* | [**getAdminAuditEvents**](docs/AdminApi.md#getadminauditevents) | **GET** /api/admin/audit/events | List audit log events
*AdminApi* | [**getDashboardOrganizationDetail**](docs/AdminApi.md#getdashboardorganizationdetail) | **GET** /api/admin/dashboard/organizations/{orgId} | Get organization detail with projects and users (Admin)
*AdminApi* | [**getDashboardOrganizations**](docs/AdminApi.md#getdashboardorganizations) | **GET** /api/admin/dashboard/organizations | List all organizations (Admin)
*AdminApi* | [**platformAdminActivateOrgCustomDomain**](docs/AdminApi.md#platformadminactivateorgcustomdomain) | **POST** /api/admin/orgs/{orgId}/domains/{hostname}/activate | Mark custom domain live (legacy / non-Fly / manual completion)
*AdminApi* | [**platformAdminApproveOrgCustomDomainCname**](docs/AdminApi.md#platformadminapproveorgcustomdomaincname) | **POST** /api/admin/orgs/{orgId}/domains/{hostname}/approve-cname | Approve routing CNAME (legacy / non-automated pipeline)
*AdminApi* | [**platformAdminCreateBillingCheckoutLink**](docs/AdminApi.md#platformadmincreatebillingcheckoutlink) | **POST** /api/admin/orgs/{orgId}/billing/checkout-link | Create checkout link for org (platform admin)
*AdminApi* | [**platformAdminCreateBillingSubscriptionLink**](docs/AdminApi.md#platformadmincreatebillingsubscriptionlink) | **POST** /api/admin/orgs/{orgId}/billing/subscription-link | Create subscription (payment plan) checkout link for org (platform admin)
*AdminApi* | [**platformAdminCustomDomainAddon**](docs/AdminApi.md#platformadmincustomdomainaddon) | **POST** /api/admin/orgs/{orgId}/custom-domain-addon | Enable/disable Growth/Scale custom domain add-on (JWT admin)
*AdminApi* | [**platformAdminDetachMember**](docs/AdminApi.md#platformadmindetachmember) | **POST** /api/admin/orgs/{orgId}/members/{userId}/detach | Detach user from organization (platform admin)
*AdminApi* | [**platformAdminDomainDnsRecheckBatch**](docs/AdminApi.md#platformadmindomaindnsrecheckbatch) | **POST** /api/admin/domain-dns/recheck-batch | Batch custom-domain DNS recheck (JWT admin)
*AdminApi* | [**platformAdminGetSecurityEvents**](docs/AdminApi.md#platformadmingetsecurityevents) | **GET** /api/admin/security/events | List in-memory security events (platform admin)
*AdminApi* | [**platformAdminPatchMemberRole**](docs/AdminApi.md#platformadminpatchmemberrole) | **PATCH** /api/admin/orgs/{orgId}/members/{userId}/role | Set org member role (platform admin)
*AdminApi* | [**platformAdminPatchOrgBillingContract**](docs/AdminApi.md#platformadminpatchorgbillingcontract) | **PATCH** /api/admin/orgs/{orgId}/billing-contract | Patch staff billing contract metadata (platform admin)
*AdminApi* | [**platformAdminPatchOrgCustomDomainPlatformDnsVerification**](docs/AdminApi.md#platformadminpatchorgcustomdomainplatformdnsverification) | **PATCH** /api/admin/orgs/{orgId}/domains/{hostname}/platform-dns-verification | Publish platform DNS verification record for the customer (non-Fly / legacy)
*AdminApi* | [**platformAdminPatchOrgLimits**](docs/AdminApi.md#platformadminpatchorglimits) | **PATCH** /api/admin/orgs/{orgId}/limits | Patch per-org limit overrides
*AdminApi* | [**platformAdminPatchOrgPlan**](docs/AdminApi.md#platformadminpatchorgplan) | **PATCH** /api/admin/orgs/{orgId}/plan | Set organization billing plan (platform admin)
*AdminApi* | [**platformAdminPatchOrgStatus**](docs/AdminApi.md#platformadminpatchorgstatus) | **PATCH** /api/admin/orgs/{orgId}/status | Set organization active flag and platform notes (platform admin)
*AdminApi* | [**platformAdminPatchProject**](docs/AdminApi.md#platformadminpatchproject) | **PATCH** /api/admin/orgs/{orgId}/projects/{projectId} | Patch project (platform admin)
*AdminApi* | [**platformAdminProvisionEnterprise**](docs/AdminApi.md#platformadminprovisionenterprise) | **POST** /api/admin/orgs/{orgId}/provision-enterprise | Provision enterprise dedicated endpoints (JWT admin)
*AuthenticationApi* | [**acceptInvite**](docs/AuthenticationApi.md#acceptinvite) | **POST** /api/auth/accept-invite | Accept organization invitation
*AuthenticationApi* | [**confirmLocalPasswordResetWithOtp**](docs/AuthenticationApi.md#confirmlocalpasswordresetwithotp) | **POST** /api/auth/local/password-reset/confirm | Confirm password reset with OTP (project-based)
*AuthenticationApi* | [**convertAnonymousAccount**](docs/AuthenticationApi.md#convertanonymousaccount) | **POST** /api/auth/anonymous/convert | Convert anonymous account to full account
*AuthenticationApi* | [**createAnonymousSession**](docs/AuthenticationApi.md#createanonymoussession) | **POST** /api/auth/anonymous | Create anonymous session
*AuthenticationApi* | [**getAvailableOAuthProviders**](docs/AuthenticationApi.md#getavailableoauthproviders) | **GET** /api/auth/oauth/providers/available | Get all available OAuth providers
*AuthenticationApi* | [**getCurrentSession**](docs/AuthenticationApi.md#getcurrentsession) | **GET** /api/auth/session | Get current session
*AuthenticationApi* | [**getLocalSession**](docs/AuthenticationApi.md#getlocalsession) | **GET** /api/auth/local/session | Get current session (project-based)
*AuthenticationApi* | [**getOrgOAuthProviders**](docs/AuthenticationApi.md#getorgoauthproviders) | **GET** /api/auth/oauth-org/providers | Get available OAuth providers for organization-based auth
*AuthenticationApi* | [**initiateOAuth**](docs/AuthenticationApi.md#initiateoauth) | **GET** /api/auth/oauth/{provider}/{projectId} | Initiate OAuth authentication
*AuthenticationApi* | [**initiateOrgOAuth**](docs/AuthenticationApi.md#initiateorgoauth) | **GET** /api/auth/oauth-org/{provider} | Initiate OAuth authentication for organization
*AuthenticationApi* | [**loginLocalUser**](docs/AuthenticationApi.md#loginlocaluser) | **POST** /api/auth/local/login | Login user (project-based)
*AuthenticationApi* | [**loginUser**](docs/AuthenticationApi.md#loginuser) | **POST** /api/auth/login | Login user
*AuthenticationApi* | [**logoutLocalUser**](docs/AuthenticationApi.md#logoutlocaluser) | **POST** /api/auth/local/logout | Logout user (project-based)
*AuthenticationApi* | [**logoutUser**](docs/AuthenticationApi.md#logoutuser) | **POST** /api/auth/logout | Logout user
*AuthenticationApi* | [**oauthCallback**](docs/AuthenticationApi.md#oauthcallback) | **GET** /api/auth/oauth/callback/{provider} | OAuth callback handler (project-based)
*AuthenticationApi* | [**orgOAuthCallback**](docs/AuthenticationApi.md#orgoauthcallback) | **GET** /api/auth/oauth-org/callback/{provider} | OAuth callback handler for organization
*AuthenticationApi* | [**refreshToken**](docs/AuthenticationApi.md#refreshtoken) | **POST** /api/auth/refresh | Refresh access token (org and project)
*AuthenticationApi* | [**registerLocalUser**](docs/AuthenticationApi.md#registerlocaluser) | **POST** /api/auth/local/register | Register new user (project-based)
*AuthenticationApi* | [**registerUser**](docs/AuthenticationApi.md#registeruser) | **POST** /api/auth/register | Register new user
*AuthenticationApi* | [**requestLocalPasswordReset**](docs/AuthenticationApi.md#requestlocalpasswordreset) | **POST** /api/auth/local/password-reset | Request password reset (project-based, OTP)
*AuthenticationApi* | [**requestPasswordReset**](docs/AuthenticationApi.md#requestpasswordreset) | **POST** /api/auth/password-reset | Request password reset (organization / platform)
*AuthenticationApi* | [**resendVerificationAuth**](docs/AuthenticationApi.md#resendverificationauth) | **POST** /api/auth/resend-verification | Resend verification email (no auth)
*AuthenticationApi* | [**resetLocalPassword**](docs/AuthenticationApi.md#resetlocalpassword) | **POST** /api/auth/local/password-reset/{token} | Reset password with token (project-based, legacy)
*AuthenticationApi* | [**resetPassword**](docs/AuthenticationApi.md#resetpassword) | **POST** /api/auth/password-reset/{token} | Reset password with token (organization / platform)
*AuthenticationApi* | [**sendMagicLink**](docs/AuthenticationApi.md#sendmagiclink) | **POST** /api/auth/magic-link/send | Send magic link
*AuthenticationApi* | [**sendOTP**](docs/AuthenticationApi.md#sendotp) | **POST** /api/auth/otp/send | Send OTP code
*AuthenticationApi* | [**validatePasswordResetToken**](docs/AuthenticationApi.md#validatepasswordresettoken) | **POST** /api/auth/password-reset/validate | Validate password reset token
*AuthenticationApi* | [**verifyEmailAuth**](docs/AuthenticationApi.md#verifyemailauth) | **POST** /api/auth/verify-email | Verify email address (no auth)
*AuthenticationApi* | [**verifyMagicLink**](docs/AuthenticationApi.md#verifymagiclink) | **POST** /api/auth/magic-link/verify | Verify magic link
*AuthenticationApi* | [**verifyOTP**](docs/AuthenticationApi.md#verifyotp) | **POST** /api/auth/otp/verify | Verify OTP code
*BackupsApi* | [**createBackup**](docs/BackupsApi.md#createbackup) | **POST** /api/projects/{projectId}/backups | Create project backup
*BackupsApi* | [**deleteBackup**](docs/BackupsApi.md#deletebackup) | **DELETE** /api/projects/{projectId}/backups/{backupId} | Delete backup
*BackupsApi* | [**listBackups**](docs/BackupsApi.md#listbackups) | **GET** /api/projects/{projectId}/backups | List project backups
*BackupsApi* | [**restoreBackup**](docs/BackupsApi.md#restorebackup) | **POST** /api/projects/{projectId}/backups/{backupId}/restore | Restore from backup
*BillingApi* | [**cancelSubscription**](docs/BillingApi.md#cancelsubscription) | **POST** /api/billing/subscriptions/{subscriptionId}/cancel | Cancel subscription
*BillingApi* | [**checkFeatureAccess**](docs/BillingApi.md#checkfeatureaccess) | **GET** /api/billing/public/projects/{projectId}/feature-access | Check feature access (public)
*BillingApi* | [**checkSubscription**](docs/BillingApi.md#checksubscription) | **GET** /api/billing/public/projects/{projectId}/subscription | Check subscription status (public)
*BillingApi* | [**createCheckoutSession**](docs/BillingApi.md#createcheckoutsession) | **POST** /api/billing/public/projects/{projectId}/checkout | Create checkout session (fiat)
*BillingApi* | [**createPlan**](docs/BillingApi.md#createplan) | **POST** /api/billing/projects/{projectId}/plans | Create billing plan
*BillingApi* | [**deletePlan**](docs/BillingApi.md#deleteplan) | **DELETE** /api/billing/projects/{projectId}/plans/{planId} | Delete billing plan
*BillingApi* | [**downloadInvoice**](docs/BillingApi.md#downloadinvoice) | **GET** /api/billing/projects/{projectId}/invoices/{invoiceId}/download | Download invoice PDF
*BillingApi* | [**enablePaymentProcessing**](docs/BillingApi.md#enablepaymentprocessing) | **POST** /api/orgs/{orgId}/payment-processing/enable | Enable payment processing for organization
*BillingApi* | [**exportInvoice**](docs/BillingApi.md#exportinvoice) | **GET** /api/billing/projects/{projectId}/invoices/{invoiceId}/export | Export invoice (e.g. PDF URL or file)
*BillingApi* | [**getBillingEstimate**](docs/BillingApi.md#getbillingestimate) | **GET** /api/billing/estimate | Get billing estimate and forecast
*BillingApi* | [**getCheckoutPayment**](docs/BillingApi.md#getcheckoutpayment) | **GET** /api/billing/public/projects/{projectId}/checkout/{paymentId} | Get checkout payment details (not used for fiat billing)
*BillingApi* | [**getDashboard**](docs/BillingApi.md#getdashboard) | **GET** /api/billing/projects/{projectId}/dashboard | Get billing dashboard data
*BillingApi* | [**getFeeBreakdown**](docs/BillingApi.md#getfeebreakdown) | **GET** /api/orgs/{orgId}/payment-processing/fee-breakdown | Get fee breakdown for a given amount
*BillingApi* | [**getInvoice**](docs/BillingApi.md#getinvoice) | **GET** /api/billing/projects/{projectId}/invoices/{invoiceId} | Get single invoice
*BillingApi* | [**getInvoices**](docs/BillingApi.md#getinvoices) | **GET** /api/billing/projects/{projectId}/invoices | List project invoices
*BillingApi* | [**getPaymentRecords**](docs/BillingApi.md#getpaymentrecords) | **GET** /api/orgs/{orgId}/payment-processing/records | List fiat payment records for organization
*BillingApi* | [**getPlans**](docs/BillingApi.md#getplans) | **GET** /api/billing/projects/{projectId}/plans | Get billing plans
*BillingApi* | [**getPublicPlans**](docs/BillingApi.md#getpublicplans) | **GET** /api/billing/public/projects/{projectId}/plans | Get public plans (no auth required)
*BillingApi* | [**getSubscriptionTierById**](docs/BillingApi.md#getsubscriptiontierbyid) | **GET** /api/billing/plans/{planId} | Get one subscription tier by id
*BillingApi* | [**getSubscriptionTiers**](docs/BillingApi.md#getsubscriptiontiers) | **GET** /api/billing/plans | Get subscription tiers (org-level BaaS plans)
*BillingApi* | [**getSubscriptions**](docs/BillingApi.md#getsubscriptions) | **GET** /api/billing/projects/{projectId}/subscriptions | Get subscriptions
*BillingApi* | [**handleFlutterwaveWebhook**](docs/BillingApi.md#handleflutterwavewebhook) | **POST** /api/billing/webhooks/flutterwave | Payment gateway webhook
*BillingApi* | [**initializeOrgPlanCheckout**](docs/BillingApi.md#initializeorgplancheckout) | **POST** /api/billing/org/checkout | Initialize org-level BaaS plan payment (Starter, Growth, Scale)
*BillingApi* | [**initializePayment**](docs/BillingApi.md#initializepayment) | **POST** /api/orgs/{orgId}/payment-processing/initialize-payment | Initialize fiat payment with split (org subaccount + platform fee)
*BillingApi* | [**initializePaymentForProject**](docs/BillingApi.md#initializepaymentforproject) | **POST** /api/projects/{projectId}/payment-processing/initialize-payment | Initialize fiat payment (project-scoped)
*BillingApi* | [**recordUsage**](docs/BillingApi.md#recordusage) | **POST** /api/billing/public/projects/{projectId}/usage | Record usage (public)
*BillingApi* | [**updatePlan**](docs/BillingApi.md#updateplan) | **PATCH** /api/billing/projects/{projectId}/plans/{planId} | Update billing plan
*BillingApi* | [**verifyOrgPlanPayment**](docs/BillingApi.md#verifyorgplanpayment) | **POST** /api/billing/org/verify-payment | Verify org-level plan payment
*BillingApi* | [**verifyPayment**](docs/BillingApi.md#verifypayment) | **POST** /api/billing/public/projects/{projectId}/verify-payment | Verify payment and create subscription
*BucketsApi* | [**createBucket**](docs/BucketsApi.md#createbucket) | **POST** /api/bucket/projects/{projectId}/buckets | Create a new bucket
*BucketsApi* | [**deleteBucket**](docs/BucketsApi.md#deletebucket) | **DELETE** /api/bucket/projects/{projectId}/buckets/{bucketId} | Delete bucket
*BucketsApi* | [**getBucket**](docs/BucketsApi.md#getbucket) | **GET** /api/bucket/projects/{projectId}/buckets/{bucketId} | Get bucket details
*BucketsApi* | [**listBuckets**](docs/BucketsApi.md#listbuckets) | **GET** /api/bucket/projects/{projectId}/buckets | List buckets in a project
*BucketsApi* | [**updateBucket**](docs/BucketsApi.md#updatebucket) | **PATCH** /api/bucket/projects/{projectId}/buckets/{bucketId} | Update bucket
*BugAnalysisApi* | [**startBugAnalysisScan**](docs/BugAnalysisApi.md#startbuganalysisscan) | **POST** /api/bug-analysis/scan | Start bug analysis scan (org-level)
*BugAnalysisApi* | [**startBugAnalysisScanByProject**](docs/BugAnalysisApi.md#startbuganalysisscanbyproject) | **POST** /api/bug-analysis/scan/{projectId} | Start bug analysis scan (project-scoped)
*ChatApi* | [**addParticipant**](docs/ChatApi.md#addparticipant) | **POST** /api/chat/projects/{projectId}/chats/{chatId}/participants | Add participant to chat
*ChatApi* | [**addReaction**](docs/ChatApi.md#addreaction) | **POST** /api/chat/projects/{projectId}/chats/{chatId}/messages/{messageId}/reactions | Add reaction to message
*ChatApi* | [**createChat**](docs/ChatApi.md#createchat) | **POST** /api/chat/projects/{projectId}/chats | Create new chat
*ChatApi* | [**deleteMessage**](docs/ChatApi.md#deletemessage) | **DELETE** /api/chat/projects/{projectId}/chats/{chatId}/messages/{messageId} | Delete message
*ChatApi* | [**editMessage**](docs/ChatApi.md#editmessage) | **PATCH** /api/chat/projects/{projectId}/chats/{chatId}/messages/{messageId} | Edit message
*ChatApi* | [**getChatDetails**](docs/ChatApi.md#getchatdetails) | **GET** /api/chat/projects/{projectId}/chats/{chatId} | Get chat details
*ChatApi* | [**getChatE2eeParticipantKeys**](docs/ChatApi.md#getchate2eeparticipantkeys) | **GET** /api/chat/projects/{projectId}/chats/{chatId}/e2ee/participant-keys | List participant E2EE public keys
*ChatApi* | [**getChatMessages**](docs/ChatApi.md#getchatmessages) | **GET** /api/chat/projects/{projectId}/chats/{chatId}/messages | Get chat messages
*ChatApi* | [**getUserChats**](docs/ChatApi.md#getuserchats) | **GET** /api/chat/projects/{projectId}/chats | Get user chats
*ChatApi* | [**markMessagesAsRead**](docs/ChatApi.md#markmessagesasread) | **POST** /api/chat/projects/{projectId}/chats/{chatId}/messages/read | Mark messages as read
*ChatApi* | [**putChatE2eeKey**](docs/ChatApi.md#putchate2eekey) | **PUT** /api/chat/projects/{projectId}/me/chat-e2ee-key | Register chat E2EE identity public key
*ChatApi* | [**removeParticipant**](docs/ChatApi.md#removeparticipant) | **DELETE** /api/chat/projects/{projectId}/chats/{chatId}/participants | Remove participant from chat
*ChatApi* | [**removeReaction**](docs/ChatApi.md#removereaction) | **DELETE** /api/chat/projects/{projectId}/chats/{chatId}/messages/{messageId}/reactions | Remove reaction from message
*ChatApi* | [**sendMessage**](docs/ChatApi.md#sendmessage) | **POST** /api/chat/projects/{projectId}/chats/{chatId}/messages | Send message
*CollectionsApi* | [**createCollection**](docs/CollectionsApi.md#createcollection) | **POST** /api/schemas/projects/{projectId}/collections | Create new collection
*CollectionsApi* | [**deleteCollection**](docs/CollectionsApi.md#deletecollection) | **DELETE** /api/schemas/projects/{projectId}/collections/{collectionId} | Delete collection
*CollectionsApi* | [**getCollection**](docs/CollectionsApi.md#getcollection) | **GET** /api/schemas/projects/{projectId}/collections/{collectionId} | Get single collection
*CollectionsApi* | [**listCollections**](docs/CollectionsApi.md#listcollections) | **GET** /api/schemas/projects/{projectId}/collections | List collections in project
*CollectionsApi* | [**updateCollection**](docs/CollectionsApi.md#updatecollection) | **PATCH** /api/schemas/projects/{projectId}/collections/{collectionId} | Update collection
*ComplianceApi* | [**apiGdprErasePost**](docs/ComplianceApi.md#apigdprerasepost) | **POST** /api/gdpr/erase | Erase my personal data (GDPR Art. 17)
*ComplianceApi* | [**apiGdprExportGet**](docs/ComplianceApi.md#apigdprexportget) | **GET** /api/gdpr/export | Export my personal data (GDPR Art. 15)
*ComplianceApi* | [**generateAccessReview**](docs/ComplianceApi.md#generateaccessreview) | **POST** /api/compliance/access-review | Generate access review report (SOC 2)
*ComplianceApi* | [**generateDataProcessingRecord**](docs/ComplianceApi.md#generatedataprocessingrecord) | **POST** /api/compliance/data-processing-record | Generate data processing record (GDPR Article 30)
*ComplianceApi* | [**getComplianceSummary**](docs/ComplianceApi.md#getcompliancesummary) | **GET** /api/compliance/summary | Get compliance summary
*ComplianceApi* | [**logSecurityEvent**](docs/ComplianceApi.md#logsecurityevent) | **POST** /api/compliance/security-event | Log security event
*DataApi* | [**createData**](docs/DataApi.md#createdata) | **POST** /api/data/projects/{projectId}/collections/{collectionId}/data | Create data in collection
*DataApi* | [**deleteData**](docs/DataApi.md#deletedata) | **DELETE** /api/data/projects/{projectId}/collections/{collectionId}/data/{documentId} | Delete document
*DataApi* | [**getData**](docs/DataApi.md#getdata) | **GET** /api/data/projects/{projectId}/collections/{collectionId}/data/{documentId} | Get single document
*DataApi* | [**listData**](docs/DataApi.md#listdata) | **GET** /api/data/projects/{projectId}/collections/{collectionId}/data | List data in collection
*DataApi* | [**updateData**](docs/DataApi.md#updatedata) | **PATCH** /api/data/projects/{projectId}/collections/{collectionId}/data/{documentId} | Update document
*EmailApi* | [**enqueueProjectEmail**](docs/EmailApi.md#enqueueprojectemail) | **POST** /api/projects/{projectId}/email/send | Enqueue project email (worker delivery)
*EmailApi* | [**getProjectEmailAnalytics**](docs/EmailApi.md#getprojectemailanalytics) | **GET** /api/projects/{projectId}/analytics/email | Email analytics for a project
*EmailApi* | [**getProjectEmailSmtp**](docs/EmailApi.md#getprojectemailsmtp) | **GET** /api/projects/{projectId}/email/smtp | Get project SMTP settings (masked)
*EmailApi* | [**getProjectEmailTemplate**](docs/EmailApi.md#getprojectemailtemplate) | **GET** /api/projects/{projectId}/email/templates/{name} | Get one email template (effective content)
*EmailApi* | [**listProjectEmailTemplates**](docs/EmailApi.md#listprojectemailtemplates) | **GET** /api/projects/{projectId}/email/templates | List email templates (full catalog for the project)
*EmailApi* | [**patchProjectEmailSmtp**](docs/EmailApi.md#patchprojectemailsmtp) | **PATCH** /api/projects/{projectId}/email/smtp | Update project SMTP relay (BYO)
*EmailApi* | [**previewProjectEmailTemplate**](docs/EmailApi.md#previewprojectemailtemplate) | **POST** /api/projects/{projectId}/email/templates/{name}/preview | Render template preview (sanitized HTML, no send)
*EmailApi* | [**restoreDefaultProjectEmailTemplate**](docs/EmailApi.md#restoredefaultprojectemailtemplate) | **POST** /api/projects/{projectId}/email/templates/{name}/restore-default | Restore from platform global default or remove project override
*EmailApi* | [**testProjectEmailSmtp**](docs/EmailApi.md#testprojectemailsmtp) | **POST** /api/projects/{projectId}/email/smtp/test | Verify SMTP and send a test message
*EmailApi* | [**upsertProjectEmailTemplate**](docs/EmailApi.md#upsertprojectemailtemplate) | **PUT** /api/projects/{projectId}/email/templates/{name} | Upsert project email template (HTML sanitized; variables must cover {{placeholders}})
*EmailApi* | [**verifyProjectEmailSmtpDomain**](docs/EmailApi.md#verifyprojectemailsmtpdomain) | **POST** /api/projects/{projectId}/email/smtp/verify-domain | Check DNS (MX + SPF) for sending domain
*FilesApi* | [**apiFilesDownloadFileIdGet**](docs/FilesApi.md#apifilesdownloadfileidget) | **GET** /api/files/download/{fileId} | Get a download URL for a file
*FilesApi* | [**confirmDirectUpload**](docs/FilesApi.md#confirmdirectupload) | **POST** /api/files/upload/confirm | Confirm direct upload (scan + finalize metadata)
*FilesApi* | [**deleteFile**](docs/FilesApi.md#deletefile) | **DELETE** /api/bucket/projects/{projectId}/buckets/{bucketId}/files/{fileId} | Delete file
*FilesApi* | [**downloadBucketFile**](docs/FilesApi.md#downloadbucketfile) | **GET** /api/bucket/files/{fileId}/download | Download file from bucket
*FilesApi* | [**downloadFile**](docs/FilesApi.md#downloadfile) | **GET** /api/files/{fileId}/download | Generate a presigned URL for downloading a file
*FilesApi* | [**generatePresignedUpload**](docs/FilesApi.md#generatepresignedupload) | **POST** /api/files/upload/presigned | Generate a presigned PUT URL for direct browser upload
*FilesApi* | [**generateSignedUrl**](docs/FilesApi.md#generatesignedurl) | **POST** /api/bucket/projects/{projectId}/buckets/{bucketId}/files/{fileId}/signed-url | Generate signed URL for file
*FilesApi* | [**getFile**](docs/FilesApi.md#getfile) | **GET** /api/bucket/projects/{projectId}/buckets/{bucketId}/files/{fileId} | Get file metadata
*FilesApi* | [**listFiles**](docs/FilesApi.md#listfiles) | **GET** /api/bucket/projects/{projectId}/buckets/{bucketId}/files | List files in bucket
*FilesApi* | [**uploadFiles**](docs/FilesApi.md#uploadfiles) | **POST** /api/bucket/projects/{projectId}/buckets/{bucketId}/files | Upload files to bucket
*FunctionsApi* | [**activateFunction**](docs/FunctionsApi.md#activatefunction) | **POST** /api/functions/projects/{projectId}/functions/{functionId}/activate | Activate function
*FunctionsApi* | [**createFunction**](docs/FunctionsApi.md#createfunction) | **POST** /api/functions/projects/{projectId}/functions | Create function
*FunctionsApi* | [**deactivateFunction**](docs/FunctionsApi.md#deactivatefunction) | **POST** /api/functions/projects/{projectId}/functions/{functionId}/deactivate | Deactivate function
*FunctionsApi* | [**deleteFunction**](docs/FunctionsApi.md#deletefunction) | **DELETE** /api/functions/projects/{projectId}/functions/{functionId} | Delete function
*FunctionsApi* | [**executeFunction**](docs/FunctionsApi.md#executefunction) | **POST** /api/functions/projects/{projectId}/functions/{functionId}/execute | Execute function
*FunctionsApi* | [**getFunction**](docs/FunctionsApi.md#getfunction) | **GET** /api/functions/projects/{projectId}/functions/{functionId} | Get function
*FunctionsApi* | [**getFunctionExecution**](docs/FunctionsApi.md#getfunctionexecution) | **GET** /api/functions/projects/{projectId}/functions/{functionId}/executions/{executionId} | Get execution status
*FunctionsApi* | [**getFunctionLogs**](docs/FunctionsApi.md#getfunctionlogs) | **GET** /api/functions/projects/{projectId}/functions/{functionId}/logs | Get function execution logs
*FunctionsApi* | [**getFunctionVersions**](docs/FunctionsApi.md#getfunctionversions) | **GET** /api/functions/projects/{projectId}/functions/{functionId}/versions | Get function versions
*FunctionsApi* | [**listFunctions**](docs/FunctionsApi.md#listfunctions) | **GET** /api/functions/projects/{projectId}/functions | List functions
*FunctionsApi* | [**retryFunctionExecution**](docs/FunctionsApi.md#retryfunctionexecution) | **POST** /api/functions/projects/{projectId}/functions/{functionId}/retry/{executionIndex} | Retry failed execution
*FunctionsApi* | [**rollbackFunction**](docs/FunctionsApi.md#rollbackfunction) | **POST** /api/functions/projects/{projectId}/functions/{functionId}/rollback | Rollback to previous version
*FunctionsApi* | [**simulateFunctionTrigger**](docs/FunctionsApi.md#simulatefunctiontrigger) | **POST** /api/functions/projects/{projectId}/functions/{functionId}/simulate | Simulate trigger
*FunctionsApi* | [**triggerFunctionWebhook**](docs/FunctionsApi.md#triggerfunctionwebhook) | **POST** /api/functions/webhook/{projectId} | Trigger webhook functions
*FunctionsApi* | [**updateFunction**](docs/FunctionsApi.md#updatefunction) | **PUT** /api/functions/projects/{projectId}/functions/{functionId} | Update function
*HealthApi* | [**healthCheck**](docs/HealthApi.md#healthcheck) | **GET** /health | Health check
*HealthApi* | [**systemStatus**](docs/HealthApi.md#systemstatus) | **GET** /api/status | System status
*IntegrationsApi* | [**createFromTemplate**](docs/IntegrationsApi.md#createfromtemplate) | **POST** /api/integrations/projects/{projectId}/integrations/from-template | Create integration from template
*IntegrationsApi* | [**createIntegration**](docs/IntegrationsApi.md#createintegration) | **POST** /api/integrations/projects/{projectId}/integrations | Create new integration
*IntegrationsApi* | [**deleteIntegration**](docs/IntegrationsApi.md#deleteintegration) | **DELETE** /api/integrations/projects/{projectId}/integrations/{integrationId} | Delete integration
*IntegrationsApi* | [**executeIntegration**](docs/IntegrationsApi.md#executeintegration) | **POST** /api/integrations/projects/{projectId}/integrations/{integrationId}/execute | Execute integration
*IntegrationsApi* | [**exportIntegration**](docs/IntegrationsApi.md#exportintegration) | **GET** /api/integrations/projects/{projectId}/integrations/{integrationId}/export | Export integration
*IntegrationsApi* | [**getIntegration**](docs/IntegrationsApi.md#getintegration) | **GET** /api/integrations/projects/{projectId}/integrations/{integrationId} | Get integration details
*IntegrationsApi* | [**getIntegrations**](docs/IntegrationsApi.md#getintegrations) | **GET** /api/integrations/projects/{projectId}/integrations | Get project integrations
*IntegrationsApi* | [**getTemplates**](docs/IntegrationsApi.md#gettemplates) | **GET** /api/integrations/templates | Get integration templates
*IntegrationsApi* | [**getUsageStats**](docs/IntegrationsApi.md#getusagestats) | **GET** /api/integrations/projects/{projectId}/integrations/{integrationId}/usage | Get integration usage statistics
*IntegrationsApi* | [**importIntegration**](docs/IntegrationsApi.md#importintegration) | **POST** /api/integrations/projects/{projectId}/integrations/import | Import integration
*IntegrationsApi* | [**testIntegration**](docs/IntegrationsApi.md#testintegration) | **POST** /api/integrations/projects/{projectId}/integrations/{integrationId}/test | Test integration
*IntegrationsApi* | [**updateIntegration**](docs/IntegrationsApi.md#updateintegration) | **PATCH** /api/integrations/projects/{projectId}/integrations/{integrationId} | Update integration
*KYCApi* | [**apiKycSessionsPost**](docs/KYCApi.md#apikycsessionspost) | **POST** /api/kyc/sessions | Start a platform KYC session
*KYCApi* | [**apiKycStatusGet**](docs/KYCApi.md#apikycstatusget) | **GET** /api/kyc/status | Get the organization\&#39;s platform KYC status
*KYCApi* | [**apiKycVerificationsIdGet**](docs/KYCApi.md#apikycverificationsidget) | **GET** /api/kyc/verifications/{id} | Get a single KYC verification record
*KYCApi* | [**apiKycWebhookConfigGet**](docs/KYCApi.md#apikycwebhookconfigget) | **GET** /api/kyc/webhook-config | Get white-label KYC webhook config
*KYCApi* | [**apiKycWebhookConfigPut**](docs/KYCApi.md#apikycwebhookconfigput) | **PUT** /api/kyc/webhook-config | Set white-label KYC webhook config
*MessagingApi* | [**getMessageHistory**](docs/MessagingApi.md#getmessagehistory) | **GET** /api/messaging/projects/{projectId}/messaging/history | Get message history
*MessagingApi* | [**getMessageStats**](docs/MessagingApi.md#getmessagestats) | **GET** /api/messaging/projects/{projectId}/messaging/stats | Get message statistics
*MessagingApi* | [**getProjectFcmConfig**](docs/MessagingApi.md#getprojectfcmconfig) | **GET** /api/messaging/projects/{projectId}/messaging/push-config | Get BYO FCM configuration (masked)
*MessagingApi* | [**getProjectSmsByo**](docs/MessagingApi.md#getprojectsmsbyo) | **GET** /api/messaging/projects/{projectId}/messaging/sms-provider | Get BYO SMS provider configuration (masked)
*MessagingApi* | [**patchProjectFcmConfig**](docs/MessagingApi.md#patchprojectfcmconfig) | **PATCH** /api/messaging/projects/{projectId}/messaging/push-config | Set or clear per-project FCM service account
*MessagingApi* | [**patchProjectSmsByo**](docs/MessagingApi.md#patchprojectsmsbyo) | **PATCH** /api/messaging/projects/{projectId}/messaging/sms-provider | Update BYO SMS provider credentials
*MessagingApi* | [**sendEmail**](docs/MessagingApi.md#sendemail) | **POST** /api/messaging/projects/{projectId}/messaging/email | Send email
*MessagingApi* | [**sendPushNotification**](docs/MessagingApi.md#sendpushnotification) | **POST** /api/messaging/projects/{projectId}/messaging/push | Send push notification
*MessagingApi* | [**sendSMS**](docs/MessagingApi.md#sendsms) | **POST** /api/messaging/projects/{projectId}/messaging/sms | Send SMS
*MonitoringApi* | [**createMonitoringAlert**](docs/MonitoringApi.md#createmonitoringalert) | **POST** /api/monitoring/alerts | Create monitoring alert
*MonitoringApi* | [**getMonitoringAnalytics**](docs/MonitoringApi.md#getmonitoringanalytics) | **GET** /api/monitoring/analytics | Get usage analytics (time series)
*MonitoringApi* | [**getMonitoringErrors**](docs/MonitoringApi.md#getmonitoringerrors) | **GET** /api/monitoring/errors | Get error logs
*MonitoringApi* | [**getMonitoringLatencyInsights**](docs/MonitoringApi.md#getmonitoringlatencyinsights) | **GET** /api/monitoring/latency-insights | Latency insights (route templates, percentiles, impact scores)
*MonitoringApi* | [**getMonitoringLogs**](docs/MonitoringApi.md#getmonitoringlogs) | **GET** /api/monitoring/logs | Get audit logs
*MonitoringApi* | [**getMonitoringPerformance**](docs/MonitoringApi.md#getmonitoringperformance) | **GET** /api/monitoring/performance | Get performance metrics
*MonitoringApi* | [**getMonitoringQueueMetrics**](docs/MonitoringApi.md#getmonitoringqueuemetrics) | **GET** /api/monitoring/queue-metrics | Usage metering queue job counts
*MonitoringApi* | [**getScannerMetrics**](docs/MonitoringApi.md#getscannermetrics) | **GET** /api/monitoring/scanner-metrics | Get block scanner metrics
*MonitoringApi* | [**listMonitoringAlerts**](docs/MonitoringApi.md#listmonitoringalerts) | **GET** /api/monitoring/alerts | List monitoring alerts
*MultiRoleFeatureApi* | [**addCustomRole**](docs/MultiRoleFeatureApi.md#addcustomrole) | **POST** /api/projects/{projectId}/multi-role/roles | Add custom role
*MultiRoleFeatureApi* | [**applyRoleFeaturePreset**](docs/MultiRoleFeatureApi.md#applyrolefeaturepreset) | **POST** /api/projects/{projectId}/multi-role/roles/{roleSlug}/apply-preset | Apply Admin / User / Viewer feature permission preset
*MultiRoleFeatureApi* | [**getAvailableRoles**](docs/MultiRoleFeatureApi.md#getavailableroles) | **GET** /api/projects/{projectId}/multi-role/roles/available | Get available roles for signup
*MultiRoleFeatureApi* | [**getMultiRoleConfig**](docs/MultiRoleFeatureApi.md#getmultiroleconfig) | **GET** /api/projects/{projectId}/multi-role | Get multi-role feature configuration
*MultiRoleFeatureApi* | [**getPermissionsMatrix**](docs/MultiRoleFeatureApi.md#getpermissionsmatrix) | **GET** /api/projects/{projectId}/permissions-matrix | Get permissions matrix (collections + featurePermissions)
*MultiRoleFeatureApi* | [**oauthSignupWithRole**](docs/MultiRoleFeatureApi.md#oauthsignupwithrole) | **GET** /api/auth/oauth/signup/{role}/{provider}/{projectId} | OAuth signup with specific role
*MultiRoleFeatureApi* | [**registerWithRole**](docs/MultiRoleFeatureApi.md#registerwithrole) | **POST** /api/auth/local/signup/{role} | Register user with specific role (Local Auth)
*MultiRoleFeatureApi* | [**simulateAppPermissions**](docs/MultiRoleFeatureApi.md#simulateapppermissions) | **POST** /api/projects/{projectId}/multi-role/simulate-permissions | Simulate app-role feature permission for a path
*MultiRoleFeatureApi* | [**toggleRole**](docs/MultiRoleFeatureApi.md#togglerole) | **PATCH** /api/projects/{projectId}/multi-role/roles/{roleSlug}/toggle | Toggle role on/off
*MultiRoleFeatureApi* | [**updateCollectionPermissions**](docs/MultiRoleFeatureApi.md#updatecollectionpermissions) | **PATCH** /api/projects/{projectId}/multi-role/roles/{roleSlug}/collections/{collectionId}/permissions | Update collection permissions for a role
*MultiRoleFeatureApi* | [**updateMultiRoleSettings**](docs/MultiRoleFeatureApi.md#updatemultirolesettings) | **PATCH** /api/projects/{projectId}/multi-role/settings | Update multi-role feature settings
*MultiRoleFeatureApi* | [**updateProjectRole**](docs/MultiRoleFeatureApi.md#updateprojectrole) | **PATCH** /api/projects/{projectId}/multi-role/roles/{roleSlug} | Update role configuration
*OrganizationsApi* | [**addOrgCustomDomain**](docs/OrganizationsApi.md#addorgcustomdomain) | **POST** /api/orgs/{orgId}/projects/{projectId}/domains | Add a custom domain
*OrganizationsApi* | [**createOrganization**](docs/OrganizationsApi.md#createorganization) | **POST** /api/orgs | ~~Create new organization~~ (disabled)
*OrganizationsApi* | [**deleteOrgCustomDomain**](docs/OrganizationsApi.md#deleteorgcustomdomain) | **DELETE** /api/orgs/{orgId}/projects/{projectId}/domains/{hostname} | Remove a custom domain
*OrganizationsApi* | [**deleteOrganization**](docs/OrganizationsApi.md#deleteorganization) | **DELETE** /api/orgs/{orgId} | Delete organization
*OrganizationsApi* | [**deleteSubOrganization**](docs/OrganizationsApi.md#deletesuborganization) | **DELETE** /api/orgs/{orgId}/suborgs/{suborgId} | ~~Delete sub-organization~~ (deprecated)
*OrganizationsApi* | [**getOrgCustomDomainDnsInstructions**](docs/OrganizationsApi.md#getorgcustomdomaindnsinstructions) | **GET** /api/orgs/{orgId}/projects/{projectId}/domains/{hostname}/dns-instructions | Get DNS TXT record instructions for one hostname
*OrganizationsApi* | [**getOrganization**](docs/OrganizationsApi.md#getorganization) | **GET** /api/orgs/{orgId} | Get organization details by ID
*OrganizationsApi* | [**getOrganizationMembers**](docs/OrganizationsApi.md#getorganizationmembers) | **GET** /api/orgs/{orgId}/members | Get organization members
*OrganizationsApi* | [**getOrganizationUsage**](docs/OrganizationsApi.md#getorganizationusage) | **GET** /api/orgs/{orgId}/usage | Get organization usage and billing
*OrganizationsApi* | [**getOrganizationUsers**](docs/OrganizationsApi.md#getorganizationusers) | **GET** /api/orgs/{orgId}/users | List organization users with metadata
*OrganizationsApi* | [**getProjectUsers**](docs/OrganizationsApi.md#getprojectusers) | **GET** /api/orgs/{orgId}/projects/{projectId}/users | List project users with metadata
*OrganizationsApi* | [**getSubOrganizations**](docs/OrganizationsApi.md#getsuborganizations) | **GET** /api/orgs/{orgId}/suborgs | ~~Get sub-organizations~~ (deprecated)
*OrganizationsApi* | [**getUserOverview**](docs/OrganizationsApi.md#getuseroverview) | **GET** /api/orgs/{orgId}/users/{userId}/overview | Get user overview and data footprint
*OrganizationsApi* | [**internalCustomDomainAddon**](docs/OrganizationsApi.md#internalcustomdomainaddon) | **POST** /internal/org/custom-domain-addon | Enable/disable Growth/Scale custom domain add-on (internal)
*OrganizationsApi* | [**internalCustomDomainSweepStatus**](docs/OrganizationsApi.md#internalcustomdomainsweepstatus) | **GET** /internal/custom-domain/sweep-status | Custom domain background sweep status (internal)
*OrganizationsApi* | [**internalDomainDnsRecheckBatch**](docs/OrganizationsApi.md#internaldomaindnsrecheckbatch) | **POST** /internal/domain-dns/recheck-batch | Batch DNS re-verification for drift (internal)
*OrganizationsApi* | [**internalProvisionEnterprise**](docs/OrganizationsApi.md#internalprovisionenterprise) | **POST** /internal/provision-enterprise | Provision enterprise dedicated API/DB (internal)
*OrganizationsApi* | [**inviteSubOrganizationMember**](docs/OrganizationsApi.md#invitesuborganizationmember) | **POST** /api/orgs/{orgId}/suborgs/{suborgId}/invite | ~~Invite member to sub-organization~~ (deprecated)
*OrganizationsApi* | [**inviteTeamMember**](docs/OrganizationsApi.md#inviteteammember) | **POST** /api/orgs/{orgId}/invite | Invite team member to organization
*OrganizationsApi* | [**listOrgCustomDomains**](docs/OrganizationsApi.md#listorgcustomdomains) | **GET** /api/orgs/{orgId}/projects/{projectId}/domains | List custom domains and DNS verification hints
*OrganizationsApi* | [**listOrganizations**](docs/OrganizationsApi.md#listorganizations) | **GET** /api/orgs | Get all organizations for user
*OrganizationsApi* | [**orgCustomDomainPlatformReady**](docs/OrganizationsApi.md#orgcustomdomainplatformready) | **POST** /api/orgs/{orgId}/projects/{projectId}/domains/{hostname}/platform-ready | Notify platform ops that hosting or edge work is ready (email)
*OrganizationsApi* | [**orgCustomDomainSubmitCname**](docs/OrganizationsApi.md#orgcustomdomainsubmitcname) | **POST** /api/orgs/{orgId}/projects/{projectId}/domains/{hostname}/submit-cname | Custom domain step 2 (optional): org confirms routing CNAME was added
*OrganizationsApi* | [**orgCustomDomainSubmitPlatformDnsVerificationDeprecated**](docs/OrganizationsApi.md#orgcustomdomainsubmitplatformdnsverificationdeprecated) | **POST** /api/orgs/{orgId}/projects/{projectId}/domains/{hostname}/submit-platform-dns-verification | Deprecated — use POST .../verify-platform-dns
*OrganizationsApi* | [**orgCustomDomainVerifyPlatformDns**](docs/OrganizationsApi.md#orgcustomdomainverifyplatformdns) | **POST** /api/orgs/{orgId}/projects/{projectId}/domains/{hostname}/verify-platform-dns | Custom domain step 3: verify platform DNS (manual TXT or Fly certificate readiness)
*OrganizationsApi* | [**patchOrgCustomDomain**](docs/OrganizationsApi.md#patchorgcustomdomain) | **PATCH** /api/orgs/{orgId}/projects/{projectId}/domains/{hostname} | Update domain status or regenerate verification token
*OrganizationsApi* | [**removeSubOrganizationMember**](docs/OrganizationsApi.md#removesuborganizationmember) | **DELETE** /api/orgs/{orgId}/suborgs/{suborgId}/members/{userId} | ~~Remove member from sub-organization~~ (deprecated)
*OrganizationsApi* | [**removeTeamMember**](docs/OrganizationsApi.md#removeteammember) | **DELETE** /api/orgs/{orgId}/members/{userId} | Remove team member from organization
*OrganizationsApi* | [**setOrgPrimaryDomain**](docs/OrganizationsApi.md#setorgprimarydomain) | **PATCH** /api/orgs/{orgId}/projects/{projectId}/domains/primary | Set primary custom domain
*OrganizationsApi* | [**updateMemberRole**](docs/OrganizationsApi.md#updatememberrole) | **PATCH** /api/orgs/{orgId}/members/{userId}/role | Update member role
*OrganizationsApi* | [**updateOrganization**](docs/OrganizationsApi.md#updateorganization) | **PATCH** /api/orgs/{orgId} | Update organization
*OrganizationsApi* | [**updateOrganizationPlan**](docs/OrganizationsApi.md#updateorganizationplan) | **PATCH** /api/orgs/plan/{orgId} | Update organization plan
*OrganizationsApi* | [**updateSubOrganization**](docs/OrganizationsApi.md#updatesuborganization) | **PATCH** /api/orgs/{orgId}/suborgs/{suborgId} | ~~Update sub-organization~~ (deprecated)
*OrganizationsApi* | [**updateSubOrganizationMemberRole**](docs/OrganizationsApi.md#updatesuborganizationmemberrole) | **PATCH** /api/orgs/{orgId}/suborgs/{suborgId}/members/{userId}/role | ~~Update sub-organization member role~~ (deprecated)
*OrganizationsApi* | [**updateUserAccountStatus**](docs/OrganizationsApi.md#updateuseraccountstatus) | **PATCH** /api/orgs/{orgId}/users/{userId}/status | Update user account status (activate or suspend)
*OrganizationsApi* | [**verifyOrgCustomDomainDns**](docs/OrganizationsApi.md#verifyorgcustomdomaindns) | **POST** /api/orgs/{orgId}/projects/{projectId}/domains/{hostname}/verify-dns | Verify domain ownership via DNS TXT
*ProjectFeesApi* | [**cancelPayout**](docs/ProjectFeesApi.md#cancelpayout) | **POST** /api/admin/payouts/{payoutId}/cancel | ~~Cancel payout (Admin)~~ (deprecated)
*ProjectFeesApi* | [**confirmAddressVerification**](docs/ProjectFeesApi.md#confirmaddressverification) | **POST** /api/projects/{projectId}/fee-settings/{currency}/confirm-verification | ~~Confirm address verification~~ (deprecated)
*ProjectFeesApi* | [**createOrUpdateFeeSettings**](docs/ProjectFeesApi.md#createorupdatefeesettings) | **POST** /api/projects/{projectId}/fee-settings | ~~Create or update project fee settings~~ (deprecated)
*ProjectFeesApi* | [**getAdminPayoutDashboard**](docs/ProjectFeesApi.md#getadminpayoutdashboard) | **GET** /api/admin/payouts/dashboard | ~~Get admin payout dashboard (Admin)~~ (deprecated)
*ProjectFeesApi* | [**getCurrencyFeeBalance**](docs/ProjectFeesApi.md#getcurrencyfeebalance) | **GET** /api/projects/{projectId}/fee-balances/{currency} | ~~Get currency fee balance~~ (deprecated)
*ProjectFeesApi* | [**getFeeBalances**](docs/ProjectFeesApi.md#getfeebalances) | **GET** /api/projects/{projectId}/fee-balances | ~~Get all fee balances~~ (deprecated)
*ProjectFeesApi* | [**getFeeSettings**](docs/ProjectFeesApi.md#getfeesettings) | **GET** /api/projects/{projectId}/fee-settings | ~~Get project fee settings~~ (deprecated)
*ProjectFeesApi* | [**getPayoutHistory**](docs/ProjectFeesApi.md#getpayouthistory) | **GET** /api/projects/{projectId}/payout-history | ~~Get payout history~~ (deprecated)
*ProjectFeesApi* | [**getPendingPayouts**](docs/ProjectFeesApi.md#getpendingpayouts) | **GET** /api/admin/payouts/pending | ~~Get all pending payouts (Admin)~~ (deprecated)
*ProjectFeesApi* | [**getProjectFeeDashboard**](docs/ProjectFeesApi.md#getprojectfeedashboard) | **GET** /api/projects/{projectId}/fee-dashboard | ~~Get fee dashboard~~ (deprecated)
*ProjectFeesApi* | [**initiateAddressVerification**](docs/ProjectFeesApi.md#initiateaddressverification) | **POST** /api/projects/{projectId}/fee-settings/{currency}/verify-address | ~~Initiate address verification~~ (deprecated)
*ProjectFeesApi* | [**processPayout**](docs/ProjectFeesApi.md#processpayout) | **POST** /api/admin/payouts/{payoutId}/process | ~~Manually process payout (Admin)~~ (deprecated)
*ProjectFeesApi* | [**requestManualPayout**](docs/ProjectFeesApi.md#requestmanualpayout) | **POST** /api/projects/{projectId}/payouts/request-manual | ~~Request manual payout~~ (deprecated)
*ProjectFeesApi* | [**updateCurrencyFeeSettings**](docs/ProjectFeesApi.md#updatecurrencyfeesettings) | **PATCH** /api/projects/{projectId}/fee-settings/{currency} | ~~Update currency fee settings~~ (deprecated)
*ProjectsApi* | [**configureOAuthProvider**](docs/ProjectsApi.md#configureoauthprovider) | **POST** /api/auth/oauth/projects/{projectId}/providers/{provider} | Configure OAuth provider for a project
*ProjectsApi* | [**createProject**](docs/ProjectsApi.md#createproject) | **POST** /api/projects/{orgId}/projects | Create new project
*ProjectsApi* | [**deleteProject**](docs/ProjectsApi.md#deleteproject) | **DELETE** /api/projects/{orgId}/projects/{id} | Delete project
*ProjectsApi* | [**getOAuthProviderConfig**](docs/ProjectsApi.md#getoauthproviderconfig) | **GET** /api/auth/oauth/projects/{projectId}/providers/{provider} | Get OAuth provider configuration
*ProjectsApi* | [**getProject**](docs/ProjectsApi.md#getproject) | **GET** /api/projects/{orgId}/projects/{id} | Get single project
*ProjectsApi* | [**getProjectCaptchaConfig**](docs/ProjectsApi.md#getprojectcaptchaconfig) | **GET** /api/projects/{orgId}/projects/{id}/auth/captcha | Get project CAPTCHA configuration
*ProjectsApi* | [**getProjectDashboardOverview**](docs/ProjectsApi.md#getprojectdashboardoverview) | **GET** /api/projects/{projectId}/dashboard/overview | Project dashboard overview
*ProjectsApi* | [**getProjectOAuthProviders**](docs/ProjectsApi.md#getprojectoauthproviders) | **GET** /api/auth/oauth/projects/{projectId}/providers | Get configured OAuth providers for a project
*ProjectsApi* | [**getProjectUsage**](docs/ProjectsApi.md#getprojectusage) | **GET** /api/projects/{orgId}/projects/{id}/usage | Get project usage statistics
*ProjectsApi* | [**listProjects**](docs/ProjectsApi.md#listprojects) | **GET** /api/projects/{orgId}/projects | List all projects
*ProjectsApi* | [**updateOAuthProviderConfig**](docs/ProjectsApi.md#updateoauthproviderconfig) | **PATCH** /api/auth/oauth/projects/{projectId}/providers/{provider} | Update OAuth provider configuration
*ProjectsApi* | [**updateProject**](docs/ProjectsApi.md#updateproject) | **PATCH** /api/projects/{orgId}/projects/{id} | Update project
*ProjectsApi* | [**uploadProjectLogo**](docs/ProjectsApi.md#uploadprojectlogo) | **POST** /api/projects/{id}/logo | Upload project logo (by project ID)
*ProjectsApi* | [**uploadProjectLogoByOrg**](docs/ProjectsApi.md#uploadprojectlogobyorg) | **POST** /api/projects/{orgId}/projects/{id}/logo | Upload project logo (by org and project ID)
*RealTimeAnalyticsApi* | [**checkUserPresence**](docs/RealTimeAnalyticsApi.md#checkuserpresence) | **POST** /api/realtime/projects/{projectId}/presence | Check presence status for users
*RealTimeAnalyticsApi* | [**getActiveUsers**](docs/RealTimeAnalyticsApi.md#getactiveusers) | **GET** /api/realtime/projects/{projectId}/active-users | Get active users for a project
*RealTimeAnalyticsApi* | [**getEventThroughput**](docs/RealTimeAnalyticsApi.md#geteventthroughput) | **GET** /api/realtime/projects/{projectId}/throughput | Get event throughput metrics
*RealTimeAnalyticsApi* | [**getGlobalAnalytics**](docs/RealTimeAnalyticsApi.md#getglobalanalytics) | **GET** /api/realtime/analytics | Get global real-time analytics
*RealTimeAnalyticsApi* | [**getHistoricalAnalytics**](docs/RealTimeAnalyticsApi.md#gethistoricalanalytics) | **GET** /api/realtime/projects/{projectId}/history | Get historical analytics
*RealTimeAnalyticsApi* | [**getProjectAnalytics**](docs/RealTimeAnalyticsApi.md#getprojectanalytics) | **GET** /api/realtime/projects/{projectId}/analytics | Get project real-time analytics
*RoleElevationApi* | [**approveRoleElevation**](docs/RoleElevationApi.md#approveroleelevation) | **POST** /api/orgs/{orgId}/role-elevation/{requestId}/approve | Approve/reject role elevation request (admin only)
*RoleElevationApi* | [**getPendingRoleElevationRequests**](docs/RoleElevationApi.md#getpendingroleelevationrequests) | **GET** /api/orgs/{orgId}/role-elevation/pending | Get pending role elevation requests (admin only)
*RoleElevationApi* | [**getRoleElevationStatus**](docs/RoleElevationApi.md#getroleelevationstatus) | **GET** /api/projects/{projectId}/role-elevation/status | Get role elevation status
*RoleElevationApi* | [**requestRoleElevation**](docs/RoleElevationApi.md#requestroleelevation) | **POST** /api/projects/{projectId}/role-elevation/request | Request role elevation
*RoleElevationApi* | [**uploadVerificationDocuments**](docs/RoleElevationApi.md#uploadverificationdocuments) | **POST** /api/projects/{projectId}/role-elevation/documents | Upload verification documents
*RolesApi* | [**assignRole**](docs/RolesApi.md#assignrole) | **POST** /api/orgs/{orgId}/users/{userId}/role | ~~Assign custom role to user~~ (deprecated)
*RolesApi* | [**checkPermissions**](docs/RolesApi.md#checkpermissions) | **GET** /api/orgs/{orgId}/users/{userId}/permissions | ~~Check user permissions~~ (deprecated)
*RolesApi* | [**createRole**](docs/RolesApi.md#createrole) | **POST** /api/orgs/{orgId}/roles | ~~Create custom role~~ (deprecated)
*RolesApi* | [**deleteRole**](docs/RolesApi.md#deleterole) | **DELETE** /api/orgs/{orgId}/roles/{roleId} | ~~Delete role~~ (deprecated)
*RolesApi* | [**getRole**](docs/RolesApi.md#getrole) | **GET** /api/orgs/{orgId}/roles/{roleId} | ~~Get role details~~ (deprecated)
*RolesApi* | [**getUsersByRole**](docs/RolesApi.md#getusersbyrole) | **GET** /api/orgs/{orgId}/roles/{roleSlug}/users | ~~Get users with specific role~~ (deprecated)
*RolesApi* | [**listRoles**](docs/RolesApi.md#listroles) | **GET** /api/orgs/{orgId}/roles | ~~List all roles~~ (deprecated)
*RolesApi* | [**removeRole**](docs/RolesApi.md#removerole) | **DELETE** /api/orgs/{orgId}/users/{userId}/role | ~~Remove custom role from user~~ (deprecated)
*RolesApi* | [**updateRole**](docs/RolesApi.md#updaterole) | **PUT** /api/orgs/{orgId}/roles/{roleId} | ~~Update role~~ (deprecated)
*SearchApi* | [**getSearchAnalytics**](docs/SearchApi.md#getsearchanalytics) | **GET** /api/search/projects/{projectId}/search/analytics | Get search analytics
*SearchApi* | [**getSearchSuggestions**](docs/SearchApi.md#getsearchsuggestions) | **GET** /api/search/projects/{projectId}/search/suggestions | Get search suggestions
*SearchApi* | [**searchData**](docs/SearchApi.md#searchdata) | **GET** /api/search/projects/{projectId}/search | Full-text search
*UsageApi* | [**getOverage**](docs/UsageApi.md#getoverage) | **GET** /api/usage/overage | Get current overage line items
*UsageApi* | [**getProjectUsageStats**](docs/UsageApi.md#getprojectusagestats) | **GET** /api/usage/projects/{projectId} | Get project usage
*UsageApi* | [**getProjectUsageSummary**](docs/UsageApi.md#getprojectusagesummary) | **GET** /api/usage/projects/{projectId}/summary | Project dashboard usage summary
*UsageApi* | [**getUsage**](docs/UsageApi.md#getusage) | **GET** /api/usage | Get organization usage
*UsageApi* | [**getUsageTrends**](docs/UsageApi.md#getusagetrends) | **GET** /api/usage/trends | Get usage trends
*UsageApi* | [**getUsageWarnings**](docs/UsageApi.md#getusagewarnings) | **GET** /api/usage/warnings | Get usage warnings
*UsersApi* | [**apiMeBootstrapGet**](docs/UsersApi.md#apimebootstrapget) | **GET** /api/me/bootstrap | Dashboard bootstrap (session + orgs + default org + projects)
*UsersApi* | [**changePassword**](docs/UsersApi.md#changepassword) | **PATCH** /api/users/password | Change password
*UsersApi* | [**disable2FA**](docs/UsersApi.md#disable2fa) | **POST** /api/users/2fa/disable | Disable 2FA
*UsersApi* | [**eraseUserData**](docs/UsersApi.md#eraseuserdata) | **POST** /api/users/me/erase | Delete user data (GDPR Article 17)
*UsersApi* | [**exportUserData**](docs/UsersApi.md#exportuserdata) | **GET** /api/users/me/export | Export user data (GDPR Article 15)
*UsersApi* | [**getCurrentUser**](docs/UsersApi.md#getcurrentuser) | **GET** /api/users/me | Get current user profile
*UsersApi* | [**linkOAuthProvider**](docs/UsersApi.md#linkoauthprovider) | **GET** /api/users/me/oauth-providers/link/{provider} | Link OAuth provider to account
*UsersApi* | [**listOAuthProviders**](docs/UsersApi.md#listoauthproviders) | **GET** /api/users/me/oauth-providers | List linked OAuth providers
*UsersApi* | [**resendVerificationEmail**](docs/UsersApi.md#resendverificationemail) | **POST** /api/users/resend-verification | Resend verification email
*UsersApi* | [**setup2FA**](docs/UsersApi.md#setup2fa) | **POST** /api/users/2fa/setup | Setup 2FA
*UsersApi* | [**unlinkOAuthProvider**](docs/UsersApi.md#unlinkoauthprovider) | **DELETE** /api/users/me/oauth-providers/{provider} | Unlink OAuth provider
*UsersApi* | [**updateUserProfile**](docs/UsersApi.md#updateuserprofile) | **PATCH** /api/users/update | Update user profile
*UsersApi* | [**verify2FA**](docs/UsersApi.md#verify2fa) | **POST** /api/users/2fa/verify | Verify and enable 2FA
*UsersApi* | [**verifyEmail**](docs/UsersApi.md#verifyemail) | **POST** /api/users/verify-email | Verify email address (organization and project)
*VerifiedRoleUpgradeApi* | [**verifiedRoleUpgrade**](docs/VerifiedRoleUpgradeApi.md#verifiedroleupgrade) | **POST** /api/orgs/{orgId}/users/{userId}/upgrade | Verified role upgrade with payment verification
*WalletApi* | [**broadcastNonCustodialTransaction**](docs/WalletApi.md#broadcastnoncustodialtransaction) | **POST** /api/wallet/non-custodial/broadcast | Broadcast a client-signed transaction
*WalletApi* | [**calculateWalletFee**](docs/WalletApi.md#calculatewalletfee) | **POST** /api/wallet/calculate-fee | Get network fee only (alias for POST /api/wallet/estimate-network-fee)
*WalletApi* | [**createWallet**](docs/WalletApi.md#createwallet) | **POST** /api/wallet/create | Create new wallet (for testing non-custodial)
*WalletApi* | [**createWalletWebhook**](docs/WalletApi.md#createwalletwebhook) | **POST** /api/wallet/non-custodial/webhooks | Create a wallet webhook
*WalletApi* | [**deleteNonCustodialAddress**](docs/WalletApi.md#deletenoncustodialaddress) | **DELETE** /api/wallet/non-custodial/addresses/{addressId} | Delete or deactivate a monitored wallet address
*WalletApi* | [**deleteWalletWebhook**](docs/WalletApi.md#deletewalletwebhook) | **DELETE** /api/wallet/non-custodial/webhooks/{webhookId} | Delete a wallet webhook
*WalletApi* | [**estimateNetworkFee**](docs/WalletApi.md#estimatenetworkfee) | **POST** /api/wallet/estimate-network-fee | Estimate network fee (preferred; reads from fee oracle cache)
*WalletApi* | [**estimateNonCustodialGas**](docs/WalletApi.md#estimatenoncustodialgas) | **POST** /api/wallet/non-custodial/estimate-gas | Estimate network fee from blockchain (all supported chains; not controlled by Mudbase)
*WalletApi* | [**generatePrivateKey**](docs/WalletApi.md#generateprivatekey) | **POST** /api/wallet/generate-key | Generate private key
*WalletApi* | [**getAllFees**](docs/WalletApi.md#getallfees) | **GET** /api/wallet/fees | Get all chain network fees (fee oracle snapshot)
*WalletApi* | [**getBalance**](docs/WalletApi.md#getbalance) | **GET** /api/wallet/{walletId}/balance | Get wallet balance
*WalletApi* | [**getCancelParams**](docs/WalletApi.md#getcancelparams) | **POST** /api/wallet/non-custodial/cancel | Get replacement tx params for cancel (stuck EVM tx)
*WalletApi* | [**getNetworkStatus**](docs/WalletApi.md#getnetworkstatus) | **GET** /api/wallet/network-status | Get network status (congestion + fee metric per chain)
*WalletApi* | [**getNonCustodialAddress**](docs/WalletApi.md#getnoncustodialaddress) | **GET** /api/wallet/non-custodial/addresses/{addressId} | Get non-custodial address by ID
*WalletApi* | [**getNonCustodialBalance**](docs/WalletApi.md#getnoncustodialbalance) | **GET** /api/wallet/non-custodial/addresses/{addressId}/balance | Get balance for a non-custodial address
*WalletApi* | [**getNonCustodialTransactionByHash**](docs/WalletApi.md#getnoncustodialtransactionbyhash) | **GET** /api/wallet/non-custodial/transactions/{txHash} | Get transaction by hash
*WalletApi* | [**getNonCustodialTransactions**](docs/WalletApi.md#getnoncustodialtransactions) | **GET** /api/wallet/non-custodial/addresses/{addressId}/transactions | Get transaction history for a non-custodial address
*WalletApi* | [**getSpeedUpParams**](docs/WalletApi.md#getspeedupparams) | **POST** /api/wallet/non-custodial/speed-up | Get replacement tx params for speed-up (stuck EVM tx)
*WalletApi* | [**getSupportedCurrencies**](docs/WalletApi.md#getsupportedcurrencies) | **GET** /api/wallet/currencies | Get supported currencies and chains
*WalletApi* | [**getTransaction**](docs/WalletApi.md#gettransaction) | **GET** /api/wallet/transactions/{transactionId} | Get transaction details
*WalletApi* | [**getTransactionHistory**](docs/WalletApi.md#gettransactionhistory) | **GET** /api/wallet/transactions | Get transaction history (custodial wallets; same monitoring as non-custodial)
*WalletApi* | [**getUserWallets**](docs/WalletApi.md#getuserwallets) | **GET** /api/wallet | Get user wallets
*WalletApi* | [**getWalletFeeConfig**](docs/WalletApi.md#getwalletfeeconfig) | **GET** /api/wallet/projects/{projectId}/fee-config | Get project fee configuration (for non-custodial / external users)
*WalletApi* | [**getWalletPrivateKey**](docs/WalletApi.md#getwalletprivatekey) | **GET** /api/wallet/{walletId}/private-key | Get wallet private key (WARNING: Sensitive data; for testing non-custodial)
*WalletApi* | [**getWalletWebhookLogs**](docs/WalletApi.md#getwalletwebhooklogs) | **GET** /api/wallet/non-custodial/webhooks/{webhookId}/logs | Get webhook delivery logs
*WalletApi* | [**listNonCustodialAddresses**](docs/WalletApi.md#listnoncustodialaddresses) | **GET** /api/wallet/non-custodial/addresses | List registered non-custodial addresses
*WalletApi* | [**listWalletWebhooks**](docs/WalletApi.md#listwalletwebhooks) | **GET** /api/wallet/non-custodial/webhooks | List wallet webhooks
*WalletApi* | [**registerNonCustodialAddress**](docs/WalletApi.md#registernoncustodialaddress) | **POST** /api/wallet/non-custodial/register-address | Register a non-custodial wallet address
*WalletApi* | [**testWalletWebhook**](docs/WalletApi.md#testwalletwebhook) | **POST** /api/wallet/non-custodial/webhooks/test | Test a webhook delivery (sends a single test payload)
*WalletApi* | [**updateNonCustodialAddress**](docs/WalletApi.md#updatenoncustodialaddress) | **PUT** /api/wallet/non-custodial/addresses/{addressId} | Update a monitored wallet address
*WalletApi* | [**updateWalletFeeConfig**](docs/WalletApi.md#updatewalletfeeconfig) | **PATCH** /api/wallet/projects/{projectId}/fee-config | Update project fee configuration (for non-custodial / external users)
*WalletApi* | [**updateWalletWebhook**](docs/WalletApi.md#updatewalletwebhook) | **PUT** /api/wallet/non-custodial/webhooks/{webhookId} | Update a wallet webhook
*WalletApi* | [**validateAddress**](docs/WalletApi.md#validateaddress) | **POST** /api/wallet/validate-address | Validate cryptocurrency address
*WalletApi* | [**withdraw**](docs/WalletApi.md#withdraw) | **POST** /api/wallet/{walletId}/withdraw | Prepare withdrawal (semi-transaction; broadcast via non-custodial)
*WebhooksApi* | [**configureWebhook**](docs/WebhooksApi.md#configurewebhook) | **PUT** /api/webhooks/projects/{projectId}/config | Create or update project webhook
*WebhooksApi* | [**getWebhookConfig**](docs/WebhooksApi.md#getwebhookconfig) | **GET** /api/webhooks/projects/{projectId}/config | Get project webhook configuration
*WebhooksApi* | [**getWebhookStats**](docs/WebhooksApi.md#getwebhookstats) | **GET** /api/webhooks/stats | Get webhook delivery statistics
*WebhooksApi* | [**listProjectWebhookLogs**](docs/WebhooksApi.md#listprojectwebhooklogs) | **GET** /api/webhooks/projects/{projectId} | List webhook delivery logs (project)
*WebhooksApi* | [**listWebhooks**](docs/WebhooksApi.md#listwebhooks) | **GET** /api/webhooks | List webhook delivery logs (organization)
*WebhooksApi* | [**retryWebhook**](docs/WebhooksApi.md#retrywebhook) | **POST** /api/webhooks/retry/{webhookId} | Retry a failed webhook delivery
*WebhooksApi* | [**testWebhookTransformation**](docs/WebhooksApi.md#testwebhooktransformation) | **POST** /api/webhooks/projects/{projectId}/test-transformation | Test webhook transformation
*WebhooksApi* | [**triggerWebhook**](docs/WebhooksApi.md#triggerwebhook) | **POST** /api/webhooks/trigger | Manually trigger an outbound webhook


### Documentation For Models

 - [AcceptInvite201Response](docs/AcceptInvite201Response.md)
 - [AcceptInvite201ResponseUser](docs/AcceptInvite201ResponseUser.md)
 - [AcceptInviteRequest](docs/AcceptInviteRequest.md)
 - [AddCustomRoleRequest](docs/AddCustomRoleRequest.md)
 - [AddCustomRoleRequestDefaultPermissionsInner](docs/AddCustomRoleRequestDefaultPermissionsInner.md)
 - [AddOrgDomainRequest](docs/AddOrgDomainRequest.md)
 - [AddParticipant200Response](docs/AddParticipant200Response.md)
 - [AddParticipant200ResponseData](docs/AddParticipant200ResponseData.md)
 - [AddParticipant200ResponseDataParticipantsInner](docs/AddParticipant200ResponseDataParticipantsInner.md)
 - [AddParticipantRequest](docs/AddParticipantRequest.md)
 - [AddReaction200Response](docs/AddReaction200Response.md)
 - [AddReaction200ResponseDataInner](docs/AddReaction200ResponseDataInner.md)
 - [AddReactionRequest](docs/AddReactionRequest.md)
 - [AdminApproveOrgDomainCnameRequest](docs/AdminApproveOrgDomainCnameRequest.md)
 - [AdminBillingCheckoutLinkRequest](docs/AdminBillingCheckoutLinkRequest.md)
 - [AdminCustomDomainMutationResponse](docs/AdminCustomDomainMutationResponse.md)
 - [AdminMemberRolePatchRequest](docs/AdminMemberRolePatchRequest.md)
 - [AdminOrgBillingContractPatchRequest](docs/AdminOrgBillingContractPatchRequest.md)
 - [AdminOrgLimitsPatchRequest](docs/AdminOrgLimitsPatchRequest.md)
 - [AdminOrgLimitsPatchRequestBugAnalysis](docs/AdminOrgLimitsPatchRequestBugAnalysis.md)
 - [AdminOrgPlanPatchRequest](docs/AdminOrgPlanPatchRequest.md)
 - [AdminOrgStatusPatchRequest](docs/AdminOrgStatusPatchRequest.md)
 - [AdminPlatformDnsVerificationPatchRequest](docs/AdminPlatformDnsVerificationPatchRequest.md)
 - [AdminProjectPatchRequest](docs/AdminProjectPatchRequest.md)
 - [AdminProvisionEnterpriseBody](docs/AdminProvisionEnterpriseBody.md)
 - [ApiAddonsGet200Response](docs/ApiAddonsGet200Response.md)
 - [ApiFilesDownloadFileIdGet200Response](docs/ApiFilesDownloadFileIdGet200Response.md)
 - [ApiGdprErasePostRequest](docs/ApiGdprErasePostRequest.md)
 - [ApiKey](docs/ApiKey.md)
 - [ApiKeyPermission](docs/ApiKeyPermission.md)
 - [ApiKeyUsage](docs/ApiKeyUsage.md)
 - [ApiKeyUsageResponse](docs/ApiKeyUsageResponse.md)
 - [ApiKeyWithSecret](docs/ApiKeyWithSecret.md)
 - [ApiKycSessionsPostRequest](docs/ApiKycSessionsPostRequest.md)
 - [ApiKycWebhookConfigGet200Response](docs/ApiKycWebhookConfigGet200Response.md)
 - [ApiKycWebhookConfigPut200Response](docs/ApiKycWebhookConfigPut200Response.md)
 - [ApiKycWebhookConfigPutRequest](docs/ApiKycWebhookConfigPutRequest.md)
 - [ApiMeBootstrapGet200Response](docs/ApiMeBootstrapGet200Response.md)
 - [ApiProjectsProjectIdAddonsAddonInvokePost200Response](docs/ApiProjectsProjectIdAddonsAddonInvokePost200Response.md)
 - [ApplyRoleFeaturePreset200Response](docs/ApplyRoleFeaturePreset200Response.md)
 - [ApplyRoleFeaturePresetRequest](docs/ApplyRoleFeaturePresetRequest.md)
 - [ApproveRoleElevation200Response](docs/ApproveRoleElevation200Response.md)
 - [ApproveRoleElevationRequest](docs/ApproveRoleElevationRequest.md)
 - [AssignRole200Response](docs/AssignRole200Response.md)
 - [AssignRoleRequest](docs/AssignRoleRequest.md)
 - [AuthConfig](docs/AuthConfig.md)
 - [AuthProvider](docs/AuthProvider.md)
 - [AuthResponse](docs/AuthResponse.md)
 - [Billing](docs/Billing.md)
 - [BillingLastPayment](docs/BillingLastPayment.md)
 - [BroadcastNonCustodialTransaction200Response](docs/BroadcastNonCustodialTransaction200Response.md)
 - [BroadcastNonCustodialTransaction200ResponseData](docs/BroadcastNonCustodialTransaction200ResponseData.md)
 - [BroadcastNonCustodialTransactionRequest](docs/BroadcastNonCustodialTransactionRequest.md)
 - [Bucket](docs/Bucket.md)
 - [BucketListResponse](docs/BucketListResponse.md)
 - [BucketResponse](docs/BucketResponse.md)
 - [CalculateWalletFee200Response](docs/CalculateWalletFee200Response.md)
 - [CalculateWalletFee200ResponseData](docs/CalculateWalletFee200ResponseData.md)
 - [CalculateWalletFee200ResponseDataFeeTiersValue](docs/CalculateWalletFee200ResponseDataFeeTiersValue.md)
 - [CancelSubscriptionRequest](docs/CancelSubscriptionRequest.md)
 - [ChangePasswordRequest](docs/ChangePasswordRequest.md)
 - [CheckFeatureAccess200Response](docs/CheckFeatureAccess200Response.md)
 - [CheckPermissions200Response](docs/CheckPermissions200Response.md)
 - [CheckPermissions200ResponsePermissions](docs/CheckPermissions200ResponsePermissions.md)
 - [CheckSubscription200Response](docs/CheckSubscription200Response.md)
 - [CheckSubscription200ResponseSubscription](docs/CheckSubscription200ResponseSubscription.md)
 - [CheckUserPresence200Response](docs/CheckUserPresence200Response.md)
 - [CheckUserPresence200ResponsePresenceValue](docs/CheckUserPresence200ResponsePresenceValue.md)
 - [CheckUserPresenceRequest](docs/CheckUserPresenceRequest.md)
 - [Collection](docs/Collection.md)
 - [CollectionAction](docs/CollectionAction.md)
 - [CollectionPermissionRule](docs/CollectionPermissionRule.md)
 - [ConfigureOAuthProvider200Response](docs/ConfigureOAuthProvider200Response.md)
 - [ConfigureOAuthProvider200ResponseProvider](docs/ConfigureOAuthProvider200ResponseProvider.md)
 - [ConfigureOAuthProviderRequest](docs/ConfigureOAuthProviderRequest.md)
 - [ConfigureWebhook200Response](docs/ConfigureWebhook200Response.md)
 - [ConfigureWebhook200ResponseData](docs/ConfigureWebhook200ResponseData.md)
 - [ConfigureWebhook200ResponseDataTransformationsInner](docs/ConfigureWebhook200ResponseDataTransformationsInner.md)
 - [ConfigureWebhook403Response](docs/ConfigureWebhook403Response.md)
 - [ConfigureWebhookRequest](docs/ConfigureWebhookRequest.md)
 - [ConfirmAddressVerification200Response](docs/ConfirmAddressVerification200Response.md)
 - [ConfirmAddressVerificationRequest](docs/ConfirmAddressVerificationRequest.md)
 - [ConfirmDirectUpload400Response](docs/ConfirmDirectUpload400Response.md)
 - [ConfirmDirectUploadRequest](docs/ConfirmDirectUploadRequest.md)
 - [ConfirmLocalPasswordResetWithOtpRequest](docs/ConfirmLocalPasswordResetWithOtpRequest.md)
 - [ConfirmUploadResponse](docs/ConfirmUploadResponse.md)
 - [ConfirmUploadResponseScan](docs/ConfirmUploadResponseScan.md)
 - [ConvertAnonymousAccount200Response](docs/ConvertAnonymousAccount200Response.md)
 - [ConvertAnonymousAccountRequest](docs/ConvertAnonymousAccountRequest.md)
 - [CreateAnonymousSession200Response](docs/CreateAnonymousSession200Response.md)
 - [CreateAnonymousSession200ResponseUser](docs/CreateAnonymousSession200ResponseUser.md)
 - [CreateAnonymousSessionRequest](docs/CreateAnonymousSessionRequest.md)
 - [CreateApiKey201Response](docs/CreateApiKey201Response.md)
 - [CreateApiKey400Response](docs/CreateApiKey400Response.md)
 - [CreateApiKeyRequest](docs/CreateApiKeyRequest.md)
 - [CreateBackup201Response](docs/CreateBackup201Response.md)
 - [CreateBackup201ResponseBackup](docs/CreateBackup201ResponseBackup.md)
 - [CreateBackupRequest](docs/CreateBackupRequest.md)
 - [CreateBucketRequest](docs/CreateBucketRequest.md)
 - [CreateChat201Response](docs/CreateChat201Response.md)
 - [CreateChat201ResponseData](docs/CreateChat201ResponseData.md)
 - [CreateChatRequest](docs/CreateChatRequest.md)
 - [CreateCheckoutSession200Response](docs/CreateCheckoutSession200Response.md)
 - [CreateCheckoutSession200ResponseData](docs/CreateCheckoutSession200ResponseData.md)
 - [CreateCheckoutSessionRequest](docs/CreateCheckoutSessionRequest.md)
 - [CreateCheckoutSessionRequestCustomerInfo](docs/CreateCheckoutSessionRequestCustomerInfo.md)
 - [CreateCollection201Response](docs/CreateCollection201Response.md)
 - [CreateCollectionRequest](docs/CreateCollectionRequest.md)
 - [CreateFromTemplateRequest](docs/CreateFromTemplateRequest.md)
 - [CreateFunctionRequest](docs/CreateFunctionRequest.md)
 - [CreateIntegration201Response](docs/CreateIntegration201Response.md)
 - [CreateIntegrationRequest](docs/CreateIntegrationRequest.md)
 - [CreateMonitoringAlertRequest](docs/CreateMonitoringAlertRequest.md)
 - [CreateOrUpdateFeeSettingsRequest](docs/CreateOrUpdateFeeSettingsRequest.md)
 - [CreateOrganization403Response](docs/CreateOrganization403Response.md)
 - [CreateOrganizationRequest](docs/CreateOrganizationRequest.md)
 - [CreatePlan201Response](docs/CreatePlan201Response.md)
 - [CreatePlanRequest](docs/CreatePlanRequest.md)
 - [CreatePlanRequestFeaturesInner](docs/CreatePlanRequestFeaturesInner.md)
 - [CreatePlanRequestFeaturesInnerOneOf](docs/CreatePlanRequestFeaturesInnerOneOf.md)
 - [CreatePlanRequestLimits](docs/CreatePlanRequestLimits.md)
 - [CreatePlanRequestLimitsCustomLimitsInner](docs/CreatePlanRequestLimitsCustomLimitsInner.md)
 - [CreatePlanRequestTrial](docs/CreatePlanRequestTrial.md)
 - [CreateProject201Response](docs/CreateProject201Response.md)
 - [CreateProjectRequest](docs/CreateProjectRequest.md)
 - [CreateRole201Response](docs/CreateRole201Response.md)
 - [CreateRole201ResponseRole](docs/CreateRole201ResponseRole.md)
 - [CreateRole201ResponseRolePermissionsInner](docs/CreateRole201ResponseRolePermissionsInner.md)
 - [CreateRoleRequest](docs/CreateRoleRequest.md)
 - [CreateRoleRequestCollectionPermissionsValue](docs/CreateRoleRequestCollectionPermissionsValue.md)
 - [CreateRoleRequestPermissionsInner](docs/CreateRoleRequestPermissionsInner.md)
 - [CreateWallet201Response](docs/CreateWallet201Response.md)
 - [CreateWallet201ResponseData](docs/CreateWallet201ResponseData.md)
 - [CreateWalletRequest](docs/CreateWalletRequest.md)
 - [CreateWalletWebhook201Response](docs/CreateWalletWebhook201Response.md)
 - [CreateWalletWebhookRequest](docs/CreateWalletWebhookRequest.md)
 - [CreateWalletWebhookRequestFilters](docs/CreateWalletWebhookRequestFilters.md)
 - [DashboardActivityItem](docs/DashboardActivityItem.md)
 - [DashboardOverviewData](docs/DashboardOverviewData.md)
 - [DashboardOverviewDataActiveUsers](docs/DashboardOverviewDataActiveUsers.md)
 - [DashboardOverviewDataLatency](docs/DashboardOverviewDataLatency.md)
 - [DashboardOverviewDataLatencyInstanceRollup](docs/DashboardOverviewDataLatencyInstanceRollup.md)
 - [DashboardOverviewDataLatencyTopRoutesByImpactHintInner](docs/DashboardOverviewDataLatencyTopRoutesByImpactHintInner.md)
 - [DashboardOverviewDataProject](docs/DashboardOverviewDataProject.md)
 - [DashboardOverviewDataRequestVolume14dInner](docs/DashboardOverviewDataRequestVolume14dInner.md)
 - [DashboardOverviewDataRequests](docs/DashboardOverviewDataRequests.md)
 - [DashboardOverviewDataUptime](docs/DashboardOverviewDataUptime.md)
 - [DataListResponse](docs/DataListResponse.md)
 - [DataListResponseDataInner](docs/DataListResponseDataInner.md)
 - [DataResponse](docs/DataResponse.md)
 - [DatabaseConfig](docs/DatabaseConfig.md)
 - [DeleteBackup200Response](docs/DeleteBackup200Response.md)
 - [DeleteFunction200Response](docs/DeleteFunction200Response.md)
 - [DeleteOrganization200Response](docs/DeleteOrganization200Response.md)
 - [DeleteRole200Response](docs/DeleteRole200Response.md)
 - [DeleteSubOrganization200Response](docs/DeleteSubOrganization200Response.md)
 - [Disable2FARequest](docs/Disable2FARequest.md)
 - [DownloadBucketFile403Response](docs/DownloadBucketFile403Response.md)
 - [DownloadBucketFile404Response](docs/DownloadBucketFile404Response.md)
 - [DownloadInvoice200Response](docs/DownloadInvoice200Response.md)
 - [EditMessage200Response](docs/EditMessage200Response.md)
 - [EditMessage200ResponseData](docs/EditMessage200ResponseData.md)
 - [EditMessageRequest](docs/EditMessageRequest.md)
 - [EditMessageRequestE2ee](docs/EditMessageRequestE2ee.md)
 - [EmailRequest](docs/EmailRequest.md)
 - [EmailRequestTo](docs/EmailRequestTo.md)
 - [EmailTemplateCatalogItem](docs/EmailTemplateCatalogItem.md)
 - [EmailTemplateResolved](docs/EmailTemplateResolved.md)
 - [EnablePaymentProcessing200Response](docs/EnablePaymentProcessing200Response.md)
 - [EnablePaymentProcessing200ResponseData](docs/EnablePaymentProcessing200ResponseData.md)
 - [EnablePaymentProcessingRequest](docs/EnablePaymentProcessingRequest.md)
 - [EnqueueProjectEmail202Response](docs/EnqueueProjectEmail202Response.md)
 - [EraseUserData200Response](docs/EraseUserData200Response.md)
 - [EraseUserData200ResponseData](docs/EraseUserData200ResponseData.md)
 - [EraseUserData409Response](docs/EraseUserData409Response.md)
 - [EraseUserDataRequest](docs/EraseUserDataRequest.md)
 - [ErrorDetails](docs/ErrorDetails.md)
 - [EstimateNetworkFee200Response](docs/EstimateNetworkFee200Response.md)
 - [EstimateNetworkFeeRequest](docs/EstimateNetworkFeeRequest.md)
 - [EstimateNonCustodialGas200Response](docs/EstimateNonCustodialGas200Response.md)
 - [EstimateNonCustodialGas200ResponseData](docs/EstimateNonCustodialGas200ResponseData.md)
 - [EstimateNonCustodialGasRequest](docs/EstimateNonCustodialGasRequest.md)
 - [EstimateNonCustodialGasRequestTransaction](docs/EstimateNonCustodialGasRequestTransaction.md)
 - [ExecuteFunctionRequest](docs/ExecuteFunctionRequest.md)
 - [ExecuteIntegrationRequest](docs/ExecuteIntegrationRequest.md)
 - [ExportUserData200Response](docs/ExportUserData200Response.md)
 - [FeatureNotAllowedError](docs/FeatureNotAllowedError.md)
 - [Field](docs/Field.md)
 - [FieldDefault](docs/FieldDefault.md)
 - [FileListResponse](docs/FileListResponse.md)
 - [FileMetadata](docs/FileMetadata.md)
 - [FileResponse](docs/FileResponse.md)
 - [FileUploadResponse](docs/FileUploadResponse.md)
 - [Function](docs/Function.md)
 - [FunctionExecution](docs/FunctionExecution.md)
 - [FunctionExecutionResponse](docs/FunctionExecutionResponse.md)
 - [FunctionExecutionResponseData](docs/FunctionExecutionResponseData.md)
 - [FunctionExecutionStatusResponse](docs/FunctionExecutionStatusResponse.md)
 - [FunctionExecutionStatusResponseData](docs/FunctionExecutionStatusResponseData.md)
 - [FunctionExecutionStatusResponseDataLogs](docs/FunctionExecutionStatusResponseDataLogs.md)
 - [FunctionListResponse](docs/FunctionListResponse.md)
 - [FunctionListResponseData](docs/FunctionListResponseData.md)
 - [FunctionLogsResponse](docs/FunctionLogsResponse.md)
 - [FunctionLogsResponseData](docs/FunctionLogsResponseData.md)
 - [FunctionResponse](docs/FunctionResponse.md)
 - [FunctionStats](docs/FunctionStats.md)
 - [FunctionTrigger](docs/FunctionTrigger.md)
 - [GenerateAccessReview200Response](docs/GenerateAccessReview200Response.md)
 - [GenerateAccessReview200ResponseReport](docs/GenerateAccessReview200ResponseReport.md)
 - [GenerateAccessReviewRequest](docs/GenerateAccessReviewRequest.md)
 - [GenerateAccessReviewRequestReviewPeriod](docs/GenerateAccessReviewRequestReviewPeriod.md)
 - [GenerateDataProcessingRecord200Response](docs/GenerateDataProcessingRecord200Response.md)
 - [GenerateDataProcessingRecord200ResponseRecord](docs/GenerateDataProcessingRecord200ResponseRecord.md)
 - [GenerateDataProcessingRecordRequest](docs/GenerateDataProcessingRecordRequest.md)
 - [GeneratePresignedUploadRequest](docs/GeneratePresignedUploadRequest.md)
 - [GeneratePrivateKey200Response](docs/GeneratePrivateKey200Response.md)
 - [GeneratePrivateKey200ResponseData](docs/GeneratePrivateKey200ResponseData.md)
 - [GeneratePrivateKeyRequest](docs/GeneratePrivateKeyRequest.md)
 - [GenerateSignedUrlRequest](docs/GenerateSignedUrlRequest.md)
 - [GetActiveUsers200Response](docs/GetActiveUsers200Response.md)
 - [GetActiveUsers200ResponseUsersInner](docs/GetActiveUsers200ResponseUsersInner.md)
 - [GetAdminAuditEvents200Response](docs/GetAdminAuditEvents200Response.md)
 - [GetAdminPayoutDashboard200Response](docs/GetAdminPayoutDashboard200Response.md)
 - [GetAdminPayoutDashboard200ResponseData](docs/GetAdminPayoutDashboard200ResponseData.md)
 - [GetAdminPayoutDashboard200ResponseDataByCurrencyInner](docs/GetAdminPayoutDashboard200ResponseDataByCurrencyInner.md)
 - [GetAllFees200Response](docs/GetAllFees200Response.md)
 - [GetAllFees200ResponseData](docs/GetAllFees200ResponseData.md)
 - [GetAvailableOAuthProviders200Response](docs/GetAvailableOAuthProviders200Response.md)
 - [GetAvailableOAuthProviders200ResponseProvidersInner](docs/GetAvailableOAuthProviders200ResponseProvidersInner.md)
 - [GetAvailableRoles200Response](docs/GetAvailableRoles200Response.md)
 - [GetAvailableRoles200ResponseDataInner](docs/GetAvailableRoles200ResponseDataInner.md)
 - [GetBalance200Response](docs/GetBalance200Response.md)
 - [GetBalance200ResponseData](docs/GetBalance200ResponseData.md)
 - [GetBillingEstimate200Response](docs/GetBillingEstimate200Response.md)
 - [GetBillingEstimate200ResponseLineItemsInner](docs/GetBillingEstimate200ResponseLineItemsInner.md)
 - [GetBillingEstimate200ResponseSpendLimits](docs/GetBillingEstimate200ResponseSpendLimits.md)
 - [GetCancelParams200Response](docs/GetCancelParams200Response.md)
 - [GetCancelParams200ResponseData](docs/GetCancelParams200ResponseData.md)
 - [GetCancelParamsRequest](docs/GetCancelParamsRequest.md)
 - [GetChatDetails200Response](docs/GetChatDetails200Response.md)
 - [GetChatDetails200ResponseData](docs/GetChatDetails200ResponseData.md)
 - [GetChatDetails200ResponseDataParticipantsInner](docs/GetChatDetails200ResponseDataParticipantsInner.md)
 - [GetChatE2eeParticipantKeys200Response](docs/GetChatE2eeParticipantKeys200Response.md)
 - [GetChatE2eeParticipantKeys200ResponseDataInner](docs/GetChatE2eeParticipantKeys200ResponseDataInner.md)
 - [GetChatMessages200Response](docs/GetChatMessages200Response.md)
 - [GetChatMessages200ResponseData](docs/GetChatMessages200ResponseData.md)
 - [GetChatMessages200ResponseDataMessagesInner](docs/GetChatMessages200ResponseDataMessagesInner.md)
 - [GetChatMessages200ResponseDataMessagesInnerSender](docs/GetChatMessages200ResponseDataMessagesInnerSender.md)
 - [GetComplianceSummary200Response](docs/GetComplianceSummary200Response.md)
 - [GetComplianceSummary200ResponseCompliance](docs/GetComplianceSummary200ResponseCompliance.md)
 - [GetComplianceSummary200ResponseComplianceGdpr](docs/GetComplianceSummary200ResponseComplianceGdpr.md)
 - [GetComplianceSummary200ResponseComplianceSecurity](docs/GetComplianceSummary200ResponseComplianceSecurity.md)
 - [GetComplianceSummary200ResponseComplianceSoc2](docs/GetComplianceSummary200ResponseComplianceSoc2.md)
 - [GetCurrencyFeeBalance200Response](docs/GetCurrencyFeeBalance200Response.md)
 - [GetCurrencyFeeBalance200ResponseData](docs/GetCurrencyFeeBalance200ResponseData.md)
 - [GetCurrentUser200Response](docs/GetCurrentUser200Response.md)
 - [GetDashboard200Response](docs/GetDashboard200Response.md)
 - [GetDashboardOrganizationDetail200Response](docs/GetDashboardOrganizationDetail200Response.md)
 - [GetDashboardOrganizationDetail200ResponseOrganization](docs/GetDashboardOrganizationDetail200ResponseOrganization.md)
 - [GetDashboardOrganizationDetail200ResponseOrganizationProjectsInner](docs/GetDashboardOrganizationDetail200ResponseOrganizationProjectsInner.md)
 - [GetDashboardOrganizationDetail200ResponseOrganizationProjectsInnerUsersInner](docs/GetDashboardOrganizationDetail200ResponseOrganizationProjectsInnerUsersInner.md)
 - [GetDashboardOrganizationDetail200ResponseOrganizationUsersInner](docs/GetDashboardOrganizationDetail200ResponseOrganizationUsersInner.md)
 - [GetDashboardOrganizations200Response](docs/GetDashboardOrganizations200Response.md)
 - [GetDashboardOrganizations200ResponseOrganizationsInner](docs/GetDashboardOrganizations200ResponseOrganizationsInner.md)
 - [GetDashboardOrganizations200ResponseOrganizationsInnerCreatedBy](docs/GetDashboardOrganizations200ResponseOrganizationsInnerCreatedBy.md)
 - [GetEventThroughput200Response](docs/GetEventThroughput200Response.md)
 - [GetFeeBalances200Response](docs/GetFeeBalances200Response.md)
 - [GetFeeBalances200ResponseDataInner](docs/GetFeeBalances200ResponseDataInner.md)
 - [GetFeeBreakdown200Response](docs/GetFeeBreakdown200Response.md)
 - [GetFeeBreakdown200ResponseData](docs/GetFeeBreakdown200ResponseData.md)
 - [GetFunctionVersions200Response](docs/GetFunctionVersions200Response.md)
 - [GetFunctionVersions200ResponseData](docs/GetFunctionVersions200ResponseData.md)
 - [GetFunctionVersions200ResponseDataVersionsInner](docs/GetFunctionVersions200ResponseDataVersionsInner.md)
 - [GetGlobalAnalytics200Response](docs/GetGlobalAnalytics200Response.md)
 - [GetHistoricalAnalytics200Response](docs/GetHistoricalAnalytics200Response.md)
 - [GetHistoricalAnalytics200ResponseDataInner](docs/GetHistoricalAnalytics200ResponseDataInner.md)
 - [GetIntegration200Response](docs/GetIntegration200Response.md)
 - [GetIntegration200ResponseIntegration](docs/GetIntegration200ResponseIntegration.md)
 - [GetIntegrations200Response](docs/GetIntegrations200Response.md)
 - [GetIntegrations200ResponseIntegrationsInner](docs/GetIntegrations200ResponseIntegrationsInner.md)
 - [GetInvoice200Response](docs/GetInvoice200Response.md)
 - [GetInvoice200ResponseInvoice](docs/GetInvoice200ResponseInvoice.md)
 - [GetInvoices200Response](docs/GetInvoices200Response.md)
 - [GetInvoices200ResponseInvoicesInner](docs/GetInvoices200ResponseInvoicesInner.md)
 - [GetLocalSession200Response](docs/GetLocalSession200Response.md)
 - [GetMultiRoleConfig200Response](docs/GetMultiRoleConfig200Response.md)
 - [GetMultiRoleConfig200ResponseData](docs/GetMultiRoleConfig200ResponseData.md)
 - [GetNetworkStatus200Response](docs/GetNetworkStatus200Response.md)
 - [GetNetworkStatus200ResponseDataValue](docs/GetNetworkStatus200ResponseDataValue.md)
 - [GetNonCustodialBalance200Response](docs/GetNonCustodialBalance200Response.md)
 - [GetNonCustodialTransactionByHash200Response](docs/GetNonCustodialTransactionByHash200Response.md)
 - [GetNonCustodialTransactions200Response](docs/GetNonCustodialTransactions200Response.md)
 - [GetOAuthProviderConfig200Response](docs/GetOAuthProviderConfig200Response.md)
 - [GetOAuthProviderConfig200ResponseConfig](docs/GetOAuthProviderConfig200ResponseConfig.md)
 - [GetOrgOAuthProviders200Response](docs/GetOrgOAuthProviders200Response.md)
 - [GetOrgOAuthProviders200ResponseProvidersInner](docs/GetOrgOAuthProviders200ResponseProvidersInner.md)
 - [GetOrganizationMembers200Response](docs/GetOrganizationMembers200Response.md)
 - [GetOrganizationUsage200Response](docs/GetOrganizationUsage200Response.md)
 - [GetOrganizationUsage200ResponseAllOfSuborgsInner](docs/GetOrganizationUsage200ResponseAllOfSuborgsInner.md)
 - [GetOrganizationUsers200Response](docs/GetOrganizationUsers200Response.md)
 - [GetOrganizationUsers200ResponseUsersInner](docs/GetOrganizationUsers200ResponseUsersInner.md)
 - [GetOrganizationUsers200ResponseUsersInnerProject](docs/GetOrganizationUsers200ResponseUsersInnerProject.md)
 - [GetOverage200Response](docs/GetOverage200Response.md)
 - [GetOverage200ResponseOverageInner](docs/GetOverage200ResponseOverageInner.md)
 - [GetPaymentRecords200Response](docs/GetPaymentRecords200Response.md)
 - [GetPaymentRecords200ResponseData](docs/GetPaymentRecords200ResponseData.md)
 - [GetPaymentRecords200ResponseDataPagination](docs/GetPaymentRecords200ResponseDataPagination.md)
 - [GetPaymentRecords200ResponseDataRecordsInner](docs/GetPaymentRecords200ResponseDataRecordsInner.md)
 - [GetPayoutHistory200Response](docs/GetPayoutHistory200Response.md)
 - [GetPayoutHistory200ResponseDataInner](docs/GetPayoutHistory200ResponseDataInner.md)
 - [GetPendingPayouts200Response](docs/GetPendingPayouts200Response.md)
 - [GetPendingPayouts200ResponseDataInner](docs/GetPendingPayouts200ResponseDataInner.md)
 - [GetPendingRoleElevationRequests200Response](docs/GetPendingRoleElevationRequests200Response.md)
 - [GetPermissionsMatrix200Response](docs/GetPermissionsMatrix200Response.md)
 - [GetPermissionsMatrix200ResponseData](docs/GetPermissionsMatrix200ResponseData.md)
 - [GetPlans200Response](docs/GetPlans200Response.md)
 - [GetProjectAnalytics200Response](docs/GetProjectAnalytics200Response.md)
 - [GetProjectCaptchaConfig200Response](docs/GetProjectCaptchaConfig200Response.md)
 - [GetProjectCaptchaConfig200ResponseCaptcha](docs/GetProjectCaptchaConfig200ResponseCaptcha.md)
 - [GetProjectEmailAnalytics200Response](docs/GetProjectEmailAnalytics200Response.md)
 - [GetProjectEmailSmtp200Response](docs/GetProjectEmailSmtp200Response.md)
 - [GetProjectEmailTemplate200Response](docs/GetProjectEmailTemplate200Response.md)
 - [GetProjectFcmConfig200Response](docs/GetProjectFcmConfig200Response.md)
 - [GetProjectFcmConfig200ResponseData](docs/GetProjectFcmConfig200ResponseData.md)
 - [GetProjectFeeDashboard200Response](docs/GetProjectFeeDashboard200Response.md)
 - [GetProjectFeeDashboard200ResponseData](docs/GetProjectFeeDashboard200ResponseData.md)
 - [GetProjectFeeDashboard200ResponseDataBalancesInner](docs/GetProjectFeeDashboard200ResponseDataBalancesInner.md)
 - [GetProjectFeeDashboard200ResponseDataRecentPayoutsInner](docs/GetProjectFeeDashboard200ResponseDataRecentPayoutsInner.md)
 - [GetProjectOAuthProviders200Response](docs/GetProjectOAuthProviders200Response.md)
 - [GetProjectOAuthProviders200ResponseProvidersInner](docs/GetProjectOAuthProviders200ResponseProvidersInner.md)
 - [GetProjectSmsByo200Response](docs/GetProjectSmsByo200Response.md)
 - [GetProjectUsers200Response](docs/GetProjectUsers200Response.md)
 - [GetPublicPlans200Response](docs/GetPublicPlans200Response.md)
 - [GetRole200Response](docs/GetRole200Response.md)
 - [GetRoleElevationStatus200Response](docs/GetRoleElevationStatus200Response.md)
 - [GetScannerMetrics200Response](docs/GetScannerMetrics200Response.md)
 - [GetScannerMetrics200ResponseAlertsInner](docs/GetScannerMetrics200ResponseAlertsInner.md)
 - [GetScannerMetrics200ResponseMetricsValue](docs/GetScannerMetrics200ResponseMetricsValue.md)
 - [GetSearchAnalytics200Response](docs/GetSearchAnalytics200Response.md)
 - [GetSearchAnalytics200ResponseTopQueriesInner](docs/GetSearchAnalytics200ResponseTopQueriesInner.md)
 - [GetSearchSuggestions200Response](docs/GetSearchSuggestions200Response.md)
 - [GetSpeedUpParams200Response](docs/GetSpeedUpParams200Response.md)
 - [GetSpeedUpParams200ResponseData](docs/GetSpeedUpParams200ResponseData.md)
 - [GetSpeedUpParamsRequest](docs/GetSpeedUpParamsRequest.md)
 - [GetSubOrganizations200Response](docs/GetSubOrganizations200Response.md)
 - [GetSubscriptionTierById200Response](docs/GetSubscriptionTierById200Response.md)
 - [GetSubscriptionTierById200ResponsePlan](docs/GetSubscriptionTierById200ResponsePlan.md)
 - [GetSubscriptionTiers200Response](docs/GetSubscriptionTiers200Response.md)
 - [GetSubscriptionTiers200ResponsePlansInner](docs/GetSubscriptionTiers200ResponsePlansInner.md)
 - [GetSubscriptions200Response](docs/GetSubscriptions200Response.md)
 - [GetSubscriptions200ResponseSubscriptionsInner](docs/GetSubscriptions200ResponseSubscriptionsInner.md)
 - [GetSupportedCurrencies200Response](docs/GetSupportedCurrencies200Response.md)
 - [GetSupportedCurrencies200ResponseData](docs/GetSupportedCurrencies200ResponseData.md)
 - [GetSupportedCurrencies200ResponseDataCurrenciesInner](docs/GetSupportedCurrencies200ResponseDataCurrenciesInner.md)
 - [GetTemplates200Response](docs/GetTemplates200Response.md)
 - [GetTemplates200ResponseTemplatesInner](docs/GetTemplates200ResponseTemplatesInner.md)
 - [GetTransaction200Response](docs/GetTransaction200Response.md)
 - [GetTransaction200ResponseData](docs/GetTransaction200ResponseData.md)
 - [GetTransactionHistory200Response](docs/GetTransactionHistory200Response.md)
 - [GetTransactionHistory200ResponsePagination](docs/GetTransactionHistory200ResponsePagination.md)
 - [GetUsageStats200Response](docs/GetUsageStats200Response.md)
 - [GetUsageStats200ResponseStats](docs/GetUsageStats200ResponseStats.md)
 - [GetUsageWarnings200Response](docs/GetUsageWarnings200Response.md)
 - [GetUsageWarnings200ResponseWarningsInner](docs/GetUsageWarnings200ResponseWarningsInner.md)
 - [GetUserChats200Response](docs/GetUserChats200Response.md)
 - [GetUserChats200ResponseData](docs/GetUserChats200ResponseData.md)
 - [GetUserChats200ResponseDataChatsInner](docs/GetUserChats200ResponseDataChatsInner.md)
 - [GetUserChats200ResponseDataChatsInnerLastMessage](docs/GetUserChats200ResponseDataChatsInnerLastMessage.md)
 - [GetUserOverview200Response](docs/GetUserOverview200Response.md)
 - [GetUserOverview200ResponseFootprint](docs/GetUserOverview200ResponseFootprint.md)
 - [GetUserWallets200Response](docs/GetUserWallets200Response.md)
 - [GetUsersByRole200Response](docs/GetUsersByRole200Response.md)
 - [GetWalletFeeConfig200Response](docs/GetWalletFeeConfig200Response.md)
 - [GetWalletFeeConfig200ResponseData](docs/GetWalletFeeConfig200ResponseData.md)
 - [GetWalletPrivateKey200Response](docs/GetWalletPrivateKey200Response.md)
 - [GetWalletPrivateKey200ResponseData](docs/GetWalletPrivateKey200ResponseData.md)
 - [GetWalletWebhookLogs200Response](docs/GetWalletWebhookLogs200Response.md)
 - [GetWebhookConfig200Response](docs/GetWebhookConfig200Response.md)
 - [GetWebhookConfig200ResponseData](docs/GetWebhookConfig200ResponseData.md)
 - [GetWebhookConfig200ResponseDataTransformationsInner](docs/GetWebhookConfig200ResponseDataTransformationsInner.md)
 - [GetWebhookConfig404Response](docs/GetWebhookConfig404Response.md)
 - [HandleFlutterwaveWebhook200Response](docs/HandleFlutterwaveWebhook200Response.md)
 - [HandleFlutterwaveWebhookRequest](docs/HandleFlutterwaveWebhookRequest.md)
 - [HandleFlutterwaveWebhookRequestData](docs/HandleFlutterwaveWebhookRequestData.md)
 - [HandleFlutterwaveWebhookRequestDataCustomer](docs/HandleFlutterwaveWebhookRequestDataCustomer.md)
 - [HealthResponse](docs/HealthResponse.md)
 - [HealthResponseServices](docs/HealthResponseServices.md)
 - [ImportIntegrationRequest](docs/ImportIntegrationRequest.md)
 - [InitializeOrgPlanCheckout200Response](docs/InitializeOrgPlanCheckout200Response.md)
 - [InitializeOrgPlanCheckout200ResponseData](docs/InitializeOrgPlanCheckout200ResponseData.md)
 - [InitializeOrgPlanCheckoutRequest](docs/InitializeOrgPlanCheckoutRequest.md)
 - [InitializePayment200Response](docs/InitializePayment200Response.md)
 - [InitializePayment200ResponseData](docs/InitializePayment200ResponseData.md)
 - [InitializePaymentForProjectRequest](docs/InitializePaymentForProjectRequest.md)
 - [InitializePaymentRequest](docs/InitializePaymentRequest.md)
 - [InitializePaymentRequestCustomer](docs/InitializePaymentRequestCustomer.md)
 - [InitiateAddressVerification200Response](docs/InitiateAddressVerification200Response.md)
 - [InitiateOAuth400Response](docs/InitiateOAuth400Response.md)
 - [InitiateOAuth404Response](docs/InitiateOAuth404Response.md)
 - [InitiateOrgOAuth400Response](docs/InitiateOrgOAuth400Response.md)
 - [InternalCustomDomainAddonRequest](docs/InternalCustomDomainAddonRequest.md)
 - [InternalDomainDnsRecheckBatchRequest](docs/InternalDomainDnsRecheckBatchRequest.md)
 - [InviteMemberRequest](docs/InviteMemberRequest.md)
 - [InviteSubOrganizationMember200Response](docs/InviteSubOrganizationMember200Response.md)
 - [InviteTeamMember200Response](docs/InviteTeamMember200Response.md)
 - [Limits](docs/Limits.md)
 - [ListApiKeys200Response](docs/ListApiKeys200Response.md)
 - [ListBackups200Response](docs/ListBackups200Response.md)
 - [ListBackups200ResponseBackupsInner](docs/ListBackups200ResponseBackupsInner.md)
 - [ListCollections200Response](docs/ListCollections200Response.md)
 - [ListNonCustodialAddresses200Response](docs/ListNonCustodialAddresses200Response.md)
 - [ListOAuthProviders200Response](docs/ListOAuthProviders200Response.md)
 - [ListOAuthProviders200ResponseProvidersInner](docs/ListOAuthProviders200ResponseProvidersInner.md)
 - [ListOrganizations200Response](docs/ListOrganizations200Response.md)
 - [ListProjectEmailTemplates200Response](docs/ListProjectEmailTemplates200Response.md)
 - [ListProjects200Response](docs/ListProjects200Response.md)
 - [ListRoles200Response](docs/ListRoles200Response.md)
 - [ListWalletWebhooks200Response](docs/ListWalletWebhooks200Response.md)
 - [LogSecurityEvent200Response](docs/LogSecurityEvent200Response.md)
 - [LogSecurityEvent200ResponseEvent](docs/LogSecurityEvent200ResponseEvent.md)
 - [LogSecurityEventRequest](docs/LogSecurityEventRequest.md)
 - [LogSecurityEventRequestDetails](docs/LogSecurityEventRequestDetails.md)
 - [LoginLocalUser200Response](docs/LoginLocalUser200Response.md)
 - [LoginLocalUser200ResponseUser](docs/LoginLocalUser200ResponseUser.md)
 - [LoginLocalUser403Response](docs/LoginLocalUser403Response.md)
 - [LoginLocalUserRequest](docs/LoginLocalUserRequest.md)
 - [LoginRequest](docs/LoginRequest.md)
 - [MagicLinkRequest](docs/MagicLinkRequest.md)
 - [MarkMessagesAsRead200Response](docs/MarkMessagesAsRead200Response.md)
 - [MarkMessagesAsRead200ResponseData](docs/MarkMessagesAsRead200ResponseData.md)
 - [MarkMessagesAsReadRequest](docs/MarkMessagesAsReadRequest.md)
 - [Message](docs/Message.md)
 - [MessageHistoryResponse](docs/MessageHistoryResponse.md)
 - [MessageHistoryResponseData](docs/MessageHistoryResponseData.md)
 - [MessageResponse](docs/MessageResponse.md)
 - [MessageSentResponse](docs/MessageSentResponse.md)
 - [MessageSentResponseData](docs/MessageSentResponseData.md)
 - [MessageStatsResponse](docs/MessageStatsResponse.md)
 - [MessageStatsResponseData](docs/MessageStatsResponseData.md)
 - [MessageStatsResponseDataByStatus](docs/MessageStatsResponseDataByStatus.md)
 - [MessageStatsResponseDataByType](docs/MessageStatsResponseDataByType.md)
 - [MessageStatsResponseDataPeriod](docs/MessageStatsResponseDataPeriod.md)
 - [ModelError](docs/ModelError.md)
 - [MonitoringAnalyticsResponse](docs/MonitoringAnalyticsResponse.md)
 - [MonitoringAnalyticsResponseStatsInner](docs/MonitoringAnalyticsResponseStatsInner.md)
 - [MonitoringAnalyticsResponseTotals](docs/MonitoringAnalyticsResponseTotals.md)
 - [MonitoringLogsResponse](docs/MonitoringLogsResponse.md)
 - [MonitoringLogsResponseLogsInner](docs/MonitoringLogsResponseLogsInner.md)
 - [MonitoringLogsResponseLogsInnerUser](docs/MonitoringLogsResponseLogsInnerUser.md)
 - [MonitoringPerformanceResponse](docs/MonitoringPerformanceResponse.md)
 - [MonitoringPerformanceResponseMetrics](docs/MonitoringPerformanceResponseMetrics.md)
 - [NonCustodialAddress](docs/NonCustodialAddress.md)
 - [NonCustodialAddressResponse](docs/NonCustodialAddressResponse.md)
 - [OTPSendRequest](docs/OTPSendRequest.md)
 - [OTPVerifyRequest](docs/OTPVerifyRequest.md)
 - [OrgAddDomainResponse](docs/OrgAddDomainResponse.md)
 - [OrgCloudflareEdgeHints](docs/OrgCloudflareEdgeHints.md)
 - [OrgCloudflareEdgeHintsOwnershipVerification](docs/OrgCloudflareEdgeHintsOwnershipVerification.md)
 - [OrgCloudflareSslValidationRecord](docs/OrgCloudflareSslValidationRecord.md)
 - [OrgCustomDomainPlatformReadyRequest](docs/OrgCustomDomainPlatformReadyRequest.md)
 - [OrgDnsInstructionsResponse](docs/OrgDnsInstructionsResponse.md)
 - [OrgDnsRecord](docs/OrgDnsRecord.md)
 - [OrgDomainEntryOrgConsole](docs/OrgDomainEntryOrgConsole.md)
 - [OrgDomainEntryWithDns](docs/OrgDomainEntryWithDns.md)
 - [OrgDomainsListResponse](docs/OrgDomainsListResponse.md)
 - [OrgOAuthCallback400Response](docs/OrgOAuthCallback400Response.md)
 - [OrgPatchDomainResponse](docs/OrgPatchDomainResponse.md)
 - [OrgPlatformDnsVerificationCustomer](docs/OrgPlatformDnsVerificationCustomer.md)
 - [OrgVerifyCustomDomainDnsFailureResponse](docs/OrgVerifyCustomDomainDnsFailureResponse.md)
 - [OrgVerifyCustomDomainDnsSuccessResponse](docs/OrgVerifyCustomDomainDnsSuccessResponse.md)
 - [Organization](docs/Organization.md)
 - [OrganizationSummary](docs/OrganizationSummary.md)
 - [Pagination](docs/Pagination.md)
 - [PatchOrgDomainRequest](docs/PatchOrgDomainRequest.md)
 - [PatchProjectFcmConfigRequest](docs/PatchProjectFcmConfigRequest.md)
 - [PatchProjectFcmConfigRequestOneOf](docs/PatchProjectFcmConfigRequestOneOf.md)
 - [PatchProjectFcmConfigRequestOneOf1](docs/PatchProjectFcmConfigRequestOneOf1.md)
 - [Permission](docs/Permission.md)
 - [Plan](docs/Plan.md)
 - [PlatformAdminActivateOrgCustomDomainRequest](docs/PlatformAdminActivateOrgCustomDomainRequest.md)
 - [PlatformAdminCustomDomainAddonRequest](docs/PlatformAdminCustomDomainAddonRequest.md)
 - [PlatformAdminDetachMemberRequest](docs/PlatformAdminDetachMemberRequest.md)
 - [PlatformAdminDomainDnsRecheckBatchRequest](docs/PlatformAdminDomainDnsRecheckBatchRequest.md)
 - [PlatformAdminPatchOrgLimits200Response](docs/PlatformAdminPatchOrgLimits200Response.md)
 - [PresignedPostResponse](docs/PresignedPostResponse.md)
 - [PreviewProjectEmailTemplateRequest](docs/PreviewProjectEmailTemplateRequest.md)
 - [Project](docs/Project.md)
 - [ProjectDashboardOverviewResponse](docs/ProjectDashboardOverviewResponse.md)
 - [ProjectEmailSendRequest](docs/ProjectEmailSendRequest.md)
 - [ProjectSettings](docs/ProjectSettings.md)
 - [ProjectSmsByoPatchRequest](docs/ProjectSmsByoPatchRequest.md)
 - [ProjectSmsByoPublic](docs/ProjectSmsByoPublic.md)
 - [ProjectSmtpPatchRequest](docs/ProjectSmtpPatchRequest.md)
 - [ProjectSmtpSettingsPublic](docs/ProjectSmtpSettingsPublic.md)
 - [ProjectSmtpTestRequest](docs/ProjectSmtpTestRequest.md)
 - [ProjectSummary](docs/ProjectSummary.md)
 - [ProjectUsage](docs/ProjectUsage.md)
 - [ProjectUsageResponse](docs/ProjectUsageResponse.md)
 - [ProjectUsageStatsResponse](docs/ProjectUsageStatsResponse.md)
 - [ProjectUsageStatsResponseProject](docs/ProjectUsageStatsResponseProject.md)
 - [ProjectUsageSummaryResponse](docs/ProjectUsageSummaryResponse.md)
 - [ProvisionEnterpriseRequest](docs/ProvisionEnterpriseRequest.md)
 - [PushNotificationRequest](docs/PushNotificationRequest.md)
 - [PutChatE2eeKey200Response](docs/PutChatE2eeKey200Response.md)
 - [PutChatE2eeKey200ResponseData](docs/PutChatE2eeKey200ResponseData.md)
 - [PutChatE2eeKeyRequest](docs/PutChatE2eeKeyRequest.md)
 - [RateLimit](docs/RateLimit.md)
 - [RecordUsageRequest](docs/RecordUsageRequest.md)
 - [RefreshToken200Response](docs/RefreshToken200Response.md)
 - [RefreshToken400Response](docs/RefreshToken400Response.md)
 - [RefreshTokenRequest](docs/RefreshTokenRequest.md)
 - [RegenerateApiKey200Response](docs/RegenerateApiKey200Response.md)
 - [RegisterLocalUser201Response](docs/RegisterLocalUser201Response.md)
 - [RegisterLocalUser201ResponseUser](docs/RegisterLocalUser201ResponseUser.md)
 - [RegisterLocalUserRequest](docs/RegisterLocalUserRequest.md)
 - [RegisterNonCustodialAddressRequest](docs/RegisterNonCustodialAddressRequest.md)
 - [RegisterRequest](docs/RegisterRequest.md)
 - [RegisterUser429Response](docs/RegisterUser429Response.md)
 - [RegisterWithRole201Response](docs/RegisterWithRole201Response.md)
 - [RegisterWithRole201ResponseRole](docs/RegisterWithRole201ResponseRole.md)
 - [RegisterWithRole201ResponseUser](docs/RegisterWithRole201ResponseUser.md)
 - [RegisterWithRoleRequest](docs/RegisterWithRoleRequest.md)
 - [RemoveParticipantRequest](docs/RemoveParticipantRequest.md)
 - [RemoveReaction200Response](docs/RemoveReaction200Response.md)
 - [RemoveReaction200ResponseDataInner](docs/RemoveReaction200ResponseDataInner.md)
 - [RemoveTeamMember200Response](docs/RemoveTeamMember200Response.md)
 - [RequestLocalPasswordResetRequest](docs/RequestLocalPasswordResetRequest.md)
 - [RequestManualPayoutRequest](docs/RequestManualPayoutRequest.md)
 - [RequestPasswordResetRequest](docs/RequestPasswordResetRequest.md)
 - [RequestRoleElevation200Response](docs/RequestRoleElevation200Response.md)
 - [RequestRoleElevationRequest](docs/RequestRoleElevationRequest.md)
 - [ResendVerificationAuthRequest](docs/ResendVerificationAuthRequest.md)
 - [ResetLocalPasswordRequest](docs/ResetLocalPasswordRequest.md)
 - [ResetPasswordRequest](docs/ResetPasswordRequest.md)
 - [RestoreBackup200Response](docs/RestoreBackup200Response.md)
 - [RestoreBackup200ResponseRestore](docs/RestoreBackup200ResponseRestore.md)
 - [RestoreBackupRequest](docs/RestoreBackupRequest.md)
 - [RetryWebhook400Response](docs/RetryWebhook400Response.md)
 - [RetryWebhookResponse](docs/RetryWebhookResponse.md)
 - [RollbackFunctionRequest](docs/RollbackFunctionRequest.md)
 - [SMSRequest](docs/SMSRequest.md)
 - [SearchResponse](docs/SearchResponse.md)
 - [SearchResponseData](docs/SearchResponseData.md)
 - [SearchResult](docs/SearchResult.md)
 - [SearchResultItem](docs/SearchResultItem.md)
 - [SendMessage201Response](docs/SendMessage201Response.md)
 - [SendMessage201ResponseData](docs/SendMessage201ResponseData.md)
 - [SendMessageRequest](docs/SendMessageRequest.md)
 - [SendMessageRequestE2ee](docs/SendMessageRequestE2ee.md)
 - [SendPushNotification429Response](docs/SendPushNotification429Response.md)
 - [SessionResponse](docs/SessionResponse.md)
 - [SetOrgPrimaryDomainRequest](docs/SetOrgPrimaryDomainRequest.md)
 - [SignedUrlResponse](docs/SignedUrlResponse.md)
 - [SimulateAppPermissions200Response](docs/SimulateAppPermissions200Response.md)
 - [SimulateAppPermissions200ResponseEvaluated](docs/SimulateAppPermissions200ResponseEvaluated.md)
 - [SimulateAppPermissionsRequest](docs/SimulateAppPermissionsRequest.md)
 - [SimulateFunctionTriggerRequest](docs/SimulateFunctionTriggerRequest.md)
 - [StartBugAnalysisScan503Response](docs/StartBugAnalysisScan503Response.md)
 - [StartBugAnalysisScanByProjectRequest](docs/StartBugAnalysisScanByProjectRequest.md)
 - [StartBugAnalysisScanRequest](docs/StartBugAnalysisScanRequest.md)
 - [StorageConfig](docs/StorageConfig.md)
 - [SystemStatusResponse](docs/SystemStatusResponse.md)
 - [SystemStatusResponseData](docs/SystemStatusResponseData.md)
 - [SystemStatusResponseDataCpu](docs/SystemStatusResponseDataCpu.md)
 - [SystemStatusResponseDataDatabase](docs/SystemStatusResponseDataDatabase.md)
 - [SystemStatusResponseDataMemory](docs/SystemStatusResponseDataMemory.md)
 - [SystemStatusResponseDataRequests](docs/SystemStatusResponseDataRequests.md)
 - [SystemStatusResponseDataStorage](docs/SystemStatusResponseDataStorage.md)
 - [TestIntegrationRequest](docs/TestIntegrationRequest.md)
 - [TestWalletWebhook200Response](docs/TestWalletWebhook200Response.md)
 - [TestWalletWebhookRequest](docs/TestWalletWebhookRequest.md)
 - [TestWebhookTransformation200Response](docs/TestWebhookTransformation200Response.md)
 - [TestWebhookTransformation200ResponseData](docs/TestWebhookTransformation200ResponseData.md)
 - [TestWebhookTransformationRequest](docs/TestWebhookTransformationRequest.md)
 - [ToggleRoleRequest](docs/ToggleRoleRequest.md)
 - [TriggerFunctionWebhook200Response](docs/TriggerFunctionWebhook200Response.md)
 - [TriggerFunctionWebhook400Response](docs/TriggerFunctionWebhook400Response.md)
 - [TriggerFunctionWebhook401Response](docs/TriggerFunctionWebhook401Response.md)
 - [TriggerWebhookRequest](docs/TriggerWebhookRequest.md)
 - [TriggerWebhookResponse](docs/TriggerWebhookResponse.md)
 - [TwoFASetupResponse](docs/TwoFASetupResponse.md)
 - [UnlinkOAuthProvider200Response](docs/UnlinkOAuthProvider200Response.md)
 - [UpdateApiKey200Response](docs/UpdateApiKey200Response.md)
 - [UpdateApiKeyRequest](docs/UpdateApiKeyRequest.md)
 - [UpdateBucketRequest](docs/UpdateBucketRequest.md)
 - [UpdateCollectionPermissionsRequest](docs/UpdateCollectionPermissionsRequest.md)
 - [UpdateCollectionRequest](docs/UpdateCollectionRequest.md)
 - [UpdateCurrencyFeeSettingsRequest](docs/UpdateCurrencyFeeSettingsRequest.md)
 - [UpdateFunctionRequest](docs/UpdateFunctionRequest.md)
 - [UpdateFunctionRequestLimits](docs/UpdateFunctionRequestLimits.md)
 - [UpdateFunctionRequestRetryPolicy](docs/UpdateFunctionRequestRetryPolicy.md)
 - [UpdateIntegrationRequest](docs/UpdateIntegrationRequest.md)
 - [UpdateMemberRole200Response](docs/UpdateMemberRole200Response.md)
 - [UpdateMemberRoleRequest](docs/UpdateMemberRoleRequest.md)
 - [UpdateMultiRoleSettings200Response](docs/UpdateMultiRoleSettings200Response.md)
 - [UpdateMultiRoleSettingsRequest](docs/UpdateMultiRoleSettingsRequest.md)
 - [UpdateMultiRoleSettingsRequestSettings](docs/UpdateMultiRoleSettingsRequestSettings.md)
 - [UpdateNonCustodialAddress200Response](docs/UpdateNonCustodialAddress200Response.md)
 - [UpdateNonCustodialAddressRequest](docs/UpdateNonCustodialAddressRequest.md)
 - [UpdateOAuthProviderConfigRequest](docs/UpdateOAuthProviderConfigRequest.md)
 - [UpdateOrganization200Response](docs/UpdateOrganization200Response.md)
 - [UpdateOrganizationPlan200Response](docs/UpdateOrganizationPlan200Response.md)
 - [UpdateOrganizationPlan200ResponseOneOf](docs/UpdateOrganizationPlan200ResponseOneOf.md)
 - [UpdateOrganizationPlan200ResponseOneOf1](docs/UpdateOrganizationPlan200ResponseOneOf1.md)
 - [UpdateOrganizationPlanRequest](docs/UpdateOrganizationPlanRequest.md)
 - [UpdateOrganizationRequest](docs/UpdateOrganizationRequest.md)
 - [UpdatePlanRequest](docs/UpdatePlanRequest.md)
 - [UpdateProjectRequest](docs/UpdateProjectRequest.md)
 - [UpdateProjectRoleRequest](docs/UpdateProjectRoleRequest.md)
 - [UpdateRole200Response](docs/UpdateRole200Response.md)
 - [UpdateRoleRequest](docs/UpdateRoleRequest.md)
 - [UpdateSubOrganization200Response](docs/UpdateSubOrganization200Response.md)
 - [UpdateUserAccountStatus200Response](docs/UpdateUserAccountStatus200Response.md)
 - [UpdateUserAccountStatus200ResponseUser](docs/UpdateUserAccountStatus200ResponseUser.md)
 - [UpdateUserAccountStatusRequest](docs/UpdateUserAccountStatusRequest.md)
 - [UpdateUserProfile200Response](docs/UpdateUserProfile200Response.md)
 - [UpdateUserRequest](docs/UpdateUserRequest.md)
 - [UpdateWalletFeeConfig200Response](docs/UpdateWalletFeeConfig200Response.md)
 - [UpdateWalletFeeConfig200ResponseData](docs/UpdateWalletFeeConfig200ResponseData.md)
 - [UpdateWalletFeeConfigRequest](docs/UpdateWalletFeeConfigRequest.md)
 - [UpdateWalletWebhook200Response](docs/UpdateWalletWebhook200Response.md)
 - [UpdateWalletWebhookRequest](docs/UpdateWalletWebhookRequest.md)
 - [UploadFiles413Response](docs/UploadFiles413Response.md)
 - [UploadProjectLogo200Response](docs/UploadProjectLogo200Response.md)
 - [UploadVerificationDocumentsRequest](docs/UploadVerificationDocumentsRequest.md)
 - [UploadVerificationDocumentsRequestDocumentsInner](docs/UploadVerificationDocumentsRequestDocumentsInner.md)
 - [UpsertProjectEmailTemplateRequest](docs/UpsertProjectEmailTemplateRequest.md)
 - [Usage](docs/Usage.md)
 - [UsageResponse](docs/UsageResponse.md)
 - [UsageStatsResponse](docs/UsageStatsResponse.md)
 - [UsageStatsResponsePercentages](docs/UsageStatsResponsePercentages.md)
 - [UsageTrendsResponse](docs/UsageTrendsResponse.md)
 - [UsageTrendsResponseTrendsInner](docs/UsageTrendsResponseTrendsInner.md)
 - [UsageTrendsResponseTrendsInnerId](docs/UsageTrendsResponseTrendsInnerId.md)
 - [User](docs/User.md)
 - [UserSummary](docs/UserSummary.md)
 - [ValidateAddress200Response](docs/ValidateAddress200Response.md)
 - [ValidateAddress200ResponseData](docs/ValidateAddress200ResponseData.md)
 - [ValidateAddressRequest](docs/ValidateAddressRequest.md)
 - [ValidatePasswordResetToken200Response](docs/ValidatePasswordResetToken200Response.md)
 - [ValidatePasswordResetToken400Response](docs/ValidatePasswordResetToken400Response.md)
 - [ValidatePasswordResetTokenRequest](docs/ValidatePasswordResetTokenRequest.md)
 - [VerifiedRoleUpgrade200Response](docs/VerifiedRoleUpgrade200Response.md)
 - [VerifiedRoleUpgradeRequest](docs/VerifiedRoleUpgradeRequest.md)
 - [Verify2FARequest](docs/Verify2FARequest.md)
 - [VerifyEmailAuthRequest](docs/VerifyEmailAuthRequest.md)
 - [VerifyMagicLinkRequest](docs/VerifyMagicLinkRequest.md)
 - [VerifyOrgPlanPayment200Response](docs/VerifyOrgPlanPayment200Response.md)
 - [VerifyOrgPlanPayment200ResponseData](docs/VerifyOrgPlanPayment200ResponseData.md)
 - [VerifyPayment200Response](docs/VerifyPayment200Response.md)
 - [VerifyPayment200ResponseData](docs/VerifyPayment200ResponseData.md)
 - [VerifyPayment200ResponseDataSubscription](docs/VerifyPayment200ResponseDataSubscription.md)
 - [VerifyProjectEmailSmtpDomainRequest](docs/VerifyProjectEmailSmtpDomainRequest.md)
 - [WalletBalance](docs/WalletBalance.md)
 - [WalletTransaction](docs/WalletTransaction.md)
 - [WalletTransactionTokenTransfersInner](docs/WalletTransactionTokenTransfersInner.md)
 - [WalletWebhook](docs/WalletWebhook.md)
 - [WalletWebhookFilters](docs/WalletWebhookFilters.md)
 - [WalletWebhookStats](docs/WalletWebhookStats.md)
 - [WebhookListResponse](docs/WebhookListResponse.md)
 - [WebhookLog](docs/WebhookLog.md)
 - [WebhookLogResponse](docs/WebhookLogResponse.md)
 - [WebhookStatsResponse](docs/WebhookStatsResponse.md)
 - [WebhookStatsResponseEventStatsInner](docs/WebhookStatsResponseEventStatsInner.md)
 - [WebhookStatsResponseStatusStatsInner](docs/WebhookStatsResponseStatusStatsInner.md)
 - [Withdraw200Response](docs/Withdraw200Response.md)
 - [Withdraw200ResponseData](docs/Withdraw200ResponseData.md)
 - [WithdrawRequest](docs/WithdrawRequest.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization


Authentication schemes defined for the API:
<a id="OrgBearerAuth"></a>
### OrgBearerAuth

- **Type**: Bearer authentication (JWT)

<a id="ProjectBearerAuth"></a>
### ProjectBearerAuth

- **Type**: Bearer authentication (JWT)

<a id="ApiKeyAuth"></a>
### ApiKeyAuth

- **Type**: API key
- **API key parameter name**: X-API-Key
- **Location**: HTTP header

<a id="InternalApiKey"></a>
### InternalApiKey

- **Type**: API key
- **API key parameter name**: X-Internal-Api-Key
- **Location**: HTTP header

