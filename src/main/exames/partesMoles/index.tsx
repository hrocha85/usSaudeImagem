/* eslint-disable react/jsx-pascal-case */
import { Box, Flex, HStack } from "@chakra-ui/react";
import BoxTitleBackground from "../../component/box_title_background";
import Exames from "../../folha_laudos/Laudos";
import BGImage from "../../images/bg_img.png";
import CistoAnecoico from "./cistoAnecoico/cistoAnecoico";
import CistoSebaceo from "./cistoSebaceo/cistoSebaceo";
import Colecao from "./paredeAbdominal/colecao";
import HerniaIncisional from "./paredeAbdominal/herniaIncisional";
import HerniaSupraUmbilical from "./paredeAbdominal/herniaSupra-Umbilical";
import HerniaUmbilical from "./paredeAbdominal/herniaUmbilical";
import ParedeAbdominalNormal from "./paredeAbdominal/normal";
import Partes_Moles from "./partes_moles/partesMoles";
import Esquerda from "./regiaoInguinal/direita";
import Direita from "./regiaoInguinal/direita";

function PartesMoles() {
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
                tamanho="180px"
                titulo="Partes Moles"
            />
            <Exames></Exames>
            <Box
                ml="10px">
                <Partes_Moles></Partes_Moles>

                <Box w='70%'
                    display='flex'
                    flexWrap='wrap'
                >
                    <Box
                        mb='15px'>
                        <CistoSebaceo></CistoSebaceo>
                    </Box>
                    <Box
                        mb='15px'>
                        <CistoAnecoico></CistoAnecoico>
                    </Box>
                </Box>

                <Box w='70%'
                    display='flex'
                    flexWrap='wrap'
                >
                    <Box
                        w='100%'
                        mb='15px'
                    >
                        <ParedeAbdominalNormal></ParedeAbdominalNormal>
                    </Box>
                    <Box
                        w='400px'
                        mb='15px'>
                        <HerniaUmbilical></HerniaUmbilical>
                    </Box>
                    <Box
                        w='400px'
                        mb='15px'>
                        <HerniaSupraUmbilical></HerniaSupraUmbilical>
                    </Box>
                    <Box
                        w='400px'
                        mb='15px'>
                        <HerniaIncisional></HerniaIncisional>
                    </Box>
                    <Box
                        w='400px'
                        mb='15px'>
                        <Colecao></Colecao>
                    </Box>
                </Box>
                <Box w='70%'
                    display='flex'
                    flexWrap='wrap'
                >
                    <Box
                        w='400px'
                        mb='15px'>
                        <Direita></Direita>
                    </Box>
                    <Box
                        w='400px'
                        mb='15px'>
                        <Esquerda></Esquerda>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default PartesMoles;
