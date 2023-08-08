import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import upLogo from "../images/logoUpbaRec.png";

const FooterUpbase = () => {
  return (
    <Box bg={'#eaebeb'}>
      <Flex alignItems="center" justifyContent={'space-around'} borderTop={'1px solid #6d7a78'}>
        <Image
          src={upLogo}
          alt="Logomarca Upbase"
          objectFit="contain"
          h="6rem"
          w="10rem"
          margin={0}

        />

        <Text fontWeight={600}>Todos os direitos reservados</Text>
      </Flex>
    </Box>
  );
};

export default FooterUpbase;
