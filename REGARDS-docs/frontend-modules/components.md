---
layout: classic-docs
title: regardsoss/components
short-title: Components
categories:
  - frontend-modules
---

## Description

This module provides a set of React Component to display widgets as :
 - board
 - buttons
 - cards
 - dialogs
 - error
 - help
 - icon
 - links
 - list
 - loading
 - plugin
 - table (with pagination)
 
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