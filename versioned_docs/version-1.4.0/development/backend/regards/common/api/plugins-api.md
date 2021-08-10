---
id: backend-framework-plugins-api
title: REGARDS Plugins API
sidebar_label: Plugins API
slug: /development/backend/framework/plugins-api/
---


## How to access API endpoints

You can access each endpoint of this API thanks to a `Curl` request.

You can request without auhentication by adding the REGARDS project in the request thanks to the parameter `scope`
```bash
curl http://localhost:<microservice port>/<endpoint>?scope=<project>
```
Or you can authenticate to access admin endpoints. To do so, use the [authentication API](../../authentication/api/) to get a token and then add the token to the request headers.

```bash
curl http://localhost:<microservice port>/<endpoint> -H 'Authorization: bearer <token>'
```

To access endpoints from `outside` the microservice installation server, you need to use the "gateway" microservice. To do so, use the here under access point instead of the previous one.

```bash
curl http://<gateway host>:<gateway port>/microservice/api/v1/<endpoint>
```


## Overview

    This API allows to submit REGARDS's plugins.

## Plugins management

### Get all plugins type

Get in the classpath all the interfaces identified with the Java
annotation @PluginInterface.

{@import _generated-snippets/PluginControllerIT/getAllPluginTypes/http-request.md}

{@import _generated-snippets/PluginControllerIT/getAllPluginTypes/request-body.md}

{@import _generated-snippets/PluginControllerIT/getAllPluginTypes/http-response.md}

### Get all plugins metadata

Get in the classpath all the classes identified with the Java annotation
@Plugin.

{@import _generated-snippets/PluginControllerIT/getAllPlugins/http-request.md}

{@import _generated-snippets/PluginControllerIT/getAllPlugins/request-body.md}

{@import _generated-snippets/PluginControllerIT/getAllPlugins/http-response.md}

### Get all the plugins metadata for a plugin’s interface

{@import _generated-snippets/PluginControllerIT/getPluginOneType/http-request.md}

{@import _generated-snippets/PluginControllerIT/getPluginOneType/request-body.md}

{@import _generated-snippets/PluginControllerIT/getPluginOneType/http-response.md}

{@import _generated-snippets/PluginControllerIT/getPluginOneUnknownType/http-response.md}

### Get a plugin metadata

{@import _generated-snippets/PluginControllerIT/getOnePlugin/http-request.md}

{@import _generated-snippets/PluginControllerIT/getOnePlugin/request-body.md}

{@import _generated-snippets/PluginControllerIT/getOnePlugin/http-response.md}

## Plugin configuration management

### Create a plugin configuration

Submits a REGARDS plugin configuration as a POST request.

{@import _generated-snippets/PluginControllerIT/savePluginConfiguration/http-request.md}

{@import _generated-snippets/PluginControllerIT/savePluginConfiguration/request-body.md}

{@import _generated-snippets/PluginControllerIT/savePluginConfiguration/request-fields.md}

{@import _generated-snippets/PluginControllerIT/savePluginConfiguration/http-response.md}

{@import _generated-snippets/PluginControllerIT/savePluginConfigurationErrorConfNull/http-response.md}

### Get a plugin configuration

{@import _generated-snippets/PluginControllerIT/getPluginConfiguration/http-request.md}

{@import _generated-snippets/PluginControllerIT/getPluginConfiguration/request-body.md}

{@import _generated-snippets/PluginControllerIT/getPluginConfiguration/http-response.md}

### Update a plugin configuration

Submits a REGARDS plugin configuration as a PUT request.

{@import _generated-snippets/PluginControllerIT/updatePluginConfiguration/http-request.md}

{@import _generated-snippets/PluginControllerIT/updatePluginConfiguration/path-parameters.md}

{@import _generated-snippets/PluginControllerIT/updatePluginConfiguration/request-body.md}

{@import _generated-snippets/PluginControllerIT/updatePluginConfiguration/request-fields.md}

{@import _generated-snippets/PluginControllerIT/updatePluginConfiguration/http-response.md}

### Delete a plugin configuration

{@import _generated-snippets/PluginControllerIT/deletePluginConfiguration/http-request.md}

{@import _generated-snippets/PluginControllerIT/deletePluginConfiguration/request-body.md}

{@import _generated-snippets/PluginControllerIT/deletePluginConfiguration/http-response.md}

### Get all plugins configuration

{@import _generated-snippets/PluginControllerIT/getAllPluginConfiguration/http-request.md}

{@import _generated-snippets/PluginControllerIT/getAllPluginConfiguration/request-body.md}

{@import _generated-snippets/PluginControllerIT/getAllPluginConfiguration/http-response.md}

### Get all plugins configuration for a specific plugin

{@import _generated-snippets/PluginControllerIT/getPluginConfigurationsForOnePluginId/http-request.md}

{@import _generated-snippets/PluginControllerIT/getPluginConfigurationsForOnePluginId/request-body.md}

{@import _generated-snippets/PluginControllerIT/getPluginConfigurationsForOnePluginId/http-response.md}

{@import _generated-snippets/PluginControllerIT/getAllPluginConfigurationByTypeError/http-response.md}

### Get all plugins configuration for a specific interface

{@import _generated-snippets/PluginControllerIT/getAllPluginConfigurationForOneSpecificType/http-request.md}

{@import _generated-snippets/PluginControllerIT/getAllPluginConfigurationForOneSpecificType/request-body.md}

{@import _generated-snippets/PluginControllerIT/getAllPluginConfigurationForOneSpecificType/http-response.md}

### Empty the runtime cache plugin

{@import _generated-snippets/PluginControllerIT/emptyPluginsCahe/http-request.md}

{@import _generated-snippets/PluginControllerIT/emptyPluginsCahe/request-body.md}

{@import _generated-snippets/PluginControllerIT/emptyPluginsCahe/http-response.md}
