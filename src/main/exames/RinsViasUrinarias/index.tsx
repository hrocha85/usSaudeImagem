import { Box, Checkbox } from "@chakra-ui/react";

import Calculo from "./calculos/calculos";
import Cisto from "./cistos/cistos";
import Dilatacao from "./dilatacao/dilatacao";
import Nodulos from "./nodulos/nodulos";
import RimDireito from "./rim_direito/rim_direito";
import RimEsquerdo from "./rim_esquerdo/rim_esquerdo";
import ExtraRins from "./ExtraRins/ExtraRins";
import Bexiga from "./bexiga/bexiga";
import { useState } from "react";
function RinseViasUrinarias() {
  const altura = '100%'
  const largura = '40%'
  const [Disable, SetDisable] = useState(false)

  return (
    <>

      <Box ml="10px">
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
          mb='5px'
          display='flex'
          flexWrap='wrap'
          alignItems='center' gap='5px'>

          <Box w='150px' >
            <Checkbox
              onChange={(e) => { SetDisable(!Disable) }}
            >Rins e vias Urinarias normal</Checkbox>
          </Box>
        </Box>
        <ExtraRins />
        <Calculo />
        <Cisto />
        <Dilatacao />
        <Box w="70%" display="flex" flexWrap="wrap">
          <Box w="400px" mb="15px">
            <Nodulos />
          </Box>
          <Box w="370px" mb="15px">
            <Bexiga Disable={Disable} />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default RinseViasUrinarias;
