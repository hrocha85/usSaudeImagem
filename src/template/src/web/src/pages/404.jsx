import * as React from "react";

import { Link as GatsbyLink } from "gatsby";

import { Box, Container, Flex, Heading, Link, Text } from "@chakra-ui/react";

import Seo from "@themebiotic/gatsby-theme-mentor/components/Seo";

const NotFoundPage = () => (
  <>
    <Seo
      title="404 Page not found"
      description="The page you're looking for cannot be found. Please check that you have entered the correct URL or navigate back to the homepage."
    />
    <Flex align="center" bg="red.150" height="100vh" width="full">
      <Container>
        <Heading as="h1" size="4xl" mb={10}>
          Page not found
        </Heading>

        <Text fontSize="xl" mb={14}>
          Sorry 😔 — The page you`re looking for cannot be found. Please check
          that you have entered the correct URL or navigate back to the
          homepage. If you continue to experience issues, please contact our
          support team for assistance.
        </Text>

        <Box mb={5}>
          <Text fontWeight="bold">Support team</Text>
          <Text>Email support@company.tld and we’ll help you.</Text>
        </Box>
        <Link as={GatsbyLink} to="/">
          &#8592; Mentor Homepage
        </Link>
      </Container>
    </Flex>
  </>
);

export default NotFoundPage;
