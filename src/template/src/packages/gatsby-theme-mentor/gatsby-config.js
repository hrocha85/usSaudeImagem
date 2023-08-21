module.exports = (options) => {
  return {
    plugins: [
      {
        resolve: "gatsby-plugin-next-seo",
        options: {
          title: "Enhance Your Website's Potential with Mentor",
          titleTemplate: "%s | Mentor Gatsby Chakra UI Template",
          description:
            "Elevate website with Mentor: The premium Gatsby template and Chakra UI framework for ease and impact. The ultimate solution for websites looking to stand out.",
          language: "en-US",
          canonical: options.siteUrl,
          openGraph: {
            type: "website",
            locale: "en_US",
            url: options.siteUrl,
            site_name: "Mentor",
          },
          twitter: {
            handle: "@themebiotic",
            site: "@themebiotic",
            cardType: "summary_large_image",
          },
        },
      },
      {
        resolve: "@chakra-ui/gatsby-plugin",
        options: {
          /**
           * @property {boolean} [resetCSS=true]
           * if false, this plugin will not use `<CSSReset />
           */
          resetCSS: true,
          /**
           * @property {boolean} [isUsingColorMode=true]
           * if false, this plugin will not use <ColorModeProvider />
           */
          isUsingColorMode: false,
          options,
        },
      },
      {
        resolve: "@themebiotic/gatsby-mentor-core",
        options,
      },
      //Add preconnect to google fonts servers for performance
      {
        resolve: "gatsby-plugin-preconnect",
        options: {
          domains: [
            // "https://fonts.gstatic.com/",
            // "https://fonts.googleapis.com/",
          ],
        },
      },
      {
        resolve: "gatsby-plugin-web-font-loader",
        options: {
          google: {
            families: [
              "Fraunces:400,500,600,700,800",
              "Mulish:200,300,400,500,600,700,800&display=swap",
            ],
          },
        },
      },
    ],
  };
};
