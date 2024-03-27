---
id: oais-dissemination
title: OAIS dissemination
slug: /user-guide/import-data/oais-files/oais-dissemination/
---

import Icon from '@mdi/react';
import { mdiSend, mdiCardSearch, mdiSwapVertical  } from '@mdi/js';


_Le Système REGARDS permet de diffuser tout ou partie des produits OAIS vers des systèmes externes._

---

## Introduction

La diffusion de produits OAIS vers des systèmes externes s'effectue à l'aide d'un service de notification, qui a pour vocation l'envoi de messages à divers destinataires.
Vous pouvez consulter le guide sur [le service de Notification](../2-project-configuration/notifier-configuration.md) pour la mise en place.

## Diffuser des produits OAIS

Pour pouvoir diffuser des produits OAIS à des services externes depuis l'IHM, il faut se rendre sur la vue des 
produits, dans l'écran administrateur du projet. La liste des produits est accessibles dans l'onglet **ajout de 
données**, en cliquant sur l'icône <Icon path={mdiCardSearch} size={1.3}/> dans la catégorie **Gestionnaire de produits 
(OAIS)**

<div align="center">
  <img src="/images/user-documentation/v1.15/2-project-configuration/admin/oais-product-management.png" alt="group action" width="400"/> 
</div>

<div align="center">
  <img src="/images/user-documentation/v1.15/4_1-ingest/oais_products.png" alt="group action" width="800"/> 
</div>

Pour diffuser un seul produit, il faut cliquer sur l'icône <Icon path={mdiSend} size={1.3}/> de la 
ligne correspondante. Pour diffuser plusieurs produits, il faut sélectionner les produits puis cliquer sur le bouton 
**NOTIFY SELECTION**.

Une boîte de dialogue s'ouvre alors, au sein de laquelle il faut sélectionner les destinataires de la diffusion.
<div align="center">
  <img src="/images/user-documentation/v1.15/4_1-ingest/list_recipient.png" alt="group action" width="800"/> 
</div>

Ces destinataires correspondent aux différents paramètres **recipientLabel** qui ont été configurés 
dans les plugins du service de notification, à condition que le paramètre **directNotificationEnabled** de ces 
plugins est bien à **true**.
Pour rappel, la configuration des plugins de notification est décrite [dans cette page](../../development/backend/regards/notifier/plugins/notifier-intro-plugins.md)

Après validation, les messages AMQP contenant les produits à diffusés sont envoyés aux destinataires choisis. L'étape suivante consiste en la réception des messages d'acquittements de cette diffusion de produits.

## Acquittement

Après diffusion d'un produit vers un système externe, le catalogue REGARDS s'attend à recevoir un message d'acquittement depuis ce système externe si la propriété `ackRequired` est à true dans la configuration de Notifier. C'est le **service d'ingestion** qui récupère ce message d'acquittement par AMQP et va mettre à jour l'acquittement des produits dans la base de données.

Il faut différencier deux cas pour configurer l'acquittement :

- l'acquittement s'effectue depuis un autre catalogue REGARDS
- l'acquittement s'effectue depuis une application externe autre que REGARDS

### Depuis un catalogue REGARDS

Dans ce cas, l'acquittement peut être mis en place à l'aide du plugin spécifique `DisseminationAckSender` dans la
configuration du service de notification.
La configuration de ce plugin est spécifiée dans le guide des
[Recipient sender plugins](../../development/backend/regards/notifier/plugins/recipient-sender-plugins.md#dissemination-ack-sender)

:::danger Utilisez les bons paramètres
Dans le plugin, les deux paramètres à remplir pour l'acquittement de produits OAIS sont `aipDisseminationExchange` et
`aipDisseminationQueueName`
:::

Puisque les 2 REGARDS ont leur propre RabbitMQ, vous devez ensuite mettre en place un shovel entre les 2 REGARDS pour transférer l'évènement d'acquittement produit et le transférer vers 
le REGARDS où il sera pris en compte par le catalogue émetteur de la notification et ayant un produit **En attente de retour de notification**.

### Depuis une application externe

Votre application externe doit être capable d'envoyer un message d'acquittement sur l'interface AMQP de REGARDS.

Le message à envoyer, ainsi que les informations à utiliser sont définies dans le
guide [Publish OAIS acknowledge request event](/docs/development/backend/services/ingest/amqp/publish-acknowledge-event)
