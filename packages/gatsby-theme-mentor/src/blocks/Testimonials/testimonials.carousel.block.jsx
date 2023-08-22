import React from "react";

import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import {
  Box,
  Circle,
  Container,
  Flex,
  Heading,
  HStack,
  Text,
  useColorModeValue,
  VStack,
  Wrap,
} from "@chakra-ui/react";

import HighlightLine2 from "../../components/Highlight/line-2";
// import HighlightLine2 from "@themebiotic/gatsby-theme-mentor/components/Highlight/line-2";
import { Rating } from "../../components/Rating";
// import { Rating } from "@themebiotic/gatsby-theme-mentor/components/Rating";
import Swiper from "../../components/Swiper";
// import Swiper from "@themebiotic/gatsby-theme-mentor/components/Swiper";

const TestimonialsCarouselBlock = ({ title, subtitle }) => {
  const bg = useColorModeValue("gray.100", "gray.600");

  const data = useStaticQuery(graphql`
    query TestimonialsCarouselBlock {
      allTestimonialsYaml(sort: { fields: date, order: DESC }) {
        edges {
          node {
            id
            title
            name
            job
            company
            rating
            body
            avatar {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, width: 128)
              }
            }
          }
        }
      }
    }
  `);

  const items = data.allTestimonialsYaml.edges.map((item) => item.node) ?? [];

  return (
    <Box>
      <Container maxW="container.xl">
        <VStack textAlign="center" mb={20}>
          <HStack data-sal="fadeup-low">
            <HighlightLine2 color="brand.300" transform="scaleX(-1)" />
            <Text fontSize="xl" variant="subtitle">
              {subtitle}
            </Text>
            <HighlightLine2 color="brand.300" />
          </HStack>
          <Heading size="3xl" data-sal="fadeup-low" data-sal-delay="200">
            {title}
          </Heading>
        </VStack>
      </Container>
      <Container
        px={[5, 5, 0]}
        data-sal="fadeup-low"
        data-sal-delay="400"
        maxW="full"
      >
        <Swiper slidesPerView={3} centeredSlides={true} spaceBetween={10}>
          {items.map(
            ({ id, title, name, body, avatar, job, company, rating }) => {
              const _avatar = getImage(avatar);
              return (
                <Flex key={id} align="center" justify="center">
                  <VStack
                    p={6}
                    spacing={6}
                    rounded="xl"
                    align="strech"
                    bg={bg}
                    width={["full", "full", 550]}
                  >
                    <Rating value={rating} fontSize="xl" />
                    <Heading as="h3" size="lg">
                      {title}
                    </Heading>
                    <Text flexWrap="nowrap" fontSize="lg">
                      {body}
                    </Text>
                    <Wrap shouldWrapChildren>
                      <Circle bg="gray.100" size={"64px"} overflow="hidden">
                        <GatsbyImage image={_avatar} alt={name} />
                      </Circle>
                      <Flex
                        direction="column"
                        align="start"
                        justify="center"
                        spacing={0}
                      >
                        <Text fontSize="xl" fontWeight="bold">
                          {name}
                        </Text>
                        <Text>{[job, company].join(", ")}</Text>
                      </Flex>
                    </Wrap>
                  </VStack>
                </Flex>
              );
            },
          )}
        </Swiper>
      </Container>
    </Box>
  );
};

export default React.memo(TestimonialsCarouselBlock);
