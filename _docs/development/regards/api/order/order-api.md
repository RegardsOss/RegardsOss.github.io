---
layout: classic-docs
title: REGARDS Order API
---
# Overwiew

Base API URL may vary and is not mentioned here. So in production, each
URL specified here must be prefixed with this base URL.

# Create an order

Allows to validate current basket and create corresponding order.

## API endpoint description

{% include_relative generated-snippets/OrderControllerIT/testCreateNOK/http-request.md %}

{% include_relative generated-snippets/OrderControllerIT/testCreateNOK/request-fields.md %}

{% include_relative generated-snippets/OrderControllerIT/testCreateNOK/request-body.md %}

{% include_relative generated-snippets/OrderControllerIT/testCreateNOK/http-response.md %}

{% include_relative generated-snippets/OrderControllerIT/testCreationWithEmptyBasket/http-response.md %}

# Retrieve an order

Allows to retrieve specified order.

## API endpoint description

{% include_relative generated-snippets/OrderControllerIT/testGetOrder/http-request.md %}

### Response

{% include_relative generated-snippets/OrderControllerIT/testGetOrder/response-fields.md %}

{% include_relative generated-snippets/OrderControllerIT/testGetOrder/http-response.md %}

{% include_relative generated-snippets/OrderControllerIT/testGetNotFoundOrder/http-response.md %}

# Pause an order

Allows to pause specified order.

## API endpoint description

{% include_relative generated-snippets/OrderControllerIT/testPause/http-request.md %}

{% include_relative generated-snippets/OrderControllerIT/testPause/http-response.md %}

{% include_relative generated-snippets/OrderControllerIT/testPauseFailed/http-response.md %}

# Resume an order

Allows to resume specified order.

## API endpoint description

{% include_relative generated-snippets/OrderControllerIT/testResume/http-request.md %}

{% include_relative generated-snippets/OrderControllerIT/testResume/http-response.md %}

{% include_relative generated-snippets/OrderControllerIT/testResumeFailed/http-response.md %}

# Delete an order

Allows to delete specified order (still present into database).

## API endpoint description

{% include_relative generated-snippets/OrderControllerIT/testDelete/http-request.md %}

{% include_relative generated-snippets/OrderControllerIT/testDelete/http-response.md %}

{% include_relative generated-snippets/OrderControllerIT/testDeleteFailed/http-response.md %}

# Remove an order

Allows to remove specified order (delete from database).

## API endpoint description

{% include_relative generated-snippets/OrderControllerIT/testRemove/http-request.md %}

{% include_relative generated-snippets/OrderControllerIT/testRemove/http-response.md %}

{% include_relative generated-snippets/OrderControllerIT/testRemoveFailed/http-response.md %}

# Find all orders or all specifid user orders

Allows to find all specified user orders or all users orders

## API endpoint description

{% include_relative generated-snippets/OrderControllerIT/testFindAllSpecificUser/http-request.md %}

{% include_relative generated-snippets/OrderControllerIT/testFindAllSpecificUser/request-parameters.md %}

### Response

{% include_relative generated-snippets/OrderControllerIT/testFindAllSpecificUser/response-fields.md %}

{% include_relative generated-snippets/OrderControllerIT/testFindAllSpecificUser/http-response.md %}

{% include_relative generated-snippets/OrderControllerIT/testFindAll/http-response.md %}

# Find all current user orders

Allows to find all current user orders

## API endpoint description

{% include_relative generated-snippets/OrderControllerIT/testFindAllOwner/http-request.md %}

{% include_relative generated-snippets/OrderControllerIT/testFindAllOwner/request-parameters.md %}

### Response

{% include_relative generated-snippets/OrderControllerIT/testFindAllOwner/response-fields.md %}

{% include_relative generated-snippets/OrderControllerIT/testFindAllOwner/http-response.md %}

# Generate a CSV file with all orders

Allows to create a CSV file containing all users orders

## API endpoint description

{% include_relative generated-snippets/OrderControllerIT/testCsv/http-request.md %}

{% include_relative generated-snippets/OrderControllerIT/testCsv/http-response.md %}

# Download current order files

Allows to download a zip file (with streaming) containing all currently
available order files.

## API endpoint description

{% include_relative generated-snippets/OrderControllerIT/testDownloadZipFile/http-request.md %}

{% include_relative generated-snippets/OrderControllerIT/testDownloadZipFile/http-response.md %}

Note: upper content is Zip file content that’s why it isn’t really
readable.

# Download order metalink file

Allows to download (with streaming) a metalink with all order files.

## API endpoint description

{% include_relative generated-snippets/OrderControllerIT/testDownloadMetalinkFile/http-request.md %}

{% include_relative generated-snippets/OrderControllerIT/testDownloadMetalinkFile/http-response.md %}

Note: upper content is None because result is streamed and so isn’t yet
available.

# Download order metalink file with public token

Allows to download a metalink with all order files with public generated
token (given into sent email)

## API endpoint description

{% include_relative generated-snippets/OrderControllerIT/testPublicDownloadMetalinkFile/http-request.md %}

{% include_relative generated-snippets/OrderControllerIT/testPublicDownloadMetalinkFile/request-parameters.md %}

{% include_relative generated-snippets/OrderControllerIT/testPublicDownloadMetalinkFile/http-response.md %}

# Find all order files associated to a dataset

Allows to find all files from an order for a specified dataset.

## API endpoint description

{% include_relative generated-snippets/OrderControllerIT/testFindAllOrderFiles/http-request.md %}

{% include_relative generated-snippets/OrderControllerIT/testFindAllOrderFiles/path-parameters.md %}

{% include_relative generated-snippets/OrderControllerIT/testFindAllOrderFiles/request-parameters.md %}

### Response

{% include_relative generated-snippets/OrderControllerIT/testFindAllOrderFiles/response-fields.md %}

{% include_relative generated-snippets/OrderControllerIT/testFindAllOrderFiles/http-response.md %}

# Download an order file

Allows to download a file that is part of an order.

## API endpoint description

{% include_relative generated-snippets/OrderDataFileControllerIT/testDownloadFile/http-request.md %}

{% include_relative generated-snippets/OrderDataFileControllerIT/testDownloadFile/http-response.md %}

{% include_relative generated-snippets/OrderDataFileControllerIT/testDownloadFileFailed/http-response.md %}

## Download an order file with public token

Allows to download a file that is part of an order with a public token
(from metalink file). If file is not yet available, result HTTP code is
202 (Accepted).

## API endpoint description

{% include_relative generated-snippets/OrderControllerIT/testDownloadFile/http-request.md %}

{% include_relative generated-snippets/OrderControllerIT/testDownloadFile/path-parameters.md %}

{% include_relative generated-snippets/OrderControllerIT/testDownloadFile/request-parameters.md %}

{% include_relative generated-snippets/OrderControllerIT/testDownloadFile/http-response.md %}

{% include_relative generated-snippets/OrderControllerIT/testDownloadNotYetAvailableFile/http-response.md %}
