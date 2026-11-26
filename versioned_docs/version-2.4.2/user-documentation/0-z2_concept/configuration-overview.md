---
id: configuration-overview
title: Configuration
slug: /user-guide/concept/configuration-overview/
---

La configuration permet à un administrateur REGARDS de l'adapter à son besoin (projet, infrastructure...). 
### Configuration par fichier

Une petite partie de la configuration est stockée sur le disque du service de configuration `rs-config`, sous la forme de fichier `<microservice>.properties`.  
Ces fichiers de configuration apportent des valeurs communes à tous tous les microservices d'un même type, quel que soit leur projet. 

Cela permet de :
- initier les microservices à leur tout premier démarrage 
- adapter REGARDS à la configuration matérielle sur lequel il est déployé : nombre de tâche réalisable en parallèle, diverses temporisation, cron, taille de ZIP... 

Vous pouvez consulter la liste [des principales variables ouvertes ici](https://github.com/RegardsOss/regards-docker/tree/master/roles/regards-mconfig/templates). 

:::info Mise à jour de la configuration
Une mise à jour d'un fichier de configuration nécessite un redémarrage des microservices du type associé
:::

### Configuration par base de données

La majeure partie de la configuration est stockée dans la base de données du microservice qui le gère.  
Si le microservice est de type Projet, alors la valeur est propre à chaque projet.  
L'administrateur peut modifier cette valeur sans avoir à redémarrer les microservices associés

Les informations de configuration d'un projet REGARDS sont visualisables et éditables depuis [l'administration projet de REGARDS](../2-project-configuration/introduction-project-configuration.md)
