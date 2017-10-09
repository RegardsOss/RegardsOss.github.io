---
layout: classic-docs
title: Internationalization
short-title: Internationalization
---

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Description](#description)
- [How to use](#how-to-use)
  - [Simple example](#simple-example)
  - [REGARDS form-utils](#regards-form-utils)
  - [More](#more)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Description

The REGARDS frontend uses the [redux-form](https://redux-form.com/6.8.0/){:target="_blank"} library to create forms.
This library stores in the common `redux store` all informations about the current state of the form.

## How to use

### Simple example

```javascript

import { reduxForm } from 'redux-form'
import { RenderTextField, Field, ErrorTypes, ValidationHelpers } from `@regardsoss/form-utils`

export class ExampleComponent extends React.Component {

  componentDidMount() {
    const initialValues = {
      label: 'default label',
    }
    this.props.initialize(initialValues)
  }

  handleSubmit(formValues) {
    ...
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
        <Field
          name="label"
          component={RenderTextField}
          type="text"
          label={'label'}
          validate={ValidationHelpers.validRequiredString}
          fullWidth
        />
      </form>
    )
  }
}

export default reduxForm({
  form: 'example-form'
})(ExampleComponent)

```

### REGARDS form-utils

In the upper example you can see that each `Field` component use a `component` parameter to define the type of field. The REGARDS
library provides the here under components types :

- RenderTextField
- RenderToggle,
- RenderDoubleLabelToggle,
- RenderSelectField,
- RenderCheckbox,
- RenderRadio,
- RenderFileField,
- RenderDateTimeField,

To use this types only import them from `@regardsoss/form-utils` like : 

```javascript
import { RenderTextField, RenderToggle, RenderDoubleLabelToggle, ... } from `@regardsoss/form-utils`
```

### More

To understand more about the uses of [redux-form](https://redux-form.com/6.8.0/){:target="_blank"} library see the [API](https://redux-form.com/6.8.0/docs/api/){:target="_blank"} official documentation 
