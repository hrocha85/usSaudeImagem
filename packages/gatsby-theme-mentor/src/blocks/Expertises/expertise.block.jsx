import React from "react";

import { graphql, useStaticQuery } from "gatsby";

import {
  Box,
  Container,
  Grid,
  Heading,
  HStack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import HighlightLine2 from "../../components/Svg";
// import HighlightLine2 from "@themebiotic/gatsby-theme-mentor/components/Highlight/line-2";
import ChakraSVG from "../../components/Svg";;
// import ChakraSVG from "@themebiotic/gatsby-theme-mentor/components/Svg";

// eslint-disable-next-line no-unused-vars
const ExpertisesBlock = ({ subtitle, title, body, ...rest }) => {
  const data = useStaticQuery(graphql`
    query ExpertisesBlockQuery {
      allExpertisesYaml(sort: { fields: date, order: ASC }) {
        edges {
          node {
            id
            title
            description
            body
            icon {
              publicURL
            }
          }
        }
      }
    }
  `);

  const items =
    (data &&
      data.allExpertisesYaml &&
      data.allExpertisesYaml.edges.map((item) => item.node)) ??
    [];
  const grid = {
    base: "1fr",
    md: "1fr 1fr",
    lg: "1.5fr 1fr 1fr",
  };

  const hasEnd = (idx) => !((idx + 1) % 3);

  const endClass = {
    maxW: ["full", "full", "full", 333],
    justifySelf: "end",
  };

  const color = useColorModeValue("gray.600", "whiteAlpha.700");
  const colorAccent = useColorModeValue("brand.300", "brand.200");

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
                <Text
                  color={colorAccent}
                  colorScheme="brand"
                  fontSize="xl"
                  variant="subtitle"
                >
                  {subtitle}
                </Text>
                <HighlightLine2 color={colorAccent} />
              </HStack>
            )}
            {title && (
              <Heading size="3xl" data-sal="fadeup-low" data-sal-delay="400">
                {title}
              </Heading>
            )}
          </VStack>
          {items &&
            items.map(({ id, title, description, icon, body }, idx) => (
              <VStack
                key={id}
                align="start"
                width="full"
                data-sal="fadeup-low"
                data-sal-delay={100 * idx + 400}
                {...(hasEnd(idx) ? endClass : {})}
              >
                {icon && <ChakraSVG height={16} src={icon?.publicURL} />}
                {description && (
                  <Text
                    color={color}
                    textTransform="uppercase"
                    fontSize="xs"
                    fontWeight="bold"
                  >
                    {description}
                  </Text>
                )}
                <Heading size="md">{title}</Heading>
                <Text opacity={0.7} fontSize="lg">
                  {body}
                </Text>
              </VStack>
            ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default React.memo(ExpertisesBlock);
