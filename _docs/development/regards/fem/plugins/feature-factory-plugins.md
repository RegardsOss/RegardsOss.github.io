---
layout: classic-docs
title: Feature Factory Plugins
---

{% include toc.md %}

# Available implementations

There is no widely distributed implementation of this plugin type because it is an optional way to create features and very specific to your use case as features are to be validated against your own model.

# How to implement a new feature factory plugin

## Interface to implement

```java
@PluginInterface(description = "Generate a feature from a reference request")
public interface IFeatureFactoryPlugin {

    /**
     * Generate a {@link Feature} from {@link FeatureExtractionRequest} parameters.
     * @param parameters free extraction parameters
     * @return generated {@link Feature}
     */
    Feature generateFeature(JsonObject parameters) throws ModuleException;
}
```

## Implementation

As use cases are quite specific to your need, parameters are generic, that means you can do pretty much what you want and use whatever you can receive to generate a Feature.

Here is a dummy example:

```java
import com.google.gson.JsonObject;
import fr.cnes.regards.framework.module.rest.exception.ModuleException;
import fr.cnes.regards.framework.modules.plugins.annotations.Plugin;
import fr.cnes.regards.framework.modules.plugins.annotations.PluginInit;
import fr.cnes.regards.framework.modules.plugins.annotations.PluginParameter;
import fr.cnes.regards.framework.urn.EntityType;
import fr.cnes.regards.modules.feature.dto.Feature;
import fr.cnes.regards.modules.featureprovider.domain.plugin.IFeatureFactoryPlugin;

@Plugin(author = "REGARDS Team",
        description = "Extract a dummy feature from the url of data file to reference",
        id = DummyFeatureFactoryPlugin.PLUGIN_ID, version = "1.0.0", contact = "regards@c-s.fr", license = "GPLv3",
        owner = "CNES", url = "https://regardsoss.github.io/")
public class DummyFeatureFactoryPlugin implements IFeatureFactoryPlugin {

    public static final String PLUGIN_ID = "DummyExtract";

    @Override
    public Feature generateFeature(JsonObject parameters) throws ModuleException {
        String url = parameters.get("url");
        return Feature.build("Some Id" + url, "documentation", null, null, EntityType.DATA, "someModelNamedExample");
    }

}
```

For more information on what can be used in plugins, please refer to [Plugin documentation](/development/framework/modules/plugins/).

## How your parameters will be received

When [requesting an extraction](/development/regards/fem/api/feature-management-amqp-api/#feature-creation-request-by-file-reference), the attribute `parameters` of the request represents the parameters given to this plugin when the method `IFeatureFactoryPlugin#generateFeature` is called