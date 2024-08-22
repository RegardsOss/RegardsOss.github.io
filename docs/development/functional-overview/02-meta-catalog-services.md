---
id: meta-catalog-services
title: Meta Catalog services
sidebar_label: Meta Catalog
slug: /development/functional-overview/meta-catalog-services
---

Meta-Catalog services are a set of **mandatory REGARDS services** that allows to :

- populate a Meta-Catalog using data source(s)
- allows users to consult indexed [Products](../concepts/04-products.md)

To do so, REGARDS provides following services :

- [rs-admin-instance](../backend/regards/admin-instance/overview.md) :
  this [instance service](../concepts/03-multitenant.md) manages projects and shared user accounts.
- [rs-admin](../backend/regards/admin/admin.md)          : Manage project users and roles
- [rs-authentication](../backend/regards/authentication/authentication.md) : Manage a REGARDS project authentication
  system(s)
- [rs-dam](../backend/regards/dam/dam.md)            : Populate a REGARDS project catalog from existing data source(s)
  and compute access rights.
- [rs-catalog](../backend/regards/catalog/catalog.md)        : Consult, search and access a REGARDS project
  catalog [products](../concepts/04-products.md)

## Populate meta-catalog

The main concept behind REGARDS catalog population design is to have a service, the **rs-dam** microservice, that
consults one or many **data source(s)** to retrieve [products](../concepts/04-products.md) to index.  
These products are pushed and centralized inside an ElasticSearch index, a powerful and fast search engine.  
These products, that can be retrieved from various **data source(s)**, are homogenize thanks to **data model(s)** and *
*datasets**
and protected using **users access rights**.

:::info Data sources
**Data sources** is a main concept to understand in Regards **Meta Catalog**.  
Regards is a meta catalog composed with data crawled from many data source(s).  
You can connect any compatible data source but Regards provides two data source(s) of his
own : [OAIS Data source](03-oais-catalog-services.md) and [GeoJson Data source](04-geojson-catalog-services.md).
:::info

:::info Data models
**Data models** are the definition of the metadata of your products.  
Each Regards project can define as many data model(s) as needed.
:::info

![](img/populate-catalog.png)

The **rs-dam** microservice crawl products from data source(s), map the results with the associated data model(s) and
then insert them into **Elasticsearch Index**. Data sources and data models need some configuration from an
administrator.  
To learn more about **rs-dam** and crawling system,
see [rs-dam microservice documentation](../backend/regards/dam/dam.md).

## Consult meta-catalog

Once the **Elasticsearch index** is populated by **rs-dam**, **rs-catalog** microservice can be used to consult products
metadata and to download products files.  
To learn more about catalog service and its multiple search engines like **STAC** or **OpenSearch**,
see [rs-catalog microservice documentation](../backend/regards/catalog/catalog.md).

The here under diagram explain the interactions between microservices for this purpose:

![](img/consult-meta-catalog.png)
