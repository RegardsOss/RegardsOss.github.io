"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[10579],{60683:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var o=i(74848),t=i(28453);const s={id:"backend-dam-geo",title:"Geospatial features management",sidebar_label:"Geospatial features management",slug:"/development/backend/services/dam/geo/"},r=void 0,a={id:"development/backend/regards/dam/backend-dam-geo",title:"Geospatial features management",description:"REGARDS supports geospatial search on Earth, Mars and celestial dome.",source:"@site/versioned_docs/version-1.14/development/backend/regards/dam/geo.md",sourceDirName:"development/backend/regards/dam",slug:"/development/backend/services/dam/geo/",permalink:"/docs/1.14/development/backend/services/dam/geo/",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.14/development/backend/regards/dam/geo.md",tags:[],version:"1.14",frontMatter:{id:"backend-dam-geo",title:"Geospatial features management",sidebar_label:"Geospatial features management",slug:"/development/backend/services/dam/geo/"},sidebar:"dev",previous:{title:"Bus message events",permalink:"/docs/1.14/development/backend/services/dam/events/"},next:{title:"Overview",permalink:"/docs/1.14/development/backend/services/dataprovider/overview/"}},l={},d=[{value:"REGARDS Search capabilities",id:"regards-search-capabilities",level:2},{value:"Spatial Projection",id:"spatial-projection",level:2},{value:"Mars",id:"mars",level:3},{value:"Astro",id:"astro",level:3},{value:"GeoJSON format",id:"geojson-format",level:2},{value:"Geometry normalization",id:"geometry-normalization",level:2},{value:"Coordinate Ranges",id:"coordinate-ranges",level:3},{value:"Bounding box",id:"bounding-box",level:3},{value:"LineString and MultiLineString",id:"linestring-and-multilinestring",level:3},{value:"Polygon and MultiPolygon",id:"polygon-and-multipolygon",level:3},{value:"Linear ring",id:"linear-ring",level:4},{value:"Normalization algorithm",id:"normalization-algorithm",level:4}];function c(e){const n={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"REGARDS supports geospatial search on Earth, Mars and celestial dome."}),"\n",(0,o.jsx)(n.p,{children:"GeoJson format is internally used both by REGARDS and by ElasticSearch."}),"\n",(0,o.jsx)(n.p,{children:"By now, some restrictions exist concerning applied geometries, search capabilities and geospatial projections."}),"\n",(0,o.jsx)(n.p,{children:"Everything has been done to make use of API as easy as possible but it is necessary to fully understand underlying mechanisms of both data storage and searching to avoid border cases drawbacks."}),"\n",(0,o.jsx)(n.h2,{id:"regards-search-capabilities",children:"REGARDS Search capabilities"}),"\n",(0,o.jsx)(n.p,{children:"By now, REGARDS must be able to search geometric features into or accross a specified circle and a convex polygon on Earth, Mars and for astronomic perfect sphere."}),"\n",(0,o.jsx)(n.h2,{id:"spatial-projection",children:"Spatial Projection"}),"\n",(0,o.jsx)(n.p,{children:"REGARDS takes advantage of Elasticsearch powerful geometry search but this has a cost: Elasticsearch only uses WGS84 coordinate system, ie classic Earth cylindric projection (in particular used by GPS) where Earth is assimilated to an ellipsoid flattened on poles. This means that for Mars and astronomic search, it is necessary to transform input point coordinates into WGS84 equivalent coordinates to permit use of Elasticsearch geometric search so each geometry feature is both saved as is (with its specified crs) and saved transformed into WGS84 crs."}),"\n",(0,o.jsx)(n.p,{children:"It is advisable that aim of REGARDS is to search intersections between geometries, not compute distances or areas for example which is fully compatible with projections transformations."}),"\n",(0,o.jsx)(n.h3,{id:"mars",children:"Mars"}),"\n",(0,o.jsx)(n.p,{children:"Mars is also an ellipsoid flattened on poles with a slightly flattening difference and an approximate half radius. Concerning polygon search it is enough to transform searching polygon into WGS84 crs and do the search with that geometry. For circle search, it is more complex:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"because of flattening difference between Earth an Mars, a circle on Mars is not a circle on Earth except if center is a pole or on equator,"}),"\n",(0,o.jsx)(n.li,{children:"thanks to ellipsoid symmetry and using Geotools API, it is easy to find upper and lower circle points on projected circle,"}),"\n",(0,o.jsx)(n.li,{children:"with these two points, an inner circle and outer circle can be used: all geometries into inner circle can be taken, all geometries out of outer circle can be evicted"}),"\n",(0,o.jsx)(n.li,{children:"for all geometries between inner and outer circles, minimum distance from circle center is directly computed with Geotools using input Mars coordinates to determine if geometries can be taken or not."}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"minimum distance computation from a point (circle center) and a polygon is done by computing distance between all edges of polygon lines and nine more points on all these lines"})," (this provides an acceptable approximation and knowing that, it is easy to increase precision by adding polygon points)."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"astro",children:"Astro"}),"\n",(0,o.jsxs)(n.p,{children:["Astronomic data are saved taking into account right ascension as a longitude and declination as a latitude, all in degrees. These geometries are then projected into a perfect sphere with medium earth radius (also known as authalic sphere).",(0,o.jsx)(n.br,{}),"\n","Same algorithm as Mars one is then used.",(0,o.jsx)(n.br,{}),"\n","The only difference is that to specify a circle for circle search, ",(0,o.jsx)(n.strong,{children:"half-angle of the cone in degrees"})," is specified in place of the radius."]}),"\n",(0,o.jsx)(n.h2,{id:"geojson-format",children:"GeoJSON format"}),"\n",(0,o.jsxs)(n.p,{children:["Geometry objects are described internally with GeoJSON format following RFC 7946 (",(0,o.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7946",children:"https://tools.ietf.org/html/rfc7946"}),"). This specification permits to defines following geometry objects:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Point"}),"\n",(0,o.jsx)(n.li,{children:"MultiPoint"}),"\n",(0,o.jsx)(n.li,{children:"LineString"}),"\n",(0,o.jsx)(n.li,{children:"MultiLinesString"}),"\n",(0,o.jsx)(n.li,{children:"Polygon"}),"\n",(0,o.jsx)(n.li,{children:"MultiPolygon"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Please, refer directly to given link for more precisions.",(0,o.jsx)(n.br,{}),"\n","It is advisable to carefully read and understand:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Polygon build especially linear ring right hand rule concept."}),"\n",(0,o.jsx)(n.li,{children:"Antimeridian Cutting."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Note:"})," by now, concerning polygons, only convex ones without holes are taken into account by REGARDS."]}),"\n",(0,o.jsx)(n.h2,{id:"geometry-normalization",children:"Geometry normalization"}),"\n",(0,o.jsxs)(n.p,{children:["Despite RFC 7946, not all applications completely follows it especially when antimeridian line is crossed. It is the case of Elasticsearch.\nFurthermore, WGS84 is not designated to function with poles because it is a cylindrical projection.",(0,o.jsx)(n.br,{}),"\n","Even RFC 7946 lets some shadow zones, in this case REGARDS had made a choice for taking into account some cases explained lower.",(0,o.jsx)(n.br,{}),"\n","To counter all these drawbacks and make a consistent implementation, REGARDS provides a normalization for all geometries to manage a larger part of borderline problems."]}),"\n",(0,o.jsx)(n.h3,{id:"coordinate-ranges",children:"Coordinate Ranges"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Coordinates (longitude and latitude) are explained into ",(0,o.jsx)(n.strong,{children:"degrees"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Latitude is expressed from ",(0,o.jsx)(n.strong,{children:"-90\xb0"})," to ",(0,o.jsx)(n.strong,{children:"+90\xb0"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Longitude is expressed from ",(0,o.jsx)(n.strong,{children:"-180\xb0"})," (included) to ",(0,o.jsx)(n.strong,{children:"+180\xb0"})," (excluded) but exceptionally a negative longitude could be expressed from ",(0,o.jsx)(n.strong,{children:"+180\xb0"})," (included) to ",(0,o.jsx)(n.strong,{children:"+360\xb0"})," (excluded) as discussed lower."]}),"\n",(0,o.jsxs)(n.li,{children:["As WGS84 is a cylindrical projection, poles - which are simple points with latitude ",(0,o.jsx)(n.strong,{children:"90\xb0"})," or ",(0,o.jsx)(n.strong,{children:"-90\xb0"})," without taking into account longitude value - are ",(0,o.jsx)(n.em,{children:"transformed"})," into lines with longitude varying from ",(0,o.jsx)(n.strong,{children:"-180\xb0"})," to ",(0,o.jsx)(n.strong,{children:"+180\xb0"})," (or ",(0,o.jsx)(n.strong,{children:"360\xb0"})," in some cases), this permits to deal with convex polygon around poles (see lower)."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"bounding-box",children:"Bounding box"}),"\n",(0,o.jsxs)(n.p,{children:["A Bounding box (aka Bbox) is not a geometry object but is used as a search criterion parameter (opensearch norm).",(0,o.jsx)(n.br,{}),"\n","A bounding box is always expressed with 4 values: southwest corner longitude, southwest corner latitude, northeast corner longitude, northeast corner latitude.",(0,o.jsx)(n.br,{}),"\n","RFC 7946 says that the latitude of the northeast corner is always greater than the latitude of the southwest corner except when bounding boxes crosses the antimeridian. This means that",(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.code,{children:'"bbox": [177.0, -20.0, -178.0, -16.0]'}),(0,o.jsx)(n.br,{}),"\n","should cover 5 degrees of longitude.\nUnfortunately, Elasticsearch is not able to take this into consideration, so in this case, the Bbox criterion is replaced by:",(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.code,{children:'"bbox": [177.0, -20.0, 180.0, -16.0] OR "bbox": [-180.0, -20.0, -178.0, -16.0]'})]}),"\n",(0,o.jsx)(n.h3,{id:"linestring-and-multilinestring",children:"LineString and MultiLineString"}),"\n",(0,o.jsxs)(n.p,{children:["Elasticsearch forgets to be clever when taken into account line strings this means for a string crossing antimeridian, it does not use shortest path and always use the path crossing 0-longitude meridian.",(0,o.jsx)(n.br,{}),"\n","LineString normalization consists to first determine if strings cross antimeridian (",(0,o.jsx)(n.strong,{children:"as a simplification, algorithm only check longitudes distances to 0-meridian line and antimeridian, as if string edges where projected on equator, and then chooses short path between both edges"}),") and if so, transforms LineString into MultiLineString cutting input LineString at antimeridian.",(0,o.jsx)(n.br,{}),"\n","For example:",(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.code,{children:"LINE_STRING((100, 50), (-100, 0))"}),(0,o.jsx)(n.br,{}),"\n","is transformed into",(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.code,{children:"MULTI_LINE_STRING("}),(0,o.jsx)(n.br,{}),"\n","\xa0\xa0",(0,o.jsx)(n.code,{children:"LINE_STRING((100, 50), (180, 25)),"}),(0,o.jsx)(n.br,{}),"\n","\xa0\xa0",(0,o.jsx)(n.code,{children:"LINE_STRING((-180, 25), (-100, 0))"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.code,{children:")"}),(0,o.jsx)(n.br,{}),"\n","Of course, MultiLineString LineStrings components are all normalized and aggregated to produce normalized MultiLineString."]}),"\n",(0,o.jsx)(n.h3,{id:"polygon-and-multipolygon",children:"Polygon and MultiPolygon"}),"\n",(0,o.jsxs)(n.p,{children:["Polygons are the most complex geometries to normalize because of varieties (convex, concave, around poles) and difficulty to properly be analysed, don't forget that a geo polygon is a polygon on a sphere not just on a plane.",(0,o.jsx)(n.br,{}),"\n",(0,o.jsxs)(n.strong,{children:["First, note that by now, only ",(0,o.jsx)(n.em,{children:"simple"})," polygons are taken into account, ie convex and without holes"]}),". However it is possible to ingest complex Polygons or MultiPolygons but no normalization is applied."]}),"\n",(0,o.jsx)(n.h4,{id:"linear-ring",children:"Linear ring"}),"\n",(0,o.jsx)(n.p,{children:"Following RFC 7946, a polygon is composed of several linear rings. First one is the exterior ring, others are holes into exterior ring. A linear ring is a closed LineString with four or more positions, first and last ones must be the same."}),"\n",(0,o.jsxs)(n.p,{children:["It is ",(0,o.jsx)(n.strong,{children:"mandatory"})," to describe a polygon following right ",(0,o.jsx)(n.strong,{children:"hand rule"})," so exterior ring is described counterclockwise and holes clockwise. Don't forget that polygons belong to a sphere, this means that every polygon has a complementary polygon and the only way to discriminate them is to follow this rule."]}),"\n",(0,o.jsxs)(n.p,{children:["For example:",(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.code,{children:"POLYGON(((0, 80), (90, 80), (-90, 80), (0, 80)))"}),(0,o.jsx)(n.br,{}),"\n","is a cap around North pole else",(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.code,{children:"POLYGON(((0, 80), (-90, 80), (90, 80), (0, 80)))"}),(0,o.jsx)(n.br,{}),"\n","is a (huge) cap around South pole."]}),"\n",(0,o.jsx)(n.h4,{id:"normalization-algorithm",children:"Normalization algorithm"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["First, some polygons may have a large amplitude exceeding 180\xb0 or 270\xb0. Most of frameworks or software are not able to manage correctly such polygons because shortest distance between two point when crossing antimeridian is not well managed. To avoid this, first step of normalization is to use the fact that Elasticsearch is able to manage longitudes between -180\xb0 and 180\xb0 but also longitudes from 180\xb0 to 360\xb0 (excluded). Despite a path between 170\xb0 and -170\xb0 is not considered as going through antimeridian, same path between 170\xb0 and 190\xb0 is considered as going through antimeridian. Algorithm then analyzes each polygon linear strings and eventualy modifies longitudes following shortest path (same computation as LineString one).",(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.strong,{children:"=> This means that it's a good thing to start a large amplitude polygon with its westmost point as first element."})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Second, some polygons may contain North or South pole (or both) as a cap on 80\xb0 latitude for example (",(0,o.jsx)(n.code,{children:"POLYGON(((0, 80), (90, 80), (-90, 80), (0, 80)))"}),").",(0,o.jsx)(n.br,{}),"\n","Into WGS84 crs, this polygon is just a line between ",(0,o.jsx)(n.code,{children:"(-90, 80)"})," and ",(0,o.jsx)(n.code,{children:"(90, 80)"}),". A circle search centered on North pole with a radius lower than 10\xb0 (ie more than 1000 km) will not found previously given polygon.",(0,o.jsx)(n.br,{}),"\n","To make this fully functional with WGS84, algorithm exploits the fact that Elasticsearch takes into account all longitudes at 90\xb0 latitude (as if North and South pole were strings and not just a single point). After having determined that polygon is around a pole using Hipparchus framework (",(0,o.jsx)(n.a,{href:"https://www.hipparchus.org",children:"https://www.hipparchus.org"}),"), a polygon reaching North pole using complete longitude amplitude is added on top of current polygon.",(0,o.jsx)(n.br,{}),"\n","Previous polygon normalization is then:\n",(0,o.jsx)(n.code,{children:"POLYGON((0, 80), (90, 80), (180, 80), (180, 90), (-180, 90), (-180, 80), (-90, 80), (0, 80))"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"In theory, a convex polygon containing both poles should be well normalized but it would be a good idea to use a MultiPolygon intersecting initial polygon with equator."}),"\n",(0,o.jsx)(n.p,{children:"Of course, MultiPolygon Polygons components are all normalized and aggregated to produce normalized MultiPolygon."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var o=i(96540);const t={},s=o.createContext(t);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);