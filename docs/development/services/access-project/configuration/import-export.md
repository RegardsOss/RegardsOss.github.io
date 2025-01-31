---
title: Configuration Importation/Exportation
sidebar_label: Importation/Exportation
slug: /development/services/access-project/import-export
sidebar_position: 1
---

Microservices settings regroup a set of settings that are specific by [tenant](../../../concepts/03-multitenant.md) and
stored in the microservice database.

| Configuration type | Available | Description |
| ------------------ | --------- | ----------- |
| Import configuration in json format | True | |
| Export configuration in json format | True | |
| Reset configuration before import | False | Not implemented yet |

## Import/Export API

To configure some microservice settings for a specific tenant, you need to follow the [generic Import/Export service
configuration guide](../../common/import-export-configuration.md), it will help you understand the expected
JSON
file payload that you can send to the
[import configuration endpoint](../api-guides/rest/api-swagger.mdx#tag/module-manager-controller/operation/importConfiguration).

This configuration can also be imported or exported
through [administrator UI](../../../../user-documentation/2-project-configuration/microservices.md).

## Configuration for theme

| Name          | Type    | Description                                        |
|---------------|---------|----------------------------------------------------|
| name          | String  | Name of theme (maximum length 16)                  |
| active        | Boolean | Active theme is the default theme used for IHM     |
| visible       | Boolean | Theme is visible in order to choice it by the user |
| configuration | String  | Configuration of theme (JSON format)               |

## Configuration for module

| Name          | Type    | Description                                                                   |
|---------------|---------|-------------------------------------------------------------------------------|
| type          | String  | Type of module (maximum length 32)                                            |
| description   | String  | description of module (maximum length 64)                                     |
| applicationId | Boolean | Application identifier where the module must be displayed (maximum length 16) |
| container     | String  | The container of the application layout where the module must be displayed    |
| conf          | String  | Configuration of module                                                       |
| active        | Boolean | Active or not the module in the user IHM                                      |
| page          | Json    | Configuration of page                                                         |
| home          | Boolean | Does the page is the home page of the website ?                               |
| iconType      | String  | Type of icon (maximum length 128)                                             |
| customIconUrl | String  | Url for image of icon                                                         |
| title         | String  | Title in english and in french (JSON format)                                  |

## Configuration for the definition of UI plugin

| Name             | Type           | Description                                                                                    |
|------------------|----------------|------------------------------------------------------------------------------------------------|
| name             | String         | Name of definition for UI plugin (maximum length 32)                                           |
| type             | String         | Type of UI plugin (available value: CRITERIA or SERVICE)                                       |
| sourcePath       | String         | Source path of plugin written in JavaScript                                                    |
| iconUrl          | String         | Url for image of icon                                                                          |
| applicationModes | List of String | List of application modes (available values: ONE or MANY)                                      |
| entityTypes      | List of String | Entity types to which this plugin is applicable  (available values: COLLECTION, DATA, DATASET) |
| roleName         | String         | Minimal role to return the module on user IHM                                                  |

## Configuration for the definition of association for UI plugin

| Name                | Type    | Optional | Description                                                                           |
|---------------------|---------|----------|---------------------------------------------------------------------------------------|
| pluginConf          | Json    | No       | Configuration for the plugin                                                          |
| active              | Boolean | No       | Active or not the configuration                                                       |
| label               | String  | No       | Label of UI plugin in IHM (maximum length 32)                                         |
| linkedToAllEntities | Boolean | No       | Parameter to define if by default this plugin configuration is linked to all entities |
| conf                | String  | No       | Plugin configuration (JSON format)                                                    |
| pluginDefName       | String  | No       | Name for the definition of plugin                                                     |

### Example

```json title='rs-access-project configuration file example'
{
  "microservice": "rs-access-project",
  "modules": [
    {
      "module": {
        "id": "uiConfigurationModule",
        "name": "User Interface Configuration Module",
        "description": "Module handling anything to do with user interface configuration",
        "version": "1.6.0",
        "author": "CSSI",
        "legalOwner": "CNES",
        "documentation": "https://github.com/RegardsOss"
      },
      "resetBeforeImport": false,
      "configuration": [
        {
          "key": "fr.cnes.regards.modules.configuration.domain.Theme",
          "value": {
            "name": "Dark",
            "active": true,
            "visible": true,
            "configuration": "{\n  \"mainTheme\": {\n    \"palette\": {\n      \"backgroundImage\": \"/img/background.jpg\",\n      \"primary2Color\": \"#0097A7\",\n      \"primary3Color\": \"#757575\",\n      \"textColor\": \"#FFFFFF\",\n      \"secondaryTextColor\": \"rgba(255, 255, 255, 0.7)\",\n      \"alternateTextColor\": \"#303030\",\n      \"canvasColor\": \"#303030\",\n      \"borderColor\": \"rgba(255, 255, 255, 0.3)\",\n      \"disabledColor\": \"rgba(255, 255, 255, 0.3)\",\n      \"pickerHeaderColor\": \"rgba(255, 255, 255, 0.12)\",\n      \"clockCircleColor\": \"rgba(255, 255, 255, 0.12)\",\n      \"shadowColor\": \"rgba(0, 0, 0, 1)\",\n      \"accent2Color\": \"#2196f3\",\n      \"accent3Color\": \"#ff6d00\",\n      \"primary1Color\": \"#2196f3\",\n      \"accent1Color\": \"#ff6d00\"\n    },\n    \"themeName\": \"Dark\",\n    \"tableRow\": {\n      \"stripeColor\": \"#212121\",\n      \"hoverColor\": \"#424242\"\n    },\n    \"menuItem\": {\n      \"rightIconDesktopFill\": \"#fb8c00\",\n      \"selectedTextColor\": \"#ff6d00\",\n      \"hoverColor\": \"#1e88e5\"\n    },\n    \"badge\": {\n      \"primaryTextColor\": \"#FFFFFF\",\n      \"secondaryTextColor\": \"#FFFFFF\",\n      \"primaryColor\": \"#ff6d00\",\n      \"secondaryColor\": \"#2196f3\"\n    },\n    \"appBar\": {\n      \"textColor\": \"#FFFFFF\"\n    },\n    \"tabs\": {\n      \"textColor\": \"#fafafa\",\n      \"selectedTextColor\": \"#ff9100\"\n    },\n    \"raisedButton\": {\n      \"primaryTextColor\": \"#fafafa\",\n      \"secondaryTextColor\": \"#fafafa\"\n    },\n    \"stepper\": {\n      \"disabledTextColor\": \"#757575\",\n      \"textColor\": \"#ffffff\"\n    },\n    \"toggle\": {\n      \"thumbOnColor\": \"#8bc34a\",\n      \"thumbOffColor\": \"#f44336\",\n      \"thumbDisabledColor\": \"#757575\",\n      \"trackOffColor\": \"#f5f5f5\",\n      \"trackOnColor\": \"#f5f5f5\"\n    }\n  },\n  \"alternativeTheme\": {\n  }\n}"
          }
        },
        {
          "key": "fr.cnes.regards.modules.configuration.domain.Theme",
          "value": {
            "name": "Light",
            "active": false,
            "visible": true,
            "configuration": "{\n  \"mainTheme\": {\n    \"palette\": {\n      \"backgroundImage\": \"\",\n      \"primary1Color\": \"#00bcd4\",\n      \"primary2Color\": \"#0097a7\",\n      \"primary3Color\": \"#bdbdbd\",\n      \"accent1Color\": \"#ff4081\",\n      \"accent2Color\": \"#f5f5f5\",\n      \"accent3Color\": \"#9e9e9e\",\n      \"textColor\": \"rgba(0, 0, 0, 0.87)\",\n      \"secondaryTextColor\": \"rgba(0, 0, 0, 0.54)\",\n      \"alternateTextColor\": \"#ffffff\",\n      \"canvasColor\": \"#ffffff\",\n      \"borderColor\": \"#e0e0e0\",\n      \"disabledColor\": \"rgba(0, 0, 0, 0.3)\",\n      \"pickerHeaderColor\": \"#00bcd4\",\n      \"clockCircleColor\": \"rgba(0, 0, 0, 0.07)\",\n      \"shadowColor\": \"rgba(0, 0, 0, 1)\"\n    },\n    \"themeName\": \"Light\",\n    \"tableRow\": {\n      \"stripeColor\": \"#e0e0e0\"\n    }\n  },\n  \"alternativeTheme\": {\n  }\n}"
          }
        },
        {
          "key": "fr.cnes.regards.modules.configuration.domain.Module",
          "value": {
            "type": "description",
            "description": "Entities description",
            "applicationId": "user",
            "container": "page-top-header",
            "conf": "{\n  \"allowSearching\": true,\n  \"DATA\": {\n    \"showDescription\": true,\n    \"showTags\": true,\n    \"showCoupling\": true,\n    \"showLinkedDocuments\": true,\n    \"showLinkedEntities\": true,\n    \"showOtherVersions\": false,\n    \"showThumbnail\": true,\n    \"showQuicklooks\": true,\n    \"groups\": [\n      {\n        \"showTitle\": false,\n        \"title\": {\n          \"en\": \"\",\n          \"fr\": \"\"\n        },\n        \"elements\": [\n          {\n            \"attributes\": [\n              {\n                \"name\": \"label\"\n              }\n            ],\n            \"label\": {\n              \"en\": \"Label\",\n              \"fr\": \"Libellé\"\n            }\n          },\n          {\n            \"attributes\": [\n              {\n                \"name\": \"providerId\"\n              }\n            ],\n            \"label\": {\n              \"en\": \"Provider ID\",\n              \"fr\": \"ID fournisseur\"\n            }\n          }\n        ]\n      }\n    ],\n    \"attributeToDescriptionFiles\": [],\n    \"hideEmptyAttributes\": false\n  },\n  \"DATASET\": {\n    \"showDescription\": true,\n    \"showTags\": true,\n    \"showCoupling\": true,\n    \"showLinkedDocuments\": true,\n    \"showLinkedEntities\": true,\n    \"showOtherVersions\": false,\n    \"showThumbnail\": false,\n    \"showQuicklooks\": true,\n    \"groups\": [\n      {\n        \"showTitle\": false,\n        \"title\": {\n          \"en\": \"\",\n          \"fr\": \"\"\n        },\n        \"elements\": [\n          {\n            \"attributes\": [\n              {\n                \"name\": \"label\"\n              }\n            ],\n            \"label\": {\n              \"en\": \"Label\",\n              \"fr\": \"Libellé\"\n            }\n          },\n          {\n            \"attributes\": [\n              {\n                \"name\": \"providerId\"\n              }\n            ],\n            \"label\": {\n              \"en\": \"Provider ID\",\n              \"fr\": \"ID fournisseur\"\n            }\n          }\n        ]\n      }\n    ],\n    \"attributeToDescriptionFiles\": [],\n    \"hideEmptyAttributes\": false\n  },\n  \"COLLECTION\": {\n    \"showDescription\": true,\n    \"showTags\": true,\n    \"showCoupling\": true,\n    \"showLinkedDocuments\": true,\n    \"showLinkedEntities\": true,\n    \"showOtherVersions\": false,\n    \"showThumbnail\": false,\n    \"showQuicklooks\": true,\n    \"groups\": [\n      {\n        \"showTitle\": false,\n        \"title\": {\n          \"en\": \"\",\n          \"fr\": \"\"\n        },\n        \"elements\": [\n          {\n            \"attributes\": [\n              {\n                \"name\": \"label\"\n              }\n            ],\n            \"label\": {\n              \"en\": \"Label\",\n              \"fr\": \"Libellé\"\n            }\n          },\n          {\n            \"attributes\": [\n              {\n                \"name\": \"providerId\"\n              }\n            ],\n            \"label\": {\n              \"en\": \"Provider ID\",\n              \"fr\": \"ID fournisseur\"\n            }\n          }\n        ]\n      }\n    ],\n    \"attributeToDescriptionFiles\": [],\n    \"hideEmptyAttributes\": false\n  },\n  \"DOCUMENT\": {\n    \"showDescription\": true,\n    \"showTags\": true,\n    \"showCoupling\": true,\n    \"showLinkedDocuments\": true,\n    \"showLinkedEntities\": true,\n    \"showOtherVersions\": false,\n    \"showThumbnail\": false,\n    \"showQuicklooks\": true,\n    \"groups\": [\n      {\n        \"showTitle\": false,\n        \"title\": {\n          \"en\": \"\",\n          \"fr\": \"\"\n        },\n        \"elements\": [\n          {\n            \"attributes\": [\n              {\n                \"name\": \"label\"\n              }\n            ],\n            \"label\": {\n              \"en\": \"Label\",\n              \"fr\": \"Libellé\"\n            }\n          },\n          {\n            \"attributes\": [\n              {\n                \"name\": \"providerId\"\n              }\n            ],\n            \"label\": {\n              \"en\": \"Provider ID\",\n              \"fr\": \"ID fournisseur\"\n            }\n          }\n        ]\n      }\n    ],\n    \"attributeToDescriptionFiles\": [],\n    \"hideEmptyAttributes\": false\n  }\n}",
            "active": true
          }
        },
        {
          "key": "fr.cnes.regards.modules.configuration.domain.Module",
          "value": {
            "type": "search-results",
            "description": "Catalog",
            "applicationId": "user",
            "container": "page-content-module",
            "conf": "{\"primaryPane\":\"ALWAYS_EXPANDED\",\"facets\":{\"enabledFor\":{\"DATA\":true,\"DATASET\":true},\"initiallyEnabled\":true,\"list\":[]},\"restrictions\":{\"byDataset\":{\"type\":\"NONE\",\"selection\":[]},\"onData\":{\"lastVersionOnly\":false}},\"viewsGroups\":{\"DATA\":{\"enabled\":true,\"tabTitle\":{},\"initialMode\":\"TABLE\",\"enableDownload\":false,\"sorting\":[{\"attributes\":[{\"name\":\"label\"}]}],\"views\":{\"TABLE\":{\"enabled\":true,\"attributes\":[{\"attributes\":[{\"name\":\"files\"}],\"label\":{\"en\":\"Thumbnail\",\"fr\":\"Vignette\"}},{\"attributes\":[{\"name\":\"label\"}],\"label\":{\"en\":\"Label\",\"fr\":\"Libellé\"}},{\"attributes\":[{\"name\":\"providerId\"}],\"label\":{\"en\":\"Provider ID\",\"fr\":\"ID fournisseur\"}}]},\"QUICKLOOK\":{\"enabled\":true,\"attributes\":[{\"attributes\":[{\"name\":\"label\"}],\"label\":{\"en\":\"Label\",\"fr\":\"Libellé\"}},{\"attributes\":[{\"name\":\"providerId\"}],\"label\":{\"en\":\"Provider ID\",\"fr\":\"ID fournisseur\"}}]},\"MAP\":{\"enabled\":false,\"attributes\":[],\"initialViewMode\":\"MODE_3D\",\"mapEngine\":\"CESIUM\",\"layers\":[]}}},\"DATASET\":{\"enabled\":true,\"tabTitle\":{},\"initialMode\":\"TABLE\",\"sorting\":[],\"views\":{\"TABLE\":{\"enabled\":true,\"attributes\":[{\"attributes\":[{\"name\":\"label\"}],\"label\":{\"en\":\"Label\",\"fr\":\"Libellé\"}},{\"attributes\":[{\"name\":\"providerId\"}],\"label\":{\"en\":\"Provider ID\",\"fr\":\"ID fournisseur\"}}]}}}},\"criteriaGroups\":[{\"showTitle\":false,\"title\":{\"en\":\"\",\"fr\":\"\"},\"criteria\":[{\"pluginId\":7,\"label\":{\"en\":\"label\",\"fr\":\"label\"},\"conf\":{\"attributes\":{\"searchField\":\"label\"}}}]}]}",
            "active": true,
            "page": {
              "home": false,
              "iconType": "DEFAULT",
              "title": "{\"en\":\"Catalog\",\"fr\":\"Catalogue\"}"
            }
          }
        },
        {
          "key": "fr.cnes.regards.modules.configuration.domain.Module",
          "value": {
            "type": "order-history",
            "description": "orders",
            "applicationId": "user",
            "container": "page-content-module",
            "conf": "{\"primaryPane\":\"EXPANDED_COLLAPSIBLE\"}",
            "active": true,
            "page": {
              "home": false,
              "iconType": "DEFAULT",
              "title": "{\"fr\":\"Mes commandes\",\"en\":\"My orders\"}"
            }
          }
        },
        {
          "key": "fr.cnes.regards.modules.configuration.domain.Module",
          "value": {
            "type": "order-cart",
            "description": "cart",
            "applicationId": "user",
            "container": "page-content-module",
            "conf": "{\"showDatasets\":true,\"primaryPane\":\"EXPANDED_COLLAPSIBLE\"}",
            "active": true,
            "page": {
              "home": false,
              "iconType": "DEFAULT",
              "title": "{\"fr\":\"Mon panier\",\"en\":\"My basket\"}"
            }
          }
        },
        {
          "key": "fr.cnes.regards.modules.configuration.domain.Module",
          "value": {
            "type": "search-results",
            "description": "Catalog (default)",
            "applicationId": "user",
            "container": "page-content-module",
            "conf": "{\"primaryPane\":\"EXPANDED_COLLAPSIBLE\",\"facets\":{\"enabledFor\":{\"DATA\":true,\"DATASET\":true},\"initiallyEnabled\":true,\"list\":[]},\"restrictions\":{\"byDataset\":{\"type\":\"NONE\",\"selection\":[]},\"onData\":{\"lastVersionOnly\":false}},\"viewsGroups\":{\"DATA\":{\"enabled\":true,\"tabTitle\":{\"en\":\"Data\",\"fr\":\"Données\"},\"initialMode\":\"TABLE\",\"enableDownload\":true,\"enableRefresh\":true,\"sorting\":[],\"views\":{\"TABLE\":{\"enabled\":true,\"attributes\":[{\"attributes\":[{\"name\":\"files\",\"renderer\":\"defaultRenderer\"}],\"label\":{\"en\":\"Thumbnail\",\"fr\":\"Thumbnail\"}},{\"attributes\":[{\"name\":\"label\",\"renderer\":\"defaultRenderer\"}],\"label\":{\"en\":\"Label\",\"fr\":\"Libellé\"}},{\"attributes\":[{\"name\":\"id\",\"renderer\":\"defaultRenderer\"}],\"label\":{\"en\":\"Internal ID\",\"fr\":\"Identifiant\"}},{\"attributes\":[{\"name\":\"version\",\"renderer\":\"defaultRenderer\"}],\"label\":{\"en\":\"Version\",\"fr\":\"Version\"}}]},\"QUICKLOOK\":{\"enabled\":true,\"attributes\":[]},\"MAP\":{\"enabled\":true,\"attributes\":[],\"backgroundLayer\":{\"url\":\"https://c.tile.openstreetmap.org/\",\"type\":\"OSM\"},\"initialViewMode\":\"MODE_3D\",\"layers\":[{\"enabled\":true,\"background\":true,\"layerViewMode\":\"MODE_3D\",\"layerName\":\"osm\",\"url\":\"https://c.tile.openstreetmap.org/\",\"type\":\"OSM\"}],\"mapEngine\":\"CESIUM\"}},\"enableServices\":true},\"DATASET\":{\"enabled\":true,\"tabTitle\":{\"en\":\"Datasets\",\"fr\":\"Jeux de données\"},\"initialMode\":\"TABLE\",\"enableRefresh\":false,\"sorting\":[],\"views\":{\"TABLE\":{\"enabled\":true,\"attributes\":[{\"attributes\":[{\"name\":\"label\",\"renderer\":\"defaultRenderer\"}],\"label\":{\"en\":\"Libellé\",\"fr\":\"Label\"}}]}}}},\"criteriaGroups\":[{\"showTitle\":true,\"title\":{\"en\":\"Defaults\",\"fr\":\"Standards\"},\"criteria\":[{\"pluginId\":1,\"label\":{\"en\":\"label\",\"fr\":\"label\"},\"conf\":{\"attributes\":{\"searchField\":\"label\"}}},{\"pluginId\":2,\"label\":{\"en\":\"Search for\",\"fr\":\"Que recherchez vous ?\"},\"conf\":{\"attributes\":{}}}]}]}",
            "active": true,
            "page": {
              "home": false,
              "iconType": "DEFAULT",
              "title": "{\"en\":\"Catalog (default)\",\"fr\":\"Catalogue (default)\"}"
            }
          }
        },
        {
          "key": "fr.cnes.regards.modules.configuration.domain.Module",
          "value": {
            "type": "search-results",
            "description": "Catalogue de données 1994",
            "applicationId": "user",
            "container": "page-content-module",
            "conf": "{\"primaryPane\":\"EXPANDED_COLLAPSIBLE\",\"facets\":{\"enabledFor\":{\"DATA\":true,\"DATASET\":true},\"initiallyEnabled\":true,\"list\":[{\"attributes\":[{\"name\":\"properties.value_d1\",\"renderer\":\"defaultRenderer\"}],\"label\":{\"en\":\"Float\",\"fr\":\"Flottant\"}}]},\"restrictions\":{\"byDataset\":{\"type\":\"NONE\",\"selection\":[]}},\"viewsGroups\":{\"DATA\":{\"enabled\":true,\"tabTitle\":{\"en\":\"Data view\",\"fr\":\"Vue des données\"},\"initialMode\":\"QUICKLOOK\",\"enableDownload\":true,\"enableRefresh\":false,\"sorting\":[{\"attributes\":[{\"name\":\"label\",\"renderer\":\"defaultRenderer\"}]}],\"views\":{\"TABLE\":{\"enabled\":true,\"attributes\":[{\"attributes\":[{\"name\":\"files\",\"renderer\":\"defaultRenderer\"}],\"label\":{\"en\":\"Thumbnail\",\"fr\":\"Imagette\"}},{\"attributes\":[{\"name\":\"properties.weight\",\"renderer\":\"defaultRenderer\"}],\"label\":{\"en\":\"Weight\",\"fr\":\"Poids\"}},{\"attributes\":[{\"name\":\"label\",\"renderer\":\"defaultRenderer\"}],\"label\":{\"en\":\"Label\",\"fr\":\"Libellé\"}},{\"attributes\":[{\"name\":\"properties.value_d1\",\"renderer\":\"defaultRenderer\"},{\"name\":\"properties.value_l1\",\"renderer\":\"defaultRenderer\"}],\"label\":{\"en\":\"Values\",\"fr\":\"Valeurs\"}}],\"disableLabelDisplay\":false},\"QUICKLOOK\":{\"enabled\":true,\"attributes\":[{\"attributes\":[{\"name\":\"label\",\"renderer\":\"defaultRenderer\"}],\"label\":{\"en\":\"Label\",\"fr\":\"Libellé\"}},{\"attributes\":[{\"name\":\"properties.weight\",\"renderer\":\"defaultRenderer\"}],\"label\":{\"en\":\"Weight\",\"fr\":\"Poids\"}}]},\"MAP\":{\"enabled\":false,\"attributes\":[],\"mapEngine\":\"CESIUM\",\"layers\":[{\"layerName\":\"Layer\",\"enabled\":false,\"background\":false,\"layerViewMode\":\"MODE_3D\",\"url\":null}]}},\"enableServices\":false},\"DATASET\":{\"enabled\":true,\"tabTitle\":{\"en\":\"Dataset view\",\"fr\":\"Vue des jeux de données\"},\"initialMode\":\"TABLE\",\"enableRefresh\":false,\"sorting\":[{\"attributes\":[{\"name\":\"label\",\"renderer\":\"defaultRenderer\"}]}],\"views\":{\"TABLE\":{\"enabled\":true,\"attributes\":[{\"attributes\":[{\"name\":\"label\"}],\"label\":{\"en\":\"Label\",\"fr\":\"Libellé\"}},{\"attributes\":[{\"name\":\"properties.start_date\"},{\"name\":\"properties.end_date\",\"renderer\":\"defaultRenderer\"}],\"label\":{\"en\":\"Period\",\"fr\":\"Période\"}}],\"disableLabelDisplay\":false}}}},\"criteriaGroups\":[{\"showTitle\":false,\"title\":{\"en\":\"\",\"fr\":\"\"},\"criteria\":[{\"pluginId\":8,\"label\":{\"en\":\"Data with picture only\",\"fr\":\"Données avec image seulement\"},\"conf\":{\"attributes\":{}}}]}]}",
            "active": true,
            "page": {
              "home": false,
              "iconType": "DEFAULT",
              "title": "{\"en\":\"Test catalog 1994\",\"fr\":\"Catalogue de test 1994\"}"
            }
          }
        }
      ]
    },
    {
      "module": {
        "id": "uiPluginConfigurationModule",
        "name": "User Interface Plugins Configuration Module",
        "description": "Module handling anything to do with user interface plugins",
        "version": "1.6.0",
        "author": "CSSI",
        "legalOwner": "CNES",
        "documentation": "https://github.com/RegardsOss"
      },
      "resetBeforeImport": false,
      "configuration": [
        {
          "key": "fr.cnes.regards.modules.access.services.domain.ui.UIPluginDefinition",
          "value": {
            "name": "string-criteria",
            "type": "CRITERIA",
            "sourcePath": "/plugins/criterion/string/plugin.js",
            "applicationModes": [],
            "entityTypes": [],
            "roleName": "PUBLIC"
          }
        },
        {
          "key": "fr.cnes.regards.modules.access.services.domain.ui.UIPluginDefinition",
          "value": {
            "name": "full-text-criteria",
            "type": "CRITERIA",
            "sourcePath": "/plugins/criterion/full-text/plugin.js",
            "applicationModes": [],
            "entityTypes": [],
            "roleName": "PUBLIC"
          }
        },
        {
          "key": "fr.cnes.regards.modules.access.services.domain.ui.UIPluginDefinition",
          "value": {
            "name": "temporal-criteria",
            "type": "CRITERIA",
            "sourcePath": "/plugins/criterion/temporal/plugin.js",
            "applicationModes": [],
            "entityTypes": [],
            "roleName": "PUBLIC"
          }
        },
        {
          "key": "fr.cnes.regards.modules.access.services.domain.ui.UIPluginDefinition",
          "value": {
            "name": "two-temporal-criteria",
            "type": "CRITERIA",
            "sourcePath": "/plugins/criterion/two-temporal/plugin.js",
            "applicationModes": [],
            "entityTypes": [],
            "roleName": "PUBLIC"
          }
        },
        {
          "key": "fr.cnes.regards.modules.access.services.domain.ui.UIPluginDefinition",
          "value": {
            "name": "numerical-range-criteria",
            "type": "CRITERIA",
            "sourcePath": "/plugins/criterion/numerical-range-criteria/plugin.js",
            "applicationModes": [],
            "entityTypes": [],
            "roleName": "PUBLIC"
          }
        },
        {
          "key": "fr.cnes.regards.modules.access.services.domain.ui.UIPluginDefinition",
          "value": {
            "name": "geo-zone",
            "type": "CRITERIA",
            "sourcePath": "plugins/criterion/geo-zone/plugin.js",
            "applicationModes": [],
            "entityTypes": [],
            "roleName": "PUBLIC"
          }
        },
        {
          "key": "fr.cnes.regards.modules.access.services.domain.ui.UIPluginDefinition",
          "value": {
            "name": "fem-notify",
            "type": "SERVICE",
            "sourcePath": "/plugins/service/fem-notify/plugin.js",
            "applicationModes": [
              "ONE",
              "MANY"
            ],
            "entityTypes": [
              "DATA"
            ],
            "roleName": "PUBLIC"
          }
        },
        {
          "key": "fr.cnes.regards.modules.access.services.domain.ui.UIPluginDefinition",
          "value": {
            "name": "fem-edit",
            "type": "SERVICE",
            "sourcePath": "/plugins/service/fem-edit/plugin.js",
            "applicationModes": [
              "ONE",
              "MANY"
            ],
            "entityTypes": [
              "DATA"
            ],
            "roleName": "PUBLIC"
          }
        },
        {
          "key": "fr.cnes.regards.modules.access.services.service.ui.UIPluginDefConfAssociation",
          "value": {
            "pluginConf": {
              "active": true,
              "label": "Notification",
              "linkedToAllEntities": false,
              "conf": "{\"static\":{},\"dynamic\":{}}"
            },
            "pluginDefName": "fem-notify"
          }
        }
      ]
    }
  ]
}
```