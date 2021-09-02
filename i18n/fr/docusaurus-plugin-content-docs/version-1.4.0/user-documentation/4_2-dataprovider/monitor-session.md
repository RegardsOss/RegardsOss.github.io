---
id: scanned-files-monitor-sessions
title: Monitor session acquisitions
slug: /user-guide/import-data/scanned-files/monitor-sessions/
---

L'écran de suivi des sessions est accessible depuis ***Add data***, la carte ***Data acquisition*** et le bouton <img src="/images/user-documentation/regards-icons/admin/monitor.png" alt="monitor" height="25"/> ***Acquisition sessions***

---

Ce tableau de bord est commun au suivi de l'exécution des chaînes d'acquisition, d'ingestion et d'aspiration de données. Il vous permet d'obtenir de précieuses informations quant à l'archivage de vos produits.

_Si vous ne connaissez pas un de ces concepts, vous pouvez lire les rubriques suivantes pour en savoir plus :_

- _[Acquisition chain](../introduction/)_
- _[Ingestion chain](../../oais-files/introduction/)_
- _[Crawl datasources chain](../../../crawler/introduction/)_

 <div align="center">
    <img src="/images/user-documentation/v1.4/4_2-dataprovider/acquisition-sessions.png" alt="sessions" width="800"/> 
 </div>

Vous trouverez les renseignements suivants sur cet écran.

- ***Source*** précise le fournisseur de données. Dans le cas d'ajout de données par scan de fichiers, il s'agira du nom de la chaîne d'acquisition. Pour les dépôts directs de fichiers au format (OAIS), le champ *sessionOwner* sera utilisé.
- ***Session*** identifie toutes les données traitées lors d'une même acquisition ou ingestion. Il est utilisé pour suivre plus facilement les données importées dans REGARDS.
- ***Last modification*** correspond à la dernière fois qu'une action a été réalisée sur la session
- ***Processed products*** détaille le nombre de SIPs générés suite à l'exécution d'une chaîne d'acquisition. Ce champ est vide lorsque vous avez soumis directement des SIPs au travers d'une chaîne d'ingestion.
- ***Versioning*** si les produits générés existait déjà dans le système sous une version antérieure. Dans ce cas l'ancienne version peut être remplacée ou conservée.
- ***Archived products*** détaille la génération et l'archivage des AIPs issues des SIPs
- ***Indexed products*** donne le nombre de produits indexés dans le catalogue. Cette rubrique peut être vide si vous n'avez pas configuré de source de données à aspirer.

 Ce bouton <img src="/images/user-documentation/regards-icons/admin/action.png" alt="action" height="25"/> présent dans certaines cases vous permet d'effectuer des actions supplémentaires qui s'afficheront lorsque vous cliquerez dessus. Il vous sera particulièrement utile dans le cas où une erreur surviendrait lors de l'archivage.

- Dans la case ***Session*** :
  - ***Delete session product***. Pour pouvoir supprimer les produits liés à cette session, une fois cette action effectuée si vous cliquez de nouveau sur le bouton en pointillés vous pourrez supprimer la session. Attention ces actions sont définitives.
  - En cas d'erreur, une action supplémentaire s'affiche ***Acknowledge session products***. Appuyez sur ce bouton, par exemple, lorsqu'une vous avez effectué les modifications nécessaires pour relancer une chaîne sans erreur. La session ne sera plus considérée en échec et la ligne associée ne s'affichera plus en rouge.
- Dans la case ***Archived products***
  - ***List products*** qui vous redirigera vers la page de *[Manage products](../../oais-files/manage-products/)*
  - En cas d'erreur, vous pourrez lister les produits en erreur et leur traitement pour en connaître la cause. Une fois vos corrections effectuées vous pourrez relancer l'archivage des produits en erreur soit à partir du bouton en pointillés soit directement dans la page de ***Manage products***
- Dans la case ***Indexed products***, vous pouvez suivre l'aspiration de données en cliquant sur ***View data crawlers***. Pour en savoir plus sur cete page, consultez _[Crawler monitoring](../../../crawler/monitor-crawling/)_

Pour information :

:::info
N'hésitez pas à appuyer régulièrement sur le bouton ***Refresh*** pour actualiser les informations du tableau de bord
:::

:::info
Utilisez les filtres pour retrouver plus facilement les informations liées à l'acquisition de vos données. Faites attention, la case
***Errors only*** est cochée par défaut. Pour afficher toutes les sessions, quels que soient leurs états, décochez cette case et appuyez sur ***Apply filters***
:::

:::info
Si vous souhaitez masquer certaines informations du tableau de bord, appuyez sur le bouton ***Columns*** et cochez ou décochez les colonnes.
:::
