---
layout: classic-docs
title: REGARDS layout configuration
short-title: Layout configuration
categories:
  - reference
---

# 1. How does layout work?

In REGARDS, layout is configured on a per project basis. This means each new project - or tenant - comes with the default layout, see section below.

There is a root container that cannot be deleted. All other containers can be added, modified and deleted at will.

In REGARDS, containers that are not marked as **main container** - discussed later on - are said **static**. They can be used to **display static content**, ie REGARDS modules that do not depend on the page currently shown, **or sub containers**.

REGARDS also requires **a single main container** that is said **dynamic modules container**. That single container is used to display the page content - **a dynamic module**.

Let's take an example. We would like to have a page showing some HTML in header, some HTML in footer and the search catalog module as main content. To build such page, we would need:
* One static container for header. Let's name it my-header-container
* One static container for footer. Let's name it my-footer-container
* The main container for search-catalog module. Let's name it my-content-container

Then in modules configuration, we could configure three new modules:
* One Embedded HTML module for header, linked with my-header-container
* One Embedded HTML module for footer, linked with my-footer-container
* One Search results module for page content, linked with my-content-container

It is important to understand here that, *when defining a module linked with the single main container, we declare indeed a dynamic module*. In REGARDS, **each dynamic module will have its own page in project website**. On the other hand, *when defining a module linked with a static container*, it will be available **on every page of the project website, but will have no corresponding page**.

# 2. How to configure layout?

User application layout can be accessed through REGARDS project administration interface, in **'User Interface / Layout'** - or at URL **(server)/admin/(project)/ui/layout/user**

The form shows every container currently defined. Three dotted menu on right offers the options **edit**, **delete** and **add a sub-section** - except for root container that cannot be deleted. The containers are displayed in a 'preview-like' way - the container name will not be displayed on user application.

*Note: default layout will be discussed in a later section.*

When editing a container, **name**, **type**, **'main container** and **advanced options** are available - except once again for root container that is fixed by configuration. We will detail those elements in next sub sections

## 2.1 Container edition: name

The container name is defined when creating a new container - using parent container menu option *add a sub-section*. It *cannot be modified after creation*.
 
## 2.2 Container edition: type

The container type defines the layout for container and sub elements. *It corresponds only to CSS presets for the container and can be overriden or completed at any moment in HTML styles*:
* **Row**: A simple row container that spans all the available horizontal width. Best used in a parent flex box (can be used in root container)
* **Growing row**: Similar to row but also attempts to span vertically. Best used in a parent flex box (can be used in root container)
* **100% width column**: Renders similar to a simple row, but uses the bootstrap reactive columns layout. Can be placed in any parent container type
* **75% width column**: Same but uses only 75% width
* **50% width column**: Same but uses only 50% width
* **25% width column**: Same but uses only 25% width

*Note about columns using the percent width: The bootstrap layout is able to place mutiple columns on the line, like, for instance wide columns 25% wide and one 50% wide. It will automatically break line to the next row when 100% is exceeded.*

Some static containers can be created only as a layout for sub containers using that specifity (like it is the case for user-app-root).

## 2.3 Container edition: Main container

This options allow definiting the layout main container - also called dynamic modules container. Keep in mind that there must be one and only one main container. Therefore when ticking the box, the previous main container will be converted into a static container - that operation is destructive however and can be easily reversed by editing the other container.

## 2.4 Container edition: Advanced options

### 2.4.1 Classes CSS

That field should contain the CSS classes - none by default - that applies to the container as strings separated by a blank space.

*For instance valid field value would be **my-class1 my-title***

### 2.4.2 Styles CSS

That field contains the styles that should apply to the container. Please note that **those styles are entered in React notation**, that's to say:
* The object is a JSon object and not a CSS like notation object
* The dash symbols '-' should be removed and the next word first letter should be capitalized (React styles notation)
* Values like colors and number with size - like 3% or 22px -  should be placed in simple quotes symboles '. Note that it is not required for simple numbers

For instance, next value would be valid:

```json
{ 
  "lineHeight": 1.5, 
  "height": "25px", 
  "background": "red", 
  "color": "#F0F0FFO" 
}
```

# 3. Default layout

Default layout comes with the following containers:
* *user-app-root*: The root container of user application, previously named *user*
* *page-top-header*: A static container to layout header content (top), might be used floating - see later section, previously named *header*.
* *page-sub-header*: A static container to layout sub header or page scrollable header when top header is floating, previously named *static-content*.
* *page-content-module*: The default main container to show page dynamic module, previously named *dynamic-content*
* *page-footer*: A static container to layout page footer, previously named *footer*

Within the root container, subcontainers are layed out vertically (they use the by the row layout type)

# 4. Example: a layout with a fixed (floating) header

We will demonstrate here how to fix the top header in a REGARDS project.

## 4.1 Set up the top header as floating

In layout configuration (default one), chose to edit the top header (called header in v1 version and page-top-header in v1.1+ version).

Open advanced options and paste the following styles, that indicates the header should remain above page when it scrolls (and spans horizontally).


```json
{
  "width": "100%",
  "position": "fixed",
  "zIndex": 100
}
```

Click the update button. As you can see, the layout is updated (and the root container may be hidden below the edited component).

## 4.2 Space the page content

In current state, the first container after top header would be hidden in user app - static-content (v1) / page-top-header (v1.1+). To correct that, click edit on that container and paste the following styles. Note that the margin to apply depends on your project styles, as *it must be greater or equal to the header height* to avoid hiding page content pixels:


```json
{
  "marginTop": "49px"
}
```

Click update. You should now observe some spacing between that container and the top header. Open the user app and check everything is fine!

