---
id: global-configuration-users
title: Manage user accounts
slug: /user-guide/global-configuration/users/
---

_Tout utilisateur d'un projet est associé à une instance de REGARDS, ainsi, un même utilisateur peut avoir accès à plusieurs projets.
Depuis le menu ***Account*** de l'interface d'administration, vous pourrez voir et gérer la liste des utilisateurs de l'instance, paramétrer et valider les demandes de création de compte._

<div align="center">
  <img src="/images/user-documentation/1-global-configuration/accounts-menu.png" alt="interface admin" width="800"/> 
</div>

---

### <img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"/> Valider des comptes utilisateurs

Lorsqu'un utilisateur demande la création d'un nouveau compte, il est possible de configurer le système pour demander deux niveaux d'acceptation de la demande :

1.  Validation du compte au niveau du projet. Pour plus d'information, reportez-vous à la page [Manage project users](../../project-configuration/users/)
2.  Validation du compte au niveau de l'instance

La validation du compte au niveau instance est configurable depuis la section ***Accounts*** de l'interface administration.

<div align="center">
  <img src="/images/user-documentation/1-global-configuration/accounts-settings.png" alt="account settings" width="800"/> 
</div>

Deux configurations sont alors possibles :

- ***Automatic*** : Aucune validation manuelle de niveau instance ne sera demandée et le compte sera automatiquement créé et activé.
- ***Manual*** : Toute demande de compte devra être validée par un administrateur de l'instance REGARDS.

Dans le cas d'une validation manuelle, l'administrateur d'instance doit valider la demande comme présenté dans l'écran ci-dessous.

<div align="center">
  <img src="/images/user-documentation/1-global-configuration/account-validation.png" alt="account validation" width="800"/> 
</div>

- Dans le menu ***Accounts***, un compteur indique le nombre d'utilisateurs en attente de validation.
- Dans l'onglet ***New accounts*** les utilisateurs en attente de validation sont listés.
- Deux actions sont alors possibles, accepter (cadre vert) ou refuser le compte (cadre rouge).

Une fois les comptes acceptés, ils sont présents dans l'onglet ***All Users***.

<div align="center">
  <img src="/images/user-documentation/1-global-configuration/accounts.png" alt="accounts" width="800"/> 
</div>

La validation des comptes au niveau de l'instance est terminée, mais leur validation au niveau projet peut être encore nécessaire.

### <img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"/> Supprimer un compte utilisateur

Vous pouvez supprimer un compte que si celui-ci n'est associé à aucun utilisateur projet. Dans ce cas, l'icône de suppression est accessible apparaît sur pour le compte concerné.

<div align="center">
  <img src="/images/user-documentation/1-global-configuration/account-deletion.png" alt="account deletion" width="800"/> 
</div>
