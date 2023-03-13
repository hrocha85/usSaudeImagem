import { Box } from "@chakra-ui/react";
import Normal from "./abdomenNormal/normal";
import Baco from "./baco/baco";
import Figado from "./figado/figado";
import LiquidoLivre from "./liquido_livre/liquido_livre";
import Pancreas from "./pancreas/pancreas";
import VesiculaBiliar from "./vesicula_biliar/vesicula_biliar";
import ViasBiliares from "./vias biliares/vias_biliares";

function AbdomemSuperior() {
  return (
    <>


      <Box ml="10px">
        <Normal></Normal>

        <Figado></Figado>

        <Baco></Baco>

        <ViasBiliares></ViasBiliares>

        <Pancreas></Pancreas>

        <LiquidoLivre></LiquidoLivre>

        <VesiculaBiliar></VesiculaBiliar>
      </Box>
    </>
  );
}

export default AbdomemSuperior;
