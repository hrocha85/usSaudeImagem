import React, { useRef } from "react";

import { graphql, StaticQuery } from "gatsby";

import { HamburgerIcon } from "@chakra-ui/icons";
import {
  chakra,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Stack,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

import Logo from "../Logo";
import NavLink from "../Nav/nav.link";
import DarkModeToggle from "../toggle/dark-mode-toggle";

const Header = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <StaticQuery
      query={graphql`
        query HeadingQuery {
          site {
            ...SeoSiteMetadataHeader
          }
        }
      `}
      render={({ site }) => (
        <Flex align="center" {...props}>
          <Container maxW="container.xl">
            <Stack
              direction={["column", "column", "row"]}
              align="center"
              width="full"
            >
              <Stack align="center" direction={["column", "row", "row"]}>
                <Flex>
                  <Logo />
                </Flex>
                {site?.siteMetadata?.name && (
                  <Heading
                    textAlign={["center", "start", "start"]}
                    fontSize="2xl"
                    lineHeight={1}
                  >
                    {site?.siteMetadata?.name}
                    {site?.siteMetadata?.slogan && (
                      <chakra.small
                        display={["block", "inline", "inline"]}
                        fontFamily="body"
                        fontSize="md"
                        fontWeight="normal"
                        px={2}
                      >
                        {site?.siteMetadata?.slogan}
                      </chakra.small>
                    )}
                  </Heading>
                )}
              </Stack>

              {site?.siteMetadata?.mainNav && (
                <Stack
                  as={"nav"}
                  spacing={4}
                  px={4}
                  display={{ base: "none", sm: "initial" }}
                  direction={["column", "column", "row"]}
                  flexShrink="0"
                >
                  {site?.siteMetadata?.mainNav.map((link) => (
                    <NavLink
                      fontSize="lg"
                      fontWeight="bold"
                      to={link.to}
                      key={link.title}
                    >
                      {link.title}
                    </NavLink>
                  ))}
                </Stack>
              )}

              <Flex
                justify={["space-between", "end", "end"]}
                marginLeft={["unset", "unset", "auto!", "auto!"]}
                width={{
                  base: "full",
                  sm: "unset",
                }}
                sx={{
                  position: ["fixed", "unset", "unset", "unset"],
                  top: 1.5,
                  px: 1.5,
                  zIndex: "sticky",
                }}
              >
                <HamburgerIcon
                  ref={btnRef}
                  cursor="pointer"
                  onClick={onOpen}
                  display={["block", "none", "none", "none"]}
                  width={8}
                  height={8}
                />
                <DarkModeToggle />
              </Flex>
            </Stack>
          </Container>
          <MobileMenu
            btnRef={btnRef}
            isOpen={isOpen}
            onClose={onClose}
            links={site?.siteMetadata?.mainNav ?? []}
          />
        </Flex>
      )}
    />
  );
};

const MobileMenu = ({ links, btnRef, isOpen, onClose }) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement="top"
      size="full"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton width={12} height={12} />
        <DrawerHeader>MENU</DrawerHeader>

        <DrawerBody display="flex" alignItems="center" justifyContent="center">
          <Stack as={"nav"} align="center" justify="center" spacing={2}>
            {links.map((link) => (
              <NavLink
                fontSize="4xl"
                fontWeight="semibold"
                textTransform="uppercase"
                to={link.to}
                key={link.title}
                display="inline"
                width="auto"
                textAlign="center"
                transitionDuration="0.3s"
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.100", "whiteAlpha.200"),
                  // opacity: 0.7,
                }}
              >
                {link.title}
              </NavLink>
            ))}
          </Stack>
        </DrawerBody>

        {/* <DrawerFooter>
                <Button variant="outline" mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme="blue">Save</Button>
              </DrawerFooter> */}
      </DrawerContent>
    </Drawer>
  );
};

export default Header;
