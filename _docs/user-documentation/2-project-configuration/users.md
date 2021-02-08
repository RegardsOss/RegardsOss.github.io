---
layout: classic-docs
title: Manage project users
short-title: Users
categories:
  - user-documentation
---

*Gérez les utilisateurs du projet depuis le menu <b>Users</b> de l'administration du projet.*

<div align="center">
  <img src="/assets/images/user-documentation/2-project-configuration/users/users.png" alt="user menu" width="800"> 
</div>


{% include toc.md %}

### <img src="/assets/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"> Configurer la validation des comptes utilisateur 

Si vous êtes administrateur du projet, vous pouvez paramétrer le type de validation utilisé lors de la création de compte par des utilisateurs en cliquant sur le bouton <img src="/assets/images/user-documentation/regards-icons/admin/gear-wheel.png" alt="settings" height="25"> ***Settings*** accessible depuis la carte ***Users*** du menu ***Users***.

<div align="center">
  <img src="/assets/images/user-documentation/2-project-configuration/users/user-settings.png" alt="user settings" width="800">
</div>
Réglez les paramètres suivants :
- ***Validation mode***
  - ***Automatic***, l'approbation de chaque nouvelle demande de compte est automatique et ne nécessite pas votre accord.
  - ***Manuel***, vous déciderez de valider manuellement chaque demande d'inscription
- ***Default max quota***, attribuez par défaut le nombre de téléchargements de données autorisé pour tous les utilisateurs
  - les valeurs possibles sont -1, pour un nombre illimité, 0, pour aucun téléchargement ou n'importe quel nombre entier positif.
- ***Default rate limit*** déterminez par défaut le nombre de téléchargements de données simultanés autorisés
  - les valeurs possibles sont -1, pour un nombre illimité, 0, pour aucun téléchargement simultané ou n'importe quel nombre entier positif.

Appuyez ensuite sur le bouton ***Confirm*** pour valider la configuration.

