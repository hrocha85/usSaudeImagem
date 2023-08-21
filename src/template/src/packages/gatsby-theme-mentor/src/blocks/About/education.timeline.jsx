import React from "react";

import { graphql, useStaticQuery } from "gatsby";

import {
  Box,
  Circle,
  Divider,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

// eslint-disable-next-line no-unused-vars
const EducationTimelineBlock = ({ subtitle, title, body, ...rest }) => {
  const data = useStaticQuery(graphql`
    query EducationTimeline {
      allEducationYaml(sort: { fields: startDate, order: DESC }) {
        edges {
          node {
            id
            collegeName
            courseName
            faculty
            department
            description
            startDate(formatString: "YYYY")
            endDate(formatString: "YYYY")
          }
        }
      }
    }
  `);

  const items = data?.allEducationYaml?.edges.map((item) => item.node) ?? [];

  return (
    <Box {...rest}>
      {items.map((item, idx) => (
        <HistoryItem
          key={item.id}
          isLast={items.length === idx + 1}
          {...item}
        />
      ))}
    </Box>
  );
};

const HistoryItem = React.memo(
  ({
    // eslint-disable-next-line no-unused-vars
    id,
    startDate,
    endDate,
    collegeName,
    faculty,
    department,
    courseName,
    description,
    isLast,
  }) => {
    const brandColor = useColorModeValue("brand.300", "brand.200");
    const lightColor = useColorModeValue("gray.600", "gray.400");
    const borderColor = useColorModeValue("gray.300", "gray.400");
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
            mt={-2}
            minW={140}
            textAlign={["start", "start", "end", "end"]}
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
            {collegeName}
          </Heading>
          <Text color={brandColor} fontWeight="semibold" fontSize="xl">
            {courseName} {department} {faculty}
          </Text>
          <Text color={lightColor} fontSize="lg">
            {description}
          </Text>
        </VStack>
      </Stack>
    );
  },
);
HistoryItem.displayName = "HistoryItem";

export default React.memo(EducationTimelineBlock);
