import React from "react";

import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  AspectRatio,
  Box,
  Button,
  Code,
  Container,
  Divider,
  Heading,
  HStack,
  ListItem,
  OrderedList,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  UnorderedList,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import CodeBlock from "./CodeBlock";
import CustomLink from "./Link";
import TableOfContents from "./TableOfContents";

const MDXComponents = {
  a: CustomLink,
  h1: (props) => <Heading as="h1" size="xl" {...props} />,
  h2: (props) => <Heading as="h2" size="lg" {...props} />,
  h3: (props) => <Heading as="h3" size="md" {...props} />,
  h4: (props) => <Heading as="h4" size="sm" {...props} />,
  h5: (props) => <Heading as="h5" size="sm" {...props} />,
  h6: (props) => <Heading as="h5" size="xs" {...props} />,
  Heading: (props) => <Heading {...props} />,
  p: (props) => <Text maxW="container.md" {...props} />,
  Code: (props) => <Code colorScheme="gray" {...props} />,
  Text: (props) => <Text {...props} />,
  Lead: (props) => <Text fontSize="lg" {...props} />,
  table: (props) => (
    <Box overflow="auto">
      <Box minW="container.sm" overflowX="auto">
        <Table width="full" colorScheme="gray" variant="simple" {...props} />
      </Box>
    </Box>
  ),
  Container: (props) => <Container maxW="container.md" {...props} />,
  TableOfContents: (props) => <TableOfContents {...props} />,
  thead: (props) => <Thead {...props} />,
  tbody: (props) => <Tbody {...props} />,
  tr: (props) => <Tr {...props} />,
  td: (props) => <Td {...props} />,
  th: (props) => <Th {...props} />,
  Divider: ({ children, ...rest }) => (
    <HStack {...rest}>
      <Divider />
      <Text
        fontFamily="heading"
        fontSize="xs"
        color="gray.500"
        fontWeight={700}
        textTransform="uppercase"
      >
        {children}
      </Text>
      <Divider />
    </HStack>
  ),
  ul: (props) => (
    <Box>
      <UnorderedList {...props} />
    </Box>
  ),
  ol: (props) => (
    <Box>
      <OrderedList {...props} />
    </Box>
  ),
  UnorderedList: (props) => <UnorderedList {...props} />,
  OrderedList: (props) => <OrderedList {...props} />,
  li: (props) => <ListItem {...props} />,
  code: (props) => <CodeBlock {...props} />,
  hr: (props) => <Divider {...props} />,

  // Chakra UI
  AspectRatio: (props) => <AspectRatio {...props} />,
  Alert: (props) => <Alert {...props} />,
  AlertIcon: (props) => <AlertIcon {...props} />,
  AlertTitle: (props) => <AlertTitle {...props} />,
  AlertDescription: (props) => <AlertDescription {...props} />,
  Box: (props) => <Box {...props} />,
  Button: (props) => <Button {...props} />,
  Stack: (props) => <Stack {...props} />,
  Thumbnail: (props) => (
    <Box
      p={1.5}
      flex="1"
      rounded="lg"
      borderWidth="1px"
      borderColor="rgba(0,0,0,0.2)"
      sx={{
        ".gatsby-resp-image-wrapper": {
          rounded: "lg",
          overflow: "hidden",
        },
      }}
      {...props}
    />
  ),
  Wrap: (props) => <Wrap shouldWrapChildren {...props} />,
  WrapItem: (props) => <WrapItem {...props} />,
};

export default MDXComponents;
