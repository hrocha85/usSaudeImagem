const withDefaults = require("./utils/default.options");
const createPage = require("./pages/_page");
const createPostPage = require("./pages/_post");
const createWorkPage = require("./pages/_work");
const createWorksPage = require("./pages/_works");
const createBlogPage = require("./pages/_blog");
const createTagPage = require("./pages/_tag");

module.exports = async (helpers, pluginOptions) => {
  pluginOptions = withDefaults(pluginOptions);

  /**
   * Pages (home) page
   */
  await createPage(helpers, pluginOptions, {
    template: require.resolve("./templates/page-query.jsx"),
  });

  /**
   * Single post pages
   */
  await createPostPage(helpers, pluginOptions, {
    template: require.resolve("./templates/post-query.jsx"),
  });

  // Works
  await createWorksPage(helpers, pluginOptions, {
    template: require.resolve("./templates/works-query.jsx"),
  });

  // Single work
  await createWorkPage(helpers, pluginOptions, {
    template: require.resolve("./templates/work-query.jsx"),
  });

  await createBlogPage(helpers, pluginOptions, {
    template: require.resolve("./templates/blog-query.jsx"),
  });

  await createTagPage(helpers, pluginOptions, {
    template: require.resolve("./templates/tag-query.jsx"),
  });
};
