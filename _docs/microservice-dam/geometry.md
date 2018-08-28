---
layout: classic-docs
title: Geospatial features management
short-title: Geospatial behavior
categories:
  - microservice-dam
---

REGARDS supports geospatial search on Earth, Mars and celestial dome.

GeoJson format is internally used both by REGARDS and by ElasticSearch.

By now, some restrictions exist concerning applied geometries, search capabilities and geospatial projections.

Everything has been done to make use of API as easy as possible but it is necessary to fully understand underlying mechanisms of both data storage and searching to avoid border cases drawbacks.

# REGARDS Search capabilities

By now, REGARDS must be able to search geometric features into or accross a specified circle and a convex polygon and on Earth, Mars and for astronomic perfect sphere.

# Spatial Projection

REGARDS takes advantage of Elasticsearch powerful geometry search but this has a cost: Elasticsearch only uses WGS84 coordinate system, ie classic Earth cylindric projection (in particular used by GPS) where Earth is assimilated to an ellipsoid flattened on poles. This means that for Mars and astronomic search, it is necessary to transform input point coordinates into WGS84 equivalent coordinates to permit use of Elasticsearch geometric search so each geometry feature is both saved as is (with its specified crs) and saved transformed into WGS84 crs.

It is advisable that aim of REGARDS is to search intersections between geometries, not compute distances or areas for example which is fully compatible with projections transformations.

## Mars 

Mars is also an ellipsoid flattened on poles with a slightly flattening difference and an approximate half radius. Concerning polygon search it is enough to transform searching polygon into WGS84 crs and do the search with that geometry. For circle search, it is more complex:  
  - because of flattening difference between Earth an Mars, a circle on Mars is not a circle on Earth except if center is a pole are on equator,
  - thanks to ellipsoid symmetry and using Geotools API, it is easy to find upper and lower circle points on projected circle, 
  - with these two points, an inner circle and outer circle can be used: all geometries into inner circle can be taken, all geometries out of outer circle can be evicted
  - for all geometries between inner and outer circles, minimum distance from circle center is directly computed with Geotools using input Mars coordinates to determine if geometries can be taken or not.
  - **minimum distance computation from a point (circle center) and a polygon is done by computing distance between all edges of polygon lines and nine more points on all these lines** (this provides an acceptable approximation and knowing that, it is easy to increase precision by adding polygon points).

## Astro

Astronomic data are saved taking into account right ascention as a longitude and declination as a latitude, all in degrees. These geometries are then projected into a perfect sphere with medium earth radius (also known as authalic sphere).  
Same algorithm as Mars one is then used.  
The only difference is that to specify a circle for circle search, **half-angle of the cone in degrees** is specified in place of the radius.

# GeoJSON format

RFC tout ça....

# Geometry normalization

