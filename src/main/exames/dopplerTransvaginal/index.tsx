import { Box } from "@chakra-ui/react";
 
import Extras from "./adicionais/extras";
import Cirurgias from "./cirurgias/cirurgias";
import Hidatide from "./hidatide/hidatide";
import Hidrossalpinge from "./hidrossalpinge/hidrossalpinge";
import Liquido_Livre from "./liquido_livre/liquido_livre";
import Miometrio from "./miometrio/miometrio";
import Ovario_Direito from "./ovarios/ovario_direito";
import Ovario_Esquerdo from "./ovarios/ovario_esquedo";
import Utero from "./utero/utero";

function DopplerTransvaginal() {
  return (
    <>
      

      <Box ml="10px">
        <Utero />
        <Miometrio />

        <Box w="70%" display="flex" flexWrap="wrap">
          <Box w="450px" mb="15px">
            <Ovario_Esquerdo />
          </Box>
          <Box w="450px" mb="15px">
            <Ovario_Direito />
          </Box>
        </Box>

        <Box w="70%" display="flex" flexWrap="wrap">
          <Box w="450px" mb="15px">
            <Hidatide />
          </Box>
          <Box w="450px" mb="15px">
            <Hidrossalpinge />
          </Box>
        </Box>
        <Box w="70%" display="flex" flexWrap="wrap">
          <Box w="450px" mb="15px">
            <Liquido_Livre />
          </Box>
          <Box w="450px" mb="15px">
            <Extras />
          </Box>
          <Cirurgias />

        </Box>
      </Box>
    </>
  );
}

export default DopplerTransvaginal;
