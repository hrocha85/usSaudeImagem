import { graphql } from "gatsby";

import PostComponent from "../components/post";

export default PostComponent;

export const query = graphql`
  query ($slug: String!) {
    post(slug: { eq: $slug }) {
      title
      slug
      date(formatString: "lll")
      excerpt
      featured
      timeToRead {
        text
      }
      tags {
        id
        title
        slug
      }
      author {
        slug
        name
        title
        description
        occupation
        company
        social {
          name
          url
        }
        image {
          childImageSharp {
            gatsbyImageData(
              width: 128
              layout: CONSTRAINED
              placeholder: DOMINANT_COLOR
              quality: 65
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
      cover {
        childImageSharp {
          gatsbyImageData(
            quality: 85
            layout: FULL_WIDTH
            aspectRatio: 1.3333
            placeholder: TRACED_SVG
          )
        }
      }
      ...PostRelatedPosts
      tableOfContents(maxDepth: 4)
    }
  }
`;
