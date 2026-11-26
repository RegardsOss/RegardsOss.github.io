---
title: What is a Product ?
sidebar_label: Products
slug: /development/concepts/products/
---

The main notion to understand about REGARDS catalog before looking at its architecture and concepts is to understand the
concept of **Products**.  
A Product is the association between :

- `0 to X` raw data file(s). Data files can be scientific files, documents, thumbnails, quicklooks, html files,...
- Some metadata to describe the product and to describe raw data file(s)

:::info Metadata are useful
The main idea of Products is to **always** have a description of the data files in the catalog.  
If you do not have any metadata on a product, it will be harder for end users to search and select products without
looking at raw data file(s) filenames...
:::

A Product in REGARDS catalog can have only metadata, but **never** only data files.

All products in REGARDS catalog are versioned.