import { Box, Button, ButtonGroup, Flex, Heading, Spacer } from "@chakra-ui/react";
import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";


const SplashScreen = () => {
  return (
    <Flex minWidth='max-content' alignItems='center' gap='2'>
      <ButtonGroup gap='2'>
        <Button colorScheme='teal'>
        <Link to="AbdomemTotal">ir para exame Abdomen</Link>
        </Button>
        <Link to="Tireoide">ir para exame Tireoide</Link>
      </ButtonGroup>
    </Flex>
  );
}

export default SplashScreen; 