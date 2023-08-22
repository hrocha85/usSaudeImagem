import * as React from "react";

import { Link as GatsbyLink } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import {
  AspectRatio,
  Box,
  Container,
  Flex,
  Heading,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import { conditionalChunk } from "@themebiotic/gatsby-mentor-core/utils";

import Layout from "../layouts";
import { PaginationFull } from "./Pagination";
import Seo from "./Seo";

const PageWorks = ({ data }) => {
  const items = data?.allWork.edges.map((item) => item.node) ?? [];
  const _items = conditionalChunk(items, [2, 1]);

  let odd = 0;

  const calcDirection = (gidx) => {
    if (odd === 0) return false;
    return odd % 2 && gidx % 2 === 0;
  };

  const clacJustify = (group) => group.length === 1 && !(odd % 2);

  const calcWidth = (group, idx) => {
    if (group.length === 1) return ["full", "full", "66%"];
    if (idx) return ["full", "full", "40%"];
    return ["full", "full", "60%"];
  };

  const bg = useColorModeValue("gray.100", "gray.900");

  return (
    <>
      <Seo
        title="Works"
        description="A Look at the Evolving Landscape of Product Design"
        thumbnail={data?.thumbnail}
      />
      <Layout>
        <Flex py={[10, 10, 16]} bg={bg} mb={[5, 5, 10]}>
          <Container maxW="container.xl">
            <Stack direction={["column", "column", "row"]} align="center">
              <VStack align={["center", "center", "start"]} spacing={0}>
                <Text variant="subtitle">Works</Text>
                <Heading as="h1" size="4xl" maxW={1000}>
                  A Look at the Evolving Landscape of Product Design
                </Heading>
              </VStack>
            </Stack>
          </Container>
        </Flex>
        <Container maxW="container.xl" mb={[5, 5, 10]}>
          <Stack spacing={20}>
            {_items &&
              _items.map((group, gidx) => {
                return (
                  <Stack
                    key={`work-group-${gidx}`}
                    align="start"
                    spacing={[10, 10, 20, 32]}
                    justify={clacJustify(group) ? "end" : "start"}
                    direction={
                      calcDirection(gidx)
                        ? ["column-reverse", "column-reverse", "row-reverse"]
                        : ["column", "column", "row"]
                    }
                    pr={group.length === 1 && !(odd % 2) ? [0, 0, 20, 32] : 0}
                    pl={group.length === 1 && odd % 2 ? [0, 0, 20, 32] : 0}
                  >
                    {group.map(
                      (
                        { id, title, slug, cover, description, excerpt },
                        idx,
                      ) => {
                        if (group.length === 1 && !!(gidx % 2)) odd++;
                        const _image = getImage(cover);
                        return (
                          <Flex
                            key={id}
                            as="article"
                            role="group"
                            direction="column"
                            pos="relative"
                            width={calcWidth(group, idx)}
                          >
                            <LinkBox>
                              <VStack align="start" spacing={6}>
                                <AspectRatio
                                  flex="1"
                                  width="full"
                                  ratio={4 / 3}
                                  data-sal="fadeup-low"
                                  rounded="lg"
                                  overflow="hidden"
                                  _groupHover={{
                                    "& > div": {
                                      transform: "scale(1.2) rotate(3deg)",
                                    },
                                  }}
                                  sx={{
                                    "& > div": {
                                      transitionProperty: "common",
                                      transitionDuration: "normal",
                                      transitionTimingFunction: "ease",
                                    },
                                  }}
                                >
                                  <GatsbyImage image={_image} alt={title} />
                                </AspectRatio>
                                <Box
                                  transitionProperty="common"
                                  transitionDuration="normal"
                                  transitionTimingFunction="ease"
                                  _groupHover={{
                                    opacity: 0.65,
                                  }}
                                >
                                  <LinkOverlay
                                    as={GatsbyLink}
                                    to={slug}
                                    _before={{
                                      zIndex: 1,
                                    }}
                                  >
                                    <Heading
                                      // as="h3"
                                      size="lg"
                                      mb={2}
                                      data-sal="fadeup-low"
                                      data-sal-delay={100}
                                    >
                                      {title}
                                    </Heading>
                                  </LinkOverlay>
                                  <Text
                                    fontSize="xl"
                                    data-sal="fadeup-low"
                                    data-sal-delay={200}
                                  >
                                    {description ? description : excerpt}
                                  </Text>
                                </Box>
                              </VStack>
                            </LinkBox>
                          </Flex>
                        );
                      },
                    )}
                  </Stack>
                );
              })}
          </Stack>
        </Container>
        <PaginationFull
          urlPrefix="works"
          {...data?.allWork?.pageInfo}
          mb={[5, 5, 10]}
        />
      </Layout>
    </>
  );
};

export default PageWorks;
