import { Box } from "@chakra-ui/react";
import BoxTitleBackground from "../../component/box_title_background";
import BGImage from "../../images/bg_img.png";
import Baco from "./baco/baco";
import Figado from './figado/figado'
import Exames from "./folha_exames/Exames";
import LiquidoLivre from "./liquido_livre/liquido_livre";
import Aorta from "./aorta/aorta";
import Pancreas from "./pancreas/pancreas";
import ViasBiliares from "./vias biliares/vias_biliares";
import VesiculaBiliar from "./vesicula_bliar/vesicula_biliar";
import RimDireito from "./rim_direito/rim_direito";
import Dilatacao from "./dilatacao/dilatacao";
import RimEsquerdo from "./rim_esquerdo/rim_esquerdo";
import Cisto from "./cisto/cisto";
import Bexiga from "./bexiga/bexiga";

function AbdomemTotal() {

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
            <BoxTitleBackground titulo="Adbomen Total" />

            {/* <Exames></Exames> */}

            <Box
                ml='10px'
            >

                <Figado />

                <Baco />

                <ViasBiliares />

                <Pancreas />

                <LiquidoLivre />

                <Aorta />

                <VesiculaBiliar />

                <RimDireito />

                <Dilatacao />

                <RimEsquerdo />

                <Cisto />

                <Bexiga />

            </Box >
        </Box >
    );
}

export default AbdomemTotal;