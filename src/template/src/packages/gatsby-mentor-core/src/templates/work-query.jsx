import { graphql } from "gatsby";

import WorkComponent from "../components/work";

export default WorkComponent;

export const query = graphql`
  query ($slug: String!) {
    work(slug: { eq: $slug }) {
      slug
      date(formatString: "lll")
      title
      description
      excerpt
      client
      hideSidebar
      details {
        title
        items
      }
      cover {
        childImageSharp {
          gatsbyImageData(
            quality: 80
            layout: FULL_WIDTH
            aspectRatio: 1.3333
            # placeholder: TRACED_SVG
            placeholder: DOMINANT_COLOR
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      tableOfContents(maxDepth: 4)
    }
  }
`;
