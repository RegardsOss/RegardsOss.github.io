---
layout: classic-docs
title: Module starter
short-title: Module starter
---

# Module starter

# Module configuration import/export

To be able to import/export a module configuration, you have to implement a configuration module manager inheriting abstract class `AbstractModuleConfigurationManager` (and implementing `IModuleConfigurationManager`) and **annotated as a Spring component**.


For example,

```java
@Service
public class MyConfigurationManager extends AbstractModuleConfigurationManager {

    @Override
    public void importConfiguration(ModuleConfiguration configuration) throws ModuleException {
        for (ModuleConfigurationItem<?> item : configuration.getConfiguration()) {
            if (MyPOJO.class.isAssignableFrom(item.getKey())) {
                MyPOJO pojo = item.getTypedValue();
                // Do something to import configuration
            }
        }
    }

    @Override
    public ModuleConfiguration exportConfiguration() {
        List<ModuleConfigurationItem<?>> configuration = new ArrayList<>();
        // Fill list using ModuleConfigurationItem#build
        return ModuleConfiguration.build(info, configuration);
    }
}
```

In the same package as your module configuration manager, you have to create a `module.properties` file containing following required properties:

```properties
# Your module properties
module.id=<your module id>
module.name=<your module name for display purpose>
module.description=<your module description for display purpose>
module.version=<your module version>
module.author=<author>
module.legalOwner=<author,client, ...>
module.documentation=<url>
```
By default, `IModuleConfigurationManager#importConfiguration` will only be called if imported file matches the same `module.id` and `module.version` properties.

At last, to adjust your exported JSON configuration, you can annotate your exported POJO with `@ConfigIgnore`.


