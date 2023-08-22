/* eslint-disable @typescript-eslint/no-var-requires */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

// SITE_URL value is created with environment variables. (.env.development or .env.production)
const SITE_URL = process.env.WEBSITE_URL
  ? `${process.env.PROTOCOL}://${process.env.WEBSITE_URL}`
  : undefined;

module.exports = {
  siteMetadata: {
    title: `Mentor Personal Website`,
    name: "Mentor",
    slogan: "Gatsby Chakra UI Template",
    description: `Mentor is a visually appealing Gatsby.js template that takes advantage of the capabilities of Chakra UI to generate a contemporary and sophisticated website.`,
    author: `@themebiotic`,
    copyrightText: "© Template by Themebiotic - Powered by Gatsby",
    // SITE_URL value is created with environment variables. (.env.development or .env.production)
    siteUrl: SITE_URL,

    // Main Navigations
    mainNav: [
      { title: "Home", to: "/" },
      { title: "Works", to: "/works" },
      { title: "About", to: "/about" },
      { title: "Blog", to: "/blog" },
      { title: "Contact", to: "/contact" },
    ],
    // Footer Navigations
    footerNav: [
      { title: "About", to: "/about" },
      { title: "Blog", to: "/blog" },
      { title: "Works", to: "/works" },
      { title: "Contact", to: "/contact" },
      { title: "#AppDesign", to: "/taxonomy/app-design" },
      { title: "#Technology", to: "/taxonomy/technology" },
      { title: "#CyberSecurity", to: "/taxonomy/cybersecurity" },
      { title: "#WebDesign", to: "/taxonomy/web-design" },
      // { title: "404 Error", to: "/404" },
    ],
    // Other Footer Links
    footerLinks: [
      { title: "Style Guide", to: "/style-guide" },
      { title: "Support", to: "https://www.themebiotic.com/contact" },
      { title: "Terms of Service", to: "/terms-of-service" },
      { title: "Changelog", to: "/changelog" },
    ],
    // Social Media Links (footer)
    socialLinks: [
      { title: "Etsy", to: "https://www.etsy.com/shop/themebiotic" },
      { title: "GitHub", to: "https://github.com/themebiotic" },
      { title: "Twitter", to: "https://www.twitter.com/themebiotic" },
      { title: "Themeforest", to: "https://themeforest.net/user/themebiotic" },
      { title: "CreativeMarket", to: "https://creativemarket.com/themebiotic" },
    ],
  },
  plugins: [
    {
      resolve: "@themebiotic/gatsby-theme-mentor",
      options: {
        // SITE_URL value is created with environment variables. (.env.development or .env.production)
        siteUrl: SITE_URL,
        // Add theme options here. Check documentation for available options.
        // siteUrl: process.env.URL || process.env.VERCEL_URL
        basePath: "/",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-mentor-personal",
        short_name: "mentor",
        start_url: "/",
        description: `Mentor is a visually appealing Gatsby.js template that takes advantage of the capabilities of Chakra UI to generate a contemporary and sophisticated website.`,
        lang: "en",
        display: "minimal-ui",
        background_color: `#170ED8`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#170ED8`,
        icon: "assets/images/logo.png", // This path is relative to the root of the site.
      },
    },
  ],
};
