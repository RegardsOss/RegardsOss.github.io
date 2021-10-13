---
id: system-configuration
title: Projects data split
slug: /user-guide/global-configuration/system-configuration/
---

REGARDS vous permet de créer et de configurer de multiples projets.
Chaque projet créé dans REGADS est indépendant et les données ajoutées lui son dédiées et donc innacessibles depuis les autres projets.

Un projet REGARDS est :
 - Autonome : indépendant des aux autres projets d'une même instance REGARDS
 - Configurable : Propose ses propres interfaces web d'administration et utilisateur dédiées
 - Adaptable : Permet de gérer ses données propres pouvant provenir de diverses sources de données

En base de données les données des projets sont séparées avec une base par projet.
Pour ce faire, REGARDS utilise un SGBD de type PostgresSQL dans lequel il crée :
 - Une base de données <b>Instance</b> contenant les informations sur tous les projets REGARDS. Les identifiants de connexion à cette base de données sont stockés sur un fichier sur disque du service de configuration `rs-config` dans le fichier "rs-admin-instance.properties"
 - Une base de données par <b>Projet</b> de l'instance REGARDS. Au démarrage un projet est initié par défaut. La configuration de se projet est sur disque du service configuration dans le fichier "rs-admin.properties". Une fois initié les informations de connexion sont alors conservées dans la base de données <b>Instance</b>. Pour tout nouveau projet créé par la suite, les informations de connexion sont alors conservées dans la base de données <b>Instance</b>.
 - Pour chaque projet, un schéma de base de données est créé par microservice REGARDS. Les informations conservées dans ces bases de données et schémas sont relatives au fonctionnement interne de REGARDS et dépendent de chaque microservice associé.

 Les informations de connexion de chaque projet conservées dans la base de données d'instance sont visualisables et editables depuis [L'administration de l'instance REGARDS](../introduction/)

Les informations de configuration d'un projet REGARDS sont visualisables et éditables depuis [L'administration projet de REGARDS](../../project-configuration/introduction/)
