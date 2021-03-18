import React from "react";
import styles from "./styles.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";


function FooterContent() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <div className={styles.col_1}>
      <p>
        <strong>
          A framework and a set of plugins to build scientific archives.
        </strong>
      </p>
      <p>
        REGARDS is an Open Source data valorization product, highly flexible to
        various themes, modular, efficient, long-lasting, evolutionary and
        scalable, aims at providing services to Mission Centers and
        laboratories, and is able to deal with huge amount of data. <br />
        Our goal is to allow a strong commitment from user community in the
        development of modules and plugins.</p>
      <p>
        <strong>We welcome <a href="https://github.com/RegardsOss/RegardsOss.github.io/blob/master/CONTRIBUTING.md">your contributions</a> to make these documents better.</strong>
      </p>
      <div>
        <img src="/img/logos/courbe-institutionnelle-signature_y110-inverser.png" />
      </div>
    </div>
  );
}

export default FooterContent;
