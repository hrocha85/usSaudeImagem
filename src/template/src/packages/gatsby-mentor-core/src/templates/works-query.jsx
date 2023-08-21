import { graphql } from "gatsby";

import WorksComponent from "../components/works";

export default WorksComponent;

export const query = graphql`
  query WorksQuery($limit: Int!, $skip: Int!) {
    allWork(sort: { fields: date, order: DESC }, limit: $limit, skip: $skip) {
      pageInfo {
        currentPage
        totalCount
        perPage
        pageCount
        itemCount
        hasPreviousPage
        hasNextPage
      }
      edges {
        node {
          id
          title
          slug
          description
          excerpt(pruneLength: 160)
          cover {
            id
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, width: 768)
            }
          }
        }
      }
    }
  }
`;
