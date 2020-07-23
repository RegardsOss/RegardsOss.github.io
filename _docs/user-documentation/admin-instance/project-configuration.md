---
layout: classic-docs
title: Projects configuration
short-title: Projects
categories:
  - user-documentation
---

{% include toc.md %}

## Créer un nouveau projet

Pour commencer à utiliser REGARDS la première étape est la création et la configuration de votre projet. Pour ce faire, depuis l'interface d'administration de l'instance du système REGARDS et depuis le menu `Projects` vous devez créer votre nouveau projet.

### Etape 1 : Informations générale

 - <b>Project name</b> : Le nom du projet est l'identifiant de votre projet tel qu'il sera utilisé par tous le système pour faire reference à ce dernier.
 - <b>Project label</b> : Il s'agit du libellé de présentation du projet dans les interfaces web
 - <b>Description</b> : Un description succinte de votre projet qui apparaîtra dans la liste des projets  de l'interface d'administration d'instance.
 - <b>HTTP link to icon</b> : Addresse web d'accès à l'icone de représentation du projet. Cette icone est utilisée dans le [portail d'accès](user-documentation/admin-instance/portal-configuration/) aux projets de l'instance et également comme favicon de l'interface web utilisateur.
 - <b>HTTP link to project license</b> : Addresse web d'accès au fichier au format html, markdown ou pdf du fichier de license du projet. Cette license devra être acceptée par les utilisateurs avant de pouvoir accéder aux données depuis l'interface utilisateur.
 - <b>REGARDS gateway public adress</b> : Adresse public d'accès à la passerelle regards. Cette passerelle est le point d'entrée unique au système regards depuis l'extèrieure du système. Il s'agit du microservice `rs-gateway`. 
 - <b>Public project</b> : Permet d'indiquer si le projet est accessible par les utilisateurs non enregistrés.
 - <b>Accesible project</b> : Permet d'indiquer si le projet est visible depuis le [portail d'accès](user-documentation/admin-instance/portal-configuration/)
 - <b>Geometries Coordinate reference system</b> : Système de référence pour la gestion des données géoréférencées du projet.
 - <b>Handle polar cap poygons</b> : Permet d'ajouter une transformation pour les données géoréférencées passant par les pôles. Attention, le format des geometries des données référencés doivent <b>toutes</b> respecter la règle de la main droite pour les cercles extèrieures).

 `NOTE`: Attention, l'adresse d'accès public configurée sera utilisée ensuite par tous le système pour générer les adresses d'accès (téléchargement y compris) aux données du système REGARDS pour le projet courant.

### Etape 2 : Base de données

 Chaque projet du système REGARDS utilise une base de données de type postgres dédiée. Une fois votre projet créer, il vous est alors demander de configurer l'accès à cette base de données. Les informations suivantes vous sont alors demandées :
  - <b>Data base ip adress</b> : Hôte de la base de données posgres
  - <b>Data base port</b> : Port de connexion à la base de données
  - <b>User</b> : Identifiant de connexion à la base de données
  - <b> Password </b> : Mot de passe de connexion à la base de donées

Une fois cette étape terminée, la liste des connexions aux schémas de la base de données vous est présentée en listant l'état de chacune. Après un certain nécessaire à la création et l'initialization des schémas, toutes les connexions doivent être actives comme présentés dans l'écran ci-dessous. Dans le cas contraire vous pouvez retourner sur la page listant les projets pour reconfigurer les accès à la base de données via l'action associée.

<img src="/assets/images/user-documentation/admin-instance/project-connexions.png" width="750">
 
`NOTE` : Par défaut tous les services REGARDS utiliseront la même base de données en créant un schéma dédié. Si vous voulez configurer une base de données dédiée à chaque service, il faut vous pour cela décocher la case `Use this configuration for all microservices of the project` en bas du formulaire de configuration.


## Supprimer un projet

L'option de supression d'un projet depuis l'interface d'administration d'instance de REGARDS permet de désactiver un projet. Aucune données associées ne sera supprimée. Le projet ne sera alors plus accessible depuis les diverses interfaces et le système ne traiteras plus aucune action liée à ce projet.

<img src="/assets/images/user-documentation/admin-instance/project-delete.png" width="750">

`Attention` : Cette action n'est pas réversible. Toutefois, vous pouvez recréer un nouveau projet associé à la même base de données pour récuperer les informations qu'elle contenaient.

## Modifier la licence d'un projet

La license de votre projet est un document configurer lors de la création du projet et qui devra être accepté une et une seule fois par tout utilisateur se connectant au travers des interfaces web.  

Toutefois, il est possible au cours de la vie du projet de modifier cette license. Dans ce cas, pour que vous pouvez réinitialiser toute acceptation de license de la part des utilisateur sur votre projet pour qu'une nouvelle demande d'acceptation leur soit émise lors de leur prochaine connexion. Pour ce faire vous trouverez l'action `License changed` depuis la liste des projets de l'instance REGARDS.

<img src="/assets/images/user-documentation/admin-instance/project-update-licence.png" width="750">
