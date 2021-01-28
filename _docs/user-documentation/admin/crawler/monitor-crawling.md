---
layout: classic-docs
title: Crawler monitoring
short-title: Monitoring
categories:
  - user-documentation
---

Pour suivre les aspirations de données, cliquez sur ***Ajout de données*** dans le menu latéral de REGARDS, puis dans la carte ***Crawling*** cliquez sur ***Monitor data crawling*** <img src="/assets/images/user-documentation/admin/common/monitor.png" alt="monitor" height="25">.

<div align="center">
    <img src="/assets/images/user-documentation/admin/crawler/crawler-monitor.png" alt="add datasource" width="800"> 
</div>

L'écran présente la liste des aspirations de données en cours ou terminées. Plusieurs informations sont disponibles :
- le ***Label*** correspondant au nom donné à la chaîne d'aspiration lors de sa création
- la ***Last ingest date*** indiquant la dernière date de scan de la source d'aspiration
- la ***Duration*** de la dernière aspiration en secondes. Celle-ci n'est pas affichée dans le cas où la colonne ***Etat*** n'est pas *FINISHED*
- le ***Status*** indiquant le suivi du traitement de l'aspiration, accompagné d'un panneau cliquable décrivant la stacktrace du traitement Il y a sept états possibles :
   - *NEW*, si la datasource n'a encore jamais été scannée,
   - *STARTED*, si la datasource a été prise en compte et est en train d'être scannée,
   - *FINISHED*, si la dernière aspiration de données s'est terminée sans erreur,
   - *FINISHED_WITH_WARNINGS*, si la dernière aspiration de données s'est terminée avec des alertes,
   - *ERROR*, si la dernière aspiration de données s'est terminée en erreur,
   - *NOT_FINISHED*, si la dernière aspiration ne s'est pas entièrement terminée,
   - *INACTIVE*, si l'aspiration de données n'est pas activée
 - les ***Number of entities*** indiquant le nombre de données traitées lors de la dernière aspiration.
 - la ***Next ingest date*** affichant la prochaine date d'aspiration de données prévue.
 
 Il y a également des boutons d'action :
 - <img src="/assets/images/user-documentation/admin/common/refresh.png" alt="refresh" height="20"> le bouton ***Refresh*** mets à jour les informations de la page
 - <img src="/assets/images/user-documentation/admin/common/clock.png" alt="clock" height="20"> les boutons en forme d'horloge sur chaque ligne permettent de démarrer une nouvelle aspiration. Cette fonctionnalité est utile si vous ne souhaitez pas attendre la prochaine aspiration programmée. 
 - <img src="/assets/images/user-documentation/admin/common/delete.png" alt="reset" height="20"> les boutons de type *bin* sur chaque ligne supprime la source de données de l'indexation. [completer]