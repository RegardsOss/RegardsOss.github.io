---
id: project-configuration-users-authentication-openid
title: Configure OpenID Connect
slug: /user-guide/project-configuration/users/openid
---

_Configurez les paramètres de connexion à un Service provider pour authentification via OpenID Connect_.

<div align="center">
  <img src="/images/user-documentation/2-project-configuration/users/service-provider-openid-connect.png" alt="OpenID Connect" width="800"/> 
</div>

L'écran **_Ajouter un nouveau fournisseur de service_** est découpé en deux parties :

- **_Paramètres généraux_**
  - **_Nom_** est le nom choisi pour ce Service provider. Ce nom devra être répercuté dans le champs "Oauth2 redirect URI".
  - **_URL_** est l'URL du formulaire de login du service d'authentification externe. L'URL doit être complète, c'est à dire qu'elle doit inclure l'ID client, l'URL de redirection vers Regards ou autres paramètres requis pas le fournisseur de service d'authentification externe.
- **_Paramètres spécifiques au plugin OpenID Connect_**
  - **_Libillé_** est un alias donné à la configuration du plugin OpenID Connect créée pour ce Service provider.
  - **_Client Id_** est l'identifiant client répertoriant Regards en tant qu'utilisateur du Service provider auprès sur fournisseur de service d'authentification externe.
  - **_Client Secret_** est le code secret associé à l'identifiant client ci-dessus, délivré par le fournisseur de service d'authentification externe.
  - **_"token" endpoint URL_** est l'URL du endpoint HTTP du service d'authentification externe permettant de récupérer un token Oauth2.
  - **_Oauth2 redirect URI_** est l'URL vers la page de redirection utilisée par le fournisseur de service externe pour renvoyer le navigateur de l'utilisateur sur Regards après une authentification réussie.
  - **_"user info" endpoint URL_** est l'URL du endpoint HTTP du service d'authentification externe permettant de récupérer les informations de l'utilisateur connecté.
  - **_Email mapping field_** est le nom du champs JSON présent dans la réponse à un appel au endpoint "user info" permettant à Regards de récupérer l'adresse email de l'utilisateur.
  - **_Firstname mapping field_** est le nom du champs JSON présent dans la réponse à un appel au endpoint "user info" permettant à Regards de récupérer le prénom de l'utilisateur.
  - **_Lastname mapping field_** est le nom du champs JSON présent dans la réponse à un appel au endpoint "user info" permettant à Regards de récupérer le nom de l'utilisateur.
  - **_"revoke" endpoint URL_** est l'URL du endpoint HTTP du service d'authentification externe permettant d'invalider le token Oauth2 en fin de sessions, lors d'une déconnexion de l'utilisateur.
