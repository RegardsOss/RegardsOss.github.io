---
id: backend-admin-api
title: REGARDS admin API
sidebar_label: Admin project API
slug: /development/backend/admin/api/
---


## How to access API endpoints

You can access each endpoint of this API thanks to a `Curl` request.

You can request without auhentication by adding the REGARDS project in the request thanks to the parameter `scope`
```bash
curl http://localhost:<rs-admin port>/<endpoint>?scope=<project>
```
Or you can authenticate to access admin endpoints. To do so, use the [authentication API](../../authentication/api/) to get a token and then add the token to the request headers.

```bash
curl http://localhost:<rs-admin port>/<endpoint> -H 'Authorization: bearer <token>'
```

To access endpoints from `outside` the microservice installation server, you need to use the "gateway" microservice. To do so, use the here under access point instead of the previous one.

```bash
curl http://<gateway host>:<gateway port>/rs-admin/api/v1/<endpoint>
```

# RegistrationController

## Overview

  This API manages registrations.

## Request access

  This endpoint allows to request a new access to a project.

{@import generated-snippets/RegistrationControllerIT/requestAccessSuccess/http-request.md}

{@import generated-snippets/RegistrationControllerIT/requestAccessSuccess/request-body.md}

{@import generated-snippets/RegistrationControllerIT/requestAccessSuccess/http-response.md}

  In case, you are trying to request a new access while you have already have one or requesting one:

{@import generated-snippets/RegistrationControllerIT/requestAccessConflict/http-request.md}

{@import generated-snippets/RegistrationControllerIT/requestAccessConflict/request-body.md}

{@import generated-snippets/RegistrationControllerIT/requestAccessConflict/http-response.md}

## Accept access

  This endpoint allows to accept a new access to a project.

{@import generated-snippets/RegistrationControllerIT/acceptAccessRequest/http-request.md}

{@import generated-snippets/RegistrationControllerIT/acceptAccessRequest/request-body.md}

{@import generated-snippets/RegistrationControllerIT/acceptAccessRequest/http-response.md}

## Deny access

  This endpoint allows to deny a new access to a project by its id.

{@import generated-snippets/RegistrationControllerIT/denyAccessRequest/http-request.md}

{@import generated-snippets/RegistrationControllerIT/denyAccessRequest/request-body.md}

{@import generated-snippets/RegistrationControllerIT/denyAccessRequest/http-response.md}

  In case you want to deny an access twice in a row, you'll get:


{@import generated-snippets/RegistrationControllerIT/denyAccessRequestTwice/http-request.md}

{@import generated-snippets/RegistrationControllerIT/denyAccessRequestTwice/request-body.md}

{@import generated-snippets/RegistrationControllerIT/denyAccessRequestTwice/http-response.md}

  In case you want to deny an unknown access:


{@import generated-snippets/RegistrationControllerIT/denyAccessRequestUnknown/http-request.md}

{@import generated-snippets/RegistrationControllerIT/denyAccessRequestUnknown/request-body.md}

{@import generated-snippets/RegistrationControllerIT/denyAccessRequestUnknown/http-response.md}

## Reject access

  This endpoint allows to reject an access request to a project.

{@import generated-snippets/RegistrationControllerIT/deleteAccessRequest/http-request.md}

{@import generated-snippets/RegistrationControllerIT/deleteAccessRequest/request-body.md}

{@import generated-snippets/RegistrationControllerIT/deleteAccessRequest/http-response.md}

## Activate an access

  This endpoint allows to activate an inactivated access to a project.

{@import generated-snippets/RegistrationControllerIT/activeAccess/http-request.md}

{@import generated-snippets/RegistrationControllerIT/activeAccess/request-body.md}

{@import generated-snippets/RegistrationControllerIT/activeAccess/http-response.md}

## Inactivate an access

  This endpoint allows to inactivate an activated access to a project.

{@import generated-snippets/RegistrationControllerIT/inactiveAccess/http-request.md}

