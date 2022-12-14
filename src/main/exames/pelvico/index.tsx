import { Box, HStack } from "@chakra-ui/react";
import Box_Default_With_Sidebar from "../../component/box_default_sidebar";
import BoxTitleBackground from "../../component/box_title_background";
import Exames from "../../folha_laudos/Laudos";
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
    <Box_Default_With_Sidebar>
      <BoxTitleBackground
        PadLeft="20px"
        fontsize="19px"
        tamanho="180px"
        titulo="Pélvico"
      />
      <Exames></Exames>

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
    </Box_Default_With_Sidebar>
  );
}

export default Pelvico;
