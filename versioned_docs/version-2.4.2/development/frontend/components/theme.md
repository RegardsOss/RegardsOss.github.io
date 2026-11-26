---
id: frontend-view-theme
title: Material and module themes
sidebar_label: Theme
slug: /development/frontend/view/theme/
---


## Description

The `@regards/theme` (web_modules/utils/theme) projects holds components and tools designed to simplify the use of global [Material-ui](http://www.material-ui.com/#/customization/themes) theme - called MUI theme in the next lines - over all REGARDS frontend react components. MUI theme holds a dictionnary of variables, sorted by categories, defining styles like:
* padding
* margin
* borders
* colors 
* and so on...

Beside MUI theme, some of the `regards/theme` components also provides a connector with `module theme` context. The context corresponds to specific variables built by a theme builder function for a component or a group of components.

Both MUI and module themes context will be detailed in following sections.

## Dependencies

To use the REGARDS theme components and tools you must add the here under package to your package.json dependencies:
 - @regardsoss/theme

## How to

### Get properties from the MUI and module themes context

In components **with theme context** (see later sections), you can retrieve theme properties in:
* `this.context.muiTheme`: That object holds Material UI theme categories, palette, card, and so on. Please refer to Material UI official documentation for more details about that object.
* `this.context.moduleTheme`: That object holds module theme, as exported by the theme builder function.

In order to access those context elements, the component must declare the `themeContextType` in `contextTypes`, as shown in example below.

```javascript
import { themeContextType } from '@regardsoss/theme'

export class ExampleComponent extends React.Component {

  static contextTypes = {
      ...themeContextType,
  }

  render() {
    const mainColor = this.context.muiTheme.palette.priamy1Color
    const someModuleStyle = this.context.moduleTheme.aValue
    ...
  }
}
```

### Connect with Material UI theme context

In REGARDS, the MUI theme context can be provided to children by using **ThemeProvider** component like demonstrated in following exmaple. Please note that this connector adds only MUI theme context, not the module theme.
 
```javascript
import { ThemeProvider } from '@regardsoss/theme'

export class ExampleContainer extends React.Component {

  render() {
    return (
      <ThemeProvider>
        <ExampleComponent />
      </ThemeProvider>
    )
  }
}
```
In the previous example, ExampleComponent will be able to access the MUI theme variables through context *but ExampleContainer will not*. Indeed context is defined for **ThemeProvider children**, in the React meaning.

Note: Most of the time, REGARDS developer doesn't need to use the ThemeProvider, as MUI Theme context is provided in all REGARDS applications.

### Connect with MUI and module theme

As explained before in this page, REGARDS allows a component or a group of components to define custom styles, called `module styles`, through a style builder function. The developer should follow the next steps to define and access such theme in components.

### 1\. Declare style builder

The style builder function produces a javascript object based on MUI theme as parameter. Such object must be structured to match component(s) needs at render time. By convention in REGARDS, style builder functions are placed in styles.js files. 

```js
// content of styles.js

/**
 * Builds module style on theme
 */
export default theme => ({ // MUI theme is provided as function parameter, to access MUI colors and such...
  myCustomPane: {
    color: theme.palette.textColor,
  }
  // ...
})
```

When dealing with styles, we also declare frequently an index.js file, that only exports the style builder function in an object like `{ style: styleBuilderFunction }`. That makes it easier to instantiate context later on.

```js
// content of index.js
import styles from './styles'

module.exports = { styles }

```
### 2\. Connect component to module theme provider

In REGARDS, the MUI and module theme contexts can be provided to children by using either:
 - **ModuleStyleProvider** component
 - **withModuleStyle** decorator function

 Those two methods are detailed in sections below.

 *Note: Theme connectors also define an optional parameter/property called `stackCallingContext` (false by default). That property, when true, indicates that the new context and parent context should be merged. It results in providing both parent and new context themes to children. When exploring REGARDS code, that method is frequently encountered, especially in common components, as it allows the calling component defining children using calling context themes while API components still access themes in their own context.*

#### 2\.a Using ModuleStyleProvider

`ModuleStyleProvider` component provides MUI module themes context to its React children, as demonstrated in example below.
It defines the following properties:
* **module**: an object with a single field `styles`, holding the style builder function.
* **stackCallingContext**: an optional boolean, false by default. See note in parent section for more detail.

```jsx
  import { ModuleStyleProvider } from '@regardsoss/theme'
  import ExampleComponent from './ExampleComponent'
  import moduleStyles from '../../styles' // assuming there is an index.js

  export class ExampleContainer extends React.Component {

    render() {
      return (
        <ModuleStyleProvider module={moduleStyles}>
          <ExampleComponent />
        </ModuleStyleProvider>)
    }
  }
```
In the previous example, ExampleComponent will be able to access muiTheme and moduleTheme through context *but ExampleContainer will not*. Indeed context is defined for **ModuleStyleProvider children**, in the React meaning.

For instance, in the following React tree, B and C can access themes through context, but A can not.

```jsx
<A>
  <ModuleStyleProvider module={moduleStyles}>
      <B>
        <C />
      </B>
  </ModuleStyleProvider>
</A>
```


#### 2\.b Using withModuleStyle

To use the REGARDS withModuleStyle decorator method, you need to export the component decorated with that method. It defines the following parameters (matching with ModuleStyleProvider properties described before):
* **module**
* **stackCallingContext**

Example:

```jsx
import { withModuleStyle } from '@regardsoss/theme'
import moduleStyles from '../../styles' // assuming there is an index.js

class ExampleContainer extends React.Component {

  render() {
    // ...
  }
}

export withModuleStyle(moduleStyles)(ExampleContainer)
```

The use of `withModuleStyle(moduleStyles)(ExampleContainer)` means that module theme context will be defined for ExampleContainer and all its children. Therefore, if we define the `contextTypes` in this container, it will be able accessing the module theme through its context.

### 3\. Add context type

Finally, theme context can be used in container children, and in container itself when withModuleStyle decorator method was used. To access it, as seen in first 'how to' section, the developer has to declare context types, like in example below.

Example: a component declaring and consuming theme context:

```jsx
import { withModuleStyle } from '@regardsoss/theme'
import moduleStyles from '../../styles' // assuming there is an index.js

class CompleteExample extends React.Component {

  static contextTypes = {
      ...themeContextType,
  }

  render() {
    const { moduleTheme, muiTheme } = this.context
    const styleFromTheme = { color: muiTheme.palette.textColor }
    return (
      <div>
        <div style={styleFromTheme}>Using MUI theme color </div>
        { /* 
        we suppose here that style builder returned something like 
        { completeExample: { border: '1px solid red', ...} } 
        */ }
        <div style={moduleTheme.completeExample.style}>Using some module theme </div>
      </div>
    )
    // ...
  }
}

export withModuleStyle(moduleStyles)(CompleteExample)
```


