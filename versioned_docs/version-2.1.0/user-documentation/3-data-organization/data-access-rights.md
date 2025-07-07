---
id: data-organization-data-access-rights
title: Data access rights
slug: /user-guide/data-organization/data-access-rights/
---

_Contrôlez l'accès aux [Jeux de données](dataset-collection.md) REGARDS au travers de groupes d'utilisateurs. Les groupes utilisateur se gèrent depuis la carte ***Access group*** du menu ***Users***._

<div align="center">
  <img src="/images/user-documentation/v1.4/2-project-configuration/users/users.png" alt="user menu" width="800"/> 
</div>

---

## Ajouter un groupe de données

Pour ajouter un groupe, cliquez sur le bouton **_Add_** de la carte **_Access group_**. Nommez le groupe utilisateur et cochez la case **_Automatically link this group to all users and visitors_** si vous souhaitez que tous les utilisateurs, quelque soit leur rôle, appartiennent à ce groupe.

## Configurer les groupes de données

Pour voir l'ensemble des groupes utilisateur du projet, cliquez sur le bouton **_List_** de la carte **_Access group_**. Pour chacun d'eux, vous pouvez éditer les droits d'accès à l'ensemble des jeux de données du projet en appuyant sur le bouton <img src="/images/user-documentation/regards-icons/admin/link.png" alt="link" height="25" width="25"/> **_Edit access rights_**.

<div align="center">
  <img src="/images/user-documentation/v1.4/3-data-organization/data-access-rights/groups-edit.png" alt="group list" width="800"/>
</div>

:::info
Le groupe **_Public_** est créé par défaut dans REGARDS. Tous les utilisateurs sont au moins liés à ce groupe d'accès.
:::

Lors de l'édition des droits d'accès d'un groupe de données vous devez saisir les informations suivantes :

- **_Access level to dataset meta-data :_**
  - **_Dataset and Dataobjects access_** : Accès au jeu de données et toutes les données qu'il contient.
  - **_Dataset access_** : Accès autorisé aux informations du jeu de données uniquement. Aucun accès aux informations des données qu'il contient.
  - **_Full access to dataset & partial access to data objects_** : Accès au jeu de données et accès conditionné aux données qu'il contient. Cette option permet alors de choisir une méthode de calcul des données accessibles.
  - **_No access_** : Aucun accès au jeu de donnés ni aux données qu'il contient.
- **_Access level to data :_**
  - **_Authorized_** : Les fichiers de données contenues par les données du jeu sont accessibles.
  - **_Refused_** : Les fichiers de données contenues par les données du jeu ne sont pas accessibles.

Cliquez ensuite sur le bouton **_Save_** et répétez cette opération autant de fois que nécessaire pour autoriser l'accès à un jeu de donnée. Une fois votre groupe configuré, et dans le cas où les utilisateurs ne sont pas automatiquement liés à ce groupe, vous devrez les associer manuellement.

## Associer un utilisateur à un groupe de données

Dans la liste **_Users_** accessible depuis la carte **_Users_**, cliquez sur le bouton <img src="/images/user-documentation/regards-icons/admin/list.png" alt="list" height="25" width="25"/> **_List_**. Editez un utilisateur en appuyant sur le bouton <img src="/images/user-documentation/regards-icons/admin/edit.png" alt="edit" height="25" width="25"/> **_Edit_** et associez-le à un groupe de données dans la partie **_Groups_**.
