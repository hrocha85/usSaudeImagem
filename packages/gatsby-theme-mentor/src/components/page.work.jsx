import { MDXProvider } from "@mdx-js/react";

import * as React from "react";

import { GatsbyImage, getImage } from "gatsby-plugin-image";

import {
  Box,
  Container,
  Divider,
  Grid,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  VStack,
  Wrap,
} from "@chakra-ui/react";

import Layout from "../layouts";
import MDXComponents from "./Mdx";
import TableOfContents from "./Mdx/TableOfContents";
import Seo from "./Seo";

const PageWork = ({ data, children }) => {
  const { work } = data;
  let _cover;

  const hideSidebar = work.hideSidebar;

  if (work.cover) {
    _cover = getImage(work.cover);
  }

  const _spacing = [4, 4, 5];
  const _spacingNegative = [-4, -4, -5];
  return (
    <>
      <Seo
        title={work?.title}
        description={work?.description ? work?.description : work?.excerpt}
        // pathname={post.slug}
        thumbnail={work?.cover}
      />
      <Layout>
        <Container maxW="container.xl" py={[5, 5, 7, 10]}>
          <VStack align="start" mb={[5, 5, 10]}>
            <Text variant="subtitle">Project Details</Text>
            <Heading as="h1" size={["2xl", "3xl", "4xl"]}>
              {work?.title}
            </Heading>
            {work?.description && (
              <Text maxW={["full", "full", "80%", "70%"]} fontSize="xl">
                {work?.description}
              </Text>
            )}
          </VStack>

          <Box pos="relative" rounded="xl" overflow="hidden">
            <GatsbyImage loading="eager" image={_cover} alt={work?.title} />
          </Box>
        </Container>

        <Container pos="relative" maxW="container.xl" mb={[5, 5, 10, 20]}>
          <Stack
            spacing={[5, 5, 10, 20]}
            direction={["column", "column", "row"]}
          >
            {!hideSidebar && (
              <Stack p={[4, 4, 6]} shadow="xl">
                <Box>
                  <Heading as="h4" size="md" mb={4}>
                    Project Details
                  </Heading>
                  <Details
                    gap={2}
                    templateColumns={["1fr", "1fr 1fr", "1fr", "1fr"]}
                    details={work?.details}
                  />
                </Box>
                <Box py={4}>
                  <Divider />
                </Box>
                <Box position="sticky" top={10}>
                  <Heading as="h3" size="md" mb={4}>
                    Table of Contents
                  </Heading>
                  <TableOfContents type="work" data={data} />
                </Box>
              </Stack>
            )}

            <VStack
              width="full"
              flex="2"
              align="stretch"
              overflow="hidden"
              spacing={_spacing}
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
              {hideSidebar && (
                <Box rounded="lg" p={4} bg="gray.100">
                  <Heading as="h3" size="md" mb={4}>
                    Project Details
                  </Heading>
                  <Details
                    templateColumns={["1fr", "1fr 1fr", "1fr 1fr"]}
                    details={work?.details}
                  />
                </Box>
              )}
              <MDXProvider components={MDXComponents}>{children}</MDXProvider>
            </VStack>
          </Stack>
        </Container>
      </Layout>
    </>
  );
};

const Details = ({ details, ...rest }) => {
  return (
    <Grid gap={4} {...rest}>
      {details &&
        details.map((item, idx) => (
          <Stack key={`${item.title}-${idx}`} spacing={0} align="start">
            <Text fontWeight="bold">{item.title}</Text>
            <Wrap spacingX={1} shouldWrapChildren align="start">
              {item.items.map((i, index) => (
                <Text key={i + index}>{i}</Text>
              ))}
            </Wrap>
          </Stack>
        ))}
    </Grid>
  );
};

export default PageWork;
