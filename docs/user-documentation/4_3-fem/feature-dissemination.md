---
id: fem-features-dissemination
title: Feature dissemination
slug: /user-guide/import-data/fem/features-dissemination/
---

## Diffusion des produits

Le Système REGARDS permet de diffuser tout ou partie des produits ajoutés, modifiés ou supprimés de l'archive de
produits GeoJson vers des systèmes externes.

Pour ce faire, un service de notification est dédié à l'envoi de messages à divers destinaires.  
Ce service permet via un ensemble de plugins de définir :

- Le format du message à envoyer
- Le moyen de diffusion du message
- Les destinataires du message
- Les règles de diffusion des messages aux différents destinataires

Pour comprendre ce fonctionnement en détail, vous pouvez vous référer à
la [description du service notifier](../../development/backend/regards/notifier/notifier.md).

## Acquittement des produits

Après diffusion d'un produit vers un système externe, le catalogue REGARDS s'attend à recevoir un message d'acquittement depuis ce système externe si la propriété `ackRequired` est à true dans la configuration de Notifier. C'est le **service de produit GeoJSON** qui récupère ce message d'acquittement par AMQP et va mettre à jour l'acquittement des produits dans la base de données.
Il faut différencier deux cas pour configurer l'acquittement :

- l'acquittement s'effectue depuis un autre catalogue REGARDS
- l'acquittement s'effectue depuis une application externe autre que REGARDS

### Depuis un catalogue REGARDS

Dans ce cas, l'acquittement peut être mis en place à l'aide du plugin spécifique `DisseminationAckSender` dans la
configuration du service de notification.
La configuration de ce plugin est spécifiée dans le guide des
[Recipient sender plugins](../../development/backend/regards/notifier/plugins/recipient-sender-plugins.md#dissemination-ack-sender)

:::danger Utilisez les bons paramètres
Dans le plugin, les deux paramètres à remplir pour l'acquittement de features sont `featureDisseminationExchange` et
`featureDisseminationQueueName`
:::

Puisque les 2 REGARDS ont leur propre RabbitMQ, vous devez ensuite mettre en place un shovel entre les 2 REGARDS pour transférer l'évènement d'acquittement produit et le transférer vers
le REGARDS où il sera pris en compte par le catalogue émetteur de la notification et ayant un produit **En attente de retour de notification**.

### Depuis une application externe

Votre application externe doit être capable d'envoyer un message d'acquittement sur l'interface AMQP de REGARDS.

Le message à envoyer, ainsi que les informations à utiliser sont définies dans le
guide [Publish an acknowledge request event](../../development/backend/regards/fem/api-guides/amqp/amqp-publish-ack-request.md)
