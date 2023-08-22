module.exports = async (
  { graphql, actions, reporter },
  pluginOptions,
  { template },
) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allWork {
        totalCount
      }
    }
  `).then((res) => res.data);

  if (result.errors) {
    reporter.panic(result.errors);
  }

  const works = result.allWork.totalCount;
  const postsPerPage = 6;
  const numPages = Math.ceil(works / postsPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? "/works" : `/works/${i + 1}`,
      component: template,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });
};
