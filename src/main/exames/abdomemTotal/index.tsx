import { Box } from "@chakra-ui/react";
import Exames from "../../folha_laudos/Laudos";
import Normal from "./abdomenNormal/normal";
import Aorta from "./aorta/aorta";
import Baco from "./baco/baco";
import Bexiga from "./bexiga/bexiga";
import Calculos from "./calculos/calculos";
import Cisto from "./cisto/cisto";
import Dilatacao from "./dilatacao/dilatacao";
import Figado from "./figado/figado";
import LiquidoLivre from "./liquido_livre/liquido_livre";
import Nodulos from "./nodulos/nodulos";
import Pancreas from "./pancreas/pancreas";
import RimDireito from "./rim_direito/rim_direito";
import RimEsquerdo from "./rim_esquerdo/rim_esquerdo";
import VesiculaBiliar from "./vesicula_bliar/vesicula_biliar";
import ViasBiliares from "./vias biliares/vias_biliares";

function AbdomemTotal() {
  return (
    <>
      <Exames></Exames>

      <Box ml="10px">
        <Normal></Normal>

        <Figado />

        <Baco />

        <ViasBiliares />

        <Pancreas />

        <LiquidoLivre />

        <Aorta />

        <VesiculaBiliar />

        <RimDireito />

        <RimEsquerdo />

        <Calculos />

        <Dilatacao />

        <Nodulos />

        <Cisto />

        <Bexiga />
      </Box>
    </>
  );
}

export default AbdomemTotal;
