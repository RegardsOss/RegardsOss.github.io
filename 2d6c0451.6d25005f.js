(window.webpackJsonp=window.webpackJsonp||[]).push([[454],{2701:function(t,e,n){"use strict";n.d(e,"a",(function(){return b})),n.d(e,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var l=i.a.createContext({}),c=function(t){var e=i.a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},b=function(t){var e=c(t.components);return i.a.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return i.a.createElement(i.a.Fragment,{},e)}},d=i.a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,a=t.parentName,l=u(t,["components","mdxType","originalType","parentName"]),b=c(n),d=r,m=b["".concat(a,".").concat(d)]||b[d]||p[d]||o;return n?i.a.createElement(m,s(s({ref:e},l),{},{components:n})):i.a.createElement(m,s({ref:e},l))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var u in e)hasOwnProperty.call(e,u)&&(s[u]=e[u]);s.originalType=t,s.mdxType="string"==typeof t?t:r,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},526:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return a})),n.d(e,"metadata",(function(){return s})),n.d(e,"toc",(function(){return u})),n.d(e,"default",(function(){return c}));var r=n(3),i=n(7),o=(n(0),n(2701)),a={},s={unversionedId:"development/backend/regards/dam/api/generated-snippets/ModelAttributeControllerIT/bindFirstAttribute/response-fields",id:"version-1.4.0/development/backend/regards/dam/api/generated-snippets/ModelAttributeControllerIT/bindFirstAttribute/response-fields",isDocsHomePage:!1,title:"response-fields",description:"|Path|Type|Description|Constraints| |||||",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/dam/api/generated-snippets/ModelAttributeControllerIT/bindFirstAttribute/response-fields.md",slug:"/development/backend/regards/dam/api/generated-snippets/ModelAttributeControllerIT/bindFirstAttribute/response-fields",permalink:"/docs/1.4.0/development/backend/regards/dam/api/generated-snippets/ModelAttributeControllerIT/bindFirstAttribute/response-fields",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/dam/api/generated-snippets/ModelAttributeControllerIT/bindFirstAttribute/response-fields.md",version:"1.4.0"},u=[],l={toc:u};function c(t){var e=t.components,n=Object(i.a)(t,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"|Path|Type|Description|Constraints| |:--:|:--:|:---------:|:---------:|\n    |content.id| `Number` |Model attribute association identifier||\n    |content.attribute| `Object` |Model attribute association attribute|Must not be null|\n    |content.attribute.id| `Number` |Attribute Model identifier|Must be positive|\n    |content.attribute.name| `String` |Attribute name|Must match the regular expression `[a-zA-Z_][0-9a-zA-Z_]*`, Must not be null, Size must be between 1 and 32 inclusive|\n    |content.attribute.description| `String` |Attribute description||\n    |content.attribute.defaultValue| `String` |Attribute default value||\n    |content.attribute.type| `String` |Attribute type|Must not be null. Available values: STRING, INTEGER, DOUBLE, DATE_ISO8601, URL, BOOLEAN, STRING_ARRAY, INTEGER_ARRAY, DOUBLE_ARRAY, DATE_ARRAY, INTEGER_INTERVAL, DOUBLE_INTERVAL, DATE_INTERVAL, LONG, LONG_INTERVAL, LONG_ARRAY|\n    |content.attribute.unit| `String` |Attribute unit useful for number based attributes|Max length: 16 characters|\n    |content.attribute.precision| `Number` |Attribute precision useful for double based attributes||\n    |content.attribute.arraySize| `Number` |Attribute array size useful for array based attributes||\n    |content.attribute.fragment| `Object` |Attribute Fragment|Should respect Fragment structure|\n    |content.attribute.fragment.id| `Number` |Fragment identifier|Must be a whole number|\n    |content.attribute.fragment.name| `String` |Fragment Name|Must match the regular expression `[a-zA-Z_][0-9a-zA-Z_]*`, Must not be null, Size must be between 1 and 32 inclusive|\n    |content.attribute.fragment.description| `String` |Fragment description|Optional|\n    |content.attribute.fragment.version| `String` |Fragment Version|Size must be between 0 and 16 inclusive. Optional|\n    |content.attribute.alterable| `Boolean` |Whether this attribute can be altered by users|Defaults to true|\n    |content.attribute.optional| `Boolean` |Whether this attribute is optional|defaults to false|\n    |content.attribute.label| `String` |Attribute label|Must not be blank, Size must be between 0 and 20 inclusive|\n    |content.attribute.restriction| `Object` |Attribute applicable restriction||\n    |content.attribute.restriction.id| `Number` |Restriction identifier||\n    |content.attribute.restriction.type| `String` |Restriction type|Available values: NO_RESTRICTION, PATTERN, ENUMERATION, DATE_ISO8601, INTEGER_RANGE, LONG_RANGE, DOUBLE_RANGE, URL, GEOMETRY|\n    |content.attribute.restriction.min| `Number` |Minimum possible value|Apply to restriction type LONG_RANGE & INTEGER_RANGE & DOUBLE_RANGE|\n    |content.attribute.restriction.max| `Number` |Maximum possible value|Apply to restriction type LONG_RANGE & INTEGER_RANGE & DOUBLE_RANGE|\n    |content.attribute.restriction.minExcluded| `Boolean` |Whether the minimum values is to be excluded from the range|Defaults to false. Apply to restriction type LONG_RANGE & INTEGER_RANGE & DOUBLE_RANGE|\n    |content.attribute.restriction.maxExcluded| `Boolean` |Whether the maximum values is to be excluded from the range|Defaults to false. Apply to restriction type LONG_RANGE & INTEGER_RANGE & DOUBLE_RANGE|\n    |content.attribute.restriction.acceptableValues| `Array` |Acceptable values|Apply to restriction type ENUMERATION|\n    |content.attribute.restriction.pattern| `String` |Validation pattern|Apply to restriction type PATTERN|\n    |content.attribute.group| `String` |Attribute group for displaying purpose|Must match the regular expression `[a-zA-Z_][0-9a-zA-Z_]*`, Size must be between 1 and 32 inclusive|\n    |content.attribute.properties| `Array` |Custom attribute properties||\n    |content.attribute.properties[].id| `Number` |Attribute property identifier||\n    |content.attribute.properties[].key| `String` |Custom key||\n    |content.attribute.properties[].value| `String` |Custom value||\n    |content.attribute.dynamic| `Boolean` |Used in search request parsing only|Defaults to true|\n    |content.attribute.internal| `Boolean` |Used in search request parsing only|Defaults to false|\n    |content.attribute.jsonPath| `String` |Used in search request. Define the JSON path to the related values in entities||\n    |content.model| `Object` |Model attribute association model||\n    |content.model.id| `Number` |model identifier||\n    |content.model.name| `String` |model name|Must match the regular expression `[a-zA-Z_][0-9a-zA-Z_]*`, Must not be null, Size must be between 1 and 32 inclusive|\n    |content.model.description| `String` |model description||\n    |content.model.version| `String` |model version||\n    |content.model.type| `String` |model type|Must not be null. Available values: COLLECTION, DATA, DATASET|\n    |content.computationConf| `Object` |Computation plugin configuration|Should respect PluginConfiguration structure|\n    |content.pos| `Number` |Position (allows to sort attribute in model)|Should be a whole number. Defaults to 0|\n")))}c.isMDXComponent=!0}}]);