---
id: backend-access-api
title: REGARDS Access API
sidebar_label: Access project API
slug: /development/backend/access/api/
---


## How to access API endpoints

You can access each endpoint of this API thanks to a `Curl` request.

You can request without authentication by adding the REGARDS project in the request thanks to the parameter `scope`
```bash
curl http://localhost:<rs-access-project port>/<endpoint>?scope=<project>
```
Or you can authenticate to access admin endpoints. To do so, use the [authentication API](../../authentication/api/) to get a token and then add the token to the request headers.

```bash
curl http://localhost:<rs-access-project port>/<endpoint> -H 'Authorization: bearer <token>'
```

To access endpoints from `outside` the microservice installation server, you need to use the "gateway" microservice. To do so, use the here under access point instead of the previous one.

```bash
curl http://<gateway host>:<gateway port>/rs-access-project/api/v1/<endpoint>
```


# LinkUIPluginDatasets

  Allows to associate an UI plugin to a dataset

## Associate a UI plugin configuration to a dataset

{@import _generated-snippets/LinkUIPluginDatasetsIT/linkConfToDataset/http-request.md}

{@import _generated-snippets/LinkUIPluginDatasetsIT/linkConfToDataset/request-body.md}

{@import _generated-snippets/LinkUIPluginDatasetsIT/linkConfToDataset/http-response.md}

# UIConfigurationController


## Add a configuration

{@import _generated-snippets/UIConfigurationControllerIT/addConfiguration/http-request.md}

{@import _generated-snippets/UIConfigurationControllerIT/addConfiguration/request-body.md}

{@import _generated-snippets/UIConfigurationControllerIT/addConfiguration/http-response.md}

## Get a configuration

{@import _generated-snippets/UIConfigurationControllerIT/getConfiguration/http-request.md}

{@import _generated-snippets/UIConfigurationControllerIT/getConfiguration/request-body.md}

{@import _generated-snippets/UIConfigurationControllerIT/getConfiguration/http-response.md}

## Update a configuration

{@import _generated-snippets/UIConfigurationControllerIT/updateConfiguration/http-request.md}

{@import _generated-snippets/UIConfigurationControllerIT/updateConfiguration/request-body.md}

{@import _generated-snippets/UIConfigurationControllerIT/updateConfiguration/http-response.md}

# UIPluginConfigurationController


## Update UI plugin configuration

{@import _generated-snippets/UIPluginConfigurationControllerIT/updatePluginConfiguration/http-request.md}

{@import _generated-snippets/UIPluginConfigurationControllerIT/updatePluginConfiguration/request-body.md}

{@import _generated-snippets/UIPluginConfigurationControllerIT/updatePluginConfiguration/http-response.md}

## Delete UI Plugin configuration

{@import _generated-snippets/UIPluginConfigurationControllerIT/deletePluginConfiguration/http-request.md}

{@import _generated-snippets/UIPluginConfigurationControllerIT/deletePluginConfiguration/request-body.md}

{@import _generated-snippets/UIPluginConfigurationControllerIT/deletePluginConfiguration/http-response.md}

## Retrieve UI Plugin configurations by plugin type

{@import _generated-snippets/UIPluginConfigurationControllerIT/retrieveConfigurationByPluginDefinition/http-request.md}

{@import _generated-snippets/UIPluginConfigurationControllerIT/retrieveConfigurationByPluginDefinition/request-body.md}

{@import _generated-snippets/UIPluginConfigurationControllerIT/retrieveConfigurationByPluginDefinition/http-response.md}

## Create a new UI Plugin configuration

{@import _generated-snippets/UIPluginConfigurationControllerIT/createPluginConfiguration/http-request.md}

{@import _generated-snippets/UIPluginConfigurationControllerIT/createPluginConfiguration/request-body.md}

{@import _generated-snippets/UIPluginConfigurationControllerIT/createPluginConfiguration/http-response.md}

### Bad plugin conf response

{@import _generated-snippets/UIPluginConfigurationControllerIT/badPluginConfiguration/http-response.md}

## Retrieve UI plugin configurations

{@import _generated-snippets/UIPluginConfigurationControllerIT/retrieveConfigurations/http-request.md}

{@import _generated-snippets/UIPluginConfigurationControllerIT/retrieveConfigurations/request-body.md}

