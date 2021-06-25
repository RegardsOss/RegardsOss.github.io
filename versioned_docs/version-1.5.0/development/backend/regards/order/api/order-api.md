---
id: backend-order-api
title: REGARDS Order API
sidebar_label: Order
slug: /development/backend/services/order/api/
---


# Overwiew

Base API URL may vary and is not mentioned here. So in production, each
URL specified here must be prefixed with this base URL.

# Create an order

Allows to validate current basket and create corresponding order.

## With label

{@import generated-snippets/OrderControllerIT/testCreateOKSimpleLabel/http-request.md}

{@import generated-snippets/OrderControllerIT/testCreateOKSimpleLabel/request-fields.md}

{@import generated-snippets/OrderControllerIT/testCreateOKSimpleLabel/request-body.md}

{@import generated-snippets/OrderControllerIT/testCreateOKSimpleLabel/http-response.md}

## Without label (generated)

{@import generated-snippets/OrderControllerIT/testCreateOKGenLabel/http-request.md}

{@import generated-snippets/OrderControllerIT/testCreateOKGenLabel/request-fields.md}

{@import generated-snippets/OrderControllerIT/testCreateOKGenLabel/request-body.md}

{@import generated-snippets/OrderControllerIT/testCreateOKGenLabel/http-response.md}

## With empty basket

{@import generated-snippets/OrderControllerIT/testCreationWithEmptyBasket/http-request.md}

{@import generated-snippets/OrderControllerIT/testCreationWithEmptyBasket/request-fields.md}

{@import generated-snippets/OrderControllerIT/testCreationWithEmptyBasket/request-body.md}

{@import generated-snippets/OrderControllerIT/testCreationWithEmptyBasket/http-response.md}

## Without basket (error case)

{@import generated-snippets/OrderControllerIT/testCreateNOKNoBasket/http-request.md}

{@import generated-snippets/OrderControllerIT/testCreateNOKNoBasket/request-fields.md}

{@import generated-snippets/OrderControllerIT/testCreateNOKNoBasket/request-body.md}

{@import generated-snippets/OrderControllerIT/testCreateNOKNoBasket/http-response.md}

## Label too long (error case)

{@import generated-snippets/OrderControllerIT/testCreateNOKLabelTooLong/http-request.md}

{@import generated-snippets/OrderControllerIT/testCreateNOKLabelTooLong/request-fields.md}

{@import generated-snippets/OrderControllerIT/testCreateNOKLabelTooLong/request-body.md}

{@import generated-snippets/OrderControllerIT/testCreateNOKLabelTooLong/http-response.md}

## Label not unique for user (error case)

{@import generated-snippets/OrderControllerIT/testCreateNOKLabelNonUnique/http-request.md}

{@import generated-snippets/OrderControllerIT/testCreateNOKLabelNonUnique/request-fields.md}

{@import generated-snippets/OrderControllerIT/testCreateNOKLabelNonUnique/request-body.md}

{@import generated-snippets/OrderControllerIT/testCreateNOKLabelNonUnique/http-response.md}


# Retrieve an order

Allows to retrieve specified order.

## API endpoint description

{@import generated-snippets/OrderControllerIT/testGetOrder/http-request.md}

### Response

{@import generated-snippets/OrderControllerIT/testGetOrder/response-fields.md}

{@import generated-snippets/OrderControllerIT/testGetOrder/http-response.md}

{@import generated-snippets/OrderControllerIT/testGetNotFoundOrder/http-response.md}

# Pause an order

Allows to pause specified order.

## API endpoint description

{@import generated-snippets/OrderControllerIT/testPause/http-request.md}

{@import generated-snippets/OrderControllerIT/testPause/http-response.md}

{@import generated-snippets/OrderControllerIT/testPauseFailed/http-response.md}

# Resume an order

Allows to resume specified order.

## API endpoint description

{@import generated-snippets/OrderControllerIT/testResume/http-request.md}

{@import generated-snippets/OrderControllerIT/testResume/http-response.md}

{@import generated-snippets/OrderControllerIT/testResumeFailed/http-response.md}

# Delete an order

Allows to delete specified order (still present into database).

## API endpoint description

{@import generated-snippets/OrderControllerIT/testDelete/http-request.md}

{@import generated-snippets/OrderControllerIT/testDelete/http-response.md}

{@import generated-snippets/OrderControllerIT/testDeleteFailed/http-response.md}

