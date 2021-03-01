import React from "react";
import Layout from "@theme/Layout";
import styles from "./styles.module.css";

function AboutUs() {
    return (
        <Layout title="About us" description=" About us description">
            <div className={styles.main}>
                <h1>REGARDS OSS</h1>
                <p>In 2016, the <a href="https://cnes.fr">CNES</a> (<b>C</b>entre <b>N</b>ational d’<b>E</b>tudes <b>S</b>patiales, French Space Agency)
                launched the realization of REGARDS, a new data archiving and valorization product based on new technologies that can be used as a true COTS
                component of Ground Segment.</p>

                <p>REGARDS is highly flexible to various themes, modular, efficient, long-lasting, evolutionary and scalable, aims at providing services to Mission
                Centers and laboratories, and is able to deal with huge amount of data.
                The System design leans on the OAIS (Open Archival Information System) recommendation of the CCSDS (<b>C</b>onsultative <b>C</b>ommittee
                for <b>S</b>pace <b>D</b>ata <b>S</b>ystems). Consequently, the System allows high-performance ingestion of data and metadata
                available from providers, either in standard or non-standard formats. In this way, it allows to valorize metadata through upgrade and to provide them to
                the community thanks to standard protocols of interoperability and advanced search interface (Open search Geo, Faceted search, multiple geospatial projection
                support). It also offers functionalities which allows long-term data and metadata storage, to ease the system administration in a simple and ergonomic way.</p>

                <p>REGARDS is an <b>Open Source</b> solution (<b>GPLv3 licence</b>) and integrates Open Source COTS , which allows a strong commitment of
                user community in the development of modules and plugins, through a community portal able (WIP) to manage bugs and evolution requests, backed by a complete
                and easy-to-use documentation. In order to meet such requirements, REGARDS is designed to provide business services through tailorable microservices,
                implemented on the basis of a framework which eases their development and their integration into the System. The design is completed with a responsive web
                interface, tailorable for the implementation of GUIs.</p>

                <p>The CNES is currently using REGARDS for one of its project named SWH (<b>S</b>pot <b>W</b>orld <b>H</b>eritage).
                Follow this <a href="https://regards.cnes.fr/user/swh/">link</a> to see how you could use REGARDS.</p>

                <img src="/img/logos/regards-svg/regards-blue-label-bottom.svg" alt="logo regards" />

            </div>
        </Layout>

    );
}

export default AboutUs;