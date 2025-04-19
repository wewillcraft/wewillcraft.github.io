import lume from "lume/mod.ts";
import favicon from "lume/plugins/favicon.ts";
import inline from "lume/plugins/inline.ts";
import icons from "lume/plugins/icons.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import typography from "npm:@tailwindcss/typography";
import postcss from "lume/plugins/postcss.ts";
import lightningCss from "lume/plugins/lightningcss.ts";
import prism from "lume/plugins/prism.ts";

import "npm:prismjs@1.29.0/components/prism-bash.js";
import "npm:prismjs@1.29.0/components/prism-typescript.js";
import "npm:prismjs@1.29.0/components/prism-yaml.js";

const site = lume();

site.use(favicon());
site.use(icons());
site.use(inline());
site.use(prism({
  theme: {
    name: "okaidia",
    cssFile: "/styles.css",
  },
}));
site.use(tailwindcss({
  options: {
    plugins: [typography],
  },
}));
site.use(postcss());
site.use(lightningCss());

site.ignore("README.md");

site.copy("static", ".");

export default site;
