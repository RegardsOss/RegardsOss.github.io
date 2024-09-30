---
title: How it works
sidebar_label: How it works
slug: /development/services/admin-instance/conception/
sidebar_position: 2
---

## Introduction

The microservice `rs-admin-instance` groups together a set of functionalities divided into different modules,
specifically used in the Regards instance and attached to the instance database.

## Module : accessrights-instance

This module aims to handle access rights for users of Regards. It specifically manages user accounts. One same account
can have different project users for each project, so one account can be linked to several projects.  
Accounts are transverse to all projects and so are persisted in an instance database.

:::info
To delete a user account, no project user associated with this account must still be associated with a project.
:::

## Module : emails-instance

This module centralises the process of sending emails asynchronously to the SMTP server from the Regards application.
This module can be used by other Regards microservices via an HTTP client.

Initially, the client microservice sends a request to send an email including data such as the
from, to, cc, subject, and text fields. This request is stored in the database and a scheduler processes these requests
over time in order to send an email to the recipient.

If the sending of an asynchronous email fails, it will be repeated with 9 attempts. The time between
the attempts is configurable. By default, attempts are made quickly at the beginning, then spaced out more and more.
A notification will be created to inform the Regards administrator of any errors encountered when sending
mails. Requests will be deleted from the database when more than 9 attempts are made.

## Module : notification-instance

This module contains the functionalities linked to UI notifications for the portal of Regards :

* creation of notifications
* search for notifications based on search criteria
* deleting one or more notifications based on search criteria
* update notifications to indicate which have already been read by the user.

This module works in the same way as the notification module in the microservice `rs-admin-project`. However, in
the `rs-admin-instance` microservice, all notifications and notification configurations are saved in the Regards
instance database.

## Module : project-instance

This module is used to manage the functionalities linked to the various tenants/projects created in Regards with their
connection to the database.
Each project/tenant is made up of a list of microservices based on the requirements of the missions to be carried out.
These microservices each use a database (one database per microservice) or a database schema (one database with one
schema per microservice) to store the information required for its operation.  
Consequently, this module manages the technical information (driver, username, password, url, etc.) relating to the
connection
to the databases.

At start-up, an initial project is already present in the Regards application.

:::info
Before creating a new project, you must first create the corresponding new database in the
Regards PostgreSQL database.
:::





