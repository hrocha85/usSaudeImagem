import * as React from "react";

import { Link as GatsbyLink } from "gatsby";

import { Link } from "@chakra-ui/react";

const NavLink = ({ to, children, ...rest }) => {
  const external = /^(https?:\/\/).*/gi.test(to);
  return (
    <Link
      as={external ? null : GatsbyLink}
      to={external ? null : to}
      href={external ? to : null}
      px={2}
      py={1}
      isExternal={external}
      rounded="md"
      fontWeight="semibold"
      transitionProperty="common"
      transitionDuration="normal"
      transitionTimingFunction="ease-in-out"
      _hover={{
        textDecoration: "none",

        opacity: 0.7,
      }}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default React.memo(NavLink);
