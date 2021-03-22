---
id: backend-dam-access-rights-api
title: REGARDS Access rights API
sidebar_label: Access rights
slug: /development/backend/dam/api/access-rights/
---


# AccessGroupController

## Retrieve access group

{@import generated-snippets/AccessGroupControllerIT/testRetrieveAccessGroup/http-request.md}

{@import generated-snippets/AccessGroupControllerIT/testRetrieveAccessGroup/request-body.md}

{@import generated-snippets/AccessGroupControllerIT/testRetrieveAccessGroup/http-response.md}

## Associated user to access group

{@import generated-snippets/AccessGroupControllerIT/testAssociateUserToAccessGroup/http-request.md}

{@import generated-snippets/AccessGroupControllerIT/testAssociateUserToAccessGroup/request-body.md}

{@import generated-snippets/AccessGroupControllerIT/testAssociateUserToAccessGroup/http-response.md}

## dissociate user from access group

{@import generated-snippets/AccessGroupControllerIT/testDissociateUserFromAccessGroup/http-request.md}

{@import generated-snippets/AccessGroupControllerIT/testDissociateUserFromAccessGroup/request-body.md}

{@import generated-snippets/AccessGroupControllerIT/testDissociateUserFromAccessGroup/http-response.md}

## Retrieve public access groups list

{@import generated-snippets/AccessGroupControllerIT/testRetrievePublicAccessGroupsList/http-request.md}

{@import generated-snippets/AccessGroupControllerIT/testRetrievePublicAccessGroupsList/request-body.md}

{@import generated-snippets/AccessGroupControllerIT/testRetrievePublicAccessGroupsList/http-response.md}

## Create access group

{@import generated-snippets/AccessGroupControllerIT/testCreateAccessGroup/http-request.md}

{@import generated-snippets/AccessGroupControllerIT/testCreateAccessGroup/request-body.md}

{@import generated-snippets/AccessGroupControllerIT/testCreateAccessGroup/http-response.md}

## Retrieve access groups list

{@import generated-snippets/AccessGroupControllerIT/testRetrieveAccessGroupsList/http-request.md}

{@import generated-snippets/AccessGroupControllerIT/testRetrieveAccessGroupsList/request-body.md}

{@import generated-snippets/AccessGroupControllerIT/testRetrieveAccessGroupsList/http-response.md}

## Delete access group

{@import generated-snippets/AccessGroupControllerIT/testDeleteAccessGroup/http-request.md}

{@import generated-snippets/AccessGroupControllerIT/testDeleteAccessGroup/request-body.md}

{@import generated-snippets/AccessGroupControllerIT/testDeleteAccessGroup/http-response.md}

## Update access right

{@import generated-snippets/AccessRightControllerNoTxIT/testUpdateAccessRight/http-request.md}

{@import generated-snippets/AccessRightControllerNoTxIT/testUpdateAccessRight/request-body.md}

{@import generated-snippets/AccessRightControllerNoTxIT/testUpdateAccessRight/http-response.md}

# AccessRightController

An access right is an association between a dataset and a user group. It defines the access rights for the users of the group to the associated dataset.

## Retrieve access rights for a given group

{@import generated-snippets/AccessRightControllerIT/testRetrieveAccessRightsGroupArgs/http-request.md}

{@import generated-snippets/AccessRightControllerIT/testRetrieveAccessRightsGroupArgs/request-body.md}

{@import generated-snippets/AccessRightControllerIT/testRetrieveAccessRightsGroupArgs/http-response.md}

## Retrieve dataset with associated access rights

{@import generated-snippets/AccessRightControllerIT/testRetrieveDatasetWithAccessRights/http-request.md}

{@import generated-snippets/AccessRightControllerIT/testRetrieveDatasetWithAccessRights/request-body.md}

{@import generated-snippets/AccessRightControllerIT/testRetrieveDatasetWithAccessRights/http-response.md}

## Retrieve access rights for a given dataset

{@import generated-snippets/AccessRightControllerIT/testRetrieveAccessRightsDSArgs/http-request.md}

{@import generated-snippets/AccessRightControllerIT/testRetrieveAccessRightsDSArgs/request-body.md}

{@import generated-snippets/AccessRightControllerIT/testRetrieveAccessRightsDSArgs/http-response.md}

## Retrieve access right for a given dataset and a given group

{@import generated-snippets/AccessRightControllerIT/testRetrieveAccessRightsFullArgs/http-request.md}

{@import generated-snippets/AccessRightControllerIT/testRetrieveAccessRightsFullArgs/request-body.md}

{@import generated-snippets/AccessRightControllerIT/testRetrieveAccessRightsFullArgs/http-response.md}

## Retrieve access rights

{@import generated-snippets/AccessRightControllerIT/testRetrieveAccessRight/http-request.md}

{@import generated-snippets/AccessRightControllerIT/testRetrieveAccessRight/request-body.md}

{@import generated-snippets/AccessRightControllerIT/testRetrieveAccessRight/http-response.md}

## Ask for group autorization on a given dataset

{@import generated-snippets/AccessRightControllerIT/testIsUserAutorisedToAccessDataset/http-request.md}

{@import generated-snippets/AccessRightControllerIT/testIsUserAutorisedToAccessDataset/request-body.md}

{@import generated-snippets/AccessRightControllerIT/testIsUserAutorisedToAccessDataset/http-response.md}

## Retrieve all access rights

{@import generated-snippets/AccessRightControllerIT/testRetrieveAccessRightsNoArgs/http-request.md}

{@import generated-snippets/AccessRightControllerIT/testRetrieveAccessRightsNoArgs/request-body.md}

{@import generated-snippets/AccessRightControllerIT/testRetrieveAccessRightsNoArgs/http-response.md}

## Create a new access right

{@import generated-snippets/AccessRightControllerIT/testCreateAccessRight/http-request.md}

{@import generated-snippets/AccessRightControllerIT/testCreateAccessRight/request-body.md}

{@import generated-snippets/AccessRightControllerIT/testCreateAccessRight/http-response.md}

# UserController

## Retrieve access groups of a given user

{@import generated-snippets/UserControllerIT/testRetrieveAccessGroupsListOfUser/http-request.md}

{@import generated-snippets/UserControllerIT/testRetrieveAccessGroupsListOfUser/request-body.md}

{@import generated-snippets/UserControllerIT/testRetrieveAccessGroupsListOfUser/http-response.md}
