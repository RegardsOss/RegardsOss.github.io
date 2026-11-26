---
id: crawler-monitor-crawling
title: Monitor crawling
slug: /user-guide/crawler/monitor-crawling/
---

Pour suivre les aspirations de données dans le catalogue REGARDS (Elasticsearch), cliquez sur ***Ajout de données*** dans le menu latéral de REGARDS, puis dans la carte ***Crawling***, cliquez sur <img src="/images/user-documentation/regards-icons/admin/monitor.png" alt="monitor" height="25" width="25"/> ***Monitor data crawling*** .

---

L'écran présente la liste des aspirations de données en cours ou terminées. 

<div align="center">
    <img src="/images/user-documentation/v1.4/5-crawler/crawler-monitor.png" alt="add datasource" width="800"/> 
</div>


Plusieurs informations sont disponibles :

- ***Label*** correspond au nom donné à la chaîne d'aspiration lors de sa création
- ***Last ingest date*** indique la dernière date de scan de la source d'aspiration
- ***Duration*** durée de la dernière aspiration en secondes. Celle-ci n'est pas affichée dans le cas où la colonne ***Status*** n'est pas _FINISHED_
- ***Status*** indique le statut du traitement de l'aspiration, accompagné d'un panneau cliquable décrivant la stacktrace du traitement Il y a sept états possibles :
  - _NEW_, si la datasource n'a encore jamais été scannée,
  - _STARTED_, si la datasource a été prise en compte et est en train d'être scannée,
  - _FINISHED_, si la dernière aspiration de données s'est terminée sans erreur,
  - _FINISHED_WITH_WARNINGS_, si la dernière aspiration de données s'est terminée avec des alertes,
  - _ERROR_, si la dernière aspiration de données s'est terminée en erreur,
  - _NOT_FINISHED_, si la dernière aspiration ne s'est pas entièrement terminée,
  - _INACTIVE_, si l'aspiration de données n'est pas activée
- ***Number of entities*** indique le nombre de données traitées lors de la dernière aspiration.
- ***Next ingest date*** affiche la prochaine date d'aspiration de données prévue.
- ***Last entity ingested date*** indique la date de la dernière entité aspirée, seulement si l'aspiration est incrémentale et par date (ce qui est le cas par défaut pour les aspirations de type FEM et OAIS). Cette date correspond à la date de dernière modification.

Il y a également des boutons d'action :

- <img src="/images/user-documentation/regards-icons/admin/refresh.png" alt="refresh" height="20" width="100"/> le bouton <b><i>Refresh</i></b> mets à jour les informations de la page
- <img src="/images/user-documentation/regards-icons/admin/clock.png" alt="clock" height="30" width="30"/> les boutons <b><i>Schedule an ingestion</i></b> permettent de démarrer une nouvelle aspiration. Cela n'a un impact que sur les nouvelles données n'ayant pas encore été aspirées. Cette fonctionnalité est utile si vous ne souhaitez pas attendre la prochaine aspiration programmée.  
Dans le cas d'une aspiration incrémentale par date (ce qui est le cas pour les aspirations de type FEM ou OAIS), il est possible de renseigner une date à laquelle l'aspiration reprendra son aspiration. Cette date correspond à la date de dernière modification des entités.
- <img src="/images/user-documentation/regards-icons/admin/delete.png" alt="reset" height="30" width="30"/> les 
boutons <b><i>Delete</i></b> relancent l'aspiration de la totalité de la source de données correspondantes. 
Contrairement à une réindexation 
complète, seules les données de la datasource concernée sont aspirées. Les éventuelles modifications de modèles ne sont 
pas prises en compte lors de cette aspiration. Les données de la datasource déjà aspirées ne sont pas supprimées mais 
susceptibles d'être mises à jour. Le catalogue reste toujours disponible pendant cette aspiration.

## En cas de réindexation en cours

Si un utilisateur a lancé une *[Réindexation du catalogue](reset-catalog.md)*, alors il y a désormais deux indexs 
ElasticSearch dans lesquels les données doivent être ajoutées. Aussi, dans ce cas, les aspirations sont dédoublées, 
chaque datasource ayant une aspiration pour l'index "courant" et une autre pour l'**index en cours de construction**. 

Cela se traduit dans l'IHM par l'apparition d'un nouvel onglet "**Building Index**" et d'une indication "**Reindexing 
in progress**" :

<div align="center">
    <img src="/images/user-documentation/v2.3/5-crawler/crawler-monitoring-building-index.png" alt="add datasource" 
width="800"/> 
</div>

Les aspirations du nouvel onglet correspondent à celles qui alimentent l'index en cours de réindexation. Les boutons 
d'action ne sont pas disponibles sur ces aspirations, sauf si l'une d'elle est en erreur.