{@import generated-snippets/RegistrationControllerIT/inactiveAccess/request-body.md}

{@import generated-snippets/RegistrationControllerIT/inactiveAccess/http-response.md}

# AccessSettingsController

## Overview

  This API manages access settings i.e. are users manually vetted by administrators or not.

## Retrieve current settings

  This endpoint allows to retrieve the current access settings.

{@import generated-snippets/AccessSettingsControllerIT/getAccessSettings/http-request.md}

{@import generated-snippets/AccessSettingsControllerIT/getAccessSettings/request-body.md}

{@import generated-snippets/AccessSettingsControllerIT/getAccessSettings/http-response.md}

## Update settings

  This endpoint allows to update current access settings by its id.

{@import generated-snippets/AccessSettingsControllerIT/updateAccessSettings/http-request.md}

{@import generated-snippets/AccessSettingsControllerIT/updateAccessSettings/request-body.md}

{@import generated-snippets/AccessSettingsControllerIT/updateAccessSettings/http-response.md}

  In case the id does not correspond to anything:

{@import generated-snippets/AccessSettingsControllerIT/updateAccessSettingsEntityNotFound/http-request.md}

{@import generated-snippets/AccessSettingsControllerIT/updateAccessSettingsEntityNotFound/request-body.md}

{@import generated-snippets/AccessSettingsControllerIT/updateAccessSettingsEntityNotFound/http-response.md}

# ProjectUsersController

## Overview

  This API manages users.

## Retrieve users per page

  This endpoint allows to retrieve a page of users according to their status and the beginning of their emails.

{@import generated-snippets/ProjectUsersControllerIT/getAllUsers/http-request.md}

{@import generated-snippets/ProjectUsersControllerIT/getAllUsers/request-body.md}

{@import generated-snippets/ProjectUsersControllerIT/getAllUsers/http-response.md}

## Retrieve a specific user

  This endpoint allows to retrieve a specific user according to its email.

{@import generated-snippets/ProjectUsersControllerIT/getUser/http-request.md}

{@import generated-snippets/ProjectUsersControllerIT/getUser/request-body.md}

{@import generated-snippets/ProjectUsersControllerIT/getUser/http-response.md}

# ProjectUserMetadataController

## Overview

  This API manages user metadata.

## Retrieve a user metadata

  This endpoint allows to retrieve the metadata of a specific user.

{@import generated-snippets/ProjectUserMetadataControllerIT/getUserMetaData/http-request.md}

{@import generated-snippets/ProjectUserMetadataControllerIT/getUserMetaData/request-body.md}

{@import generated-snippets/ProjectUserMetadataControllerIT/getUserMetaData/http-response.md}

## Update user metadata

  This endpoint allows to update user metadata according to its email.

{@import generated-snippets/ProjectUserMetadataControllerIT/updateUserMetaData/http-request.md}

{@import generated-snippets/ProjectUserMetadataControllerIT/updateUserMetaData/request-body.md}

{@import generated-snippets/ProjectUserMetadataControllerIT/updateUserMetaData/http-response.md}

## Remove user metadata

  This endpoint allows to remove all user metadata according to its email.

{@import generated-snippets/ProjectUserMetadataControllerIT/deleteUserMetaData/http-request.md}

{@import generated-snippets/ProjectUserMetadataControllerIT/deleteUserMetaData/request-body.md}

{@import generated-snippets/ProjectUserMetadataControllerIT/deleteUserMetaData/http-response.md}

# RoleController

## Overview

  This API manages roles.

## List all roles

  This endpoint allows to list all roles.

{@import generated-snippets/RolesControllerIT/retrieveRoleList/http-request.md}

{@import generated-snippets/RolesControllerIT/retrieveRoleList/request-body.md}

{@import generated-snippets/RolesControllerIT/retrieveRoleList/http-response.md}

## List roles that can access a specific resource.

  This endpoint allows to list all roles that can access a specific resource acccording to its id.

