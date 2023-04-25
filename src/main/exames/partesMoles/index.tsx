/* eslint-disable react/jsx-pascal-case */
import { Box, Checkbox } from "@chakra-ui/react";
import { useState } from "react";

import CistoAnecoico from "../partesMoles/cistoAnecoico/cistoAnecoico";
import CistoSebaceo from "../partesMoles/cistoSebaceo/cistoSebaceo";
import Colecao from "../partesMoles/paredeAbdominal/colecao";
import Nodulos from "./partes_moles/nodulos";
import Achados_Normais from "./torax/achados_normais";


function PartesMoles() {
  const altura = '100%'
  const largura = '220px'
  const [Disable, SetDisable] = useState(false)
  return (
    <>
      <Box
        bg="#FAFAFA"
        w={largura}
        h={altura}
        bgPosition="center"
        bgRepeat="no-repeat"
        borderRadius="10.85px"
        boxShadow="md"
        padding='10px 15px 10px 15px'
        mt='2px'
        mb='5px'>

        <Checkbox
          id="tudoNormal"
          onChange={(e) => { SetDisable(!Disable) }}
        >Partes moles normal</Checkbox>

      </Box >

      <Achados_Normais Disable={Disable} />
      {/*<Partes_Moles Disable={Disable} />*/}
      <Nodulos Disable={Disable} />
      <Box gap='20px' display='flex' flexWrap='wrap'>
        {/* <CistoSebaceo Disable={Disable} />
        <CistoAnecoico Disable={Disable} /> */}

        <Colecao Disable={Disable} />

      </Box>
    </>
  );
}

export default PartesMoles;
