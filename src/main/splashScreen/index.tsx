import { Box,Button,ButtonGroup,Flex,Heading,Spacer,Text } from "@chakra-ui/react";
import React from "react";
import "./styles.css";
import Card from "../component/main_card";
import Configuracoes from "../configuracao/configuracoes";


const SplashScreen = () => {

    return(
        /*<Flex minWidth='max-content' alignItems='center' gap='2'>
        <Box p='2'>
          <Heading size='md'>Chakra App</Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap='2'>
          <Button colorScheme='teal'>Sign Up</Button>
          <Button colorScheme='teal'>Log in</Button>
        </ButtonGroup>
      </Flex>*/
      <Configuracoes/>
      //<Card/>
      
    );
  
}

export default SplashScreen; 