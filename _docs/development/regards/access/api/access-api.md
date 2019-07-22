---
layout: classic-docs
title: REGARDS Access API
---

{% include toc.md %}

{% include howto-api.md name="rs-access-project" %}

# LinkUIPluginDatasets

  Allows to associate an UI plugin to a dataset

## Associate a UI plugin configuration to a dataset

{% include_relative generated-snippets/LinkUIPluginDatasetsIT/linkConfToDataset/http-request.md %}

{% include_relative generated-snippets/LinkUIPluginDatasetsIT/linkConfToDataset/request-body.md %}

{% include_relative generated-snippets/LinkUIPluginDatasetsIT/linkConfToDataset/http-response.md %}

# UIPluginConfigurationController


## Update UI plugin configuration

{% include_relative generated-snippets/UIPluginConfigurationControllerIT/updatePluginConfiguration/http-request.md %}

{% include_relative generated-snippets/UIPluginConfigurationControllerIT/updatePluginConfiguration/request-body.md %}

{% include_relative generated-snippets/UIPluginConfigurationControllerIT/updatePluginConfiguration/http-response.md %}

## Delete UI Plugin configuration

{% include_relative generated-snippets/UIPluginConfigurationControllerIT/deletePluginConfiguration/http-request.md %}

{% include_relative generated-snippets/UIPluginConfigurationControllerIT/deletePluginConfiguration/request-body.md %}

{% include_relative generated-snippets/UIPluginConfigurationControllerIT/deletePluginConfiguration/http-response.md %}

## Retrieve UI Plugin configurations by plugin type

{% include_relative generated-snippets/UIPluginConfigurationControllerIT/retrieveConfigurationByPluginDefinition/http-request.md %}

{% include_relative generated-snippets/UIPluginConfigurationControllerIT/retrieveConfigurationByPluginDefinition/request-body.md %}

{% include_relative generated-snippets/UIPluginConfigurationControllerIT/retrieveConfigurationByPluginDefinition/http-response.md %}

## Create a new UI Plugin configuration

{% include_relative generated-snippets/UIPluginConfigurationControllerIT/createPluginConfiguration/http-request.md %}

{% include_relative generated-snippets/UIPluginConfigurationControllerIT/createPluginConfiguration/request-body.md %}

{% include_relative generated-snippets/UIPluginConfigurationControllerIT/createPluginConfiguration/http-response.md %}

### Bad plugin conf response

{% include_relative generated-snippets/UIPluginConfigurationControllerIT/badPluginConfiguration/http-response.md %}

## Retrieve UI plugin configurations

{% include_relative generated-snippets/UIPluginConfigurationControllerIT/retrieveConfigurations/http-request.md %}

{% include_relative generated-snippets/UIPluginConfigurationControllerIT/retrieveConfigurations/request-body.md %}

{% include_relative generated-snippets/UIPluginConfigurationControllerIT/retrieveConfigurations/http-response.md %}

# UIPluginServiceController

 Allows to a handle UI Service plugins

## Retrieve UI plugin service applicable for a given dataset

{% include_relative generated-snippets/UIPluginServiceControllerIT/retrieveDatasetLinkedPlugins_1/http-request.md %}

{% include_relative generated-snippets/UIPluginServiceControllerIT/retrieveDatasetLinkedPlugins_1/request-body.md %}

{% include_relative generated-snippets/UIPluginServiceControllerIT/retrieveDatasetLinkedPlugins_1/http-response.md %}


# UIPluginDefinitionController

## Update an UI plugin definition

{% include_relative generated-snippets/UIPluginDefinitionControllerIT/testUpdatePlugin/http-request.md %}

{% include_relative generated-snippets/UIPluginDefinitionControllerIT/testUpdatePlugin/request-body.md %}

{% include_relative generated-snippets/UIPluginDefinitionControllerIT/testUpdatePlugin/http-response.md %}

## Add a new UI Plugin definition

{% include_relative generated-snippets/UIPluginDefinitionControllerIT/testSavePlugin/http-request.md %}