{@import generated-snippets/RolesControllerIT/retrieveRoleAsswoatedToAResourceAccess/http-request.md}

{@import generated-snippets/RolesControllerIT/retrieveRoleAsswoatedToAResourceAccess/request-body.md}

{@import generated-snippets/RolesControllerIT/retrieveRoleAsswoatedToAResourceAccess/http-response.md}

## Create custom role

  This endpoint allows to create custom role.

{@import generated-snippets/RolesControllerIT/createRole/http-request.md}

{@import generated-snippets/RolesControllerIT/createRole/request-body.md}

{@import generated-snippets/RolesControllerIT/createRole/http-response.md}

## Retrieve role

  This endpoint allows to a specific role accoring to its name.

{@import generated-snippets/RolesControllerIT/retrieveRole/http-request.md}

{@import generated-snippets/RolesControllerIT/retrieveRole/request-body.md}

{@import generated-snippets/RolesControllerIT/retrieveRole/http-response.md}

## Update role

  This endpoint allows to update a specific role according to its name.

{@import generated-snippets/RolesControllerIT/updateRole/http-request.md}

{@import generated-snippets/RolesControllerIT/updateRole/request-body.md}

{@import generated-snippets/RolesControllerIT/updateRole/http-response.md}

## Remove role

  This endpoint allows to remove a role according to its name.

{@import generated-snippets/RolesControllerIT/removeRole/http-request.md}

{@import generated-snippets/RolesControllerIT/removeRole/request-body.md}

{@import generated-snippets/RolesControllerIT/removeRole/http-response.md}

  Please note that removing native roles is forbidden. This is the proof:

{@import generated-snippets/RolesControllerIT/removeRoleNative/http-request.md}

{@import generated-snippets/RolesControllerIT/removeRoleNative/request-body.md}

{@import generated-snippets/RolesControllerIT/removeRoleNative/http-response.md}

# ResourceController

## Overview

  This API manages resources.

## Retrieve resource list

  This endpoint allows to list all resources configured.

{@import generated-snippets/ResourceControllerIT/getAllResourceAccessesAsPublicTest/http-request.md}

{@import generated-snippets/ResourceControllerIT/getAllResourceAccessesAsPublicTest/request-body.md}

{@import generated-snippets/ResourceControllerIT/getAllResourceAccessesAsPublicTest/http-response.md}

## Retrieve a single resource

  This endpoint allows to retrieve a single resource according to its id.

{@import generated-snippets/ResourceControllerIT/getResourceAccessTest/http-request.md}

{@import generated-snippets/ResourceControllerIT/getResourceAccessTest/request-body.md}

{@import generated-snippets/ResourceControllerIT/getResourceAccessTest/http-response.md}

# UserResourceController

## Overview

  This API manages association between users and resources they have access to.

## List permissions of a user

  This endpoint allows to retrieve all resources a user has access to.

{@import generated-snippets/UserResourceControllerIT/getUserPermissions/http-request.md}

{@import generated-snippets/UserResourceControllerIT/getUserPermissions/request-body.md}

{@import generated-snippets/UserResourceControllerIT/getUserPermissions/http-response.md}

# MicroserviceResourceController

## Overview

  This API manages microservice resources

## List microservice resources

  This endpoint allows to list endpoints associated to a specific controller of a specific microservice.

{@import generated-snippets/MicroserviceResourceControllerIT/retrieveMicroserviceControllerEndpointsTest/http-request.md}

{@import generated-snippets/MicroserviceResourceControllerIT/retrieveMicroserviceControllerEndpointsTest/request-body.md}

{@import generated-snippets/MicroserviceResourceControllerIT/retrieveMicroserviceControllerEndpointsTest/http-response.md}

## List microservice controllers

  This endpoint allows to list all controllers for a given microservice.

{@import generated-snippets/MicroserviceResourceControllerIT/retrieveMicroserviceControllersTest/http-request.md}

{@import generated-snippets/MicroserviceResourceControllerIT/retrieveMicroserviceControllersTest/request-body.md}

