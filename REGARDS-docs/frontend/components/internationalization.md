---
layout: classic-docs
title: Internationalization
short-title: Internationalization
---

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Description](#description)
- [Dependencies](#dependencies)
- [How to](#how-to)
  - [Internationalize text in REGARDS](#internationalize-text-in-regards)
  - [Connect with internationalization context](#connect-with-internationalization-context)
    - [Using I18nProvider](#using-i18nprovider)
    - [Using withI18n](#using-withi18n)
  - [I18n messages files](#i18n-messages-files)
  - [Use parameter in messages](#use-parameter-in-messages)
  - [More informations](#more-informations)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Description

The `@regards/i18n` (web_modules/utils/i18n) module holds components and tools designed to simplify the internationalization of all messages in the REGARDS frontend. 

The REGARDS internationalization implementation uses [react-intl](https://github.com/yahoo/react-intl){:target="_blank"} library.

# Dependencies

To use the REGARDS `I18nProvider` you must add the here under packages to your package.json dependencies:
 - @regardsoss/i18n
 - react-intl

# How to

## Internationalize text in REGARDS

In components **with i18n context** (see later sections), you can retrieve internationalized messages using:
* `this.context.intl.formatMessage` method, which produces a string out of the two parameters:
  * First parameter is an object, where field `id` is the message key
  * Second parameter is an object, where each field key is the value key in messages (allowing messages with dynamic values)
* `FormattedMessage` component which builds a React.Element. It has the two following fields:
  * `id`, that is the message key
  * `values`, corresponding to formatMessage second parameter
 
*Notes :*
* To use the `formatMessage` method of the [react-intl](https://github.com/yahoo/react-intl){:target="_blank"} library, you need to define the react component context with the react-intl properties. To do so, you can use the `i18nContextType` 
of the `@regardsoss/i18n` package. The FormattedMessage component does not require to explicitely mention context type.
* In many cases, when setting an HTML node title property for instance, the value must be a string (and not a React.Element). In such cases, the developer has to use formatMessage method.

```javascript
import { i18nContextType } from '@regardsoss/i18n'
import { FormattedMessage } from 'react-intl'

export class ExampleComponent extends React.Component {

  static contextTypes = {
      ...i18nContextType,
    }

  render() {
    const internationalizedMessage = this.context.intl.formatMessage({ id: 'example.message' })
    return (
      <div>
        <span>{internationalizedMessage}</span>
        <FormattedMessage id="example.message" />
      </div>
    )
  }
}

```
## Connect with internationalization context

In REGARDS, the internationalization context can be provided to children by using either:
 - **I18nProvider** component
 - **withI18n** decorator function

Those two methods are detailed in sections below.

*Note: I18N connectors also define an optional parameter/property called `stackCallingContext` (false by default). That property, when true, indicates that the new context and parent context should be merged. It results in providing both parent and new context messages to children. When exploring REGARDS code, that method is frequently encountered, especially in common components, as it allows the calling component defining children using calling context messages while API components still access messages in their own context.*

### Using I18nProvider

`I18nProvider` component provides internationalization context to its React children as demonstrated in example below.
It defines the following properties:
 * **messages** : an object, where first level key is locale (like 'en' or 'fr') and second level key are messages keys. Most of the time, we import directly the messages folder index.js file, as it exports {en:enMessage, fr:frMessages}, which matches expected shape.
 * **stackCallingContext**: an optional boolean, false by default. See note in parent section for more detail.
 
Example :

```jsx
import { I18nProvider } from '@regardsoss/i18n'
import messages from '../i18n' // will contain {en:..., fr:...}

export class ExampleContainer extends React.Component {

  render() {
    return (
      <I18nProvider messages={messages}>
        <ExampleComponent />
      </I18nProvider>
    )
  }
}
```

In the previous example, ExampleComponent will be able to access the i18n through context *but ExampleContainer will not*. Indeed context is defined for **I18NProvider children**, in the React meaning.

For instance, in the following React tree, B and C can access messages context, but A can not.
```jsx
<A>
  <I18nProvider messages={messages}>
      <B>
        <C />
      </B>
  </I18nProvider>
</A>
```

### Using withI18n

To use the REGARDS withI18n decorator method, you need to export the component decorated with that method. It defines the following parameters (matching with I18NProvider properties described before):
* **messages** 
* **stackCallingContext**

Example:

```jsx
import { withI18n } from '@regardsoss/i18n'
import messages from '../i18n'

class ExampleContainer extends React.Component {

  render() {
    return (
      <FormattedMessage id="example.message" />
    )
  }
}

export withI18n(messages)(ExampleContainer)
```

The use of `withI18n(messages)(ExampleContainer)` means that messages context will be defined for ExampleContainer and all its children. Therefore, if we define the `contextTypes` in this container, it will be able accessing the messages through its context.

The instruction `import messages from '../i18n` corresponds to messages files import explained in the next section.

## I18n messages files

As explained in the previous sections, the `I18nProvider` component or `withI18n` method expects to receive an object that maps a list of locales onto a list of messages. For each locale object, keys will be the message key and value the internationalized message.
In REGARDS, by design, each locale messages dictionnary is defined in a file named `messages.{LOCALE}.i18n.js`, where {LOCALE} is locale shorthand ('en', 'fr').

The example below illustrates a messages.en.i18n.js file content:
```javascript

import { Locales } from '@regardsoss/form-utils'

const messages = {
  ...Locales.en, // form messages, required when dealing with forms
  'example.message' : 'Example message to display',
  'other.example.message' : 'Other example message to display'
}

export default messages
```

And here is the similar example for a messages.fr.i18n.js file content:

```javascript

import { Locales } from '@regardsoss/form-utils'

const messages = {
  ...Locales.fr, // form messages, required when dealing with forms
  'example.message' : 'Message d\'exemple à afficher',
  'other.example.message' : 'Un autre message d\'exemple à afficher'
}

export default messages
```

To regroup the multiple language files, we usually create an index.js file as : 
```js
import en from './messages.en.i18n'
import fr from './messages.fr.i18n'

module.exports = {
  en,
  fr,
}

```

That file exports precisely what the `messages` parameter/property consumes when using withI18n or I18nProvider.

## Use parameter in messages

With the reac-intl library, it is possible to use parameters in internationalizzed message.  
Let's illustrate how to create it.
1. Create a parametrized message
```javascript
'example.message.with.parameter': 'Hello {name} ?'
```
2. Provide parameter when rendering
```jsx
  static contextTypes = {
    ...i18nContextType,
  }
    
  render() {
    const name = 'john'
    const message = this.context.intl.formatMessage({ id: 'example.message.with.parameter' }, { name })
    return (
      <div>
        <span>{message}</span>
        <FormattedMessage 
          id="example.message.with.parameter"
          values={{ name }} 
        />
      </div>
    )
  }
```

## More informations

As the REGARDS I18nProvider is used only to provide messages to the [react-intl](https://github.com/yahoo/react-intl){:target="_blank"} library all
components surrounded by `I18nProvider` can use all [react-intl](https://github.com/yahoo/react-intl){:target="_blank"} functionalities.  So, you can refer to the official documentation to see more functionalities like `Date internationalization` or `HTML display`.

