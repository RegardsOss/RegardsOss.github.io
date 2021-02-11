---
layout: classic-docs
title: Submit OAIS products
short-title: Submission
categories:
  - user-documentation
---

<i>Déposez des fichiers de données contenant des Submission Information Packages (SIPs). Un SIP est un support de base utilisé pour créer des Archival Information Packages (AIPs), qui stockeront les données spatiales et toutes les métadonnées nécessaires à la pérennisation des objets et leur contenus.</i>

{% include toc.md %}

*****************

### <img src="/assets/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"> Pré-requis

Vous devez importer des fichiers avec un format spécifique pour qu'ils puissent être interprétés et traités par REGARDS.
Pour construire votre fichier, lisez la page [REGARDS OAIS implementation](/appendices/oais/).

Un fichier de dépôt est composé de deux parties principales :
- ***metadata*** décrit la façon dont REGARDS doit ingérer le fichier. Le champ ***ingestChain*** précise la chaîne d'ingestion à utiliser pour traiter les SIPs, ***storages*** est une liste de paths utilisée lorsque que vous souhaitez enregistrer des fichiers supplémentaires. Dans cas, vous devrez indiquer quel type de fichier il faudra stocker et sur quel [espace](/user-documentation/2-project-configuration/storage-configuration/). Cette entête fournit également des informations utiles au suivi de l'avancement de l'ingestion au travers des champs ***Session*** et ***Session Owner*** ; ainsi que l'ajout de ***categories*** utiles à l'identification de votre groupe de données.
- ***features*** qui contient la liste des SIPs, appelées ***Features***, à stocker et transformer en AIP. Ils sont composés de tous les référencements de données spatiales et leurs métadonnées.

Une fois, ce fichier créé, vous pourrez le soumettre à REGARDS.

### <img src="/assets/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"> Soumettre des SIPs


Cliquez sur le bouton <img src="/assets/images/user-documentation/regards-icons/admin/add.png" alt="add products" height="25"> ***Submit products*** de la carte ***Products Manager (OAIS)*** accessible depuis ***Add data***.

- Depuis l'écran ***Data submission***, appuyez sur le bouton ***Select file containing data to submit*** et choisissez le fichier JSON que vous venez de créer.

<div align="center">
  <img src="/assets/images/user-documentation/4_1-ingest/ingest-submit-products.png" alt="submit products" width="800"> 
</div>
      
- Appuyez ensuite sur ***Submit***
- Vous accèderez ensuite à un rapport résumant la demande de dépôt des sips, vous y trouverez :
  - une ligne indiquant si les sips, aussi appelées ***features***, ont été soumis. Si tel est le cas, le système vous communiquera le nombre de sips envoyées au système de stockage.
 Dans le cas contraire, une erreur s'affichera pour vous informer que le fichier n'a pas un format valide. Vous pourrez donc le modifier et le réimporter.
  - un bouton vous permettant de suivre l'ingestion des données. Voir la page *[Acquisition session](/user-documentation/4_2-dataprovider/monitor-session)* pour comprendre comment suivre vos données et savoir si elles ont correctement été stockées par le système. Suivez ensuite la page *[Manage products](/user-documentation/4_1-ingest/manage-products)* pour gérer vos produits.
  - un bouton vous permettant de déposer à nouveau un fichier contenant des sips.
  
<div align="center">
  <img src="/assets/images/user-documentation/4_1-ingest/ingest-data-summary.png" alt="product data summary chain" width="800"> 
</div>
