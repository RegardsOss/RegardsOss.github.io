---
id: project-configuration-users-authentication-openid
title: SSO Authentication - OpenID Connect
slug: /user-guide/project-configuration/users/openid/
---

### Configuration

<div align="center">
  <img src="/images/user-documentation/v1.6/2-project-configuration/users/service-provider-openid-connect.png" alt="OpenID Connect" width="800"/> 
</div>

L'écran **_Ajouter un nouveau fournisseur de service_** est découpé en deux parties :

- **_Paramètres généraux_**
  - **_Nom_** est le nom choisi pour ce Service provider. Ce nom devra être répercuté dans le champs "Oauth2 redirect URI".
  - **_Authentication URL_** est l'URL du formulaire de login du service d'authentification externe. L'URL doit être complète, c'est à dire qu'elle doit inclure l'ID client, l'URL de redirection vers Regards ou autres paramètres requis pas le fournisseur de service d'authentification externe.
  - **_Logout URL_** est l'URL du formulaire de logout du service d'authentification externe. 
- **_Paramètres spécifiques au plugin OpenID Connect_**
  - **_Libillé_** est un alias donné à la configuration du plugin OpenID Connect créée pour ce Service provider.
  - **_Client Id_** est l'identifiant client répertoriant Regards en tant qu'utilisateur du Service provider auprès sur fournisseur de service d'authentification externe.
  - **_Client Secret_** est le code secret associé à l'identifiant client ci-dessus, délivré par le fournisseur de service d'authentification externe.
  - **_token endpoint URL_** est l'URL du endpoint HTTP du service d'authentification externe permettant de récupérer un token Oauth2.
  - **_Oauth2 redirect URI_** est l'URL vers la page de redirection utilisée par le fournisseur de service externe pour renvoyer le navigateur de l'utilisateur sur Regards après une authentification réussie.
  - **_user info endpoint URL_** est l'URL du endpoint HTTP du service d'authentification externe permettant de récupérer les informations de l'utilisateur connecté.
  - **_Email mapping field_** est le nom du champs JSON présent dans la réponse à un appel au endpoint "user info" permettant à Regards de récupérer l'adresse email de l'utilisateur.
  - **_Firstname mapping field_** est le nom du champs JSON présent dans la réponse à un appel au endpoint "user info" permettant à Regards de récupérer le prénom de l'utilisateur.
  - **_Lastname mapping field_** est le nom du champs JSON présent dans la réponse à un appel au endpoint "user info" permettant à Regards de récupérer le nom de l'utilisateur.
  - **_revoke endpoint URL_** est l'URL du endpoint HTTP du service d'authentification externe permettant d'invalider le token Oauth2 en fin de sessions, lors d'une déconnexion de l'utilisateur.
  - **_Allow insecure SSL connection_** permet d'autoriser l'utilisation de serveur SSO non sécurisé via HTTPS. **Attention, l'utilisation de cette propriété n'est pas conseillé pour un environement de production**

### Exemple de configuration avec un serveur keycloak

 - **_Nom_** : Keycloak
 - **_Authentication URL_** : `https://keycloak.cloud-espace.si.c-s.fr/auth/realms/main/protocol/openid-connect/auth?client_id=regards&redirect_uri=https://regards.csgroup.eu/authenticate/project/Keycloak&response_mode=fragment&response_type=code&scope=openid`. L'URL d'authentification contient :
    - Le endpoint keycloak : `https://keycloak.cloud-espace.si.c-s.fr/auth/realms/main/protocol/openid-connect/auth`
    - client_id=regards : L'identifiant du client configuré sur keycloak pour permettre a REGARDS de s'authentifier sur keycloak
    - redirect_uri : `http://regards.csgroup.eu/authenticate/{regards project name}/{openId conf name}`. L'adresse de redirection après l'authentification. Cette adresse de rediction contient le nom du projet regards courant et le nom de la configuration openId courante
    - response_mode=fragment
    - response_type=code
    - scope=openid
 - **_Logout URL_** : `https://keycloak.cloud-espace.si.c-s.fr/auth/realms/chronos/protocol/openid-connect/logout?post_logout_redirect_uri=https://regards.csgroup.eu/user/{regards project name}`
 - **_Libellé_** : Keycloak
 - **_Client id_**: regards
 - **_Client secret_**: \*\*\*\*
 - **_Token endpoint_** : `https://keycloak.cloud-espace.si.c-s.fr/auth/realms/main/protocol/openid-connect/token`
 - **_Oauth2 redirect uri_** : `https://regards.csgroup.eu/authenticate/{regards project name}/{openId conf name}>`
 - **_User info endpoint_** : `https://keycloak.cloud-espace.si.c-s.fr/auth/realms/chronos/protocol/openid-connect/userinfo`
 - **_email mapping field_** : email
 - **_revoke endpoint_** : `https://keycloak.cloud-espace.si.c-s.fr/auth/realms/chronos/protocol/openid-connect/revoke`
 - **_Allow insecure_** : false

