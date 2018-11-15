---
layout: classic-docs
title: Geospatial features management
short-title: Geospatial behavior
categories:
  - features
---

* TOC
{:toc}

REGARDS supports geospatial search on Earth, Mars and celestial dome.

GeoJson format is internally used both by REGARDS and by ElasticSearch.

By now, some restrictions exist concerning applied geometries, search capabilities and geospatial projections.

Everything has been done to make use of API as easy as possible but it is necessary to fully understand underlying mechanisms of both data storage and searching to avoid border cases drawbacks.

## REGARDS Search capabilities

By now, REGARDS must be able to search geometric features into or accross a specified circle and a convex polygon on Earth, Mars and for astronomic perfect sphere.

## Spatial Projection

REGARDS takes advantage of Elasticsearch powerful geometry search but this has a cost: Elasticsearch only uses WGS84 coordinate system, ie classic Earth cylindric projection (in particular used by GPS) where Earth is assimilated to an ellipsoid flattened on poles. This means that for Mars and astronomic search, it is necessary to transform input point coordinates into WGS84 equivalent coordinates to permit use of Elasticsearch geometric search so each geometry feature is both saved as is (with its specified crs) and saved transformed into WGS84 crs.

It is advisable that aim of REGARDS is to search intersections between geometries, not compute distances or areas for example which is fully compatible with projections transformations.

### Mars 

Mars is also an ellipsoid flattened on poles with a slightly flattening difference and an approximate half radius. Concerning polygon search it is enough to transform searching polygon into WGS84 crs and do the search with that geometry. For circle search, it is more complex:  
  - because of flattening difference between Earth an Mars, a circle on Mars is not a circle on Earth except if center is a pole or on equator,
  - thanks to ellipsoid symmetry and using Geotools API, it is easy to find upper and lower circle points on projected circle, 
  - with these two points, an inner circle and outer circle can be used: all geometries into inner circle can be taken, all geometries out of outer circle can be evicted
  - for all geometries between inner and outer circles, minimum distance from circle center is directly computed with Geotools using input Mars coordinates to determine if geometries can be taken or not.
  - **minimum distance computation from a point (circle center) and a polygon is done by computing distance between all edges of polygon lines and nine more points on all these lines** (this provides an acceptable approximation and knowing that, it is easy to increase precision by adding polygon points).

### Astro

Astronomic data are saved taking into account right ascension as a longitude and declination as a latitude, all in degrees. These geometries are then projected into a perfect sphere with medium earth radius (also known as authalic sphere).  
Same algorithm as Mars one is then used.  
The only difference is that to specify a circle for circle search, **half-angle of the cone in degrees** is specified in place of the radius.

## GeoJSON format

