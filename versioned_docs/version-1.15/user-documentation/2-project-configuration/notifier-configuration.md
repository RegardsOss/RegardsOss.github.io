---
id: notifier-configuration
title: Manage Notifier configuration
slug: /user-guide/project-configuration/notifier-configuration
---

import Icon from '@mdi/react';
import { mdiSend, mdiCardSearch, mdiSwapVertical  } from '@mdi/js';


Le service de Notification, apporté par `Notifier`, permet de :
*   Recevoir des produits GeoJSON ou OAIS
*   Les envoyer à différents destinataires suivant différentes règles.

Le fonctionnement du service de notification est détaillé [dans cette page](../../development/backend/regards/notifier/notifier.md).
## Configuration

Pour configurer le fonctionnement de Notifier, vous pouvez accéder depuis la page d'administration projet, dans l'onglet **Microservices**.

<div align="center">
  <img src="/images/user-documentation/v1.4/2-project-configuration/microservices/microservices-configure.png" alt="configuration microservices" width="500"/> 
</div>

La configuration d'un service peut-être
téléchargée et importée depuis l'écran accessible en cliquant sur l'icône <Icon path={mdiSwapVertical} size={1.3} />
du service concerné.

Vous pouvez consulter le guide sur [la configuration des différents types de plugins](../../development/backend/regards/notifier/plugins/notifier-intro-plugins.md)

## Diffusion OAIS

Ce service permet de [diffuser les produits GeoJSON](../4_1-ingest/oais-dissemination.md).

## Diffusion GeoJSON

Ce service permet de [diffuser les produits GeoJSON](../4_3-fem/feature-dissemination.md).
