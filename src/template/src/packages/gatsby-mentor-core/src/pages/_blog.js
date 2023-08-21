module.exports = async (
  { graphql, actions, reporter },
  pluginOptions,
  { template },
) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allPost(
        filter: { featured: { ne: true }, draft: { ne: true } }
        sort: { fields: date, order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `).then((res) => res.data);

  if (result.errors) {
    reporter.panic(result.errors);
  }

  const posts = result.allPost.edges;
  // The number of posts to display per page
  const postsPerPage = 6;
  const numPages = Math.ceil(posts.length / postsPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? "/blog" : `/blog/${i + 1}`,
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
