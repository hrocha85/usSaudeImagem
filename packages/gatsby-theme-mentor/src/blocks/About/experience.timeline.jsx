import React from "react";

import { Link as GatsbyLink, graphql, useStaticQuery } from "gatsby";

import {
  Box,
  Circle,
  Divider,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

const ExperienceTimelineBlock = ({ reverse = false, ...rest }) => {
  const data = useStaticQuery(graphql`
    query ExperienceTimeline {
      allExperienceYaml(sort: { fields: startDate, order: DESC }) {
        edges {
          node {
            id
            company
            role
            product
            description
            body
            startDate
            endDate(formatString: "YYYY")
            workTitle {
              id
              title
              slug
            }
          }
        }
      }
    }
  `);

  const items = data?.allExperienceYaml?.edges.map((item) => item.node) ?? [];
  const direction = reverse
    ? ["column", "column", "row-reverse"]
    : ["column", "column", "row"];

  return (
    <Box {...rest}>
      {items.map((item, idx) => (
        <HistoryItem
          key={item.id}
          direction={direction}
          isLast={items.length === idx + 1}
          {...item}
        />
      ))}
    </Box>
  );
};

const HistoryItem = ({
  // eslint-disable-next-line no-unused-vars
  id,
  company,
  role,
  product,
  description,
  // eslint-disable-next-line no-unused-vars
  body,
  startDate,
  endDate,
  isLast,
  workTitle,
  ...rest
}) => {
  const brandColor = useColorModeValue("brand.300", "brand.200");
  const lightColor = useColorModeValue("gray.600", "gray.400");
  const borderColor = useColorModeValue("gray.300", "gray.400");
  const linkColor = useColorModeValue("brand.400", "brand.200");
  const linkHoverColor = useColorModeValue("secondary.500", "secondary.300");
  return (
    <Stack
      direction={["column", "column", "row"]}
      spacing={[4, 4, 10]}
      pos="relative"
      zIndex={1}
      _before={
        isLast
          ? null
          : {
              content: "''",
              display: ["block", "block", "none", "none"],
              pos: "absolute",
              width: "1px",
              height: "full",
              bg: borderColor,
              left: 1.5,
              top: 0,
              zIndex: 0,
            }
      }
      {...rest}
    >
      <Flex shrink="0" align="baseline">
        <Circle
          display={["block", "block", "none", "none"]}
          bg={brandColor}
          size={3}
          mr={3}
          pos="relative"
          zIndex={1}
        />

        <Text
          minW={135}
          textAlign={["start", "start", "end", "end"]}
          mt={-2}
          fontWeight="bold"
          fontSize="lg"
        >
          {startDate} to {endDate ? endDate : "Present"}
        </Text>
      </Flex>

      <Flex display={{ base: "none", md: "flex" }} pos="relative">
        <Circle
          bg={brandColor}
          size={4}
          pos="absolute"
          zIndex={1}
          left="50%"
          transform="translateX(-50%)"
        />
        {!isLast && <Divider borderColor="gray.300" orientation="vertical" />}
      </Flex>

      <VStack align="start" pb={10} pl={[6, 6, 0]}>
        <Heading as="h3" size="lg" mt={-3}>
          {company}
        </Heading>
        <Text color={brandColor} fontWeight="semibold" fontSize="xl">
          {role} {product}
        </Text>
        <Text color={lightColor} fontSize="lg">
          {description}
        </Text>
        {workTitle && workTitle.slug && (
          <Link
            as={GatsbyLink}
            position="relative"
            to={workTitle.slug}
            title={workTitle.title ?? ""}
            fontWeight="bold"
            color={linkColor}
            _after={{
              content: "''",
              display: "block",
              position: "absolute",
              bottom: -1,
              width: "41px",
              height: "2px",
              bg: linkHoverColor,
              transition: "width 300ms ease",
            }}
            _hover={{
              color: linkHoverColor,
              _after: {
                width: "full",
              },
            }}
          >
            View Work
          </Link>
        )}
      </VStack>
    </Stack>
  );
};

export default React.memo(ExperienceTimelineBlock);
