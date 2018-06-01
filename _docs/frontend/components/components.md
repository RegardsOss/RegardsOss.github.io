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

# Description

The module `@regardsoss/components` provides a set of React components to display widgets, sorted in following categories:
 - board : Components to render a board of items where each item is a section with a description and many iconActions.
 - buttons : A bunch of buttons
 - cards : Material ui cards related components
 - content : Components related with specific or loadable content (HTML,JSON, Markdown, ...)
 - date : Components to display and pick dates
 - dialogs: Components to display dialog windows
 - error: Error related components
 - feedback: Feedback related components
 - gallery : Components to display images into a gallery allowing an infinite list (pageable system with backend)
 - help: Help related component
 - links : Links and breadcrumb related components
 - list: List and autocomplete fields related components
 - loading: Loading components
 - module : Modules related components. It contains specifically the **DynamicModulePane**, used to display common dynamic modules main pane (provides collapse, title, icons, loading ...)
 - picture : Picture and picture resolution related components
 - plugin : Plugins related components
 - table: Table related components, allowing for infinite list, column selection, sorting...
 - titles: Title related components
 - transitions: Transitions related components and helpers
 - tree-table: Tree table component
 - values : Renderer components by value type (boolean, date, number, range, url, ...)
 
# Usage

```jsx
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