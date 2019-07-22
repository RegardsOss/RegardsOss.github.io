#### Request

* **Code:** 200 OK

        **Headers:**

        `Pragma:no-cache`
        `X-XSS-Protection:1; mode=block`
        `Expires:0`
        `X-Frame-Options:DENY`
        `X-Content-Type-Options:nosniff`
        `Access-Control-Allow-Headers:authorization, content-type, scope`
        `Access-Control-Max-Age:3600`
        `Content-Type:application/json;charset=UTF-8`
        `Access-Control-Allow-Origin:*`
        `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`
        `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`

        **Content:**

        ```json
    
{
  "metadata" : {
    "size" : 20,
    "totalElements" : 8,
    "totalPages" : 1,
    "number" : 0
  },
  "content" : [ {
    "content" : {
      "id" : 1,
      "name" : "Dark",
      "active" : false,
      "configuration" : "{\n  \"mainTheme\": {\n    \"palette\": {\n      \"backgroundImage\": \"/img/background.jpg\",\n      \"primary2Color\": \"#0097A7\",\n      \"primary3Color\": \"#757575\",\n      \"textColor\": \"#FFFFFF\",\n      \"secondaryTextColor\": \"rgba(255, 255, 255, 0.7)\",\n      \"alternateTextColor\": \"#303030\",\n      \"canvasColor\": \"#303030\",\n      \"borderColor\": \"rgba(255, 255, 255, 0.3)\",\n      \"disabledColor\": \"rgba(255, 255, 255, 0.3)\",\n      \"pickerHeaderColor\": \"rgba(255, 255, 255, 0.12)\",\n      \"clockCircleColor\": \"rgba(255, 255, 255, 0.12)\",\n      \"shadowColor\": \"rgba(0, 0, 0, 1)\",\n      \"accent2Color\": \"#2196f3\",\n      \"accent3Color\": \"#ff6d00\",\n      \"primary1Color\": \"#2196f3\",\n      \"accent1Color\": \"#ff6d00\"\n    },\n    \"themeName\": \"Dark\",\n    \"tableRow\": {\n      \"stripeColor\": \"#212121\",\n      \"hoverColor\": \"#424242\"\n    },\n    \"menuItem\": {\n      \"rightIconDesktopFill\": \"#fb8c00\",\n      \"selectedTextColor\": \"#ff6d00\",\n      \"hoverColor\": \"#1e88e5\"\n    },\n    \"badge\": {\n      \"primaryTextColor\": \"#FFFFFF\",\n      \"secondaryTextColor\": \"#FFFFFF\",\n      \"primaryColor\": \"#ff6d00\",\n      \"secondaryColor\": \"#2196f3\"\n    },\n    \"appBar\": {\n      \"textColor\": \"#FFFFFF\"\n    },\n    \"tabs\": {\n      \"textColor\": \"#fafafa\",\n      \"selectedTextColor\": \"#ff9100\"\n    },\n    \"raisedButton\": {\n      \"primaryTextColor\": \"#fafafa\",\n      \"secondaryTextColor\": \"#fafafa\"\n    },\n    \"stepper\": {\n      \"disabledTextColor\": \"#757575\",\n      \"textColor\": \"#ffffff\"\n    },\n    \"toggle\": {\n      \"thumbOnColor\": \"#8bc34a\",\n      \"thumbOffColor\": \"#f44336\",\n      \"thumbDisabledColor\": \"#757575\",\n      \"trackOffColor\": \"#f5f5f5\",\n      \"trackOnColor\": \"#f5f5f5\"\n    }\n  },\n  \"alternativeTheme\": {\n  }\n}"
    },
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/themes/1"
    }, {
      "rel" : "update",
      "href" : "http://localhost:8080/themes/1"
    }, {
      "rel" : "delete",
      "href" : "http://localhost:8080/themes/1"
    } ]
  }, {
    "content" : {
      "id" : 2,
      "name" : "Light",
      "active" : false,
      "configuration" : "{\n  \"mainTheme\": {\n    \"palette\": {\n      \"backgroundImage\": \"\",\n      \"primary1Color\": \"#00bcd4\",\n      \"primary2Color\": \"#0097a7\",\n      \"primary3Color\": \"#bdbdbd\",\n      \"accent1Color\": \"#ff4081\",\n      \"accent2Color\": \"#f5f5f5\",\n      \"accent3Color\": \"#9e9e9e\",\n      \"textColor\": \"rgba(0, 0, 0, 0.87)\",\n      \"secondaryTextColor\": \"rgba(0, 0, 0, 0.54)\",\n      \"alternateTextColor\": \"#ffffff\",\n      \"canvasColor\": \"#ffffff\",\n      \"borderColor\": \"#e0e0e0\",\n      \"disabledColor\": \"rgba(0, 0, 0, 0.3)\",\n      \"pickerHeaderColor\": \"#00bcd4\",\n      \"clockCircleColor\": \"rgba(0, 0, 0, 0.07)\",\n      \"shadowColor\": \"rgba(0, 0, 0, 1)\"\n    },\n    \"themeName\": \"Light\",\n    \"tableRow\": {\n      \"stripeColor\": \"#e0e0e0\"\n    }\n  },\n  \"alternativeTheme\": {\n  }\n}"
    },
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/themes/2"
    }, {
      "rel" : "update",
      "href" : "http://localhost:8080/themes/2"
    }, {
      "rel" : "delete",
      "href" : "http://localhost:8080/themes/2"
    } ]
  }, {
    "content" : {
      "id" : 3,
      "name" : "Energy",
      "active" : false,
      "configuration" : "{\n  \"mainTheme\": {\n    \"palette\": {\n      \"backgroundImage\": \"\",\n      \"primary2Color\": \"#454545\",\n      \"accent1Color\": \"#64dd17\",\n      \"accent2Color\": \"#8ced4f\",\n      \"accent3Color\": \"#9e9e9e\",\n      \"textColor\": \"rgba(0, 0, 0, 0.87)\",\n      \"secondaryTextColor\": \"rgba(0, 0, 0, 0.54)\",\n      \"borderColor\": \"#e0e0e0\",\n      \"disabledColor\": \"rgba(0, 0, 0, 0.3)\",\n      \"shadowColor\": \"rgba(0, 0, 0, 1)\",\n      \"canvasColor\": \"rgba(245, 245, 245, 1)\",\n      \"alternateTextColor\": \"#ffffff\",\n      \"primary3Color\": \"rgba(0, 0, 0, 0.26)\",\n      \"primary1Color\": \"#212121\",\n      \"pickerHeaderColor\": \"#64dd17\",\n      \"clockCircleColor\": \"#eeeeee\"\n    },\n    \"themeName\": \"Xab\",\n    \"toolbar\": {\n      \"hoverColor\": \"#d84315\",\n      \"color\": \"#ffffff\"\n    },\n    \"toggle\": {\n      \"thumbOnColor\": \"#64dd17\",\n      \"thumbOffColor\": \"#9e9e9e\",\n      \"thumbDisabledColor\": \"#e0e0e0\",\n      \"trackOnColor\": \"#9ccc65\"\n    }\n  },\n  \"alternativeTheme\": {\n  }\n}"
    },
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/themes/3"
    }, {
      "rel" : "update",
      "href" : "http://localhost:8080/themes/3"
    }, {
      "rel" : "delete",
      "href" : "http://localhost:8080/themes/3"
    } ]
  }, {
    "content" : {
      "id" : 4,
      "name" : "Ocean",
      "active" : false,
      "configuration" : "{\n  \"mainTheme\": {\n    \"palette\": {\n      \"background\": \"\",\n      \"backgroundImage\": \"/img/background.jpg\",\n      \"primary2Color\": \"#0097A7\",\n      \"primary3Color\": \"#757575\",\n      \"textColor\": \"#FFFFFF\",\n      \"secondaryTextColor\": \"rgba(255, 255, 255, 0.7)\",\n      \"alternateTextColor\": \"#303030\",\n      \"canvasColor\": \"#00202f\",\n      \"borderColor\": \"rgba(255, 255, 255, 0.3)\",\n      \"disabledColor\": \"rgba(255, 255, 255, 0.3)\",\n      \"pickerHeaderColor\": \"rgba(255, 255, 255, 0.12)\",\n      \"clockCircleColor\": \"rgba(255, 255, 255, 0.12)\",\n      \"shadowColor\": \"rgba(0, 0, 0, 1)\",\n      \"accent3Color\": \"#ff6d00\",\n      \"primary1Color\": \"#2196f3\",\n      \"accent1Color\": \"#ff6d00\",\n      \"accent2Color\": \"#64b5f6\"\n    },\n    \"ACE-editor\": {\n      \"theme\": \"monokai\"\n    },\n    \"components:infinite-table\": {\n      \"lineHeight\": 50,\n      \"fixedColumnsWidth\": 48,\n      \"minRowCount\": 13,\n      \"maxRowCount\": 13,\n      \"minHeaderRowHeight\": 40,\n      \"multipleValuesSeparatorMargin\": \"0 10px\",\n      \"multipleValuesSeparatorHeight\": 14,\n      \"thumbnailPadding\": 5\n    },\n    \"forms-extension:validation\": {\n      \"validColor\": \"#4CAF50\",\n      \"warningColor\": \"#FF9800\",\n      \"errorColor\": \"#f44336\"\n    },\n    \"forms-extension:jsonField\": {\n      \"marginTop\": \"8px\",\n      \"padding\": \"24px 0 12px 0\",\n      \"lineHeight\": 1,\n      \"height\": \"140px\",\n      \"showLineNumbers\": true\n    },\n    \"forms-extension:dateField\": {\n      \"marginTop\": \"14px\",\n      \"innerMargins\": \"0 10px 0 0\",\n      \"height\": \"58px\",\n      \"textTop\": \"-13px\"\n    },\n    \"module:menu\": {\n      \"background\": \"rgba(0, 32, 47, 0.85)\",\n      \"borderWidth\": \"0 0 1px 0\",\n      \"borderColor\": \"rgba(255, 255, 255, 0.175)\",\n      \"borderStyle\": \"solid\",\n      \"navigationBarMaxHeight\": 36,\n      \"navigationItemTextTransform\": \"none\",\n      \"separatorBorderWidth\": 2,\n      \"separatorBorderRadius\": 2,\n      \"separatorBorderStyle\": \"solid\",\n      \"separatorMargin\": \"12px 10px\"\n    },\n    \"module:search-results\": {\n      \"minListRowCount\": 4,\n      \"maxListRowCount\": 4,\n      \"listLineHeight\": 160,\n      \"listRowsByColumnCount\": 4\n    },\n    \"module:storage-plugins\": {\n      \"usedSpaceColor\": \"#133e63\",\n      \"unusedSpaceColor\": \"#FFFFFF\",\n      \"chartBorderColor\": \"#94a4b2\",\n      \"chartBorderWidth\": \"1px\",\n      \"legendMarginTop\": 16,\n      \"legendItemMarginTop\": 8,\n      \"legendItemIconToText\": 10,\n      \"circleIconSize\": 12\n    },\n    \"module:order-history\": {\n      \"statusIconMargin\": \"0 7px 0 15px\",\n      \"color.PENDING\": \"#00BCD4\",\n      \"color.RUNNING\": \"white\",\n      \"color.WAITING_USER_DOWNLOAD\": \"#00BCD4\",\n      \"color.PAUSED\": \"#00BCD4\",\n      \"color.EXPIRED\": \"#9E9E9E\",\n      \"color.FAILED\": \"#f44336\",\n      \"color.DONE_WITH_WARNING\": \"#FF9800\",\n      \"color.DONE\": \"#9E9E9E\",\n      \"color.DELETED\": \"#9E9E9E\",\n      \"color.REMOVED\": \"#9E9E9E\",\n      \"color.UNKNOWN\": \"#9E9E9E\",\n      \"waiting.user.download.animation\": \"shake 3s infinite\",\n      \"color.file.PENDING\": \"#00BCD4\",\n      \"color.file.AVAILABLE\": \"white\",\n      \"color.file.ONLINE\": \"white\",\n      \"color.file.DOWNLOADED\": \"#9E9E9E\",\n      \"color.file.ERROR\": \"#f44336\",\n      \"color.file.UNKNOWN\": \"#9E9E9E\",\n      \"clearEmailFilterPadding\": \"7px 16px 7px 8px\"\n    },\n    \"components:button-anchor-scroll-top\": {\n      \"iconColor\": \"#303030\",\n      \"buttonColor\": \"#2196f3\",\n      \"buttonRight\": \"10px\",\n      \"buttonBottom\": \"10px\"\n    },\n    \"themeName\": \"Dark\",\n    \"tableRow\": {\n      \"stripeColor\": \"#0a415b\",\n      \"hoverColor\": \"#003047\",\n      \"selectedColor\": \"#214f6c\"\n    },\n    \"badge\": {\n      \"primaryTextColor\": \"#FFFFFF\",\n      \"secondaryTextColor\": \"#FFFFFF\",\n      \"primaryColor\": \"#ff6d00\",\n      \"secondaryColor\": \"#2196f3\"\n    },\n    \"appBar\": {\n      \"textColor\": \"#FFFFFF\"\n    },\n    \"tabs\": {\n      \"textColor\": \"#fafafa\",\n      \"selectedTextColor\": \"#ff9100\"\n    },\n    \"raisedButton\": {\n      \"primaryTextColor\": \"#fafafa\",\n      \"secondaryTextColor\": \"#fafafa\",\n      \"color\": \"#285165\",\n      \"disabledColor\": \"#184155\"\n    },\n    \"stepper\": {\n      \"disabledTextColor\": \"#757575\",\n      \"textColor\": \"#ffffff\"\n    },\n    \"toggle\": {\n      \"thumbOnColor\": \"#8bc34a\",\n      \"thumbOffColor\": \"#f44336\",\n      \"thumbDisabledColor\": \"#757575\",\n      \"trackOffColor\": \"#f5f5f5\",\n      \"trackOnColor\": \"#f5f5f5\"\n    },\n    \"menu\": {\n      \"backgroundColor\": \"#00202f\",\n      \"containerBackgroundColor\": \"#00202f\"\n    },\n    \"tableHeaderColumn\": {\n      \"height\": 48\n    },\n    \"module\": {\n      \"common\": {\n        \"titleMarginLeft\": 0\n      }\n    }\n  },\n  \"alternativeTheme\": {}\n}"
    },
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/themes/4"
    }, {
      "rel" : "update",
      "href" : "http://localhost:8080/themes/4"
    }, {
      "rel" : "delete",
      "href" : "http://localhost:8080/themes/4"
    } ]
  }, {
    "content" : {
      "id" : 17,
      "name" : "Theme",
      "active" : false,
      "configuration" : "{}"
    },
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/themes/17"
    }, {
      "rel" : "update",
      "href" : "http://localhost:8080/themes/17"
    }, {
      "rel" : "delete",
      "href" : "http://localhost:8080/themes/17"
    } ]
  }, {
    "content" : {
      "id" : 18,
      "name" : "Theme2",
      "active" : false,
      "configuration" : "{}"
    },
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/themes/18"
    }, {
      "rel" : "update",
      "href" : "http://localhost:8080/themes/18"
    }, {
      "rel" : "delete",
      "href" : "http://localhost:8080/themes/18"
    } ]
  }, {
    "content" : {
      "id" : 19,
      "name" : "Theme3",
      "active" : false,
      "configuration" : "{}"
    },
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/themes/19"
    }, {
      "rel" : "update",
      "href" : "http://localhost:8080/themes/19"
    }, {
      "rel" : "delete",
      "href" : "http://localhost:8080/themes/19"
    } ]
  }, {
    "content" : {
      "id" : 20,
      "name" : "NewTheme",
      "active" : true,
      "configuration" : "{}"
    },
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/themes/20"
    }, {
      "rel" : "update",
      "href" : "http://localhost:8080/themes/20"
    }, {
      "rel" : "delete",
      "href" : "http://localhost:8080/themes/20"
    } ]
  } ],
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/themes?page=0&size=20&sort=id,asc"
  } ]
}
        ```
