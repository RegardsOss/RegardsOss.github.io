---
layout: classic-docs
title: REGARDS Access rights API
---

{% include toc.md %}

{% include howto-api.md name="rs-dam" %}

# AccessGroupController

## Retrieve access group

{% include_relative generated-snippets/AccessGroupControllerIT/testRetrieveAccessGroup/http-request.md %}

{% include_relative generated-snippets/AccessGroupControllerIT/testRetrieveAccessGroup/request-body.md %}

{% include_relative generated-snippets/AccessGroupControllerIT/testRetrieveAccessGroup/http-response.md %}

## Associated user to access group

{% include_relative generated-snippets/AccessGroupControllerIT/testAssociateUserToAccessGroup/http-request.md %}

{% include_relative generated-snippets/AccessGroupControllerIT/testAssociateUserToAccessGroup/request-body.md %}

{% include_relative generated-snippets/AccessGroupControllerIT/testAssociateUserToAccessGroup/http-response.md %}

## dissociate user from access group

{% include_relative generated-snippets/AccessGroupControllerIT/testDissociateUserFromAccessGroup/http-request.md %}

{% include_relative generated-snippets/AccessGroupControllerIT/testDissociateUserFromAccessGroup/request-body.md %}

{% include_relative generated-snippets/AccessGroupControllerIT/testDissociateUserFromAccessGroup/http-response.md %}

## Retrieve public access groups list

{% include_relative generated-snippets/AccessGroupControllerIT/testRetrievePublicAccessGroupsList/http-request.md %}

{% include_relative generated-snippets/AccessGroupControllerIT/testRetrievePublicAccessGroupsList/request-body.md %}

{% include_relative generated-snippets/AccessGroupControllerIT/testRetrievePublicAccessGroupsList/http-response.md %}

## Create access group

{% include_relative generated-snippets/AccessGroupControllerIT/testCreateAccessGroup/http-request.md %}

{% include_relative generated-snippets/AccessGroupControllerIT/testCreateAccessGroup/request-body.md %}

{% include_relative generated-snippets/AccessGroupControllerIT/testCreateAccessGroup/http-response.md %}

## Retrieve access groups list

{% include_relative generated-snippets/AccessGroupControllerIT/testRetrieveAccessGroupsList/http-request.md %}

{% include_relative generated-snippets/AccessGroupControllerIT/testRetrieveAccessGroupsList/request-body.md %}

{% include_relative generated-snippets/AccessGroupControllerIT/testRetrieveAccessGroupsList/http-response.md %}

## Delete access group

{% include_relative generated-snippets/AccessGroupControllerIT/testDeleteAccessGroup/http-request.md %}

{% include_relative generated-snippets/AccessGroupControllerIT/testDeleteAccessGroup/request-body.md %}

{% include_relative generated-snippets/AccessGroupControllerIT/testDeleteAccessGroup/http-response.md %}

## Update access right

{% include_relative generated-snippets/AccessRightControllerNoTxIT/testUpdateAccessRight/http-request.md %}

{% include_relative generated-snippets/AccessRightControllerNoTxIT/testUpdateAccessRight/request-body.md %}

{% include_relative generated-snippets/AccessRightControllerNoTxIT/testUpdateAccessRight/http-response.md %}

# AccessRightController

An access right is an association between a dataset and a user group. It defines the access rights for the users of the group to the associated dataset.

## Retrieve access rights for a given group

{% include_relative generated-snippets/AccessRightControllerIT/testRetrieveAccessRightsGroupArgs/http-request.md %}

{% include_relative generated-snippets/AccessRightControllerIT/testRetrieveAccessRightsGroupArgs/request-body.md %}

{% include_relative generated-snippets/AccessRightControllerIT/testRetrieveAccessRightsGroupArgs/http-response.md %}

## Retrieve dataset with associated access rights

{% include_relative generated-snippets/AccessRightControllerIT/testRetrieveDatasetWithAccessRights/http-request.md %}

{% include_relative generated-snippets/AccessRightControllerIT/testRetrieveDatasetWithAccessRights/request-body.md %}

{% include_relative generated-snippets/AccessRightControllerIT/testRetrieveDatasetWithAccessRights/http-response.md %}

## Retrieve access rights for a given dataset

{% include_relative generated-snippets/AccessRightControllerIT/testRetrieveAccessRightsDSArgs/http-request.md %}

{% include_relative generated-snippets/AccessRightControllerIT/testRetrieveAccessRightsDSArgs/request-body.md %}

{% include_relative generated-snippets/AccessRightControllerIT/testRetrieveAccessRightsDSArgs/http-response.md %}

## Retrieve access right for a given dataset and a given group

{% include_relative generated-snippets/AccessRightControllerIT/testRetrieveAccessRightsFullArgs/http-request.md %}

{% include_relative generated-snippets/AccessRightControllerIT/testRetrieveAccessRightsFullArgs/request-body.md %}

{% include_relative generated-snippets/AccessRightControllerIT/testRetrieveAccessRightsFullArgs/http-response.md %}

## Retrieve access rights

{% include_relative generated-snippets/AccessRightControllerIT/testRetrieveAccessRight/http-request.md %}

{% include_relative generated-snippets/AccessRightControllerIT/testRetrieveAccessRight/request-body.md %}

{% include_relative generated-snippets/AccessRightControllerIT/testRetrieveAccessRight/http-response.md %}

## Ask for group autorization on a given dataset

{% include_relative generated-snippets/AccessRightControllerIT/testIsUserAutorisedToAccessDataset/http-request.md %}

{% include_relative generated-snippets/AccessRightControllerIT/testIsUserAutorisedToAccessDataset/request-body.md %}

{% include_relative generated-snippets/AccessRightControllerIT/testIsUserAutorisedToAccessDataset/http-response.md %}

## Retrieve all access rights

{% include_relative generated-snippets/AccessRightControllerIT/testRetrieveAccessRightsNoArgs/http-request.md %}

{% include_relative generated-snippets/AccessRightControllerIT/testRetrieveAccessRightsNoArgs/request-body.md %}

{% include_relative generated-snippets/AccessRightControllerIT/testRetrieveAccessRightsNoArgs/http-response.md %}

## Create a new access right

{% include_relative generated-snippets/AccessRightControllerIT/testCreateAccessRight/http-request.md %}

{% include_relative generated-snippets/AccessRightControllerIT/testCreateAccessRight/request-body.md %}

{% include_relative generated-snippets/AccessRightControllerIT/testCreateAccessRight/http-response.md %}

# UserController

## Retrieve access groups of a given user

{% include_relative generated-snippets/UserControllerIT/testRetrieveAccessGroupsListOfUser/http-request.md %}

{% include_relative generated-snippets/UserControllerIT/testRetrieveAccessGroupsListOfUser/request-body.md %}

{% include_relative generated-snippets/UserControllerIT/testRetrieveAccessGroupsListOfUser/http-response.md %}
