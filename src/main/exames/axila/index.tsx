import { Box } from "@chakra-ui/react";

import Axila_direita from "./axilas/axila_direita";
import Axila_esquerda from "./axilas/axila_esquerda";


function Axila() {


  return (
    <>
      <Box ml="10px" rowGap='20px' >
        <Box display='flex' flexWrap='wrap' gap='15px'>
          <Axila_esquerda />
          <Axila_direita />
        </Box >
      </Box >
    </>
  );
}

export default Axila;
