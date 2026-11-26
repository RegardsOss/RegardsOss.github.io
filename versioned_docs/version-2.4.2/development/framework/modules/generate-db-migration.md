---
layout: classic-docs
title: Database Migration
sidebar_label: Database Migration
sidebar_position: 1
short-title: Database migration
---

## How to generate script migration

We're using the automatic generation of HBM2DDL to migrate without loosing data. Here is what you should do :

1. Create a class test in your DAO layer nammed `*Generator*`
1. Make that class extends `AbstractScriptGeneratorTest`
1. Remove and recreate public schema on the PostGres database that you use on tests
1. Run your class test
1. Open the file `<module>-dao/target/project_script.sql`
1. Create your own migration script `<module>-dao/src/main/resources/scripts/Vx.y.z__<description>.sql`
1. On the content of `<module>-dao/target/project_script.sql`, remove all SQL not related to the current module and just
   keep differences. Finally, convert these differences into minimal updates.

## Overview

As the management of production database structures is no longer carried out with HBM2DDL(Hibernate) but with FlyWay,
when an entity is modified, this modification must be propagated to the sql scripts enabling the corresponding database
structures to be set up.

Scripts are created for each module and are therefore available in the dao layer for each module. By default, in the
directory `<module>/<module>-dao/src/main/resources/scripts/<module>` (instancescripts for instance!).

As Flyway has a metadata table for each module, enabling it to manage the automatic launch of scripts and to check the
conformity of existing scripts with those already passed (checksum), updating the database structure can result in :

- deleting the existing schema and losing the data
- by modifying an existing script,
- or with backward compatibility (without loss of data) by creating a new versioned script.

Scripts follow the following format : **Vx.y.z__name.sql**.
 
Each module can define a ‘dbmodule.properties’ file (optional) to specify the dependencies between modules.