{@import _generated-snippets/UIPluginConfigurationControllerIT/retrieveConfigurations/http-response.md}

# UIPluginServiceController

 Allows to a handle UI Service plugins

## Retrieve UI plugin service applicable for a given dataset

{@import _generated-snippets/UIPluginServiceControllerIT/retrieveDatasetLinkedPlugins_1/http-request.md}

{@import _generated-snippets/UIPluginServiceControllerIT/retrieveDatasetLinkedPlugins_1/request-body.md}

{@import _generated-snippets/UIPluginServiceControllerIT/retrieveDatasetLinkedPlugins_1/http-response.md}


# UIPluginDefinitionController

## Update an UI plugin definition

{@import _generated-snippets/UIPluginDefinitionControllerIT/testUpdatePlugin/http-request.md}

{@import _generated-snippets/UIPluginDefinitionControllerIT/testUpdatePlugin/request-body.md}

{@import _generated-snippets/UIPluginDefinitionControllerIT/testUpdatePlugin/http-response.md}

## Add a new UI Plugin definition

{@import _generated-snippets/UIPluginDefinitionControllerIT/testSavePlugin/http-request.md}

{@import _generated-snippets/UIPluginDefinitionControllerIT/testSavePlugin/request-body.md}

{@import _generated-snippets/UIPluginDefinitionControllerIT/testSavePlugin/http-response.md}

## Get UI Plugin definition by type

{@import _generated-snippets/UIPluginDefinitionControllerIT/testGetPluginsByType/http-request.md}

{@import _generated-snippets/UIPluginDefinitionControllerIT/testGetPluginsByType/request-body.md}

{@import _generated-snippets/UIPluginDefinitionControllerIT/testGetPluginsByType/http-response.md}

## Retrive one UI Plugin definition

{@import _generated-snippets/UIPluginDefinitionControllerIT/testGetOnePlugin/http-request.md}

{@import _generated-snippets/UIPluginDefinitionControllerIT/testGetOnePlugin/request-body.md}

{@import _generated-snippets/UIPluginDefinitionControllerIT/testGetOnePlugin/http-response.md}

## Retrive UI Plugin definitions

{@import _generated-snippets/UIPluginDefinitionControllerIT/testGetAllPlugins/http-request.md}

{@import _generated-snippets/UIPluginDefinitionControllerIT/testGetAllPlugins/request-body.md}

{@import _generated-snippets/UIPluginDefinitionControllerIT/testGetAllPlugins/http-response.md}

## Delete one UI Plugin definition

{@import _generated-snippets/UIPluginDefinitionControllerIT/testDeleteOnePlugin/http-request.md}

{@import _generated-snippets/UIPluginDefinitionControllerIT/testDeleteOnePlugin/request-body.md}

{@import _generated-snippets/UIPluginDefinitionControllerIT/testDeleteOnePlugin/http-response.md}

# ThemeController

## Delete one theme

{@import _generated-snippets/ThemeControllerIT/testDeleteOneTheme/http-request.md}

{@import _generated-snippets/ThemeControllerIT/testDeleteOneTheme/request-body.md}

{@import _generated-snippets/ThemeControllerIT/testDeleteOneTheme/http-response.md}

## Update a theme

{@import _generated-snippets/ThemeControllerIT/testUpdateTheme/http-request.md}

{@import _generated-snippets/ThemeControllerIT/testUpdateTheme/request-body.md}

{@import _generated-snippets/ThemeControllerIT/testUpdateTheme/http-response.md}

## Create a new theme

{@import _generated-snippets/ThemeControllerIT/testSaveTheme/http-request.md}

{@import _generated-snippets/ThemeControllerIT/testSaveTheme/request-body.md}

{@import _generated-snippets/ThemeControllerIT/testSaveTheme/http-response.md}

## Retrieve one theme

{@import _generated-snippets/ThemeControllerIT/testGetOneTheme/http-request.md}

{@import _generated-snippets/ThemeControllerIT/testGetOneTheme/request-body.md}

{@import _generated-snippets/ThemeControllerIT/testGetOneTheme/http-response.md}

## Retrieve all themes

{@import _generated-snippets/ThemeControllerIT/testGetAllThemes/http-request.md}

{@import _generated-snippets/ThemeControllerIT/testGetAllThemes/request-body.md}

{@import _generated-snippets/ThemeControllerIT/testGetAllThemes/http-response.md}

