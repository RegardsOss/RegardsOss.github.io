---
layout: classic-docs
title: Bus message events
---

{% include toc.md %}

> To know more about bus message mechanism look at [AMQP starter](/development/framework/starters/amqp-starter/)


 | Event    | Target   | Mode    | Description     |
 | :----    | :----    | :------ | :-----------    |
 | [SIPEvent](https://github.com/RegardsOss/regards-ingest/blob/master/ingest-domain/fr/cnes/regards/modules/ingest/domain/event/SIPEvent.java) | ONE_PER_MICROSERVICE_TYPE | Broadcast | Published  to inform system for all SIPEntity state modification |
