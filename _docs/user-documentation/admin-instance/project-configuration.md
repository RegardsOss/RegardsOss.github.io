---
layout: classic-docs
title: Projects configuration
short-title: Projects
categories:
  - user-documentation
---

## Créer un nouveau projet

Pour commencer à utiliser REGARDS la première étape est la création et la configuration de votre projet. Pour ce faire, depuis l'interface d'administration de l'instance du système REGARDS et depuis le menu `Projects` vous devez créer votre projet avec les informations suivantes :
 - <br>Project name</br/> : Le nom du projet est l'identifiant de votre projet tel qu'il sera utilisé par tous le système pour faire reference a ce dernier.
 - Project label : Il s'agit du libellé de présentation du projet dans les interfaces web
 - Description : Un description succinte de votre projet qui apparaîtra dans la liste des projets  de l'interface d'administration d'instance.
 - HTTP link to icon : Addresse web d'accès à l'icone de représentation du projet. Cette icone est utilisée dans le [portail d'accès](user-documentation/admin-instance/portal-configuration/) aux projets de l'instance et également comme favicon de l'interface web utilisateur.
 - HTTP link to project license : Addresse web d'accès au fichier au format html, markdown ou pdf du fichier de license du projet. Cette license devra être acceptée par les utilisateurs avant de pouvoir accéder aux données depuis l'interface utilisateur.
 - REGARDS gateway public adress : Adresse public d'accès à la passerelle regards. Cette passerelle est le point d'entrée unique au système regards depuis l'extèrieure du système. Il s'agit du microservice `rs-gateway`. 
 - Public project : Permet d'indiquer si le projet est accessible par les utilisateurs non enregistrés.
 - Accesible project : Permet d'indiquer si le projet est visible depuis le [portail d'accès](user-documentation/admin-instance/portal-configuration/)
 - Geometries Coordinate reference system : Système de référence pour la gestion des données géoréférencées du projet.
 - Handle polar cap poygons : Permet d'ajouter une transformation pour les données géoréférencées passant par les pôles. Attention, le format des geometries des données référencés doivent <br>toutes</br> respecter la règle de la main droite pour les cercles extèrieures).

 `NOTE`: Attention, l'adresse d'accès public configurée sera utilisée ensuite par tous le système pour générer les adresses d'accès (téléchargement y compris) aux données du système REGARDS pour le projet courant.

## Supprimer un projet


## Gérer la licence d'un projet
