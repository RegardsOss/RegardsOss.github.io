---
id: concepts-workers
title: REGARDS Workers
sidebar_label: Workers
slug: /development/concepts/workers/
---


Workers have been designed to enable massive parallel processing of requests. For this purpose:

* Workers **use the [AMQP API](./06-amqp-api.md) to retrieve the requests to be processed**.
* Workers can be **massively replicated** to handle a high volume of requests in parallel.
* Workers do not use a database to retrieve requests, manage their states, or utilize shared locks to prevent another
  replica from performing the same activity in parallel. This is main difference with a REGARDS microservice.
* Workers do not support multi-tenancy, it's just a metadata used to contact back REGARDS services after the processing
  is done.
* Workers **can be chained** to allow different types of processing chain.

The implementation of processing tasks on workers is therefore simplified compared to those performed by REGARDS
microservices. A deployed worker will regularly send a heartbeat to the Worker Manager to confirm that its worker type
is active. Workers listen to its AMQP processing queue to retrieve requests to be executed.

The following processing steps illustrate commonly implemented possibilities:

* Retrieve a message during a transaction, allowing the message to remain in the input queue if the processing fails for
  an undetermined reason.
* **File processing** : move a file from one storage system to another, extract archives...
* **Metadata processing** : read a product data file, extract business metadata, and generate an AMQP message to modify
  the GeoJSON product, enriching the product's metadata.
* Acknowledge the AMQP message when processing is complete. If the processing failed, send the error reason to the
  Worker Manager. If the processing was successful, the worker can either send a success message or issue a new
  processing request for the Worker Manager, which can then take this payload and send it to a new worker.

:::info
Workers can actually be developed
with [any language that provides a client library to connect to RabbitMQ](https://www.rabbitmq.com/client-libraries/devtools) !  
Checkout the Java Spring cloud Stream or Python implementations to
make your own worker.
:::
