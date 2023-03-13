/* eslint-disable react/jsx-pascal-case */
import { Box, HStack } from "@chakra-ui/react";

import Extras from "./adicionais/extras";
import Cirurgias from "./cirurgias/cirurgias";
import Hidatide from "./hidatide/hidatide";
import Hidrossalpinge from "./hidrossalpinge/hidrossalpinge";
import Liquido_Livre from "./liquido_livre/liquido_livre";
import Miometrio from "./miometrio/miometrio";
import Ovario_Direito from "./ovarios/ovario_direito";
import Ovario_Esquerdo from "./ovarios/ovario_esquedo";
import Utero from "./utero/utero";

function Pelvico() {
  return (
    <>


      <Box ml="10px">
        <Utero />
        <HStack alignItems="baseline">
          <Ovario_Esquerdo />
          <Ovario_Direito />
        </HStack>
        <Miometrio />
        <Cirurgias />
        <HStack alignItems="baseline">
          <Hidatide />
          <Hidrossalpinge />
        </HStack>
        <HStack alignItems="baseline">
          <Liquido_Livre />
          <Extras />
        </HStack>
      </Box>
    </>
  );
}

export default Pelvico;
//TODO pelvico é igual ao transvaginal ??