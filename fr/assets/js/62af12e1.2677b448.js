(window.webpackJsonp=window.webpackJsonp||[]).push([[1021],{1093:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return l}));var a=r(3),n=r(7),o=(r(0),r(2704)),i={id:"backend-framework-starters-gson",title:"GSON starter",slug:"/development/backend/framework/starters/gson/"},c={unversionedId:"development/backend/framework/starters/backend-framework-starters-gson",id:"development/backend/framework/starters/backend-framework-starters-gson",isDocsHomePage:!1,title:"GSON starter",description:"Purpose",source:"@site/docs/development/backend/framework/starters/gson-starter.md",slug:"/development/backend/framework/starters/gson/",permalink:"/fr/docs/development/backend/framework/starters/gson/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/framework/starters/gson-starter.md",version:"current",sidebar:"dev",previous:{title:"GeoJSON starter",permalink:"/fr/docs/development/backend/framework/starters/geojson/"},next:{title:"HATEOAS starter",permalink:"/fr/docs/development/backend/framework/starters/hateoas/"}},p=[{value:"Purpose",id:"purpose",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Autoconfiguration",id:"autoconfiguration",children:[]},{value:"How to",id:"how-to",children:[{value:"Create type adapters or adapter factories",id:"create-type-adapters-or-adapter-factories",children:[]},{value:"Register a type adapter",id:"register-a-type-adapter",children:[]},{value:"Register a type adapter as a component",id:"register-a-type-adapter-as-a-component",children:[]},{value:"Register a type adapter factory",id:"register-a-type-adapter-factory",children:[]},{value:"Register a type adapter factory as a component",id:"register-a-type-adapter-factory-as-a-component",children:[]},{value:"Work with polymorphic classes",id:"work-with-polymorphic-classes",children:[]},{value:"Exclude field from serialization",id:"exclude-field-from-serialization",children:[]}]}],s={toc:p};function l(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"purpose"},"Purpose"),Object(o.b)("p",null,"This starter is making easier the use of GSON with new features."),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-properties"},"# Scan package for annotated adapters or factories\nregards.gson.scan-prefix=fr.cnes.regards\n")),Object(o.b)("p",null,"To avoid conflict between Jackson and GSON with SPRING, set the following property :"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-properties"},"spring.http.converters.preferred-json-mapper=gson\n")),Object(o.b)("h2",{id:"autoconfiguration"},"Autoconfiguration"),Object(o.b)("p",null,"Starter autoconfigures a ",Object(o.b)("strong",{parentName:"p"},"GsonHttpMessageConverter")," automatically injected in available HTTP message converters."),Object(o.b)("p",null,"Il autoconfigures a ",Object(o.b)("inlineCode",{parentName:"p"},"Gson")," instance with default adapters and filters plus the introspected ones."),Object(o.b)("h2",{id:"how-to"},"How to"),Object(o.b)("h3",{id:"create-type-adapters-or-adapter-factories"},"Create type adapters or adapter factories"),Object(o.b)("p",null,"See ",Object(o.b)("a",{parentName:"p",href:"https://github.com/google/gson"},"GSON reference project"),"."),Object(o.b)("h3",{id:"register-a-type-adapter"},"Register a type adapter"),Object(o.b)("p",null,"Just create a class extending ",Object(o.b)("inlineCode",{parentName:"p"},"TypeAdapter")," and annotated with ",Object(o.b)("inlineCode",{parentName:"p"},"GsonTypeAdapter")," with a ",Object(o.b)("strong",{parentName:"p"},"no arg constructor")," :"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"@GsonTypeAdapter(adapted = Your.class)\npublic class LinkAdapter extends TypeAdapter<Your> {\n    ...\n}\n")),Object(o.b)("h3",{id:"register-a-type-adapter-as-a-component"},"Register a type adapter as a component"),Object(o.b)("p",null,"Just create a class extending ",Object(o.b)("inlineCode",{parentName:"p"},"TypeAdapter")," and annotated with ",Object(o.b)("inlineCode",{parentName:"p"},"GsonTypeAdapterBean")," :"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"@GsonTypeAdapterBean(adapted = Your.class)\npublic class LinkAdapter extends TypeAdapter<Your> {\n\n    @Autowired\n    private MyService service;\n    ...\n}\n")),Object(o.b)("h3",{id:"register-a-type-adapter-factory"},"Register a type adapter factory"),Object(o.b)("p",null,"Just create a class implementing ",Object(o.b)("inlineCode",{parentName:"p"},"TypeAdapterFactory")," and annotated with ",Object(o.b)("inlineCode",{parentName:"p"},"GsonTypeAdapterFactory")," with a ",Object(o.b)("strong",{parentName:"p"},"no arg constructor"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"@GsonTypeAdapterFactory\npublic class YourFactory implements TypeAdapterFactory {\n    ...\n}\n")),Object(o.b)("h3",{id:"register-a-type-adapter-factory-as-a-component"},"Register a type adapter factory as a component"),Object(o.b)("p",null,"Just create a class implementing ",Object(o.b)("inlineCode",{parentName:"p"},"TypeAdapterFactory")," and annotated with ",Object(o.b)("inlineCode",{parentName:"p"},"GsonTypeAdapterFactoryBean")," (or ",Object(o.b)("inlineCode",{parentName:"p"},"Component"),"):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"@GsonTypeAdapterFactoryBean\npublic class YourFactory implements TypeAdapterFactory {\n\n    @Autowired\n    private MyService service;\n    ...\n}\n")),Object(o.b)("h3",{id:"work-with-polymorphic-classes"},"Work with polymorphic classes"),Object(o.b)("h4",{id:"register-a-gsonable-polymorphic-factory"},"Register a ",Object(o.b)("inlineCode",{parentName:"h4"},"Gsonable")," polymorphic factory"),Object(o.b)("p",null,"Just annotate the top interface or abstract class of a hierarchical set of classes with ",Object(o.b)("inlineCode",{parentName:"p"},"Gsonable"),". Under the hood, the starter will register a dynamically created ",Object(o.b)("inlineCode",{parentName:"p"},"PolymorphicTypeAdapterFactory"),". You optionnaly can specify the discriminator name in ",Object(o.b)("inlineCode",{parentName:"p"},"Gsonable")," and the discriminator values on sub types through ",Object(o.b)("inlineCode",{parentName:"p"},"GsonDiscriminator"),"."),Object(o.b)("p",null,"During GSON serialization, factory will inject a discriminator property whose name is either ",Object(o.b)("inlineCode",{parentName:"p"},"@type@")," or the specified one and the value is either the class name or the specified discriminator value.",Object(o.b)("br",{parentName:"p"}),"\n","During deserialization, factory build the target object according to its discriminator value."),Object(o.b)("h4",{id:"register-a-custom-polymorphic-factory"},"Register a custom polymorphic factory"),Object(o.b)("p",null,"Just create a class extending ",Object(o.b)("inlineCode",{parentName:"p"},"PolymorphicTypeAdapterFactory")," and annotated with either ",Object(o.b)("inlineCode",{parentName:"p"},"GsonTypeAdapterFactory")," or ",Object(o.b)("inlineCode",{parentName:"p"},"GsonTypeAdapterFactoryBean"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'@GsonTypeAdapterFactory\npublic class YourAdapterFactory extends PolymorphicTypeAdapterFactory<YourInterface> {\n\n    public EntityAdapterFactory() {\n        super(YourInterface.class, "discriminatorName", true);\n        registerSubtype(YourClass1.class, "disVal1");\n        registerSubtype(YourClass2.class, "disVal2");\n    }\n}\n')),Object(o.b)("h3",{id:"exclude-field-from-serialization"},"Exclude field from serialization"),Object(o.b)("p",null,"Just annotate field with ",Object(o.b)("inlineCode",{parentName:"p"},"GsonIgnore")," to exclude a particular field."))}l.isMDXComponent=!0},2704:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),l=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=l(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(r),u=a,m=d["".concat(i,".").concat(u)]||d[u]||b[u]||o;return r?n.a.createElement(m,c(c({ref:t},s),{},{components:r})):n.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);