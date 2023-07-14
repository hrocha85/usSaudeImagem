import { Box } from "@chakra-ui/react";

import Extras from "./adicionais/extras";
import Bexiga from "./bexiga/bexiga";
import Cirurgias from "./cirurgias/cirurgias";
import Hidatide from "./hidatide/hidatide";
import Hidrossalpinge from "./hidrossalpinge/hidrossalpinge";
import Liquido_Livre from "./liquido_livre/liquido_livre";
import Miometrio from "./miometrio/miometrio";
import Ovario_Direito from "./ovarios/ovario_direito";
import Ovario_Esquerdo from "./ovarios/ovario_esquedo";
import Utero from "./utero/utero";
import Vagina from "./vagina/vagina";

function DopplerTransvaginal() {
  return (
    <>


      <Box ml="10px">
        <Utero />
        <Miometrio />

        <Box gap='10px' w="70%" display="flex" flexWrap="wrap">

          <Ovario_Esquerdo />


          <Ovario_Direito />

        </Box>
        <Bexiga />
        <Box gap='10px' w="70%" display="flex" flexWrap="wrap">
          <Vagina />
          <Hidatide />


          <Hidrossalpinge />

          <Liquido_Livre />
          <Extras />
          <Cirurgias />

        </Box>
      </Box>
    </>
  );
}

export default DopplerTransvaginal;
