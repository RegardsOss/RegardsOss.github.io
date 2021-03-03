import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div id="basics" className="cards">
      <h1>Learn REGARDS basics</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/img/icons/satellite.svg"
              title="Safely preserve your data"
              text={
                <div>
                  <p> REGARDS is primary designed <b>to store data and their metadata</b> from spatial agency on <b>safe storage systems</b>.</p>
                  <p> To do this, the system design leans on the OAIS (Open Archival Information System) recommendation of the
                  <a href="https://public.ccsds.org" target="blank_"> CCSDS </a></p>
                  <p> Consequently, the system allows <b>high-performance ingestion</b> of data and metadata available from providers, either in <b>standard or non-standard formats</b>.
                </p>
                </div>
              }
            />
            <CardItem
              src="img/icons/server.svg"
              title="Harvest any metadata from anywhere."
              text={
                <div>
                  <p>REGARDS can <b>harvest and index</b> metadata <b>from any source</b>. Just use an existing data source plugin or develop your own.</p>
                  <p>REGARDS indexes metadata in a metacatalog structured by <b>hot defined data models</b>. and relying on the powerfull search engine <a href="https://www.elastic.co/fr/products/elasticsearch" target="blank_"> ElasticSearch</a>.</p>
                </div>
              }
            />
            <CardItem
              src="img/icons/browser.svg"
              title="Deep search"
              text={
                <div>
                  <p>REGARDS provides a simple, fast and efficient interface for discovering and accessing data.<br /></p>
                  <p>Its metacatalog API provides a <a href="http://www.opensearch.org/Home" target="blank_"> standard OpenSearch API </a> (with parameter, geo and time extensions) and responses in <a href="http://geojson.org/" target="blank_">GeoJson standard format</a>.</p>
                </div>
              }
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="img/icons/solar-system.svg"
              title="Support for georeferenced and astronomical data"
              text={
                <div>
                  <p>REGARDS is able to index and search Earth and Mars localized data as well as astronomical ones.</p>
                </div>
              }
            />
            <CardItem
              src="img/icons/download.svg"
              title="Download your data from everywhere"
              text={
                <div>
                  <p>Regardless of the storage system(s) you connect to REGARDS, it will serve all your files through a HTTP server.</p>
                </div>
              }
            />
            <CardItem
              src="img/icons/shield.svg"
              title="Manage your access rights on functionnalities, metadata, data"
              text={
                <div>
                  <p>REGARDS allows <b>to limit access to functionnalities</b> through the concept of <b>role</b>. Default roles exist but you can create your own and define special user profile. <b>A user is always attached to a single role</b>.</p>
                  <p>Furthermore, REGARDS allows to limit metadata and data accesses through the concept of <b>group</b>. A group define accesses to one or more dataset. To be able to access these datasets, <b>a user will have to be attached to one or more groups</b>.</p>
                </div>
              }
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="img/icons/cloud-computing.svg"
              title="Scale as your need"
              text={
                <div>
                  <p>REGARDS is a cloud native system and more precisely a microservice architecture. The system core integrates <b>load balancing for batch jobs</b> to enable hot-plugging of system resources.</p>
                </div>
              }
            />
            <CardItem
              src="img/icons/jigsaws.svg"
              title="Customize the system as your need"
              text={
                <div>
                  <p>REGARDS is an extensible plugin architecture. The system core integrates a <b>plugin engine</b> enabling an integrator to customize system behaviors.</p>
                </div>
              }
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
