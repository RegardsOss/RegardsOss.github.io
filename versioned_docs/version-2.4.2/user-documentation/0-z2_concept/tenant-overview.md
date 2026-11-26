---
id: tenant-overview
title: Tenant
slug: /user-guide/concept/tenant-overview/
---

REGARDS vous permet de créer et de configurer de multiples projets ([voir concept de Multi-tenant sur Wikipedia](https://fr.wikipedia.org/wiki/Multi-tenant)). 

Un projet REGARDS est :
 - **Sécurisé** - les droits des comptes et l'accès aux données sont spécifiques à un projet
 - **Performant** - un projet dispose de sa propre base de données et les ressources communes ne sont pas monopolisable par un projet lors de charges de travail importantes
 - **Autonome** - les projets sont indépendants les uns des autres au sein d'une même instance REGARDS
 - **Configurable** - les interfaces web d'administration et utilisateur sont dédiées à chaque projet, sans aucun pont possible entre projets
 - **Adaptable** - les données, les sources de données, les modèles, la configuration des microservices... sont propres à chaque projet 
 - **Mutualisé** du point de vue de l'infrastructure - les projets d'une même instance REGARDS utilisent les mêmes serveurs de calcul et ils se mettent tous à jour ensemble

La partie instance de REGARDS permet quant à elle de:
 - Gérer les projets
 - Gérer les comptes des utilisateurs
 - Gérer l'écran d'accueil de l'application

:::info Utiliser les projets
La mise en place de plusieurs projets *peut* être pertinente si vous souhaitez :
- nommer des personnes différentes pour gérer des projets distincts
- éviter que vos utilisateurs puissent visualiser des types de données différents au sein d'un même projet (domaine scientifique foncièrement différents...)
:::

:::warning Ne pas utiliser les projets
Il est cependant à noter que l'accès et l'affichage des données peuvent être restreint par l'administrateur.  
Il n'est donc pas nécessaire de créer de projet pour :
- créer une multitude de pages qui affichent des sous-ensembles distincts de données
- limiter les droits d'accès aux données à des groupes d'utilisateurs
:::
