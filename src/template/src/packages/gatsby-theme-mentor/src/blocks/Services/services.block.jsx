import React from "react";

import { graphql, useStaticQuery } from "gatsby";

import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";

import HighlightLine2 from "../../components/Highlight/line-2";
// import HighlightLine2 from "@themebiotic/gatsby-theme-mentor/components/Highlight/line-2";
import ChakraSVG from "../../components/Highlight/line-2";
// import ChakraSVG from "@themebiotic/gatsby-theme-mentor/components/Svg";

// eslint-disable-next-line no-unused-vars
const ServicesBlock = ({ subtitle, title, body, ...rest }) => {
  const data = useStaticQuery(graphql`
    query ServicesBlockQuery {
      allServicesYaml(sort: { fields: order, order: ASC }) {
        edges {
          node {
            id
            icon {
              publicURL
            }
            title
            body
          }
        }
      }
    }
  `);

  const hasEnd = (idx) => !((idx + 1) % 3);

  const endClass = {
    maxW: ["full", "full", "full", 333],
    justifySelf: "end",
  };

  const items =
    (data &&
      data.allServicesYaml &&
      data.allServicesYaml.edges.map((item) => item.node)) ??
    [];
  const grid = {
    base: "1fr",
    md: "1fr 1fr",
    lg: "1.5fr 1fr 1fr",
  };
  return (
    <Box {...rest}>
      <Container maxW="container.xl">
        <Grid gap={[5, 5, 10]} templateColumns={grid}>
          <VStack
            align="start"
            maxW={["full", "full", 500]}
            data-sal="fadeup-low"
          >
            {subtitle && (
              <HStack data-sal="fadeup-low" data-sal-delay="200">
                <Text colorScheme="secondary" fontSize="xl" variant="subtitle">
                  {subtitle}
                </Text>
                <HighlightLine2 color="secondary.300" />
              </HStack>
            )}
            {title && (
              <Heading size="3xl" data-sal="fadeup-low" data-sal-delay="400">
                {title}
              </Heading>
            )}
          </VStack>
          {items &&
            items.map((item, idx) => (
              <Flex
                key={item.id}
                data-sal="fadeup-low"
                data-sal-delay={100 * idx ?? 100}
                {...(hasEnd(idx) ? endClass : {})}
              >
                <VStack align="stretch" spacing={[2]}>
                  <ChakraSVG
                    color="green.300"
                    width={16}
                    src={item.icon?.publicURL}
                  />
                  <Text fontSize="xl" fontWeight="bold">
                    {item.title}
                  </Text>
                  <Text>{item.body}</Text>
                </VStack>
              </Flex>
            ))}
          <Flex
            align="center"
            justify={["center", "center", "center", "end"]}
            data-sal="fadeup-low"
            data-sal-delay={items.length * 100}
          >
            <Button colorScheme="white" size="jumbo">
              Start a project
            </Button>
          </Flex>
        </Grid>
      </Container>
    </Box>
  );
};

export default React.memo(ServicesBlock);
