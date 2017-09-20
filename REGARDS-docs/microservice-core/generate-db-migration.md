---
layout: classic-category
title: Generate Database Migration
short-title: Database migration
categories:
  - microservice-core
---

//TODO TRAD TO ENGLISH


La gestion des structures des bases de données de production n'étant plus réalisée avec HBM2DDL(Hibernate) mais FlyWay, lorsque une entité est modifiée, il faut propager cette modification aux scripts sql permettant la mise en place des structures de bases de données correspondantes.

Les scripts sont réalisés par module et donc disponible dans la couche dao de chacun d'eux. Soit par défaut, dans le répertoire <module>/<module>-dao/src/main/resources/scripts/<module> (instancescripts pour instance!). Les scripts respectent le format suivant: Vx.y.z__*.sql(Version__nom.sql, et oui il y a bien 2 "_" entre la version et le nom). Chaque module peut définir un fichier "dbmodule.properties" (optionnel) permettant de spécifier les dépendances entre modules.

Flyway possédant une table de métadonnées pour chaque module lui permettant de gérer le lancement automatique des scripts et de contrôler la conformité des scripts existants avec ceux déjà passés (somme de contrôle), la mise à jour de la structure de la base de données peut se traduire :

    avec suppression du schéma existant et perte des données, par la modification d'un script existant,
    ou avec compatibilité ascendante (sans perte de données), par la création d'un nouveau script versionné.


PS: Toutes les contraintes d'intégrité doivent être nommées.

PS: Pour aider à l'écriture des scripts, il est possible d'utiliser la génération automatique de HBM2DDL. Pour cela, il suffit de lancer une classe de test dans la dao qui s'appelle "*Generator*" qui étend "AbstractScriptGeneratorTest" (voir javadoc pour contexte d'exécution). L’exécution de cette classe va générer un fichier "project_script.sql" dans le dossier "target". Dans ce fichier, nous avons toutes les informations nécessaire à la modification des scripts sql.



