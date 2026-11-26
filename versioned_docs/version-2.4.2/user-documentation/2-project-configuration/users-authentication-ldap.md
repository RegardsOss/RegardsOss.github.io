---
id: project-configuration-users-authentication-ldap
title: LDAP Authentication
slug: /user-guide/project-configuration/users/ldap/
---

### Configuration

<div align="center">
  <img src="/images/user-documentation/v1.6/2-project-configuration/users/identity-provider-ldap-connect.png" alt="OpenID Connect" width="800"/> 
</div>

**_Paramètres de configuration :_**
 - **_Libellé_** : Nom de configuration du serveur LDAP
 - **_LDAP serveur adresse_** : Adresse du serveur LDAP à contacter
 - **_LDAP serveur port_** : Port du serveur LDAP à contacter
 - **_LDAP Bind DN_** : Système BIND DN pour l'authentification sur le serveur LDAP
 - **_LDAP UID_** : Nom du champ uid sur le serveur LDAP
 - **_LDAP Filter_** : Filtres LDAP a appliquer
 - **_LDAP email attribute_** : Nom du champ email sur le serveur LDAP

### Exemple

 - **_Libellé_** : LDAP example
 - **_LDAP serveur adresse_** : 172.10.11.12
 - **_LDAP serveur port_** : 389
 - **_LDAP Bind DN_** : ou=users,ou=all,o=CSGROUP
 - **_LDAP UID_** : uid
 - **_LDAP email attribute_** : email

