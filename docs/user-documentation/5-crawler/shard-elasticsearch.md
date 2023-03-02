---
id: crawler-elasticsearch-shard
title: Configure ES Shard
slug: /user-guide/crawler/crawler-elasticsearch-shard
---

Elasticsearch a besoin de connaître le nombre de shard pour chaque tenant avant de créer et peupler l'index pour des questions de performance. 

:::warning Modifier cette valeur
Une fois l'index créé, il n'est pas possible de modifier cette valeur et il sera nécessaire de réinitialiser le catalogue, modifier les valeurs et réindexer toutes les données du projet.
:::

## Récupérer le poids moyen de chaque produit

### Supprimer des données anciennes

Il est possible de supprimer des données anciennes d'un index pour minimiser le nombre de produits supprimés (`docs.deleted`).  
La requête suivante réalise par exemple ce nettoyage pour un tenant nommée `projet1`.

```bash
curl -XPOST "localhost:9200/projet1/_forcemerge?only_expunge_deletes=true"
```

:::info Accéder à ElasticSearch
Ces commandes peuvent être exécutées depuis l'intérieur du container, en utilisant par exemple `./exec.sh rs-elasticsearch bash` si vous avez déployé REGARDS sous Docker SWARM
:::

### Récupérer le poids d'un index

Nous vous conseillons de récupérer dans un premier temps le nombre de données et le poids sur disque par index dans un environnement de qualification :

```bash
[admregards@tu-regards-q01 ~]$ curl "localhost:9200/_cat/indices/?pretty&human&v=true&bytes=b"
 index    pri (nombre de shard)    replica     docs.count docs.deleted     store.size   
projet1        5                     1             5792          134         13015653   
projet2        5                     1          1072726         1165       1302311564   
projet3        5                     1             9541           29         14493629   
projet4        5                     1             1464         1487         11822627   
projet5        5                     1             9727          682         18049712   
projet6        5                     1                5            1           209489   
projet7        5                     1           101177        96754        462412593   
projet8        5                     1              478          410          3222384   
projet9        5                     1                0            0             1130   
projet10       5                     1             4477           10          9388718   
projet11       5                     1             7379         2007         32460573   
projet12       5                     1             4347            0         11413269   
projet13       5                     1                0            0             1130   
projet14       5                     1               88           25          1385672   
projet15       5                     1              683            2          1236175   
projet16       5                     1              135           32           986165   
projet17       5                     1                0            0             1130   
projet18       5                     1              337           18          1838735   
projet19       1                     1                0            0             7440   
projet20       5                     1               33            2           304757   
projet21       5                     1                1            0            19660   
projet22       5                     1              613           79         17767088   
projet23       5                     1             7718          531         10858403   
projet24       5                     1             1146           40          4808399   
projet25       5                     1             1897           30          4467119   
projet26       5                     1               28            1           565170   
projet27       5                     1              405            9          3564503   
projet28       5                     1          4383957      1025929       7591603769   
projet29       5                     1          1009682       251896       1589853552   
projet30       5                     1              845            5          1904415   
```

## Méthode de calcul

Nous avons basé notre calcul du nombre de shard par index à l'aide de l'outil [Elaticsearch Calculator](https://gbaptista.github.io/elastic-calculator/).

### Poids par produit

Avec les données de qualif :  
`Poids par produit` = `Taille totale de l'index` / (`nb produit` + `nb produits supprimés`)

### Poids de toutes les données d'un projet

Puis calculer le poids de tous les produits  
`Poids index de prod (en Gb)` = `Poids par produit` * `Nb produit prod visé` / `b vers Gb`  

 

Par exemple :  
`1000 octect par produit` * `100 millions de produits` / 1073741824 = `93Go`  
Le poids de cet index en prod serait de 93Go

:::info
Pour rappel : `b vers Gb` = `1024 x 1024 x 1024` = `1073741824` 
:::

### Calcul nombre de shard

Il faut que le `Poids index de prod` / `nombre de shard` soit entre 13GB et 28GB  

Si on reprend l'exemple vu précédemment  
93 Go / 4 = 23 Go / shard  
93 Go / 5 = 18 Go / shard  
Donc 4 et 5 sont deux valeurs possible pour ce projet

## Enregistrer le nombre de shard souhaité

Pour finir, il est nécessaire d'enregistrer la valeur dans la configuration du microservice DAM.

Le nombre de shard (et de réplicas) peut être spécifié en créer un fichier `configuration-shard-projet1.rs-dam.json` avec le contenu suivant : 

```json
{
  "microservice": "rs-dam",
  "modules": [
    {
      "module": {
        "id": "dam",
        "name": "Data Management module",
        "description": "Manage Entities",
        "version": "1.6.0",
        "author": "REGARDS",
        "legalOwner": "CNES",
        "documentation": "https://github.com/RegardsOss"
      },
      "resetBeforeImport": false,
      "configuration": [
        {
          "key": "fr.cnes.regards.framework.modules.tenant.settings.domain.DynamicTenantSetting",
          "value": {
            "name": "index_number_of_shards",
            "description": "Number of shards used by the current tenant index",
            "value": "TODO",
            "defaultValue": "5",
            "className": "java.lang.Long"
          }
        },
        {
          "key": "fr.cnes.regards.framework.modules.tenant.settings.domain.DynamicTenantSetting",
          "value": {
            "name": "index_number_of_replicas",
            "description": "Number of replicas of each shard in the current tenant index",
            "value": "TODO",
            "defaultValue": "1",
            "className": "java.lang.Long"
          }
        }
      ]
    }
  ]
}
```

Puis remplacer la valeur `TODO` par la valeur souhaitée.  
Enfin, importer ce fichier de configuration en utilisant l'écran `Import et téléchargement de configuration de rs-dam` (`Microservices` > Carte `rs-dam` Action `Gérer les backups` > `Importer une configuration de ce microservice`).
