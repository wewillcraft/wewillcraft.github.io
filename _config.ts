import lume from "lume/mod.ts";
import favicon from "lume/plugins/favicon.ts";
import inline from "lume/plugins/inline.ts";
import date from "lume/plugins/date.ts";
import icons from "lume/plugins/icons.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import typography from "npm:@tailwindcss/typography";
import tailwindcssAnimated from "npm:tailwindcss-animated";
import postcss from "lume/plugins/postcss.ts";
import lightningCss from "lume/plugins/lightningcss.ts";
import prism from "lume/plugins/prism.ts";
import mermaid from "lume_mermaid";

import "npm:prismjs@1.29.0/components/prism-bash.js";
import "npm:prismjs@1.29.0/components/prism-typescript.js";
import "npm:prismjs@1.29.0/components/prism-yaml.js";
import "npm:prismjs@1.29.0/components/prism-diff.js";

const site = lume();

site.use(
  favicon({
    favicons: [
      {
        url: "/favicon.ico",
        size: [48],
        rel: "icon",
        format: "ico",
      },
      {
        url: "/apple-touch-icon.png",
        size: [180],
        rel: "apple-touch-icon",
        format: "png",
      },
      {
        url: "/favicon-big.png",
        size: [500],
        rel: "favicon-big",
        format: "png",
      },
    ],
  })
);
site.use(icons());
site.use(date());
site.use(inline());
site.use(
  mermaid({
    theme: "dark",
    config: {
      startOnLoad: true,
      themeVariables: {
        primaryColor: "#ff69b4",
        edgeLabelBackground: "#222",
        background: "#111",
      },
    },
  })
);
site.use(
  prism({
    theme: {
      name: "okaidia",
      cssFile: "/styles.css",
    },
  })
);
site.use(
  tailwindcss({
    options: {
      plugins: [typography, tailwindcssAnimated],
    },
  })
);
site.use(postcss());
site.use(lightningCss());

site.ignore("README.md");

site.copy("uploads");
site.copy("static", ".");

export default site;
