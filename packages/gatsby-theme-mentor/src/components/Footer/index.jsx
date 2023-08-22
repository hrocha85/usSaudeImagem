import * as React from "react";

import { graphql, StaticQuery } from "gatsby";

import {
  Box,
  chakra,
  Container,
  Divider,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

import Newsletter from "../../blocks/newsletter";
import Logo from "../Logo";
import NavLink from "../Nav/nav.link";

const Footer = (props) => {
  return (
    <StaticQuery
      query={graphql`
        query FooterQuery {
          site {
            ...SeoSiteMetadataFooter
          }
        }
      `}
      render={({ site }) => (
        <Box py={10} color="whiteAlpha.800" bg="blackAlpha.900" {...props}>
          <VStack spacing={10}>
            <Container maxW="container.xl">
              <Stack
                direction={["column", "column", "row"]}
                align="baseline"
                justifyContent="space-between"
                spacing={10}
              >
                <VStack
                  mx={["unset", "auto", "auto"]}
                  maxW={["full", 550, 390]}
                >
                  <HStack
                    flex="1"
                    width="full"
                    justify={["center", "center", "start"]}
                    align="center"
                  >
                    <Logo />
                    {site?.siteMetadata?.name && (
                      <Heading fontSize="2xl" lineHeight={1}>
                        {site?.siteMetadata?.name}
                        {site?.siteMetadata?.slogan && (
                          <chakra.small
                            fontSize="md"
                            fontWeight="normal"
                            px={2}
                          >
                            {site?.siteMetadata?.slogan}
                          </chakra.small>
                        )}
                      </Heading>
                    )}
                  </HStack>
                  <Text
                    textAlign={["center", "center", "start"]}
                    color="whiteAlpha.700"
                  >
                    {site?.siteMetadata?.description}
                  </Text>
                </VStack>

                <Stack
                  flex="1"
                  width="full"
                  direction={["column", "row", "row", "row"]}
                >
                  {site?.siteMetadata?.footerNav && (
                    <Stack
                      as={"nav"}
                      direction={["column", "column", "column"]}
                      spacing={1}
                      align={["stretch", "center", "center", "start"]}
                      textAlign={["center", "center", "start", "start"]}
                      width="full"
                    >
                      {site?.siteMetadata?.footerNav.map((link) => (
                        <NavLink px={2} py={1} to={link.to} key={link.title}>
                          {link.title}
                        </NavLink>
                      ))}
                    </Stack>
                  )}

                  {site?.siteMetadata?.socialLinks && (
                    <Stack
                      as={"nav"}
                      direction={["column", "column", "column"]}
                      spacing={1}
                      align={["stretch", "center", "center", "start"]}
                      textAlign={["center", "center", "start", "start"]}
                      width="full"
                    >
                      {site?.siteMetadata?.socialLinks?.map((link) => (
                        <NavLink px={2} py={1} to={link.to} key={link.title}>
                          {link.title}
                        </NavLink>
                      ))}
                    </Stack>
                  )}
                </Stack>

                <Newsletter width="full" flex="1" />
              </Stack>
            </Container>

            <Divider borderColor="whiteAlpha.400" />

            <Container maxW="container.xl">
              <Stack
                align="center"
                direction={["column", "column", "row"]}
                justify="space-between"
              >
                {site?.siteMetadata?.copyrightText && (
                  <Text>{site?.siteMetadata?.copyrightText}</Text>
                )}

                {site?.siteMetadata?.footerLinks && (
                  <HStack as={"nav"} spacing={4}>
                    {site?.siteMetadata?.footerLinks.map((link) => (
                      <NavLink fontSize="sm" to={link.to} key={link.title}>
                        {link.title}
                      </NavLink>
                    ))}
                  </HStack>
                )}
              </Stack>
            </Container>
          </VStack>
        </Box>
      )}
    />
  );
};

export default Footer;
