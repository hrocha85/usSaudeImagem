import { graphql } from "gatsby";

export const query = graphql`
  fragment PostsPreview on Post {
    id
    slug
    featured
    title
    date(formatString: "MMM DD, YYYY")
    tags {
      id
      slug
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
          aspectRatio: 1.3333
          placeholder: TRACED_SVG
        )
      }
    }
  }
`;
