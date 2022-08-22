"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[4412],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),m=n,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return a?r.createElement(g,s(s({ref:t},u),{},{components:a})):r.createElement(g,s({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},73670:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={id:"backend-dam-datasource-plugins",title:"Datasource plugin",sidebar_label:"Datasource",slug:"/development/backend/services/dam/plugins/datasource/"},s=void 0,i={unversionedId:"development/backend/regards/dam/plugins/backend-dam-datasource-plugins",id:"version-1.6.0/development/backend/regards/dam/plugins/backend-dam-datasource-plugins",title:"Datasource plugin",description:"Overview",source:"@site/versioned_docs/version-1.6.0/development/backend/regards/dam/plugins/data-source-plugins.md",sourceDirName:"development/backend/regards/dam/plugins",slug:"/development/backend/services/dam/plugins/datasource/",permalink:"/docs/1.6.0/development/backend/services/dam/plugins/datasource/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.6.0/development/backend/regards/dam/plugins/data-source-plugins.md",tags:[],version:"1.6.0",frontMatter:{id:"backend-dam-datasource-plugins",title:"Datasource plugin",sidebar_label:"Datasource",slug:"/development/backend/services/dam/plugins/datasource/"},sidebar:"version-1.6.0/dev",previous:{title:"Computed attribute",permalink:"/docs/1.6.0/development/backend/services/dam/plugins/computed-attribute/"},next:{title:"Bus message events",permalink:"/docs/1.6.0/development/backend/services/dam/events/"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Interface",id:"interface",level:2},{value:"Implementation",id:"implementation",level:2}],u={toc:c};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"This extension point allows you to crawl data from any source into the REGARDS catalog.")),(0,n.kt)("p",null,"REGARDS provides many implementation of this extension point :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-plugins/blob/master/datasource-plugins/aip-datasource/src/main/java/fr/cnes/regards/modules/dam/plugins/datasources/AipDataSourcePlugin.java"},"AIPDataSourcePlugin")," : To crawl data from the AIP storage microservice (rs-storage)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-plugins/blob/master/datasource-plugins/postgresql-datasource/src/main/java/fr/cnes/regards/modules/dam/plugins/datasources/PostgreDataSourcePlugin.java"},"PostgreDataSourcePlugin")," : To crawl data from a postgres database"),(0,n.kt)("li",{parentName:"ul"},"WebServicePlugin : ",(0,n.kt)("inlineCode",{parentName:"li"},"Not released yet")," To crawl data from a standard opensearch web service with geojson response format.")),(0,n.kt)("h2",{id:"interface"},"Interface"),(0,n.kt)("p",null,"  ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dam/dam/dam-domain/src/main/java/fr/cnes/regards/modules/dam/domain/datasources/plugins/IDataSourcePlugin.java"},"IDataSourcePlugin")),(0,n.kt)("h2",{id:"implementation"},"Implementation"),(0,n.kt)("p",null,"To learn more about how to create your own plugin see ",(0,n.kt)("a",{parentName:"p",href:"../../../../framework/modules/plugins/"},"Plugins")),(0,n.kt)("p",null,"Here under is an exemple of how to implements this extension point to create your own business logic."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'@Plugin(id = "ExempleDataObjectsAccessPlugin", version = "4.0.0-SNAPSHOT",\n        description = "Allow access to dataObjects",\n        author = "REGARDS Team", contact = "regards@c-s.fr", licence = "LGPLv3.0", owner = "CSSI",\n        url = "https://github.com/RegardsOss")\npublic class DataSourcePlugin implements IDataSourcePlugin {\n\n  @PluginParameter(name = "modelName", label = "model name", description = "Associated data source model name")\n  private String modelName;\n\n  @PluginParameter(name = "refreshRate", defaultValue = "86400", optional = true,\n            label = "refresh rate", description = "Crawling refresh rate in seconds (minimum delay between two consecutive crawls)")\n  private Integer refreshRate;\n\n  @Override\n  public String getModelName() {\n    return modelName;\n  }\n\n  @Override\n  public int getRefreshRate() {\n    return refreshRate;\n  }\n\n  /**\n    * Returns a {@link Page} of new entities meeting the paging restriction provided in the {@code Pageable} object.\n    * @param tenant tenant to build URN\n    * @param pageable the pagination information\n    * @param date Allows to filter the new entities created after this date parameter (can be null)\n    * @return a page of entities\n    */\n  @Override\n  public Page<DataObjectFeature> findAll(String tenant, Pageable pageable, OffsetDateTime date) throws DataSourceException {\n    long totalElements = 0L;\n    List<DataObjectFeature> features = new ArrayList<>();\n    // ... here is the business code to retrieve the DataObjectFeatures to add into the REGARDS catalog.\n    // The features to returned are wrapped pages in order to handle a large number of features.\n    return new PageImpl<>(features, pageable, totalElements);\n  }\n}\n\n')))}d.isMDXComponent=!0}}]);