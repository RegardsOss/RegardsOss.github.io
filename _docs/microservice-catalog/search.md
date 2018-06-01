---
layout: classic-docs
title: REGARDS Search API
short-title: Search API
categories:
  - microservice-catalog
---

The Search API is part of REGARDS's [REST API](#REST API). It allows users to find specific items in the catalog (for example all data objects between a certain range data, all datasets starting with "sensor-", etc).

It is tied to the connected user's tenant, so requestable items will only be those of his/her project.

## Endpoints
The following list is exhaustive.

### Polymorphic search
Performs a search over collections, datasets, dataobjects **and** documents, and will return all matching elements, regardless of the type.
```
GET /search
```

#### Parameters
- `q` : The search keywords, for example `altitude:[1000 TO 2000] OR name:sensor-*`. Required.
- `facets` : The array of attribute names.
- `page` : Page you want to retrieve, 0 indexed and defaults to 0.
- `size` : Size of the page you want to retrieve, defaults to 20.
- `sort` : Properties that should be sorted by in the format `property,property(,ASC/DESC)`. Default sort direction is ascending. Use multiple `sort` parameters if you want to switch directions, e.g. `?sort=firstname&sort=lastname,asc.`


Note: Consider using this search only if necessary, for a typed search will always achieve better speed performance.

### Typed search
Performs a search over a specific type, either collections, datasets, dataobjects or documents, and will return all matching elements.
```
GET /collections/search
```
```
GET /datasets/search
```
```
GET /dataobjects/search
```
```
GET /documents/search
```

#### Parameters
- `q` : The search keywords, for example `altitude:[1000 TO 2000] OR name:sensor-\*`. Required.
- `facets` : The array of attribute names. Optional and only available when searching on dataobjects.
- `page` : Page you want to retrieve, 0 indexed and defaults to 0.
- `size` : Size of the page you want to retrieve, defaults to 20.
- `sort` : Properties that should be sorted by in the format `property,property(,ASC/DESC)`. Default sort direction is ascending. Use multiple `sort` parameters if you want to switch directions, e.g. `?sort=firstname&sort=lastname,asc.`

### URN search
It will return the item of passed URN (the unique identifier of the resource).
```
GET /collections/{urn}
```
```
GET /datasets/{urn}
```
```
GET /dataobjects/{urn}
```
```
GET /documents/{urn}
```

#### Path variables
- `urn` : The URN of the resource.

For example the following request
```
HTTP Method = GET
Request URI = /collections/URN:AIP:COLLECTION:PROJECT:11d4c99f-ed24-4b70-8f85-74f0ac05ed5e:V1
```
will return the following result:
```json
{
	"content": {
		"ipId": "URN:AIP:COLLECTION:PROJECT:375dc298-87d5-49f8-9a38-2456edd16918:V1",
		"label": "my collection",
		"tags": [],
		"groups": []
	},
	"links": []
}
```

### Joint search
This search is different from the others because it performs a search over a type, and will return the associated items of an other type. For now, only the following joint search is available:
```
GET /dataobjects/dataset/search
```
It performs a search over **dataobjects** and returns their **linked datasets**.

#### Parameters
- `q` : The search keywords, for example `altitude:[1000 TO 2000] OR name:sensor-*`. Required.
- `facets` : The array of attribute names.
- `page` : Page you want to retrieve, 0 indexed and defaults to 0.
- `size` : Size of the page you want to retrieve, defaults to 20.
- `sort` : Properties that should be sorted by in the format `property,property(,ASC/DESC)`. Default sort direction is ascending. Use multiple `sort` parameters if you want to switch directions, e.g. `?sort=firstname&sort=lastname,asc.`

### How to build a query

The query syntax follows the OpenSearch standard.

#### Terms
A query is broken up into terms and operators. There are two types of terms: Single Terms and Phrases.

A Single Term is a single word such as `"test"`.

A Phrase is a group of words surrounded by double quotes such as `"hello dolly"`.

Multiple terms can be combined together with Boolean operators to form a more complex query (see below).

#### Fields
When performing a search you must specify a field. The available fields are those in the model of the searched type.

- Static fields: `label`, `model.name`, `lastUpdate`, `creationDate`, `tags`, `entityType`
- Dynamic fields: `[fragmentName].[attributeName]` (fragment name is mandatory)

You search to a field by typing the field name followed by a colon ":" and then the term you are looking for.

For example, if you want to find the document entitled "The Right Way" which contains the text "don't go this way", you should enter:

`title:"The Right Way" AND text:go`

Note: The field is only valid for the term that it directly precedes, so the query

`title:Do it right`

will only find "Do" in the title field.

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
The OR operator is the default conjunction operator. This means that if there is no Boolean operator between two terms, the OR operator is used. The OR operator links two terms and finds a matching document if either of the terms exist in a document. This is equivalent to a union using sets. The symbol || can be used in place of the word OR.

To search for items which title contain either "uranus" or "neptune" use the query:

`title:uranus OR title:neptune`

or

`title:(uranus OR neptune)`

##### AND
The AND operator matches items where both terms exist anywhere in the text of a single document. This is equivalent to an intersection using sets. The symbol && can be used in place of the word AND.

To search for items which title contain "uranus" and which author is "neptune" use the query:
`title:"uranus" AND author:"neptune"`

#### Escaping special characters
The API supports escaping special characters that are part of the query syntax. The current list special characters are :

`+ - && || ! ( ) { } [ ] ^ " ~ * ? : \ /`

To escape these character use the \ before the character. For example to search for (1+1):2 use the query:

`\(1\+1\)\:2`