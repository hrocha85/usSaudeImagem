/* eslint-disable react/jsx-pascal-case */
import { Box } from "@chakra-ui/react";

import Normal from "./abdomenNormal/normal";
import AlcasIntestinais from "./alcas_intestinais/Alcas_Intestinais";
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
import Aorta_Retroperitoneo from "./Aorta_Retroperitoneo/Aorta_retroperitoneo"
import Volume_vesical from "./volume_vesical/volume_vesical";
import RinsUreteres from "./Rins_ureteres/rins_ureteres";

function AbdomemTotal() {
  return (



    <Box>
      <Normal></Normal>

      <Figado />

      <VesiculaBiliar></VesiculaBiliar>

      <ViasBiliares />

      <Pancreas />

      <Baco />

      <AlcasIntestinais />

      <Aorta_Retroperitoneo />

      <Volume_vesical />

      <LiquidoLivre />

      <Bexiga />
      <RinsUreteres />

      {/* <Aorta />

        <RimDireito />

        <RimEsquerdo />

        <Calculos />

        <Dilatacao />

        <Nodulos />

        <Cisto /> */}
    </Box>

  );
}

export default AbdomemTotal;
