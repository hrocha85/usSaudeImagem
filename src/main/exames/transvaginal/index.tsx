import { Box, HStack } from "@chakra-ui/react";
import BoxTitleBackground from "../../component/box_title_background";
import Exames from "../../folha_laudos/Laudos";
import BGImage from "../../images/bg_img.png";
import LiquidoLivre from "../abdomemTotal/liquido_livre/liquido_livre";
import Cirurgias from "./cirurgias/cirurgias";
import Extras from "./adicionais/extras";
import Hidatide from "./hidatide/hidatide";
import Hidrossalpinge from "./hidrossalpinge/hidrossalpinge";
import Liquido_Livre from "./liquido_livre/liquido_livre";
import Miometrio from "./miometrio/miometrio";
import Ovario_Direito from "./ovarios/ovario_direito";
import Ovario_Esquerdo from "./ovarios/ovario_esquedo";
import Utero from "./utero/utero";

function Transvaginal() {
  return (
    <Box
      w="100%"
      h="100%"
      verticalAlign="center"
      alignSelf="center"
      alignItems="center"
      backgroundImage={BGImage}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
    >
      <BoxTitleBackground
        PadLeft="20px"
        fontsize="19px"
        tamanho="180px"
        titulo="Transvaginal"
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
    </Box>
  );
}

export default Transvaginal;
