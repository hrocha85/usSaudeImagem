import { Box, Checkbox, useMediaQuery } from "@chakra-ui/react";

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
  const altura = "100%"
	let largura = "60%";
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
  isLargerThan600 ? largura = "60%": largura = "100%"
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

          <Box w='100%' >
            <Checkbox
              onChange={(e) => { SetDisable(!Disable) }}
            >Rins e vias Urinarias normal</Checkbox>
          </Box>
        </Box>
        <ExtraRins />
        <Calculo />
        <Cisto />
        <Dilatacao />

        <Nodulos />

        <Bexiga Disable={Disable} />

      </Box>
    </>
  );
}

export default RinseViasUrinarias;
