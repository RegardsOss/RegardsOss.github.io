---
id: overview
title: Overview
slug: /user-guide/
---

REGARDS (**_RE_**nouvellement des outils **_G_**énériques d'**_A_**ccès et d'a**_R_**chivage pour les **_D_**onnées **_S_**patiales)

<p>
  Face aux nombreuses missions spatiales permettant de collecter des données
  d’observation et de télémétrie, une question de <b>stockage, de gestion et de valorisation de l’information</b> s’est rapidement
  imposée. REGARDS permet de répondre à cette demande sous la gestion d’un seul outil
  tout en permettant une <b>large adaptabilité de configuration</b>, afin de répondre à des besoins de traitements spécifiques.
</p>

<p>
  Son architecture est basée sur un principe <b>multi-tenants</b> permettant de
  diviser l'utilisation de REGARDS en plusieurs projets tout en se basant sur la
  même instance. Les ressources sont ainsi mutualisées, simplifiant la
  maintenance du logiciel et le déploiement de nouvelles versions. Un <b>load-balancing</b> s'assure que les charges de travail sont équitablement réparties
  entre les projets.
</p>

---

## Un outil générique, une maintenance simplifiée

<p>
  L’objectif de cet outil est d’organiser de larges volumes de données provenant
  de sources diverses au sein d’une seule et même plateforme simplifiée. Ces
  données sont répertoriées sous forme de catalogue et leurs métadonnées
  viennent apporter des informations complémentaires afin de les rendre
  exploitables par le plus grand nombre. REGARDS permet également le déploiement
  de plugins afin d’opérer des traitements spécifiques au plus près de la
  donnée.
</p>

<div align="center">
  <img
    src="/images/user-documentation/v1.4/0-overview/overview_generic.png"
    alt="Project configuration"
    height="140" width="140"
  />
</div>

---

## Une configuration au plus proche de vos projets

<p>
  L’ensemble de la gestion de vos données est entièrement personnalisable. Vous
  pouvez établir vos propres modèles de données afin d’organiser comme vous le
  souhaitez votre catalogue; référencer vos recherches avec des métadonnées
  spécifiques; ou développer vos propres plugins afin d’appliquer des
  traitements selon votre utilisation des données. S’appuyant sur des
  technologies de diffusion d’information standardisées comme OpenSearch, vos
  recherches pourront être rendues accessibles par d'autres applications. Vous
  pourrez facilement en gérer l’accessibilité afin d’en assurer sa protection
  par l’emploi de "groupes utilisateurs". Pour vous aider dans la gestion de vos
  projets, REGARDS est divisé en trois sections. Une section utilisateur
  permettant de consulter le catalogue et les données, une section gestionnaire
  permettant de paramétrer le catalogue et de gérer les données et une section
  super administrateur permettant de gérer l’ensemble des projets et des
  utilisateurs de l'instance REGARDS.
</p>

<div align="center">
  <img
    src="/images/user-documentation/v1.4/0-overview/overview_config.png"
    alt="Project configuration"
    height="140" width="140"
  />
</div>

---

## Un large choix de sources de données

<p>
  Le catalogue peut être peuplé principalement par deux types de sources de
  données, internes ou externes. Parmi les sources internes à REGARDS, on compte
  l’envoi de données dans un format suivant les recommandations OAIS. Elles
  peuvent être directement importées par les modules d’acquisition et
  d’ingestion de REGARDS ou par messages AMQP. Des données externes à
  l’environnement REGARDS peuvent également être importées en paramétrant la
  correspondance entre les données externes et vos propres modèles de donnée. Il
  peut s’agir de base de données externes comme Postgres ou de sources web
  Opensearch.
</p>

<div align="center">
  <img
    src="/images/user-documentation/v1.4/0-overview/overview_data.png"
    alt="Data Sources"
    height="140" width="140"
  />
</div>

---

## Des plugins évolutifs et coopératifs

<p>
  REGARDS met à votre disposition de nombreux plugins permettant de configurer
  vos projets selon vos besoins. Vous pourrez ainsi accéder à vos données, les
  produire, les traiter, les rechercher ou les partager de la manière dont vous
  souhaitez. Si aucun de ces plugins ne convient à votre utilisation, vous
  pourrez facilement intégrer votre propre plugin JAVA ou JavaScript dans votre
  instance de REGARDS. Vous avez également la possibilité de le partager avec la
  communauté en faisant un pull-request sur le dépôt du git officiel.
</p>

<div align="center">
  <img
    src="/images/user-documentation/v1.4/0-overview/overview_plugin.png"
    alt="Plugins"
    height="140" width="140"
  />
</div>

---

## Pour résumer l’utilisation de REGARDS

<p>
  Voyez REGARDS comme un outil de ressources partagées permettant d'utiliser et
  de configurer plusieurs projets. Chaque projet peut être vu comme une
  gigantesque médiathèque personnalisable, vous permettant d’accéder à vos
  données grâce à un catalogue qui en référence tous les éléments. Vous pouvez
  vous-mêmes définir la façon dont vos éléments vont être répertoriés grâce à un
  ou plusieurs modèles de données. Vous avez également la possibilité d’ajouter
  des métadonnées pour aider à leur recherche. Enfin, l’ajout de plugins permet
  le traitement spécifique de la donnée.
</p>

<div align="center">
  <img
    src="/img/logos/regards-svg/regards-blue.svg"
    alt="Conclusion"
    height="120"
  />
</div>

---

## Utilisation de REGARDS étape par étape

1. [Configurer l'instance de REGARDS](../1-global-configuration/introduction-global-configuration.md)
1. [Configurer un projet REGARDS](../2-project-configuration/introduction-project-configuration.md)
1. [Définir les modèles de données](../3-data-organization/models.md)
1. [Construire son archive scientifique](../4-import-data/import-data.md)
	 - [Archivage OAIS](../4_1-ingest/introduction-ingest.md)
	 - [Archivage de produits GeoJSON](../4_3-fem/introduction-fem.md)
1. [Regrouper les données en jeux ou collections](../3-data-organization/dataset-collection.md)
1. [Gérer les droits d’accès aux données](../3-data-organization/data-access-rights.md)
1. [Peupler le catalogue](../5-crawler/introduction-crawler.md)
	 - Depuis des sources de données internes
		 - [Depuis la base interne OAIS](../5-crawler/aip.md)
		 - [Depuis la base interne de produits GeoJSON](../5-crawler/fem.md)
	 - Depuis des sources de données externes
		 - [Depuis des bases de données externes](../5-crawler/database.md)
		 - [Depuis des sources de données web Opensearch](../5-crawler/opensearch.md)
1. [Configurer le catalogue](../6-catalog-consultation/introduction-catalog.md)
1. [Ajouter des services aux données](../7-data-services/introduction-services.md)
1. [Commander des données depuis le catalogue](../8-order-data/introduction-order.md)
1. [Monitorer l'archive scientifique interne et le catalogue](../9-monitoring/monitor-session.md)

:::info
Pour en savoir plus sur le développement de plugins [Backend](../../development/framework/modules/plugins.md) ou [Frontend](../../development/frontend/plugins/plugins.md).
:::

**_Mot-clés_** : catalogue de données, métadonnées, données, modèles de données, différentes sources de données, protocole de recherche standardisé, gestion des accès.

---

_Utilisation des icônes libre de droits sous licence <a href="https://www.flaticon.com/fr/" title="Flaticon">
Flaticon </a> conçues par <a href="https://www.freepik.com" title="Freepik"> Freepik</a>_
