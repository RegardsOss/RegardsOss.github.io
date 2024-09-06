---
id: concepts-meta-catalog
title: REGARDS Meta catalog
sidebar_label: Meta catalog
slug: /development/concepts/meta-catalog/
---

### Meta catalog

REGARDS **Meta catalog** is the result of the **standardization** of multiples source catalogs
of [products](./01-products.md)
in a single catalog.

In all REGARDS documentation, we will talk about :

- **Data source** for an existing catalog crawled by REGARDS.
- **Meta catalog** for the global resulting catalog containing all products from all data sources crawled.

To learn more, you can
read [Functional Overview - Meta catalog services](../functional-overview/02-meta-catalog-services.md).

### Model

The notion of **Model** is a key notion and defines the list of metadata for a group of
valid [products](./01-products.md). It is used to standardize products.

:::info
REGARDS **Meta catalog** can contain products with different **Models**.
:::

### Data source

[Products](./01-products.md) of each crawled data source are transformed by REGARDS to match a **Model**
before being inserted in the final catalog called **Meta catalog**.

Every **Data source** is associated to a **Model** to ensure every product is valid and contains associated
metadata.

### Product standardization

Thanks to **Model** and **Data source** design, you can transform products coming from several data sources to
standardize them into the same model. This is the key concept in REGARDS that allows you to search products coming fom
several providers with the same search criteria.

Let's take an example

```json {5} title="Data source 1 products example"
{
  "label": "my product from source 1",
  ...
  "properties": {
    "creation_date": "2024-01-01"
  }
}
```

```json {3} title="Data source 2 products example"
{
  "description": "my product from source 2",
  "date": "2023-06-01"
}
```

In this example, you can define a **Model** to standardize products coming from these two different datasource,
which use 2 different products formats, to make products sharing the same standard Model. To do so, you can take these
two metadata attributes, `date` and `properties.creation_date`, to set them in the same attribut in REGARDS
**Meta catalog**.  
With those two attributes indexed with the same attribute in the resulting meta catalog,
you can search for both products with the same search criteria. 