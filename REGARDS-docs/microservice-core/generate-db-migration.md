---
layout: classic-docs
title: Generate Database Migration
short-title: Database migration
categories:
  - microservice-core
---


## How to generate script migration

We're using the automatic generation of HBM2DDL to migrate without loosing data. Here is what you should do : 
1. Create a class test in your DAO layer nammed `*Generator*`
1. Make that class extends `AbstractScriptGeneratorTest`
1. Remove and recreate public schema from the target database
1. Open the file `<module>-dao/target/project_script.sql`
1. Create your own script migration using all these informations

## Overview

TODO TRAD FR->EN

La gestion des structures des bases de données de production n'étant plus réalisée avec HBM2DDL(Hibernate) mais FlyWay, lorsque une entité est modifiée, il faut propager cette modification aux scripts sql permettant la mise en place des structures de bases de données correspondantes.

Les scripts sont réalisés par module et donc disponible dans la couche dao de chacun d'eux. Soit par défaut, dans le répertoire <module>/<module>-dao/src/main/resources/scripts/<module> (instancescripts pour instance!). 

Flyway possédant une table de métadonnées pour chaque module lui permettant de gérer le lancement automatique des scripts et de contrôler la conformité des scripts existants avec ceux déjà passés (somme de contrôle), la mise à jour de la structure de la base de données peut se traduire :
 - avec suppression du schéma existant et perte des données
 - par la modification d'un script existant,
 - ou avec compatibilité ascendante (sans perte de données) en créant un nouveau script versionné.


Les scripts respectent le format suivant:
 - Vx.y.z__*.sql(Version__nom.sql, et oui il y a bien 2 "_" entre la version et le nom). Chaque module peut définir un fichier "dbmodule.properties" (optionnel) permettant de spécifier les dépendances entre modules.

Vous devez vous assurer de :
- d'avoir nommé toutes les contraintes d'intégrité
