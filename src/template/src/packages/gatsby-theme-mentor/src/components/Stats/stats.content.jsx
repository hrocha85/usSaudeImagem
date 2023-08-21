import React from "react";

import { Box, Heading, Stack, Text, VStack } from "@chakra-ui/react";

export const StatsContent = ({ title, items, children }) => {
  return (
    <VStack
      align={["center", "center", "center"]}
      textAlign={["center", "center", "center"]}
      spacing={10}
    >
      <Heading size="2xl" data-sal="fadeup-low">
        {title}
      </Heading>
      <Stack
        direction={["column", "column", "row", "row"]}
        spacing={[10, 20, 28, 32]}
      >
        {items &&
          items.map((item, idx) => (
            <Box
              key={item.title + idx}
              data-sal="fadeup-low"
              data-sal-delay={100 * idx}
            >
              <Heading color={item.color} size="4xl">
                {item.title}
              </Heading>
              <Text fontSize="xl">{item.subtitle}</Text>
            </Box>
          ))}
      </Stack>
      {children && (
        <Stack
          align="center"
          spacing={[10, 10, 10, 20, 32]}
          direction={["column", "column", "row", "row"]}
        >
          {children}
        </Stack>
      )}
    </VStack>
  );
};
