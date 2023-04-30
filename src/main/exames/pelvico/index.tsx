/* eslint-disable react/jsx-pascal-case */
import { Box, Checkbox, HStack } from "@chakra-ui/react";
import { useState } from "react";

import Miometrio from "./miometrio/miometrio";

import Utero from "./utero/utero";
import Extras from "./adicionais/extras";
import Bexiga from "./bexiga/bexiga";
import Cirurgias from "./cirurgias/cirurgias";
import Hidatide from "./hidatide/hidatide";
import Hidrossalpinge from "./hidrossalpinge/hidrossalpinge";
import Liquido_Livre from "./liquido_livre/liquido_livre";
import Ovario_Direito from "./ovarios/ovario_direito";
import Ovario_Esquerdo from "./ovarios/ovario_esquedo";

function Pelvico() {
  const altura = '100%'
  const largura = '230px'
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
          mb='5px'>

          <Checkbox
            onChange={(e) => { SetDisable(!Disable) }}
          >Pélvico Normal</Checkbox>

        </Box >
        <Bexiga Disable={Disable} />
        <Utero Disable={Disable} />


        <Ovario_Esquerdo />
        <Ovario_Direito Disable={Disable} />


        <HStack alignItems="baseline">
          <Hidatide Disable={Disable} />
          <Hidrossalpinge Disable={Disable} />
        </HStack>
        <HStack alignItems="baseline">
          <Liquido_Livre Disable={Disable} />
          <Extras Disable={Disable} />
        </HStack>
        <Cirurgias Disable={Disable} />
      </Box>
    </>
  );
}

export default Pelvico;
