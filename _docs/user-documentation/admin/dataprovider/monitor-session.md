---
layout: classic-docs
title: Acquisition sessions
short-title: Monitor
categories:
  - user-documentation
---

L'écran de suivi des sessions est accessible depuis ***Add data***, la carte ***Data acquisition*** et le bouton ***Acquisition sessions***

*****************

Ce tableau de bord est commun au suivi de l'exécution des chaînes d'acquisition, d'ingestion et d'aspiration de données. Il vous permet d'obtenir de précieuses informations quant à l'archivage de vos produits.

*Si vous ne connaissez pas un de ces concepts, vous pouvez lire les rubriques suivantes pour en savoir plus :*
- *[Acquisition chain](/user-documentation/admin/dataprovider/introduction-acquisition)* 
- *[Ingestion chain](/user-documentation/admin/ingest/introduction-ingest)*
- *[Crawl datasources chain](/user-documentation/admin/crawler/introduction-crawler)*
 
 
 <div align="center">
    <img src="/assets/images/user-documentation/admin/dataprovider/acquisition-sessions.png" alt="sessions" width="800"> 
 </div>

> Vous trouverez les renseignements suivants sur cet écran.

- ***Source*** vous donnant [completer]
- ***Session*** indiquant le contexte dans lequel les données ont été soumises
- ***Last modification*** correspondant à [completer]
- ***Processed products*** détaillant le nombre de SIP générés suite à l'exécution d'une chaîne d'acquisition. Ce champ est vide lorsque vous avez soumis directement des SIPs au travers d'une chaîne d'ingestion.
- ***Versionning*** si les produits générés existait déjà dans le système sous une version antérieure. Dans ce cas l'ancienne version peut être remplacée ou conservée.
- ***Archived products*** détaillant la génération et l'archivage des AIPs issues des SIPs
- ***Indexed products*** donnant le nombre de produits indexés dans le catalog. Cette rubrique peut être vide si vous n'avez pas configuré de source de données à aspirer.

<img src="/assets/images/user-documentation/admin/common/action.png" alt="action" height="25"> Ce bouton présent dans certaines cases vous permet d'effectuer des actions supplémentaires qui s'afficheront lorsque vous cliquerez dessus. Il vous sera particulièrement utile dans le cas où une erreur est survenu lors de l'archivage.

- Dans la case ***Session*** :
  - ***Delete session product***. Pour pouvoir supprimer les produits liés à cette session, une fois cette action effectuée si vous cliquez de nouveau sur le bouton en pointillés vous pourrez supprimer la session. Attention ces actions sont définitives.
  - En cas d'erreur, une action supplémentaire s'affiche ***Acknowledge session products***. Appuyez sur ce bouton, par exemple, lorsqu'une vous avez effectué les modifications nécessaires pour relancer une chaîne sans erreur. La session ne sera plus considérée en échec et la ligne associée ne s'affichera plus en rouge.
- Dans la case ***Archived products***
  - ***List products*** qui vous redirigera vers la page de *[Manage products](/user-documentation/admin/ingest/manage-products)*
  - En cas d'erreur, vous pourrez lister les produits en erreur et leur traitement pour en connaître la cause. Une fois vos corrections effectuées vous pourrez relancer l'archivage des produits en erreur soit à partir du bouton en pointillés soit directement dans la page de ***Manage products***
- Dans la case ***Indexed products***, vous pouvez suivre l'aspiration de données en cliquant sur ***View data crawlers***. Pour en savoir plus sur cete page, consultez *[Crawler monitoring](/user-documentation/admin/crawler/monitor-crawling)*

Pour information :
> - N'hésitez pas à appuyer régulièrement sur le bouton ***Refresh*** pour actualiser les informations du tableau de bord
> - Utilisez les filtres pour retrouver plus facilement les informations liées à l'acquisition de vos données. Faites attention, la case ***Errors only*** est cochée par défaut. Pour afficher toutes les sessions quelque soit leur état décochez cette case et appuyez sur ***Apply filters***
> - Si vous souhaitez afficher plus ou moins d'informations sur votre tableau de bord, appuyez sur le bouton ***Columns*** et cochez ou décochez les colonnes.