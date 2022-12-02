import { Box, Text } from "@chakra-ui/react";
import BoxTitleBackground from "../../component/box_title_background";
import BGImage from "../../images/bg_img.png";
import Exames from "../../folha_laudos/Laudos";
import SupraEspinhalOmbroDireito from "./ombro/omboDireito/supraEspinhal";
import OmbroLadoDireito from "./ombro/omboDireito/ladoDireito";
import CotoveloLadoDireito from "./cotovelo/cotoveloDireito/ladoDireito";
import OmbroLadoEsquerdo from "./ombro/ombroEsquerdo/ladoEsquerdo";
import CotoveloLadoEsquerdo from "./cotovelo/cotoveloEsquerdo/ladoEsquerdo";
import SupraEspinhalOmbroEsquerdo from "./ombro/ombroEsquerdo/supraEspinhal";
import InfraEspinhalOmbroDireito from "./ombro/omboDireito/infraEspinhal";
import InfraEspinhalOmbroEsquerdo from "./ombro/ombroEsquerdo/infraEspinhal"
import SubescapularOmbroDireito from "./ombro/omboDireito/subescapular";
import SubescapularOmbroEsquerdo from "./ombro/ombroEsquerdo/subescapular";
import TendaoLongoBicepsOmbroDireito from "./ombro/omboDireito/tendaoLongoBiceps";
import TendaoLongoBicepsOmbroEsquerdo from "./ombro/ombroEsquerdo/tendaoLongoBiceps";
import ExtraOmbroDireito from "./ombro/omboDireito/extra";
import ExtraOmbroEsquerdo from "./ombro/ombroEsquerdo/extra";
import OmbroNormalDireito from "./ombro/omboDireito/normal";
import OmbroNormalEsquerdo from "./ombro/ombroEsquerdo/normal";
import CotoveloNormalDireito from "./cotovelo/cotoveloDireito/normal";
import CotoveloNormalEsquerdo from "./cotovelo/cotoveloEsquerdo/normal";
import CotoveloDireito from "./cotovelo/cotoveloDireito/cotoveloDireito";
import CotoveloEsquerdo from "./cotovelo/cotoveloEsquerdo/cotoveloEsquerdo";
import PunhoDireito from "./punho/punhoDireito/punhoDireito";
import PunhoLadoDireito from "./punho/punhoDireito/ladoDireito";
import PunhoNormalDireito from "./punho/punhoDireito/normal";
import PunhoLadoEsquerdo from "./punho/punhoEsquerdo/ladoEsquerdo";
import PunhoNormalEsquerdo from "./punho/punhoEsquerdo/normal";
import PunhoEsquerdo from "./punho/punhoEsquerdo/punhoDireito";
import MaoLadoDireito from "./mao/maoDireita/ladoDireito";
import MaoLadoEsquerdo from "./mao/maoEsquerda/ladoEsquerdo";
import MaoNormalEsquerdo from "./mao/maoEsquerda/normal";
import MaoNormalDireito from "./mao/maoDireita/normal";
import MaoDireita from "./mao/maoDireita/MaoDireita";
import MaoEsquerda from "./mao/maoEsquerda/MaoEsquerda";

function Articulacoes() {

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
                tamanho="200px 70px"
                titulo="Articulações"
            />
            <Exames></Exames>

            <Box
                display='flex'
                flexWrap='wrap'
                w='66%'
                ml="10px">

                <Box>
                    <Box

                        textAlign="center" >
                        <OmbroLadoDireito />
                    </Box>
                    <Box
                        mt='10px'
                        textAlign="center" >
                        <OmbroNormalDireito />
                    </Box>

                    <Box>
                        <Box
                            w='450px'
                            mb='15px'>
                            <  SupraEspinhalOmbroDireito />
                        </Box>

                        <Box
                            w='450px'
                            mb='15px'>
                            <InfraEspinhalOmbroDireito />
                        </Box>

                        <Box
                            w='450px'
                            mb='15px'>
                            <SubescapularOmbroDireito />
                        </Box>
                        <Box
                            w='450px'
                            mb='15px'>
                            <TendaoLongoBicepsOmbroDireito />
                        </Box>
                        <Box
                            w='450px'
                            mb='15px'>
                            <ExtraOmbroDireito />
                        </Box>
                        <Box

                            textAlign="center" >
                            <CotoveloLadoDireito />
                        </Box>

                        <Box
                            mt='10px'
                            textAlign="center" >
                            <CotoveloNormalDireito />
                        </Box>
                        <Box
                            w='450px'
                            textAlign="center" >
                            <CotoveloDireito />
                        </Box>
                        <Box
                            textAlign="center" >
                            <PunhoLadoDireito />
                        </Box>
                        <Box
                            mt='10px'
                            textAlign="center" >
                            <PunhoNormalDireito />
                        </Box>
                        <Box
                            w='450px'
                            textAlign="center" >
                            <PunhoDireito />
                        </Box>
                        <Box
                            textAlign="center" >
                            <MaoLadoDireito />
                        </Box>
                        <Box
                            mt='10px'
                            textAlign="center" >
                            <MaoNormalDireito />
                        </Box>
                        <Box
                            w='450px'
                            textAlign="center" >
                            <MaoDireita />
                        </Box>
                    </Box>
                </Box>
                <Box w='45%'
                // display='flex'
                // flexWrap='wrap'
                >
                    <Box
                        w='450px'
                        textAlign="center" >
                        <OmbroLadoEsquerdo />
                    </Box>

                    <Box
                        mt='10px'
                        textAlign="center" >
                        <OmbroNormalEsquerdo />
                    </Box>
                    <Box
                        w='450px'
                        mb='15px'>
                        <  SupraEspinhalOmbroEsquerdo />
                    </Box>

                    <Box
                        w='450px'
                        mb='15px'>
                        <InfraEspinhalOmbroEsquerdo />
                    </Box>

                    <Box
                        w='450px'
                        mb='15px'>
                        <SubescapularOmbroEsquerdo />
                    </Box>
                    <Box
                        w='450px'
                        mb='15px'>
                        <TendaoLongoBicepsOmbroEsquerdo />
                    </Box>
                    <Box
                        w='450px'
                        mb='15px'>
                        <ExtraOmbroEsquerdo />
                    </Box>
                    <Box
                        w='450px'
                        textAlign="center" >
                        <CotoveloLadoEsquerdo />
                    </Box>
                    <Box
                        mt='10px'
                        textAlign="center" >
                        <CotoveloNormalEsquerdo />
                    </Box>
                    <Box
                        w='450px'
                        textAlign="center" >
                        <CotoveloEsquerdo />
                        <Box
                            textAlign="center" >
                            <PunhoLadoEsquerdo />
                        </Box>
                        <Box
                            mt='10px'
                            textAlign="center" >
                            <PunhoNormalEsquerdo />
                        </Box>
                        <Box
                            w='450px'
                            textAlign="center" >
                            <PunhoEsquerdo />
                        </Box>
                        <Box
                            textAlign="center" >
                            <MaoLadoEsquerdo />
                        </Box>
                        <Box
                            mt='10px'
                            textAlign="center" >
                            <MaoNormalEsquerdo />
                        </Box>
                        <Box
                            w='450px'
                            textAlign="center" >
                            <MaoEsquerda />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Articulacoes;