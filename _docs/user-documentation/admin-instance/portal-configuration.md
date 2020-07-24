---
layout: classic-docs
title: Portal configuration
short-title: Portal
categories:
  - user-documentation
---

{% include toc.md %}


## Portail d'accès au projets de l'instance

Le portail d'accès est une interface web permettant de lister les projets de l'instance REGARDS et de permettre l'accès aux interfaces web utilisateur de chacun d'eux. Cette interface est accessible directement à la racine du site web REGARDS `http://<regards host>`

Le portail présente tous les projets publiques et visibles (se référer à la [configuration des projets](user-documentation/admin-instance/project-configuration/))

## Configuration

La configuration de l'interface web du portail est similaire à la configuration de l'interface utilisateur d'un projet. De ce fait, les sections suivantes feront référence à la documentation associée.

<img src="/assets/images/user-documentation/admin-instance/portal.png" width="750">

### Agencement

L'agencement de l'interface web du portail permet de définir un <b>Layout</b> de positionnement des modules de l'interface. Il est possible grâce à cet agencement de définir des zones dans l'interface. La configuration de cet agencement est détaillée dans la [Configuration de l'interface utilisateur projet](/user-documentation/admin/hmi-configuration/)

### Modules

Cette section permet de définir les modules à afficher dans l'interface web du portail. Par défaut deux modules sont préconfigurés :
 - <b>Portal menu</b> : Le menu de l'interface permettant de selectionner le theme et la langue.
 - <b>List of projects</b> : Le module permettant d'afficher la liste des projets de l'instance REGARDS.

Pour ajouter un module supplémentaire vous pouvez vous référer à la documentation détaillée dans la [Configuration de l'interface utilisateur projet](/user-documentation/admin/hmi-configuration/)

<img src="/assets/images/user-documentation/admin-instance/portal-modules.png" width="750">

### Themes

Cette section permet de configurer les themes proposés aux utilisateurs dans l'interface web du portail. Pour ajouter un nouveau thème vous pouvez vous référer à la documentation détaillée dans la [Configuration de l'interface utilisateur projet](/user-documentation/admin/hmi-configuration/)
