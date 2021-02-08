---
layout: classic-docs
title: Crawl data from external databases
short-title: Database
categories:
  - user-documentation
---
 
Vous trouverez ci-dessous les trois étapes principales pour configurer une aspiration de données depuis une base de données externe.

#### Etape 1 : Importez un modèle pour la configuration des données
- Depuis le menu latéral, cliquez sur ***Data models*** puis dans la carte ***Models*** appuyez sur ***Add***. 
La façon la plus simple d'ajouter un modèle de données est d'envoyer un fichier XML contenant le modèle, ses fragments 
et ses attributs. 
Pour cela, cliquez sur ***Select a file***, sélectionnez un fichier au format XML dans l'explorateur de données puis appuyez sur ***Save***. Si vous souhaitez en savoir plus sur l'import de modèle de données, veuillez vous référer à la page [create a model](/user-documentation/3-data-organization/models/).


#### Etape 2 : Configurez une base de données externe
- Vous devez normalement déjà avoir configurer une connexion à une base de données externe. Si ce n'est pas le cas, effectuez les opérations de la page suivante [configure a connection to an external database](/user-documentation/5-crawler/configure-database)


#### Etape 3 : Configurez une aspiration depuis une base de données externe
- Dans la carte ***Crawling***, cliquez sur ***Map datasources to internal models*** puis sur ***Add***.

<div align="center">
    <img src="/assets/images/user-documentation/5-crawler/crawler-add-datasource.png" alt="add datasource" width="800"> 
</div>

- Sélectionnez ensuite le mode ***crawl data from an external data source***. 

<div align="center">
    <img src="/assets/images/user-documentation/5-crawler/crawler-add-datasource-database.png" alt="database" width="800"> 
</div>

Vous entrez ensuite l'éditeur de création d'une source de données composé de trois étapes successives.

1. ***Select a connection***
   - Choisissez dans la liste déroulante la connexion que vous venez de configurer puis appuyez 
sur ***Next***
2. ***Specify datasource attributes***
   - Configurez ensuite les attributs correspondants à votre source de données :
     - entrez le libellé de votre choix,
     - la durée entre deux rafraichissements en secondes, dont vous pouvez modifier la valeur par défaut. Celle-ci conditionnera la durée entre deux scans de la source de données pour indexer le catalogue. Cela peut s'avérer utile lorsque des données sont régulièrement ajoutées,
     - choisissez ensuite le modèle que vous avez précédemment importé,
     - le type de plugin pour définir la manière dont les données de la base de données externe vont être mappées. Il y a actuellement deux types de mappings. Le plugin *postgresql-datasource* permet de lier plusieurs attributs de plusieurs tables externes au modèle de données et *postgresql-datasource-single-table*, permettant de lier les attributs d'une seule table.
     - Vous pouvez associer si vous le voulez une liste de tags aux données qui seront aspirées. Ils pourront faciliter les recherches dans le catalogue.
3. ***Data mapping*** : 
   - C'est sur cet écran que le mapping entre les données de la base externe et le modèle de REGARDS s’effectue. 
   - Dans le bloc ***Connection browser*** vous pouvez visualiser les tables externes.
   - Quel que soit le plugin de mapping que vous utilisez :
     - vous devrez faire la correspondance des attributs dans la section ***Links between model attributes and the connection***. 
     - dans la première colonne, vous trouverez les attributs communs à toutes les données dans REGARDS et les attributs spécifiques au modèle que vous avez importé. 
     - dans la deuxième colonne, vous devez remplir l'attribut correspondant dans votre table. Il y a des spécificités en fonction du plugin que vous avez choisi :
   - Si vous avez choisi le plugin ***postgresql-datasource*** :
     - tout d'abord, sélectionnez les tables qui seront mappées par REGARDS dans la clause FROM, WHERE, \[GROUP BY et HAVING]
     - ensuite, sélectionnez chaque attribut individuellement avec la clause SELECT 
   - Si vous avez choisi le plugin ***postgresql-datasource-single-table*** 
     - sélectionnez la table qui sera utilisée pour le mapping.
     - la section ***Links between model attributes and the connection***, vous propose deux manières de sélectionner les attributs. Vous pouvez directement choisir l'attribut de la table grâce à la liste déroulante ou cocher la case ***Use SQL*** pour écrire la clause du SELECT.
   - Cliquez ensuite sur le bouton ***Save***. Vous serez ensuite redirigé vers la liste des aspirations de données.
   - Vérifiez la création de votre aspiration de données. Une fois l'aspiration créée vous pouvez suivre son traitement dans [Monitoring](/user-documentation/5-crawler/monitor-crawling).
    
