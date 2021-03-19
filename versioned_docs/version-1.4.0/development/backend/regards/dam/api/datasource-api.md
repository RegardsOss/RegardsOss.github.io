---
id: backend-dam-datasource-api
title: REGARDS Datasource API
sidebar_label: Datasource
slug: /development/backend/dam/api/datasource/
---


## How to access API endpoints

You can access each endpoint of this API thanks to a `Curl` request.

You can request without auhentication by adding the REGARDS project in the request thanks to the parameter `scope`
```bash
curl http://localhost:<rs-dam port>/<endpoint>?scope=<project>
```
Or you can authenticate to access admin endpoints. To do so, use the [authentication API](../../../authentication/api/) to get a token and then add the token to the request headers.

```bash
curl http://localhost:<rs-dam port>/<endpoint> -H 'Authorization: bearer <token>'
```

To access endpoints from `outside` the microservice installation server, you need to use the "gateway" microservice. To do so, use the here under access point instead of the previous one.

```bash
curl http://<gateway host>:<gateway port>/rs-dam/api/v1/<endpoint>
```

# DataSourceController


## Retrieve data sources

{@import generated-snippets/DataSourceControllerIT/getAllDataSources/http-request.md}

{@import generated-snippets/DataSourceControllerIT/getAllDataSources/request-body.md}

{@import generated-snippets/DataSourceControllerIT/getAllDataSources/http-response.md}

## dataSourceUpdateDBConnection

{@import generated-snippets/DataSourceControllerIT/dataSourceUpdateDBConnection/http-request.md}

{@import generated-snippets/DataSourceControllerIT/dataSourceUpdateDBConnection/request-body.md}

{@import generated-snippets/DataSourceControllerIT/dataSourceUpdateDBConnection/http-response.md}

## getDataSource

{@import generated-snippets/DataSourceControllerIT/getDataSource/http-request.md}

{@import generated-snippets/DataSourceControllerIT/getDataSource/request-body.md}

{@import generated-snippets/DataSourceControllerIT/getDataSource/http-response.md}

 ### Unknown datasource response

{@import generated-snippets/DataSourceControllerIT/getUnknownDataSource/http-response.md}

## Delete datasource

{@import generated-snippets/DataSourceControllerIT/deleteDataSource/http-request.md}

{@import generated-snippets/DataSourceControllerIT/deleteDataSource/request-body.md}

{@import generated-snippets/DataSourceControllerIT/deleteDataSource/http-response.md}

## Update datasource

{@import generated-snippets/DataSourceControllerIT/dataSourceUpdateFromClause/http-request.md}

{@import generated-snippets/DataSourceControllerIT/dataSourceUpdateFromClause/request-body.md}

{@import generated-snippets/DataSourceControllerIT/dataSourceUpdateFromClause/http-response.md}

## Create a new datasource with from clause

{@import generated-snippets/DataSourceControllerIT/createDataSourceWithFromClauseTest/http-request.md}

{@import generated-snippets/DataSourceControllerIT/createDataSourceWithFromClauseTest/request-body.md}

{@import generated-snippets/DataSourceControllerIT/createDataSourceWithFromClauseTest/http-response.md}

## Create data source for single table plugins

{@import generated-snippets/DataSourceControllerIT/createDataSourceWithSingleTableTest/http-request.md}

{@import generated-snippets/DataSourceControllerIT/createDataSourceWithSingleTableTest/request-body.md}

{@import generated-snippets/DataSourceControllerIT/createDataSourceWithSingleTableTest/http-response.md}
