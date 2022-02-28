---
id: project-configuration-users
title: Manage project users
slug: /user-guide/project-configuration/users/
---

_Gérez les utilisateurs du projet depuis le menu ***Users*** de l'administration du projet._

<div align="center">
  <img src="/images/user-documentation/v1.4/2-project-configuration/users/users.png" alt="user menu" width="800"/> 
</div>

---

### <img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12" width="12"/> Configurer la validation des comptes utilisateur

Si vous êtes administrateur du projet, vous pouvez paramétrer le type de validation utilisé lors de la création de compte par des utilisateurs en cliquant sur le bouton <img src="/images/user-documentation/regards-icons/admin/gear-wheel.png" alt="settings" height="25" width="25"/> **_Settings_** accessible depuis la carte **_Users_** du menu **_Users_**.

<div align="center">
  <img src="/images/user-documentation/v1.4/2-project-configuration/users/user-settings.png" alt="user settings" width="800"/>
</div>
Réglez les paramètres suivants :

- **_Mode de validation_**
  - **_Automatique_**, l'approbation de chaque nouvelle demande de compte est automatique et ne nécessite pas votre accord.
  - **_Manuel_**, vous déciderez de valider manuellement chaque demande d'inscription
- **_Quota maximal par défaut_**, attribuez par défaut le nombre de téléchargements de données autorisé pour tous les utilisateurs
  - les valeurs possibles sont -1, pour un nombre illimité, 0, pour aucun téléchargement ou n'importe quel nombre entier positif.
- **_Vitesse maximale de téléchargement par défaut_** déterminez par défaut le nombre de téléchargements de données simultanés autorisés
  - les valeurs possibles sont -1, pour un nombre illimité, 0, pour aucun téléchargement simultané ou n'importe quel nombre entier positif.
- **_Rôle par défaut_** déterminez par défaut le rôle appliqué à un nouveau compte utilisateur.
- **_Groupes_** déterminez par défaut les groupes d'accès appliqués à un nouveau compte utilisateur.

Appuyez ensuite sur le bouton **_Confirm_** pour valider la configuration.

