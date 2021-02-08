---
layout: classic-docs
title: Manage projects
short-title: Projects
categories:
  - user-documentation
---

*Créez et gérez vos projets depuis le menu <b>Projects</b> de l'administration de l'instance REGARDS.*

<div align="center">
  <img src="/assets/images/user-documentation/1-global-configuration/projects-menu.png" alt="interface admin" width="800"> 
</div>

{% include toc.md %}

### <img src="/assets/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"> Créer un nouveau projet

Pour commencer à utiliser REGARDS, créez et configurez votre premier projet. Depuis l'interface d'administration de l'instance du système REGARDS, sélectionnez le menu ***Projects*** et cliquez sur le bouton ***Add*** en bas à droite.

#### Etape 1 : Informations générales

Vous serez redirigé vers l'écran de création d'un nouveau projet, remplissez les champs suivants :
 - ***Project name*** *[Obligatoire]*, l'identifiant unique de votre projet. Il sera utilisé par le système pour faire référence à votre projet.
 - ***Project label*** *[Obligatoire]*, le libellé de présentation du projet dans les interfaces web. Contrairement à l'identifiant, vous pouvez mettre des espaces pour plus de clarté.
 - ***Description*** *[Optionnel]*, la présentation succincte de votre projet. Vous pourrez la retrouver dans la liste des projets.
 - ***HTTP link to icon*** *[Optionnel]*, l'adresse web d'accès à l'icône de représentation du projet. Elle est utilisée dans le [portail d'accès](/user-documentation/1-global-configuration/portal-configuration/) aux projets et comme favicon de l'interface web utilisateur.
 - ***HTTP link to project license*** *[Optionnel]*, l'adresse web d'accès au fichier de licence du projet au format ***html***, ***markdown*** ou ***pdf***. Cette license devra être acceptée par les utilisateurs avant de pouvoir accéder aux données.
 - ***REGARDS gateway public address*** *[Obligatoire]*, l'adresse publique d'accès à la passerelle REGARDS. Cette URL est l'unique point d'accès au système REGARDS depuis l'extérieur. Il correspond au microservice ***rs-gateway***. 
 - ***Public project*** *[Optionnel]*, autorise l'accès au projet aux utilisateurs non enregistrés. Par défaut, le projet est privé.
 - ***Accessible project*** *[Optionnel]*, affiche le projet dans le [portail d'accès](/user-documentation/1-global-configuration/portal-configuration/)
 - ***Geometries Coordinate reference system***, le système de référence utilisé pour la gestion des données géo-référencées du projet.
 - ***Handle polar cap polygons***, ajoute une transformation sur les données géo-référencées passant par les pôles. Attention, le format des géométries des données référencés doivent ***toutes*** respecter la règle de la main droite pour les cercles extérieurs.

> Attention, l'adresse d'accès publique configurée sera utilisée par le système pour générer les adresses d'accès aux données (téléchargements compris).
{: .tip .warning} 

#### Etape 2 : Base de données

 Chaque projet du système REGARDS utilise une base de données de type postgres dédiée. Une fois votre projet créé, configurez l'accès à celle-ci pour tous les microservices. Les informations suivantes vous seront alors demandées :
  - ***Database ip address*** *[Obligatoire]*, hôte de la base de données posgres
  - ***Database port*** *[Obligatoire]*, port de connexion à la base de données
  - ***Database name*** *[Obligatoire]*, nom de la base de données
  - ***User*** *[Obligatoire]*, identifiant de connexion à la base de données
  - ***Password*** *[Obligatoire]*, mot de passe de connexion à la base de données

Une fois cette étape terminée, vous obtiendrez la liste des connexions aux schémas de la base de données. L'état de chacune d'entre elles est indiquée par le ***Configuration status***. Après un temps d'initialisation, nécessaire à la création des schémas, toutes les connexions doivent apparaître actives.

Dans le cas contraire, vous pouvez retourner sur la page listant les projets pour reconfigurer les accès à la base de données via le bouton <img src="/assets/images/user-documentation/regards-icons/admin/link.png" alt="link" height="25"> ***Configure database connections***. 

<div align="center">
  <img src="/assets/images/user-documentation/1-global-configuration/project-connexions.png" alt="project connexions" width="800"> 
</div>
 
> Par défaut tous les services REGARDS utiliseront la même base de données en créant un schéma dédié. Si vous voulez configurer une base de données dédiée à chaque service, il vous faut pour cela décocher la case ***Use this configuration for all microservices of the project*** en bas du formulaire de configuration.
{: .tip .info} 

### <img src="/assets/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"> Supprimer un projet

Depuis l'interface d'administration de REGARDS, vous avez la possibilité de désactiver un projet avec le bouton ***Remove*** <img src="/assets/images/user-documentation/regards-icons/admin/delete.png" alt="deactivate" height="25">.
 
 Le projet ne sera plus accessible depuis les diverses interfaces et le système ne traitera plus aucune action liée à celui-ci ; néanmoins les données associées seront toujours conservées en base.

<div align="center">
  <img src="/assets/images/user-documentation/1-global-configuration/project-delete.png" alt="project deletion" width="800"> 
</div>

> Attention : Cette action est **irréversible**. Toutefois, vous pouvez recréer un nouveau projet associé à la même base de données pour récupérer les informations qu'elle contenait.
{: .tip .important} 

### <img src="/assets/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"> Modifier la licence d'un projet

La license de votre projet est un document configuré lors de la création du projet. Elle devra être acceptée par tous les utilisateurs se connectant aux interfaces web. Il est possible au cours de la vie du projet de modifier cette license. Dans ce cas, vous pouvez imposer aux utilisateurs de votre projet, d'accepter de nouveau la license lors de leur prochaine connexion. 

Pour modifier la licence du projet, appuyez sur le bouton <img src="/assets/images/user-documentation/regards-icons/admin/licence.png" alt="licence" height="25"> ***Licence changed*** associé à votre projet depuis la page ***Projects***.

<div align="center">
  <img src="/assets/images/user-documentation/1-global-configuration/project-update-licence.png" alt="project update licence" width="800"> 
</div>