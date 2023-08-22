import { graphql } from "gatsby";

export const query = graphql`
  fragment PostsFeaturedPreview on Post {
    id
    slug
    featured
    title
    date(formatString: "MMM DD, YYYY")
    tags {
      id
      title
    }
    timeToRead {
      text
    }
    excerpt(pruneLength: 160)
    author {
      name
    }
    cover {
      childImageSharp {
        gatsbyImageData(
          quality: 65
          layout: FULL_WIDTH
          aspectRatio: 1
          placeholder: TRACED_SVG
        )
      }
    }
  }
`;
