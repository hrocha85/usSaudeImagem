import { graphql } from "gatsby";

export const query = graphql`
  fragment SeoSiteMetadataFooter on Site {
    siteMetadata {
      title
      name
      slogan
      siteUrl
      description
      copyrightText
      footerNav {
        title
        to
      }
      footerLinks {
        title
        to
      }
      socialLinks {
        title
        to
      }
    }
  }
`;
