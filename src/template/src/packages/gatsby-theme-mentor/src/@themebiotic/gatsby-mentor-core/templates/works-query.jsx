import * as React from "react";

import { graphql } from "gatsby";

import Works from "../../../components/page.works";

export default function PageWorks({ ...props }) {
  return <Works {...props} />;
}

/**
 * Issues with Gatsby Shadowing
 * Issue: #1
 * Page query is not run in shadow component when original component is imported.
 */
export const query = graphql`
  query WorksQuery($limit: Int!, $skip: Int!) {
    thumbnail: file(
      absolutePath: { glob: "**/assets/images/works-cover.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FIXED, width: 1200, height: 627)
      }
    }
    allWork(sort: { fields: date, order: DESC }, limit: $limit, skip: $skip) {
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
      pageInfo {
        currentPage
        totalCount
        perPage
        pageCount
        itemCount
        hasPreviousPage
        hasNextPage
      }
    }
  }
`;
