module.exports = async (
  { graphql, actions, reporter },
  pluginOptions,
  { template },
) => {
  const { createPage } = actions;
  // const { pageContextOptions } = pluginOptions;

  const result = await graphql(`
    {
      allPage {
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

  const pages = result.allPage.nodes;

  if (pages.length > 0) {
    pages.forEach((page) => {
      createPage({
        path: page.slug,
        component: `${template}?__contentFilePath=${page.contentFilePath}`,
        context: {
          slug: page.slug,
        },
        defer: page.defer,
      });
    });
  }
};
