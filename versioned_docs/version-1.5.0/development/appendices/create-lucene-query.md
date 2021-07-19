---
id: appendices-lucene-query
title: Lucene query format
sidebar_label: Lucene query format
slug: /development/appendices/lucene-query/
---


In order to search into REGARDS catalog the standard API allows you to use a lucene query parser.
To do so, the `q` query parameter value is parsed with Lucene standard query parser as describe here under.

### String searches

Lucene is only used for syntax. Value semantic is interpreted thanks to wildcard expressions except for " character. To do exact searches, you have to put " around your value otherwise it will be considered a regular expression.

To use regular expressions you need to wrap your search between '/' caracters as the exemple query here under

`name:/Jhon [a-zA-Z]/`

### Fields

When performing a search you must specify a field (See section parameters above for available fields).

You search to a field by typing the field name followed by a colon ":" and then the term you are looking for.

For example, if you want to find the document entitled "The Right Way" which contains the text "don't go this way", you should enter:

`title:"The Right Way" AND text:go`

:::note
Available fields correspond to :
- **data model attributes** (possibly prefixed with `properties.` to avoid potential conflicts)
- common attributes `id`, `label`, `providerId`, `model`, `tags`
- geospatial parameters : `g` for WKT search or `lon`, `lat`, `r` for circle search
:::

### Exclude Searches

`NOT "Test"` or `label:(NOT "test")`

### Range Searches

Range Queries allow one to match items whose field(s) values are between the lower and upper bound specified by the Range Query.

Range Queries can be inclusive or exclusive of the upper and lower bounds. Inclusive range queries are denoted by square brackets ("[" and "]"). Exclusive range queries are denoted by curly brackets ("{" and "}").

#### Number

The API support range searches on numbers. According to the expected model's attribute type, the value will be parsed as an integer, a double, a long or a float.

`altitude:{0 TO 2000}`

This will find all items whose altitude attribute are between 0 and 2000, but not including 0 and 2000.

#### Date

The API supports range searches on dates. The expected date format is a date-time without a time-zone in the ISO-8601 calendar system, such as 2007-12-03T10:15:30.

`date:[2007-12-03T10:15:30 TO 2007-12-03T11:15:30]`

This will find items whose date fields have values between 03/12/2007 at 10:15:30 and 03/12/2007 at 11:15:30, inclusive.

### Boolean operators

Boolean operators allow terms to be combined through logic operators.

#### OR

The OR operator is the default conjunction operator. This means that if there is no Boolean operator between two terms, the OR operator is used. The OR operator links two terms and finds a matching document if either of the terms exist in a document. This is equivalent to a union using sets. The symbol `||` can be used in place of the word OR.

To search for items which title contain either "uranus" or "neptune" use the query:

`title:uranus OR title:neptune`

or

`title:(uranus OR neptune)`

#### AND

The AND operator matches items where both terms exist anywhere in the text of a single document. This is equivalent to an intersection using sets. The symbol `&&` can be used in place of the word AND.

To search for items which title contain "uranus" and which author is "neptune" use the query:

`title:"uranus" AND author:"neptune"`

### Escaping special characters

The API supports escaping special characters that are part of the query syntax. The current list special characters are :

`+ - && || ! ( ) { } [ ] ^ " ~ * ? : \ /`

To escape these character use the \ before the character. For example to search for (1+1):2 use the query:

`\(1\+1\)\:2`
