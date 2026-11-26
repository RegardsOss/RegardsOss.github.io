---
id: database-overview
title: Database
slug: /user-guide/concept/database-overview/
---

REGARDS utilise plusieurs bases de données :
 - Une base de données **Instance**, avec autant de schéma qu'il y a de microservice de type Instance
 - Une base de données **par Projet**, avec autant de schéma qu'il y a de microservice de type Projet

:::warning
Les informations conservées dans les schémas de ces bases de données sont relatives au fonctionnement interne de REGARDS, ce ne sont donc pas des points d'entrée pour y stocker les données du catalogue.
:::

:::note Cas particulier des identifiants d'accès aux bases de données
Une partie de la configuration sur disque, utilisé au démarrage, est ensuite stockée en base de données.  
Par exemple, lors du premier démarrage, un projet est initié par défaut. La configuration par microservice de ce projet est lu sur le disque du service de configuration `rs-config` dans le fichier `<microservice>.properties`. Une fois initié, les informations de connexion sont alors conservées dans la base de données <b>Instance</b>.  
Dorénavant, lors de la création d'un nouveau projet ou lors d'un redémarrage, les informations de connexion utilisées sont celles conservées dans la base de données <b>Instance</b>.
:::
