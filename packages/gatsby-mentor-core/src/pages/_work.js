module.exports = async (
  { graphql, actions, reporter },
  pluginOptions,
  { template },
) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allWork {
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

  const works = result.allWork.nodes;

  if (works.length > 0) {
    works.forEach((work) => {
      createPage({
        path: work.slug,
        component: `${template}?__contentFilePath=${work.contentFilePath}`,
        context: {
          slug: work.slug,
        },
        defer: work.defer,
      });
    });
  }
};
