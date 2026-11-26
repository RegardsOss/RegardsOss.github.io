---
id: notification-overview
title: Notifications
slug: /user-guide/notifications/notification-overview
---

*Le système de notifications de REGARDS vous permet de rester informé des événements importants survenus sur la plateforme : erreurs de traitement, résultats d'ingestion, alertes de quota, etc. Vous pouvez configurer votre fréquence de réception d'emails et consulter toutes vos notifications directement depuis l'interface.*

*Chaque notification est caractérisée par un titre et un message décrivant l'événement, un niveau de criticité, un émetteur (généralement le nom du microservice à l'origine de la notification), un destinataire (rôle ou utilisateur précis) et un statut (lue ou non lue).*

---

# Comprendre les niveaux de criticité

Le système de notifications utilise quatre niveaux de criticité pour qualifier l'importance des événements :

| Niveau | Description |
|--------|-------------|
| `INFO` | Information sans impact opérationnel |
| `WARNING` | Avertissement nécessitant une attention particulière |
| `ERROR` | Erreur ayant impacté un traitement |
| `FATAL` | Erreur critique nécessitant probablement une intervention |

:::caution
Les notifications de niveau ***FATAL*** sont transmises ***immédiatement par email*** à tous les destinataires concernés dont la fréquence d'envoi est configurée à une valeur autre que `NEVER`, sans attendre l'envoi d'email périodique (par scheduler).
:::

---

# Rappels des notifications non lues

REGARDS envoie périodiquement par email un rappel de toutes vos notifications non lues. Ce mécanisme vous permet de ne manquer aucune notification importante, même si vous ne consultez pas régulièrement l'interface.

:::tip
Pour éviter de recevoir des rappels concernant d'anciennes notifications, pensez à marquer vos notifications comme **lues** après les avoir consultées dans l'IHM REGARDS, ou à les supprimer si elles ne sont plus pertinentes.
:::

La périodicité de ces rappels est directement liée à la fréquence d'envoi que vous souhaitez configurer :
- En mode `DAILY`, vous recevez un rappel quotidien
- En mode `WEEKLY`, vous recevez un rappel hebdomadaire  
- En mode `MONTHLY`, vous recevez un rappel mensuel
- En mode `CUSTOM`, vous recevez un rappel selon votre intervalle personnalisé
- En mode `IMMEDIATE_ONLY` ou `NEVER`, aucun rappel n'est envoyé

:::note
Seules les 10 notifications non lues les plus anciennes sont incluses dans l'envoi périodique par email.
:::

---

# Configurer la fréquence d'envoi d'email

Chaque utilisateur peut configurer indépendamment sa fréquence de réception des emails de notification. Cette préférence est accessible depuis les ***paramètres du compte utilisateur***.

Pour configurer votre fréquence de réception des emails de notification, suivez les étapes suivantes :

- Accédez aux ***paramètres du compte*** en cliquant sur le menu utilisateur en haut à droite
- Sélectionnez l'onglet ***Notifications***

<div align="center">
    <img src="/images/user-documentation/v2.4/10-notifications/modificationNotificationFrequence.gif" alt="tuto" width="800"/> 
</div>

Plusieurs options de fréquence sont disponibles :

| Valeur | Comportement |
|--------|-------------|
| `NEVER` | Aucun email n'est envoyé, quelle que soit la criticité, y compris pour les notifications `FATAL`. Les notifications restent consultables dans l'interface. ***Valeur par défaut.*** |
| `IMMEDIATE_ONLY` | Seules les notifications de criticité `FATAL` déclenchent un email, immédiatement à leur création. Aucun récapitulatif périodique n'est envoyé. |
| `DAILY` | Un email récapitulatif est envoyé chaque jour à 12h00, incluant les nouvelles notifications et un rappel des notifications non lues. Les notifications `FATAL` sont également transmises immédiatement. |
| `WEEKLY` | Un email récapitulatif est envoyé chaque lundi à 12h00, incluant les nouvelles notifications et un rappel des notifications non lues. Les notifications `FATAL` sont également transmises immédiatement. |
| `MONTHLY` | Un email récapitulatif est envoyé le premier lundi du mois à 12h00, incluant les nouvelles notifications et un rappel des notifications non lues. Les notifications `FATAL` sont également transmises immédiatement. |
| `CUSTOM` | L'utilisateur définit un intervalle personnalisé. Un email récapitulatif est envoyé dès que cet intervalle est écoulé, incluant les nouvelles notifications et un rappel des notifications non lues. Les notifications `FATAL` sont également transmises immédiatement. |

:::note
Quelle que soit la fréquence configurée, les notifications restent toujours consultables dans l'interface web de REGARDS.
:::

## À propos des schedulers périodiques

L'envoi des récapitulatifs des notifications par email est déclenché automatiquement par des tâches planifiées (schedulers). Les horaires par défaut sont les suivants :

| Fréquence | Déclenchement par défaut | Expression cron |
|-----------|--------------------------|-----------------|
| `DAILY` | Chaque jour à 12h00 | `0 0 12 * * *` |
| `WEEKLY` | Chaque lundi à 12h00 | `0 0 12 ? * MON` |
| `MONTHLY` | Le premier lundi du mois à 12h00 | `0 0 12 1-7 * MON` |
| `CUSTOM` | Même déclenchement que `DAILY` (vérification quotidienne de l'intervalle écoulé) | `0 0 12 * * *` |

:::note
Ces horaires peuvent être surchargés par configuration applicative du microservice rs-admin (voir la [documentation de configuration rs-admin](../../development/services/admin/configuration/import-export.md)) via les propriétés `regards.notification.cron.daily`, `regards.notification.cron.weekly` et `regards.notification.cron.monthly`.
:::

## À propos de la fréquence personnalisée

En mode `CUSTOM`, l'intervalle est défini par deux paramètres complémentaires :

| Paramètre | Contrainte | Description |
|-----------|-----------|-------------|
| `days` | Minimum : ***1 jour*** | Nombre de jours entre deux envois |
| `hours` | Entre ***0 et 24 heures*** | Complément en heures s'ajoutant aux jours |

L'intervalle effectif est la somme `days + hours`. 

Par exemple : `days = 2` et `hours = 6` déclenche un email toutes les 2 jours et 6 heures après la date de création de la notification.

---

# Consulter vos notifications

Les notifications sont accessibles depuis l'icône de cloche <img src="/images/user-documentation/regards-icons/user/bell.png" alt="notification bell" height="25" width="25"/> dans la barre de navigation principale de l'IHM.

L'écran suivant apparait :
<div align="center">
    <img src="/images/user-documentation/v2.4/10-notifications/notificationScreen.png" alt="notifications list" width="800"/> 
</div>

Depuis cette interface, vous pouvez :
- ***Filtrer*** les notifications par niveau, statut, émetteur ou date
- ***Marquer*** une notification comme lue
- ***Supprimer*** une ou plusieurs notifications

## Filtrer vos notifications

Plusieurs filtres sont disponibles pour affiner l'affichage de vos notifications :

| Filtre | Options disponibles |
|--------|-------------|
| Niveau | `INFO`, `WARNING`, `ERROR`, `FATAL` |
| Statut | `UNREAD` (non lue), `READ` (lue) |
| Émetteur | Nom de l'émetteur de la notification |
| Date | Plage de dates (avant / après) |

