export const layout = "layouts/tags_result.vto";
export const navbar = {
  logo: "/logo.svg",
  logo_alt: "We Will Craft",
  logo_url: "/",
  title: "We Will Craft",
  links: [
    {
      text: "All Posts",
      url: "/posts",
    },
  ],
};

export default function* ({ search }) {
  // Generate a page for each tag
  for (const tag of search.values("tags")) {
    yield {
      url: `/tags/${tag}/`,
      title: `Tagged "${tag}"`,
      excerpt: `All posts from tagged ${tag}.`,
      type: "tag",
      search_query: `type=post '${tag}'`,
      tag,
    };
  }
}
