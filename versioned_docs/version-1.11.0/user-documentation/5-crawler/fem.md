---
id: crawler-fem
title: Crawl data from GeoJson Feature internal datasource
slug: /user-guide/crawler/configure-datasources/fem/
---

*Peuplez le catalogue avec les données contenues depuis le feature manager*

:::caution
Vous devez déjà avoir :

- créé des features depuis le feature manager, référez-vous à la section [Import data - FEM](../../../import-data/fem/introduction/) si ce n'est déjà fait.
:::

---

Depuis le menu ***Add data*** et la carte ***Crawling***, cliquez sur ***Map data sources to internal models*** et effectuez les actions suivantes :

- Depuis l'écran ***Map data sources to internal models***, cliquez sur ***Add***
<div align="center">
    <img src="/images/user-documentation/v1.4/5-crawler/crawler-add-datasource.png" alt="add datasource" width="800"/> 
</div>

- Sélectionnez l'option ***crawling features from feature manager***

<div align="center">
    <img src="/images/user-documentation/v1.4/5-crawler/crawler-add-datasource-fem.png" alt="features" width="800"/> 
</div>

- Vous serez redirigé vers l'écran ***Create a new features datasource*** sur lequel, vous devez compléter deux champs :
  - ***Name***, où vous préciserez le nom de la source de données.
  - ***Data model***, où vous devrez obligatoirement choisir dans la liste déroulante le modèle ayant servi à la création des features que vous souhaitez référencer dans le catalogue
- Appuyez ensuite sur ***Save***
- Vérifiez que votre source de données se trouve dans la liste
- Rendez-vous ensuite dans la section ***[Monitor data crawling](../../monitor-crawling/)*** pour suivre l'aspiration de vos features.
