---
layout: classic-docs
title: REGARDS Plugins API
---

{% include toc.md %}

{% include howto-api.md name='<microservice>' %}

## Overview

    This API allows to submit REGARDS's plugins.

## Plugins management

### Get all plugins type

Get in the classpath all the interfaces identified with the Java
annotation @PluginInterface.

{% include_relative generated-snippets/PluginControllerIT/getAllPluginTypes/http-request.md %}

{% include_relative generated-snippets/PluginControllerIT/getAllPluginTypes/request-body.md %}

{% include_relative generated-snippets/PluginControllerIT/getAllPluginTypes/http-response.md %}

### Get all plugins metadata

Get in the classpath all the classes identified with the Java annotation
@Plugin.

{% include_relative generated-snippets/PluginControllerIT/getAllPlugins/http-request.md %}

{% include_relative generated-snippets/PluginControllerIT/getAllPlugins/request-body.md %}

{% include_relative generated-snippets/PluginControllerIT/getAllPlugins/http-response.md %}

### Get all the plugins metadata for a plugin’s interface

{% include_relative generated-snippets/PluginControllerIT/getPluginOneType/http-request.md %}

{% include_relative generated-snippets/PluginControllerIT/getPluginOneType/request-body.md %}

{% include_relative generated-snippets/PluginControllerIT/getPluginOneType/http-response.md %}

{% include_relative generated-snippets/PluginControllerIT/getPluginOneUnknownType/http-response.md %}

### Get a plugin metadata

{% include_relative generated-snippets/PluginControllerIT/getOnePlugin/http-request.md %}

{% include_relative generated-snippets/PluginControllerIT/getOnePlugin/request-body.md %}

{% include_relative generated-snippets/PluginControllerIT/getOnePlugin/http-response.md %}

## Plugin configuration management

### Create a plugin configuration

Submits a REGARDS plugin configuration as a POST request.

{% include_relative generated-snippets/PluginControllerIT/savePluginConfiguration/http-request.md %}

{% include_relative generated-snippets/PluginControllerIT/savePluginConfiguration/request-body.md %}

{% include_relative generated-snippets/PluginControllerIT/savePluginConfiguration/request-fields.md %}

{% include_relative generated-snippets/PluginControllerIT/savePluginConfiguration/http-response.md %}

{% include_relative generated-snippets/PluginControllerIT/savePluginConfigurationErrorConfNull/http-response.md %}

### Get a plugin configuration

{% include_relative generated-snippets/PluginControllerIT/getPluginConfiguration/http-request.md %}

{% include_relative generated-snippets/PluginControllerIT/getPluginConfiguration/request-body.md %}

{% include_relative generated-snippets/PluginControllerIT/getPluginConfiguration/http-response.md %}

### Update a plugin configuration

Submits a REGARDS plugin configuration as a PUT request.

{% include_relative generated-snippets/PluginControllerIT/updatePluginConfiguration/http-request.md %}

{% include_relative generated-snippets/PluginControllerIT/updatePluginConfiguration/path-parameters.md %}

{% include_relative generated-snippets/PluginControllerIT/updatePluginConfiguration/request-body.md %}

{% include_relative generated-snippets/PluginControllerIT/updatePluginConfiguration/request-fields.md %}

{% include_relative generated-snippets/PluginControllerIT/updatePluginConfiguration/http-response.md %}

### Delete a plugin configuration

{% include_relative generated-snippets/PluginControllerIT/deletePluginConfiguration/http-request.md %}

{% include_relative generated-snippets/PluginControllerIT/deletePluginConfiguration/request-body.md %}

{% include_relative generated-snippets/PluginControllerIT/deletePluginConfiguration/http-response.md %}

### Get all plugins configuration

{% include_relative generated-snippets/PluginControllerIT/getAllPluginConfiguration/http-request.md %}

{% include_relative generated-snippets/PluginControllerIT/getAllPluginConfiguration/request-body.md %}

{% include_relative generated-snippets/PluginControllerIT/getAllPluginConfiguration/http-response.md %}

### Get all plugins configuration for a specific plugin

{% include_relative generated-snippets/PluginControllerIT/getPluginConfigurationsForOnePluginId/http-request.md %}

{% include_relative generated-snippets/PluginControllerIT/getPluginConfigurationsForOnePluginId/request-body.md %}

{% include_relative generated-snippets/PluginControllerIT/getPluginConfigurationsForOnePluginId/http-response.md %}

{% include_relative generated-snippets/PluginControllerIT/getAllPluginConfigurationByTypeError/http-response.md %}

### Get all plugins configuration for a specific interface

{% include_relative generated-snippets/PluginControllerIT/getAllPluginConfigurationForOneSpecificType/http-request.md %}

{% include_relative generated-snippets/PluginControllerIT/getAllPluginConfigurationForOneSpecificType/request-body.md %}

{% include_relative generated-snippets/PluginControllerIT/getAllPluginConfigurationForOneSpecificType/http-response.md %}

### Empty the runtime cache plugin

{% include_relative generated-snippets/PluginControllerIT/emptyPluginsCahe/http-request.md %}

{% include_relative generated-snippets/PluginControllerIT/emptyPluginsCahe/request-body.md %}

{% include_relative generated-snippets/PluginControllerIT/emptyPluginsCahe/http-response.md %}
