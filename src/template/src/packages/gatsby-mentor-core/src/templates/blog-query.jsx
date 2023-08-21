import { graphql } from "gatsby";

import BlogComponent from "../components/blog";

export default BlogComponent;

export const query = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    featured: allPost(
      filter: { featured: { eq: true }, draft: { ne: true } }
      sort: { fields: date, order: DESC }
      limit: 10
    ) {
      edges {
        node {
          ...PostsFeaturedPreview
          props {
            bg
            color
          }
        }
      }
    }
    allPost(
      filter: { featured: { ne: true }, draft: { ne: true } }
      sort: { fields: date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          ...PostsPreview
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
