---
id: project-configuration-storages
title: Manage storage locations
slug: /user-guide/project-configuration/storages
---

_Définissez des espaces de stockage pour conserver les données créées dans REGARDS depuis le menu ***Add data*** et la carte ***Storage***._

<div align="center">
  <img src="/images/user-documentation/2-project-configuration/storage/storage-menu.png" alt="storage menu" width="800"/> 
</div>

---

### <img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"/> Types de stockage

Dans REGARDS, un espace de stockage est un support dans lequel vos données sont sauvegardées ou référencées.

Il en existe plusieurs types :

- ***Online*** les fichiers de données sont directement accessibles.
- ***Nearline*** les fichiers ne sont pas directement accessibles. Ce type de stockage créé un référencement des données externes qui doivent transiter par un stockage intermédiaire de type ***Cache*** pour être accessibles. Cela peut arriver par exemple lorsque des fichiers ont été archivés sur un autre support et qu'un système tierce doit les rendre accessibles.
- ***Offline*** lorsque l'accès aux fichiers n'est pas possible.
- ***Cache*** est utilisé pour récupérer les fichiers issus d'un téléchargement ***Nearline***.

Pour configurer des espaces de stockages accédez à l'écran ***Configure data storage locations*** depuis le menu ***Add data***, la carte ***Storage*** et le bouton <img src="/images/user-documentation/regards-icons/admin/location.png" alt="location" height="25"/> ***Configure locations***.

### <img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"/> Créer un espace de stockage

Appuyez sur le bouton ***Create a new storage*** depuis l'écran ***Configure data storage locations***.

<div align="center">
  <img src="/images/user-documentation/2-project-configuration/storage/storage-create.png" alt="create storage" width="800"/> 
</div>

Précisez :

- ***Name*** qui sera le nom utilisé pour désigner l'espace de stockage. Essayez d'en donner un ayant le plus de sens car vous le réutiliserez pour sauvegarder vos données par la suite.
- ***Allocated size*** et l'unité (*MB*,_GB_,_TB_,_PB_,_EB_,_ZB_,_YB_) est l'espace disque accordé à ce stockage.
- ***Data access plugin*** définit la façon d'accéder au système de stockage de vos données. Choisissez celui correspondant à vos besoins.

:::info
Si aucun plugin ne correspond à vos besoins, vous avez la possibilité d'en développer un.
:::

Une fois ces étapes terminées, appuyez sur le bouton ***Create***. Votre nouvel espace est désormais prêt à être utilisé.

### <img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"/> Gérer vos espaces de stockage

Vous pouvez surveiller un certain nombre de paramètres depuis l'écran ***Configure data storage locations***.

<div align="center">
  <img src="/images/user-documentation/2-project-configuration/storage/storage-configure.png" alt="configure storages" width="800"/> 
</div>

- ***Recalculate occupations*** recalcule la place occupée par vos fichiers de données ainsi que leur nombre. Cette opération s'effectue automatiquement de façon périodique, néanmoins vous pouvez décider à tout moment de l'actualiser.
- ***Force stop all pending requests*** arrête tous les traitements en cours et les passer en erreur.
- ***Refresh*** actualise immédiatement toute l'activité en cours, ainsi que d'éventuelles erreurs de stockage ou de suppression.

Sur chaque ligne d'espace de stockage vous trouverez :

- ***Name*** le nom de l'espace
- ***Type*** le type de stockage
- ***Stored files*** le nombre de fichiers qui y sont stockés
- ***Total size*** l'espace mémoire occupé. Notez que dans le cas où sa limite serait atteinte, le service se mettrait en état de maintenance. Voir la partie [Manage microservices](microservices) pour plus d'information
- ***Storage error*** le nombre de fichiers n'ayant pas été correctement stockés. Dans ce cas, une flèche s'affichera à côté des erreurs de stockage vous permettant d'effectuer les actions suivantes : ***Relaunch storage errors***, ***Delete storage errors***, ***View storage errors***
- ***Deletion errors*** le nombre de fichiers ne s'étant pas correctement supprimés. Dans ce cas, une flèche s'affichera à côté des erreurs de stockage vous permettant d'effectuer les actions suivantes : ***Relaunch deletion errors***, ***Delete deletion errors***, ***View deletion errors***
- ***Activity*** indique s'il y a des traitements de données en cours

Il y a également des boutons d'actions :

- <img src="/images/user-documentation/regards-icons/admin/edit.png" alt="edit" height="25"/> <b><i>Edit configuration</i></b> pour modifier les paramètres de stockage
- <img src="/images/user-documentation/regards-icons/admin/transfer-files.png" alt="transfer" height="25"/> <b><i>Copy files to another storage</i></b> pour copier tous les fichiers de l'espace de stockage vers un autre
- <img src="/images/user-documentation/regards-icons/admin/arrow-up.png" alt="arrow up" height="25"/> <img src="/images/user-documentation/regards-icons/admin/arrow-down.png" alt="arrow down" height="25"/> permet de régler la priorité d'action sur un espace de stockage. Cela s'applique dans le cas où une même donnée serait stockée sur plusieurs espaces
- <img src="/images/user-documentation/regards-icons/admin/empty-files.png" alt="empty" height="25"/> <b><i>Delete storage's files</i></b> pour vider l'espace de stockage
- <img src="/images/user-documentation/regards-icons/admin/delete.png" alt="delete" height="25"/> <b><i>Delete this item</i></b> pour supprimer l'espace de stockage
