---
id: scanned-files-manage-acquisition-chains
title: Build OAIS products by scanning files
slug: /user-guide/import-data/scanned-files/manage-acquisition-chains/
---

REGARDS peut automatiquement générer des produits au format OAIS à partir de vos fichiers de données stockés sur disque.
Il vous suffira de paramétrer des chaînes d'acquisition pour configurer le mode de détection.

Dans le menu latéral, cliquez sur **Add data** et observez la carte **Product Manager (OAIS)**.

<img src="/images/user-documentation/regards-icons/admin/menu-add-data.png" alt="menu" height="200"/>
<img src="/images/user-documentation/v1.4/4_2-dataprovider/acquisition-card.png" alt="acquisition card" height="200"/>


### <img src="/images/user-documentation/regards-icons/admin/configure.png" alt="configure" height="30" width="30"/> Manage acquisition chains

 Dans cette catégorie, vous pouvez créer et gérer des chaînes d'acquisition. Elles permettent de générer des SIPs à partir de données scannées sur disque. Ils seront ensuite fournis au système d'ingestion pour leur conservation sous forme d'AIPs.

_Pour configurer les chaînes d'acquisition, allez dans le menu ***Add data***, dans la carte ***Data acquisition*** et cliquez sur le bouton <img src="/images/user-documentation/regards-icons/admin/configure.png" alt="configure" height="25" width="25"/> ***Acquisition chains***._

## <img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12" width="12"/> Créer une chaîne d'acquisition

<div align="center">
    <img src="/images/user-documentation/v1.4/4_2-dataprovider/acquisition-add-chain.png" alt="add chain" width="800"/> 
</div>

Une chaîne d'acquisition permet de générer un ou plusieurs SIPs à partir de vos fichiers de données. Les SIPs seront ensuite confiés à une chaîne d'ingestion dans le but de transformer le SIP en AIP.

Avant de pouvoir créer une chaîne, vous devez obligatoirement avoir :