{@import generated-snippets/MicroserviceResourceControllerIT/retrieveMicroserviceControllersTest/http-response.md}

# NotificationController

## Overview

  This API manages notifications.

## List notifications

  This endpoint allows to list notification accordding to their state, if wanted.

{@import generated-snippets/NotificationControllerIT/testListNotif/http-request.md}

{@import generated-snippets/NotificationControllerIT/testListNotif/request-body.md}

{@import generated-snippets/NotificationControllerIT/testListNotif/http-response.md}

## Create notification

  This endpoint allows to create a notification.

{@import generated-snippets/NotificationControllerIT/testCreateNotification/http-request.md}

{@import generated-snippets/NotificationControllerIT/testCreateNotification/request-body.md}

{@import generated-snippets/NotificationControllerIT/testCreateNotification/http-response.md}

## Change notification state

  This endpoint allows to change notification state(READ/UNREAD).

  From READ to UNREAD:

{@import generated-snippets/NotificationControllerIT/testSetNotifUnread/http-request.md}

{@import generated-snippets/NotificationControllerIT/testSetNotifUnread/request-body.md}

{@import generated-snippets/NotificationControllerIT/testSetNotifUnread/http-response.md}

  From UNREAD to READ:

{@import generated-snippets/NotificationControllerIT/testSetNotifRead/http-request.md}

{@import generated-snippets/NotificationControllerIT/testSetNotifRead/request-body.md}

{@import generated-snippets/NotificationControllerIT/testSetNotifRead/http-response.md}

## Retrieve current user notification settings

  This endpoint allows to retrieve the current user notification settings.

{@import generated-snippets/NotificationControllerIT/testRetrieveNotifSetting/http-request.md}

{@import generated-snippets/NotificationControllerIT/testRetrieveNotifSetting/request-body.md}

{@import generated-snippets/NotificationControllerIT/testRetrieveNotifSetting/http-response.md}

# LicenseController

## Overview

  This API allows to control wether a user accepted the license.

## reset license

  This endpoint allows to reset user license agreements.

{@import generated-snippets/LicenseControllerIT/resetLicense/http-request.md}

{@import generated-snippets/LicenseControllerIT/resetLicense/request-body.md}

{@import generated-snippets/LicenseControllerIT/resetLicense/http-response.md}

# EmailController

## Overview

  This API allows send and resend emails thanks to REGARDS. It also allows to retrieve, list, deleted sent emails from history.

## List all sended emails

  Allow to retrieve all emails sent

{@import generated-snippets/EmailControllerIT/retrieveEmails/http-request.md}

{@import generated-snippets/EmailControllerIT/retrieveEmails/request-body.md}

{@import generated-snippets/EmailControllerIT/retrieveEmails/http-response.md}

## Send email

  Allow to send an email

{@import generated-snippets/EmailControllerIT/sendEmail/http-request.md}

{@import generated-snippets/EmailControllerIT/sendEmail/request-body.md}

{@import generated-snippets/EmailControllerIT/sendEmail/http-response.md}

## Resend email

  Allow to resend an email

{@import generated-snippets/EmailControllerIT/resendEmail/http-request.md}

{@import generated-snippets/EmailControllerIT/resendEmail/request-body.md}

{@import generated-snippets/EmailControllerIT/resendEmail/http-response.md}

## Retrieve one email sent

  Allow to retrieve a specific email sent

{@import generated-snippets/EmailControllerIT/retrieveEmail/http-request.md}

{@import generated-snippets/EmailControllerIT/retrieveEmail/request-body.md}

{@import generated-snippets/EmailControllerIT/retrieveEmail/http-response.md}

## Delete email

  Allow to delte a specific email sent from history

{@import generated-snippets/EmailControllerIT/deleteEmail/http-request.md}

{@import generated-snippets/EmailControllerIT/deleteEmail/request-body.md}

{@import generated-snippets/EmailControllerIT/deleteEmail/http-response.md}