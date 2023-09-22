---
id: appendices-geometry
title: REGARDS products geometry
sidebar_label: REGARDS products geometry
slug: /development/appendices/geometry/
---

## Products geometry 

REGARDS use GeoJson format for indexed products. Geometry associated to a product is defined in "geomtry" field like here under exemples.

As REGARDS uses GeoJson standard, geometries need to respect GeoJson format as defined in [RFC 7946](https://datatracker.ietf.org/doc/html/rfc7946#section-3.1.6).

Principal rules to generate geometries are :
 - External ring of polygones MUST be oriented counterclockwise
 - Distance between two successive points cannot be larger than 180°

 If those two rules are respected, REGARDS will take your geometry into account and will cut polygons which cross antimeridian into multi polygons to allow catalog research using WGS84.

 `Valid polygons`

```json
{
    "type": "Feature",
    "id": "file_1.txt",
    "ipType": "DATA",
    "geometry": {
        "type":"MultiPolygon",
        "coordinates":[[[[-170,28],[-170,10],[-180,10],[-180,28],[-170,28]]],[[[180,28],[170,28],[170,10],[180,10],[180,28]]]]
    },
    "properties": {}
}
```

`Invalid polygon (wrong rotation way)`

```json
{
    "type": "Feature",
    "id": "file_1.txt",
    "ipType": "DATA",
    "geometry": {
        "type":"Polygon",
        "coordinates":[[[-50,28],[-50,10],[-20,10],[-120,28],[-50,28]]]
    },
    "properties": {}
}
```

`Invalid polygon crossing antimeridian (distance between two successive points too large and right rotation way)`

```json
{
    "type": "Feature",
    "id": "file_1.txt",
    "ipType": "DATA",
    "geometry": {
        "type":"Polygon",
        "coordinates":[[[50,-50],[-20, -50],[-20,10],[50,10],[-50,-50]]]
    },
    "properties": {}
}
```

## REGARDS projects geometry configuration

For each projet of a REGARDS instance, administrator can configure how geometry will be handled with two parameters :
 - Projection : Choose between REGARDS handled projections WGS84 (for earth geometries), Mars or Celestial vault.
 - handle polar cap polygons : If true, polygons are transformed using a spherical projection and then polygons should respect the previous second rule defined (distance between too consecutive points).

Those two parameters are configurable through admin instance HMI during [project configuration](../../user-documentation/1-global-configuration/project-configuration.md).