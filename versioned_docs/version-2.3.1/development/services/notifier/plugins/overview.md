---
title: Plugins
sidebar_label: Available plugins
slug: /development/backend/services/notifier/plugins/listing
sidebar_position: 2
---

:::info developers advice
If you want to create your own implementation of one of these extension points, you need to extend the specific
interface indicated.
:::

## Recipient sender

All the following plugins implements
the [IRecipientNotifier interface](https://github.com/RegardsOss/regards-backend/blob/master/rs-notifier/notifier/notifier-domain/src/main/java/fr/cnes/regards/modules/notifier/domain/plugin/IRecipientNotifier.java).

| Plugin image                                                                                                                               | Plugin name            | Description                                                                                                                             |
|--------------------------------------------------------------------------------------------------------------------------------------------|------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| [**rs-rabbitmq-sender-plugin**](https://github.com/orgs/RegardsOss/packages/container/package/rs-rabbitmq-sender-plugin)                   | RabbitMQSender         | Send notifications to a specific RabbitMQ exchange<br /> See [RabbitMQSender documentation](./recipient-sender-plugins.md)              |
| [**rs-lta-request-sender-plugin**](https://github.com/orgs/RegardsOss/packages/container/package/rs-lta-request-sender-plugin)             | LtaRequestSender       | Send `LTA manager` requests<br /> See [LtaRequestSender documentation](./recipient-sender-plugins.md)                                   |
| [**rs-worker-manager-sender-plugin**](https://github.com/orgs/RegardsOss/packages/container/package/rs-worker-manager-sender-plugin)       | WorkerManagerSender    | Send `Worker Manager` requests<br /> See [WorkerManagerSender documentation](./recipient-sender-plugins.md)                             |
| [**rs-dissemination-ack-sender-plugin**](https://github.com/orgs/RegardsOss/packages/container/package/rs-dissemination-ack-sender-plugin) | DisseminationAckSender | Send GeoJSON or OAIS dissemination acknowledge requests<br /> See [DisseminationAckSender documentation](./recipient-sender-plugins.md) |

## Rule matcher

All the following plugins implements
the [IRuleMatcher interface](https://github.com/RegardsOss/regards-backend/blob/master/rs-notifier/notifier/notifier-domain/src/main/java/fr/cnes/regards/modules/notifier/domain/plugin/IRuleMatcher.java).

| Plugin image                                      | Plugin name        | Description                                                                                                                                                |
|---------------------------------------------------|--------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Already** provided <br/>inside the microservice | DefaultRuleMatcher | Check into notification content if a json property matches given specific value.  <br /> See [DefaultRuleMatcher documentation](./rule-matcher-plugins.md) |
| **Already** provided <br/>inside the microservice | LuceneRuleMatcher  | Check if notification content or metadata matches provided lucene expression.  <br /> See [LuceneRuleMatcher documentation](./rule-matcher-plugins.md)     |
