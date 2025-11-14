---
id: crawler-reset-catalog
title: Reset catalog
slug: /user-guide/crawler/reset-catalog/
---

A partir de l'écran ***Add data*** et la carte ***Crawling***, vous pouvez déclencher la réindexation du catalogue 
en cliquant sur l'icône de suppression <img src="/images/user-documentation/regards-icons/admin/delete.png" alt="reset" height="25" width="25"/> ***Reset catalog*** depuis la carte ***Crawling***.

---


L’action ***Reset catalog***  permet de reconstruire le meta-catalogue  de votre projet à partir des sources de 
données configurées dans *[Configure datasources](configure-datasource.md)*..

<div align="center">
  <img src="/images/user-documentation/v2.3/5-crawler/crawler-reindex.png" alt="reindex catalog" width="800"/> 
</div>

Lors de cette opération :

* Les données existantes restent accessibles le temps de la réindexation
* Un nouveau catalogue est progressivement recréé à partir des aspirations actives
* Une fois la réindexation terminée, le nouveau catalogue remplace automatiquement l’ancien

Cette opération permet de **remettre à jour l’ensemble du catalogue**, notamment après une **modification des modèles de 
données**.

:::info
* La durée de la réindexation dépend du nombre et du volume de vos sources de données.
* Il est impossible de lancer plusieurs réindexations en parallèle pour un même projet. Si vous demandez une 
  réindexation et qu'il y en a déjà une en cours, alors une fenêtre vous demandera si vous souhaitez écraser la 
  réindexation courante.
* Pendant la réindexation, vous pouvez continuer à naviguer dans le catalogue sans interruption. La recherche 
  s'effectue alors sur l'ancien index, jusqu'à son remplacement.
:::

Comment savoir :
* si une réindexation est déjà en cours ?
* si la réindexation que j'ai lancée est terminée ?

Pour savoir si une réindexation est déjà en cours ou bien si elle est terminée, il faut se rendre dans l'IHM qui liste 
les aspirations :

<div align="center">
    <img src="/images/user-documentation/v2.3/5-crawler/crawler-monitoring-building-index.png" alt="add datasource" 
width="800"/> 
</div>

Si une réindexation est en cours, cela se traduit dans l'IHM par la présence d'un onglet "**Building Index**" et d'une 
indication "**Reindexing in progress**". Quand la réindexation ets terminée, cet onglet et cette indication ne sont 
plus présents dans l'IHM.

:::info
Si on lance une réindexation sans aspiration active, alors un nouvel index est créé sans donnée.
:::