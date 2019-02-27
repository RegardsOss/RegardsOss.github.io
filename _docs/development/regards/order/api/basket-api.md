---
layout: classic-docs
title: REGARDS Basket API
---
{% include toc.md %}

{% include howto-api.md %}

# Overwiew

Base API URL may vary and is not mentioned here. So in production, each
URL specified here must be prefixed with this base URL.

# Add a selection to the basket

Allows to create a basket or adding a data selection to existing one.

## API endpoint description

{% include_relative generated-snippets/BasketControllerIT/testAddBadSelection/http-request.md %}

{% include_relative generated-snippets/BasketControllerIT/testAddBadSelection/request-fields.md %}

{% include_relative generated-snippets/BasketControllerIT/testAddBadSelection/request-body.md %}

{% include_relative generated-snippets/BasketControllerIT/testAddEmptyOpensearchSelection/request-body.md %}

{% include_relative generated-snippets/BasketControllerIT/testAddFullOpensearchSelection/request-body.md %}

### Response

{% include_relative generated-snippets/BasketControllerIT/testAddFullOpensearchSelection/response-fields.md %}

{% include_relative generated-snippets/BasketControllerIT/testAddBadSelection/http-response.md %}

{% include_relative generated-snippets/BasketControllerIT/testAddEmptyOpensearchSelection/http-response.md %}

{% include_relative generated-snippets/BasketControllerIT/testGetBasket/http-response.md %}

# Get the basket

Allows to retrieve current basket.

## API endpoint description

{% include_relative generated-snippets/BasketControllerIT/testGetBasket/http-request.md %}

{% include_relative generated-snippets/BasketControllerIT/testGetBasket/http-response.md %}

{% include_relative generated-snippets/BasketControllerIT/testGetEmptyBasket/http-response.md %}

# Remove a whole dataset selections from the basket

Allows to remove complete dataset data objects selection from current
basket.

## API endpoint description

{% include_relative generated-snippets/BasketControllerIT/testRemoveDatasetSelection/http-request.md %}

{% include_relative generated-snippets/BasketControllerIT/testRemoveDatasetSelection/http-response.md %}

{% include_relative generated-snippets/BasketControllerIT/testGetEmptyBasket/http-response.md %}

# Remove a dated items selection from the basket

Allows to remove a dated data objects selection under dataset selection
from current basket.

## API endpoint description

{% include_relative generated-snippets/BasketControllerIT/testRemoveDatedItemSelection/http-request.md %}

{% include_relative generated-snippets/BasketControllerIT/testRemoveDatedItemSelection/http-response.md %}

{% include_relative generated-snippets/BasketControllerIT/testGetEmptyBasket/http-response.md %}

# Empty the basket

Allows to empty current basket.

## API endpoint description

{% include_relative generated-snippets/BasketControllerIT/testEmptyBasket/http-request.md %}

{% include_relative generated-snippets/BasketControllerIT/testEmptyBasket/http-response.md %}
