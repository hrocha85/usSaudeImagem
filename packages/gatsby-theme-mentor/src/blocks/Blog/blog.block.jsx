import React from "react";

import { Link as GatsbyLink, graphql, useStaticQuery } from "gatsby";

import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";

import HighlightLine2 from "../../components/Highlight/line-2";
// import HighlightLine2 from "@themebiotic/gatsby-theme-mentor/components/Highlight/line-2";

import BlogArticleBlock from "./blog.article.block";

// eslint-disable-next-line no-unused-vars
const BlogBlock = ({ subtitle, title, body, ...rest }) => {
  const postLimit = 3;
  const data = useStaticQuery(graphql`
    query BlogBlockQuery {
      allPost(limit: 3, sort: { fields: date, order: DESC }) {
        totalCount
        edges {
          node {
            id
            slug
            title
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
            tags {
              id
              title
              slug
            }
            excerpt
            publishedAt: date(formatString: "YYYY-MM-DD[T]HH:mm:ssZ")
            timeAgo: date(fromNow: true)
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
    }
  `);

  const items = data.allPost.edges.map((item) => item.node) ?? [];
  const grid = {
    base: "1fr",
    md: "1fr 1fr",
    lg: "1fr 1fr 1fr",
  };
  return (
    <Box {...rest}>
      <Container mb={16} maxW="container.xl">
        <VStack>
          {subtitle && (
            <HStack data-sal="fadeup-low">
              <HighlightLine2 color="brand.300" transform="scaleX(-1)" />
              <Text fontSize="xl" variant="subtitle">
                {subtitle}
              </Text>
              {/* <AnnotationMegaphone color="brand.300" width="auto" height={14} /> */}
              <HighlightLine2 color="brand.300" />
            </HStack>
          )}
          <Heading size="3xl" data-sal="fadeup-low" data-sal-delay="200">
            {title}
          </Heading>
        </VStack>
      </Container>
      <Container maxW="container.xl">
        <Grid gap={[5, 5, 10]} mb={[5, 5, 10]} templateColumns={grid}>
          {items &&
            items.map((item, idx) => {
              if (!item) return;
              return (
                <Box
                  key={item.id}
                  data-sal="fadeup-low"
                  data-sal-delay={100 * idx}
                >
                  <BlogArticleBlock {...item} />
                </Box>
              );
            })}
        </Grid>
        <Flex align="center" justify="center">
          {data.allPost.totalCount > postLimit && <ViewAllLink to="/blog" />}
        </Flex>
      </Container>
    </Box>
  );
};

const ViewAllLink = React.memo(({ to }) => {
  return (
    <Link
      as={GatsbyLink}
      pb={1}
      to={to}
      fontSize="md"
      fontWeight="bold"
      variant="underline"
      textTransform="uppercase"
      colorScheme="brand"
    >
      <Text display="flex" alignItems="center" as="span" pl={1} pr={0}>
        <Text as="span" mr={1}>
          View All Posts
        </Text>
        <ArrowForwardIcon w={6} h={6} />
      </Text>
    </Link>
  );
});
ViewAllLink.displayName = "ViewAllLink";

export default React.memo(BlogBlock);
