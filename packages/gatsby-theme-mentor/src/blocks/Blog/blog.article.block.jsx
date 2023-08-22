import React from "react";

import { Link as GatsbyLink } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import {
  Box,
  Heading,
  LinkBox,
  LinkOverlay,
  Text,
  useColorModeValue,
  VStack,
  Wrap,
} from "@chakra-ui/react";

import PublishedByAuthor from "../Author/publishedByAuthor";

const BlogArticleBlock = ({
  id,
  title,
  author,
  slug,
  cover,
  tags,
  excerpt,
  publishedAt,
  timeAgo,
  ...rest
}) => {
  const _cover = getImage(cover);

  tags = tags.filter((t) => t);

  const transform = {
    base: "scale(1.05)",
    sm: "scale(1.03)",
    md: "scale(1.05)",
    lg: "scale(1.1, 1.05)",
  };

  const color = useColorModeValue("gray.600", "whiteAlpha.700");

  return (
    <LinkBox
      key={id}
      as="article"
      pos="relative"
      _hover={{
        _before: {
          opacity: 1,
          shadow: "lg",
          transform: transform,
        },
      }}
      _before={{
        content: "''",
        opacity: 0,
        pos: "absolute",
        rounded: "lg",
        shadow: "md",
        width: "full",
        height: "full",
        transform: "scale(0)",
        transformOrigin: "center",
        transitionProperty: "common",
        transitionDuration: "normal",
        transitionTimingFunction: "ease-in-out",
        bg: useColorModeValue("white", "gray.700"),
        zIndex: 1,
      }}
      {...rest}
    >
      <VStack pos="relative" zIndex={2} align="strech" width="full" spacing={4}>
        {_cover && (
          <Box rounded="lg" overflow="hidden">
            <GatsbyImage image={_cover} alt={title} />
          </Box>
        )}
        <Box>
          {tags && !!tags.length && (
            <Wrap
              fontSize="xs"
              color={color}
              fontWeight="bold"
              textTransform="uppercase"
              shouldWrapChildren
              spacing={[1]}
            >
              {tags.map((tag) => {
                return <Text key={tag.id}>#{tag?.title}</Text>;
              })}
            </Wrap>
          )}

          {title && (
            <LinkOverlay as={GatsbyLink} to={slug}>
              <Heading size="lg">{title}</Heading>
            </LinkOverlay>
          )}
        </Box>
        {excerpt && <Text>{excerpt}</Text>}
        {author && publishedAt && (
          <PublishedByAuthor
            author={author}
            timeAgo={timeAgo}
            publishedAt={publishedAt}
          />
        )}
      </VStack>
    </LinkBox>
  );
};

export default BlogArticleBlock;
