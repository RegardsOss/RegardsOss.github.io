---
id: backend-order-overview
title: REGARDS order microservice
sidebar_label: Overview
slug: /development/backend/services/order/overview/
---


## Overview

`Order` reponsabilities:

* Manage user basket,
* Order files,
* Download ordered files,

 The `Order` microservice is designed to allow authenticated users to order files of the REGARDS catalog. To do so, users have to build a basket by adding entities in it thanks to `opensearch` requests.

 There is no limit on the number of files or even on the size of the files users can order. Nevertheless, if the order is too big, it will be devided in many groups of files (suborders). In this case, the user have to retrieve the available group files (suborder) before the next one is made available by the system.

 Here under is the state diagram of the order process :

 ![](/schemas/order/ord_state_diagram.png)


## Available APIs

 - [Basket](api/basket/) : API to manage user basket (add and remove entities.md)
 - [Order API](order-api-swagger.mdx) : API to submit, cancel and monitoring user orders.
