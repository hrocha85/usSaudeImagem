/* eslint-disable react/jsx-pascal-case */
import { Box, Checkbox } from "@chakra-ui/react";

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
import { useState } from "react";

function AbdomemTotal() {
  const altura = '100%'
  const largura = '180px'
  const [Disable, SetDisable] = useState(false)

  return (

    <Box>
      <Box
        bg="#FAFAFA"
        w={largura}
        h={altura}
        bgPosition="center"
        bgRepeat="no-repeat"
        borderRadius="10.85px"
        boxShadow="md"
        padding='10px 15px 10px 15px'
        mt='2px'
        mb='5px'>
        <Box w='150px' >
          <Checkbox
            id="tudoNormal"
            onChange={(e) => { SetDisable(!Disable) }}
          >Abdômen normal</Checkbox>
        </Box>
      </Box >

      <Figado Disable={Disable} />

      <VesiculaBiliar Disable={Disable} />

      <ViasBiliares Disable={Disable} />

      <Pancreas Disable={Disable} />

      <Baco Disable={Disable} />

      <AlcasIntestinais Disable={Disable} />

      <Aorta_Retroperitoneo Disable={Disable} />

      <Volume_vesical Disable={Disable} />

      <LiquidoLivre Disable={Disable} />

      <Bexiga Disable={Disable} />
      <RinsUreteres Disable={Disable} />

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
