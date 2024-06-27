"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[10471],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>g});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=r.createContext({}),u=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=u(e.components);return r.createElement(l.Provider,{value:a},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=n,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return t?r.createElement(g,o(o({ref:a},c),{},{components:t})):r.createElement(g,o({ref:a},c))}));function g(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var s=t.length,o=new Array(s);o[0]=m;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[d]="string"==typeof e?e:n,o[1]=i;for(var u=2;u<s;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},72139:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var r=t(87462),n=(t(67294),t(3905));const s={id:"backend-dam-datasource-plugins",title:"Datasource plugin",sidebar_label:"Datasource",slug:"/development/backend/services/dam/plugins/datasource/"},o=void 0,i={unversionedId:"development/backend/regards/dam/plugins/backend-dam-datasource-plugins",id:"version-1.13.0/development/backend/regards/dam/plugins/backend-dam-datasource-plugins",title:"Datasource plugin",description:"Overview",source:"@site/versioned_docs/version-1.13.0/development/backend/regards/dam/plugins/data-source-plugins.md",sourceDirName:"development/backend/regards/dam/plugins",slug:"/development/backend/services/dam/plugins/datasource/",permalink:"/docs/1.13.0/development/backend/services/dam/plugins/datasource/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.13.0/development/backend/regards/dam/plugins/data-source-plugins.md",tags:[],version:"1.13.0",frontMatter:{id:"backend-dam-datasource-plugins",title:"Datasource plugin",sidebar_label:"Datasource",slug:"/development/backend/services/dam/plugins/datasource/"},sidebar:"dev",previous:{title:"Computed attribute",permalink:"/docs/1.13.0/development/backend/services/dam/plugins/computed-attribute/"},next:{title:"Bus message events",permalink:"/docs/1.13.0/development/backend/services/dam/events/"}},l={},u=[{value:"Overview",id:"overview",level:2},{value:"Interface",id:"interface",level:2},{value:"Implementation",id:"implementation",level:2}],c={toc:u},d="wrapper";function p(e){let{components:a,...t}=e;return(0,n.kt)(d,(0,r.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"This extension point allows you to crawl data from any source into the REGARDS catalog.")),(0,n.kt)("p",null,"REGARDS provides many implementation of this extension point :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-plugins/blob/master/dam-plugins/aip-datasource/src/main/java/fr/cnes/regards/modules/dam/plugins/datasources/AipDataSourcePlugin.java"},"AIPDataSourcePlugin")," : To crawl OAIS products (Ingest microservice)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-plugins/blob/master/dam-plugins/feature-datasource/src/main/java/fr/cnes/regards/modules/dam/plugins/datasources/FeatureDatasourcePlugin.java"},"AIPDataSourcePlugin")," : To crawl GeoJSON products (FEM microservice)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-plugins/blob/master/dam-plugins/postgresql-datasource/src/main/java/fr/cnes/regards/modules/dam/plugins/datasources/PostgreDataSourcePlugin.java"},"PostgreDataSourcePlugin")," : To crawl data from a postgres database"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-plugins/blob/master/dam-plugins/webservice-datasource/src/main/java/fr/cnes/regards/modules/dam/plugins/datasources/webservice/WebserviceDatasourcePlugin.java"},"WebserviceDatasourcePlugin")," : Plugin to use an OpenSearch compliant webservice as a REGARDS datasource.")),(0,n.kt)("h2",{id:"interface"},"Interface"),(0,n.kt)("p",null,"  ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dam/dam/dam-domain/src/main/java/fr/cnes/regards/modules/dam/domain/datasources/plugins/IDataSourcePlugin.java"},"IDataSourcePlugin")),(0,n.kt)("h2",{id:"implementation"},"Implementation"),(0,n.kt)("p",null,"To learn more about how to create your own plugin see ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.13.0/development/backend/framework/modules/plugins/"},"Plugins")),(0,n.kt)("p",null,"Here under is an exemple of how to implements this extension point to create your own business logic."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'@Plugin(id = "ExempleDataObjectsAccessPlugin", version = "4.0.0-SNAPSHOT",\n        description = "Allow access to dataObjects",\n        author = "REGARDS Team", contact = "regards@c-s.fr", licence = "LGPLv3.0", owner = "CSSI",\n        url = "https://github.com/RegardsOss")\npublic class DataSourcePlugin implements IDataSourcePlugin {\n\n  @PluginParameter(name = "modelName", label = "model name", description = "Associated data source model name")\n  private String modelName;\n\n  @PluginParameter(name = "refreshRate", defaultValue = "86400", optional = true,\n            label = "refresh rate", description = "Crawling refresh rate in seconds (minimum delay between two consecutive crawls)")\n  private Integer refreshRate;\n\n  @Override\n  public String getModelName() {\n    return modelName;\n  }\n\n  @Override\n  public int getRefreshRate() {\n    return refreshRate;\n  }\n\n  /**\n    * Returns a {@link Page} of new entities meeting the paging restriction provided in the {@code Pageable} object.\n    * @param tenant tenant to build URN\n    * @param pageable the pagination information\n    * @param date Allows to filter the new entities created after this date parameter (can be null)\n    * @return a page of entities\n    */\n  @Override\n  public Page<DataObjectFeature> findAll(String tenant, Pageable pageable, OffsetDateTime date) throws DataSourceException {\n    long totalElements = 0L;\n    List<DataObjectFeature> features = new ArrayList<>();\n    // ... here is the business code to retrieve the DataObjectFeatures to add into the REGARDS catalog.\n    // The features to returned are wrapped pages in order to handle a large number of features.\n    return new PageImpl<>(features, pageable, totalElements);\n  }\n}\n\n')))}p.isMDXComponent=!0}}]);