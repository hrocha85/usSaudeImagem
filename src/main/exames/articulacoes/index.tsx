import { Box, Text } from "@chakra-ui/react";
import BoxTitleBackground from "../../component/box_title_background";
import BGImage from "../../images/bg_img.png";
import Exames from "../../folha_laudos/Laudos";
import SupraEspinhalOmbroDireito from "./ombro/omboDireito/supraEspinhal";
import LadoDireito from "./ombro/omboDireito/ladoDireito";
import LadoEsquerdo from "./ombro/ombroEsquerdo/ladoEsquerdo";
import SupraEspinhalOmbroEsquerdo from "./ombro/ombroEsquerdo/supraEspinhal";
import InfraEspinhalOmbroDireito from "./ombro/omboDireito/infraEspinhal";
import InfraEspinhalOmbroEsquerdo from "./ombro/ombroEsquerdo/infraEspinhal"
import SubescapularOmbroDireito from "./ombro/omboDireito/subescapular";
import SubescapularOmbroEsquerdo from "./ombro/ombroEsquerdo/subescapular";
import TendaoLongoBicepsOmbroDireito from "./ombro/omboDireito/tendaoLongoBiceps";
import TendaoLongoBicepsOmbroEsquerdo from "./ombro/ombroEsquerdo/tendaoLongoBiceps";
import ExtraOmbroDireito from "./ombro/omboDireito/extra";
import ExtraOmbroEsquerdo from "./ombro/ombroEsquerdo/extra";
import NormalDireito from "./ombro/omboDireito/normal";
import NormalEsquerdo from "./ombro/ombroEsquerdo/normal";

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
                        <LadoDireito />
                    </Box>
                    <Box
                        mt='10px'
                        textAlign="center" >
                        <NormalDireito />
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


                    </Box>
                </Box>
                <Box w='45%'
                // display='flex'
                // flexWrap='wrap'
                >
                    <Box
                        w='450px'
                        textAlign="center" >
                        <LadoEsquerdo />
                    </Box>
                    <Box
                        mt='10px'
                        textAlign="center" >
                        <NormalEsquerdo />
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

                </Box>
            </Box>
        </Box>
    );
}

export default Articulacoes;