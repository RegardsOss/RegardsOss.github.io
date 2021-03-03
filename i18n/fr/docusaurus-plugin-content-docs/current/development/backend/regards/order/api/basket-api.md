---
id: backend-order-basket-api
title: REGARDS Basket API
sidebar_label: Basket
slug: /development/backend/order/api/basket
---


## How to access API endpoints

You can access each endpoint of this API thanks to a `Curl` request.

You can request without auhentication by adding the REGARDS project in the request thanks to the parameter `scope`
```bash
curl http://localhost:<rs-order port>/<endpoint>?scope=<project>
```
Or you can authenticate to access admin endpoints. To do so, use the [authentication API](../../authentication/api) to get a token and then add the token to the request headers.

```bash
curl http://localhost:<rs-order port>/<endpoint> -H 'Authorization: bearer <token>'
```

To access endpoints from `outside` the microservice installation server, you need to use the "gateway" microservice. To do so, use the here under access point instead of the previous one.

```bash
curl http://<gateway host>:<gateway port>/rs-order/api/v1/<endpoint>
```


# Overwiew

Base API URL may vary and is not mentioned here. So in production, each
URL specified here must be prefixed with this base URL.

# Add a selection to the basket

Allows to create a basket or adding a data selection to existing one.

## API endpoint description

{@import generated-snippets/BasketControllerIT/testAddBadSelection/http-request.md}

{@import generated-snippets/BasketControllerIT/testAddBadSelection/request-fields.md}

{@import generated-snippets/BasketControllerIT/testAddBadSelection/request-body.md}

{@import generated-snippets/BasketControllerIT/testAddEmptyOpensearchSelection/request-body.md}

{@import generated-snippets/BasketControllerIT/testAddFullOpensearchSelection/request-body.md}

### Response

{@import generated-snippets/BasketControllerIT/testAddFullOpensearchSelection/response-fields.md}

{@import generated-snippets/BasketControllerIT/testAddBadSelection/http-response.md}

{@import generated-snippets/BasketControllerIT/testAddEmptyOpensearchSelection/http-response.md}

{@import generated-snippets/BasketControllerIT/testGetBasket/http-response.md}

# Get the basket

Allows to retrieve current basket.

## API endpoint description

{@import generated-snippets/BasketControllerIT/testGetBasket/http-request.md}

{@import generated-snippets/BasketControllerIT/testGetBasket/http-response.md}

{@import generated-snippets/BasketControllerIT/testGetEmptyBasket/http-response.md}

# Remove a whole dataset selections from the basket

Allows to remove complete dataset data objects selection from current
basket.

## API endpoint description

{@import generated-snippets/BasketControllerIT/testRemoveDatasetSelection/http-request.md}

{@import generated-snippets/BasketControllerIT/testRemoveDatasetSelection/http-response.md}

{@import generated-snippets/BasketControllerIT/testGetEmptyBasket/http-response.md}

# Remove a dated items selection from the basket

Allows to remove a dated data objects selection under dataset selection
from current basket.

## API endpoint description

{@import generated-snippets/BasketControllerIT/testRemoveDatedItemSelection/http-request.md}

{@import generated-snippets/BasketControllerIT/testRemoveDatedItemSelection/http-response.md}

{@import generated-snippets/BasketControllerIT/testGetEmptyBasket/http-response.md}

# Empty the basket

Allows to empty current basket.

## API endpoint description

{@import generated-snippets/BasketControllerIT/testEmptyBasket/http-request.md}

{@import generated-snippets/BasketControllerIT/testEmptyBasket/http-response.md}
