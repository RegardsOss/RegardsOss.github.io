---
id: crawler-opensearch
title: Crawl data opensearch web source
slug: /user-guide/crawler/configure-datasources/opensearch/
---

*Peuplez le catalogue avec les données issues d'une source web Opensearch*

:::caution
Avant de pouvoir configurer une source de données depuis une source Opensearch, vous devez obligatoirement avoir [créé un modèle de données](../../../data-organization/models/) de type ***Data***, il servira à mettre en correspondance vos données et le modèle utilisé par le catalogue
:::

---

Depuis le menu ***Add data*** et la carte ***Crawling***, cliquez sur ***Map data sources to internal models*** et effectuez les actions suivantes :

- Depuis l'écran ***Map data sources to internal models***, cliquez sur ***Add***

<div align="center">
  <img src="/images/user-documentation/v1.4/5-crawler/crawler-add-datasource.png" alt="add datasource" width="800"/> 
</div>

- Sélectionnez l'option ***Crawls data from an OpenSearch Web Source***

<div align="center">
  <img src="/images/user-documentation/v1.4/5-crawler/crawler-add-datasource-opensearch.png" alt="opensearch" width="800"/> 
</div>

1. ***Crawler configuration***
   - ***Crawler name*** *[Obligatoire]*, choisissez le nom de votre source de données.
   - ***Refresh rate*** *[Obligatoire]*, la durée entre deux rafraichissements en secondes. Celle-ci conditionnera la durée entre deux scans de la source de données pour indexer le catalogue. Cela peut s'avérer utile lorsque des données sont régulièrement ajoutées.
   - ***OpenSearch descriptor URL*** *[Obligatoire]*, l'URL permettant d'accéder au descripteur de recherche
   - Appuyez sur ***Next***
2. ***Query configuration***
   - ***Last update parameter*** *[Optionnel]*, sélectionnez si vous le souhaitez la dernière date de mise à jour des métadonnées parmi les attributs du model
   - ***Page size*** *[Obligatoire]*, limite le nombre maximal de données récupérées, entre 1 et 1000
   - ***New filter*** *[Optionnel]*, ajoutez de nouveaux filtres pour restreindre les données récupérées en cliquant sur le bouton ***New filter***, sélectionnez dans la liste déroulante les attributs du modèle le critère de restriction, appuyez sur le bouton de création du filtre et remplissez sa valeur. N'hésitez pas à appuyer sur le bouton ***Test Query*** pour valider votre requête. Dans l'exemple suivant, toutes les données dont le label commence par la lettre A seront récupérées :
   <div align="center">
   <img src="/images/user-documentation/v1.4/5-crawler/crawler-opensearch-step-2-example.png" alt="example" width="800"/> 
   </div>
   - Appuyez sur ***Next***
3. ***Results configuration***
   - ***Total results fields***, sélectionne le nom de l'attribut opensearch contenant le nombre de résultats
   - ***Page size field*** , sélectionne le nom de l'attribut opensearch contenant le nombre maximal d'objets récupérés
   - ***Regards Model***, le modèle utilisé pour faire correspondre les résultats de la requête opensearch au catalogue. Renseignez les noms des champs à récupérer en complétant les attributs standards, communs à toutes les données, les fichiers associés et les attributs dynamiques propres au modèle, par exemple :

<div align="center">
 <img src="/images/user-documentation/v1.4/5-crawler/crawler-opensearch-step-3-example.png" alt="example" width="800"/> 
</div>

Appuyez sur le bouton ***Finish***, Vous serez redirigé vers la liste des aspirations de données dans laquelle vous pourrez retrouver votre configuration. Vous pouvez suivre son traitement dans [Monitoring](../../monitor-crawling/).
