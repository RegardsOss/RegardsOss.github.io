---
layout: classic-docs
title: Configure data access rights
short-title: access rights
categories:
  - user-documentation
---

<i>Contrôlez l'accès aux [Jeux de données](/user-documentation/3-data-organization/dataset-collection/) REGARDS au travers de groupes d'utilisateurs. Les groupes utilisateur se gèrent depuis la carte ***Access group*** du menu ***Users***.</i>

<div align="center">
  <img src="/assets/images/user-documentation/2-project-configuration/users/users.png" alt="user menu" width="800"> 
</div>

{% include toc.md %}


### <img src="/assets/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"> Ajouter un groupe de données

Pour ajouter un groupe, cliquez sur le bouton ***Add*** de la carte ***Access group***. Nommez le groupe utilisateur et cochez la case ***Automatically link this group to all users and visitors*** si vous souhaitez que tous les utilisateurs, quelque soit leur rôle, appartiennent à ce groupe.

### <img src="/assets/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"> Configurer les groupes de données

Pour voir l'ensemble des groupes utilisateur du projet, cliquez sur le bouton ***List*** de la carte ***Access group***. Pour chacun d'eux, vous pouvez éditer les droits d'accès à l'ensemble des jeux de données du projet en appuyant sur le bouton <img src="/assets/images/user-documentation/regards-icons/admin/link.png" alt="link" height="25"> ***Edit access rights***.

<div align="center">
  <img src="/assets/images/user-documentation/3-data-organization/data-access-rights/groups-edit.png" alt="group list" width="800">
</div>

> Le groupe ***Public*** est créé par défaut dans REGARDS. Tous les utilisateurs sont au moins liés à ce groupe d'accès.
{: .tip .info} 

Lors de l'édition des droits d'accès d'un groupe de données vous devez saisir les informations suivantes :
 
- ***Access level to dataset meta-data :***
  - ***Dataset and Dataobjects access*** : Accès au jeu de données et toutes les données qu'il contient.
  - ***Dataset access*** : Accès autorisé aux informations du jeu de données uniquement. Aucun accès aux informations des données qu'il contient.
  - ***Full access to dataset & partial access to data objects*** : Accès au jeu de données et accès conditionné aux données qu'il contient. Cette option permet alors de choisir une méthode de calcul des données accessibles.
  - ***No access*** : Aucun accès au jeu de donnés ni aux données qu'il contient.
- ***Access level to data :***
  - ***Authorized*** : Les fichiers de données contenues par les données du jeu sont accessibles.
  - ***Refused*** : Les fichiers de données contenues par les données du jeu ne sont pas accessibles.
  
Cliquez ensuite sur le bouton ***Save*** et répétez cette opération autant de fois que nécessaire pour autoriser l'accès à un jeu de donnée. Une fois votre groupe configuré, et dans le cas où les utilisateurs ne sont pas automatiquement liés à ce groupe, vous devrez les associer manuellement.

### <img src="/assets/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"> Associer un utilisateur à un groupe de données

Dans la liste ***Users*** accessible depuis la carte ***Users***, cliquez sur le bouton <img src="/assets/images/user-documentation/regards-icons/admin/list.png" alt="list" height="25"> ***List***. Editez un utilisateur en appuyant sur le bouton <img src="/assets/images/user-documentation/regards-icons/admin/edit.png" alt="edit" height="25"> ***Edit*** et associez-le à un groupe de données dans la partie ***Groups***.