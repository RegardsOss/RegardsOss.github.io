"use strict";(self.webpackChunkRegardsOss_github_io=self.webpackChunkRegardsOss_github_io||[]).push([[71677],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,y=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return r?a.createElement(y,i(i({ref:t},l),{},{components:r})):a.createElement(y,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},98660:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=["components"],s={id:"backend-framework-starters-gson",title:"GSON starter",slug:"/development/backend/framework/starters/gson/"},p=void 0,c={unversionedId:"development/backend/framework/starters/backend-framework-starters-gson",id:"version-1.6.0/development/backend/framework/starters/backend-framework-starters-gson",isDocsHomePage:!1,title:"GSON starter",description:"Purpose",source:"@site/versioned_docs/version-1.6.0/development/backend/framework/starters/gson-starter.md",sourceDirName:"development/backend/framework/starters",slug:"/development/backend/framework/starters/gson/",permalink:"/docs/1.6.0/development/backend/framework/starters/gson/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.6.0/development/backend/framework/starters/gson-starter.md",tags:[],version:"1.6.0",frontMatter:{id:"backend-framework-starters-gson",title:"GSON starter",slug:"/development/backend/framework/starters/gson/"},sidebar:"version-1.6.0/dev",previous:{title:"GeoJSON starter",permalink:"/docs/1.6.0/development/backend/framework/starters/geojson/"},next:{title:"HATEOAS starter",permalink:"/docs/1.6.0/development/backend/framework/starters/hateoas/"}},l=[{value:"Purpose",id:"purpose",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Autoconfiguration",id:"autoconfiguration",children:[]},{value:"How to",id:"how-to",children:[{value:"Create type adapters or adapter factories",id:"create-type-adapters-or-adapter-factories",children:[]},{value:"Register a type adapter",id:"register-a-type-adapter",children:[]},{value:"Register a type adapter as a component",id:"register-a-type-adapter-as-a-component",children:[]},{value:"Register a type adapter factory",id:"register-a-type-adapter-factory",children:[]},{value:"Register a type adapter factory as a component",id:"register-a-type-adapter-factory-as-a-component",children:[]},{value:"Work with polymorphic classes",id:"work-with-polymorphic-classes",children:[]},{value:"Exclude field from serialization",id:"exclude-field-from-serialization",children:[]}]}],d={toc:l};function u(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"purpose"},"Purpose"),(0,o.kt)("p",null,"This starter is making easier the use of GSON with new features."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},"# Scan package for annotated adapters or factories\nregards.gson.scan-prefix=fr.cnes.regards\n")),(0,o.kt)("p",null,"To avoid conflict between Jackson and GSON with SPRING, set the following property :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},"spring.http.converters.preferred-json-mapper=gson\n")),(0,o.kt)("h2",{id:"autoconfiguration"},"Autoconfiguration"),(0,o.kt)("p",null,"Starter autoconfigures a ",(0,o.kt)("strong",{parentName:"p"},"GsonHttpMessageConverter")," automatically injected in available HTTP message converters."),(0,o.kt)("p",null,"Il autoconfigures a ",(0,o.kt)("inlineCode",{parentName:"p"},"Gson")," instance with default adapters and filters plus the introspected ones."),(0,o.kt)("h2",{id:"how-to"},"How to"),(0,o.kt)("h3",{id:"create-type-adapters-or-adapter-factories"},"Create type adapters or adapter factories"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/google/gson"},"GSON reference project"),"."),(0,o.kt)("h3",{id:"register-a-type-adapter"},"Register a type adapter"),(0,o.kt)("p",null,"Just create a class extending ",(0,o.kt)("inlineCode",{parentName:"p"},"TypeAdapter")," and annotated with ",(0,o.kt)("inlineCode",{parentName:"p"},"GsonTypeAdapter")," with a ",(0,o.kt)("strong",{parentName:"p"},"no arg constructor")," :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"@GsonTypeAdapter(adapted = Your.class)\npublic class LinkAdapter extends TypeAdapter<Your> {\n    ...\n}\n")),(0,o.kt)("h3",{id:"register-a-type-adapter-as-a-component"},"Register a type adapter as a component"),(0,o.kt)("p",null,"Just create a class extending ",(0,o.kt)("inlineCode",{parentName:"p"},"TypeAdapter")," and annotated with ",(0,o.kt)("inlineCode",{parentName:"p"},"GsonTypeAdapterBean")," :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"@GsonTypeAdapterBean(adapted = Your.class)\npublic class LinkAdapter extends TypeAdapter<Your> {\n\n    @Autowired\n    private MyService service;\n    ...\n}\n")),(0,o.kt)("h3",{id:"register-a-type-adapter-factory"},"Register a type adapter factory"),(0,o.kt)("p",null,"Just create a class implementing ",(0,o.kt)("inlineCode",{parentName:"p"},"TypeAdapterFactory")," and annotated with ",(0,o.kt)("inlineCode",{parentName:"p"},"GsonTypeAdapterFactory")," with a ",(0,o.kt)("strong",{parentName:"p"},"no arg constructor"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"@GsonTypeAdapterFactory\npublic class YourFactory implements TypeAdapterFactory {\n    ...\n}\n")),(0,o.kt)("h3",{id:"register-a-type-adapter-factory-as-a-component"},"Register a type adapter factory as a component"),(0,o.kt)("p",null,"Just create a class implementing ",(0,o.kt)("inlineCode",{parentName:"p"},"TypeAdapterFactory")," and annotated with ",(0,o.kt)("inlineCode",{parentName:"p"},"GsonTypeAdapterFactoryBean")," (or ",(0,o.kt)("inlineCode",{parentName:"p"},"Component"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"@GsonTypeAdapterFactoryBean\npublic class YourFactory implements TypeAdapterFactory {\n\n    @Autowired\n    private MyService service;\n    ...\n}\n")),(0,o.kt)("h3",{id:"work-with-polymorphic-classes"},"Work with polymorphic classes"),(0,o.kt)("h4",{id:"register-a-gsonable-polymorphic-factory"},"Register a ",(0,o.kt)("inlineCode",{parentName:"h4"},"Gsonable")," polymorphic factory"),(0,o.kt)("p",null,"Just annotate the top interface or abstract class of a hierarchical set of classes with ",(0,o.kt)("inlineCode",{parentName:"p"},"Gsonable"),". Under the hood, the starter will register a dynamically created ",(0,o.kt)("inlineCode",{parentName:"p"},"PolymorphicTypeAdapterFactory"),". You optionnaly can specify the discriminator name in ",(0,o.kt)("inlineCode",{parentName:"p"},"Gsonable")," and the discriminator values on sub types through ",(0,o.kt)("inlineCode",{parentName:"p"},"GsonDiscriminator"),"."),(0,o.kt)("p",null,"During GSON serialization, factory will inject a discriminator property whose name is either ",(0,o.kt)("inlineCode",{parentName:"p"},"@type@")," or the specified one and the value is either the class name or the specified discriminator value.",(0,o.kt)("br",{parentName:"p"}),"\n","During deserialization, factory build the target object according to its discriminator value."),(0,o.kt)("h4",{id:"register-a-custom-polymorphic-factory"},"Register a custom polymorphic factory"),(0,o.kt)("p",null,"Just create a class extending ",(0,o.kt)("inlineCode",{parentName:"p"},"PolymorphicTypeAdapterFactory")," and annotated with either ",(0,o.kt)("inlineCode",{parentName:"p"},"GsonTypeAdapterFactory")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"GsonTypeAdapterFactoryBean"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@GsonTypeAdapterFactory\npublic class YourAdapterFactory extends PolymorphicTypeAdapterFactory<YourInterface> {\n\n    public EntityAdapterFactory() {\n        super(YourInterface.class, "discriminatorName", true);\n        registerSubtype(YourClass1.class, "disVal1");\n        registerSubtype(YourClass2.class, "disVal2");\n    }\n}\n')),(0,o.kt)("h3",{id:"exclude-field-from-serialization"},"Exclude field from serialization"),(0,o.kt)("p",null,"Just annotate field with ",(0,o.kt)("inlineCode",{parentName:"p"},"GsonIgnore")," to exclude a particular field."))}u.isMDXComponent=!0}}]);