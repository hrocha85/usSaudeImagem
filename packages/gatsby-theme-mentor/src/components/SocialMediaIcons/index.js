import * as React from "react";

import { Icon } from "@chakra-ui/react";

import Icons from "./icons";

const lowerCase = (text) => text.toLowerCase();

const SocialMediaIcons = ({ name, ...rest }) => {
  if (!name) return;

  const _icon = Icons.filter(
    (item) => lowerCase(item.name) === lowerCase(name),
  );
  if (_icon.length === 0) return;
  return <Icon as={_icon[0].icon} {...rest} />;
};

export default SocialMediaIcons;
