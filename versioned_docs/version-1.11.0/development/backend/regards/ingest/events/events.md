---
id: backend-ingest-events
title: Bus message events
sidebar_label: Bus message events
slug: /development/backend/services/ingest/events/
---

:::info
To know more about bus message mechanism look at [AMQP starter](../../../framework/starters/amqp-starter.md)
:::

 | Event    | Target   | Mode    | Description     |
 | :----    | :----    | :------ | :-----------    |
 | [SIPEvent](https://github.com/RegardsOss/regards-ingest/blob/master/ingest-domain/src/main/java/fr/cnes/regards/modules/ingest/domain/event/SIPEvent.java) | ONE_PER_MICROSERVICE_TYPE | Broadcast | Published  to inform system for all SIPEntity state modification |
