# Kibana 5 simplified user guide

This is a small and simple guide to be able to use kibana, for further information, check the [official documentation](https://www.elastic.co/guide/en/kibana/current/index.html).

## Selecting an index on Elasticsearch

Before editing dashboards, we have to select the index on which we want to work. To do so, go to the "Management" page then "index pattern":

![Index Managment](/assets/images/userGuide/Kibana_Index_Pattern_Page.png)

Then add a new index and provide usefull information(index name and time-field name):

![Index Addition](/assets/images/userGuide/Kibana_Create_Index_Pattern_Page.png)

## Selecting the time interval on which to work

by default, kibana opens up and present informations on the last 15 min, this can be change to get relative or absolute interval. On the upper right corner, clic on "Last 15 Minutes" and then select the interval you want:

![Time Selection](/assets/images/userGuide/Kibana_Time_Selection.png)

## Creating a dashboard

To obtain a dashboard, you need visualizations. To create a visualization you need to restraint the data you want. To do so, you can either restraint in just for this visualization or use a saved search that already restraint the data.

### Creating a saved search

On the "Discovery" interface, you can see the data from your index. You can restraint the data seen thanks to a lucene request:

![Discovery Interace](/assets/images/userGuide/Kibana_Discovery.png)

In this case, we only wants document of type(_type) "User". Then you can save this search in order to create visualizations.

### Creating a visualization

On the "Visualize" Interface, Kibana will guide you:

![Visualization Creation](/assets/images/userGuide/Kibana_Visualization_Creation.png)

### Editing the dashboard

Once you have created all your visualizations, you can aggregate them on a dashboard ("Dashboard" Interface):

![Dashboard Interace](/assets/images/userGuide/Kibana_Dashboard.png)
