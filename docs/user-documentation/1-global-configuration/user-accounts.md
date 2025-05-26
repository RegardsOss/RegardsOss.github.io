---
id: global-configuration-users
title: Manage user accounts
slug: /user-guide/global-configuration/users/
---

Tout utilisateur d'un projet est associé à une instance de REGARDS, ainsi, un même utilisateur peut avoir accès à plusieurs projets.
Depuis le menu ***Account*** de l'interface d'administration, vous pourrez :


- ***<img src="/images/user-documentation/regards-icons/admin/list.png" alt="link" height="25" width="25"/> [Voir la 
  liste des utilisateurs](#lister-les-comptes-utilisateurs), [valider](#valider-un-compte-utilisateur), [éditer](#editer-un-compte-utilisateur), [réactiver](#réactiver-un-compte-utilisateur) et [supprimer](#supprimer-un-compte-utilisateur) un compte.***
- ***<img src="/images/user-documentation/regards-icons/admin/gear-wheel.png" alt="link" height="25" width="25"/>  [Paramétrer les demandes de création de compte](#paramétrer-les-demandes-de-création-de-compte).***

<div align="center">
  <img src="/images/user-documentation/v1.7/1-global-configuration/accounts-menu.png" alt="interface admin" width="300"/> 
</div>


---

### Lister les comptes utilisateurs

Cet écran présente la liste des comptes utilisateurs. Il est possible de voir le nombre de compte en attente d'acceptation au dessus du tableau. L'icone sert à filtrer le tableau pour ne voir que ces comptes.

<div align="center">
  <img src="/images/user-documentation/v2.2/1-global-configuration/account-waiting.png" alt="account validation" 
width="800"/> 
</div>

Il est également possible de gérer l'affichage des éléments présents dans le tableau en utilisant les divers filtres proposés.

<div align="center">
  <img src="/images/user-documentation/v2.2/1-global-configuration/account-filters.png" alt="account validation" 
width="400"/> 
</div>

#### Valider un compte utilisateur

La validation du compte au niveau instance est configurable depuis la section [Paramétrer les demandes de création de compte](#-paramétrer-les-demandes-de-création-de-compte) de l'interface administration.
Dans le cas d'une validation manuelle, l'administrateur d'instance doit valider la demande comme présenté dans l'écran ci-dessous.

<div align="center">
  <img src="/images/user-documentation/v2.2/1-global-configuration/account-validation.png" alt="account validation" 
width="800"/> 
</div>






#### Editer un compte utilisateur

Il est possible d'éditer un compte, pour cela, utiliser l'icone présentée dans l'écran ci-dessous

<div align="center">
  <img src="/images/user-documentation/v2.2/1-global-configuration/account-edition.png" alt="account validation" 
width="800"/> 
</div>

#### Réactiver un compte utilisateur

Si la configuration du serveur spécifie une [durée de vie des comptes](../../..
/development/services/admin-instance/configuration/static_configuration.md), les comptes ayant dépassé cette durée
de validité sont automatiquement passés en état "Inactif".

Il est possible de réactiver un compte à l'aide de l'icone ci-dessous. Un compte réactivé a la même durée de vie
que s'il venait d'être créé.

<div align="center">
  <img src="/images/user-documentation/v2.1/1-global-configuration/account-reactivation.png" alt="account validation" 
width="800"/> 
</div>

#### Supprimer un compte utilisateur

Vous pouvez supprimer un compte que si celui-ci n'est associé à aucun utilisateur projet. Dans ce cas, l'icône de suppression est accessible apparaît sur pour le compte concerné.

<div align="center">
  <img src="/images/user-documentation/v2.2/1-global-configuration/account-suppression.png" alt="account validation" 
width="800"/> 
</div>

#### Renvoyer l'email de confirmation à un utilisateur

Un utilisateur ayant lui-même créé son compte reçoit automatiquement un email de validation. Cependant, il est possible
pour un administrateur de renvoyer cet email de confirmation dans le cas où l'utilisateur n'aurait pas reçu l'email 
ou aurait mis trop de temps à confirmer sa demande (par défaut 3 jours).

<div align="center">
  <img src="/images/user-documentation/v2.2/1-global-configuration/account-resend-email.png" alt="account validation" 
width="800"/> 
</div>

---

### Paramétrer les demandes de création de compte

Lorsqu'un utilisateur demande la création d'un nouveau compte, il est possible de configurer le système pour demander deux niveaux d'acceptation de la demande :

1.  Validation du compte au niveau du projet. Pour plus d'information, reportez-vous à la page [Manage project users](../2-project-configuration/users.md)
2.  Validation du compte au niveau de l'instance.

Pour la validation du compte au niveau de l'instance, deux configurations sont possibles :

- ***Automatic*** : Aucune validation manuelle de niveau instance ne sera demandée et le compte sera automatiquement créé et activé.
- ***Manual*** : Toute demande de compte devra être validée par un administrateur de l'instance REGARDS.
