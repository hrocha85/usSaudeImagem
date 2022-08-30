import { Box, Text } from "@chakra-ui/react";
import TitleBackground from "../images/title_background.png";

const BoxTitleBackground = ({ titulo }) => {
  return (
    <Box
      padding="20px"
      backgroundImage={TitleBackground}
      backgroundRepeat="no-repeat"
      backgroundSize="180px"
    >
      <Text textColor="black" fontWeight="bold" fontSize="19px" paddingEnd='5px'>
        {titulo}
      </Text>
    </Box>
  );
};

export default BoxTitleBackground;
