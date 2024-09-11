---
id: fill-basket-from-file
title: Fill basket from file
sidebar_label: Fill basket from file
slug: /development/backend/services/order/guides/fill-basket-from-file
---
_This page assumes you know how [to authenticate](../../../authentication/api-guides/rest/authentication-api-swagger.mdx) your REST API
requests._

This guide describes how add some products inside a basket, from a file submitted by REST API.

:::info Authentication required
This feature is accessible at user-registered level, or any role with more privileges.
:::

You can see [API documentation here](order-api-swagger.mdx#tag/basket-controller/operation/addSelectionFromFile)

## Concept

1. A file containing **one provider id per line** is transmitted to service order by REST API
2. Order service extract products identifiers from input file
3. Order service search using catalog service the products matching provider ids
4. Order service add resulting products to the current basket of the current user
5. The endpoint returns updated or created basket of the current user

## File format

The file is quite simple: one product identifier (provider id) per line.  

```text title="Input file example"
ProviderId00 
SMM_CRR_AXFCNE20230903_065543_20230903_150000_20230903_150000.grb 
ProviderId02 
SGM_CRR_AXFCNE20230813_065544_20230813_170000_20230813_170000.grb 
ProviderId05 
```
:::info Note that
* The product version must not be indicated in this file. The **last** version of the product is always used.
* Spaces after or before the identifier are automatically removed by order service.
:::
:::note Number max of product identifier
  A **maximum of provider id per file is configurable** at service level : _property regards.order.basket.upload.
  file.max_ lines, with default value at 1000 ids.
:::

## Catalog search

Order service sends a search request to Catalog service, to find all products that match exactly one of the 
identifier extracted from [input file](#file-format). Several requests can be done because list of ids is 
partitioned to many list of 100 elements (not configurable), to avoid huge requests to elastic search.

:::info Reminder 
Order service retrieves from catalog the **last version** of the requested products.
:::

## Add product returned to Basket

The result of the [catalog search](#catalog-search) is added to the basket of the current user. If basket does not 
exist, it will be created.

:::info Note that
* Product ids not found, not accessible, or not visible are ignored and are not added to basket.
* If no product are returned, the endpoint return http code 204 (No Content), and nothing is added to basket.
* Potential errors are specified in [API documentation](order-api-swagger.mdx#tag/basket-controller/operation/addSelectionFromFile)
:::
