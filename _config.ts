import lume from "lume/mod.ts";
import favicon from "lume/plugins/favicon.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import typography from "npm:@tailwindcss/typography";
import postcss from "lume/plugins/postcss.ts";
import lightningCss from "lume/plugins/lightningcss.ts";

const site = lume();

site.use(favicon());
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