# ModuleController

## Create a new UI module configuration

{@import _generated-snippets/ModuleControllerIT/saveNewModule/http-request.md}

{@import _generated-snippets/ModuleControllerIT/saveNewModule/request-body.md}

{@import _generated-snippets/ModuleControllerIT/saveNewModule/http-response.md}

## Get all modules associated to user interface

{@import _generated-snippets/ModuleControllerIT/getUserApplicationModules/http-request.md}

{@import _generated-snippets/ModuleControllerIT/getUserApplicationModules/request-body.md}

{@import _generated-snippets/ModuleControllerIT/getUserApplicationModules/http-response.md}

## Retrieve map module configuration

{@import _generated-snippets/ModuleControllerIT/testRetrieveMapConfig/http-request.md}

{@import _generated-snippets/ModuleControllerIT/testRetrieveMapConfig/request-body.md}

{@import _generated-snippets/ModuleControllerIT/testRetrieveMapConfig/http-response.md}

## Delete one module

{@import _generated-snippets/ModuleControllerIT/deleteModule/http-request.md}

{@import _generated-snippets/ModuleControllerIT/deleteModule/request-body.md}

{@import _generated-snippets/ModuleControllerIT/deleteModule/http-response.md}

## Get activated modules associated to user interface

{@import _generated-snippets/ModuleControllerIT/getUserApplicationActiveModules/http-request.md}

{@import _generated-snippets/ModuleControllerIT/getUserApplicationActiveModules/request-body.md}

{@import _generated-snippets/ModuleControllerIT/getUserApplicationActiveModules/http-response.md}

# AccessSearchController

 This is a proxy to rs-catalog search api. This is used to add UI plugins applicable to each search result.

## Search for collections

{@import _generated-snippets/AccessSearchControllerIT/searchCollections/http-request.md}

{@import _generated-snippets/AccessSearchControllerIT/searchCollections/request-body.md}

{@import _generated-snippets/AccessSearchControllerIT/searchCollections/http-response.md}

## Global search

{@import _generated-snippets/AccessSearchControllerIT/searchAll/http-request.md}

{@import _generated-snippets/AccessSearchControllerIT/searchAll/request-body.md}

{@import _generated-snippets/AccessSearchControllerIT/searchAll/http-response.md}

## Search for dataobjects

{@import _generated-snippets/AccessSearchControllerIT/searchDataobjects/http-request.md}

{@import _generated-snippets/AccessSearchControllerIT/searchDataobjects/request-body.md}

{@import _generated-snippets/AccessSearchControllerIT/searchDataobjects/http-response.md}

## Search for datasets

{@import _generated-snippets/AccessSearchControllerIT/searchDatasets/http-request.md}

{@import _generated-snippets/AccessSearchControllerIT/searchDatasets/request-body.md}

{@import _generated-snippets/AccessSearchControllerIT/searchDatasets/http-response.md}

## Search for documents

{@import _generated-snippets/AccessSearchControllerIT/searchDocuments/http-request.md}

{@import _generated-snippets/AccessSearchControllerIT/searchDocuments/request-body.md}

{@import _generated-snippets/AccessSearchControllerIT/searchDocuments/http-response.md}

## Search for datasets with dataobjects criterion

{@import _generated-snippets/AccessSearchControllerIT/searchDataobjectsReturnDatasets/http-request.md}

{@import _generated-snippets/AccessSearchControllerIT/searchDataobjectsReturnDatasets/request-body.md}

{@import _generated-snippets/AccessSearchControllerIT/searchDataobjectsReturnDatasets/http-response.md}

# LayoutController

## Update UI layout

{@import _generated-snippets/LayoutControllerIT/updateLayout/http-request.md}

{@import _generated-snippets/LayoutControllerIT/updateLayout/request-body.md}

{@import _generated-snippets/LayoutControllerIT/updateLayout/http-response.md}

### Invalid layout response

{@import _generated-snippets/LayoutControllerIT/updateLayoutWithInvalidJsonFormat/http-response.md}

## Retrieve user application layout

{@import _generated-snippets/LayoutControllerIT/getUserApplicationLayout/http-request.md}

{@import _generated-snippets/LayoutControllerIT/getUserApplicationLayout/request-body.md}

{@import _generated-snippets/LayoutControllerIT/getUserApplicationLayout/http-response.md}
