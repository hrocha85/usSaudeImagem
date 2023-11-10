import { Box, useMediaQuery } from "@chakra-ui/react";

import Axila_direita from "./axilas/axila_direita";
import Axila_esquerda from "./axilas/axila_esquerda";
import { useEffect } from "react";


function Axila() {
  useEffect(() => {
    console.log('ta caindo na axila')
  })
  let disp = 'block';
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
  isLargerThan600 ? disp = 'flex' : disp = 'block'
  return (
    <>
      <Box ml="10px" rowGap='20px' >
        <Box display={disp} flexWrap='wrap' gap='15px'>
          <Axila_esquerda />
          <Axila_direita />
        </Box >
      </Box >
    </>
  );
}

export default Axila;