Geometry objects are described internally with GeoJSON format following RFC 7946 (https://tools.ietf.org/html/rfc7946). This specification permits to defines following geometry objects:
  - Point
  - MultiPoint
  - LineString
  - MultiLinesString
  - Polygon
  - MultiPolygon  

Please, refer directly to given link for more precisions.  
It is advisable to carefully read and understand:
  - Polygon build especially linear ring right hand rule concept.
  - Antimeridian Cutting.

**Note:** by now, concerning polygons, only convex ones without holes are taken into account by REGARDS.

## Geometry normalization

Despite RFC 7946, not all applications completely follows it especially when antimeridian line is crossed. It is the case of Elasticsearch. 
Furthermore, WGS84 is not designated to function with poles because it is a cylindrical projection.  
Even RFC 7946 lets some shadow zones, in this case REGARDS had made a choice for taking into account some cases explained lower.  
To counter all these drawbacks and make a consistent implementation, REGARDS provides a normalization for all geometries to manage a larger part of borderline problems.

### Coordinate Ranges

-  Coordinates (longitude and latitude) are explained into **degrees**.
-  Latitude is expressed from **-90°** to **+90°**.
-  Longitude is expressed from **-180°** (included) to **+180°** (excluded) but exceptionally a negative longitude could be expressed from **+180°** (included) to **+360°** (excluded) as discussed lower.
-  As WGS84 is a cylindrical projection, poles - which are simple points with latitude **90°** or **-90°** without taking into account longitude value - are *transformed* into lines with longitude varying from **-180°** to **+180°** (or **360°** in some cases), this permits to deal with convex polygon around poles (see lower).

### Bounding box

A Bounding box (aka Bbox) is not a geometry object but is used as a search criterion parameter (opensearch norm).  
A bounding box is always expressed with 4 values: southwest corner longitude, southwest corner latitude, northeast corner longitude, northeast corner latitude.  
RFC 7946 says that the latitude of the northeast corner is always greater than the latitude of the southwest corner except when bounding boxes crosses the antimeridian. This means that  
`"bbox": [177.0, -20.0, -178.0, -16.0]`  
should cover 5 degrees of longitude.
Unfortunately, Elasticsearch is not able to take this into consideration, so in this case, the Bbox criterion is replaced by:  
`"bbox": [177.0, -20.0, 180.0, -16.0] OR "bbox": [-180.0, -20.0, -178.0, -16.0]`  

### LineString and MultiLineString

Elasticsearch forgets to be clever when taken into account line strings this means for a string crossing antimeridian, it does not use shortest path and always use the path crossing 0-longitude meridian.  
LineString normalization consists to first determine if strings cross antimeridian (**as a simplification, algorithm only check longitudes distances to 0-meridian line and antimeridian, as if string edges where projected on equator, and then chooses short path between both edges**) and if so, transforms LineString into MultiLineString cutting input LineString at antimeridian.  
For example:  
`LINE_STRING((100, 50), (-100, 0))`  
 is transformed into  
`MULTI_LINE_STRING(`  
  &nbsp;&nbsp;`LINE_STRING((100, 50), (180, 25)),`  
  &nbsp;&nbsp;`LINE_STRING((-180, 25), (-100, 0))`  
`)`  
Of course, MultiLineString LineStrings components are all normalized and aggregated to produce normalized MultiLineString.

### Polygon and MultiPolygon

Polygons are the most complex geometries to normalize because of varieties (convex, concave, around poles) and difficulty to properly be analysed, don't forget that a geo polygon is a polygon on a sphere not just on a plane.  
**First, note that by now, only *simple* polygons are taken into account, ie convex and without holes**. However it is possible to ingest complex Polygons or MultiPolygons but no normalization is applied.

#### Linear ring

Following RFC 7946, a polygon is composed of several linear rings. First one is the exterior ring, others are holes into exterior ring. A linear ring is a closed LineString with four or more positions, first and last ones must be the same.

It is **mandatory** to describe a polygon following right **hand rule** so exterior ring is described counterclockwise and holes clockwise. Don't forget that polygons belong to a sphere, this means that every polygon has a complementary polygon and the only way to discriminate them is to follow this rule.

For example:  
`POLYGON(((0, 80), (90, 80), (-90, 80), (0, 80)))`  
is a cap around North pole else  
`POLYGON(((0, 80), (-90, 80), (90, 80), (0, 80)))`  
is a (huge) cap around South pole.


#### Normalization algorithm

- First, some polygons may have a large amplitude exceeding 180° or 270°. Most of frameworks or software are not able to manage correctly such polygons because shortest distance between two point when crossing antimeridian is not well managed. To avoid this, first step of normalization is to use the fact that Elasticsearch is able to manage longitudes between -180° and 180° but also longitudes from 180° to 360° (excluded). Despite a path between 170° and -170° is not considered as going through antimeridian, same path between 170° and 190° is considered as going through antimeridian. Algorithm then analyzes each polygon linear strings and eventualy modifies longitudes following shortest path (same computation as LineString one).  
**=> This means that it's a good thing to start a large amplitude polygon with its westmost point as first element.**

- Second, some polygons may contain North or South pole (or both) as a cap on 80° latitude for example (`POLYGON(((0, 80), (90, 80), (-90, 80), (0, 80)))`).  
Into WGS84 crs, this polygon is just a line between `(-90, 80)` and `(90, 80)`. A circle search centered on North pole with a radius lower than 10° (ie more than 1000 km) will not found previously given polygon.  
To make this fully functional with WGS84, algorithm exploits the fact that Elasticsearch takes into account all longitudes at 90° latitude (as if North and South pole were strings and not just a single point). After having determined that polygon is around a pole using Hipparchus framework (https://www.hipparchus.org), a polygon reaching North pole using complete longitude amplitude is added on top of current polygon.  
Previous polygon normalization is then:
`POLYGON((0, 80), (90, 80), (180, 80), (180, 90), (-180, 90), (-180, 80), (-90, 80), (0, 80))`.

In theory, a convex polygon containing both poles should be well normalized but it would be a good idea to use a MultiPolygon intersecting initial polygon with equator.

Of course, MultiPolygon Polygons components are all normalized and aggregated to produce normalized MultiPolygon.