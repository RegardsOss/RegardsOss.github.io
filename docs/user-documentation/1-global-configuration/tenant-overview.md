---
id: system-tenant-overview
title: Tenant & data overview
slug: /user-guide/global-configuration/system-tenant-overview/
---

REGARDS vous permet de créer et de configurer de multiples projets ([voir concept de Multi-tenant sur Wikipedia](https://fr.wikipedia.org/wiki/Multi-tenant)). Nous vous présentons ici le concept, pour que vous soyez en mesure de savoir lorsqu'il vous est pertinent de créer de nouveau projet au sein d'une instance REGARDS et une meilleure compréhension de son fonctionnement.

Chaque projet créé dans REGADS est indépendant et les données que vous y ajouterez lui seront dédiées et donc inacessibles depuis les autres projets.

:::info
Si vous souhaitez éviter que vos utilisateurs puissent visualiser deux types de données au sein d'un même écran, par exemple de domaine scientifique foncièrement différent ou dans le cadre de missions différentes, alors la mise en place de plusieurs projets *peut* être pertinente.  
Il est cependant à noter que les pages affichés aux utilisateurs peuvent être restreinte à des sous-ensembles de données, ce qui permet à l'administrateur de créer une multitude de pages qui affichent des sous-ensembles distincts de données.
:::

Un projet REGARDS est :
 - Mutualisé - les projets d'une même instance REGARDS utilisent les mêmes serveurs de calcul et ils se mettent tous à jour ensemble
 - Performant - un projet dispose de sa propre base de données et les ressources communes ne sont pas monopolisable par un projet lors de charges de travail importantes
 - Autonome - les projets sont indépendants les uns des autres au sein d'une même instance REGARDS
 - Configurable - les interfaces web d'administration et utilisateur sont dédiées à chaque projet, sans aucun pont possible entre projets
 - Adaptable - les données, les sources de données, les modèles, la configuration des microservices... sont propres à chaque projet 
 - Sécurisé - les droits sont granulaires et par projet

La partie instance de REGARDS permet quant à elle de:
 - Gérer les projets
 - Gérer les comptes des utilisateurs
 - Gérer l'écran d'accueil de l'application

Pour cela, REGARDS utilise le SGBD `PostgresSQL` avec :
 - Une base de données <b>Instance</b>, avec autant de schéma qu'il y a de microservice Instance
 - Une base de données <b>par Projet</b>, avec autant de schéma qu'il y a de microservice Projet

:::info
Les informations conservées dans les schémas de ces bases de données sont relatives au fonctionnement interne de REGARDS, ce ne sont donc pas des points d'entrée pour y stocker les données du catalogue.
:::

La configuration de REGARDS est disposée en deux endroits :
 - une petite partie de la configuration est stockée sur le disque du service de configuration `rs-config`, sous la forme de fichier `<microservice>.properties`. Elle permet d'initier les microservices à leur tout premier démarrage ou d'adapter REGARDS à la configuration matérielle sur lequel il est déployé : nombre de tâche réalisable en parallèle, diverses temporisation, cron, taille de ZIP... [Vous pouvez consulter la liste ici](https://github.com/RegardsOss/regards-docker/tree/master/roles/regards-mconfig/templates). Une mise à jour nécessite un redémarrage des microservices associés
 - le majeure partie de la configuration est stockée en base de données sur le microservice qui le gère, l'administrateur peut alors faire varier cette valeur suivant le projet sans avoir à redémarrer les microservices associés

:::info
Une partie de la configuration sur disque, utilisé au démarrage, est ensuite stockée en base de données. Par exemple, lors du premier démarrage, un projet est initié par défaut. La configuration par microservice de ce projet est lu sur le disque du service de configuration `rs-config` dans le fichier `<microservice>.properties`. Une fois initié, les informations de connexion sont alors conservées dans la base de données <b>Instance</b>. Dorénavant, lors de la création d'un nouveau projet ou lors d'un redémarrage, les informations de connexion utilisées sont celles conservées dans la base de données <b>Instance</b>.
:::


Les informations de configuration d'un projet REGARDS sont visualisables et éditables depuis [l'administration projet de REGARDS](../../project-configuration/introduction/)
