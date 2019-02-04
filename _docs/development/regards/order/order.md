---
layout: classic-docs
title: REGARDS order microservice
short-title: Order
categories:
  - development
---

## Description

 The `Order` microservice is designed to allow authenticated users to order files of the REGARDS catalog. To do so, users have to build a basket by adding entities in it thanks to `opensearch` requests.

 There is no limit on the number of files or even on the size of the files users can order. Nevertheless, if the order is too big, it will be devided in many groups of files (suborders). In this case, the user have to retrieve the available group files (suborder) before the next one is made available by the system.

 Here under is the state diagram of the order process :

 ![](/assets/schemas/order/ord_state_diagram.png)


## Available APIs

 - [Basket](/development/regards/order/api/basket-api/) : API to manage user basket (add and remove entities)
 - [Order](/development/regards/order/api/order-api/) : API to submit, cancel and monitoring user orders.
