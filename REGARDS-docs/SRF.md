---
layout: classic-docs
title: Software Reuse File
short-title: Software Reuse File
categories:
  - how-to
description: List all used software
---

Name | Company |  Responsibility  
:-------------------: | :-----------------------: | :---------------:  
Xavier-Alexandre Brochard | CSSI | Development Team  
Sylvain Vissiere-Guerinet | CSSI | Development Team  

# Document Status Sheet

Issue |    Date    |    Reasons for change
:-------: | :---------: | :-------------------------:
01    | 2018-04-27 | Add known security vulnerabilities  
00    | 2016-07-28 | Creation of the document  

# Table of contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [1. Introduction](#1-introduction)
  - [1. Purpose of the document](#1-purpose-of-the-document)
  - [2. Scope](#2-scope)
  - [3. Document structure](#3-document-structure)
  - [4. References](#4-references)
    - [1. Applicable and Reference documents](#1-applicable-and-reference-documents)
    - [2. Definitions](#2-definitions)
- [2. Third party products and required software licenses](#2-third-party-products-and-required-software-licenses)
  - [1. General](#1-general)
    - [1. Free license categorization and meaning](#1-free-license-categorization-and-meaning)
    - [2. Impact of free licenses on customers](#2-impact-of-free-licenses-on-customers)
  - [2. Frontend](#2-frontend)
    - [1. Runtime frontend](#1-runtime-frontend)
      - [1. React](#1-react)
      - [2. Redux](#2-redux)
      - [3. Material-UI](#3-material-ui)
      - [4. Lodash](#4-lodash)
    - [2. Compile time frontend](#2-compile-time-frontend)
      - [1. Webpack](#1-webpack)
      - [2. TypeScript](#2-typescript)
    - [3. Testing frontend](#3-testing-frontend)
      - [1. Mocha](#1-mocha)
      - [2. Chai](#2-chai)
  - [3. Backend](#3-backend)
    - [1. Runtime backend](#1-runtime-backend)
      - [1. Java](#1-java)
        - [1.1. License](#11-license)
        - [1.2. Known security vulnerabilities](#12-known-security-vulnerabilities)
      - [2. Spring Framework](#2-spring-framework)
        - [2.1. License](#21-license)
        - [2.2. Known security vulnerabilities](#22-known-security-vulnerabilities)
      - [3. Spring Security](#3-spring-security)
        - [3.1 License](#31-license)
        - [3.2 Known security vulnerabilities](#32-known-security-vulnerabilities)
      - [4. Spring Data JPA](#4-spring-data-jpa)
        - [4.1 License](#41-license)
        - [4.2 Known security vulnerabilities](#42-known-security-vulnerabilities)
      - [5. Spring Boot](#5-spring-boot)
        - [5.1. License](#51-license)
        - [5.2. Known security vulnerabilities](#52-known-security-vulnerabilities)
      - [6. Spring Cloud Netflix](#6-spring-cloud-netflix)
        - [6.1. License](#61-license)
        - [6.2. Known security vulnerabilities](#62-known-security-vulnerabilities)
      - [7. Spring Cloud Config](#7-spring-cloud-config)
        - [7.1. License](#71-license)
        - [7.2. Known security vulnerabilities](#72-known-security-vulnerabilities)
      - [8. Open Feign](#8-open-feign)
        - [8.1. License](#81-license)
        - [8.2. Known security vulnerabilities](#82-known-security-vulnerabilities)
      - [9. Spring HATEOAS](#9-spring-hateoas)
        - [9.1. License](#91-license)
        - [9.2. Known security vulnerabilities](#92-known-security-vulnerabilities)
      - [10. IzPack](#10-izpack)
        - [10.1. License](#101-license)
        - [10.2. Known security vulnerabilities](#102-known-security-vulnerabilities)
      - [11. RabbitMQ](#11-rabbitmq)
        - [11.1 License](#111-license)
        - [11.2 Known security vulneratilities](#112-known-security-vulneratilities)
      - [12. Elasticsearch](#12-elasticsearch)
        - [12.1. License](#121-license)
        - [12.2. Known security vulnerabilities](#122-known-security-vulnerabilities)
      - [13. FITS Java library](#13-fits-java-library)
        - [13.1. License](#131-license)
        - [13.2 Known security vulnerabilities](#132-known-security-vulnerabilities)
    - [2. Compile time backend](#2-compile-time-backend)
      - [1. Apache Maven](#1-apache-maven)
        - [1.1. License](#11-license-1)
        - [1.2. Known security vulnerabilities](#12-known-security-vulnerabilities-1)
    - [3. Testing](#3-testing)
      - [1. Jenkins](#1-jenkins)
        - [1.1. License](#11-license-2)
      - [2. SonarQube](#2-sonarqube)
        - [2.1. License](#21-license-1)
      - [3. Selenium](#3-selenium)
        - [3.1. License](#31-license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 1. Introduction

### 1. Purpose of the document

This document, Software Reuse File (SRF), describes any item of software, which it proposes for reuse.

It explains the reason why the software is proposed for reuse, where and the extent to which the software would be integrated in the software deliverables, the ownership of the software item and the license conditions on which the software could be used by the CNES or a third party during the contract, and after the contract's conclusion.

### 2. Scope

The document describes the software to be re-used in the frontend application during the pre-development phase (proof-of-concepts phase) of REGARDS.

For the sake of simplicity, only the most significant COTS will be described here.

### 3. Document structure

The document is structured as follows:

- This chapter gives the purpose and the structure of the document and the list of references: applicable and reference documents and definitions.
- Chapter 2 provides in a first part a detailed depiction of the free licenses categorization and impacts on users, and in a second part an analysis of the 3rd party products reused in REGARDS.

### 4. References

#### 1. Applicable and Reference documents

Applicable and reference documents are:

Reference             | Acronym |                     Title                     | Version |    Date
--------------------- | :-----: | :-------------------------------------------: | :-----: | :--------:
SGDS-SL-12100-0002-CS |  TODO   |   DOSSIER DE SPECIFICATION LOGICIEL REGARDS   |   01    | 25/03/2016
SGDS-CP-12200-0010-CS |  TODO   | Dossier de Conception Préliminaire du REGARDS |   00    | 01/06/2016

#### 2. Definitions

TODO

## 2. Third party products and required software licenses

This chapter provides an analysis of the 3rd party products reused in the REGARDS.

This chapter also identifies required Software Licenses, and lists all the development and documentation production tools.

However, before describing these elements, we introduce a reminder on free license products, in order to categorise the impact on any actor and other third party use during and after the project.

### 1. General

#### 1. Free license categorization and meaning

Free license are generally classified into the following three main categories, according to ascending permissivity:

- Strong copyleft licenses (GPL, CeCILL)
- Weak copyleft licenses (LGPL)
- Permissive licenses (BSD, MIT, Apache

All these licenses categories share some general features. They all **allow free use regardless of domain or country. They all allow redistribution. They all allow modification. They all allow distribution of the modifications** (these are known as the four freedoms of free software). The categories differ in how redistributed code can be licensed if someone decides to exercise his right to redistribute.

**Strong copyleft** licenses like GPL or CeCILL mandates that derived products are redistributed under the same terms as the original FOSS component that is used to build the product. This means that an image processing filter built using a CeCILL licensed library will also be subject to the same CeCILL license. This characteristic of the strong copyleft licenses is sometimes known as a "reciprocal" property: if one uses code from someone under a copyleft license for building a product, one will also distribute this product under the same license so other people can also build something else on top of it.

**Weak copyleft** licenses like LGPL, EPL or CeCILL-C are similar in spirit but the license spreading feature can be limited to modification of the original code. As an example, if an image processing filter uses an LGPL based library and is linked to it using dynamic linking only, then only the changes to the library must be distributed under the terms of the LGPL and the complete program can be distributed under other license terms if desired. So the "weak" term refers to the fact license reciprocity is more limited.

**Permissive licenses** like MIT, BSD or Apache licenses do not mandate any licensing terms for derived product. This means an image processing filter built using an Apache license library can be distributed under any licenses terms, even if the original Apache code itself has been modified.

As seen, copyleft notion has to deal with distribution agreement. It is better identified as a "reciprocal" effect but may sometimes be negatively referred to as "viral propagation", "infection" or "contamination" in some cases. For instance, let's consider a project which includes any amount of source code from free licensed product "A" and there is a need to make changes to some part of source code, corresponding to additional code "A' ", on the one hand, plus a need to add a wrapping layer "B", on the other hand. "A" + "A' " + "B" aiming to create a new "Alpha" application. "Alpha" product diffusion license can be chosen only according to "A" original license itself as explained hereafter:

- whenever "A" is distributed under the terms of a **strong** copyleft license, the entire new or modified pieces of code ("A' " in this example) or derived work ("B") becomes subject to the terms of the original license,
- Whenever "A" is distributed under the terms of a **weak** copyleft license, in some cases only modified work becomes subject to the terms of the original license. Thus, whereas "A" and "A' " will be subject to the terms of "A" original license, yet "B" may be submitted to another kind of license. Some conditions must be fulfilled in such a case: if both "A" and "A' " are part of a **dynamically linked** library and the final user is given the capability of replacing "A+A' " in order to introduce his own modification ""A+A'+A'' ", then "B" may be distributed under a different license. On the other side, if both "A" and "A' " are part of a **statically linked** library, then "B" should be distributed under the terms of the same license. Exact conditions of distribution are described within the license terms themselves. A careful attention must be paid onto the distribution license version, either LGPL v2.1 or LGPL v3, which differ on this point
- whenever "A" is distributed under the terms of a **permissive** license, then "A' " and "B" may be distributed under any kind of license, in fact, even "A" can be relicensed if needed

Distribution licenses type depends on two major characteristics.

First, the kind of distribution of a given license is conditioned by the intention or not to have it distributed to third parties or not. Thus, whenever developers use a given product, even modified, for private usage (private may be understood even within a firm), the derived product may be kept private and secret and need no specific license itself. However, whenever it is intended to distribute the product to third parties, then either updated or derived products should be distributed under free licenses as well.

Moreover, whenever one intends to distribute pieces of code under the terms of a copyleft license, then this distribution may be strictly limited to the product recipient alone. It is not mandatory to publish it on internet or to deliver it back to the original product former authors or community. Yet exception may be found in some cases (see later).

#### 2. Impact of free licenses on customers

Customers may be led to change their distribution policy for some products originally developed for their own internal use with no initial intention to have them shared or edited. Whenever they decide later on to have these products finally distributed to other space agencies for instance or industrial, they have to reconsider the licensing terms of the included free software components.

In order to make this kind of distribution policy changes possible, one way is to avoid using **strong** copyleft components even for internal products. This prevents expensive developments to get rid of some restrictive COTS for instance and replace them by more permissive equivalent.

Therefore, CS proposes, when possible, to avoid **strong** copyleft COTS usage within its developments, such as GPL, AGPL, CeCILL and prefer **weak** copyleft (res. **permissive** license) such as LGPL, CeCILL-C (res. CeCILL-B, BSD, MIT, Apache).

Using **weak** copyleft licenses products without any change enables to guarantee that no code developed within the project should fall under distribution rules that may get incompatible to related intellectual property laws.

### 2. Frontend

#### 1. Runtime frontend

##### 1. React

Feature | Value             | Description
:-----------------------------: | :--------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------:  
Name | React Main features | React is a component-based JavaScript library for building user interfaces.  
Developer/Ownership | Facebook, Inc.  
Licencing conditions | Open source - BSD License | Industrial Property Constraints Redistribution and use in source and binary forms, with or without modification, are permitted provided [those conditions](#https://github.com/facebook/react/blob/master/LICENSE).  
Version | 15.0.2  
Languages | JavaScript, C++, TypeScript, CoffeScript, Python, C

##### 2. Redux

Feature | Value             | Description
:-----------------------------: | :--------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------:  
Name | Redux Main features | Redux is a predictable state container for JavaScript apps.  
Developer/Ownership | Dan Abramov  
Licencing conditions | Open source - MIT License (MIT) | Industrial Property Constraints Permission is granted, free of charge, to deal in the Software without restriction, subject to [those conditions](#https://github.com/reactjs/redux/blob/master/LICENSE.md)  
Version | 3.5.2  
Languages | JavaScript, TypeScript

##### 3. Material-UI

Feature | Value             | Description
:-----------------------------: | :--------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------:  
Name | Material-UI Main features | Material-UI is a set of React components that implement Google's Material Design specification.  
Developer/Ownership | Call-Em-All  
Licencing conditions | Open source - MIT License (MIT) | Industrial Property Constraints Permission is granted, free of charge, to deal in the Software without restriction, subject to [those conditions](#https://github.com/callemall/material-ui/blob/master/LICENSE)  
Version | 0.15.2  
Languages | JavaScript

##### 4. Lodash

Feature | Value             | Description
:-----------------------------: | :--------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------:  
Name | Lodash Main features | Lodash is a JavaScript utility library delivering modularity, performance, & extras.  
Developer/Ownership | jQuery Foundation and other contributors  
Licencing conditions | Open source - MIT License (MIT) | Industrial Property Constraints Permission is granted, free of charge, to deal in the Software without restriction, subject to [those conditions](#https://github.com/lodash/lodash/blob/master/LICENSE)  
Version | 4.13.1  
Languages | JavaScript

#### 2. Compile time frontend

##### 1. Webpack

Feature | Value             | Description
:-----------------------------: | :--------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------:  
Name | Webpack Main features | Webpack is a bundler for modules. The main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.  
Developer/Ownership | Tobias Koppers  
Licencing conditions | Open soure - MIT License (MIT) | Industrial Property Constraints Permission is granted, free of charge, to deal in the Software without restriction, subject to [those conditions](#https://github.com/webpack/webpack/blob/master/LICENSE)  
Version | 1.13.1  
Languages | JavaScript

##### 2. TypeScript

Feature | Value             | Description
:-----------------------------: | :--------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------:  
Name | TypeScript Main features | TypeScript is a language (a typed superset of JavaScript) for application-scale JavaScript. TypeScript adds optional types, classes, and modules to JavaScript. TypeScript compiles to readable, standards-based JavaScript.  
Developer/Ownership | Microsoft  
Licencing conditions | Open source - Apache License | Industrial Property Constraints Perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare Derivative Works of, publicly display, publicly perform, sublicense, and distribute the Work and such Derivative Works in Source or Object form.  
Version | 2.0.0  
Languages | TypeScript

#### 3. Testing frontend

##### 1. Mocha

Feature | Value             | Description
:-----------------------------: | :--------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------:  
Name | Mocha Main features | Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser.  
Developer/Ownership | TJ Holowaychuk  
Licencing conditions | Open source - MIT License (MIT) | Industrial Property Constraints Permission is granted, free of charge, to deal in the Software without restriction, subject to [those conditions](#https://github.com/mochajs/mocha/blob/master/LICENSE)  
Version | 3.0.0-2  
Languages | JavaScript, HTML

##### 2. Chai

Feature | Value             | Description
:-----------------------------: | :--------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------:  
Name | Chai Main features | Chai is an assertion framework for node.js and the browser that can be paired with any testing framework.  
Developer/Ownership | Jake Luer  
Licencing conditions | Open source - MIT License (MIT) | Industrial Property Constraints Permission is granted, free of charge, to deal in the Software without restriction, subject to [those conditions](#https://github.com/chaijs/chai#license)  
Version | 3.5.0  
Languages | JavaScript

### 3. Backend

#### 1. Runtime backend

##### 1. Java

###### 1.1. License

Feature | Value             | Description
:-----------------------------: | :--------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------:  
Name | Java Main features | Java is a general-purpose computer programming language.  
Developer/Ownership | Oracle  
Licencing conditions | GNU GPL | Industrial Property Constraints Redistribution and use in source and binary forms, with or without modification, are permitted provided [those conditions](#http://www.oracle.com/technetwork/java/javase/downloads/thirdpartylicensereadme-java8-2168078.txt).  
Version | 8  
Languages | C++,C


###### 1.2. Known security vulnerabilities

List of vulnerabilities made the 2018-04-27.

Source: https://www.securityfocus.com/bid

Vulnerability CVE identifier | Description | CVSS Score | Publication date | Solved By  
:--------------------------: | :---------: | :--------: | :--------------: | :-------:  
CVE-2015-2808 | The RC4 algorithm, as used in the TLS protocol and SSL protocol, does not properly combine state data with key data during the initialization phase, which makes it easier for remote attackers to conduct plaintext-recovery attacks against the initial bytes of a stream by sniffing network traffic that occasionally relies on keys affected by the Invariance Weakness, and then using a brute-force approach involving LSB values, aka the "Bar Mitzvah" issue. | 4.3 | 2015-03-31 | None  

The vulnerability exposes REGARDS to no threats as we are not directly using SSL or TLS protocols. SSL protocol is handled by Apache from WEB-NG.  

Vulnerability CVE identifier | Description | CVSS Score | Publication date | Solved By  
:--------------------------: | :---------: | :--------: | :--------------: | :-------:  
CVE-2014-1876 | The unpacker::redirect_stdio function in unpack.cpp in unpack200 in OpenJDK 6, 7, and 8; Oracle Java SE 5.0u61, 6u71, 7u51, and 8; JRockit R27.8.1 and R28.3.1; and Java SE Embedded 7u51 does not securely create temporary files when a log file cannot be opened, which allows local users to overwrite arbitrary files via a symlink attack on /tmp/unpack.log. | 4.4 | 2014-02-10 | None  

TODO: justif

Vulnerability CVE identifier | Description | CVSS Score | Publication date | Solved By  
:--------------------------: | :---------: | :--------: | :--------------: | :-------:  
CVE-2015-4000 | The TLS protocol 1.2 and earlier, when a DHE_EXPORT ciphersuite is enabled on a server but not on a client, does not properly convey a DHE_EXPORT choice, which allows man-in-the-middle attackers to conduct cipher-downgrade attacks by rewriting a ClientHello with DHE replaced by DHE_EXPORT and then rewriting a ServerHello with DHE_EXPORT replaced by DHE, aka the "Logjam" issue. | 4.3 | 2015-05-20 | None  

The vulnerability exposes REGARDS to no threats as we are not using TLS protocol. 

##### 2. Spring Framework

###### 2.1. License

Feature | Value             | Description
:-----------------------------: | :--------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------:  
Name | Spring Main features | The Spring Framework provides a comprehensive programming and configuration model for modern Java-based enterprise applications - on any kind of deployment platform.  
Developer/Ownership | Pivotal  
Licencing conditions | Apache license, version 2 | Industrial Property Constraints Redistribution and use in source and binary forms, with or without modification, are permitted provided [those conditions](#http://www.apache.org/licenses/LICENSE-2.0.txt).  
Version | 4.3.11  
Languages | Java  

###### 2.2. Known security vulnerabilities

List of vulnerabilities made the 2018-04-27.

Sources: https://www.securityfocus.com/bid , https://pivotal.io/security

Vulnerability CVE identifier | Description | CVSS Score | Publication date | Solved By  
:--------------------------: | :---------: | :--------: | :--------------: | :-------:  
CVE-2018-1272 | Spring Framework versions 5.0 to 5.0.4, 4.3 to 4.3.14, and older unsupported versions provide client-side support for multipart requests. When Spring MVC or Spring WebFlux server application (server A) receives input from a remote client, and then uses that input to make a multipart request to another server (server B), it can be exposed to an attack, where an extra multipart is inserted in the content of the request from server A, causing server B to use the wrong value for a part it expects. This could to lead privilege escalation, for example, if the part content represents a username or user roles. | 0.0 | 2018-04-06 | 4.3.15+/5.0.5+  

In order for the attacker to succeed, they would have to be able to guess the multipart boundary value chosen by server A for the multipart request to server B, which requires the attacker to also have control of the server or the ability to see the HTTP log of server A through a separate attack vector.  

Vulnerability CVE identifier | Description | CVSS Score | Publication date | Solved By  
:--------------------------: | :---------: | :--------: | :--------------: | :-------:  
CVE-2018-1271 |  Spring Framework, versions 5.0 prior to 5.0.5 and versions 4.3 prior to 4.3.15 and older unsupported versions, allow applications to configure Spring MVC to serve static resources (e.g. CSS, JS, images). When static resources are served from a file system on Windows (as opposed to the classpath, or the ServletContext), a malicious user can send a request using a specially crafted URL that can lead a directory traversal attack. | 0.0 | 2018-04-06 | 4.3.15+/5.0.5+  

This vulnerability exposes REGARDS to no threats as we are not serving static resources from the file system.

Vulnerability CVE identifier | Description | CVSS Score | Publication date | Solved By  
:--------------------------: | :---------: | :--------: | :--------------: | :-------:  
CVE-2018-1270 | Spring Framework, versions 5.0 prior to 5.0.5 and versions 4.3 prior to 4.3.15 and older unsupported versions, allow applications to expose STOMP over WebSocket endpoints with a simple, in-memory STOMP broker through the spring-messaging module. A malicious user (or attacker) can craft a message to the broker that can lead to a remote code execution attack. | 0.0 | 2018-04-06 | 4.3.15+/5.0.5+  
CVE-2018-1275 | Partial fix for CVE-2018-1270 | 0.0 | 2018-04-11 | 4.3.16/5.0.5+  

This vulnerability exposes REGARDS to no threats as we are not using the spring-messaging module and we are not using WebSockets either.    

Vulnerability CVE identifier | Description | CVSS Score | Publication date | Solved By  
:--------------------------: | :---------: | :--------: | :--------------: | :-------:  
CVE-2018-1199 | Spring Security does not consider URL path parameters when processing security constraints. By adding a URL path parameter with special encodings, an attacker may be able to bypass a security constraint. The root cause of this issue is a lack of clarity regarding the handling of path parameters in the Servlet Specification (see below). Some Servlet containers include path parameters in the value returned for getPathInfo() and some do not. Spring Security uses the value returned by getPathInfo() as part of the process of mapping requests to security constraints. In this particular attack, different character encodings used in path parameters allows secured Spring MVC static resource URLs to be bypassed. | 5.0 | 2018-01-29 | 4.13.14+/5.0.3+  

TODO: config p-e mais a voir car les fichier de prop sont retravailler par le microservice pour être traduit en fonction du format voulu. Est ce que l'on peut les atteindre directement?

##### 3. Spring Security  

###### 3.1 License

Feature | Value             | Description
:-----------------------------: | :--------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------:  
Name | Spring Security | Spring Security is a powerful and highly customizable authentication and access-control framework.  
Developer/Ownership | Pivotal  
Licencing conditions | Apache license, version 2 | Industrial Property Constraints Redistribution and use in source and binary forms, with or without modification, are permitted provided [those conditions](#http://www.apache.org/licenses/LICENSE-2.0.txt).  
Version | 4.3.2  
Languages | Java  

###### 3.2 Known security vulnerabilities  

List of vulnerabilities made the 2018-04-27.

Vulnerability CVE identifier | Description | CVSS Score | Publication date | Solved By  
:--------------------------: | :---------: | :--------: | :--------------: | :-------:  
CVE-2018-1199 | Spring Security does not consider URL path parameters when processing security constraints. By adding a URL path parameter with special encodings, an attacker may be able to bypass a security constraint. The root cause of this issue is a lack of clarity regarding the handling of path parameters in the Servlet Specification (see below). Some Servlet containers include path parameters in the value returned for getPathInfo() and some do not. Spring Security uses the value returned by getPathInfo() as part of the process of mapping requests to security constraints. In this particular attack, different character encodings used in path parameters allows secured Spring MVC static resource URLs to be bypassed. | 5.0 | 2018-01-29 | 4.2.4+/5.0.1+  

TODO: config p-e mais a voir car les fichier de prop sont retravailler par le microservice pour être traduit en fonction du format voulu. Est ce que l'on peut les atteindre directement?  

##### 4. Spring Data JPA

###### 4.1 License

Feature | Value             | Description
:-----------------------------: | :--------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------:  
Name | Spring Data JPA | The primary goal of the Spring Data project is to make it easier to build Spring-powered applications that use data access technologies. This module deals with enhanced support for JPA based data access layers.  
Developer/Ownership | Pivotal  
Licencing conditions | Apache license, version 2 | Industrial Property Constraints Redistribution and use in source and binary forms, with or without modification, are permitted provided [those conditions](#http://www.apache.org/licenses/LICENSE-2.0.txt).  
Version | 1.13.7  
Languages | Java  

###### 4.2 Known security vulnerabilities  

List of vulnerabilities made the 2018-04-27.

source: https://pivotal.io/security 

There is no known security vulnerabilities known to this date.

##### 5. Spring Boot

###### 5.1. License

Feature | Value             | Description
:-----------------------------: | :--------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------:  
Name | Spring Boot Main features | Spring Boot makes it easy to create stand-alone, production-grade Spring based Applications  
Developer/Ownership | Pivotal  
Licencing conditions | Apache license, version 2 | Industrial Property Constraints Redistribution and use in source and binary forms, with or without modification, are permitted provided [those conditions](#https://github.com/spring-projects/spring-boot/blob/master/LICENSE.txt).  
Version | 1.5.7  
Languages | Java

###### 5.2. Known security vulnerabilities

List of vulnerabilities made the 2018-04-27.

Source: https://www.securityfocus.com/bid , https://pivotal.io/security

Vulnerability CVE identifier | Description | CVSS Score | Publication date | Solved By  
:--------------------------: | :---------: | :--------: | :--------------: | :-------:  
CVE-2017-8046 |  Malicious PATCH requests submitted to spring-data-rest servers in Pivotal Spring Data REST versions prior to 2.5.12, 2.6.7, 3.0 RC3, Spring Boot versions prior to 2.0.0M4, and Spring Data release trains prior to Kay-RC3 can use specially crafted JSON data to run arbitrary Java code. | 7.5 | 2018-01-04 | None  

This vulnerability exposes REGARDS to no threats because PATCH requests are forbidden by Apache Configuration.

Vulnerability CVE identifier | Description | CVSS Score | Publication date | Solved By  
:--------------------------: | :---------: | :--------: | :--------------: | :-------:  
CVE-2018-1196 | Spring Boot supports an embedded launch script that can be used to easily run the application as a systemd or init.d linux service[1]. The script included with Spring Boot 1.5.9 and earlier is susceptible to a symlink attack which allows the “run_user” to overwrite and take ownership of any file on the same system. | 4.3 | 2018-01-30 | 1.5.10+/2.0.0.RC1+  

This vulnerability exposes REGARDS to no threats as we are not setting up the system as a service and we are not using the script.  

##### 6. Spring Cloud Netflix

###### 6.1. License

Feature | Value             | Description
:-----------------------------: | :--------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------:  
Name | Spring Cloud Netflix Main features | Spring Cloud focuses on providing good out of box experience for typical use cases and extensibility mechanism.  
Developer/Ownership | Pivotal  
Licencing conditions | Apache license, version 2 | Industrial Property Constraints Redistribution and use in source and binary forms, with or without modification, are permitted provided [those conditions](#https://github.com/spring-cloud/spring-cloud-netflix/blob/master/LICENSE.txt).  
Version | 1.3.4  
Languages | Java

###### 6.2. Known security vulnerabilities

List of vulnerabilities made the 2018-04-27.

sources: https://pivotal.io/security 

There is no known security issues.

##### 7. Spring Cloud Config

###### 7.1. License

Feature | Value             | Description
:-----------------------------: | :--------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------:  
Name | Spring Cloud Config Main features | Spring Cloud Config provides server and client-side support for externalized configuration in a distributed system.  
Developer/Ownership | Pivotal  
Licencing conditions | Apache license, version 2 | Industrial Property Constraints Redistribution and use in source and binary forms, with or without modification, are permitted provided [those conditions](#https://github.com/spring-cloud/spring-cloud-config/blob/master/LICENSE.txt).  
Version | 1.3.2  
Languages | Java

###### 7.2. Known security vulnerabilities

List of vulnerabilities made the 2018-04-27.

sources: https://pivotal.io/security 

There is no known security issues.

##### 8. Open Feign

###### 8.1. License

Feature | Value             | Description
:-----------------------------: | :--------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------:  
Name | Open Feign | Library to support implementing representations for hyper-text driven REST web services.  
Developer/Ownership | Open source software  
Licencing conditions | Apache license, version 2 | Industrial Property Constraints Redistribution and use in source and binary forms, with or without modification, are permitted provided [those conditions](#http://www.apache.org/licenses/LICENSE-2.0.txt).  
Version | 9.5.0  
Languages | Java

###### 8.2. Known security vulnerabilities

List of vulnerabilities made the 2018-05-02.

sources: https://github.com/OpenFeign/feign/issues?utf8=%E2%9C%93&q=is%3Aissue+security 

After a search on the github repository of the project with keyword "security" we could not find any known security vulnerabilities to this date.

##### 9. Spring HATEOAS

###### 9.1. License

Feature | Value             | Description
:-----------------------------: | :--------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------:  
Name | Spring HATEOAS Main features | Library to support implementing representations for hyper-text driven REST web services.  
Developer/Ownership | Pivotal  
Licencing conditions | Apache license, version 2 | Industrial Property Constraints Redistribution and use in source and binary forms, with or without modification, are permitted provided [those conditions](#http://www.apache.org/licenses/LICENSE-2.0.txt).  
Version | 0.23.0 Language | Java

###### 9.2. Known security vulnerabilities

List of vulnerabilities made the 2018-04-27.

sources: https://pivotal.io/security 

There is no known security issues.

##### 10. IzPack

###### 10.1. License

Feature | Value             | Description
:-----------------------------: | :--------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------:  
Name | IzPack Main features | IzPack is a one-stop solution for packaging, distributing and deploying applications.  
Developer/Ownership | Open source software  
Licencing conditions | Apache license, version 2 | Industrial Property Constraints Redistribution and use in source and binary forms, with or without modification, are permitted provided [those conditions](#http://www.apache.org/licenses/LICENSE-2.0.txt).  
Version | 5.1.0  
Languages | Java


###### 10.2. Known security vulnerabilities

List of vulnerabilities made the 2018-04-30.

After a search on their [JIRA](https://izpack.atlassian.net/browse/IZPACK-1530?filter=-4&jql=project%20%3D%20IZPACK%20AND%20affectedVersion%20%3D%205.1.0%20AND%20text%20~%20%22security%22%20order%20by%20created%20DESC), with the keyword "security", no security vulnerabilities has been identified to this day. The two issues listed(IZPACK-1530 & IZPACK-1555) are not security issues, they are only listed because of the stacktrace in the description which happens to have calls to "java.security".

##### 11. RabbitMQ

###### 11.1 License

Feature | Value             | Description
:-----------------------------: | :--------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------:  
Name | RabbitMQ | RabbitMQ is a messaging server following AMQP protocol.  
Developer/Ownership | Pivotal  
Licencing conditions | Mozilla Public Licence, version 1.1 | Industrial Property Constraints Redistribution and use in source and binary forms, with or without modification, are permitted provided [those conditions](#https://www.mozilla.org/en-US/MPL/1.1/).  
Version | 3.6.8  
Languages | Erlang

###### 11.2 Known security vulneratilities

List of vulneratbilities made the 2018-04-30.

sources: https://pivotal.io/security  

Vulnerability CVE identifier | Description | CVSS Score | Publication date | Solved By  
:--------------------------: | :---------: | :--------: | :--------------: | :-------:  
CVE-2017-4966 | RabbitMQ management UI stores signed in user credentials in browser’s local storage without expiration, making it possible to retrieve them using a chained attack. | 2.1 | 2017-05-04 | 3.6.9+  
CVE-2017-4965 & CVE-2017-4967 | Several forms in the RabbitMQ management UI are vulnerable to XSS attacks. | 4.3 | 2017-05-04 | 3.6.9+  

Those vulnerabilities does not exposes REGARDS directly as REGARDS is only using the management API, not UI. However, it exposes RabbitMQ administrators. As so, two options are possible:  
  - prohibe usage of the said UI thanks to firewall rules, managment of RabbitMQ is still possible thanks to command line.
  - restrain the access to this UI thanks to firewall rules.

##### 12. Elasticsearch

###### 12.1. License

Feature | Value             | Description
:-----------------------------: | :--------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------:  
Name | Elasticsearch Main features | Open source, distributed, RESTful search engine built on top of Lucene.  
Developer/Ownership | Elastic  
Licencing conditions | Apache license, version 2 | Industrial Property Constraints Redistribution and use in source and binary forms, with or without modification, are permitted provided [those conditions](#http://www.apache.org/licenses/LICENSE-2.0.txt).  
Version | 5.6.3  
Language | Java

###### 12.2. Known security vulnerabilities

List of vulnerabilities made the 2018-04-27.

source: https://www.elastic.co/fr/community/security

There is no known security vulnerabilities for Elasticsearch version 5.6.X

##### 13. FITS Java library

###### 13.1. License

Feature | Value             | Description
:-----------------------------: | :--------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------:  
Name | FITS I/O Java Library Main features | Pure java Java library for reading and writing FITS files  
Developer/Ownership | NASA and International Astronomical Union  
Licencing conditions | LGPL, version 3 | Industrial Property Constraints Redistribution and use in source and binary forms, with or without modification, are permitted provided [those conditions](#https://www.gnu.org/licenses/lgpl-3.0.fr.html).  
Version | 1.15.1  
Languages | Java  

###### 13.2 Known security vulnerabilities  

List of vulnerabilities made the 2018-04-27.

This library is not used by REGARDS in Version 2.0.0. TODO: check

#### 2. Compile time backend

##### 1. Apache Maven

###### 1.1. License

Feature | Value             | Description
:-----------------------------: | :--------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------:  
Name | Apache Maven Main features | Maven is a software project management and comprehension tool.  
Developer/Ownership | Apache Software Foundation  
Licencing conditions | Apache license, version 2 | Industrial Property Constraints Redistribution and use in source and binary forms, with or without modification, are permitted provided [those conditions](#http://www.apache.org/licenses/LICENSE-2.0.txt).  
Version | 3.3.3  
Languages | Java

###### 1.2. Known security vulnerabilities

List of vulnerabilities made the 2018-04-27.

Source: https://www.securityfocus.com/bid

There is no known security issues.

#### 3. Testing

Security Considerations: Those tools are not deployed with REGARDS. As so they do not exposes the system and the users to any security breaches.  

##### 1. Jenkins

###### 1.1. License

Feature | Value             | Description
:-----------------------------: | :--------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------:  
Name | Jenkins Main features | Jenkins is a continuous integration server, allowing you to automatically monitor source repositories, build software and run tests.  
Developer/Ownership | SonarSource  
Licencing conditions | LGPL, version 3 | Industrial Property Constraints Redistribution and use in source and binary forms, with or without modification, are permitted provided [those conditions](#https://www.gnu.org/licenses/lgpl-3.0.fr.html).  
Version | 2.7  
Languages | JavaScript, Java

##### 2. SonarQube

###### 2.1. License

Feature | Value             | Description
:-----------------------------: | :--------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------:  
Name | SonarQube Main features | SonarQube is an open platform to manage code quality.  
Developer/Ownership | SonarSource  
Licencing conditions | LGPL, version 3 | Industrial Property Constraints Redistribution and use in source and binary forms, with or without modification, are permitted provided [those conditions](#https://www.gnu.org/licenses/lgpl-3.0.fr.html).  
Version | 6.0  
Languages | JavaScript, Java

##### 3. Selenium

###### 3.1. License

Feature | Value             | Description
:-----------------------------: | :--------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------:  
Name | SeleniumHQ Main features | Selenium is a suite of tools to automate web browsers across many platforms.  
Developer/Ownership | Apache Software Foundation  
Licencing conditions | Apache license, version 2 | Industrial Property Constraints Redistribution and use in source and binary forms, with or without modification, are permitted provided [those conditions](#http://www.apache.org/licenses/LICENSE-2.0.txt).  
Version | 2.53.1  
Languages | JavaScript, Java