> Ce système de validation est également mis en place au niveau des [comptes utilisateurs d'instance](/user-documentation/1-global-configuration/user-accounts/). Il peut donc y avoir deux validations nécessaires, une niveau instance et une niveau projet.
{: .tip .info}

### <img src="/assets/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"> Création de comptes

#### Création de compte par un utilisateur 

Si vous êtes un nouvel utilisateur, vous pouvez vous enregistrer sur l'interface utilisateur de votre projet. Accédez à l'url `http://<regards host>/user/<project>` puis cliquez sur ***Login*** puis le bouton ***New user ?***

<div align="center">
  <img src="/assets/images/user-documentation/2-project-configuration/users/new-user.png" alt="new user" width="800"> 
</div>

Suivant la configuration de votre projet, deux actions sont possibles suite à votre demande :
- **votre compte est automatiquement créé**, dans ce cas, activez votre compte avec le mail reçu à l'adresse renseignée, vous pourrez ensuite vous connecter à l'interface. En tant qu'utilisateur enregistré, vous n'aurez accès qu'à un nombre très limité de fonctionnalités. Il vous faut demander à l'administrateur de votre projet de vous fournir un rôle plus élevé si vous en avez le besoin.
- **votre compte n'est pas créé automatiquement** et doit attendre d'être approuvé par un administrateur. [completer]


#### Création de compte par un administrateur 

Si vous êtes un administrateur de projet, vous avez la possibilité de créer directement des comptes utilisateurs.

[completer]

### <img src="/assets/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"> Gestion des utilisateurs

#### Configuration des utilisateurs

Lorsqu'un utilisateur demande l'accès au projet, il est automatiquement associé au rôle ***Registered User*** et n'est associé à aucun groupe d'accès aux données. Il est à la charge de l'administrateur de lui associer si nécessaire un rôle différent et un ou plusieurs groupes d'accès aux données.

#### Modification & Suppression

Dans la liste ***Users*** accessible depuis la carte ***Users***, vous pourrez effectuer de nombreuses actions sur chacun des utilisateurs.

- <img src="/assets/images/user-documentation/regards-icons/admin/quota.png" alt="quota" height="30"> ***Set max quota*** vous permet de définir les quotas de téléchargement associés à l'utilisateur
- <img src="/assets/images/user-documentation/regards-icons/admin/enable-user.png" alt="enable user" height="25"> ***Enable access*** pour autoriser l'utilisateur à accéder au projet
- <img src="/assets/images/user-documentation/regards-icons/admin/disable-user.png" alt="disable user" height="25"> ***Disable access*** pour interdire l'accès au projet à l'utilisateur
- <img src="/assets/images/user-documentation/regards-icons/admin/edit.png" alt="edit" height="25"> ***Edit*** pour :
  - Modifier les informations personnelles d'un utilisateur
  - Modifier le rôle d'un utilisateur
  - Modifier les groupes d'accès associés à l'utilisateur
- <img src="/assets/images/user-documentation/regards-icons/admin/delete.png" alt="delete" height="25"> ***Remove user*** pour supprimer un utilisateur

<div align="center">
  <img src="/assets/images/user-documentation/2-project-configuration/users/user-list.png" alt="user settings" width="800">
</div>

> La suppression d'un utilisateur n'entraîne que son retrait de la liste des utilisateurs du projet courant. Son [compte](/user-documentation/1-global-configuration/user-accounts/) au niveau de l'instance REGARDS est lui conservé.
{: .tip .info}

#### Rôles des utilisateurs

Les rôles utilisateur permettent de définir les fonctionnalités accessibles pour un utilisateur donné.
En cliquant sur le bouton ***List*** de la carte ***Roles*** <img src="/assets/images/user-documentation/regards-icons/admin/list.png" alt="list" height="25">, vous verrez les cinq rôles proposés par défaut :
- ***Public*** : attribué aux utilisateurs non connectés. Les utilisateurs de ce rôle n'ont qu'un accès de consultation.
- ***Registered users*** : attribué aux utilisateurs enregistrés. Les utilisateurs de ce rôle peuvent consulter, télécharger et commander des données.
- ***Operator*** : attribué aux exploitants. Les utilisateurs de ce rôle se voient autorisé l'accès à un nombre limité de fonction d'administration lié à l'exploitation du projet.
- ***Administrator*** : attribué aux administrateurs du projet. Les utilisateurs de ce rôle ont accès à toutes les fonctionnalités d'administration du projet.
- ***Super Administrator*** : rôle spécial permettant d'outrepasser n'importe quelle interdiction d'accès aux fonctionnalités et aux données.

Vous pouvez décider d'ajouter des rôles supplémentaires, en reprenant les concepts de ces cinq rôles, afin de les personnaliser. Appuyez sur le bouton ***Add*** de la carte ***Roles***. Donnez un nom au nouveau rôle et choisissez le niveau d'accès, puis appuyez sur le bouton ***Save***.

<div align="center">
  <img src="/assets/images/user-documentation/2-project-configuration/users/add-role.png" alt="add role" width="800">
</div>

 Retournez ensuite dans la page listant les rôles et appuyez sur le bouton <img src="/assets/images/user-documentation/regards-icons/admin/link.png" alt="link" height="25"> ***Configure resources access*** du rôle en question.

<div align="center">
  <img src="/assets/images/user-documentation/2-project-configuration/users/role-list.png" alt="role list" width="800">
</div>

Pour chaque microservice, vous pourrez gérer individuellement l'accès à chaque endpoint REST. Notez que vous pouvez seulement activer ou désactiver l'accès aux endpoints nécessitant un role supérieur à celui configuré dans le modèle de base.

<div align="center">
  <img src="/assets/images/user-documentation/2-project-configuration/users/authorize-role-actions.png" alt="add role" width="800">
</div>


#### Groupes d'accès aux données

Chaque utilisateur peut faire partie d'un groupe lui permettant d'accéder à une partie des données contenues dans votre projet REGARDS.
Pour savoir comment gérer les accès aux jeux de données, référez-vous à la page [Configure data access rights](/user-documentation/3-data-organization/data-access-rights/).
