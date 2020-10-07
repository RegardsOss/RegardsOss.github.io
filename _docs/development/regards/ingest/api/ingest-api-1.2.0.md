# Note de mise à jour d'interface de soumission des SIPs

## Modification de format des metadonnées à envoyer

```diff
    {
  "metadata" : {
+   "sessionOwner" : "sessionOwner",
    "session" : "session",
+   "ingestChain" : "DefaultProcessingChain",
-   "processing" : "DefaultProcessingChain",
+   "storages" : [ {
+      "pluginBusinessId" : "disk",
+      "targetTypes" : [ ]
+   } ],
+   "categories" : [ "CAT" ]
  },
```

Désormais il est de la responsabilité du fournisseur d'indiquer ou stocker les données dans la section storage avec les informations :   
 - `pluginBusinessId` : Nom de l'espace de stockage configuré dans l'instance REGARDS ou stocker les fichiers de données et de métadonnées associés.  
 - `targetTypes` : [RAWDATA|QUICKLOOK_SD|QUICKLOOK_MD|QUICKLOOK_HD|DOCUMENT|THUMBNAIL|OTHER|AIP|DESCRIPTION] Ce champ peut êre laissé vide, dans le cas ou tous les types de fichiers sont à stocker sur cet espace de stockage. Ce paramètre permet uniquement de stocker sur divers espaces de stockage les divers types de fichiers.  
- `categories` : Nouveau paramètre permettant d'ajouter des mot-clefs métier à chaque AIP généré et catalogué. Ces mot-clefs peuvent ensuite être utilisé pour le regroupement des données dans les jeux de données.  

## Modification de format des SIPs à envoyer
```diff
  {
    "ipType" : "DATA",
    "id" : "SIP_001",
    "geometry" : {... },
    "normalizedGeometry" : null,
    "properties" : {
       "contentInformations" : [ {
        "representationInformation" : { ... },
        "dataObject" : {
          "regardsDataType" : "RAWDATA",
+          "locations" : [ {
+            "url" : "file:/app_to_build/ingest/ingest-rest/data1.fits"
+          } ],
-         "urls" : [ "file:/app_to_build/ingest/ingest-rest/data1.fits" ],
-         "reference" : false,
          "filename" : "data1.fits",
          "algorithm" : "MD5",
          "checksum" : "b463726cfbb52d47e432bedf08edbec3",
          "fileSize" : 12345
        }
      } ],
      "pdi" : { ... }
    },
    "type" : "Feature",
    "bbox" : [ 19.0, 93.0 ]
  } ],
  "type" : "FeatureCollection"
}
```
La modification sur le format des SIP concerne la facon de définir l'emplacement des fichiers. Désormais le paramètre `locations` permet de définir de multiples espaces  ou se trouve le fichier avec :  
 - `url` : URL d'accès au fichier  
 - `storage` : paramètre optionel permettant de préciser un espace de stockage ou le fichier est déjà stocké. Lorsque ce paramètre est renseigné, REGARDS ne stockera pas la donnée considérant que la donnée est déjà stocké à cette endroit. Dans le cas contraire si ce paramètre n'est pas renseigné, alors REGARDS récupérera le fichier à partir de l'url fourni pour le stocker sur le ou les espaces de stockage configurés dans la partie metadata de la requête.  

## API REST

Il est toujours possible de soumettre des SIPs au service INGEST de REGARDS par API REST en version 1.2.0. Cette interface sera conservée dans les versions ultérieures de REGARDS.  

Le endpoint est https://\<hote\>/api/v1/rs-ingest/sips en POST avec le body :  
```json
{
  "metadata": { ... },
  "features": [ ... ]
}
```

Ce endpoint demande un token d'authentification passé soit dans le header de la requête HTTP :  
```sh
curl -X POST https://\<hote\>/api/v1/rs-ingest/sips?token=\<token\> --data-binary @request.json -H "Authorization : Bearer \<token\>"
```

Ou bien en query paramètre de la requête  
```sh
curl -X POST https://\<hote\>/api/v1/rs-ingest/sips?token=\<token\> --data-binary @request.json
```

Ce token d'authentification s'obtient auprès du service d'authentification de REGARDS comme suit :  
```sh
curl -X POST "https://\<hote\>/api/v1/rs-authentication/oauth/token?grant_type=password&username=user&password=password&scope=project" \
	-H 'Authorization: Basic Y2xpZW50OnNlY3JldA==' -H 'Accept: application/json, text/plain'
```

Le traitement de la soumission des SIPs au travers de ce endpoint est asynchrone, de ce fait la réponse renvoi l'état d'acceptation ou de refus des divers SIP. Pour les SIP acceptés, l'identifiant de la requête d'ingestion en cours de traitement est fournie. Pour les SIP refusés la raison du refus est fournie.

Les retours de cette interface sont :
- code 500 : Erreur interne du service
- code 200 : Demande bien prise en compte avec le body :
```json
{
  "granted" : {
    "SIP_001" : "68d5481b-f2ba-4bce-91d0-a3542443daf4"
  },
  "denied" : { },
  "messages" : [ "SIP Collection ingestion scheduled" ],
  "sessionOwner" : "sessionOwner",
  "session" : "session"
}
```
Les paramètres du body sont :  
 - granted : pour chaque SIP soumis avec succès un élément est ajouté de type "id du SIP fourni" : "Identifiant de la requête d'ingestion soumise"  
 - denied : pour chaque SIP refusé un élément est ajouté de type "providerId" : "raison du refus"  


## API bus de message AMPQ

Depuis la version 1.0.0 de REGARDS il est possbile désormais de soummetre les SIPs au service INGEST par bus de message.`Cette solution est désormais à privilégier car plus performante`  

Pour ce faire, il faut envoyer un message dans le format décrit ci-dessous sur la queue d'échange du service RabbitMQ de l'instance de REGARDS : 
`regards.broadcast.fr.cnes.regards.modules.ingest.service.flow.IngestRequestFlowHandler`

`Note` : Pour pouvoir publier sur la queue de messages il faut s'authentifier auprès du bus de messages avec le couple login/password configuré pour REGARDS sur le serveur RabbitMQ. 

Le corp du message est le même que pour l'interface REST à l'exception que `un seul SIP est associé à un message`.

```diff
    {
  "metadata" : {
   "sessionOwner" : "sessionOwner",
    "session" : "session",
   "ingestChain" : "DefaultProcessingChain",
   "processing" : "DefaultProcessingChain",
   "storages" : [ {
      "pluginBusinessId" : "disk",
      "targetTypes" : [ ]
   } ],
   "categories" : [ "CAT" ]
  },
- "features" : [ {
- } ]
+ "sip": {
    "ipType" : "DATA",
    "id" : "SIP_001",
    "geometry" : { ... },
    "normalizedGeometry" : null,
    "properties" : { ... },
    "type" : "Feature",
    "bbox" : [ 19.0, 93.0 ]
+ }
```


