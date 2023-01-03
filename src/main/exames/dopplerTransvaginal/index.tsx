import { Box, HStack } from "@chakra-ui/react";
import BoxTitleBackground from "../../component/box_title_background";
import Exames from "../../folha_laudos/Laudos";
import BGImage from "../../images/bg_img.png";
import Extras from "./adicionais/extras";
import Cirurgias from "./cirurgias/cirurgias";
import Hidatide from "./hidatide/hidatide";
import Hidrossalpinge from "./hidrossalpinge/hidrossalpinge";
import Liquido_Livre from "./liquido_livre/liquido_livre";
import Miometrio from "./miometrio/miometrio";
import Ovario_Direito from "./ovarios/ovario_direito";
import Ovario_Esquerdo from "./ovarios/ovario_esquedo";
import Utero from "./utero/utero";
import Box_Default_With_Sidebar from "../../component/box_default_sidebar";

function DopplerTransvaginal() {
  return (
    <>
      <Exames></Exames>

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

        <Cirurgias />
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
        </Box>
      </Box>
    </>
  );
}

export default DopplerTransvaginal;
