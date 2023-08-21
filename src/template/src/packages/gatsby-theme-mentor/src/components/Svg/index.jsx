import React from "react";

import SVG from "react-inlinesvg";

import { chakra, shouldForwardProp } from "@chakra-ui/react";

const ChakraSVG = chakra(SVG, {
  shouldForwardProp: (prop) => {
    // don't forward Chakra's props
    const isChakraProp = !shouldForwardProp(prop);
    if (isChakraProp) return false;

    // else, only forward `sample` prop
    return ["src"].includes(prop);
  },
});

export default React.memo(ChakraSVG);
