/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

exports.createSchemaCustomization = require("./src/createSchemaCustomization");

exports.onCreateNode = require("./src/onCreateNode");

exports.createPages = require("./src/createPages");

// exports.onCreatePage = require('./src/onCreatePage')
exports.createResolvers = require("./src/createResolvers");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@themebiotic/gatsby-mentor-core": path.resolve(__dirname, "src/"),
      },
    },
  });
};
