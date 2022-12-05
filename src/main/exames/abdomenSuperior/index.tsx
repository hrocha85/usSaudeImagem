import { Box } from "@chakra-ui/react";
import Box_Default_With_Sidebar from "../../component/box_default_sidebar";
import BoxTitleBackground from "../../component/box_title_background";
import Exames from "../../folha_laudos/Laudos";
import Normal from "./abdomenNormal/normal";
import Aorta from "./aorta/aorta";
import Baco from "./baco/baco";
import Figado from "./figado/figado";
import LiquidoLivre from "./liquido_livre/liquido_livre";
import Pancreas from "./pancreas/pancreas";
import VesiculaBiliar from "./vesicula_biliar/vesicula_biliar";
import ViasBiliares from "./vias biliares/vias_biliares";

function AbdomemSuperior() {
  return (
    <Box_Default_With_Sidebar>
      <BoxTitleBackground
        PadLeft="30px"
        fontsize="19px"
        tamanho="240px 65px"
        titulo="Abdômen Superior"
      />

      <Exames></Exames>

      <Box ml="10px">
        <Normal></Normal>

        <Figado></Figado>

        <Baco></Baco>

        <ViasBiliares></ViasBiliares>

        <Pancreas></Pancreas>

        <LiquidoLivre></LiquidoLivre>

        <Aorta></Aorta>

        <VesiculaBiliar></VesiculaBiliar>
      </Box>
    </Box_Default_With_Sidebar>
  );
}

export default AbdomemSuperior;
