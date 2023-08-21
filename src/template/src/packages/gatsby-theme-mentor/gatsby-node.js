const path = require("path");
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@themebiotic/gatsby-theme-mentor": path.resolve(__dirname, "src/"),
      },
    },
  });
};
