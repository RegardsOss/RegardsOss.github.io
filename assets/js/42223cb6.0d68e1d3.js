(window.webpackJsonp=window.webpackJsonp||[]).push([[669],{2708:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=i.a.createContext({}),c=function(e){var t=i.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=c(r),b=n,m=p["".concat(o,".").concat(b)]||p[b]||d[b]||a;return r?i.a.createElement(m,s(s({ref:t},l),{},{components:r})):i.a.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=b;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},744:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return c}));var n=r(3),i=r(7),a=(r(0),r(2708)),o={},s={unversionedId:"development/backend/regards/dam/api/generated-snippets/AttributeModelControllerIT/createUrlAttribute/request-fields",id:"development/backend/regards/dam/api/generated-snippets/AttributeModelControllerIT/createUrlAttribute/request-fields",isDocsHomePage:!1,title:"request-fields",description:"|Path|Type|Description|Constraints| |||||",source:"@site/docs/development/backend/regards/dam/api/generated-snippets/AttributeModelControllerIT/createUrlAttribute/request-fields.md",slug:"/development/backend/regards/dam/api/generated-snippets/AttributeModelControllerIT/createUrlAttribute/request-fields",permalink:"/docs/development/backend/regards/dam/api/generated-snippets/AttributeModelControllerIT/createUrlAttribute/request-fields",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/dam/api/generated-snippets/AttributeModelControllerIT/createUrlAttribute/request-fields.md",version:"current"},u=[],l={toc:u};function c(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"|Path|Type|Description|Constraints| |:--:|:--:|:---------:|:---------:|\n    |name| `String` |Attribute name|Must match the regular expression `[a-zA-Z_][0-9a-zA-Z_]*`, Must not be null, Size must be between 1 and 32 inclusive|\n    |description| `String` |Attribute description||\n    |defaultValue| `String` |Attribute default value||\n    |type| `String` |Attribute type|Must not be null. Available values: STRING, INTEGER, DOUBLE, DATE_ISO8601, URL, BOOLEAN, STRING_ARRAY, INTEGER_ARRAY, DOUBLE_ARRAY, DATE_ARRAY, INTEGER_INTERVAL, DOUBLE_INTERVAL, DATE_INTERVAL, LONG, LONG_INTERVAL, LONG_ARRAY|\n    |unit| `String` |Attribute unit useful for number based attributes|Max length: 16 characters|\n    |precision| `Number` |Attribute precision useful for double based attributes||\n    |arraySize| `Number` |Attribute array size useful for array based attributes||\n    |fragment| `Object` |Attribute Fragment|Should respect Fragment structure|\n    |fragment.id| `Number` |Fragment identifier|Must be a whole number|\n    |fragment.name| `String` |Fragment Name|Must match the regular expression `[a-zA-Z_][0-9a-zA-Z_]*`, Must not be null, Size must be between 1 and 32 inclusive|\n    |fragment.description| `String` |Fragment description|Optional|\n    |fragment.version| `String` |Fragment Version|Size must be between 0 and 16 inclusive. Optional|\n    |alterable| `Boolean` |Whether this attribute can be altered by users|Defaults to true|\n    |optional| `Boolean` |Whether this attribute is optional|defaults to false|\n    |label| `String` |Attribute label|Must not be blank, Size must be between 0 and 20 inclusive|\n    |restriction| `Object` |Attribute applicable restriction||\n    |restriction.type| `String` |Restriction type|Available values: NO_RESTRICTION, PATTERN, ENUMERATION, DATE_ISO8601, INTEGER_RANGE, LONG_RANGE, DOUBLE_RANGE, URL, GEOMETRY|\n    |restriction.min| `Number` |Minimum possible value|Apply to restriction type LONG_RANGE & INTEGER_RANGE & DOUBLE_RANGE|\n    |restriction.max| `Number` |Maximum possible value|Apply to restriction type LONG_RANGE & INTEGER_RANGE & DOUBLE_RANGE|\n    |restriction.minExcluded| `Boolean` |Whether the minimum values is to be excluded from the range|Defaults to false. Apply to restriction type LONG_RANGE & INTEGER_RANGE & DOUBLE_RANGE|\n    |restriction.maxExcluded| `Boolean` |Whether the maximum values is to be excluded from the range|Defaults to false. Apply to restriction type LONG_RANGE & INTEGER_RANGE & DOUBLE_RANGE|\n    |restriction.acceptableValues| `Array` |Acceptable values|Apply to restriction type ENUMERATION|\n    |restriction.pattern| `String` |Validation pattern|Apply to restriction type PATTERN|\n    |group| `String` |Attribute group for displaying purpose|Must match the regular expression `[a-zA-Z_][0-9a-zA-Z_]*`, Size must be between 1 and 32 inclusive|\n    |properties| `Array` |Custom attribute properties||\n    |properties[].key| `String` |Custom key||\n    |properties[].value| `String` |Custom value||\n    |dynamic| `Boolean` |Used in search request parsing only|Defaults to true|\n    |internal| `Boolean` |Used in search request parsing only|Defaults to false|\n    |jsonPath| `String` |Used in search request. Define the JSON path to the related values in entities||\n")))}c.isMDXComponent=!0}}]);