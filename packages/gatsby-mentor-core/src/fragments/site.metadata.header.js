import { graphql } from "gatsby";

export const query = graphql`
  fragment SeoSiteMetadataHeader on Site {
    siteMetadata {
      title
      name
      slogan
      siteUrl
      description
      mainNav {
        title
        to
      }
    }
  }
`;
