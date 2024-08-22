---
id: backend-catalog-search-api
title: REGARDS search API
sidebar_label: Search Engine API
slug: /development/backend/services/catalog/search-api/
---

At the moment, REGARDS can expose two search API :

* **Legacy Search API** with a query mechanism based on Lucene standard query parser returning GeoJSON feature
  collection,
* **Open Search** API with parameter, time and geo extensions returning standard ATOM response or GeoJSON feature
  collection and exposing an Open Search description.

:::note
Search API can be added using plugin mechanism.
:::

## Legacy API

### Legacy URLs

* `GET` `/engines/legacy/entities/search` : search entities
* `GET` `/engines/legacy/entities/{urn}` : get a single entity from its Unique Resource Name
* `GET` `/engines/legacy/collections/search` : search collections
* `GET` `/engines/legacy/collections/{urn}` : get a single entity from its Unique Resource Name
* `GET` `/engines/legacy/documents/search` : search documents
* `GET` `/engines/legacy/documents/{urn}` : get a single document from its Unique Resource Name
* `GET` `/engines/legacy/datasets/search` : search datasets
* `GET` `/engines/legacy/datasets/{urn}` : get a single dataset from its Unique Resource Name
* `GET` `/engines/legacy/dataobjects/search` : search data objets
* `GET` `/engines/legacy/dataobjects/{urn}` : get a single data object from its Unique Resource Name
* `GET` `/engines/legacy/dataobjects/datasets/search` : search data objects returning datasets
* `GET` `/engines/legacy/datasets/{urn}/dataobjects/search` : search data objects in the specified dataset

### Legacy headers

* `Authorization: Bearer {token}`
* `Content-Type: application/json;charset=UTF-8`
* `Accept: application/json`

### Query parameters

* `q` : The search keywords, for example `altitude:[1000 TO 2000] OR name:sensor-*`.
* `facets` : The array of attribute names.
* `page` : Page you want to retrieve, 0 indexed and defaults to 0.
* `size` : Size of the page you want to retrieve, defaults to 20.
* `sort` : Properties that should be sorted by in the format `property,property(,ASC/DESC)`. Default sort direction is
  ascending. Use multiple `sort` parameters if you want to switch directions, e.g. `?sort=firstname&sort=lastname,asc.`

### Using CURL to run search requests

To be able to run search request with cURL tool, you have to encode url parameters. To do so, you can use the here under
cURL syntaxe to run GET request with encoded parameters :

```bash
curl -G 'http://<host>/api/v1//rs-catalog/engines/legacy/dataobjects/search' \
--data-urlencode "q=(param1:test OR param2:test)" \
-H 'Authorization: Bearer <token>' -H 'Accept: application/json'
```

### Using Lucene standard query parser

See [Create a Lucene standard query parser](../../../../appendices/02-create-lucene-query.md).

## Open Search API

:::caution
Open search engine is not available by default and has to be configured.
:::

Opensearch configuration is accessible form the Administration Interface.

This configration is divided in 3 parts

1. `Link opensearch engine to catalog data`. You can associate the opensearch engine to all the REGARDS catalog or
   associate it to one specific dataset.
2. `Configure opensearch responses headers`.
3. `Configure opensearch parameters`. Here you can define specific opensearch parameters.

### General

By default, all REGARDS parameters are defined by without any needed configuration. Configure one or many of the regards
parameters allow to define the generation of possible values in opensearch descriptor file.

### Time extension configuration

To be able to use the opensearch time extension you have to configure the opensearch engine to define the two standard
parameters "start" and "end".  
To do so, follow the here under example :

- <b>Define [time.start] parameter</b>

```
  Alias : timeStart
  Name : start
  Namespace : time
  full json path of associated REGARDS attribute : properties.date
```

- <b>Define [time.end] parameter</b>

```
  Alias : timeEnd
  Name : end
  Namespace : time
  full json path of associated REGARDS attribute : properties.date
```

NOTE : `properties.date` must be replaced by the date attribute to use in the configured REGARDS catalog.

### Configure possible values of attributes in opensearch descriptor

To do so, you have to configure the parameters to enable the `possible value generation` and the `value number limit`.

```
  Name : parameter1
  Namespace : regards
  Enable generation of possible values : true
  Limit number of possible values : 100
  full json path of associated REGARDS attribute : properties.parameter1
```

### Request example

With the given below time extension configuration you can request the opensearch engine with the here under request :

  ```sh
  curl 'http://<host>/api/v1/rs-catalog/engines/opensearch/entities/search?timeStart=2010-05-23T08:16:36.921Z&timeEnd=2022-05-23T08:16:36.921Z&properties.parameter1=value1
  ```

### Open Search URLs

* `GET` `/engines/opensearch/collections/search` : search collections
* `GET` `/engines/opensearch/collections/search/opensearchdescription.xml` : Open Search description for collections
* `GET` `/engines/opensearch/collections/{urn}` : get a single entity from its Unique Resource Name

* `GET` `/engines/opensearch/documents/search` : search documents
* `GET` `/engines/opensearch/documents/search/opensearchdescription.xml` : Open Search description for documents
* `GET` `/engines/opensearch/documents/{urn}` : get a single document from its Unique Resource Name

* `GET` `/engines/opensearch/datasets/search` : search datasets
* `GET` `/engines/opensearch/datasets/search/opensearchdescription.xml` : Open Search description for datasets
* `GET` `/engines/opensearch/datasets/{urn}` : get a single dataset from its Unique Resource Name

* `GET` `/engines/opensearch/dataobjects/search` : search data objets
* `GET` `/engines/opensearch/dataobjects/search/opensearchdescription.xml` : Open Search description for dataobjects
* `GET` `/engines/opensearch/dataobjects/{urn}` : get a single data object from its Unique Resource Name

* `GET` `/engines/opensearch/datasets/{urn}/dataobjects/search` : search data objects in the specified dataset
* `GET` `/engines/opensearch/datasets/{urn}/dataobjects/search/opensearchdescription.xml` : Open Search description for
  all data objects in specified dataset

### Open search headers

* `Authorization: Bearer {token}`
* `Content-Type: application/json;charset=UTF-8`
* `Accept: application/json` or `Accept: application/atom+xml`

### Open Search Query parameters

* Use open search description to discover search queries.
