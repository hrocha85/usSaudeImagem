import * as React from "react";

import { Link as GatsbyLink } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import {
  Box,
  chakra,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import {
  PaginationFull, // PaginationMini,
} from "@themebiotic/gatsby-theme-mentor/components/Pagination";

import Layout from "../layouts";
import Seo from "./Seo";

const PagePost = ({ location, data: { tag, allPost } }) => {
  const { title, description, icon } = tag;

  const posts = allPost?.edges;
  const pageInfo = allPost?.pageInfo;

  const bg = useColorModeValue("gray.100", "gray.900");

  const pathArray = location?.pathname.split("/");
  if (pathArray[pathArray.length - 1] == pageInfo.currentPage) {
    pathArray.pop();
  }
  let path = pathArray.join("/");

  return (
    <>
      <Seo title={title} description={description} />
      <Layout>
        <Flex py={[10, 10, 16]} bg={bg} mb={[5, 5, 10]}>
          <Container maxW="container.xl">
            <Stack direction={["column", "column", "row"]} align="center">
              <Image
                width="80px"
                height="80px"
                src={icon.publicURL}
                alt={description}
              />
              <VStack
                spacing={0}
                align={["center", "center", "start"]}
                textAlign={["center", "center", "start"]}
              >
                <Heading as="h1">{title}</Heading>
                <Text maxW={650} opacity={0.75} fontSize="xl">
                  {description}
                </Text>
              </VStack>
            </Stack>
          </Container>
        </Flex>

        <Container maxW="container.xl" mb={[5, 5, 10]}>
          <Stack spacing={[5, 5, 10, 20]}>
            {posts.map((item, idx) => (
              <PostItem key={item.node.id} idx={idx} {...item.node} />
            ))}
          </Stack>
        </Container>
        <Container maxW="container.lg" mb={10}>
          {/* <PaginationMini urlPrefix="/blog" {...pageInfo} /> */}
          <PaginationFull urlPrefix={path} {...pageInfo} />
        </Container>
      </Layout>
    </>
  );
};

const PostItem = React.memo(
  ({
    idx,
    title,
    author,
    slug,
    cover,
    // eslint-disable-next-line no-unused-vars
    tags,
    excerpt,
    date,
    // eslint-disable-next-line no-unused-vars
    featured,
    timeToRead,
    ...rest
  }) => {
    const _cover = getImage(cover);
    const direction =
      idx % 2
        ? ["column", "column", "row-reverse"]
        : ["column", "column", "row"];
    return (
      <chakra.article {...rest}>
        <Stack align="center" direction={direction} spacing={[5, 5, 10]}>
          {_cover && (
            <Box
              flex="1"
              width="full"
              rounded="lg"
              overflow="hidden"
              sx={{
                ".gatsby-image-wrapper": {
                  width: "full",
                  height: "full",
                  img: {
                    objectFit: "contain",
                    objectPosition: "center",
                  },
                },
              }}
            >
              <GatsbyImage image={_cover} alt={title} />
            </Box>
          )}
          <VStack align="start" flex="1" width="full">
            <Text>
              By {author?.name} &bull; {date} &bull; {timeToRead?.text}
            </Text>
            <Heading>{title}</Heading>
            <Text fontSize="lg">{excerpt}</Text>
            <Link
              to={slug}
              as={GatsbyLink}
              title={title}
              fontSize="lg"
              fontWeight="bold"
              variant="underline"
              colorScheme="secondary"
              _hover={{}}
            >
              Read Story
            </Link>
          </VStack>
        </Stack>
      </chakra.article>
    );
  },
);
PostItem.displayName = "PostItem";

export default PagePost;
