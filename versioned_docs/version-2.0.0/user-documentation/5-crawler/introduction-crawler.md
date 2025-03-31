---
id: crawler-introduction
title: Introduction
slug: /user-guide/crawler/introduction/
---

*REGARDS permet d’aspirer des données depuis n’importe quelle source. Celle-ci sert à l’indexation du catalogue de données accessible depuis l’IHM utilisateur. Ce catalogue permet de consulter les données et leurs métadonnées, référencées dans le système.*

Dans le menu latéral, cliquez sur **Add data** et observez la carte **Crawling**.

<img src="/images/user-documentation/regards-icons/admin/menu-add-data.png" height="200"/>
<img src="/images/user-documentation/v1.4/5-crawler/crawling-card.png" height="200"/>

---

### <img src="/images/user-documentation/regards-icons/admin/database.png" alt="database" height="30" width="30"/> Configure connection to external databases

REGARDS peut automatiquement se connecter à une base de données externe afin de compléter votre catalogue. Avant de pouvoir ajouter des données par ce biais, vous devez configurer une nouvelle connexion externe.

[Learn how to configure a connection to an external database](configure-database.md)

---

### <img src="/images/user-documentation/regards-icons/admin/configure.png" alt="configure" height="30" width="30"/> Map data sources to internal databases

Vous pouvez configurer et gérer des aspirations dans cette catégorie. Celles-ci vont vous permettre d'enrichir le catalogue REGARDS au travers de multiples sources de données.
Il existe actuellement quatre manières d'ajouter des données au catalogue :

- depuis des [AIPs au format GeoJSON](aip.md)
- depuis des [features du feature manager](fem.md)
- depuis une [base de données externe](database.md)
- depuis une [source web OpenSearch](opensearch.md)

[Learn how to map data sources to internal models](configure-datasource.md)

---

### <img src="/images/user-documentation/regards-icons/admin/monitor.png" alt="monitor" height="30" width="30"/> Monitor data crawling

Une fois les aspirations de données configurées, vous pouvez suivre leur avancement dans la rubrique de suivi des traitements.

[Learn how to monitor data crawling](monitor-crawling.md)

---

### <img src="/images/user-documentation/regards-icons/admin/delete.png" alt="reset" height="30" width="30"/> Reset data catalog

Cette dernière fonctionnalité vous permet de réinitialiser le catalogue. Cela pourra s'avérer utile si vous n'êtes pas sûr du contenu du catalogue. Cette opération recréera toutes les données à la date de réinitialisation en fonction des sources d'aspiration configurées.

[Learn how to reset data catalog](reset-catalog.md)
