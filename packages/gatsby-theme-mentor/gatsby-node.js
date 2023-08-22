import { resolve as _resolve } from "path";
export function onCreateWebpackConfig({ actions }) {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@themebiotic/gatsby-theme-mentor": _resolve(__dirname, "src/"),
      },
    },
  });
}
