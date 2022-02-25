---
id: crawler-monitor-crawling
title: Monitor crawling
slug: /user-guide/crawler/monitor-crawling/
---

Pour suivre les aspirations de données, cliquez sur ***Ajout de données*** dans le menu latéral de REGARDS, puis dans la carte ***Crawling***, cliquez sur <img src="/images/user-documentation/regards-icons/admin/monitor.png" alt="monitor" height="25"/> ***Monitor data crawling*** .

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

Il y a également des boutons d'action :

- <img src="/images/user-documentation/regards-icons/admin/refresh.png" alt="refresh" height="20"/> le bouton <b><i>Refresh</i></b> mets à jour les informations de la page
- <img src="/images/user-documentation/regards-icons/admin/clock.png" alt="clock" height="20"/> les boutons <b><i>Schedule an ingestion</i></b> permettent de démarrer une nouvelle aspiration. Cela n'a un impact que sur les nouvelles données n'ayant pas encore été aspirées. Cette fonctionnalité est utile si vous ne souhaitez pas attendre la prochaine aspiration programmée.
- <img src="/images/user-documentation/regards-icons/admin/delete.png" alt="reset" height="20"/> les boutons <b><i>Delete</i></b> suppriment les données aspirées dans le catalogue et relancent l'aspiration de la totalité de la source.
