import { Box } from "@chakra-ui/react";
import BoxTitleBackground from "../../component/box_title_background";
import BGImage from "../../images/bg_img.png";
import Baco from "./baco/baco";
import Figado from './figado/figado'
import Exames from "../../folha_laudos/Laudos";
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
import Calculos from "./calculos/calculos";
import Nodulos from "./nodulos/nodulos";
import Normal from "./abdomenNormal/normal";

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
            <BoxTitleBackground PadLeft="20px" fontsize="19px" tamanho="180px" titulo="Abdômen Total" />

            <Exames></Exames>

            <Box
                ml='10px'
            >
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

            </Box >
        </Box >
    );
}

export default AbdomemTotal;