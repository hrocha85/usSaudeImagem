module.exports = async (
  { graphql, actions, reporter },
  pluginOptions,
  { template },
) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allPost {
        nodes {
          slug
          defer
          contentFilePath
        }
      }
    }
  `).then((res) => res.data);

  if (result.errors) {
    reporter.panic(result.errors);
  }

  const posts = result.allPost.nodes;

  if (posts.length > 0) {
    posts.forEach((post) => {
      createPage({
        path: post.slug,
        component: `${template}?__contentFilePath=${post.contentFilePath}`,
        context: {
          slug: post.slug,
        },
        defer: post.defer,
      });
    });
  }
};
