---
id: project-configuration-users-authentication
title: Manage authentications
slug: /user-guide/project-configuration/users/authentication/
---

_Gérez les différentes authentications permises depuis le menu ***Users*** de l'administration du projet et la carte ***Authentification systems***._

<div align="center">
  <img src="/images/user-documentation/2-project-configuration/users/users.png" alt="user menu" width="800"/> 
</div>

---

## <img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"/> Utilisation de comptes utilisateur externes

REGARDS permet la connexion d'utilisateurs depuis un système extérieur. Il ne gérera ainsi pas les comptes en interne.

<div align="center">
  <img src="/images/user-documentation/2-project-configuration/users/authentication-list.png" alt="authentication systems" width="800"/>
</div>

La connexion peut se faire par le biais d'un système d'authentification déporté (Identity provider) ou externalisé (Service provider).

  - L'unique plugin d'authentification déporté fourni par défaut permet la connexion à un annuaire LDAP.
  - L'unique plugin d'authentification externe fourni par défaut permet la connexion par [OpenID Connect](../openid/).

Pour ajouter un système d'authentification, cliquez sur le bouton **_Liste_** de la carte **_Authentication system_**, choisissez **_Ajouter un identity provider_** ou **_Ajouter un service provider_** et configurez-le. Vous pourrez ensuite le retrouver dans la liste des systèmes d'authentification.