# Remove an order

Allows to remove specified order (delete from database).

## API endpoint description

{@import generated-snippets/OrderControllerIT/testRemove/http-request.md}

{@import generated-snippets/OrderControllerIT/testRemove/http-response.md}

{@import generated-snippets/OrderControllerIT/testRemoveFailed/http-response.md}

# Find all orders or all specifid user orders

Allows to find all specified user orders or all users orders

## API endpoint description

{@import generated-snippets/OrderControllerIT/testFindAllSpecificUser/http-request.md}

{@import generated-snippets/OrderControllerIT/testFindAllSpecificUser/request-parameters.md}

### Response

{@import generated-snippets/OrderControllerIT/testFindAllSpecificUser/response-fields.md}

{@import generated-snippets/OrderControllerIT/testFindAllSpecificUser/http-response.md}

{@import generated-snippets/OrderControllerIT/testFindAll/http-response.md}

# Find all current user orders

Allows to find all current user orders

## API endpoint description

{@import generated-snippets/OrderControllerIT/testFindAllOwner/http-request.md}

{@import generated-snippets/OrderControllerIT/testFindAllOwner/request-parameters.md}

### Response

{@import generated-snippets/OrderControllerIT/testFindAllOwner/response-fields.md}

{@import generated-snippets/OrderControllerIT/testFindAllOwner/http-response.md}

# Generate a CSV file with all orders

Allows to create a CSV file containing all users orders

## API endpoint description

{@import generated-snippets/OrderControllerIT/testCsv/http-request.md}

{@import generated-snippets/OrderControllerIT/testCsv/http-response.md}

# Download current order files

Allows to download a zip file (with streaming) containing all currently
available order files.

## API endpoint description

{@import generated-snippets/OrderControllerIT/testDownloadZipFile/http-request.md}

{@import generated-snippets/OrderControllerIT/testDownloadZipFile/http-response.md}

Note: upper content is Zip file content that’s why it isn’t really
readable.

# Download order metalink file

Allows to download (with streaming) a metalink with all order files.

## API endpoint description

{@import generated-snippets/OrderControllerIT/testDownloadMetalinkFile/http-request.md}

{@import generated-snippets/OrderControllerIT/testDownloadMetalinkFile/http-response.md}

Note: upper content is None because result is streamed and so isn’t yet
available.

# Download order metalink file with public token

Allows to download a metalink with all order files with public generated
token (given into sent email)

## API endpoint description

{@import generated-snippets/OrderControllerIT/testPublicDownloadMetalinkFile/http-request.md}

{@import generated-snippets/OrderControllerIT/testPublicDownloadMetalinkFile/request-parameters.md}

{@import generated-snippets/OrderControllerIT/testPublicDownloadMetalinkFile/http-response.md}

# Find all order files associated to a dataset

Allows to find all files from an order for a specified dataset.

## API endpoint description

{@import generated-snippets/OrderControllerIT/testFindAllOrderFiles/http-request.md}

{@import generated-snippets/OrderControllerIT/testFindAllOrderFiles/path-parameters.md}

{@import generated-snippets/OrderControllerIT/testFindAllOrderFiles/request-parameters.md}

### Response

{@import generated-snippets/OrderControllerIT/testFindAllOrderFiles/response-fields.md}

{@import generated-snippets/OrderControllerIT/testFindAllOrderFiles/http-response.md}

# Download an order file

Allows to download a file that is part of an order.

## API endpoint description

{@import generated-snippets/OrderDataFileControllerIT/testDownloadFile/http-request.md}

{@import generated-snippets/OrderDataFileControllerIT/testDownloadFile/http-response.md}

{@import generated-snippets/OrderDataFileControllerIT/testDownloadFileFailed/http-response.md}

## Download an order file with public token

Allows to download a file that is part of an order with a public token
(from metalink file). If file is not yet available, result HTTP code is
202 (Accepted).

## API endpoint description

{@import generated-snippets/OrderControllerIT/testDownloadFile/http-request.md}

{@import generated-snippets/OrderControllerIT/testDownloadFile/path-parameters.md}

{@import generated-snippets/OrderControllerIT/testDownloadFile/request-parameters.md}

{@import generated-snippets/OrderControllerIT/testDownloadFile/http-response.md}

{@import generated-snippets/OrderControllerIT/testDownloadNotYetAvailableFile/http-response.md}