{% include_relative generated-snippets/UIPluginDefinitionControllerIT/testSavePlugin/request-body.md %}

{% include_relative generated-snippets/UIPluginDefinitionControllerIT/testSavePlugin/http-response.md %}

## Get UI Plugin definition by type

{% include_relative generated-snippets/UIPluginDefinitionControllerIT/testGetPluginsByType/http-request.md %}

{% include_relative generated-snippets/UIPluginDefinitionControllerIT/testGetPluginsByType/request-body.md %}

{% include_relative generated-snippets/UIPluginDefinitionControllerIT/testGetPluginsByType/http-response.md %}

## Retrive one UI Plugin definition

{% include_relative generated-snippets/UIPluginDefinitionControllerIT/testGetOnePlugin/http-request.md %}

{% include_relative generated-snippets/UIPluginDefinitionControllerIT/testGetOnePlugin/request-body.md %}

{% include_relative generated-snippets/UIPluginDefinitionControllerIT/testGetOnePlugin/http-response.md %}

## Retrive UI Plugin definitions

{% include_relative generated-snippets/UIPluginDefinitionControllerIT/testGetAllPlugins/http-request.md %}

{% include_relative generated-snippets/UIPluginDefinitionControllerIT/testGetAllPlugins/request-body.md %}

{% include_relative generated-snippets/UIPluginDefinitionControllerIT/testGetAllPlugins/http-response.md %}

## Delete one UI Plugin definition

{% include_relative generated-snippets/UIPluginDefinitionControllerIT/testDeleteOnePlugin/http-request.md %}

{% include_relative generated-snippets/UIPluginDefinitionControllerIT/testDeleteOnePlugin/request-body.md %}

{% include_relative generated-snippets/UIPluginDefinitionControllerIT/testDeleteOnePlugin/http-response.md %}

# ThemeController

## Delete one theme

{% include_relative generated-snippets/ThemeControllerIT/testDeleteOneTheme/http-request.md %}

{% include_relative generated-snippets/ThemeControllerIT/testDeleteOneTheme/request-body.md %}

{% include_relative generated-snippets/ThemeControllerIT/testDeleteOneTheme/http-response.md %}

## Update a theme

{% include_relative generated-snippets/ThemeControllerIT/testUpdateTheme/http-request.md %}

{% include_relative generated-snippets/ThemeControllerIT/testUpdateTheme/request-body.md %}

{% include_relative generated-snippets/ThemeControllerIT/testUpdateTheme/http-response.md %}

## Create a new theme

{% include_relative generated-snippets/ThemeControllerIT/testSaveTheme/http-request.md %}

{% include_relative generated-snippets/ThemeControllerIT/testSaveTheme/request-body.md %}

{% include_relative generated-snippets/ThemeControllerIT/testSaveTheme/http-response.md %}

## Retrieve one theme

{% include_relative generated-snippets/ThemeControllerIT/testGetOneTheme/http-request.md %}

{% include_relative generated-snippets/ThemeControllerIT/testGetOneTheme/request-body.md %}

{% include_relative generated-snippets/ThemeControllerIT/testGetOneTheme/http-response.md %}

## Retrieve all themes

{% include_relative generated-snippets/ThemeControllerIT/testGetAllThemes/http-request.md %}

{% include_relative generated-snippets/ThemeControllerIT/testGetAllThemes/request-body.md %}

{% include_relative generated-snippets/ThemeControllerIT/testGetAllThemes/http-response.md %}

# ModuleController

## Create a new UI module configuration

{% include_relative generated-snippets/ModuleControllerIT/saveNewModule/http-request.md %}

{% include_relative generated-snippets/ModuleControllerIT/saveNewModule/request-body.md %}

{% include_relative generated-snippets/ModuleControllerIT/saveNewModule/http-response.md %}

## Get all modules associated to user interface

{% include_relative generated-snippets/ModuleControllerIT/getUserApplicationModules/http-request.md %}

{% include_relative generated-snippets/ModuleControllerIT/getUserApplicationModules/request-body.md %}

