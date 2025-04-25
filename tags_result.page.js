export const layout = "layouts/tags_result.vto";
export const navbar = {
  logo: "/logo.svg",
  logo_alt: "Will Craft Software",
  logo_url: "/",
  title: "Will Craft Software",
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
      type: "tag",
      search_query: `type=post '${tag}'`,
      tag,
    };
  }
}
