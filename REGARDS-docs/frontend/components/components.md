---
layout: classic-docs
title: regardsoss/components
short-title: Components
---

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Description](#description)
- [Usage](#usage)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Description

This module provides a set of React Component to display widgets as :
 - board : Component to render a board of items where each item is a section with a description and many iconActions.
 - buttons : A bunch of buttons
 - cards : Material ui cards components
 - content : Tools to display many types of content like HTML,JSON, Markdown, ...
 - date : Tools to display and pick date 
 - dialogs
 - error
 - feedback
 - gallery : Tools to display images into a gallery with possible infinite list (pageable system with backend)
 - help
 - links : Tools to display a breadcrumb
 - list
 - loading
 - module : Tools used for the construction of standard REGARDS modules.
 - picture : Tools to display picture (handle SVG format)
 - plugin : Toos used for the construction of standard REGARDS plugins.
 - table (with pagination)
 - titles
 - transitions
 - tree-table
 - values : A bunch of renderer components to display entity values by type (boolean, date, number, range, url, ...)
 
## Usage

```js
import { ConfirmDialogComponent } from '@regardsoss/components'

class SampleComponent extends React.Component {
   
   render(){
      return (
        <ConfirmDialogComponent
         title="Confirmation dialog"
         dialogType={ConfirmDialogComponent.dialogTypes.CONFIRM}
         message="Are you sure ?"
         // Callback when confirm is selected
         onConfirm={ () => {}}
         // Callback when cancel or close
         onClose={() => this.setState({opened:false})}
        />
       )
   }
   
}

```