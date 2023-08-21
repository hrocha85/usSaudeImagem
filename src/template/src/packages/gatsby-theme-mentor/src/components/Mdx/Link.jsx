import React from "react";

import { Link as GatsbyLink } from "gatsby";

import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Link, useColorModeValue } from "@chakra-ui/react";

const CustomLink = (props) => {
  const { href } = props;
  const color = useColorModeValue("brand.400", "brand.300");
  const hoverColor = useColorModeValue("primary.400", "primary.300");

  const external = /^(https?:\/\/).*/gi.test(href);

  return (
    <Link
      as={external ? null : GatsbyLink}
      to={external ? null : href}
      href={external ? href : null}
      display="inline-flex"
      alignItems="center"
      isExternal={external}
      _hover={external ? { color } : { color: hoverColor }}
      {...props}
    >
      {props.children} {external && <ExternalLinkIcon mx="2px" />}
    </Link>
  );
};

export default CustomLink;
