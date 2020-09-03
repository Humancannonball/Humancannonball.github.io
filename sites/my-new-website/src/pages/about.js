import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import piper from "../images/piper.jpg";

function AboutPage() {
  return (
    <Layout>
      <SEO
        keywords={[``]}
        title="About"
      />

      <section className="flex flex-col items-center md:flex-row">
        <div className="md:w-1/1 md:mr-8">
       <h2> ssd))</h2>

          
        </div>

      
          <img className="w-1/1 md:w-1/1" alt="piper" src={piper} />
      
      </section>
    </Layout>
  );
}

export default AboutPage;
