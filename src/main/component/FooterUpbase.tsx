import { Box, Flex, HStack, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import upLogo from "../images/logoUpbaRec.png";

const FooterUpbase = () => {
  return (
    <Box bg={'#fff'} opacity={0.4} width={'100%'}>
      <HStack justifyItems="center" justifyContent={'space-evenly'} >

        <Text fontWeight={600} color={'black'}>Todos os direitos reservados</Text>
        <Text fontWeight={600} color={'black'}>Upbase Consultoria</Text>
      </HStack>
    </Box>
  );
};

export default FooterUpbase;
