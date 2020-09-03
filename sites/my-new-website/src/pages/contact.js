import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import noosphere from "../images/noosphere.png"

function ContactPage() {
  return (
    <Layout>
      <SEO
        keywords={[``]}
        title="Contact"
      />
       <h1 className="flex items-center text-black no-underline">
          <a href="https://www.youtube.com/watch?v=UlFNy9iWrpE"> My Favorite Things</a>
        </h1>
          <img className="object-contain h-10" src={noosphere} />
    </Layout>
  );
}

export default ContactPage;
