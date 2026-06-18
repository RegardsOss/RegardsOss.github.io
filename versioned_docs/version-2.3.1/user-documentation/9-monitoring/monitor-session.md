---
id: dashboard
title: Product monitoring dashboard
slug: /user-guide/monitoring/dashboard
---

_Le tableau de bord est un outil transverse qui permet de suivre l'exécution des chaînes d'acquisition, d'ingestion et d'aspiration de données. Il vous permet d'obtenir de précieuses informations quant à l'archivage de vos produits, le moissonnage dans le catalogue ainsi que la diffusion aux catalogues externes._

_Si vous ne connaissez pas un de ces concepts, vous pouvez lire les rubriques suivantes pour en savoir plus :_

- _[OAIS Archive](../4_1-ingest/introduction-ingest.md)_
- _[GeoJSON Feature Archive](../4_3-fem/introduction-fem.md)_
- _[Build your catalog](../5-crawler/introduction-crawler.md)_

Depuis **Add data** et la carte **Dashboard**, cliquez le bouton <img src="/images/user-documentation/regards-icons/admin/monitor.png" alt="monitor" height="25" width="25"/> **Display dashboard**.


<img src="/images/user-documentation/regards-icons/admin/menu-add-data.png" alt="menu" height="200"/>
<img src="/images/user-documentation/v1.6/9-monitoring/dashboard-card.png" alt="dashboard card" height="200"/>

---


Le tableau de bord est composé de deux parties :

<div align="center">
    <img src="/images/user-documentation/v1.6/9-monitoring/dashboard-sessions.png" alt="sessions" width="800"/> 
</div>

- **à gauche**, la liste des **sources**, qui identifie le fournisseur de la données. Dans le cas d'ajout de données par scan de fichiers, il s'agira du nom de la chaîne d'acquisition. Pour les dépôts directs de fichiers (au format OAIS ou GeoJson), le champ _sessionOwner_ provenant de la requête en entrée sera utilisé.
- **à droite**, la liste des **sessions** identifiant toutes les données traitées lors d'une même acquisition ou ingestion. La session est utilisé afin de suivre plus facilement les données importées dans REGARDS.

:::caution
Le tableau de bord n'est pas un suivi en temps réel, il y a un décalage de quelques secondes avant que l'information soit effective.  
Si vous souhaitez mettre à jour les informations affichés, il est nécessaire d'appuyer sur le bouton de rafraîchissement en haut à droite.
:::
 
Que ce soit pour les sources et les sessions, vous avez la possibilité de les **filtrer par nom ou par état parmi** :
- **ALL**, tous les états
- **Ok**, les traitements terminés sans erreur
- **Error**, les traitements en erreur. Dans ce cas, vous verrez une icône <img src="/images/user-documentation/v1.6/9-monitoring/dashboard-error-icon.png" alt="error icon" width="25"/> indiquant le nombre d'erreurs associées
- **Running**, si au moins une demande est en cours de traitement <img src="/images/user-documentation/v1.6/9-monitoring/dashboard-running-icon.png" alt="running icon" width="25"/>
- **Waiting** le nombre de traitements en attente d'une action administrateur <img src="/images/user-documentation/v1.6/9-monitoring/dashboard-waiting-icon.png" alt="running icon" width="25"/>


Vous pouvez également cliquer sur une source pour **filtrer les sessions liées à cette source**.

Pour voir les **détails liés à une session**, cliquez sur le nom de la session que vous souhaitez suivre. Vous pourrez ainsi accéder aux différents traitements appliqués aux données parmi, l'**acquisition**, l'**ingestion**, le **stockage** et la **diffusion**.

:::note
Seules les colonnes et étapes auquelle une donnée est effectivement passée s'affichent, vous ne verrez donc pas toujours tous les champs
:::

 <div align="center">
    <img src="/images/user-documentation/v1.6/9-monitoring/dashboard-sessions-details.png" alt="sessions" width="800"/> 
 </div>

Chaque étape contient une liste de propriétées découpées en plusieurs catégories :
- **Acquisition** donnera des informations sur le fichiers acquis et les produits générés, 
- **Referencing**, le nombre de requêtes envoyées et les produits référencés associés (versionnés ou non), 
- **Stockage**, les différents types de requêtes envoyées. Pour rappel, il y a deux façons de stocker des fichiers dans REGARDS, par référence ou par stockage. Dans le premier cas, les métadonnées du produit généré contiendront l'emplacement de stockage du fichier, dans le deuxième cas, les fichiers seront en plus stockées dans un espace configuré dans REGARDS.
- **Diffusion**, le nombre de produits indexés dans le catalogue si une chaîne d'aspiration est configurée.

Des boutons d'actions peuvent également s'afficher dans ces étapes :

- _Acquisition_
  - **See referenced**, pour voir les produits référencés
  - **See error requests**, dans le cas où il y aurait des traitements en erreur
  - **Relaunch error requests**, pour relancer les traitements en erreur
- _Referencing_
  - **See referencing products**, pour voir les produits référencés (sur l'écran de gestion OAIS ou GeoJson selon le type de produit)
  - **See errors**, pour voir les traitement en erreur
  - **Relaunch errors**, pour relancer les traitements en erreur
- _Storage_
  - **See storages**, pour voir l'ensemble des espaces de stockage et la place occupée par les fichiers, pour en savoir plus référez-vous à la [page dédiée](../2-project-configuration/storage-configuration.md).
  - **Relaunch errors**, pour essayer de stocker de nouveau les fichiers en erreur
- _Diffusion_
  - **See detail**, pour accéder à l'écran de suivi des aspirations de données vers le catalogue dans le cas où une [chaîne aurait été configurée](../5-crawler/introduction-crawler.md). 



Vous avez également la possibilité depuis cet écran de supprimer les produits liés à cette session en appuyant sur le bouton **Delete Products**. La session se décrementera alors du nombre de produits supprimés.
