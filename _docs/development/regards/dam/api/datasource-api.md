---
layout: classic-docs
title: REGARDS Datasource API
---

{% include toc.md %}

{% include howto-api.md name="rs-dam" %}

# DataSourceController


## Retrieve data sources

{% include_relative generated-snippets/DataSourceControllerIT/getAllDataSources/http-request.md %}

{% include_relative generated-snippets/DataSourceControllerIT/getAllDataSources/request-body.md %}

{% include_relative generated-snippets/DataSourceControllerIT/getAllDataSources/http-response.md %}

## dataSourceUpdateDBConnection

{% include_relative generated-snippets/DataSourceControllerIT/dataSourceUpdateDBConnection/http-request.md %}

{% include_relative generated-snippets/DataSourceControllerIT/dataSourceUpdateDBConnection/request-body.md %}

{% include_relative generated-snippets/DataSourceControllerIT/dataSourceUpdateDBConnection/http-response.md %}

## getDataSource

{% include_relative generated-snippets/DataSourceControllerIT/getDataSource/http-request.md %}

{% include_relative generated-snippets/DataSourceControllerIT/getDataSource/request-body.md %}

{% include_relative generated-snippets/DataSourceControllerIT/getDataSource/http-response.md %}

 ### Unknown datasource response

{% include_relative generated-snippets/DataSourceControllerIT/getUnknownDataSource/http-response.md %}

## Delete datasource

{% include_relative generated-snippets/DataSourceControllerIT/deleteDataSource/http-request.md %}

{% include_relative generated-snippets/DataSourceControllerIT/deleteDataSource/request-body.md %}

{% include_relative generated-snippets/DataSourceControllerIT/deleteDataSource/http-response.md %}

## Update datasource

{% include_relative generated-snippets/DataSourceControllerIT/dataSourceUpdateFromClause/http-request.md %}

{% include_relative generated-snippets/DataSourceControllerIT/dataSourceUpdateFromClause/request-body.md %}

{% include_relative generated-snippets/DataSourceControllerIT/dataSourceUpdateFromClause/http-response.md %}

## Create a new datasource with from clause

{% include_relative generated-snippets/DataSourceControllerIT/createDataSourceWithFromClauseTest/http-request.md %}

{% include_relative generated-snippets/DataSourceControllerIT/createDataSourceWithFromClauseTest/request-body.md %}

{% include_relative generated-snippets/DataSourceControllerIT/createDataSourceWithFromClauseTest/http-response.md %}

## Create data source for single table plugins

{% include_relative generated-snippets/DataSourceControllerIT/createDataSourceWithSingleTableTest/http-request.md %}

{% include_relative generated-snippets/DataSourceControllerIT/createDataSourceWithSingleTableTest/request-body.md %}

{% include_relative generated-snippets/DataSourceControllerIT/createDataSourceWithSingleTableTest/http-response.md %}
