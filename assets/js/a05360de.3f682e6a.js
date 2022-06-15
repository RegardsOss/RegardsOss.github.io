"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[35989],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return c}});var a=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var o=a.createContext({}),m=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=m(e.components);return a.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},x=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),x=m(t),c=s,b=x["".concat(o,".").concat(c)]||x[c]||u[c]||l;return t?a.createElement(b,r(r({ref:n},p),{},{components:t})):a.createElement(b,r({ref:n},p))}));function c(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var l=t.length,r=new Array(l);r[0]=x;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:s,r[1]=i;for(var m=2;m<l;m++)r[m]=t[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}x.displayName="MDXCreateElement"},50863:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return u}});var a=t(83117),s=t(80102),l=(t(67294),t(3905)),r=["components"],i={id:"appendices-create-model",title:"Create a model",sidebar_label:"REGARDS XML Models format",slug:"/development/appendices/create-model/"},o=void 0,m={unversionedId:"development/appendices/appendices-create-model",id:"version-1.7.1/development/appendices/appendices-create-model",title:"Create a model",description:"Example of a _DATA_ type model",source:"@site/versioned_docs/version-1.7.1/development/appendices/create-model.md",sourceDirName:"development/appendices",slug:"/development/appendices/create-model/",permalink:"/docs/1.7.1/development/appendices/create-model/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.7.1/development/appendices/create-model.md",tags:[],version:"1.7.1",frontMatter:{id:"appendices-create-model",title:"Create a model",sidebar_label:"REGARDS XML Models format",slug:"/development/appendices/create-model/"},sidebar:"dev",previous:{title:"Lucene query format",permalink:"/docs/1.7.1/development/appendices/lucene-query/"}},p={},u=[{value:"Example of a <strong><em>DATA</em></strong> type model",id:"example-of-a-data-type-model",level:3},{value:"Example of <strong><em>DATASET</em></strong> type model with computation plugin",id:"example-of-dataset-type-model-with-computation-plugin",level:3},{value:"Exemple of a <strong><em>COLLECTION</em></strong> type model",id:"exemple-of-a-collection-type-model",level:3},{value:"Exemple of a fragment",id:"exemple-of-a-fragment",level:3},{value:"XML Schema describing how to configure a model, its attributes and its fragments",id:"xml-schema-describing-how-to-configure-a-model-its-attributes-and-its-fragments",level:3}],x={toc:u};function c(e){var n=e.components,t=(0,s.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},x,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"example-of-a-data-type-model"},"Example of a ",(0,l.kt)("strong",{parentName:"h3"},(0,l.kt)("em",{parentName:"strong"},"DATA"))," type model"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<model>\n    <name>Departement</name>\n    <description>D\xe9partements francais</description>\n    <type>DATA</type>\n    <attribute alterable="true" optional="false">\n        <label>File size</label>\n        <name>FileSize</name>\n        <description>File size</description>\n        <type unit="octet">LONG</type>\n    </attribute>\n    <attribute alterable="true" optional="false">\n        <label>Code</label>\n        <name>Code</name>\n        <type unit="unitless">STRING</type>\n    </attribute>\n    <attribute alterable="true" optional="false">\n        <label>name attribute</label>\n        <name>Name</name>\n        <type unit="unitless">STRING</type>\n    </attribute>\n    <fragment>\n        <name>system</name>\n        <attribute alterable="true" optional="true">\n            <label>Checksum</label>\n            <name>checksum</name>\n            <type unit="unitless">STRING</type>\n        </attribute>\n        <attribute alterable="true" optional="false">\n            <label>Change date</label>\n            <name>change_date</name>\n            <type unit="unitless">DATE_ISO8601</type>\n        </attribute>\n        <attribute alterable="true" optional="true">\n            <label>LOM URL</label>\n            <name>lom_url</name>\n            <type unit="unitless">STRING</type>\n            <restriction>\n                <pattern>^(https?|ftp|file)://[-a-zA-Z0-9+&amp;@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&amp;@#/%=~_|]</pattern>\n            </restriction>\n        </attribute>\n        <attribute alterable="true" optional="true">\n            <label>REGARDS URL</label>\n            <name>regards_url</name>\n            <type unit="unitless">STRING</type>\n            <restriction>\n                <pattern>^(https?|ftp|file)://[-a-zA-Z0-9+&amp;@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&amp;@#/%=~_|]</pattern>\n            </restriction>\n        </attribute>\n        <attribute alterable="true" optional="true">\n            <label>Extension</label>\n            <name>extension</name>\n            <type unit="unitless">STRING</type>\n        </attribute>\n        <attribute alterable="true" optional="false">\n            <label>Ingestion date</label>\n            <name>ingestion_date</name>\n            <description>Ingestion date in the GEODE repository</description>\n            <type unit="unitless">DATE_ISO8601</type>\n        </attribute>\n        <attribute alterable="true" optional="true">\n            <label>File size</label>\n            <name>filesize</name>\n            <type unit="unitless">LONG</type>\n        </attribute>\n        <attribute alterable="true" optional="true">\n            <label>GPFS URL</label>\n            <name>gpfs_url</name>\n            <type unit="unitless">STRING</type>\n            <restriction>\n                <pattern>^(https?|ftp|file|gpfs)://[-a-zA-Z0-9+&amp;@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&amp;@#/%=~_|]</pattern>\n            </restriction>\n        </attribute>\n        <attribute alterable="true" optional="false">\n            <label>Filename</label>\n            <name>filename</name>\n            <type unit="unitless">STRING</type>\n        </attribute>\n    </fragment>\n</model>\n')),(0,l.kt)("h3",{id:"example-of-dataset-type-model-with-computation-plugin"},"Example of ",(0,l.kt)("strong",{parentName:"h3"},(0,l.kt)("em",{parentName:"strong"},"DATASET"))," type model with computation plugin"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<model>\n    <name>Pays</name>\n    <description>Pays</description>\n    <type>DATASET</type>\n    <attribute alterable="true" optional="false">\n        <label>number of data</label>\n        <name>count</name>\n        <type unit="unitless">LONG</type>\n        <computation>\n            <label>CountValidationConfModel3</label>\n            <count/>\n        </computation>\n    </attribute>\n</model>\n')),(0,l.kt)("h3",{id:"exemple-of-a-collection-type-model"},"Exemple of a ",(0,l.kt)("strong",{parentName:"h3"},(0,l.kt)("em",{parentName:"strong"},"COLLECTION"))," type model"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<model>\n    <name>Mission</name>\n    <description>Mission</description>\n    <type>COLLECTION</type>\n    <attribute alterable="true" optional="false">\n        <label>data start date</label>\n        <name>start_date</name>\n        <description>date at which the acquisition of the data has started</description>\n        <type unit="unitless">DATE_ISO8601</type>\n    </attribute>\n    <attribute alterable="true" optional="false">\n        <label>name attribute</label>\n        <name>Name</name>\n        <type unit="unitless">STRING</type>\n    </attribute>\n    <attribute alterable="true" optional="true">\n        <label>description</label>\n        <name>description</name>\n        <type unit="unitless">STRING</type>\n    </attribute>\n</model>\n')),(0,l.kt)("h3",{id:"exemple-of-a-fragment"},"Exemple of a fragment"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<fragment>\n    <name>system</name>\n    <attribute alterable="true" optional="true">\n        <label>Checksum</label>\n        <name>checksum</name>\n        <type unit="unitless">STRING</type>\n    </attribute>\n    <attribute alterable="true" optional="false">\n        <label>Change date</label>\n        <name>change_date</name>\n        <type unit="unitless">DATE_ISO8601</type>\n    </attribute>\n    <attribute alterable="true" optional="true">\n        <label>LOM URL</label>\n        <name>lom_url</name>\n        <type unit="unitless">STRING</type>\n        <restriction>\n            <pattern>^(https?|ftp|file)://[-a-zA-Z0-9+&amp;@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&amp;@#/%=~_|]</pattern>\n        </restriction>\n    </attribute>\n    <attribute alterable="true" optional="true">\n        <label>REGARDS URL</label>\n        <name>regards_url</name>\n        <type unit="unitless">STRING</type>\n        <restriction>\n            <pattern>^(https?|ftp|file)://[-a-zA-Z0-9+&amp;@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&amp;@#/%=~_|]</pattern>\n        </restriction>\n    </attribute>\n    <attribute alterable="true" optional="true">\n        <label>Extension</label>\n        <name>extension</name>\n        <type unit="unitless">STRING</type>\n    </attribute>\n    <attribute alterable="true" optional="false">\n        <label>Ingestion date</label>\n        <name>ingestion_date</name>\n        <description>Ingestion date in the GEODE repository</description>\n        <type unit="unitless">DATE_ISO8601</type>\n    </attribute>\n    <attribute alterable="true" optional="true">\n        <label>File size</label>\n        <name>filesize</name>\n        <type unit="unitless">LONG</type>\n    </attribute>\n    <attribute alterable="true" optional="true">\n        <label>GPFS URL</label>\n        <name>gpfs_url</name>\n        <type unit="unitless">STRING</type>\n        <restriction>\n            <pattern>^(https?|ftp|file|gpfs)://[-a-zA-Z0-9+&amp;@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&amp;@#/%=~_|]</pattern>\n        </restriction>\n    </attribute>\n    <attribute alterable="true" optional="false">\n        <label>Filename</label>\n        <name>filename</name>\n        <type unit="unitless">STRING</type>\n    </attribute>\n</fragment>\n')),(0,l.kt)("h3",{id:"xml-schema-describing-how-to-configure-a-model-its-attributes-and-its-fragments"},"XML Schema describing how to configure a model, its attributes and its fragments"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">\n    \x3c!-- Model root element --\x3e\n    <xs:element name="model">\n        <xs:complexType>\n            <xs:sequence>\n                <xs:element ref="name"/>\n                <xs:element ref="description" minOccurs="0"/>\n                <xs:element ref="version" minOccurs="0"/>\n                \x3c!-- Define model types --\x3e\n                <xs:element name="type">\n                    <xs:simpleType>\n                        <xs:restriction base="xs:string">\n                            <xs:enumeration value="COLLECTION"/>\n                            <xs:enumeration value="DATA"/>\n                            <xs:enumeration value="DATASET"/>\n                        </xs:restriction>\n                    </xs:simpleType>\n                </xs:element>\n                <xs:element ref="attribute" minOccurs="0" maxOccurs="unbounded"/>\n                <xs:element ref="fragment" minOccurs="0" maxOccurs="unbounded"/>\n            </xs:sequence>\n        </xs:complexType>\n    </xs:element>\n\n    \x3c!-- Fragment root element --\x3e\n    <xs:element name="fragment">\n        <xs:complexType>\n            <xs:sequence>\n                <xs:element ref="name"/>\n                <xs:element ref="description" minOccurs="0"/>\n                <xs:element ref="version" minOccurs="0"/>\n                <xs:element ref="attribute" minOccurs="0" maxOccurs="unbounded"/>\n            </xs:sequence>\n        </xs:complexType>\n    </xs:element>\n\n    \x3c!-- Define name --\x3e\n    <xs:element name="name">\n        <xs:simpleType>\n            <xs:restriction base="xs:token">\n                <xs:pattern value="[0-9a-zA-Z_]{1,32}"/>\n            </xs:restriction>\n        </xs:simpleType>\n    </xs:element>\n\n    \x3c!-- Define label --\x3e\n    <xs:element name="label">\n        <xs:simpleType>\n            <xs:restriction base="xs:string">\n                <xs:minLength value="1"/>\n                <xs:maxLength value="255"/>\n            </xs:restriction>\n        </xs:simpleType>\n    </xs:element>\n\n    \x3c!-- Define description --\x3e\n    <xs:element name="description">\n        <xs:simpleType>\n            <xs:restriction base="xs:string">\n                <xs:whiteSpace value="preserve"/>\n            </xs:restriction>\n        </xs:simpleType>\n    </xs:element>\n\n    \x3c!-- Define description --\x3e\n    <xs:element name="version" type="xs:string"/>\n\n    \x3c!-- Define attribute --\x3e\n    <xs:element name="attribute">\n        <xs:complexType>\n            <xs:sequence>\n                <xs:element ref="label" minOccurs="1" maxOccurs="1"/>\n                <xs:element ref="name"/>\n                <xs:element ref="description" minOccurs="0"/>\n                <xs:element ref="type"/>\n                <xs:element ref="restriction" minOccurs="0"/>\n                \x3c!-- For fragment creation, this element is not used and is skipped silently. --\x3e\n                <xs:element ref="computation" minOccurs="0"/>\n                \x3c!-- Custom attribute properties --\x3e\n                <xs:element ref="property" minOccurs="0" maxOccurs="unbounded"/>\n            </xs:sequence>\n            <xs:attribute name="alterable" type="xs:boolean"\n                          default="true"/>\n            <xs:attribute name="optional" type="xs:boolean" default="false"/>\n            <xs:attribute name="group" type="xs:string"/>\n        </xs:complexType>\n    </xs:element>\n\n    \x3c!-- Define attribute types --\x3e\n    <xs:element name="type">\n        <xs:complexType>\n            <xs:simpleContent>\n                <xs:extension base="restrictionType">\n                    <xs:attribute name="unit" type="xs:string" default="unitless"/>\n                    <xs:attribute name="precision" type="xs:integer"/>\n                    <xs:attribute name="arraysize" type="xs:integer"></xs:attribute>\n                </xs:extension>\n            </xs:simpleContent>\n        </xs:complexType>\n    </xs:element>\n\n\n    \x3c!-- All types --\x3e\n    <xs:simpleType name="restrictionType">\n        <xs:restriction base="xs:string">\n            <xs:enumeration value="BOOLEAN"/>\n            <xs:enumeration value="DATE_ARRAY"/>\n            <xs:enumeration value="DATE_INTERVAL"/>\n            <xs:enumeration value="DATE_ISO8601"/>\n            <xs:enumeration value="ENUMERATION"/>\n            <xs:enumeration value="DOUBLE"/>\n            <xs:enumeration value="DOUBLE_ARRAY"/>\n            <xs:enumeration value="DOUBLE_INTERVAL"/>\n            <xs:enumeration value="INTEGER"/>\n            <xs:enumeration value="INTEGER_ARRAY"/>\n            <xs:enumeration value="INTEGER_INTERVAL"/>\n            <xs:enumeration value="LONG"/>\n            <xs:enumeration value="LONG_ARRAY"/>\n            <xs:enumeration value="LONG_INTERVAL"/>\n            <xs:enumeration value="STRING"/>\n            <xs:enumeration value="STRING_ARRAY"/>\n            <xs:enumeration value="URL"/>\n        </xs:restriction>\n    </xs:simpleType>\n\n    \x3c!-- Enumeration restriction --\x3e\n    <xs:element name="enumeration">\n        <xs:complexType>\n            <xs:sequence>\n                <xs:element name="value" type="xs:string" maxOccurs="unbounded"/>\n            </xs:sequence>\n        </xs:complexType>\n    </xs:element>\n\n    \x3c!-- Pattern restriction --\x3e\n    <xs:element name="pattern">\n        <xs:simpleType>\n            <xs:restriction base="xs:string">\n                <xs:whiteSpace value="preserve"/>\n                <xs:minLength value="1"/>\n            </xs:restriction>\n        </xs:simpleType>\n    </xs:element>\n\n    \x3c!-- Integer range restriction --\x3e\n    <xs:element name="integer_range">\n        <xs:complexType>\n            <xs:sequence>\n                <xs:element name="min">\n                    <xs:complexType>\n                        <xs:simpleContent>\n                            <xs:extension base="xs:integer">\n                                <xs:attribute name="excluded" type="xs:boolean"\n                                              default="false"/>\n                            </xs:extension>\n                        </xs:simpleContent>\n                    </xs:complexType>\n                </xs:element>\n                <xs:element name="max">\n                    <xs:complexType>\n                        <xs:simpleContent>\n                            <xs:extension base="xs:integer">\n                                <xs:attribute name="excluded" type="xs:boolean"\n                                              default="false"/>\n                            </xs:extension>\n                        </xs:simpleContent>\n                    </xs:complexType>\n                </xs:element>\n            </xs:sequence>\n        </xs:complexType>\n    </xs:element>\n\n    \x3c!-- Long range restriction --\x3e\n    <xs:element name="long_range">\n        <xs:complexType>\n            <xs:sequence>\n                <xs:element name="min">\n                    <xs:complexType>\n                        <xs:simpleContent>\n                            <xs:extension base="xs:long">\n                                <xs:attribute name="excluded" type="xs:boolean"\n                                              default="false"/>\n                            </xs:extension>\n                        </xs:simpleContent>\n                    </xs:complexType>\n                </xs:element>\n                <xs:element name="max">\n                    <xs:complexType>\n                        <xs:simpleContent>\n                            <xs:extension base="xs:long">\n                                <xs:attribute name="excluded" type="xs:boolean"\n                                              default="false"/>\n                            </xs:extension>\n                        </xs:simpleContent>\n                    </xs:complexType>\n                </xs:element>\n            </xs:sequence>\n        </xs:complexType>\n    </xs:element>\n\n    \x3c!-- Double range restriction --\x3e\n    <xs:element name="double_range">\n        <xs:complexType>\n            <xs:sequence>\n                <xs:element name="min">\n                    <xs:complexType>\n                        <xs:simpleContent>\n                            <xs:extension base="xs:double">\n                                <xs:attribute name="excluded" type="xs:boolean"\n                                              default="false"/>\n                            </xs:extension>\n                        </xs:simpleContent>\n                    </xs:complexType>\n                </xs:element>\n                <xs:element name="max">\n                    <xs:complexType>\n                        <xs:simpleContent>\n                            <xs:extension base="xs:double">\n                                <xs:attribute name="excluded" type="xs:boolean"\n                                              default="false"/>\n                            </xs:extension>\n                        </xs:simpleContent>\n                    </xs:complexType>\n                </xs:element>\n            </xs:sequence>\n        </xs:complexType>\n    </xs:element>\n\n    \x3c!-- Define restriction --\x3e\n    <xs:element name="restriction">\n        <xs:complexType>\n            <xs:choice>\n                <xs:element ref="enumeration"/>\n                <xs:element ref="pattern"/>\n                <xs:element ref="integer_range"/>\n                <xs:element ref="long_range"/>\n                <xs:element ref="double_range"/>\n            </xs:choice>\n        </xs:complexType>\n    </xs:element>\n\n    \x3c!-- Define computation plugin configuration --\x3e\n    <xs:element name="computation">\n        <xs:complexType>\n            <xs:sequence>\n                <xs:element name="label" minOccurs="1" maxOccurs="1" type="xs:string"/>\n                <xs:choice>\n                    <xs:element name="count" type="NoParamPluginType"/>\n                    <xs:element name="sum_compute" type="ParamPluginType"/>\n                    <xs:element name="min_compute" type="ParamPluginType"/>\n                    <xs:element name="max_compute" type="ParamPluginType"/>\n                </xs:choice>\n            </xs:sequence>\n        </xs:complexType>\n    </xs:element>\n\n    \x3c!-- Define Computation plugin type without parameters --\x3e\n    <xs:complexType name="NoParamPluginType">\n    </xs:complexType>\n\n    \x3c!-- Define Computation plugin type with parameters --\x3e\n    <xs:complexType name="ParamPluginType">\n        <xs:complexContent>\n            <xs:extension base="NoParamPluginType">\n                <xs:attribute name="parameterAttributeName" type="xs:string" use="required"/>\n                <xs:attribute name="parameterAttributeFragmentName" type="xs:string" use="optional"/>\n            </xs:extension>\n        </xs:complexContent>\n    </xs:complexType>\n\n    \x3c!-- Define name --\x3e\n    <xs:element name="configurationLabel">\n        <xs:simpleType>\n            <xs:restriction base="xs:string">\n                <xs:minLength value="1"/>\n            </xs:restriction>\n        </xs:simpleType>\n    </xs:element>\n\n    \x3c!-- Custom attribute properties --\x3e\n    <xs:element name="property">\n        <xs:complexType>\n            <xs:attribute name="key" type="xs:string" use="required"/>\n            <xs:attribute name="value" type="xs:string" use="required"/>\n        </xs:complexType>\n    </xs:element>\n</xs:schema>\n')))}c.isMDXComponent=!0}}]);