{% include_relative generated-snippets/ModuleControllerIT/getUserApplicationModules/http-response.md %}

## Retrieve map module configuration

{% include_relative generated-snippets/ModuleControllerIT/testRetrieveMapConfig/http-request.md %}

{% include_relative generated-snippets/ModuleControllerIT/testRetrieveMapConfig/request-body.md %}

{% include_relative generated-snippets/ModuleControllerIT/testRetrieveMapConfig/http-response.md %}

## Delete one module

{% include_relative generated-snippets/ModuleControllerIT/deleteModule/http-request.md %}

{% include_relative generated-snippets/ModuleControllerIT/deleteModule/request-body.md %}

{% include_relative generated-snippets/ModuleControllerIT/deleteModule/http-response.md %}

## Get activated modules associated to user interface

{% include_relative generated-snippets/ModuleControllerIT/getUserApplicationActiveModules/http-request.md %}

{% include_relative generated-snippets/ModuleControllerIT/getUserApplicationActiveModules/request-body.md %}

{% include_relative generated-snippets/ModuleControllerIT/getUserApplicationActiveModules/http-response.md %}

# AccessSearchController

 This is a proxy to rs-catalog search api. This is used to add UI plugins applicable to each search result.

## Search for collections

{% include_relative generated-snippets/AccessSearchControllerIT/searchCollections/http-request.md %}

{% include_relative generated-snippets/AccessSearchControllerIT/searchCollections/request-body.md %}

{% include_relative generated-snippets/AccessSearchControllerIT/searchCollections/http-response.md %}

## Global search

{% include_relative generated-snippets/AccessSearchControllerIT/searchAll/http-request.md %}

{% include_relative generated-snippets/AccessSearchControllerIT/searchAll/request-body.md %}

{% include_relative generated-snippets/AccessSearchControllerIT/searchAll/http-response.md %}

## Search for dataobjects

{% include_relative generated-snippets/AccessSearchControllerIT/searchDataobjects/http-request.md %}

{% include_relative generated-snippets/AccessSearchControllerIT/searchDataobjects/request-body.md %}

{% include_relative generated-snippets/AccessSearchControllerIT/searchDataobjects/http-response.md %}

## Search for datasets

{% include_relative generated-snippets/AccessSearchControllerIT/searchDatasets/http-request.md %}

{% include_relative generated-snippets/AccessSearchControllerIT/searchDatasets/request-body.md %}

{% include_relative generated-snippets/AccessSearchControllerIT/searchDatasets/http-response.md %}

## Search for documents

{% include_relative generated-snippets/AccessSearchControllerIT/searchDocuments/http-request.md %}

{% include_relative generated-snippets/AccessSearchControllerIT/searchDocuments/request-body.md %}

{% include_relative generated-snippets/AccessSearchControllerIT/searchDocuments/http-response.md %}

## Search for datasets with dataobjects criterion

{% include_relative generated-snippets/AccessSearchControllerIT/searchDataobjectsReturnDatasets/http-request.md %}

{% include_relative generated-snippets/AccessSearchControllerIT/searchDataobjectsReturnDatasets/request-body.md %}

{% include_relative generated-snippets/AccessSearchControllerIT/searchDataobjectsReturnDatasets/http-response.md %}

# LayoutController

## Update UI layout

{% include_relative generated-snippets/LayoutControllerIT/updateLayout/http-request.md %}

{% include_relative generated-snippets/LayoutControllerIT/updateLayout/request-body.md %}

{% include_relative generated-snippets/LayoutControllerIT/updateLayout/http-response.md %}

### Invalid layout response

{% include_relative generated-snippets/LayoutControllerIT/updateLayoutWithInvalidJsonFormat/http-response.md %}

## Retrieve user application layout

{% include_relative generated-snippets/LayoutControllerIT/getUserApplicationLayout/http-request.md %}

{% include_relative generated-snippets/LayoutControllerIT/getUserApplicationLayout/request-body.md %}

{% include_relative generated-snippets/LayoutControllerIT/getUserApplicationLayout/http-response.md %}
