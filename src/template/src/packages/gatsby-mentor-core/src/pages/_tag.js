const Slug = require("slugify");

module.exports = async (
  { graphql, actions, reporter },
  pluginOptions,
  { template },
) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allPost(limit: 1000) {
        totalCount
        group(field: tags___title) {
          fieldValue
          totalCount
        }
      }
    }
  `).then((res) => res.data);

  if (result.errors) {
    reporter.panic(result.errors);
  }

  const tags = result.allPost.group;
  // The number of posts to display per page
  const postsPerPage = 6;

  tags.forEach((tag) => {
    const numPages = Math.ceil(tag.totalCount / postsPerPage);
    const slug = Slug(tag.fieldValue, { lower: true });
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/taxonomy/${slug}` : `/taxonomy/${slug}/${i + 1}`,
        component: template,
        context: {
          tag: tag.fieldValue,
          title: tag.fieldValue,
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      });
    });
  });
};
