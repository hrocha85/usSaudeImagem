import { Box, Text } from "@chakra-ui/react";
import BoxTitleBackground from "../../component/box_title_background";
import BGImage from "../../images/bg_img.png";
import Exames from "../../folha_laudos/Laudos";
import LadoDireito from "./direito/ladoDireito";
import LadoEsquerdo from "./esquerdo/ladoEsquerdo";
import Aorta from "./aorta";
import ArteriaRenalDireita from "./direito/arteriaRenal";
import ArteriaSegmentarDireita from "./direito/arteriaSegmentar";
import ArteriaInterlobarDireita from "./direito/arteriaInterlobar";
import ArteriaSegmentarEsquerda from "./esquerdo/arteriaSegmentar";
import ArteriaRenalEsquerda from "./esquerdo/arteriaRenal";
import ArteriaInterlobarEsquerda from "./esquerdo/arteriaInterlobar";



function DopplerRenal() {

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
            <BoxTitleBackground PadLeft="30px" fontsize='19px' tamanho="262px 67px" titulo="Doppler da Carotidas 2" />

            <Exames></Exames>

            <Box
                ml='10px'
            >
                <Box
                    textAlign="center">
                    <Aorta />
                </Box>

                <Box
                    mb='10px'
                    display='flex'
                    flexWrap='wrap'>

                    <Box
                        w='33%'
                        textAlign="center" >
                        <LadoDireito />
                    </Box>

                    <Box
                        w='33%'
                        textAlign="center">
                        <LadoEsquerdo />
                    </Box>

                </Box>
                <Box w='70%'
                    display='flex'
                    flexWrap='wrap'
                >
                    <Box
                        w='450px'
                        mb='15px'>
                        <ArteriaRenalDireita />
                    </Box>
                    <Box
                        w='450px'
                        mb='15px'>
                        <ArteriaRenalEsquerda />
                    </Box>
                </Box>
                <Box w='70%'
                    display='flex'
                    flexWrap='wrap'
                >
                    <Box
                        w='450px'
                        mb='15px'>
                        <ArteriaSegmentarDireita />
                    </Box>
                    <Box
                        w='450px'
                        mb='15px'>
                        <ArteriaSegmentarEsquerda />
                    </Box>
                </Box>


                <Box w='70%'
                    display='flex'
                    flexWrap='wrap'
                >
                    <Box
                        w='450px'
                        mb='15px'>
                        <ArteriaInterlobarDireita />
                    </Box>
                    <Box
                        w='450px'
                        mb='15px'>
                        <ArteriaInterlobarEsquerda />
                    </Box>
                </Box>
            </Box >
        </Box >
    );
}

export default DopplerRenal;