import { graphql } from "gatsby";

export const query = graphql`
  fragment SeoSiteMetadata on Site {
    siteMetadata {
      title
      name
      slogan
      siteUrl
      author
      description
    }
  }
`;
