import * as React from "react";

import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Flex, HStack, useColorMode } from "@chakra-ui/react";

const DarkModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      onClick={toggleColorMode}
      p={2}
      position="relative"
      background={colorMode === "light" ? "whiteAlpha.300" : "whiteAlpha.200"}
      borderRadius="200px"
      cursor="pointer"
      transition="0.3s"
      shadow="inset 0px 1px 3px rgba(0,0,0,0.4), inset 0px -1px 3px rgba(255,255,255,0.4)"
      _after={{
        content: "''",
        width: 6,
        height: 6,
        position: "absolute",
        top: 1,
        left: colorMode === "light" ? 1 : 14,
        background:
          colorMode === "light"
            ? "linear-gradient(180deg,#ffcc89,#d8860b)"
            : "linear-gradient(180deg,#777,#3a3a3a)",
        rounded: "full",
        // shadow: "0px 5px 10px rgba(0,0,0,0.2)",
        transition: "0.3s",
        transform: colorMode === "light" ? undefined : "translateX(-100%)",
        zIndex: 1,
      }}
      _active={{
        _after: {
          width: 7,
        },
      }}
    >
      <HStack pos="relative" zIndex={2} spacing={3}>
        <SunIcon aria-label="Light Icon" width={4} height={4} color="white" />
        <MoonIcon aria-label="Dark Icon" width={4} height={4} />
      </HStack>
    </Flex>
  );
};

export default DarkModeToggle;
