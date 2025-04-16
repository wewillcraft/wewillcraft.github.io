import lume from "lume/mod.ts";
import favicon from "lume/plugins/favicon.ts";

const site = lume();

site.use(favicon());

site.ignore("README.md");

site.copy("static", ".");

export default site;
