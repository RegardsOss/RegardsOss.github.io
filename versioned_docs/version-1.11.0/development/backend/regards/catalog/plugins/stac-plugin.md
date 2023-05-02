---
id: backend-catalog-stac-plugin
title: STAC plugin
sidebar_label: STAC
slug: /development/backend/services/catalog/stac-plugin/
---

# Overview

The STAC plugin provides a STAC spec interface for any REGARDS project.
See [the STAC spec base page](https://stacspec.org/) for more information 
on this standard.

The STAC plugin consists of four layers:

- the domain layer, in the maven module `stac-domain`,
- the service layer, in the maven module `stac-service`, depending on `stac-domain`,
- the REST layer, in the maven module `stac-rest`, depending on `stac-service`,
- the plugin layer, in the maven module `stac-plugin`, depending on `stac-rest`,
  providing the actual plugin and which can generate the shaded jar to be deployed
  using the `maven-shade` plugin.

There also is a `stac-test` module providing utilities for the tests in all the other
modules.

From a "domain driven" perspective:
- `stac-domain` provides the domain entities,
- `stac-rest` provides the STAC API REST adapter, allowing clients to interact with the plugin,
- `stac-plugin` provides the plugin adapter, allowing to interact with the REGARDS system, 
  loading the plugin configuration and mappers from configuration to domain entities.

# General notes

## Programming style

### Immutability

As much as possible, the code relies on immutable entities and collections
and pure functions. The domain entities make heavy use of the `vavr` collections.

Entities are generally `lombok.Value`, making them immutable with minimal
amount of code.

### Purity

Service methods are as pure as possible, except for logging and
calls to catalog search. Most other side effects are pushed to the 
REST and plugin adapters.

### Dependency injection

Where it is needed, in all classes (services especially), use constructor 
dependency injection. All service dependencies are declared as final
and an explicit constructor is `@Autowired`. This allows to ensure that 
all the tests are forced to instanciate (or mock) all the dependencies 
for any given service.

### Programming to an interface

All services have a corresponding interface. Only the interfaces are
referenced in other services/components/REST controllers.

### Single-responsibility principle

Most services tend to have only one purpose: even if it not always achieved
to prevent a too big number of classes, the goal is to have one method per 
service interface. Small service make them require less dependencies, 
less autowired components, which makes them generally easier to set up for tests.

## Logging

Each request to the STAC REST layer sets a UUID for the request.
(See the `StacRequestCorrelationId` and `LogAndCorrelationIdInterceptor` classes.)

In order to have log messages display this UUID, one should not use the `LOGGER.info()`,
`LOGGER.error()`, etc. methods directly. 

Instead, the class `StacRequestCorrelationId` provides static methods allowing
to log `trace`, `debug`, `info`, `warn` and `error` messages. These methods
should be used everywhere (except for tests, and during the plugin loading phase).

## Error management

Throwing exceptions is avoided at all costs. Instead, if a method may fail,
we wrap the result in a `io.vavr.Try`. In order to do this, and to ensure
that the user provides logging or a meaningful error exception, creating
`Try` instances is avoided, and the `TryDSL` methods are used instead.
See the `TryDSL` class in the `stac-domain` module for more information.

# Modules

## `stac-domain` module

The domain provides:

- useful constants in the `StacSpecConstants` class (version numbers,
  common property names, etc.),
  
- the package `spec.v1_0_0_beta2`, which contains the STAC spec entities 
  (`Item`, `Collection`, `Catalog`) at the latest version of the STAC spec
  at the time of implementation (version 1.0.0-beta.2),
  
- the package `api.v1_0_0_beta1`, which contains the STAC REST API entities 
  for REST input and output, for instance the `ItemSearchBody` object which
  represents search query bodies, or `ItemCollectionResponse` which represent
  list of items (`/search` results, or result for a `/collections/items` query),
  
 - the `properties` package, which contains the `StacProperty` class. 
   This class is central to the plugin, in that the configuration provides a
   list of `StacProperty` values, and these properties are used almost 
   everywhere. They allow to convert the REGARDS documents into STAC Items,
   and convert the document properties in their STAC spec counterparts.
 
 - the `properties.dyncoll` package, containing all the domain entities related
   to dynamic collections, dynamic collection level definitions and values.

 - the `error` package provides error management within the plugin. 

 - the `util` package, which strictly speaking should not be part of the domain,
   but does not justify a whole new package all by itself. It contains some 
   utilities and helpers, as well as a small DSL to work with `io.vavr.Try` values.

## `stac-plugin` module

This module declares the main plugin class: `StacSearchPlugin`.
This class implements `ISearchEngine`, but this is only to be able to
reuse the UI for plugin configuration. The implementation of this interface
is never actually used anywhere, since the plugin declares that it is
not applicable to any type of search.

The module also declares several plugin parameter classes, which conform
to the conventions for REGARDS plugins.

It also provides an implementation for the `ConfigurationAccessorFactory`
interface named `StacConfigurationDomainAccessor`, which allows to access
the plugin configuration as it is defined in the `stac-domain` module 
`properties` package.

This mechanism allows to define precisely in domain terms the configuration,
and have a REGARDS specific plugin adapter, while all the rest of the code
knows nothing about REGARDS plugins.

## `stac-rest` module

This module provides four controllers, corresponding to each sub-section 
of the STAC REST API:

 - the `CoreController`, providing the `GET /` query,
 
 - the `ConformanceCOntroller`, providing the `GET /conformance/` query,
 
 - more interestingly, the `OGCFeatureController`, providing the four `GET`
   queries to access collections and items,
 
 - and finally, the `ItemSearchCOntroller`, providing three endpoints:
   - `GET /search`, part of the standard,
   - `POST /search`, part of the standard,
   - `GET /otherPage`, which is a custom endpoint of this plugin, allowing
     to paginate item search results.

## `stac-service` module

This module is central, using domain entities from `stac-domain`, and allowing
adapters `stac-rest` and `stac-plugin` to do their work.

# Search

The mechanism for searching is to create an `ItemSearchBody` instance 
(from the `GET /search` query parameters, from the `POST /search` body 
or from the `GET /otherPage` query parameter), and to use this `ItemSearchBody`
to build an `ICriterion`.

Once we have an `ICriterion`, we can use the catalog search service
and query Elasticsearch. The results are then transformed into 
STAC `Item`s, and collected into an `ItemSearchResponse`.

# Collection management

## Static collections

In the STAC standard, STAC collections are meant to hold a rather small number
of items, in the hundreds at most. This is why, if the catalog contains a lot 
of items, it is a good idea to split them in many different collections. 

However, REGARDS already has the notion of collection/datasets, so we recreate
a tree of STAC collections from them.

REGARDS Collections can reference other collections, allowing to build a tree
of collections. Similarly, datasets can reference collections. This is used
by the STAC static collection mechanism to build a tree of STAC collections.

At the root level, static collections display links to the collections or datasets
with no parent collection (referencing no other REGARDS collection).

A user navigating to a STAC collection made from a REGARDS collection will see:
- if this collection is referenced by other collections/datasets: links to these collections/datasets,
- if this collection has only items, the link to the list of items.

A user navigating to a STAC collection made from a REGARDS dataset will see:
- the link to the list of items in this dataset.

## Dynamic collections

The user may choose to select some of the configured STAC properties 
(even the mandatory datetime property) as levels in a dynamic tree.

Each level has at least one sublevel, but may have more. 
For instance, datetime properties may have several sublevel consisting of
selecting the year, then the month, then the day.

The dynamic collection is entirely configured in the plugin configuration,
thanks to the "dynamic collection level" and "dynamic collection format"
parameters of the STAC properties. The documentation for these parameters
explains in details how to set their values correctly.

Dynamic collections domain classes are separated in two aspects: 
definitions and values.

- Definitions are parsed from the `StacPropertyConfiguration`s.
  They define the structure of the dynamic collections.

- Values are what is provided by the user navigating in collections.
  Values are represented as base64 encoding of the JSON representation
  of key/values. The keys are the names of STAC properties. The values
  are partial or complete values for the properties.

A dynamic collection value allows to provide all possible sub-values, 
corresponding to child collections. For instance, a dynamic collection
value finishing with a datetime property for which the year is given,
can lead to all sub-collections for the months of the chosen year.

Once a dynamic collection value is fully completed for the corresponding
dynamic collection definition, when all the level definitions are
fully valued. At that point, the STAC plugin can transform the dynamic
collection value to an `ItemSearchBody`. Then we reuse the search
mechanism with this `ItemSearchBody`.

# Link management

STAC is based extensively on links between entities. Items link
to collections, collections link to their inner items, to parent
or child collections.

However, links provided by our plugin must authenticate the current user.
In STAC, links are only defined by their URL, and it is not pssible
to provide authentication headers to be used by the STAC client.
Fortunately, REGARDS allows to pass the authentication token as
a query parameter named `token`. The plugin leverages this mechanism
and generates links with this parameter.

The class `LinkCreatorServiceImpl` in the `stac-service` module
is responsible for taking a `JWTAuthentication` as input, and
provide links with links with a valid token.

However, these links will be valid only as long as the token is,
and tokens have by default a 2 hour expiration. This means that
the user can not bookmark links provided by our plugin, as they
will expire in a short time.

## STAC browser modifications

Since the official STAC browser implementation ([here](https://github.com/radiantearth/stac-browser) on github)
does not work with links having the `token` query parameter,
a modified version of the STAC browser can be found [here](https://github.com/glmxndr/stac-browser).
This patched version allows to work with the REGARDS `token` query parameters,
at least until the pull request is merged.
