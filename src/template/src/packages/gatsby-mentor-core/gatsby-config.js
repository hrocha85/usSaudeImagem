const remarkGfm = require("remark-gfm");
const remarkExternalLinks = require("remark-external-links");
const rehypeSlug = require("rehype-slug");
const rehypeAutolinkHeadings = require("rehype-autolink-headings");
const unwrapImages = require("remark-unwrap-images");

const withDefaults = require("./src/utils/default.options");

module.exports = (themeOptions) => {
  const options = withDefaults(themeOptions);
  return {
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: options.imagesPath,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          // name: "authors",
          name: options.authorsPath,
          path: options.authorsPath,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          // name: "posts",
          name: options.postsPath,
          path: options.postsPath,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          // name: options.pagesPath,
          name: options.pagesPath,
          path: options.pagesPath,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          // name: "expertises",
          name: options.expertisesPath,
          path: options.expertisesPath,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: options.worksPath,
          path: options.worksPath,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          // name: "services",
          name: options.servicesPath,
          path: options.servicesPath,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          // name: "testimonials",
          name: options.testimonialsPath,
          path: options.testimonialsPath,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          // name: "taxonomy",
          name: options.taxonomyPath,
          path: options.taxonomyPath,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          // name: "resume",
          name: options.resumePath,
          path: options.resumePath,
        },
      },

      // `gatsby-transformer-json`,
      // `gatsby-plugin-instagram-embed`,
      `gatsby-transformer-yaml`,
      `gatsby-plugin-image`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      {
        resolve: "gatsby-transformer-sharp",
        options: {
          checkSupportedExtensions: false,
          // ...options,
        },
      },

      options.mdx && {
        resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: [`.mdx`, `.md`],
          gatsbyRemarkPlugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 2850,
                quality: 90,
                linkImagesToOriginal: false,

                // objectFit: "cover",
                // objectPosition: "right bottom",

                backgroundColor: "transparent",

                showCaptions: false,
                disableBgImageOnAlpha: true,

                withWebp: {
                  quality: 80,
                },
                withAvif: {
                  quality: 80,
                },
                srcSetBreakpoints: [480, 768, 960, 1200, 1425],
                tracedSVG: {
                  // color: "#000",
                  threshold: 120,
                  // steps: 4,
                  // turnPolicy: "TURNPOLICY_MAJORITY",
                },
              },
            },
            {
              resolve: "gatsby-remark-embedder",
              options: {
                width: 800,
              },
            },
            `gatsby-remark-responsive-iframe`,
          ],
          mdxOptions: {
            remarkPlugins: [
              unwrapImages,
              remarkGfm,
              // To pass options, use a 2-element array with the
              // configuration in an object in the second element
              [remarkExternalLinks, { target: false }],
            ],
            rehypePlugins: [
              // Generate heading ids for rehype-autolink-headings
              rehypeSlug,
              // To pass options, use a 2-element array with the
              // configuration in an object in the second element
              [rehypeAutolinkHeadings, { behavior: `wrap` }],
            ],
          },
        },
      },

      {
        resolve: `gatsby-plugin-scroll-reveal`,
        options: {
          threshold: 0.33, // Percentage of an element's area that needs to be visible to launch animation
          once: true, // Defines if animation needs to be launched once
          // disable: false, // Flag for disabling animations
          easing: "ease-out-quart",

          // Advanced Options
          // selector: "[data-sal]", // Selector of the elements to be animated
          // animateClassName: "sal-animate", // Class name which triggers animation
          // disabledClassName: "sal-disabled", // Class name which defines the disabled state
          // rootMargin: "0% 50%", // Corresponds to root's bounding box margin
          // enterEventName: "sal:in", // Enter event name
          // exitEventName: "sal:out", // Exit event name
          // ...options,
        },
      },
    ].filter(Boolean),
  };
};
