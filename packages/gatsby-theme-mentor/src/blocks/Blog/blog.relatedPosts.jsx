import React from "react";

import {
  Box,
  Container,
  Grid,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";

import HighlightLine2 from "@themebiotic/gatsby-theme-mentor/components/Highlight/line-2";

import BlogArticleBlock from "./blog.article.block";

const BlogRelatedPosts = ({ subtitle, title, items = [], ...rest }) => {
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
              <HighlightLine2 color="brand.300" />
            </HStack>
          )}
          <Heading
            as="h3"
            size="2xl"
            data-sal="fadeup-low"
            data-sal-delay="200"
          >
            {title}
          </Heading>
        </VStack>
      </Container>
      <Container maxW="container.xl" mb={[5, 5, 10]}>
        <Grid
          templateRows="repeat(1, 1fr)"
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
          ]}
          gap={[5, 5, 10]}
        >
          {items.map((item, idx) => (
            <BlogArticleBlock
              key={item.id}
              data-sal="fadeup-low"
              data-sal-delay={100 * idx}
              {...item}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default BlogRelatedPosts;
