import { MDXProvider } from "@mdx-js/react";

import * as React from "react";

import { Link as GatsbyLink } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import {
  Box,
  Circle,
  Container,
  Heading,
  Link,
  Text,
  useColorModeValue,
  VStack,
  Wrap,
} from "@chakra-ui/react";

import AuthorBlock from "@themebiotic/gatsby-theme-mentor/blocks/Author/author.block";
import BlogRelatedPosts from "@themebiotic/gatsby-theme-mentor/blocks/Blog/blog.relatedPosts";

import Layout from "../layouts";
import MDXComponents from "./Mdx";
import Seo from "./Seo";

const PagePost = ({ data: { post }, children }) => {
  let _cover;
  let _avatar;

  if (post.cover) _cover = getImage(post.cover);
  if (post.author.image) _avatar = getImage(post.author.image);

  const _tags = post.tags ?? [];

  const _spacing = [4, 4, 5];
  const _spacingNegative = [-4, -4, -5];

  const bgColor = useColorModeValue("gray.100", "gray.900");
  const gradient = useColorModeValue(
    "linear(transparent, whiteAlpha.800 50%, white)",
    "linear(transparent, blackAlpha.800 50%, gray.800)",
  );

  return (
    <>
      <Seo
        title={post?.title}
        description={post?.excerpt}
        thumbnail={post?.cover}
      />
      <Layout>
        <Box pos="relative" mb={[5, 5, 10]}>
          <Box
            pos="absolute"
            bottom={0}
            zIndex={999}
            width="full"
            bgGradient={gradient}
          >
            <Container maxW="container.xl" py={[5, 5, 7, 10]}>
              <VStack align="start" mx="auto" maxW="container.md">
                <Heading
                  as="h1"
                  size={["xl", "2xl", "3xl", "3xl"]}
                  noOfLines={4}
                  pb={2}
                >
                  {post?.title}
                </Heading>
                <Wrap align="center" shouldWrapChildren>
                  {_avatar && (
                    <Circle
                      size={"32px"}
                      overflow="hidden"
                      bg={
                        post?.author?.image?.childImageSharp?.gatsbyImageData
                          ?.backgroundColor
                      }
                    >
                      <GatsbyImage image={_avatar} alt={post?.author?.name} />
                    </Circle>
                  )}
                  <Text fontWeight="bold">{post?.author?.name}</Text>
                  <Text>•</Text>
                  <Text>{post?.date}</Text>
                  <Text>•</Text>
                  <Text>{post?.timeToRead?.text}</Text>
                </Wrap>
                <Wrap align="center" shouldWrapChildren>
                  {_tags.map((tag) => {
                    if (!tag) return;
                    return (
                      <Link
                        as={GatsbyLink}
                        key={tag.id}
                        to={tag.slug}
                        title={tag.title}
                      >
                        #{tag.title}
                      </Link>
                    );
                  })}
                </Wrap>
              </VStack>
            </Container>
          </Box>

          <Box maxH={["full", "full", 700]} overflow="hidden">
            <GatsbyImage image={_cover} alt={post?.title} />
          </Box>
        </Box>

        <Container maxW="container.xl" mb={[5, 5, 10, 20]}>
          <VStack
            width="full"
            flex="2"
            align="stretch"
            overflow="hidden"
            spacing={_spacing}
            mb={[5, 5, 10, 20]}
            sx={{
              "> *": {
                maxW: "container.md !important",
                width: "full !important",
                mx: "auto !important",
              },
              "> div.unwrap-images": {
                maxW: "container.xl !important",
                width: "full",
                mb: _spacingNegative,
                "& > div": {
                  rounded: "lg",
                  overflow: "hidden",
                },
                "& > p, & > div": {
                  mx: "auto !important",
                  mb: _spacing,
                },
                ".gatsby-resp-image-figcaption": {
                  color: "gray.400",
                  textAlign: "center",
                  fontSize: "sm",
                },
              },
              pre: {
                borderWidth: "1px",
                borderColor: useColorModeValue("gray.200", "gray.700"),
                rounded: "md",
                maxW: "full",
                overflow: "hidden",
                code: {
                  width: "full",
                  maxW: "full",
                },
              },
              code: {
                verticalAlign: "middle",
              },
            }}
          >
            <MDXProvider components={MDXComponents}>{children}</MDXProvider>
          </VStack>
          <Container px="none" maxW="container.md" mb={[5, 5, 10, 20]}>
            <AuthorBlock author={post?.author} />
          </Container>
        </Container>
        <BlogRelatedPosts
          py={10}
          bg={bgColor}
          subtitle="Blog"
          title="Related Articles"
          items={post.relatedPosts}
        />
      </Layout>
    </>
  );
};

export default PagePost;
