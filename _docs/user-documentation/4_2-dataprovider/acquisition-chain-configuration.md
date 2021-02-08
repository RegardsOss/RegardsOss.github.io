---
layout: classic-docs
title: Configure acquisition chains
short-title: Acquisition
categories:
  - user-documentation
---

Pour configurer les chaînes d'acquisition, allez dans le menu ***Add data***, dans la carte ***Data acquisition*** et cliquez sur le bouton ***Acquisition chains*** <img src="/assets/images/user-documentation/regards-icons/admin/configure.png" alt="configure" height="25">.

{% include toc.md %}

### <img src="/assets/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"> Créer une chaîne d'acquisition

<div align="center">
    <img src="/assets/images/user-documentation/4_2-dataprovider/acquisition-add-chain.png" alt="add chain" width="800"> 
</div>

Une chaîne d'acquisition permet de générer un ou plusieurs SIPs à partir de vos fichiers de données. Les SIPs seront ensuite confiés à une chaîne d'ingestion dans le but de transformer le SIP en AIP.

Avant de pouvoir créer une chaîne, vous devez obligatoirement avoir :
- configuré une [chaîne d'ingestion](/user-documentation/4_1-ingest/introduction-ingest/) 
- paramétré un [espace de stokage](/user-documentation/2-project-configuration/storage-configuration/)

Une fois, ces opérations effectuées, vous pouvez créer une chaîne d'acquisition en appuyez sur ***Create new Chain*** à partir de l'écran ***Acquisition chain***.
Vous devrez remplir des champs servant à l'identification de la chaîne et sélectionner des plugins pour détecter vos données, les valider et produire des sips. S'il s'avérait que vous ne trouvez pas des plugins correspondant à votre cas d'utilisation, vous pouvez demander à développer ou développer votre propre plugin dans REGARDS.

> #### Onglet ***General***

<div align="center">
  <img src="/assets/images/user-documentation/4_2-dataprovider/acquisition-chain-general.png" alt="add chain" width="800"> 
</div>

Vous devez compléter les champs suivants :
- ***Chain name*** *Obligatoire*
- case ***Active chain*** *Optionnel* par défaut la chaîne est active
- ***Product versioning mode*** avec quatre options [completer]
   - ***Ignore modified products***
   - ***Create new version for modified products (default)***
   - ***Replace current products by modified products***
   - ***Chose operation when a modified product is detected***
- ***Starting mode*** [completer]
   - ***Automatic (periodic)***
   - ***Manual***
- ***Ingest chain*** qui sera la chaîne d'ingestion utilisée pour convertir les SIPs en AIPs 
- ***Categories*** *Optionnel* ces labels seront ajoutés à toutes les données générées. Ils aideront à identifier plus facilement la thématique liées aux produits.
- ***Storages*** précisez ici les espaces de stockage qui seront utilisés pour sauvegarder les produits et les données associées. Vous pouvez sélectionner de manière individuelle l'espace sur lequel sera stocké un type de fichier.


> #### Onglet ***Files***

<div align="center">
  <img src="/assets/images/user-documentation/4_2-dataprovider/acquisition-chain-file-1.png" alt="file (1)" width="800"> 
</div>

On peut créer sur cette page un ensemble de ***Files*** visible sur la partie de gauche. Un ***File*** est un fichier de configuration utilisé pour scanner des répertoires et détecter les fichiers qui serviront à la génération de SIPs.

Vous devez créer un ***File*** à minima, remplissez les champs suivants :
- ***Name*** *Optionnel*
- case ***Mandatory to build the product*** *Optionnel* [completer]
- le tableau ***Scan directories***, dont vous devez ajouter au minimum un repertoire à scanner, pour cela précisez :
   - le ***Directory to scan*** *Obligatoire* 
   - la **Last scanning date*** *Optionnel*, vous pouvez laisser ce champ vide. Si vous précisez une valeur, seuls les fichiers dont la date de modification est supérieure à la date de dernier scan seront pris en compte.
   
<div align="center">
  <img src="/assets/images/user-documentation/4_2-dataprovider/acquisition-chain-file-2.png" alt="file (2)" width="800"> 
</div>
   
Sélectionnez ensuite le ***Plugin to detect new data*** pour indiquer au système la manière dont il devra détecter les fichiers. Il existe plusieurs plugins, dont certains avec des paramètres. 
- ***GeoJsonFeatureCollectionParserPlugin*** détecte des fichiers au format geojson
   - ***Json path to access the identifier of each feature in the geojson file*** *Obligatoire* pour récupérer le nom qui servira à identification du produit
   - case ***Generate features with no files*** *Optionnel* [completer]
- ***GlobDiskScanning*** détecte les fichiers contenus dans un répertoire. Vous pouvez préciser un filtre sur les données, comme *.java. Par défaut, tous les fichiers seront scannés, appuyez sur le point d'interrogation dans la case pour en savoir plus sur la rédaction du pattern.
- ***GlobDiskStreamScanning*** son fonctionnement basé sur le même principe que ***GlobDiskScanning*** mais il est plus efficace lorsque votre répertoire contient un grand nombre de fichiers.
- ***MetadataScanPlugin*** détecte les fichiers de type ***Microscope*** avec le pattern '_metadata.xml'
- ***RegexDiskScanning*** utilise un pattern regex pour détecter les fichiers
   - remplissez le paramètre avec une regex, exemple *(JA3_GP)([NSR]{1})(\_2P)(\[a-zA-Z]{1})((P)(\[0-9]{3})\_(\[0-9]{3})\_(\[0-9]{8}\_\[0-9]{6})\_(\[0-9]{8}_\[0-9]{6})(.nc){0,1})*
- ***SagDescriptorScanPlugin*** détecte les fichiers de type ***Microscope*** avec le pattern 'sag_descriptor.xml' 
- ***TarGzScanPLugin*** détecte les fichiers avec l'extension 'tar.gz'.
- ***ZipScanPlugin*** détecte les fichiers avec l'extension 'tar.gz'. [probleme : meme description]

Précisez ensuite :
- ***Mime-type*** *Obligatoire* l'identifiant de format de données auquel appartiennent les fichiers détectés
- ***Data type*** *Obligatoire* la catégorie REGARDS correspondant à vos données (*RAWDATA*, *QUICKLOOK_SD*, *QUICKLOOK_MD*, *QUICKLOOK_HD*, *DOCUMENT*, *THUHMNAIL*, *OTHER*, *AIP*, *DESCRIPTION*


> #### Onglet ***Plugins***

<div align="center">
   <img src="/assets/images/user-documentation/4_2-dataprovider/acquisition-chain-plugins.png" alt="plugins" width="800"> 
</div>

La génération d'un SIP s'effectue en quatre étapes principales Chacune de ces étapes dépend de plugins effectuant des actions différentes :
1. ***Data validation plugin*** *(Obligatoire)* utilisé pour valider vos données d'entrées. Sélectionnez celui correspondant à vos besoins en lisant la description de chaque plugin. 
2. ***Product generation plugin*** *(Obligatoire)* [completer]
3. ***Metadata generation plugin*** *(Obligatoire)* ce plugin sera utilisé pour générer des SIPs. Ils peuvent être formattés de façon plus spécifiques selon les missions sur lesquelles vous travaillez. Choisissez ***Default SIP Generation*** pour [completer]
4. ***Post treatment plugin*** *(Optionnelle)* il est possible d'effectuer un post-traitement suite à la génération de vos SIPs.

Pour finir la création de votre chaîne d'acquisition, appuyez sur le bouton ***Save***. Vous serez ensuite redirigé vers l'écran ***Acquisition chains*** dans lequel vous pourrez voir la chaîne que vous venez de créer.


> #### Lancement de la chaîne d'acquisition

Pour lancer la génération de nouveaux produits, appuyez sur le bouton ***Run acquisition chain*** <img src="/assets/images/user-documentation/doc-icons/play.png" alt="play" height="25"> associé à votre chaîne.

Vous pourrez ensuite suivre ce processus en temps réel en cliquant sur le bouton ***See session's details*** <img src="/assets/images/user-documentation/doc-icons/session.png" alt="session" height="25">. Référez-vous à la page ***[Monitor session](/user-documentation/4_2-dataprovider/monitor-session)*** pour comprendre comment suivre l'acquisition.

*****************

### <img src="/assets/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"> Gérer les chaînes d'acquisition

> Plusieurs actions vous permettent de gérer les chaînes d'acquisition.

Par groupe :
- En utilisant le sélecteur de ligne, vous pouvez cliquer sur le bouton ***Disable selected chains*** . Cela aura pour effet de rendre inactives toutes les chaînes sélectionnées. Vous pourrez ainsi les supprimer définitivement si vous n'en avez plus le besoin. Pour réactiver les chaînes appuyez sur le bouton ***Enable selected chains***.

Par ligne :
- <img src="/assets/images/user-documentation/regards-icons/admin/session.png" alt="session" height="18"> Vous pouvez retrouver la ou les sessions d'acquisition liées à votre chaîne. Voir ***[Monitor session](/user-documentation/4_2-dataprovider/monitor-session)***.
- <img src="/assets/images/user-documentation/regards-icons/admin/stop.png" alt="stop" height="18"> Arrêtez la génération de produits en cours en appuyant sur le bouton stop
- <img src="/assets/images/user-documentation/regards-icons/admin/play.png" alt="play" height="18"> Modifiez les informations liées à une chaîne en cliquant sur le bouton en forme de crayon
- <img src="/assets/images/user-documentation/regards-icons/admin/duplicate.png" alt="duplicate" height="18"> Dupliquez une chaîne d'acquisition si votre nouvelle chaîne contient des informations sensiblement semblables
- Vous avez la possibilité de télécharger la chaîne sous forme de fichier JSON. Vous pourrez ainsi importer cette chaîne dans un autre projet REGARDS ou la conserver.
- <img src="/assets/images/user-documentation/regards-icons/admin/delete.png" alt="delete" height="18"> Supprimez une chaîne d'acquisition. Les chaînes toujours actives ne peuvent pas être supprimées, désactivez la chaîne à l'aide du toggle button <img src="/assets/images/user-documentation/doc-icons/toggle-button.png" alt="toggle button" height="18"> pour effectuer cette opération.


Vous pouvez également utiliser les outils de filtrage pour rechercher plus simplement des chaînes. Pour cela, sélectionnez le filtre désiré et appuyez sur le bouton ***Apply filters*** pour l'appliquer. Vous pourrez par la suite videz les filtres en appuyant sur ***Clear***.

<div align="center">
    <img src="/assets/images/user-documentation/4_1-ingest/ingest-update-chains.png" alt="update chains" width="800"> 
</div>

