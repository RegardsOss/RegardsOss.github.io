---
layout: classic-docs
title: Project users
short-title: Users
categories:
  - user-documentation
---

{% include toc.md %}

## Système de validation des comptes utilisateurs

Sur le système REGARDS tout utilisateur peut s'enregistrer au travers de l'interface utilisateur. Dans ce cas soit l'utilisateur est automatiquement créé dès qu'il aura valider son adresse email) soit il sera en attente qu'un administrateur du projet ai validé sa demande. Le foncionnement voulu est configurable au travers de l'interface d'administration projet depuis la section utilisateurs.

<img src="/assets/images/user-documentation/admin/users-settings.png" width="750">

Les deux options de configuration sont alors proposées  :
 - <b>Automatic</b> : L'utilisateur est automatiquement créé
 - <b>Manuel</b> : L'administrateur du projet doit valider la demande d'inscription de l'utilisateur au projet

<b>NOTE :</b> Ce système de validation est également mis en place au niveau des [comptes utilisateursd'instance](/user-documentation/admin-instance/user-accounts/). Il peut donc y avoir deux validations nécessaires, une niveau instance et une niveau projet.

## Gestion des utilisateurs

### Confguration des utilisateurs

Lorsqu'un utilisateur s'enregistre auprès de du projet, il est automatiquement associé au rôle <b>Registered User</b> et n'est associé à aucun groupe d'accès aux données. Il est à la charge de l'administrateur de lui associé si nécessaire un rôle différent et un ou plusieurs groupe d'accès aux données.

### Modification & Suppression

L'interface d'administration REGARDS permet de réaliser de multiples actions sur les utilisateurs de votre projet :
 - Modifier les informations personnels d'un utilisateur
 - Modifier le rôle d'un utilisateur
 - Modifier les groupes d'accès associés à l'utilisateur
 - Activer un utilisateur
 - Desactiver un utilisateur
 - Supprimer un utilisateur

<b>NOTE</b> : La suppression de l'utilisateur ne supprime l'utilisateur que pour le projet courant. Le [compte partagé](/user-documentation/admin-instance/user-accounts/) est lui conservé.

<img src="/assets/images/user-documentation/admin/users-list.png" width="750">

### Rôles des utilisateurs

Les rôles utilisateurs permettent de définir quelles fonctionnalités sont accessible pour un utilisateur donné. Par défaut sont proposés 5 rôles :
 - <b>Public</b> : Rôle des utilisateurs non connectés. Les utilisateurs de ce rôle n'ont que des accès en consultation.
 - <b>Registered users</b> : Rôle des utilisateurs enregistrés. Les utilisateurs de ce rôle peuvent consulter, télécharger et commander les données.
 - <b>Operator</b> : Rôle des exploitants. Les utilisateurs de ce rôle se voient autorisé l'accès à un nombre limité de fonction d'administration lié à l'exploitation du projet.
 - <b>Administrator</b> : Rôles des administrateur du projet. Les utilisateurs de ce rôle ont accès à toutes les fonctionnalités d'administration du projet.
 - <b>Super Administrator</b> : Rôle spécial permettant d'outre passé toute considération de droit d'accès aux fonctionnalités et aux données.

### Groupes d'accès aux données

Les groupes d'accès aux données définissent des droits d'accès par [Jeux de données](/user-documentation/admin/datasets/). L'aadministrateur peut créer autant de groupes d'accès qu'il le souhaite en définissant pour chacun d'eux les droits d'accès à l'enssemble des jeux de données du projet.

Pour autorisés l'accès aux données d'un jeu, plusieus options d'accessibilité sont proposées :
 - Accès aux informations du jeu de données uniquement.
 - Accès aux informations du jeu de données et aux données qu'il contient
 - Accès aux fichiers de données associées aux données.

Pour configurer les accès aux divers jeu de données pour un groupe d'accès, cliquer sur le bouton "Access Rights" du groupe souhaité.

<img src="/assets/images/user-documentation/admin/groups-edit.png" width="750">

Lors de l'édition des droits d'accès d'un groupe de données vous devez saisir les informations suivantes :
 
 <b>Access level to dataset meta-data :</b>
 - <b>Dataset and Dataobjects access</b> : Accès au jeu de données et  toutes les données qu'il contient.
 - <b>Dataset access</b> : Accès autorisé aux informations du jeu de données unqiuement. Aucun accès aux informations des données qu'il contient.
 - <b>Full access to dataset & partial access to data objects</b> : Accès au jeu de données et accès conditionné aux données qu'il contient. Cette option permet alors de choisir une méthode de calcul des données accessibles.
 - <b>No access</b> : Aucun accès au jeu de donnés ni aux données qu'il contient.

 <b>Acess level to data :</b>
 - <b>Authorized</b> : Les fichiers de données contenues par les données du jeu sont accessibles.
 - <b>Refused</b> : Les fichiers de données contenues par les données du jeu ne sont pas accessibles.
