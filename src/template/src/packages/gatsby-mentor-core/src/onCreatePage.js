// const withDefaults = require("./utils/default.options");

module.exports = async ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  deletePage(page);

  // Pass services auto-created pages
  createPage({
    ...page,
    context: {
      ...page.context,
      // ...pageContextOptions,
    },
  });
};
