---
id: appendices-create-model
title: Create a model
sidebar_label: REGARDS XML Models format
slug: /development/appendices/create-model/
---

### Example of a **_DATA_** type model

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<model>
    <name>Departement</name>
    <description>Départements francais</description>
    <type>DATA</type>
    <attribute alterable="true" optional="false" indexed="true">
        <label>File size</label>
        <name>FileSize</name>
        <description>File size</description>
        <type unit="octet">LONG</type>
    </attribute>
    <attribute alterable="true" optional="false" indexed="true">
        <label>Code</label>
        <name>Code</name>
        <type unit="unitless">STRING</type>
    </attribute>
    <attribute alterable="true" optional="false" indexed="true">
        <label>name attribute</label>
        <name>Name</name>
        <type unit="unitless">STRING</type>
    </attribute>
    <fragment>
        <name>system</name>
        <attribute alterable="true" optional="true" indexed="false">
            <label>Checksum</label>
            <name>checksum</name>
            <type unit="unitless">STRING</type>
        </attribute>
        <attribute alterable="true" optional="false">
            <label>Change date</label>
            <name>change_date</name>
            <type unit="unitless">DATE_ISO8601</type>
        </attribute>
        <attribute alterable="true" optional="true">
            <label>LOM URL</label>
            <name>lom_url</name>
            <type unit="unitless">STRING</type>
            <restriction>
                <pattern>^(https?|ftp|file)://[-a-zA-Z0-9+&amp;@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&amp;@#/%=~_|]</pattern>
            </restriction>
        </attribute>
        <attribute alterable="true" optional="true">
            <label>REGARDS URL</label>
            <name>regards_url</name>
            <type unit="unitless">STRING</type>
            <restriction>
                <pattern>^(https?|ftp|file)://[-a-zA-Z0-9+&amp;@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&amp;@#/%=~_|]</pattern>
            </restriction>
        </attribute>
        <attribute alterable="true" optional="true">
            <label>Extension</label>
            <name>extension</name>
            <type unit="unitless">STRING</type>
        </attribute>
        <attribute alterable="true" optional="false">
            <label>Ingestion date</label>
            <name>ingestion_date</name>
            <description>Ingestion date in the GEODE repository</description>
            <type unit="unitless">DATE_ISO8601</type>
        </attribute>
        <attribute alterable="true" optional="true">
            <label>File size</label>
            <name>filesize</name>
            <type unit="unitless">LONG</type>
        </attribute>
        <attribute alterable="true" optional="true">
            <label>GPFS URL</label>
            <name>gpfs_url</name>
            <type unit="unitless">STRING</type>
            <restriction>
                <pattern>^(https?|ftp|file|gpfs)://[-a-zA-Z0-9+&amp;@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&amp;@#/%=~_|]</pattern>
            </restriction>
        </attribute>
        <attribute alterable="true" optional="false">
            <label>Filename</label>
            <name>filename</name>
            <type unit="unitless">STRING</type>
        </attribute>
    </fragment>
</model>
```

### Example of **_DATASET_** type model with computation plugin

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<model>
    <name>Pays</name>
    <description>Pays</description>
    <type>DATASET</type>
    <attribute alterable="true" optional="false" indexed="true">
        <label>number of data</label>
        <name>count</name>
        <type unit="unitless">LONG</type>
        <computation>
            <label>CountValidationConfModel3</label>
            <count/>
        </computation>
    </attribute>
</model>
```

### Exemple of a **_COLLECTION_** type model

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<model>
    <name>Mission</name>
    <description>Mission</description>
    <type>COLLECTION</type>
    <attribute alterable="true" optional="false" indexed="true">
        <label>data start date</label>
        <name>start_date</name>
        <description>date at which the acquisition of the data has started</description>
        <type unit="unitless">DATE_ISO8601</type>
    </attribute>
    <attribute alterable="true" optional="false" indexed="true">
        <label>name attribute</label>
        <name>Name</name>
        <type unit="unitless">STRING</type>
    </attribute>
    <attribute alterable="true" optional="true" indexed="true">
        <label>description</label>
        <name>description</name>
        <type unit="unitless">STRING</type>
    </attribute>
</model>
```

### Exemple of a fragment

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<fragment>
    <name>system</name>
    <attribute alterable="true" optional="true" indexed="true">
        <label>Checksum</label>
        <name>checksum</name>
        <type unit="unitless">STRING</type>
    </attribute>
    <attribute alterable="true" optional="false" indexed="true">
        <label>Change date</label>
        <name>change_date</name>
        <type unit="unitless">DATE_ISO8601</type>
    </attribute>
    <attribute alterable="true" optional="true" indexed="true">
        <label>LOM URL</label>
        <name>lom_url</name>
        <type unit="unitless">STRING</type>
        <restriction>
            <pattern>^(https?|ftp|file)://[-a-zA-Z0-9+&amp;@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&amp;@#/%=~_|]</pattern>
        </restriction>
    </attribute>
    <attribute alterable="true" optional="true">
        <label>REGARDS URL</label>
        <name>regards_url</name>
        <type unit="unitless">STRING</type>
        <restriction>
            <pattern>^(https?|ftp|file)://[-a-zA-Z0-9+&amp;@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&amp;@#/%=~_|]</pattern>
        </restriction>
    </attribute>
    <attribute alterable="true" optional="true">
        <label>Extension</label>
        <name>extension</name>
        <type unit="unitless">STRING</type>
    </attribute>
    <attribute alterable="true" optional="false">
        <label>Ingestion date</label>
        <name>ingestion_date</name>
        <description>Ingestion date in the GEODE repository</description>
        <type unit="unitless">DATE_ISO8601</type>
    </attribute>
    <attribute alterable="true" optional="true">
        <label>File size</label>
        <name>filesize</name>
        <type unit="unitless">LONG</type>
    </attribute>
    <attribute alterable="true" optional="true">
        <label>GPFS URL</label>
        <name>gpfs_url</name>
        <type unit="unitless">STRING</type>
        <restriction>
            <pattern>^(https?|ftp|file|gpfs)://[-a-zA-Z0-9+&amp;@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&amp;@#/%=~_|]</pattern>
        </restriction>
    </attribute>
    <attribute alterable="true" optional="false">
        <label>Filename</label>
        <name>filename</name>
        <type unit="unitless">STRING</type>
    </attribute>
</fragment>
```

### XML Schema describing how to configure a model, its attributes and its fragments

```xml
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
                <xs:pattern value="[0-9a-zA-Z_]{1,32}"/>
            </xs:restriction>
        </xs:simpleType>
    </xs:element>

    <!-- Define label -->
    <xs:element name="label">
        <xs:simpleType>
            <xs:restriction base="xs:string">
                <xs:minLength value="1"/>
                <xs:maxLength value="255"/>
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
                <xs:element ref="restriction" minOccurs="0"/>
                <!-- For fragment creation, this element is not used and is skipped silently. -->
                <xs:element ref="computation" minOccurs="0"/>
                <!-- Custom attribute properties -->
                <xs:element ref="property" minOccurs="0" maxOccurs="unbounded"/>
            </xs:sequence>
            <xs:attribute name="alterable" type="xs:boolean"
                          default="true"/>
            <xs:attribute name="optional" type="xs:boolean" default="false"/>
            <xs:attribute name="indexed" type="xs:boolean" default="true"/>
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
                <xs:attribute name="parameterAttributeFragmentName" type="xs:string" use="optional"/>
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
