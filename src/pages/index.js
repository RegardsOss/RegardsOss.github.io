import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HeroSection from "./components/HeroSection";
import Cards from "./components/Cards";


function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title} Home`}
      description="REGARDS HOME describing learning basics"
    >
      <HeroSection />
      <Cards />

    </Layout>

  );
}

export default Home;
