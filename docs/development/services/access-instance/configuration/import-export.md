---
title: Configuration Importation/Exportation
sidebar_label: Importation/Exportation
slug: /development/services/access-instance/import-export
sidebar_position: 1
---

Microservices settings regroup a set of settings that are specific by [tenant](../../../concepts/03-multitenant.md) and
stored in the microservice database.

## Import/Export API

To configure `rs-access-instance` settings, you need to follow the [generic Import/Export service
configuration guide](../../common/import-export-configuration.md), it will help you understand the expected
JSON
file payload that you can send to the
[import configuration endpoint](../api-guides/rest/api-swagger.mdx#tag/module-manager-controller/operation/importConfiguration).

| Configuration type                  | Available | Description         |
|-------------------------------------|-----------|---------------------|
| Import configuration in json format | True      |                     |
| Export configuration in json format | True      |                     |
| Reset configuration before import   | False     | Not implemented yet |

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

### Example

```json title='rs-access-instance configuration file example'
{
  "microservice": "rs-access-instance",
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
      "resetBeforeImport": true,
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
            "type": "menu",
            "description": "Portal menu",
            "applicationId": "portal",
            "container": "header",
            "conf": "{\n  \"title\": \"Regards portal interface\",\n  \"displayAuthentication\": false,\n  \"displayLocaleSelector\": true,\n  \"displayThemeSelector\": false\n}",
            "active": true
          }
        },
        {
          "key": "fr.cnes.regards.modules.configuration.domain.Module",
          "value": {
            "type": "projects-list",
            "description": "List of projects",
            "applicationId": "portal",
            "container": "content",
            "conf": "{}",
            "active": true
          }
        }
      ]
    }
  ]
}  
```