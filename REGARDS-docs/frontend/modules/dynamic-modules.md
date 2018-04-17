---
layout: classic-docs
title: Dynamic lazy loadable modules
short-title: Lazy modules
---

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Description](#description)
- [Modules list](#modules-list)
- [Module structure](#module-structure)
  - [About default icon:](#about-default-icon)
- [Create a new module](#create-a-new-module)
- [Dynamic Module architecture](#dynamic-module-architecture)
  - [Description](#description-1)
  - [AdminContainer](#admincontainer)
  - [The ModuleContainer](#the-modulecontainer)
  - [Styles](#styles)
  - [Reducer](#reducer)
  - [Messages](#messages)
  - [Dependencies](#dependencies)
- [Load a module](#load-a-module)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Description

A lazy loadable module is a plugable module that project administrator has to use to build the `User project` and `Portal` interfaces, enabling features and graphic component into user interfaces. Those modules can be configured from the project administration interface.  

Microservices `rs-access-instance` and `rs-access-project` store the configuration of each modules and send it back to clients when browsing `User project` and `Portal` interfaces.

# Modules list

REGARDS defines currently the following dynamic modules:
* [Authentication](/frontend/modules/authentication/)
* [Embedded HTML](/frontend/modules/embedded-html/)
* [License](/frontend/modules/licenses/)
* [Menu](/frontend/modules/menu/)
* [Order Cart](/frontend/modules/order-cart/)
* [Order History](/frontend/modules/order-history/)
* [Project About Page](/frontend/modules/project-about-page/)
* [Project List](/frontend/modules/projects-list/)
* [Search Form](/frontend/modules/search-form/)
* [Search Graph](/frontend/modules/search-graph/)  
* [Search Results](/frontend/modules/search-results/)
* [Storage Monitoring](/frontend/modules/storage-monitoring/)


# Module structure

```
 .  
 ├── src  
 |   ├──  
 |   ├── clients         : Define all backend clients needed to request/send information  
 |   ├── components      : React component to display panels  
 |   ├── containers      : React-Redux logic to handle module functions  
 |   ├── domain          : Contains module enumerations, constants and business logic
 |   ├── models          : Contains specific module actions, selectors and reducers (local actions, it would be in clients otherwise)
 |   ├── shapes          : Contains module specific shapes (configuration for instance)
 |   ├── i18n            : Messages and labels internationalization  
 |   ├── styles          : Panels styles (inline css objects)  
 |   ├── main.js         : Module exported index  
 |   ├── reducer.js      : Redux reducers  
 |   └── router.js       : React-router configuration  
 ├── tests  
 ├── default-icon.svg    : Default module icon as svg, mandatory
 ├── package.json        : Npm module description file   
 └── README.md  
```

## About default icon:

When creating a module, we must ensure the default icon is provided and respects the following rules:
* Its path is `[module folder]/default-icon.svg` where module name is also the module root folder
* Icon is an SVG
* Icon stroke and fill colors are specified on first <sgv> tag - otherwise, the module icon cannot be updated with theme colors  

That icon should be used to represent the module or its instances. It is used, for instance, to display navigation links in menu module - when administrator chooses to use the default icon.  

SVG icons are available, for instance, on the following sites:
* https://material.io/icons/ : Material design icons (default regards look and feel)
* https://materialdesignicons.com/: Extension to material design icons  

Finally, note that each module default-icon.svg **should be unique among all modules default icons**, so that user can quickly identify the page and module types.

# Create a new module

You can create a new module using the yeoman generator `generator-regards-ui-module` provided with sources into `webapp/yeoman/generator-regards-ui-module`.

```bash
$ cd webapp/yeoman/generator-regards-ui-module
$ npm install -g yo
$ npm link
$ cd ../../web_modules/modules
$ yo regards-ui-module
```
After the last command, informations will be asked for the new module to generate.    
When process is over, the complete structure of a module is iniatialized with some simple examples.

**Important :**  
Modules are not working as independent plugins into REGARDS yet. So to be able to use a new module into the REGARDS frontend, you have to : 
 - Add your module to the list of dependencies into the main "webapp/package.json" : "@regardsoss-modules/<new module name>": "<module version>"
 - Add your module to the enumeration of available modules in @regardoss/modules/modulesManager (ModulesManager.js) in one of the following enumerations:
   - VisibleModuleTypes: Modules that project administrator can instantiate
   - HiddenModuleTypes: Modules that project administrator cannot instantiate (authentication for instance, as it is automatically added into the REGARDS interfaces)

**Congratulations**, your module is ready! You can now run the frontend with :
```bash
$ cd webapp
$ npm run bootstrap
$ npm install
$ npm run start:withmock
```
To instanciate and configure your new example module :  
 - go to [admin IHM](http://localhost:3333/admin/project1/ui/module/user/create){:target="_blank"} to instanciate and configure your module.
 - go to [user IHM](http://localhost:3333/user/project1){:target="_blank"} to see your module.
 
# Dynamic Module architecture

## Description

To understand the main architecture of a plugable module see the main.js file :

```javascript
export default {
  // A React.Component rendering the module functionalities
  ModuleContainer,
  // A React.Component renderig the module administration form
  AdminContainer,
  // A js object containing needed styles for both ModuleContainer and AdminContainer
  styles,
  // A js object containing Redux reducers of both ModuleContainer and AdminContainer
  reducer,
  // A js object containing, by locale key ("en" / "fr"), the messages map: (string) key to (string) message
  messages,
  // A js object containing server side endpoints dependencies to allow module to be displayed
  dependencies,
}
```

## AdminContainer

The `AdminContainer` **is facultative**. If you don't require a module configuration, 
you don't need to specify the `AdminContainer` in the `main.js` module entrypoint.

The here-under React component example shows how to create a form for module configuration. 

```javascript
import { FormattedMessage } from 'react-intl'
import { i18nContextType } from '@regardsoss/i18n'
import { RenderTextField, RenderCheckbox, Field } from '@regardsoss/form-utils'
import { ModuleConfiguration } from '../shapes/ModuleConfiguration'

class AdminContainer extends React.Component {

  static propTypes = {
      // default module properties in configuration mode
    ...AccessShapes.runtimeConfigurationModuleFields,
    // redefines expected configuration shape for module (specifies THIS MODULE shape)
    moduleConf: ModuleConfiguration.isRequired,
  }

  static contextTypes = {
    ...i18nContextType,
  }

  render() {
    const { intl } = this.context
    /* 
     * Please note that each field name below takes in account the current namespace. For 
     * instance, the resulting name may be "conf.myParameter" (parent will resolve it 
     * according with current use case, namespace allows embedding modules into other
     * modules)
     */
    const { adminForm: { currentNamespace } } = this.props
    return (
      <div>
        <Field
          name={`${currentNamespace}.myParameter`}
          fullWidth
          component={RenderTextField}
          type="text"
          label={intl.formatMessage({ id: 'admin.example.my.parameter.label' })}
        />
        <Field
          name={`${currentNamespace}.myParameter2`}
          component={RenderCheckbox}
          label={intl.formatMessage({ id: 'admin.example.my.parameter2.label' })}
        />
        { /* ... */ }
      </div>
    )
  }
}
export default AdminContainer

```

Notes :
 - you should prefix all `Field` names with `currentNamespace` to let you receive that attribute value in your `ModuleContainer`.  
 For example if you define `${currentNamespace}.myParameter` you will receive `myParameter` in the props `moduleConf` of your `ModuleContainer`.  
 - `@regardsoss/form-utils` module provides ready to use input fields
 - text internationalization is handled by the `@regardsoss/i18n` module and autowired by `@regardsoss/modules`.

## The ModuleContainer

The `ModuleContainer` **is mandatory**. This is the React component displayed at module runtime (ie, not configuration)


The following `ModuleContainer` example shows you how to retrieve the prop `moduleConf` which
contains the configuration created with the `AdminContainer` and injected in your module.

```javascript
import { i18nContextType } from '@regardsoss/i18n'
import { themeContextType } from '@regardsoss/theme'
import { FormattedMessage } from 'react-intl'

class ModuleContainer extends React.Component {
  static propTypes = {
      // Application name "user" or "portal"
      appName: PropTypes.string.isRequired,
      // Current project name
      project: PropTypes.string.isRequired,
      // Module configuration
      moduleConf: PropTypes.shape({
        myParameter: PropTypes.string,
        myParameter2: PropTypes.bool,
      }).isRequired,
  }

  static contextTypes = {
    ...i18nContextType,
    ...themeContextType,
  }

  render() {
    const { moduleTheme } = this.context
    const { moduleConf: {myParameter} } = this.props
    return (
     <div>
      <FormattedMessage id="example.message" />
      <div style={moduleTheme.myParameterStyles}>
        {myParameter}
       </div>
     </div>
     )
  }

}
export default ModuleContainer

```

## Styles

The `Styles` **is mandatory**. REGARDS uses the [Material-UI](http://www.material-ui.com/#/get-started/usage) library to style all components using CSS inline.

In the `Styles.js` file, you can use the current theme to reuse a subpart of the overall theme, like illustrated in the example below.

```javascript
const formStyles = theme => ({

  myParameterStyles: {
    color : theme.palette.textColor,
    width: '250px'
  }

})
export default formStyles
```

On your module React component, you can access the Styles using the context `this.context.moduleTheme`,
but you need to explicit the `contextTypes` with the `...themeContextType` from `@regardsoss/theme`.


```javascript
/**
* Basic usage of the theme context
*/
class Example extends React.Component {
   static contextTypes = {
     ...themeContextType
   }

   render() {
     return (
       <div style={this.context.moduleTheme.myParameterStyles}>
        Test
       </div>
     )
   }
}
export default Example

```

More information about the theme management on the [@regardsoss/theme](/frontend/components/theme/) components 

## Reducer

The Redux `reducer` **is mandatory**. Lazy loadable modules have their own part created in the store.  

The example below shows how to define your Redux tree. Unlike vanilla redux, you don't have to use `combineReducers`   
```javascript
const reducers = {
  todos: MyTodosReducer,
  foo: MyFooReducer
}
```

With the previous example and for a module named "ExampleModule", the application will create the here-under subpart in the global application store :  

```json
{
  "modules.ExampleModule": {
    "todos": {},
    "foo" : {}
  }
  // rest of the redux tree
}
```

The same store can be accessed by both `ModuleContainer` and `AdminContainer`.

## Messages

This parameter allows you to provide module messages, which are, by convention, stored in `src/i18n`.  
When exporting that object, you should provide an object like:
```js
const messages = {
  en: {
    'my.message.1': 'My message',
  },
  fr: {
    'my.message.1': 'Mon message',
  }
}

```
By convention, we import that object in module main.js file from `src/i18n/index.js` (noted src/i18n in code). That file only imports all locales languages from corresponding files `messages.<language>.i18n.js`, where language is 'en', 'fr'... Then it exports messages object as illustrated before.

Currently, REGARDS interface supports english and french languages.

## Dependencies

This file defines dependencies required to display `ModuleContainer` and `AdminContainer` depending of the current Project User role.
Each endpoint dependency required is composed in 3 parts, separated by the '@' caracter:  
`<MICROSERVICE>@<ENDPOINT>@<HTTP_VERB>`

An example:  
```javascript

/**
 * Dependencies needed to display ModuleContainer
 */
const user = [
  'rs-dam@/models/attributes@GET',
]
/**
 * Dependencies needed to display AdminContainer
 */
const admin = [
  'rs-dam@/models/attributes@POST',
]

export default {
  user,
  admin,
}

```

# Load a module

Also most dynamic modules are made to be configured by the administrator, through REGARDS project administration interface, it is still possible to load them in code. The example below shows how to load authentication module.

```jsx
    import { modulesManager } from '@regardoss/modules'
    // ...

    render() {
    const moduleConfiguration = {
       type: modulesManager.AllDynamicModuleTypes.AUTHENTICATION,
       active: true,
       conf: { // this example shows authentication module configuration example
          showLoginWindow: this.state.isLogin, // hide / show the login window
          showCancel: true,
          showAskProjectAccess: false,
          loginTitle: 'My login',
          onCancelAction: this.onCancelLogin,
       }
    }
    return (
      <LazyModuleComponent
        module={moduleConfiguration}
        appName={'user'}
        project={'project'}
      />
      )
    }
```

