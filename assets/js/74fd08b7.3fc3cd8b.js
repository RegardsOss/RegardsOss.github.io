"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[60549],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=o,g=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(g,r(r({ref:t},c),{},{components:n})):a.createElement(g,r({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89590:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),r=["components"],s={id:"backend-dam-geo",title:"Geospatial features management",sidebar_label:"Geospatial features management",slug:"/development/backend/services/dam/geo/"},l=void 0,p={unversionedId:"development/backend/regards/dam/backend-dam-geo",id:"development/backend/regards/dam/backend-dam-geo",isDocsHomePage:!1,title:"Geospatial features management",description:"REGARDS supports geospatial search on Earth, Mars and celestial dome.",source:"@site/docs/development/backend/regards/dam/geo.md",sourceDirName:"development/backend/regards/dam",slug:"/development/backend/services/dam/geo/",permalink:"/docs/development/backend/services/dam/geo/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/dam/geo.md",version:"current",frontMatter:{id:"backend-dam-geo",title:"Geospatial features management",sidebar_label:"Geospatial features management",slug:"/development/backend/services/dam/geo/"},sidebar:"dev",previous:{title:"Bus message events",permalink:"/docs/development/backend/services/dam/events/"},next:{title:"Overview",permalink:"/docs/development/backend/services/fem/overview/"}},c=[{value:"REGARDS Search capabilities",id:"regards-search-capabilities",children:[]},{value:"Spatial Projection",id:"spatial-projection",children:[{value:"Mars",id:"mars",children:[]},{value:"Astro",id:"astro",children:[]}]},{value:"GeoJSON format",id:"geojson-format",children:[]},{value:"Geometry normalization",id:"geometry-normalization",children:[{value:"Coordinate Ranges",id:"coordinate-ranges",children:[]},{value:"Bounding box",id:"bounding-box",children:[]},{value:"LineString and MultiLineString",id:"linestring-and-multilinestring",children:[]},{value:"Polygon and MultiPolygon",id:"polygon-and-multipolygon",children:[]}]}],d={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"REGARDS supports geospatial search on Earth, Mars and celestial dome."),(0,i.kt)("p",null,"GeoJson format is internally used both by REGARDS and by ElasticSearch."),(0,i.kt)("p",null,"By now, some restrictions exist concerning applied geometries, search capabilities and geospatial projections."),(0,i.kt)("p",null,"Everything has been done to make use of API as easy as possible but it is necessary to fully understand underlying mechanisms of both data storage and searching to avoid border cases drawbacks."),(0,i.kt)("h2",{id:"regards-search-capabilities"},"REGARDS Search capabilities"),(0,i.kt)("p",null,"By now, REGARDS must be able to search geometric features into or accross a specified circle and a convex polygon on Earth, Mars and for astronomic perfect sphere."),(0,i.kt)("h2",{id:"spatial-projection"},"Spatial Projection"),(0,i.kt)("p",null,"REGARDS takes advantage of Elasticsearch powerful geometry search but this has a cost: Elasticsearch only uses WGS84 coordinate system, ie classic Earth cylindric projection (in particular used by GPS) where Earth is assimilated to an ellipsoid flattened on poles. This means that for Mars and astronomic search, it is necessary to transform input point coordinates into WGS84 equivalent coordinates to permit use of Elasticsearch geometric search so each geometry feature is both saved as is (with its specified crs) and saved transformed into WGS84 crs."),(0,i.kt)("p",null,"It is advisable that aim of REGARDS is to search intersections between geometries, not compute distances or areas for example which is fully compatible with projections transformations."),(0,i.kt)("h3",{id:"mars"},"Mars"),(0,i.kt)("p",null,"Mars is also an ellipsoid flattened on poles with a slightly flattening difference and an approximate half radius. Concerning polygon search it is enough to transform searching polygon into WGS84 crs and do the search with that geometry. For circle search, it is more complex:  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"because of flattening difference between Earth an Mars, a circle on Mars is not a circle on Earth except if center is a pole or on equator,"),(0,i.kt)("li",{parentName:"ul"},"thanks to ellipsoid symmetry and using Geotools API, it is easy to find upper and lower circle points on projected circle, "),(0,i.kt)("li",{parentName:"ul"},"with these two points, an inner circle and outer circle can be used: all geometries into inner circle can be taken, all geometries out of outer circle can be evicted"),(0,i.kt)("li",{parentName:"ul"},"for all geometries between inner and outer circles, minimum distance from circle center is directly computed with Geotools using input Mars coordinates to determine if geometries can be taken or not."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"minimum distance computation from a point (circle center) and a polygon is done by computing distance between all edges of polygon lines and nine more points on all these lines")," (this provides an acceptable approximation and knowing that, it is easy to increase precision by adding polygon points).")),(0,i.kt)("h3",{id:"astro"},"Astro"),(0,i.kt)("p",null,"Astronomic data are saved taking into account right ascension as a longitude and declination as a latitude, all in degrees. These geometries are then projected into a perfect sphere with medium earth radius (also known as authalic sphere).",(0,i.kt)("br",{parentName:"p"}),"\n","Same algorithm as Mars one is then used.",(0,i.kt)("br",{parentName:"p"}),"\n","The only difference is that to specify a circle for circle search, ",(0,i.kt)("strong",{parentName:"p"},"half-angle of the cone in degrees")," is specified in place of the radius."),(0,i.kt)("h2",{id:"geojson-format"},"GeoJSON format"),(0,i.kt)("p",null,"Geometry objects are described internally with GeoJSON format following RFC 7946 (",(0,i.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7946"},"https://tools.ietf.org/html/rfc7946"),"). This specification permits to defines following geometry objects:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Point"),(0,i.kt)("li",{parentName:"ul"},"MultiPoint"),(0,i.kt)("li",{parentName:"ul"},"LineString"),(0,i.kt)("li",{parentName:"ul"},"MultiLinesString"),(0,i.kt)("li",{parentName:"ul"},"Polygon"),(0,i.kt)("li",{parentName:"ul"},"MultiPolygon  ")),(0,i.kt)("p",null,"Please, refer directly to given link for more precisions.",(0,i.kt)("br",{parentName:"p"}),"\n","It is advisable to carefully read and understand:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Polygon build especially linear ring right hand rule concept."),(0,i.kt)("li",{parentName:"ul"},"Antimeridian Cutting.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," by now, concerning polygons, only convex ones without holes are taken into account by REGARDS."),(0,i.kt)("h2",{id:"geometry-normalization"},"Geometry normalization"),(0,i.kt)("p",null,"Despite RFC 7946, not all applications completely follows it especially when antimeridian line is crossed. It is the case of Elasticsearch.\nFurthermore, WGS84 is not designated to function with poles because it is a cylindrical projection.",(0,i.kt)("br",{parentName:"p"}),"\n","Even RFC 7946 lets some shadow zones, in this case REGARDS had made a choice for taking into account some cases explained lower.",(0,i.kt)("br",{parentName:"p"}),"\n","To counter all these drawbacks and make a consistent implementation, REGARDS provides a normalization for all geometries to manage a larger part of borderline problems."),(0,i.kt)("h3",{id:"coordinate-ranges"},"Coordinate Ranges"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Coordinates (longitude and latitude) are explained into ",(0,i.kt)("strong",{parentName:"li"},"degrees"),"."),(0,i.kt)("li",{parentName:"ul"},"Latitude is expressed from ",(0,i.kt)("strong",{parentName:"li"},"-90\xb0")," to ",(0,i.kt)("strong",{parentName:"li"},"+90\xb0"),"."),(0,i.kt)("li",{parentName:"ul"},"Longitude is expressed from ",(0,i.kt)("strong",{parentName:"li"},"-180\xb0")," (included) to ",(0,i.kt)("strong",{parentName:"li"},"+180\xb0")," (excluded) but exceptionally a negative longitude could be expressed from ",(0,i.kt)("strong",{parentName:"li"},"+180\xb0")," (included) to ",(0,i.kt)("strong",{parentName:"li"},"+360\xb0")," (excluded) as discussed lower."),(0,i.kt)("li",{parentName:"ul"},"As WGS84 is a cylindrical projection, poles - which are simple points with latitude ",(0,i.kt)("strong",{parentName:"li"},"90\xb0")," or ",(0,i.kt)("strong",{parentName:"li"},"-90\xb0")," without taking into account longitude value - are ",(0,i.kt)("em",{parentName:"li"},"transformed")," into lines with longitude varying from ",(0,i.kt)("strong",{parentName:"li"},"-180\xb0")," to ",(0,i.kt)("strong",{parentName:"li"},"+180\xb0")," (or ",(0,i.kt)("strong",{parentName:"li"},"360\xb0")," in some cases), this permits to deal with convex polygon around poles (see lower).")),(0,i.kt)("h3",{id:"bounding-box"},"Bounding box"),(0,i.kt)("p",null,"A Bounding box (aka Bbox) is not a geometry object but is used as a search criterion parameter (opensearch norm).",(0,i.kt)("br",{parentName:"p"}),"\n","A bounding box is always expressed with 4 values: southwest corner longitude, southwest corner latitude, northeast corner longitude, northeast corner latitude.",(0,i.kt)("br",{parentName:"p"}),"\n","RFC 7946 says that the latitude of the northeast corner is always greater than the latitude of the southwest corner except when bounding boxes crosses the antimeridian. This means that",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},'"bbox": [177.0, -20.0, -178.0, -16.0]'),(0,i.kt)("br",{parentName:"p"}),"\n","should cover 5 degrees of longitude.\nUnfortunately, Elasticsearch is not able to take this into consideration, so in this case, the Bbox criterion is replaced by:",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},'"bbox": [177.0, -20.0, 180.0, -16.0] OR "bbox": [-180.0, -20.0, -178.0, -16.0]'),"  "),(0,i.kt)("h3",{id:"linestring-and-multilinestring"},"LineString and MultiLineString"),(0,i.kt)("p",null,"Elasticsearch forgets to be clever when taken into account line strings this means for a string crossing antimeridian, it does not use shortest path and always use the path crossing 0-longitude meridian.",(0,i.kt)("br",{parentName:"p"}),"\n","LineString normalization consists to first determine if strings cross antimeridian (",(0,i.kt)("strong",{parentName:"p"},"as a simplification, algorithm only check longitudes distances to 0-meridian line and antimeridian, as if string edges where projected on equator, and then chooses short path between both edges"),") and if so, transforms LineString into MultiLineString cutting input LineString at antimeridian.",(0,i.kt)("br",{parentName:"p"}),"\n","For example:",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"LINE_STRING((100, 50), (-100, 0))"),(0,i.kt)("br",{parentName:"p"}),"\n","is transformed into",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"MULTI_LINE_STRING("),(0,i.kt)("br",{parentName:"p"}),"\n","","\xa0","\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"LINE_STRING((100, 50), (180, 25)),"),(0,i.kt)("br",{parentName:"p"}),"\n","","\xa0","\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"LINE_STRING((-180, 25), (-100, 0))"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},")"),(0,i.kt)("br",{parentName:"p"}),"\n","Of course, MultiLineString LineStrings components are all normalized and aggregated to produce normalized MultiLineString."),(0,i.kt)("h3",{id:"polygon-and-multipolygon"},"Polygon and MultiPolygon"),(0,i.kt)("p",null,"Polygons are the most complex geometries to normalize because of varieties (convex, concave, around poles) and difficulty to properly be analysed, don't forget that a geo polygon is a polygon on a sphere not just on a plane.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"First, note that by now, only ",(0,i.kt)("em",{parentName:"strong"},"simple")," polygons are taken into account, ie convex and without holes"),". However it is possible to ingest complex Polygons or MultiPolygons but no normalization is applied."),(0,i.kt)("h4",{id:"linear-ring"},"Linear ring"),(0,i.kt)("p",null,"Following RFC 7946, a polygon is composed of several linear rings. First one is the exterior ring, others are holes into exterior ring. A linear ring is a closed LineString with four or more positions, first and last ones must be the same."),(0,i.kt)("p",null,"It is ",(0,i.kt)("strong",{parentName:"p"},"mandatory")," to describe a polygon following right ",(0,i.kt)("strong",{parentName:"p"},"hand rule")," so exterior ring is described counterclockwise and holes clockwise. Don't forget that polygons belong to a sphere, this means that every polygon has a complementary polygon and the only way to discriminate them is to follow this rule."),(0,i.kt)("p",null,"For example:",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"POLYGON(((0, 80), (90, 80), (-90, 80), (0, 80)))"),(0,i.kt)("br",{parentName:"p"}),"\n","is a cap around North pole else",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"POLYGON(((0, 80), (-90, 80), (90, 80), (0, 80)))"),(0,i.kt)("br",{parentName:"p"}),"\n","is a (huge) cap around South pole."),(0,i.kt)("h4",{id:"normalization-algorithm"},"Normalization algorithm"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"First, some polygons may have a large amplitude exceeding 180\xb0 or 270\xb0. Most of frameworks or software are not able to manage correctly such polygons because shortest distance between two point when crossing antimeridian is not well managed. To avoid this, first step of normalization is to use the fact that Elasticsearch is able to manage longitudes between -180\xb0 and 180\xb0 but also longitudes from 180\xb0 to 360\xb0 (excluded). Despite a path between 170\xb0 and -170\xb0 is not considered as going through antimeridian, same path between 170\xb0 and 190\xb0 is considered as going through antimeridian. Algorithm then analyzes each polygon linear strings and eventualy modifies longitudes following shortest path (same computation as LineString one).",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"=> This means that it's a good thing to start a large amplitude polygon with its westmost point as first element."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Second, some polygons may contain North or South pole (or both) as a cap on 80\xb0 latitude for example (",(0,i.kt)("inlineCode",{parentName:"p"},"POLYGON(((0, 80), (90, 80), (-90, 80), (0, 80)))"),").",(0,i.kt)("br",{parentName:"p"}),"\n","Into WGS84 crs, this polygon is just a line between ",(0,i.kt)("inlineCode",{parentName:"p"},"(-90, 80)")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"(90, 80)"),". A circle search centered on North pole with a radius lower than 10\xb0 (ie more than 1000 km) will not found previously given polygon.",(0,i.kt)("br",{parentName:"p"}),"\n","To make this fully functional with WGS84, algorithm exploits the fact that Elasticsearch takes into account all longitudes at 90\xb0 latitude (as if North and South pole were strings and not just a single point). After having determined that polygon is around a pole using Hipparchus framework (",(0,i.kt)("a",{parentName:"p",href:"https://www.hipparchus.org"},"https://www.hipparchus.org"),"), a polygon reaching North pole using complete longitude amplitude is added on top of current polygon.",(0,i.kt)("br",{parentName:"p"}),"\n","Previous polygon normalization is then:\n",(0,i.kt)("inlineCode",{parentName:"p"},"POLYGON((0, 80), (90, 80), (180, 80), (180, 90), (-180, 90), (-180, 80), (-90, 80), (0, 80))"),"."))),(0,i.kt)("p",null,"In theory, a convex polygon containing both poles should be well normalized but it would be a good idea to use a MultiPolygon intersecting initial polygon with equator."),(0,i.kt)("p",null,"Of course, MultiPolygon Polygons components are all normalized and aggregated to produce normalized MultiPolygon."))}m.isMDXComponent=!0}}]);