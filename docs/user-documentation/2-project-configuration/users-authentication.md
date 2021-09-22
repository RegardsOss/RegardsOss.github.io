---
id: project-configuration-users-authentication
title: Introduction
slug: /user-guide/project-configuration/users/authentication/
---


Le système REGARDS vous permet de gérer de multiples méthodes d'authentification pour vos utilisateurs.
 - Un système de compte interne à REGARDS
 - Un système de délégation des comptes
 - Un système de délégation complète de l'authentification

Vous pouvez accéder à la configuration de ces systèmes d'authentication depuis le menu ***Users*** de l'administration du projet et la carte ***Authentification systems***.

<div align="center">
  <img src="/images/user-documentation/v1.4/2-project-configuration/users/users.png" alt="user menu" width="800"/> 
</div>

---

## <img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"/> Utilisation de comptes utilisateur internes 

Pour ce système d'authentification, vous n'avez aucune configuration spécifique à réaliser. Dans ce cas les utilisateurs seront créés dans la base de données interne à REGARDS et leurs informations d'authentification seront conservées criptées en base de données.

## <img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"/> Utilisation de comptes utilisateur externes

REGARDS permet la connexion d'utilisateurs depuis un système extérieur. Il ne gérera ainsi pas les comptes en interne.

<div align="center">
  <img src="/images/user-documentation/v1.4/2-project-configuration/users/authentication-list.png" alt="authentication systems" width="800"/>
</div>

La connexion peut se faire par le biais d'un système d'authentification déporté (Identity provider) ou externalisé (Service provider).

  - L'unique plugin d'authentification déporté fourni par défaut permet la connexion à un [annuaire LDAP](../ldap/).
  - L'unique plugin d'authentification externe fourni par défaut permet la connexion par [OpenID Connect](../openid/).

Pour ajouter un système d'authentification, cliquez sur le bouton **_Liste_** de la carte **_Authentication system_**, choisissez **_Ajouter un identity provider_** ou **_Ajouter un service provider_** et configurez-le. Vous pourrez ensuite le retrouver dans la liste des systèmes d'authentification.
