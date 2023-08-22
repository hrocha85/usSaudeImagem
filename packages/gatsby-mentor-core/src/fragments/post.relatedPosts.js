import { graphql } from "gatsby";

export const query = graphql`
  fragment PostRelatedPosts on Post {
    ... on MdxPost {
      relatedPosts {
        id
        title
        slug
        excerpt
        publishedAt: date(formatString: "YYYY-MM-DD[T]HH:mm:ssZ")
        timeAgo: date(fromNow: true)
        tags {
          id
          title
          slug
        }
        author {
          name
          image {
            childImageSharp {
              gatsbyImageData(
                placeholder: TRACED_SVG
                width: 32
                layout: CONSTRAINED
                aspectRatio: 1
              )
            }
          }
        }
        cover {
          id
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              aspectRatio: 1
              width: 1440
              placeholder: TRACED_SVG
              breakpoints: [480, 768, 992, 1280, 1440]
            )
          }
        }
      }
    }
  }
`;
