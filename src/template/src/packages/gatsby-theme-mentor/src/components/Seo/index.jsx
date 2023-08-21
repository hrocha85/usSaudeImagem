/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import { useLocation } from "@gatsbyjs/reach-router";

import * as React from "react";

import { graphql, StaticQuery } from "gatsby";
import { GatsbySeo } from "gatsby-plugin-next-seo";

const Seo = ({
  excerpt,
  description,
  title,
  thumbnail,
  // eslint-disable-next-line no-unused-vars
  locale,
  children,
  ...rest
}) => {
  // Use the location hook to get current page URL
  const location = useLocation();

  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            ...SeoSiteMetadata
          }
        }
      `}
      render={({ site }) => {
        const {
          title: defaultTitle,
          description: defaultDescription,
          // author,
          siteUrl,
        } = site?.siteMetadata ?? {};

        const canonicalUrl = siteUrl + location?.pathname;

        description = excerpt || description || defaultDescription;

        let ogImage = undefined;
        if (thumbnail) {
          if (thumbnail.childImageSharp !== undefined) {
            ogImage = thumbnail.childImageSharp.gatsbyImageData;
          }
        }

        return (
          <GatsbySeo
            title={title ?? defaultTitle}
            description={description}
            canonical={canonicalUrl}
            openGraph={{
              url: canonicalUrl,
              title: title,
              description: description.replace(/(\r\n|\n|\r)/gm, ""),
              images: ogImage
                ? [
                    {
                      url: ogImage
                        ? `${siteUrl}${ogImage?.images?.fallback.src}`
                        : undefined,
                      width: ogImage?.width,
                      height: ogImage?.height,
                    },
                  ]
                : [],
            }}
            {...rest}
          >
            {children}
          </GatsbySeo>
        );
      }}
    />
  );
};

export default Seo;
