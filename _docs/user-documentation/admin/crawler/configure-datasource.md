---
layout: classic-docs
title: Map data sources to internal models
short-title: Monitoring
categories:
  - user-documentation
---

L'écran de configuration des aspirations de données (accessible depuis la carte ***Crawling***, puis ***Map data sources to internal models*** <img src="/assets/images/user-documentation/admin/common/configure.png" alt="configure" height="25">), vous permet de créer des aspirations ou de gérer celles que vous avez précédemment créées.

*****************

### <img src="/assets/images/user-documentation/common/right-arrow.png" alt="arrow" height="14"> Créez vos sources d'aspiration

Vous pouvez ajouter quatre types de sources de données selon vos besoins.
- depuis des [AIPs au format GeoJSON](/user-documentation/admin/crawler/aip)
- depuis des [features du feature manager](/user-documentation/admin/crawler/fem)
- depuis une [base de données externe](/user-documentation/admin/crawler/database)
- depuis une [source web OpenSearch](/user-documentation/admin/crawler/opensearch)

*****************

### <img src="/assets/images/user-documentation/common/right-arrow.png" alt="arrow" height="14"> Gérez vos sources d'aspiration

<div align="center">
    <img src="/assets/images/user-documentation/admin/crawler/crawler-datasources.png" alt="datasources" width="800"> 
</div>

   - Vous pouvez activer ou désactiver les aspirations avec les toggle buttons. Si vous choisissez d'en désactiver une, l'indexation ne catalogue ne s'effectuera plus à partir de cette source de données.
   - Vous pouvez modifier les aspirations ou les supprimer. Attention, seules les sources de données non associées à un jeu de données peuvent se supprimer. Cliquez ici pour en savoir plus sur les ***[Datasets](/user-documentation/admin/configuration/datasets)***