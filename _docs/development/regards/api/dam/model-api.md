---
layout: classic-docs
title: REGARDS DAM API
---

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [FragmentController](#fragmentcontroller)
  - [Overview](#overview)
  - [Retrieve all fragments](#retrieve-all-fragments)
  - [Create fragment](#create-fragment)
  - [export fragment](#export-fragment)
  - [import fragment](#import-fragment)
- [AttributeModelController](#attributemodelcontroller)
  - [Overview](#overview-1)
  - [Retrieve all attribute models](#retrieve-all-attribute-models)
  - [Create Boolean attribute model](#create-boolean-attribute-model)
  - [Create Date array attribute model](#create-date-array-attribute-model)
  - [Create Date Interval attribute model](#create-date-interval-attribute-model)
  - [Create Date ISO attribute model](#create-date-iso-attribute-model)
  - [Create Float array attribute model](#create-float-array-attribute-model)
  - [Create Float attribute model](#create-float-attribute-model)
  - [Create Float interal attribute model](#create-float-interal-attribute-model)
  - [Create Integer array attribute model](#create-integer-array-attribute-model)
  - [Create Integer attribute model](#create-integer-attribute-model)
  - [Create Integer interval attribute model](#create-integer-interval-attribute-model)
  - [Create String array attribute model](#create-string-array-attribute-model)
  - [Create String attribute model](#create-string-attribute-model)
  - [Create URL attribute model](#create-url-attribute-model)
  - [Retrieve a single attribute model](#retrieve-a-single-attribute-model)
  - [Update attribute model](#update-attribute-model)
  - [Retrieve all attribute models associated to a model type](#retrieve-all-attribute-models-associated-to-a-model-type)
- [ModelController](#modelcontroller)
  - [Overview](#overview-2)
  - [Create Collection model](#create-collection-model)
  - [Create Data model](#create-data-model)
  - [Create Dataset model](#create-dataset-model)
  - [Create Document model](#create-document-model)
  - [Delete a model](#delete-a-model)
  - [Export a model](#export-a-model)
  - [Import a model](#import-a-model)
- [ModelAttrAssocController](#modelattrassoccontroller)
  - [Overview](#overview-3)
  - [Bind an attribute model to a model](#bind-an-attribute-model-to-a-model)
  - [Bind a fragment to a model](#bind-a-fragment-to-a-model)
  - [Retrieve all associations](#retrieve-all-associations)
  - [Retrieve a single association](#retrieve-a-single-association)
  - [Retrieve all associations for a single model type](#retrieve-all-associations-for-a-single-model-type)
  - [Unbind an attribute model from a model](#unbind-an-attribute-model-from-a-model)
  - [Unbind a whole fragment from a model](#unbind-a-whole-fragment-from-a-model)
  - [Update an association](#update-an-association)
- [Appendices](#appendices)
  - [XSD for the module](#xsd-for-the-module)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
# FragmentController

## Overview

    This API allows to create, list, update, delete fragments.

## Retrieve all fragments

    Allow to retrieve all fragments

{% include_relative generated-snippets/FragmentControllerIT/getAllFragment/http-request.md %}

{% include_relative generated-snippets/FragmentControllerIT/getAllFragment/request-body.md %}

{% include_relative generated-snippets/FragmentControllerIT/getAllFragment/http-response.md %}

## Create fragment

    Allow to create fragments

{% include_relative generated-snippets/FragmentControllerIT/addGeoFragment/http-request.md %}

{% include_relative generated-snippets/FragmentControllerIT/addGeoFragment/request-body.md %}

{% include_relative generated-snippets/FragmentControllerIT/addGeoFragment/request-fields.md %}

{% include_relative generated-snippets/FragmentControllerIT/addGeoFragment/http-response.md %}

{% include_relative generated-snippets/FragmentControllerIT/addGeoFragment/response-fields.md %}

## export fragment

    Allow to export fragment, see appendices for xsd

{% include_relative generated-snippets/FragmentControllerIT/exportFragment/http-request.md %}

{% include_relative generated-snippets/FragmentControllerIT/exportFragment/path-parameters.md %}

{% include_relative generated-snippets/FragmentControllerIT/exportFragment/request-body.md %}

{% include_relative generated-snippets/FragmentControllerIT/exportFragment/http-response.md %}

## import fragment

    Allow to import fragment, see appendices for xsd

{% include_relative generated-snippets/FragmentControllerIT/importFragment/http-request.md %}

{% include_relative generated-snippets/FragmentControllerIT/importFragment/request-body.md %}

{% include_relative generated-snippets/FragmentControllerIT/importFragment/http-response.md %}

# AttributeModelController

## Overview

    This API allows to create, list, update, delete attribute model.

## Retrieve all attribute models

    Allow to retrieve all attribute models

{% include_relative generated-snippets/AttributeModelControllerIT/testGetAttributes/http-request.md %}

{% include_relative generated-snippets/AttributeModelControllerIT/testGetAttributes/request-body.md %}

{% include_relative generated-snippets/AttributeModelControllerIT/testGetAttributes/http-response.md %}

## Create Boolean attribute model

    Allow to create a attribute model of type boolean

{% include_relative generated-snippets/AttributeModelControllerIT/createBooleanAttribute/http-request.md %}

{% include_relative generated-snippets/AttributeModelControllerIT/createBooleanAttribute/request-body.md %}

{% include_relative generated-snippets/AttributeModelControllerIT/createBooleanAttribute/request-fields.md %}

{% include_relative generated-snippets/AttributeModelControllerIT/createBooleanAttribute/http-response.md %}

{% include_relative generated-snippets/AttributeModelControllerIT/createBooleanAttribute/response-fields.md %}

## Create Date array attribute model

    Allow to create a attribute model of type array of dates

{% include_relative generated-snippets/AttributeModelControllerIT/createDateArrayAttribute/http-request.md %}

{% include_relative generated-snippets/AttributeModelControllerIT/createDateArrayAttribute/request-body.md %}

{% include_relative generated-snippets/AttributeModelControllerIT/createDateArrayAttribute/request-fields.md %}

{% include_relative generated-snippets/AttributeModelControllerIT/createDateArrayAttribute/http-response.md %}

{% include_relative generated-snippets/AttributeModelControllerIT/createDateArrayAttribute/response-fields.md %}

## Create Date Interval attribute model

    Allow to create a attribute model of type interval of dates

{% include_relative generated-snippets/AttributeModelControllerIT/createDateIntervalAttribute/http-request.md %}

{% include_relative generated-snippets/AttributeModelControllerIT/createDateIntervalAttribute/request-body.md %}

{% include_relative generated-snippets/AttributeModelControllerIT/createDateIntervalAttribute/request-fields.md %}

{% include_relative generated-snippets/AttributeModelControllerIT/createDateIntervalAttribute/http-response.md %}

{% include_relative generated-snippets/AttributeModelControllerIT/createDateIntervalAttribute/response-fields.md %}

## Create Date ISO attribute model

    Allow to create a attribute model of type Date ISO

{% include_relative generated-snippets/AttributeModelControllerIT/createDateISOAttribute/http-request.md %}

{% include_relative generated-snippets/AttributeModelControllerIT/createDateISOAttribute/request-body.md %}

{% include_relative generated-snippets/AttributeModelControllerIT/createDateISOAttribute/request-fields.md %}

{% include_relative generated-snippets/AttributeModelControllerIT/createDateISOAttribute/http-response.md %}

{% include_relative generated-snippets/AttributeModelControllerIT/createDateISOAttribute/response-fields.md %}

## Create Float array attribute model

    Allow to create a attribute model of type array of floats

{% include_relative generated-snippets/AttributeModelControllerIT/createFloatArrayAttribute/http-request.md %}

{% include_relative generated-snippets/AttributeModelControllerIT/createFloatArrayAttribute/request-body.md %}

{% include_relative generated-snippets/AttributeModelControllerIT/createFloatArrayAttribute/request-fields.md %}

{% include_relative generated-snippets/AttributeModelControllerIT/createFloatArrayAttribute/http-response.md %}

{% include_relative generated-snippets/AttributeModelControllerIT/createFloatArrayAttribute/response-fields.md %}

## Create Float attribute model

    Allow to create a attribute model of type float

{% include_relative generated-snippets/AttributeModelControllerIT/createFloatAttribute/http-request.md %}

{% include_relative generated-snippets/AttributeModelControllerIT/createFloatAttribute/request-body.md %}

{% include_relative generated-snippets/AttributeModelControllerIT/createFloatAttribute/request-fields.md %}

{% include_relative generated-snippets/AttributeModelControllerIT/createFloatAttribute/http-response.md %}

{% include_relative generated-snippets/AttributeModelControllerIT/createFloatAttribute/response-fields.md %}

## Create Float interal attribute model

    Allow to create a attribute model of type interval of floats

{% include_relative generated-snippets/AttributeModelControllerIT/createFloatIntervalAttribute/http-request.md %}

{% include_relative generated-snippets/AttributeModelControllerIT/createFloatIntervalAttribute/request-body.md %}

{% include_relative generated-snippets/AttributeModelControllerIT/createFloatIntervalAttribute/request-fields.md %}

{% include_relative generated-snippets/AttributeModelControllerIT/createFloatIntervalAttribute/http-response.md %}

{% include_relative generated-snippets/AttributeModelControllerIT/createFloatIntervalAttribute/response-fields.md %}

## Create Integer array attribute model

    Allow to create a attribute model of type array of intergers

{% include_relative generated-snippets/AttributeModelControllerIT/createIntegerArrayAttribute/http-request.md %}

{% include_relative generated-snippets/AttributeModelControllerIT/createIntegerArrayAttribute/request-body.md %}

{% include_relative generated-snippets/AttributeModelControllerIT/createIntegerArrayAttribute/request-fields.md %}

{% include_relative generated-snippets/AttributeModelControllerIT/createIntegerArrayAttribute/http-response.md %}

{% include_relative generated-snippets/AttributeModelControllerIT/createIntegerArrayAttribute/response-fields.md %}

## Create Integer attribute model

    Allow to create a attribute model of type integer

{% include_relative generated-snippets/AttributeModelControllerIT/createIntegerAttribute/http-request.md %}

{% include_relative generated-snippets/AttributeModelControllerIT/createIntegerAttribute/request-body.md %}

{% include_relative generated-snippets/AttributeModelControllerIT/createIntegerAttribute/request-fields.md %}

{% include_relative generated-snippets/AttributeModelControllerIT/createIntegerAttribute/http-response.md %}

{% include_relative generated-snippets/AttributeModelControllerIT/createIntegerAttribute/response-fields.md %}

## Create Integer interval attribute model

    Allow to create a attribute model of type interval of intergers

{% include_relative generated-snippets/AttributeModelControllerIT/createIntegerIntervalAttribute/http-request.md %}

{% include_relative generated-snippets/AttributeModelControllerIT/createIntegerIntervalAttribute/request-body.md %}

{% include_relative generated-snippets/AttributeModelControllerIT/createIntegerIntervalAttribute/request-fields.md %}

{% include_relative generated-snippets/AttributeModelControllerIT/createIntegerIntervalAttribute/http-response.md %}

{% include_relative generated-snippets/AttributeModelControllerIT/createIntegerIntervalAttribute/response-fields.md %}

## Create String array attribute model

    Allow to create a attribute model of type array of strings

{% include_relative generated-snippets/AttributeModelControllerIT/createStringArrayAttribute/http-request.md %}

{% include_relative generated-snippets/AttributeModelControllerIT/createStringArrayAttribute/request-body.md %}

{% include_relative generated-snippets/AttributeModelControllerIT/createStringArrayAttribute/request-fields.md %}

{% include_relative generated-snippets/AttributeModelControllerIT/createStringArrayAttribute/http-response.md %}

{% include_relative generated-snippets/AttributeModelControllerIT/createStringArrayAttribute/response-fields.md %}

## Create String attribute model

    Allow to create a attribute model of type string

{% include_relative generated-snippets/AttributeModelControllerIT/createStringAttribute/http-request.md %}

{% include_relative generated-snippets/AttributeModelControllerIT/createStringAttribute/request-body.md %}

{% include_relative generated-snippets/AttributeModelControllerIT/createStringAttribute/request-fields.md %}

{% include_relative generated-snippets/AttributeModelControllerIT/createStringAttribute/http-response.md %}

{% include_relative generated-snippets/AttributeModelControllerIT/createStringAttribute/response-fields.md %}

## Create URL attribute model

    Allow to create a attribute model of type URL

{% include_relative generated-snippets/AttributeModelControllerIT/createUrlAttribute/http-request.md %}

{% include_relative generated-snippets/AttributeModelControllerIT/createUrlAttribute/request-body.md %}

{% include_relative generated-snippets/AttributeModelControllerIT/createUrlAttribute/request-fields.md %}

{% include_relative generated-snippets/AttributeModelControllerIT/createUrlAttribute/http-response.md %}

{% include_relative generated-snippets/AttributeModelControllerIT/createUrlAttribute/response-fields.md %}

## Retrieve a single attribute model

    Allow to retrieve a single attribute model

{% include_relative generated-snippets/AttributeModelControllerIT/addSimpleAttribute/http-request.md %}

{% include_relative generated-snippets/AttributeModelControllerIT/addSimpleAttribute/request-body.md %}

{% include_relative generated-snippets/AttributeModelControllerIT/addSimpleAttribute/request-fields.md %}

{% include_relative generated-snippets/AttributeModelControllerIT/addSimpleAttribute/http-response.md %}

{% include_relative generated-snippets/AttributeModelControllerIT/addSimpleAttribute/response-fields.md %}

## Update attribute model

    Allow to update attribute model

{% include_relative generated-snippets/AttributeModelControllerIT/createAndUpdateAttributeWithRestriction/http-request.md %}

{% include_relative generated-snippets/AttributeModelControllerIT/createAndUpdateAttributeWithRestriction/path-parameters.md %}

{% include_relative generated-snippets/AttributeModelControllerIT/createAndUpdateAttributeWithRestriction/request-body.md %}

{% include_relative generated-snippets/AttributeModelControllerIT/createAndUpdateAttributeWithRestriction/http-response.md %}

{% include_relative generated-snippets/AttributeModelControllerIT/createAndUpdateAttributeWithRestriction/response-fields.md %}

## Retrieve all attribute models associated to a model type

    Allow to retrieve all attribute models associated to a model type, for example COLLECTION

{% include_relative generated-snippets/AttributeModelControllerIT/testGetAttributesAssocToModelType/http-request.md %}

{% include_relative generated-snippets/AttributeModelControllerIT/testGetAttributesAssocToModelType/path-parameters.md %}

{% include_relative generated-snippets/AttributeModelControllerIT/testGetAttributesAssocToModelType/request-body.md %}

{% include_relative generated-snippets/AttributeModelControllerIT/testGetAttributesAssocToModelType/http-response.md %}

# ModelController

## Overview

    This API allows to create, list, update, delete models.

## Create Collection model

    Allow to create a model of type COLLECTION

{% include_relative generated-snippets/ModelControllerIT/createCollectionModelTest/http-request.md %}

{% include_relative generated-snippets/ModelControllerIT/createCollectionModelTest/request-body.md %}

{% include_relative generated-snippets/ModelControllerIT/createCollectionModelTest/request-fields.md %}

{% include_relative generated-snippets/ModelControllerIT/createCollectionModelTest/http-response.md %}

{% include_relative generated-snippets/ModelControllerIT/createCollectionModelTest/response-fields.md %}

## Create Data model

    Allow to create a model of type DATA

{% include_relative generated-snippets/ModelControllerIT/createDataModelTest/http-request.md %}

{% include_relative generated-snippets/ModelControllerIT/createDataModelTest/request-body.md %}

{% include_relative generated-snippets/ModelControllerIT/createDataModelTest/request-fields.md %}

{% include_relative generated-snippets/ModelControllerIT/createDataModelTest/http-response.md %}

{% include_relative generated-snippets/ModelControllerIT/createDataModelTest/response-fields.md %}

## Create Dataset model

    Allow to create a model of type DATASET

{% include_relative generated-snippets/ModelControllerIT/createDatasetModelTest/http-request.md %}

{% include_relative generated-snippets/ModelControllerIT/createDatasetModelTest/request-body.md %}

{% include_relative generated-snippets/ModelControllerIT/createDatasetModelTest/request-fields.md %}

{% include_relative generated-snippets/ModelControllerIT/createDatasetModelTest/http-response.md %}

{% include_relative generated-snippets/ModelControllerIT/createDatasetModelTest/response-fields.md %}

## Create Document model

    Allow to create a model of type DOCUMENT

{% include_relative generated-snippets/ModelControllerIT/createDocumentModelTest/http-request.md %}

{% include_relative generated-snippets/ModelControllerIT/createDocumentModelTest/request-body.md %}

{% include_relative generated-snippets/ModelControllerIT/createDocumentModelTest/request-fields.md %}

{% include_relative generated-snippets/ModelControllerIT/createDocumentModelTest/http-response.md %}

{% include_relative generated-snippets/ModelControllerIT/createDocumentModelTest/response-fields.md %}

## Delete a model

    Allow to delete a model

{% include_relative generated-snippets/ModelControllerIT/deleteModelTest_shouldDeleteModel/http-request.md %}

{% include_relative generated-snippets/ModelControllerIT/deleteModelTest_shouldDeleteModel/path-parameters.md %}

{% include_relative generated-snippets/ModelControllerIT/deleteModelTest_shouldDeleteModel/request-body.md %}

{% include_relative generated-snippets/ModelControllerIT/deleteModelTest_shouldDeleteModel/http-response.md %}

## Export a model

    Allow to export a model, see appendices for xsd

{% include_relative generated-snippets/ModelControllerIT/exportModel/http-request.md %}

{% include_relative generated-snippets/ModelControllerIT/exportModel/path-parameters.md %}

{% include_relative generated-snippets/ModelControllerIT/exportModel/request-body.md %}

{% include_relative generated-snippets/ModelControllerIT/exportModel/http-response.md %}

## Import a model

    Allow to import a model, see appendices for xsd

{% include_relative generated-snippets/ImportModelTest/importSingleModel/http-request.md %}

{% include_relative generated-snippets/ImportModelTest/importSingleModel/request-body.md %}

{% include_relative generated-snippets/ImportModelTest/importSingleModel/http-response.md %}

# ModelAttrAssocController

## Overview

    This API allows to bind attribute models to models and list, update, delete these associations.

## Bind an attribute model to a model

    Allow to associate an attribute model to a model

{% include_relative generated-snippets/ModelAttributeControllerIT/bindFirstAttribute/http-request.md %}

{% include_relative generated-snippets/ModelAttributeControllerIT/bindFirstAttribute/path-parameters.md %}

{% include_relative generated-snippets/ModelAttributeControllerIT/bindFirstAttribute/request-body.md %}

{% include_relative generated-snippets/ModelAttributeControllerIT/bindFirstAttribute/request-fields.md %}

{% include_relative generated-snippets/ModelAttributeControllerIT/bindFirstAttribute/http-response.md %}

{% include_relative generated-snippets/ModelAttributeControllerIT/bindFirstAttribute/response-fields.md %}

## Bind a fragment to a model

    Allow to associate a whole fragment to a model

{% include_relative generated-snippets/ModelAttributeControllerIT/bindFragment/http-request.md %}

{% include_relative generated-snippets/ModelAttributeControllerIT/bindFragment/path-parameters.md %}

{% include_relative generated-snippets/ModelAttributeControllerIT/bindFragment/request-body.md %}

{% include_relative generated-snippets/ModelAttributeControllerIT/bindFragment/request-fields.md %}

{% include_relative generated-snippets/ModelAttributeControllerIT/bindFragment/http-response.md %}

## Retrieve all associations

    Allow to retrieve all associations

{% include_relative generated-snippets/ModelAttributeControllerIT/listAllAttributes/http-request.md %}

{% include_relative generated-snippets/ModelAttributeControllerIT/listAllAttributes/path-parameters.md %}

{% include_relative generated-snippets/ModelAttributeControllerIT/listAllAttributes/request-body.md %}

{% include_relative generated-snippets/ModelAttributeControllerIT/listAllAttributes/http-response.md %}

## Retrieve a single association

    Allow to retrieve a single association

{% include_relative generated-snippets/ModelAttributeControllerIT/getModelAttribute/http-request.md %}

{% include_relative generated-snippets/ModelAttributeControllerIT/getModelAttribute/path-parameters.md %}

{% include_relative generated-snippets/ModelAttributeControllerIT/getModelAttribute/request-body.md %}

{% include_relative generated-snippets/ModelAttributeControllerIT/getModelAttribute/http-response.md %}

{% include_relative generated-snippets/ModelAttributeControllerIT/getModelAttribute/response-fields.md %}

## Retrieve all associations for a single model type

    Allow to retrieve all attribute model associated to a single model type.

{% include_relative generated-snippets/ModelAttributeControllerIT/getModelAttributeForCollections/http-request.md %}

{% include_relative generated-snippets/ModelAttributeControllerIT/getModelAttributeForCollections/request-parameters.md %}

{% include_relative generated-snippets/ModelAttributeControllerIT/getModelAttributeForCollections/request-body.md %}

{% include_relative generated-snippets/ModelAttributeControllerIT/getModelAttributeForCollections/http-response.md %}

## Unbind an attribute model from a model

    Allow to dissociate an attribute model from a model

{% include_relative generated-snippets/ModelAttributeControllerIT/removeModelAttribute/http-request.md %}

{% include_relative generated-snippets/ModelAttributeControllerIT/removeModelAttribute/path-parameters.md %}

{% include_relative generated-snippets/ModelAttributeControllerIT/removeModelAttribute/request-body.md %}

{% include_relative generated-snippets/ModelAttributeControllerIT/removeModelAttribute/http-response.md %}

## Unbind a whole fragment from a model

    Allow to dissociate a whole fragment from a model

{% include_relative generated-snippets/ModelAttributeControllerIT/unbindFragment/http-request.md %}

{% include_relative generated-snippets/ModelAttributeControllerIT/unbindFragment/path-parameters.md %}

{% include_relative generated-snippets/ModelAttributeControllerIT/unbindFragment/request-body.md %}

{% include_relative generated-snippets/ModelAttributeControllerIT/unbindFragment/http-response.md %}

## Update an association

    Allow to update an association

{% include_relative generated-snippets/ModelAttributeControllerIT/updateModelAttribute/http-request.md %}

{% include_relative generated-snippets/ModelAttributeControllerIT/updateModelAttribute/path-parameters.md %}

{% include_relative generated-snippets/ModelAttributeControllerIT/updateModelAttribute/request-body.md %}

{% include_relative generated-snippets/ModelAttributeControllerIT/updateModelAttribute/request-fields.md %}

{% include_relative generated-snippets/ModelAttributeControllerIT/updateModelAttribute/http-response.md %}

{% include_relative generated-snippets/ModelAttributeControllerIT/updateModelAttribute/request-fields.md %}

# Appendices

## XSD for the module

``` XML
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">

    <!-- Model root element -->
    <xs:element name="model">
        <xs:complexType>
            <xs:sequence>
                <xs:element ref="name"/>
                <xs:element ref="description" minOccurs="0"/>
                <xs:element ref="version" minOccurs="0"/>
                <!-- Define model types -->
                <xs:element name="type">
                    <xs:simpleType>
                        <xs:restriction base="xs:string">
                            <xs:enumeration value="COLLECTION"/>
                            <xs:enumeration value="DATA"/>
                            <xs:enumeration value="DATASET"/>
                            <xs:enumeration value="DOCUMENT"/>
                        </xs:restriction>
                    </xs:simpleType>
                </xs:element>
                <xs:element ref="attribute" minOccurs="0" maxOccurs="unbounded"/>
                <xs:element ref="fragment" minOccurs="0" maxOccurs="unbounded"/>
            </xs:sequence>
        </xs:complexType>
    </xs:element>

    <!-- Fragment root element -->
    <xs:element name="fragment">
        <xs:complexType>
            <xs:sequence>
                <xs:element ref="name"/>
                <xs:element ref="description" minOccurs="0"/>
                <xs:element ref="version" minOccurs="0"/>
                <xs:element ref="attribute" minOccurs="0" maxOccurs="unbounded"/>
            </xs:sequence>
        </xs:complexType>
    </xs:element>

    <!-- Define name -->
    <xs:element name="name">
        <xs:simpleType>
            <xs:restriction base="xs:token">
                <xs:pattern value="[0-9a-zA-Z_]{3,32}"/>
            </xs:restriction>
        </xs:simpleType>
    </xs:element>

    <!-- Define label -->
    <xs:element name="label">
        <xs:simpleType>
            <xs:restriction base="xs:string">
                <xs:minLength value="1"/>
                <xs:maxLength value="20"/>
            </xs:restriction>
        </xs:simpleType>
    </xs:element>

    <!-- Define description -->
    <xs:element name="description">
        <xs:simpleType>
            <xs:restriction base="xs:string">
                <xs:whiteSpace value="preserve"/>
            </xs:restriction>
        </xs:simpleType>
    </xs:element>

    <!-- Define description -->
    <xs:element name="version" type="xs:string"/>

    <!-- Define attribute -->
    <xs:element name="attribute">
        <xs:complexType>
            <xs:sequence>
                <xs:element ref="label" minOccurs="1" maxOccurs="1"/>
                <xs:element ref="name"/>
                <xs:element ref="description" minOccurs="0"/>
                <xs:element ref="type"/>
                <xs:element name="defaultValue" type="xs:string"
                            minOccurs="0"/>
                <xs:element ref="restriction" minOccurs="0"/>
                <!-- For fragment creation, this element is not used and is skipped silently. -->
                <xs:element ref="computation" minOccurs="0"/>
                <!-- Custom attribute properties -->
                <xs:element ref="property" minOccurs="0" maxOccurs="unbounded"/>
            </xs:sequence>
            <xs:attribute name="alterable" type="xs:boolean"
                          default="true"/>
            <xs:attribute name="optional" type="xs:boolean" default="false"/>
            <xs:attribute name="group" type="xs:string"/>
        </xs:complexType>
    </xs:element>

    <!-- Define attribute types -->
    <xs:element name="type">
        <xs:complexType>
            <xs:simpleContent>
                <xs:extension base="restrictionType">
                    <xs:attribute name="unit" type="xs:string" default="unitless"/>
                    <xs:attribute name="precision" type="xs:integer"/>
                    <xs:attribute name="arraysize" type="xs:integer"></xs:attribute>
                </xs:extension>
            </xs:simpleContent>
        </xs:complexType>
    </xs:element>


    <!-- All types -->
    <xs:simpleType name="restrictionType">
        <xs:restriction base="xs:string">
            <xs:enumeration value="BOOLEAN"/>
            <xs:enumeration value="DATE_ARRAY"/>
            <xs:enumeration value="DATE_INTERVAL"/>
            <xs:enumeration value="DATE_ISO8601"/>
            <xs:enumeration value="ENUMERATION"/>
            <xs:enumeration value="DOUBLE"/>
            <xs:enumeration value="DOUBLE_ARRAY"/>
            <xs:enumeration value="DOUBLE_INTERVAL"/>
            <xs:enumeration value="INTEGER"/>
            <xs:enumeration value="INTEGER_ARRAY"/>
            <xs:enumeration value="INTEGER_INTERVAL"/>
            <xs:enumeration value="LONG"/>
            <xs:enumeration value="LONG_ARRAY"/>
            <xs:enumeration value="LONG_INTERVAL"/>
            <xs:enumeration value="STRING"/>
            <xs:enumeration value="STRING_ARRAY"/>
            <xs:enumeration value="URL"/>
        </xs:restriction>
    </xs:simpleType>

    <!-- Enumeration restriction -->
    <xs:element name="enumeration">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="value" type="xs:string" maxOccurs="unbounded"/>
            </xs:sequence>
        </xs:complexType>
    </xs:element>

    <!-- Pattern restriction -->
    <xs:element name="pattern">
        <xs:simpleType>
            <xs:restriction base="xs:string">
                <xs:whiteSpace value="preserve"/>
                <xs:minLength value="1"/>
            </xs:restriction>
        </xs:simpleType>
    </xs:element>

    <!-- Integer range restriction -->
    <xs:element name="integer_range">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="min">
                    <xs:complexType>
                        <xs:simpleContent>
                            <xs:extension base="xs:integer">
                                <xs:attribute name="excluded" type="xs:boolean"
                                              default="false"/>
                            </xs:extension>
                        </xs:simpleContent>
                    </xs:complexType>
                </xs:element>
                <xs:element name="max">
                    <xs:complexType>
                        <xs:simpleContent>
                            <xs:extension base="xs:integer">
                                <xs:attribute name="excluded" type="xs:boolean"
                                              default="false"/>
                            </xs:extension>
                        </xs:simpleContent>
                    </xs:complexType>
                </xs:element>
            </xs:sequence>
        </xs:complexType>
    </xs:element>

    <!-- Long range restriction -->
    <xs:element name="long_range">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="min">
                    <xs:complexType>
                        <xs:simpleContent>
                            <xs:extension base="xs:long">
                                <xs:attribute name="excluded" type="xs:boolean"
                                              default="false"/>
                            </xs:extension>
                        </xs:simpleContent>
                    </xs:complexType>
                </xs:element>
                <xs:element name="max">
                    <xs:complexType>
                        <xs:simpleContent>
                            <xs:extension base="xs:long">
                                <xs:attribute name="excluded" type="xs:boolean"
                                              default="false"/>
                            </xs:extension>
                        </xs:simpleContent>
                    </xs:complexType>
                </xs:element>
            </xs:sequence>
        </xs:complexType>
    </xs:element>

    <!-- Double range restriction -->
    <xs:element name="double_range">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="min">
                    <xs:complexType>
                        <xs:simpleContent>
                            <xs:extension base="xs:double">
                                <xs:attribute name="excluded" type="xs:boolean"
                                              default="false"/>
                            </xs:extension>
                        </xs:simpleContent>
                    </xs:complexType>
                </xs:element>
                <xs:element name="max">
                    <xs:complexType>
                        <xs:simpleContent>
                            <xs:extension base="xs:double">
                                <xs:attribute name="excluded" type="xs:boolean"
                                              default="false"/>
                            </xs:extension>
                        </xs:simpleContent>
                    </xs:complexType>
                </xs:element>
            </xs:sequence>
        </xs:complexType>
    </xs:element>

    <!-- Define restriction -->
    <xs:element name="restriction">
        <xs:complexType>
            <xs:choice>
                <xs:element ref="enumeration"/>
                <xs:element ref="pattern"/>
                <xs:element ref="integer_range"/>
                <xs:element ref="long_range"/>
                <xs:element ref="double_range"/>
            </xs:choice>
        </xs:complexType>
    </xs:element>

    <!-- Define computation plugin configuration -->
    <xs:element name="computation">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="label" minOccurs="1" maxOccurs="1" type="xs:string"/>
                <xs:choice>
                    <xs:element name="count" type="NoParamPluginType"/>
                    <xs:element name="sum_compute" type="ParamPluginType"/>
                    <xs:element name="min_compute" type="ParamPluginType"/>
                    <xs:element name="max_compute" type="ParamPluginType"/>
                </xs:choice>
            </xs:sequence>
        </xs:complexType>
    </xs:element>

    <!-- Define Computation plugin type without parameters -->
    <xs:complexType name="NoParamPluginType">
    </xs:complexType>

    <!-- Define Computation plugin type with parameters -->
    <xs:complexType name="ParamPluginType">
        <xs:complexContent>
            <xs:extension base="NoParamPluginType">
                <xs:attribute name="parameterAttributeName" type="xs:string" use="required"/>
                <xs:attribute name="parameterAttributeFragmentName" type="xs:string" use="optional" default=""/>
            </xs:extension>
        </xs:complexContent>
    </xs:complexType>

    <!-- Define name -->
    <xs:element name="configurationLabel">
        <xs:simpleType>
            <xs:restriction base="xs:string">
                <xs:minLength value="1"/>
            </xs:restriction>
        </xs:simpleType>
    </xs:element>

    <!-- Custom attribute properties -->
    <xs:element name="property">
        <xs:complexType>
            <xs:attribute name="key" type="xs:string" use="required"/>
            <xs:attribute name="value" type="xs:string" use="required"/>
        </xs:complexType>
    </xs:element>

</xs:schema>
```
