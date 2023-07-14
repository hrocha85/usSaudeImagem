import { Box, Text } from "@chakra-ui/react";
import TitleBackground from "../images/title_background.png";

const BoxTitleBackground = ({ titulo, tamanho, PadLeft, fontsize }) => {

  return (
    <>
      <Box
        padding="20px"
        paddingLeft={PadLeft}
        backgroundImage={TitleBackground}
        backgroundRepeat="no-repeat"
        backgroundSize={tamanho}
      >
        <Text
          textColor="black"
          fontWeight="bold"
          fontSize={fontsize}
          paddingEnd="5px"
        >
          {titulo}
        </Text>
      </Box>
    </>
  );
};

export default BoxTitleBackground;
