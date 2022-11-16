import { Box } from "@chakra-ui/react";
import BoxTitleBackground from "../../component/box_title_background";
import BGImage from "../../images/bg_img.png";

import Exames from "../../folha_laudos/Laudos";

import RimDireito from "./rim_direito/rim_direito";
import RimEsquerdo from "./rim_esquerdo/rim_esquerdo";
import Calculo from "./calculos/calculos";
import Cisto from "./cistos/cistos";
import Dilatacao from "./dilatacao/dilatacao";
import Nodulos from "./nodulos/nodulos";
import Bexiga from "./bexiga/bexiga";

function RinseViasUrinarias() {

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
            <BoxTitleBackground PadLeft="24px" fontsize="19px" tamanho="250px 64px" titulo="Rins e vias Urinárias" />

            <Exames></Exames>

            <Box
                ml='10px'
            >
                <RimDireito />
                <RimEsquerdo />
                <Calculo />
                <Cisto />
                <Dilatacao />
                <Box w='70%'
                    display='flex'
                    flexWrap='wrap'
                >
                    <Box
                        w='400px'
                        mb='15px'
                    >
                        <Nodulos />
                    </Box>
                    <Box
                        w='370px'
                        mb='15px'
                    >
                        <Bexiga />
                    </Box>
                </Box >
            </Box >
        </Box >
    );
}

export default RinseViasUrinarias;