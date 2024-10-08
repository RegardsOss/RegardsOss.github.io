---
id: crawler-configure-datasources
title: Configure datasources
sidebar_label: Configure datasources introduction
slug: /user-guide/crawler/configure-datasources/
---

L'écran de configuration des aspirations de données (accessible depuis la carte ***Crawling***, puis <img src="/images/user-documentation/regards-icons/admin/configure.png" alt="configure" height="25" width="25"/> ***Map data sources to internal models*** ), vous permet de créer des aspirations ou de gérer celles que vous avez précédemment configurées.

---

## Créer les sources d'aspiration

Vous pouvez ajouter deux types de sources de données selon vos besoins.

- Depuis des sources de données internes à REGARDS :
  - depuis des [AIPs au format OAIS](aip.md)
  - depuis des [features du feature manager](fem.md)
- Depuis des sources de données externes à REGARDS :
  - depuis une [base de données externe](database.md)
  - depuis une [source web OpenSearch](opensearch.md)

---

## Gérer les sources d'aspiration

<div align="center">
  <img src="/images/user-documentation/v1.4/5-crawler/crawler-datasources.png" alt="datasources" width="800"/> 
</div>

- Vous pouvez activer ou désactiver les aspirations avec les <img src="/images/user-documentation/regards-icons/admin/toggle-button.png" alt="toggle" height="25" width="25"/> toggles buttons. Si vous choisissez d'en désactiver une, l'indexation du catalogue ne s'effectuera plus à partir de cette source de données.
- Vous pouvez modifier les aspirations ou les supprimer. Attention, seules les sources de données non associées à un jeu de données peuvent être supprimées. Cliquez ici pour en savoir plus sur les ***[Datasets](../3-data-organization/dataset-collection.md)***
