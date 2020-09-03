import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import john from "../images/john.jpg";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[``]}
        title="Home"
      />

      <section className="text-center">
        <img
          alt="john"
          className="block w-1/2 mx-auto mb-8"
          src={john}
        />

        <h2 className="inline-block p-3 mb-4 text-2xl font-bold bg-yellow-400">
         Love Supreme
        </h2>

        <p className="leading-loose">
          I{` `}
          <a
            className="font-bold text-gray-900 no-underline"
          >
         )
          </a>
   
   

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus quis orci ac elementum. Nam suscipit at dolor auctor interdum. Morbi sit amet sollicitudin nisi. Aenean et rhoncus turpis. Pellentesque vitae leo et ipsum pretium fringilla. Cras vulputate sapien non tortor placerat cursus. Fusce porttitor euismod accumsan. Vivamus et elementum velit.

Donec eget rhoncus nisi. Phasellus ullamcorper orci non risus viverra dignissim. Vivamus aliquam, lectus in feugiat varius, diam leo convallis enim, gravida tristique diam neque et metus. Ut eu tellus a nibh tempus vehicula. Nam maximus massa at risus iaculis, eu mattis felis auctor. Vivamus congue leo quis feugiat tincidunt. Pellentesque ullamcorper ligula ac turpis scelerisque, vel iaculis nulla ornare. Quisque porta arcu est. Aliquam consequat vulputate dui, ac posuere dui tincidunt nec.

Donec vitae imperdiet diam, eget lobortis ante. Morbi iaculis venenatis tempor. Quisque elementum mi quis lorem blandit malesuada. Etiam viverra erat sed iaculis laoreet. In laoreet tortor volutpat, vestibulum nibh eu, scelerisque nisi. Sed vulputate nulla vitae sem maximus congue. Duis fringilla diam quis maximus dictum. Sed at sem massa. Duis blandit purus a aliquam aliquam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer vel orci nec tellus blandit convallis eget et augue.

Vestibulum volutpat arcu ut justo pellentesque lobortis. Duis efficitur massa cursus ullamcorper condimentum. Mauris lacinia dictum ex, et consequat enim. Nunc metus orci, placerat eu tortor at, porttitor semper nunc. Maecenas varius libero magna, eget vulputate ante sodales id. Morbi tellus est, pellentesque quis cursus ac, fermentum vitae dui. Aenean volutpat dui et ante tristique, quis varius nisi rhoncus. Maecenas viverra in sem in feugiat. In posuere bibendum nisi, in viverra lacus fermentum sit amet. Mauris vel ipsum nec elit auctor ultrices. Praesent ut arcu sed mauris tincidunt imperdiet.

Sed finibus, nisi id hendrerit interdum, eros diam semper ex, a volutpat metus dolor et purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a elit in est sodales tristique id vel nulla. Donec sit amet mi augue. Vestibulum in sapien in ipsum ultricies vestibulum sed vestibulum mauris. Sed eleifend, leo et commodo egestas, ligula nisl sagittis libero, ut maximus urna nisi vehicula est. Integer sem sem, sagittis id rutrum quis, faucibus in arcu. Aenean non purus non lectus placerat fringilla. Proin nec feugiat nunc      
        </p>
      </section>
    </Layout>
  );
}

export default IndexPage;