- configuré une [chaîne d'ingestion](../4_1-ingest/introduction-ingest.md)
- paramétré un [espace de stokage](../2-project-configuration/storage-configuration.md)

Une fois, ces opérations effectuées, vous pouvez créer une chaîne d'acquisition en appuyez sur ***Create new Chain*** à partir de l'écran ***Acquisition chain***.
Vous devrez remplir des champs servant à l'identification de la chaîne et sélectionner des plugins pour détecter vos données, les valider et produire des sips. Si vous ne trouvez pas de plugins correspondants à votre cas d'utilisation, vous pouvez développer votre propre plugin dans REGARDS.

### Onglet General

<div align="center">
  <img src="/images/user-documentation/v1.4/4_2-dataprovider/acquisition-chain-general.png" alt="add chain" width="800"/> 
</div>

Vous devez compléter les champs suivants :

- ***Chain name*** *[Obligatoire]*, le nom de la chaîne qui sera ensuite visible dans la liste des chaînes d'acquisition. Il sera aussi utilisé dans les sessions de suivi de l'acquisition en tant que fournisseur de la donnée (***Source***)
- ***Active chain*** *[Optionnel]* par défaut la chaîne est active
- ***Product versioning mode*** *[Obligatoire]*, dans le cas où plusieurs versions d'un produit serait détectées, ce champ précise la façon dont ces nouvelles versions seront gérées. Par défaut, une nouvelle version est créée.
- ***Starting mode*** *[Obligatoire]* précise le déclenchement de votre chaîne, manuellement ou automatiquement de façon périodique. Si vous choisissez le mode automatique, précisez le cron dans le champ qui apparaîtra.
- ***Ingest chain*** *[Obligatoire]* qui sera la chaîne d'ingestion utilisée pour convertir les SIPs en AIPs
- ***Categories*** *[Optionnel]* ces labels seront ajoutés à toutes les données générées. Ils aideront à identifier plus facilement la thématique liées aux produits.
- ***Storages*** *[Obligatoire]* précisez ici les espaces de stockage qui seront utilisés pour sauvegarder les produits et les données associées. Vous pouvez sélectionner de manière individuelle l'espace sur lequel sera stocké un type particulier de fichier.

### Onglet Files

<div align="center">
  <img src="/images/user-documentation/v1.4/4_2-dataprovider/acquisition-chain-file-1.png" alt="file (1)" width="800"/> 
</div>

Vous pouvez créer sur cette page un ensemble de ***Files*** visibles dans la partie de gauche. Un SIP peut être associé à un ou plusieurs types de fichiers. Les ***Files*** sont des configurations qui permettront de retrouver tous ces fichiers par type. Ils vont scanner tous les répertoires indiqués et détecter les fichiers qui serviront à la génération de SIPs.

Dans l'exemple suivant, il y a deux ***Files*** :

- _Data_ pour détecter tous les fichiers avec l'extension _.dat_ contenus dans les dossiers /input/validation/data/2376/2376_1 et /input/validation/data/2376/2376_2.
- _Image_ pour détecter tous les fichiers avec l'extension _.jpg_ contenus dans les dossiers /input/validation/data/2376/2376_1 et /input/validation/data/2376/2376_2.

Le plugin de génération des produits par défaut créera ensuite un SIP pour chaque couple de fichiers de type _.dat_ et _.jpg_ de même nom.

<div align="center">
  <img src="/images/user-documentation/v1.4/4_2-dataprovider/acquisition-file-example-1.png" alt="file example 1" width="800"/> 
</div>

<div align="center">
  <img src="/images/user-documentation/v1.4/4_2-dataprovider/acquisition-file-example-2.png" alt="file example 2" width="800"/> 
</div>

Vous devez créer un ***File*** à minima, remplissez les champs suivants :

- ***Name*** *[Optionnel]* le nom du *File*
- ***Mandatory to build the product*** *[Optionnel]* indique si le type de fichier est obligatoire pour construire le SIP. En reprenant l'exemple précédent, les fichiers de type *Image* auraient pu être optionnels.
- le tableau ***Scan directories***, vous devez ajouter au minimum un repertoire à scanner, pour cela précisez :
  - le ***Directory to scan*** *[Obligatoire]*, le répertoire de scan des fichiers
  - la ***Last scanning date*** *[Optionnel]*, vous pouvez laisser ce champ vide. Si vous précisez une valeur, seuls les fichiers dont la date de modification est supérieure à la date de dernier scan seront pris en compte.

<div align="center">
  <img src="/images/user-documentation/v1.4/4_2-dataprovider/acquisition-chain-file-2.png" alt="file (2)" width="800"/> 
</div>
   
Sélectionnez ensuite le <b><i>Plugin to detect new data</i></b> pour indiquer au système la manière dont il devra détecter les fichiers. Il existe plusieurs plugins, dont certains avec des paramètres. 

- ***GlobDiskScanning*** détecte les fichiers contenus dans un répertoire. Vous pouvez préciser un filtre sur les données, comme *.java. Par défaut, tous les fichiers seront scannés, appuyez sur le point d'interrogation dans la case pour en savoir plus sur la rédaction du pattern.
- ***GlobDiskStreamScanning*** son fonctionnement basé sur le même principe que ***GlobDiskScanning*** mais il est plus efficace lorsque votre répertoire contient un grand nombre de fichiers.
- ***RegexDiskScanning*** utilise un pattern regex pour détecter les fichiers
- ***TarGzScanPLugin*** détecte les fichiers avec l'extension '.tar.gz'.
- ***ZipScanPlugin*** détecte les fichiers avec l'extension '.zip'.

Précisez ensuite :

- ***Mime-type*** *[Obligatoire]* l'identifiant de format de données auquel appartiennent les fichiers détectés
- ***Data type*** *[Obligatoire]* la catégorie REGARDS correspondant à vos données (*RAWDATA*, *QUICKLOOK_SD*, *QUICKLOOK_MD*, *QUICKLOOK_HD*, *DOCUMENT*, *THUHMNAIL*, *OTHER*, *AIP*, *DESCRIPTION*)

### Onglet Plugins

:::info
REGARDS fournit des plugins de validation et de génération de SIPs par défaut, s'ils ne répondent pas à vos besoins, vous pouvez en développer de nouveaux.
:::

<div align="center">
   <img src="/images/user-documentation/v1.4/4_2-dataprovider/acquisition-chain-plugins.png" alt="plugins" width="800"/> 
</div>

La génération d'un SIP s'effectue en quatre étapes principales Chacune de ces étapes dépend de plugins effectuant des actions différentes :

1. ***Data validation plugin*** *[Obligatoire]* utilisé pour valider vos données d'entrées. Sélectionnez celui correspondant à vos besoins en lisant la description de chaque plugin.
2. ***Product generation plugin*** *[Obligatoire]* sert à la génération des SIPs à partir des ***Files*** configurés. REGARDS fournit un plugin par défaut ***Default product plugin***, qui créé des SIPs avec une structure de base précisée dans le [document suivant](../../development/appendices/oais.md).
3. ***Metadata generation plugin*** *[Obligatoire]* complète les SIPs avec des métadonnées liés aux fichiers scannés. Le plugin *Default Product Plugin\_ recherche des informations de base sur les fichiers comme la taille, le nom, la date de création, etc. Vous pouvez, si besoin, développer votre propre plugin afin qu'il recherche des valeurs spécifiques contenues dans les fichiers.
4. ***Post treatment plugin*** *[Optionnelle]* il est possible d'effectuer un post-traitement suite à la génération de vos SIPs.

Pour finir la création de votre chaîne d'acquisition, appuyez sur le bouton ***Save***. Vous serez ensuite redirigé vers l'écran ***Acquisition chains*** dans lequel vous pourrez voir la chaîne que vous venez de créer.

### Lancement de la chaîne d'acquisition

Pour lancer la génération de nouveaux produits, appuyez sur le bouton <img src="/images/user-documentation/regards-icons/admin/play.png" alt="play" height="26"/> ***Run acquisition chain*** associé à votre chaîne.

Vous pourrez ensuite suivre ce processus en cliquant sur le bouton <img src="/images/user-documentation/regards-icons/admin/session.png" alt="session" height="23"/> ***See session's details***. Référez-vous à la page ***[Monitor session](../9-monitoring/monitor-session.md)*** pour comprendre comment suivre l'acquisition.

---

## <img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12" width="12"/> Gérer les chaînes d'acquisition

> Plusieurs actions vous permettent de gérer les chaînes d'acquisition.

Par groupe :

- En utilisant le sélecteur de ligne, vous pouvez cliquer sur le bouton ***Disable selected chains*** . Cela aura pour effet de rendre inactives toutes les chaînes sélectionnées. Vous pourrez ainsi les supprimer définitivement si vous n'en avez plus le besoin. Pour réactiver les chaînes appuyez sur le bouton ***Enable selected chains***.**_OK_**

Par ligne :

- <img src="/images/user-documentation/regards-icons/admin/session.png" alt="session" height="22"/> Vous pouvez retrouver la ou les sessions d'acquisition liées à votre chaîne. Voir <a href="../../monitoring/dashboard">Product monitoring dashboard</a>.
- <img src="/images/user-documentation/regards-icons/admin/stop.png" alt="stop" height="25" width="25"/> Arrêter la génération de produits en cours en appuyant sur le bouton stop
- <img src="/images/user-documentation/regards-icons/admin/play.png" alt="play" height="25" width="25"/> Modifier les informations liées à une chaîne en cliquant sur le bouton en forme de crayon
- <img src="/images/user-documentation/regards-icons/admin/duplicate.png" alt="duplicate" height="25" width="25"/> Dupliquer une chaîne d'acquisition si votre nouvelle chaîne contient des informations semblables
- <img src="/images/user-documentation/regards-icons/admin/delete.png" alt="delete" height="25" width="25"/> Supprimer une chaîne d'acquisition. Les chaînes toujours actives ne peuvent pas être supprimées, désactivez la chaîne à l'aide du toggle button <img src="/images/user-documentation/regards-icons/admin/toggle-button.png" alt="toggle button" height="25" width="25"/> pour effectuer cette opération.

Vous pouvez également utiliser les outils de filtrage pour rechercher plus simplement des chaînes. Pour cela, sélectionnez le filtre désiré et appuyez sur le bouton ***Apply filters*** pour l'appliquer. Vous pourrez par la suite vider les filtres en appuyant sur ***Clear***.

<div align="center">
    <img src="/images/user-documentation/v1.4/4_1-ingest/ingest-update-chains.png" alt="update chains" width="800"/> 
</div>

:::info
Si vous souhaitez scanner à nouveau tous les fichiers contenus dans un répertoire, éditez la chaîne et supprimez toutes les dates de dernière acquisition.
:::
