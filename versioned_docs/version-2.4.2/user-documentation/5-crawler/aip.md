---
id: crawler-aips
title: Crawl data from OAIS internal datasource
slug: /user-guide/crawler/configure-datasources/aips/
---

*Peupler le catalogue avec des données interne à REGARDS depuis le référentiel de produits OAIS.*

:::caution
Vous devez déjà avoir :

- créé des produits, référez-vous à la section [Import data - OAIS files](../4_1-ingest/introduction-ingest.md) si ce n'est déjà fait.
- créé [un modèle de données](../3-data-organization/models.md) commun de type _Data_ pour référencer vos aips
:::

---

Depuis le menu ***Add data*** et la carte ***Crawling***, cliquez sur ***Map data sources to internal models***

<div align="center">
    <img src="/images/user-documentation/v1.4/5-crawler/crawler-add-datasource.png" alt="add datasource" width="800"/> 
</div>

- Cliquez sur ***Add*** et sélectionnez l'option ***crawling GeoJSON SIPs***

<div align="center">
    <img src="/images/user-documentation/v1.4/5-crawler/crawler-add-datasource-aips.png" alt="aips" width="800"/> 
</div>

- Sur la page ***AIPs datasource creation***, complétez les champs suivants :
  - ***Name*** nom de la source de données,
  - ***Refresh rate (in second)*** détermine la durée entre deux scans de la datasource. Cela peut s'avérer utile lorsque vous ajoutez fréquemment des aips pour les référencer dans le catalogue,
  - ***Data model*** modèle de donnée utilisé pour aspirer les AIPs,
  - ***Sum of AIP files size*** attribut du modèle de données dans lequel la somme des fichiers AIPs sera contenue,
  - ***Tag list added to all data crawled*** correspond aux tags qui seront ajoutés à vos données aspirées. Pour rappel, les tags aussi appelés mots-clés sont des informations supplémentaires permettant de regrouper des données par thématique. Vous pourrez ainsi retrouver plus facilement les données dans le catalogue à l'aide des fonctions de tri.
  - ***Only crawl data containing these tags*** seules les données possédant ces tags seront aspirées. /!\ Faites attention, si vous ne précisez pas de tags, toutes les données seront aspirées.
  - Précisez ensuite la concordance entre les attributs de REGARDS et ceux du modèle d'aspiration. Il y a deux types d'attributs les statiques, communs à toutes les données de REGARDS et les attributs spécifiques à votre modèle. Pour chacun des attributs, vous devez indiquer le chemin dans le fichier JSON de l'AIP pour récupérer sa valeur. Par exemple :

<div align="center">
   <img src="/images/user-documentation/v1.4/5-crawler/crawler-add-datasource-aips-example.png" alt="mapping example" width="1000"/> 
</div>

extrait du fichier AIP

```json
{
	"content": {
		"id": 956,
		"aipId": "URN:AIP:DATA:example:4655fa2b-4070-3836-8e63-b136cadbeff9:V1",
		"state": "STORED",
		"aip": {
			"providerId": "test-2241-data-01",
			"sipId": "URN:SIP:DATA:example:4655fa2b-4070-3836-8e63-b136cadbeff9:V1",
			"version": 1,
			"ipType": "DATA",
			"id": "URN:AIP:DATA:example:4655fa2b-4070-3836-8e63-b136cadbeff9:V1",
			"geometry": null,
			"normalizedGeometry": null,
			"properties": {
				"contentInformations": [...]
				"descriptiveInformation": {
					"creationdate": "2015-10-20T16:21:15Z",
					"dataSetType": "chris_harvest_simple_model",
					"label": "Simple Model Sip 01",
					"doubleValue": 3.141592655,
					"longValue": 20100
				}
			},
			"type": "Feature"
		},
		[...]
	}
	"links": []
}
```

- Lorsque vous avez complété tous les champs, appuyez sur ***Save***
- Vérifiez que votre source de données se trouve dans la liste
- Rendez-vous ensuite dans la section ***[Monitor data crawling](monitor-crawling.md)*** pour suivre l'aspiration de vos AIPs.