:::info
Ce système de validation est également mis en place au niveau des [comptes utilisateurs d'instance](../../global-configuration/users/). Il peut donc y avoir deux validations nécessaires, une niveau instance et une niveau projet.
:::

### <img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12" width="12"/> Création de comptes

#### Création de compte par un utilisateur

Si vous êtes un nouvel utilisateur, vous pouvez vous enregistrer sur l'interface utilisateur de votre projet. Accédez à l'url `http://<regards host>/user/<project>` puis cliquez sur **_Login_** puis le bouton **_New user ?_**.

<div align="center">
  <img src="/images/user-documentation/v1.4/2-project-configuration/users/new-user.png" alt="new user" width="800"/> 
</div>

Suivant la configuration de votre projet, deux actions sont possibles suite à votre demande :

- **votre compte est automatiquement créé**, dans ce cas, activez votre compte avec le mail reçu à l'adresse renseignée, vous pourrez ensuite vous connecter à l'interface. En tant qu'utilisateur enregistré, vous n'aurez accès qu'à un nombre très limité de fonctionnalités. Il vous faut demander à l'administrateur de votre projet de vous fournir un rôle plus élevé si vous en avez le besoin.
- **votre compte n'est pas créé automatiquement** et doit attendre d'être approuvé par un administrateur. Vous recevrez un mail une fois que l'administrateur aura approuvé votre compte.

#### Création de compte par un administrateur

Si vous êtes un administrateur de projet, vous avez la possibilité de créer directement des comptes utilisateurs. Cliquez sur le bouton <img src="/images/user-documentation/regards-icons/admin/add.png" alt="add" height="30"/> **_Add_**, vous serez redirigé vers l'écran de création d'un utilisateur.

:::info
Si l'utilisateur possède déjà un compte au niveau instance, cochez la case **_The user already has a REGARDS user account_**, vous n'aurez pas à compléter tous les champs.
:::

Remplissez les champs suivants :

- **_Email_** _[Obligatoire]_ l'adresse mail de l'utilisateur
- **_Role_** _[Obligatoire]_ le rôle de l'utilisateur dans REGARDS. Référez-vous à la section **_Rôles des utilisateurs_** plus bas dans la page pour en savoir plus.
- **_Max quota_** _[Obligatoire]_ le nombre de téléchargements de données autorisé
- **_Rate limit_** _[Obligatoire]_ le nombre de téléchargements de données simultanés autorisé
- **_Address_** _[Optionnel]_ l'adresse postale
- **_Address_** _[Obligatoire]_ le pays d'origine
- **_Organization_** _[Obligatoire]_ la structure de rattachement
- **_Registration reason_** _[Obligatoire]_ la raison d'inscription

Dans la partie Groups, associez l'utilisateur à des groupes d'accès aux données en appuyant sur le bouton **_Add_**. Pour en savoir plus, reportez-vous à la page [Configure data access rights](../../data-organization/data-access-rights/)

### <img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12" width="12"/> Gestion des utilisateurs

#### Configuration des utilisateurs

Lorsqu'un utilisateur demande l'accès au projet, il est automatiquement associé au rôle et aux groupes d'accès aux données configurés dans la **_Configuration de la validation des comptes utilisateur_**. Il est à la charge de l'administrateur de lui associer si nécessaire un rôle différent ou des groupes d'accès aux données différents.

#### Rôles des utilisateurs

Les rôles utilisateur permettent de définir les fonctionnalités accessibles pour un utilisateur donné.
En cliquant sur le bouton <img src="/images/user-documentation/regards-icons/admin/list.png" alt="list" height="25" width="25"/> **_List_** de la carte **_Roles_**, vous verrez les cinq rôles proposés par défaut :

- **_Public_** : attribué aux utilisateurs non connectés. Les utilisateurs de ce rôle n'ont qu'un accès de consultation.
- **_Registered users_** : attribué aux utilisateurs enregistrés. Les utilisateurs de ce rôle peuvent consulter, télécharger et commander des données.
- **_Operator_** : attribué aux exploitants. Les utilisateurs de ce rôle se voient autorisé l'accès à un nombre limité de fonction d'administration lié à l'exploitation du projet.
- **_Administrator_** : attribué aux administrateurs du projet. Les utilisateurs de ce rôle ont accès à toutes les fonctionnalités d'administration du projet.
- **_Super Administrator_** : rôle spécial permettant d'outrepasser n'importe quelle interdiction d'accès aux fonctionnalités et aux données.

Vous pouvez décider d'ajouter des rôles supplémentaires, en reprenant les concepts de ces cinq rôles, afin de les personnaliser. Appuyez sur le bouton **_Add_** de la carte **_Roles_**. Donnez un nom au nouveau rôle et choisissez le niveau d'accès, puis appuyez sur le bouton **_Save_**.

<div align="center">
  <img src="/images/user-documentation/v1.4/2-project-configuration/users/add-role.png" alt="add role" width="800"/>
</div>

Retournez ensuite dans la page listant les rôles et appuyez sur le bouton <img src="/images/user-documentation/regards-icons/admin/link.png" alt="link" height="25" width="25"/> **_Configure resources access_** du rôle en question.

<div align="center">
  <img src="/images/user-documentation/v1.4/2-project-configuration/users/role-list.png" alt="role list" width="800"/>
</div>

Pour chaque microservice, vous pourrez gérer individuellement l'accès à chaque endpoint REST. Notez que vous pouvez seulement activer ou désactiver l'accès aux endpoints nécessitant un role supérieur à celui configuré dans le modèle de base.

<div align="center">
  <img src="/images/user-documentation/v1.4/2-project-configuration/users/authorize-role-actions.png" alt="add role" width="800"/>
</div>

#### Groupes d'accès aux données

Chaque utilisateur peut faire partie d'un groupe lui permettant d'accéder à une partie des données contenues dans votre projet REGARDS.
Pour savoir comment gérer les accès aux jeux de données, référez-vous à la page [Configure data access rights](../../data-organization/data-access-rights/).

#### Modification & Suppression

Dans la liste **_Users_** accessible depuis la carte **_Users_**, vous pourrez effectuer de nombreuses actions sur chacun des utilisateurs.

- <img src="/images/user-documentation/regards-icons/admin/quota.png" alt="quota" height="30"/> <b><i>Set max quota</i></b> vous permet de définir les quotas de téléchargement associés à l'utilisateur
- <img src="/images/user-documentation/regards-icons/admin/enable-user.png" alt="enable user" height="25" width="25"/> <b><i>Enable access</i></b> pour autoriser l'utilisateur à accéder au projet
- <img src="/images/user-documentation/regards-icons/admin/disable-user.png" alt="disable user" height="25" width="25"/> <b><i>Disable access</i></b> pour interdire l'accès au projet à l'utilisateur
- <img src="/images/user-documentation/regards-icons/admin/edit.png" alt="edit" height="25" width="25"/> <b><i>Edit</i></b> pour :

  - Modifier les informations personnelles d'un utilisateur
  - Modifier le rôle d'un utilisateur
  - Modifier les groupes d'accès associés à l'utilisateur

- <img src="/images/user-documentation/regards-icons/admin/delete.png" alt="delete" height="25" width="25"/> <b><i>Remove</i></b> pour supprimer un utilisateur

<div align="center">
  <img src="/images/user-documentation/v1.4/2-project-configuration/users/user-list.png" alt="user settings" width="800"/>
</div>

:::info
La suppression d'un utilisateur n'entraîne que son retrait de la liste des utilisateurs du projet courant. Son [compte](../../global-configuration/users/) au niveau de l'instance REGARDS est lui conservé.
:::
