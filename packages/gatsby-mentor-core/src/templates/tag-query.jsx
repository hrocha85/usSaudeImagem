import { graphql } from "gatsby";

import TagComponent from "../components/tag";

export default TagComponent;

export const query = graphql`
  query tagQuery($skip: Int!, $limit: Int!, $title: String!, $tag: [String!]) {
    tag: taxonomy(title: { eq: $title }) {
      id
      title
      description
      icon {
        publicURL
      }
    }
    allPost(
      filter: {
        draft: { ne: true }
        tags: { elemMatch: { title: { in: $tag } } }
      }
      sort: { fields: date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
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
          ...PostsPreview
        }
      }
    }
  }
`;
