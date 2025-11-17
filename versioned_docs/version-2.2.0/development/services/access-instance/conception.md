---
title: How it works
sidebar_label: How it works
slug: /development/services/access-instance/conception
sidebar_position: 2
---

## Introduction

The `rs-access-instance` microservice is composed of two distinct modules in order to configure instance administration
web UI.

## Module : uiconfiguration

This module allows to handle the configuration of the Regards user interface with CRUD operations on the database
concerning the UI widgets, layout and themes for portal interface. This module is also used in the `rs-access-project`
microservice. All these graphical elements are stored in the database of Regards instance.

* Endpoints in order to handle the configuration
  of [UI module](../../frontend/modules/dynamic-modules.md) for user's
  UI : [Module Controller](./api-guides/rest/api-swagger.mdx#tag/module-controller)
* Endpoints in order to handle the configuration
  of [UI theme](../../frontend/components/theme.md) for user's
  UI : [UI Theme Controller](./api-guides/rest/api-swagger.mdx#tag/theme-controller)
* Endpoints in order to handle the configuration
  of [UI layout](../../frontend/layout-configuration.md) for user's
  UI : [UI Layout Controller](./api-guides/rest/api-swagger.mdx#tag/ui-layout-controller)
* Endpoints in order to handle the UI
  configuration : [UI Configuration Controller](./api-guides/rest/api-swagger.mdx#tag/ui-layout-controller)

## Module : toponyms-instance

A toponym is a geographic location, such as a town, region or country identified by a label.
The PostGIS extension is added in the PostgreSQL database. PostGIS extends the capabilities of the PostgreSQL relational
database by adding support for storing, indexing, and querying geospatial data.

This module allows to store and to retrieve toponyms in the database thanks to a REST API (
see [API GUIDES](./api-guides/rest/api-swagger.mdx#tag/toponyms-controller)).

List of endpoints :

* Retrieve all toponyms (only visible toponyms, with geometry) with pagination from the database
* Get a toponym (by default, with geometry : `simplified=false`) by its business identifier from the database. If
  the `simplified` parameter is true, the geometry is not contained in the returned toponym.
* Search a toponym thanks to a partial label from the database. Geometries are not retrieved and list content is limited
  to 100 toponyms. By default only visible toponyms are retrieved. If the partial label is empty, retrieve the list of
  toponyms (only visible toponyms, with geometry) limited to 100.
* Create a new toponym in the database, visible only for a user (number of created toponym limited by user and by day :
  see configuration). The new toponym has a expiration date of 1 day.

At the starting of microservice, a list of toponyms concerning countries is loaded in the database of Regards thanks to
the SQL script.
To add new toponyms in the database of Regards, you can use :

* a SQL script :

 ```
 INSERT INTO ${flyway:defaultSchema}.t_toponyms ("geom" , "bid", "label", "label_fr", "copyright") 
 VALUES (
    public.ST_SetSRID('0103000000010000000B000000FEFFFF7F767851C0350000007DD22840FAFFFFBF9A7C51C0E7FFFF9F92DF2840FFFFFF3FC78351C03600002096142940FBFFFF7FD18351C0500000E06B412940020000E01F8251C007000000963C2940FDFFFFBFA97B51C0220000405D0E2940FDFFFFBF677951C0120000C02FF62840FAFFFFBF0C7951C0F5FFFFFFC6F1284004000000AD7851C0280000C061EA2840FDFFFFBFFD7751C0080000209FD42840FEFFFF7F767851C0350000007DD22840'::public.GEOMETRY,4326), 
    'Aruba', 
    'Aruba', 
    'Aruba', 
    'arcgis'
);
 ```

* a command line tool nammed [ogr2ogr](https://gdal.org/programs/ogr2ogr.html) that converts one Ogr defined data source
  to another Ogr data source. Ogr supports many data formats here is a subset of the ones we commonly use: ESRI
  Shapefile, MapInfo Tab file, CSV, DBF, GML, KML, Interlis, SQLite, GeoPackage,SpatiaLite, ODBC, ESRI GeoDatabase (MDB
  format), ESRI GDB database, PostGIS/PostgreSQL.

The following script allows to insert toponym in the database of Regards thanks to a shapefile.

 ```
 gr2ogr -f "PostgreSQL" \
-update -append \
-skipfailures \
-lco FID=id \
-lco SCHEMA=toponyms \
-nln toponyms.t_toponyms \
"PG:host=<host> user=<login> password=<password> dbname=<dbname>" \
-lco GEOMETRY_NAME=geom \
-sql "SELECT <label from shape file> AS label, <label from shape file> AS label_fr, \
      <copiright from shape file> AS copyright, <unique identifier from shape file> AS bid FROM <shapeFile>"  \
-lco PRECISION=no -nlt PROMOTE_TO_MULTI \
<shapeFile>.shp
 ```

Structure of table(name: t_toponyms) of database in order to define a toponym in Regards :

| Column          | Type                                      | Description                               |
|-----------------|-------------------------------------------|-------------------------------------------|
| bid             | varchar(50) not null UNIQUE (primary key) | Business identifier                       |     
| label           | varchar(256) NOT NULL                     | Label of toponym                          |
| label_fr        | varchar(256) NOT NULL                     | Label of toponym (in french)              |
| copyright       | varchar(512)                              | Copyright of toponym                      |
| description     | varchar(512)                              | Description of toponym                    |
| geom            | public.geometry(Geometry,4326)            | Geometry information SRID=4326 (PostGIS)  |
| visible         | boolean DEFAULT true                      | Visibility of toponym in IHM              |
| creation_date   | timestamp DEFAULT CURRENT_TIMESTAMP       | Date of creation of toponym in database   |
| expiration_date | timestamp                                 | Date of expiration of toponym in database |
| project         | varchar(256)                              | Name of project for the toponym           |
| author          | varchar(100)                              | Author for the toponym                    |

:::info
A scheduler is defined to clean old toponyms in the database; if the toponym is not visible and its expiration date is
passed.
:::







