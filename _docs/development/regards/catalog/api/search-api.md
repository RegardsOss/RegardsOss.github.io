---
layout: classic-docs
title: REGARDS search API
short-title: Legacy search API
---

At the moment, REGARDS can expose two search API :

* **Legacy Search API** with a query mechanism based on Lucene standard query parser returning GeoJSON feature collection,
* **Open Search** API with parameter, time and geo extensions returning standard ATOM response or GeoJSON feature collection and exposing an Open Search description.

> Search API can be added using plugin mechanism.
{: .tip .plus}

{% include toc.md %}

{% include howto-api.md name='rs-catalog'%}

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
* `sort` : Properties that should be sorted by in the format `property,property(,ASC/DESC)`. Default sort direction is ascending. Use multiple `sort` parameters if you want to switch directions, e.g. `?sort=firstname&sort=lastname,asc.`

### Using cURL to run search requests

To be able to run search request with cURL tool, you have to encode url parameters. To do so, you can use the here under cURL syntaxe to run GET request with encoded parameters :   
`curl -G 'http://<host>/api/v1//rs-catalog/engines/legacy/dataobjects/search' --data-urlencode "q=(param1:test OR param2:test)" -H 'Authorization: Bearer <token>' -H 'Accept: application/json'`

### Using Lucene standard query parser

`q` query parameter value is parsed with Lucene standard query parser.

#### Terms

A query is broken up into terms and operators. There are two types of terms: single and phrase.

A single Term is a single word such as `"test"`.

A phrase is a group of words surrounded by double quotes such as `"hello dolly"`.

Multiple terms can be combined together with boolean operators to form a more complex query (see below).

#### Fields

When performing a search you must specify a field (See section parameters above for available fields).

You search to a field by typing the field name followed by a colon ":" and then the term you are looking for.

For example, if you want to find the document entitled "The Right Way" which contains the text "don't go this way", you should enter:

`title:"The Right Way" AND text:go`

> Available fields correspond to :
> * **data model attributes** (possibly prefixed with `properties.` to avoid potential conflicts)
> * common attributes `id`, `label`, `providerId`, `model`, `tags`
> * geospatial parameters : `g` for WKT search or `lon`, `lat`, `r` for circle search
{: .tip .plus}

#### Wildcard Searches

The API supports multiple character wildcard searches within single terms (not within phrase queries). To perform a multiple character wildcard search use the "\*" symbol.

##### Wildcard trailing

To search for test, tests or tester, you can use the search:

`test*`

##### Wildcard leading

To search for test, \_test or second_test, use the search:

`*test`

Note: The use of this search is discouraged because of poor performance.

##### Wildcard around

To search for my_test_2, use the search:

`*test*`

#### Exclude Searches

`NOT "Test"` or `label:(NOT "test")`

#### Range Searches

Range Queries allow one to match items whose field(s) values are between the lower and upper bound specified by the Range Query.

Range Queries can be inclusive or exclusive of the upper and lower bounds. Inclusive range queries are denoted by square brackets ("[" and "]"). Exclusive range queries are denoted by curly brackets ("{" and "}").

##### Number

The API support range searches on numbers. According to the expected model's attribute type, the value will be parsed as an integer, a double, a long or a float.

`altitude:{0 TO 2000}`

This will find all items whose altitude attribute are between 0 and 2000, but not including 0 and 2000.

##### Date

The API supports range searches on dates. The expected date format is a date-time without a time-zone in the ISO-8601 calendar system, such as 2007-12-03T10:15:30.

`date:[2007-12-03T10:15:30 TO 2007-12-03T11:15:30]`

This will find items whose date fields have values between 03/12/2007 at 10:15:30 and 03/12/2007 at 11:15:30, inclusive.

#### Boolean operators

Boolean operators allow terms to be combined through logic operators.

##### OR

The OR operator is the default conjunction operator. This means that if there is no Boolean operator between two terms, the OR operator is used. The OR operator links two terms and finds a matching document if either of the terms exist in a document. This is equivalent to a union using sets. The symbol `||` can be used in place of the word OR.

To search for items which title contain either "uranus" or "neptune" use the query:

`title:uranus OR title:neptune`

or

`title:(uranus OR neptune)`

##### AND

The AND operator matches items where both terms exist anywhere in the text of a single document. This is equivalent to an intersection using sets. The symbol `&&` can be used in place of the word AND.

To search for items which title contain "uranus" and which author is "neptune" use the query:

`title:"uranus" AND author:"neptune"`

#### Escaping special characters

The API supports escaping special characters that are part of the query syntax. The current list special characters are :

`+ - && || ! ( ) { } [ ] ^ " ~ * ? : \ /`

To escape these character use the \ before the character. For example to search for (1+1):2 use the query:

`\(1\+1\)\:2`

## Open Search API

> Open search engine is not available by default and has to be configured.
{: .tip .warning}

Opensearch configuration is accessible form the Administration Interface.

This configration is divided in 3 parts

1. `Link opensearch engine to catalog data`. You can associate the opensearch engine to all the REGARDS catalog or associate it to one specific dataset.
2. `Configure opensearch responses headers`.
3. `Configure opensearch parameters`. Here you can define specific opensearch parameters.

### General

By default, all REGARDS parameters are defined by without any needed configuration. Configure one or many of the regards parameters allow to define the generation of possible values in opensearch descriptor file.

### Time extension configuration

To be able to use the opensearch time extension you have to configure the opensearch engine to define the two stanadrd parameters "start" and "end".  
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
* `GET` `/engines/opensearch/datasets/{urn}/dataobjects/search/opensearchdescription.xml` : Open Search description for all data objects in specified dataset

### Open search headers

* `Authorization: Bearer {token}`
* `Content-Type: application/json;charset=UTF-8`
* `Accept: application/json` or `Accept: application/atom+xml`

### Open Search Query parameters

* Use open search description to discover search queries.
