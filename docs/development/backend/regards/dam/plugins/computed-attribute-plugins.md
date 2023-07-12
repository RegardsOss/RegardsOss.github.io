---
id: backend-dam-computed-attribute-plugins
title: Computed attribute plugins
sidebar_label: Computed attribute
slug: /development/backend/services/dam/plugins/computed-attribute/
---


## Overview

:::note
This extension point allows to define a calculation method for a feature attribute value before indexation in REGARDS catalog. This calcul is made during the data source crawling process.
:::

REGARDS provides many implementation of this extension point :
 - [CountPlugin](https://github.com/RegardsOss/regards-backend/blob/master/rs-dam/dam/dam-plugins/src/main/java/fr/cnes/regards/modules/dam/plugin/entities/CountPlugin.java) : Allow to compute the number of dataobjects of a dataset.
 - [IntSumComputePlugin](https://github.com/RegardsOss/regards-backend/blob/master/rs-dam/dam/dam-plugins/src/main/java/fr/cnes/regards/modules/dam/plugin/entities/IntSumComputePlugin.java) : Allow to compute an integer sum of an attribute of each dataobjects in a dataset.
 - [LongSumComputePlugin](https://github.com/RegardsOss/regards-backend/blob/master/rs-dam/dam/dam-plugins/src/main/java/fr/cnes/regards/modules/dam/plugin/entities/LongSumComputePlugin.java) : Allow to compute the sum of an attribute of each dataobjects in a dataset.
 - [MaxDateComputePlugin](https://github.com/RegardsOss/regards-backend/blob/master/rs-dam/dam/dam-plugins/src/main/java/fr/cnes/regards/modules/dam/plugin/entities/MaxDateComputePlugin.java) : Allow to compute the minimum date of all dataobjects in a dataset.
 - [MinDateComputePlugin](https://github.com/RegardsOss/regards-backend/blob/master/rs-dam/dam/dam-plugins/src/main/java/fr/cnes/regards/modules/dam/plugin/entities/MinDateComputePlugin.java) : Allow to compute the maximum date of all dataobjects in a dataset.

## Interface

   [IComputedAttribute](https://github.com/RegardsOss/regards-backend/blob/master/rs-dam/model/model-domain/src/main/java/fr/cnes/regards/modules/model/domain/IComputedAttribute.java)

## Implementation

To learn more about how to create your own plugin see [Plugins](../../../framework/modules/plugins.md)

Here under is an exemple of how to implements this extension point to create your own business logic.
This exemple show how to fill a feature attribute with the concatenation of two other ones.

```java
@Plugin(id = "exemple", version = "1.0.0", description = "exemple plugin",
        author = "REGARDS Team", contact = "regards@c-s.fr", licence = "LGPLv3.0", owner = "CSSI",
        url = "https://github.com/RegardsOss")
@ComputationPlugin(supportedType = AttributeType.STRING)
public class Plugin implements IComputedAttribute<Dataobject, String> {

    @PluginParameter(name = "attributeToComputeName", label = "Result attribute name",
            description = "Name of attribute to compute (ie result attribute).", unconfigurable = true)
    private String attributeToComputeName;

    @PluginParameter(name = "attributeToComputeFragmentName", label = "Result fragment name",
            description = "Name of attribute to compute fragment. If computed attribute belongs to "
                    + "default fragment, this value can be set to null.", optional = true, unconfigurable = true)
    private String attributeToComputeFragmentName;

    private AttributeModel attributeToCompute;

    private String value = "";

    /**
     * Plugin initialization method to retrieve AttributeModel from configuration
     */
    @PluginInit
    public void init() {
        attributeToCompute = attModelRepos.findByNameAndFragmentName(attributeToComputeName, Strings.isNullOrEmpty(
                attributeToComputeFragmentName) ? Fragment.getDefaultName() : attributeToComputeFragmentName);
    }

    @Override
    public String getResult() {
        return value;
    }

    @Override
    public void compute(Dataobject dataobject) {
        value = String.format("computed value - %s - %s - ",
            dataset.getProperty("property1").getValue().toString(),
            dataset.getProperty("property2").getValue().toString()
        );
    }

    @Override
    public AttributeModel getAttributeToCompute() {
        return attributeToCompute;
    }
}
```
