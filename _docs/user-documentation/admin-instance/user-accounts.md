---
layout: classic-docs
title: User accounts
short-title: Projects
categories:
  - user-documentation
---

{% include toc.md %}

## Comptes partagés

Dans le système REGARDS tout utilisateur d'un projet est associé à un compte d'instance. Ceci permet d'authoriser l'accès à plusieurs projets pour un même utilisateur.
Les comptes utilisateur peuvent être géré depuis l'interface d'administration d'instance REGARDS.

## Système de validation des comptes utilisateurs

Lorsqu'un utilisateur demande la création d'un nouveau compte, il est possible de configurer le systèmes REGARDS pour demander deux niveaux d'acceptation de la demande :
 1. Validation du compte au niveau de l'instance
 2. Validation du compte au niveau du projet

 La gestion de la validation du compte ua niveau projet est expliqué [ici](/user-documentation/admin/users/)

 La validation du compte au niveau instance est configurable depuis la section `Accounts` de l'interface administration d'instance.

<img src="/assets/images/user-documentation/admin-instance/accounts-settings.png" width="750">

Deux valeurs sont alors possibles :
 - Automatic : Aucune validation manuelle de niveau instance ne sera demandé et le compte sera automatiquement créé et activé.
 - Manual : Toute demande de compte devrat-être validée par un administrateur de l'instance REGARDS.

Dans le cas d'une validation manuelle, l'administrateur d'instance doit valider la demande comme présenté dans l'écran ci-dessous.

<img src="/assets/images/user-documentation/admin-instance/account-validation.png" width="750">

- Une vignette a coté de la section <b>Accounts</b> indique qu'un utilisateur est en attente de validation.
- Dans l'onglet <b>New accounts</b> l'utilisateur en attente de validation est présent.
- Deux actions sont alors possibles, accepter (encart vert) ou refuser le compte (encart rouge).

Une fois le compte accepté, le compte est alors présent dans l'onglet <b>All Users</b>

<img src="/assets/images/user-documentation/admin-instance/accounts.png" width="750">

La validation du <b>compte</b> est donc terminée, mais la validation de l'<b>utilisateur</b> au niveau projet peut-être nécessaire en fonction de la configuration du projet défini [ici](user-documentation/admin/users/)

## Suppression d'un compte utilisateur

La suppression d'un compte n'est possbile que si le compte n'est associé à aucun utilisateur projet. Dans ce cas et <b>seulement dans ce cas</b>, l'icone de suppression est accessible sur la ligne du compte à supprimer.

<img src="/assets/images/user-documentation/admin-instance/account-deletion.png" width="750">




