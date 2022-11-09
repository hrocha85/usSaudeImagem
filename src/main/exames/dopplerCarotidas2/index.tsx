import { Box, Text } from "@chakra-ui/react";
import BoxTitleBackground from "../../component/box_title_background";
import BGImage from "../../images/bg_img.png";
import Exames from "../../folha_laudos/Laudos";
import CarotidaComumDireita from "./direito/carotidaComum";
import CarotidaInternaDireita from "./direito/carotidaInterna";
import CarotidaExternaDireita from "./direito/carotidaExterna";
import CarotidaVertebralDireita from "./direito/carotidaVertebral";
import CarotidaComumEsquerda from "./esquerdo/carotidaComum";
import CarotidaInternaEsquerda from "./esquerdo/carotidaInterna";
import CarotidaExternaEsquerda from "./esquerdo/carotidaExterna";
import CarotidaVertebralEsquerda from "./esquerdo/carotidaVertebral";
import LadoDireito from "./direito/ladoDireito";
import LadoEsquerdo from "./esquerdo/ladoEsquerdo";
import BulboCarotideoDireito from "./direito/bulboCarotideo";
import BulboCarotideoEsquerdo from "./esquerdo/bulboCarotideo";



function DopplerCarotidas2() {

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
                    textAlign="center"
                >
                    <LadoDireito />
                </Box>
                <Box w='70%'
                    display='flex'
                    flexWrap='wrap'
                >
                    <Box
                        w='450px'
                        mb='15px'>
                        <CarotidaComumDireita />
                    </Box>
                    <Box
                        w='450px'
                        mb='15px'>
                        <CarotidaInternaDireita />
                    </Box>
                </Box>
                <Box w='70%'
                    display='flex'
                    flexWrap='wrap'
                >
                    <Box
                        w='450px'
                        mb='15px'>
                        <CarotidaExternaDireita />
                    </Box>
                    <Box
                        w='450px'
                        mb='15px'>
                        <CarotidaVertebralDireita />
                    </Box>
                </Box>
                <Box
                    textAlign="center">
                    <BulboCarotideoDireito />
                </Box>
                <Box textAlign="center"
                >
                    <LadoEsquerdo />
                </Box>
                <Box w='70%'
                    display='flex'
                    flexWrap='wrap'
                >
                    <Box
                        w='450px'
                        mb='15px'>
                        <CarotidaComumEsquerda />
                    </Box>
                    <Box
                        w='450px'
                        mb='15px'>
                        <CarotidaInternaEsquerda />
                    </Box>
                </Box>
                <Box w='70%'
                    display='flex'
                    flexWrap='wrap'
                >
                    <Box
                        w='450px'
                        mb='15px'>
                        <CarotidaExternaEsquerda />
                    </Box>
                    <Box
                        w='450px'
                        mb='15px'>
                        <CarotidaVertebralEsquerda />
                    </Box>
                </Box>
                <Box
                    textAlign="center">
                    <BulboCarotideoEsquerdo />
                </Box>
            </Box >
        </Box >
    );
}

export default DopplerCarotidas2;