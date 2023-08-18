import { Box, Flex, HStack, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import upLogo from "../images/logoUpbaRec.png";

const FooterUpbase = () => {
  return (
    <Box bg={'#eaebeb'} mt={'1rem'} h={'100%'} >
      <HStack pt={2} justifyItems="center" justifyContent={'space-around'} borderTop={'1px solid #6d7a78'}>

        <Text fontWeight={600} color={'gray.500'}>Todos os direitos reservados</Text>
        <Text fontWeight={600} color={'gray.500'}>Upbase Consultoria</Text>
      </HStack>
    </Box>
  );
};

export default FooterUpbase;
