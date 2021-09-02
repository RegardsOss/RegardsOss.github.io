---
id: dashboard-monitor-sessions
title: Monitor sessions
slug: /user-guide/import-data/dashboard/monitor-sessions/
---

_Le tableau de bord est commun au suivi de l'exécution des chaînes d'acquisition, d'ingestion et d'aspiration de données. Il vous permet d'obtenir de précieuses informations quant à l'archivage de vos produits._

_Si vous ne connaissez pas un de ces concepts, vous pouvez lire les rubriques suivantes pour en savoir plus :_

- _[Acquisition chain](../../scanned-files/introduction/)_
- _[Ingestion chain](../../oais-files/introduction/)_
- _[Feature Manager](../../fem/introduction/)_
- _[Crawl datasources chain](../../../crawler/introduction/)_

Depuis **Add data** et la carte **Dashboard**, cliquez le bouton <img src="/images/user-documentation/regards-icons/admin/monitor.png" alt="monitor" height="25"/> **Display dashboard**.


<img src="/images/user-documentation/regards-icons/admin/menu-add-data.png" alt="menu" height="200"/>
<img src="/images/user-documentation/v1.6/4_4-dashboard/dashboard-card.png" alt="dashboard card" height="200"/>

---


Le tableau de bord est composé de deux parties :

<div align="center">
    <img src="/images/user-documentation/v1.6/4_4-dashboard/dashboard-sessions.png" alt="sessions" width="800"/> 
</div>

- **à gauche**, la liste des **sources**, précisant les fournisseurs de données. Dans le cas d'ajout de données par scan de fichiers, il s'agira du nom de la chaîne d'acquisition. Pour les dépôts directs de fichiers (au format OAIS ou GeoJson), le champ _sessionOwner_ sera utilisé.
- **à droite**, la liste des **sessions** identifiant toutes les données traitées lors d'une même acquisition ou ingestion. La session est utilisé afin de suivre plus facilement les données importées dans REGARDS.

:::caution
Le suivi du dashboard ne se fait pas en temps réel, il y a un décalage de quelques secondes. 
:::

:::caution
Il est nécessaire d'appuyer sur le bouton de rafraîchissement pour obtenir des informations de suivi des sessions.
:::
 
Que ce soit pour les sources et les sessions, vous avez la possibilité de les **filtrer par nom ou par état parmi** :
- **ALL**, tous les états
- **Ok**, les traitements terminés sans erreur
- **Error**, les traitements en erreur. Dans ce cas, vous verrez une icône <img src="/images/user-documentation/v1.6/4_4-dashboard/dashboard-error-icon.png" alt="error icon" width="25"/> indiquant le nombre d'erreurs associées
- **Running**, si au moins une demande est en cours de traitement <img src="/images/user-documentation/v1.6/4_4-dashboard/dashboard-running-icon.png" alt="running icon" width="25"/>
- **Waiting** le nombre de traitements en attente d'une action administrateur <img src="/images/user-documentation/v1.6/4_4-dashboard/dashboard-waiting-icon.png" alt="running icon" width="25"/>


Vous pouvez également cliquer sur une source pour **filtrer les sessions liées à cette source**.

Pour voir les **détails liés à une session**, cliquez sur le nom souhaité. Vous pourrez ainsi accéder aux différents traitements appliqués aux données parmi, l'**acquisition**, l'**ingestion**, le **stockage** et la **diffusion**.

:::note 
Toutes les étapes ne s'afficheront pas nécessairement, cela dépendra des données et de la manière dont elles ont été importées
:::

 <div align="center">
    <img src="/images/user-documentation/v1.6/4_4-dashboard/dashboard-sessions-details.png" alt="sessions" width="800"/> 
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
  - **See storages**, pour voir l'ensemble des espaces de stockage et la place occupée par les fichiers, pour en savoir plus référez-vous à la [page dédiée](../../../project-configuration/storages/).
  - **Relaunch errors**, pour essayer de stocker de nouveau les fichiers en erreur
- _Diffusion_
  - **See detail**, pour accéder à l'écran de suivi des aspirations de données vers le catalogue dans le cas où une [chaîne aurait été configurée](../../../crawler/introduction/). 



Vous avez également la possibilité depuis cet écran de supprimer les produits liés à cette session en appuyant sur le bouton **Delete Products**. La session se décrementera alors du nombre de produits supprimés.