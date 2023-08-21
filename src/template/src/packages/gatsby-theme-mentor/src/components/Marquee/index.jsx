import * as React from "react";

import Marquee from "react-fast-marquee";

import { useColorModeValue } from "@chakra-ui/react";

export const MarqueeComponent = ({ children }) => {
  const colors = useColorModeValue([255, 255, 255], [26, 32, 44]);
  return <Marquee gradientColor={colors}>{children}</Marquee>;
};

export default React.memo(MarqueeComponent);
