/* eslint-disable react/jsx-pascal-case */
import { Box } from "@chakra-ui/react";
 
import CistoAnecoico from "../partesMoles/cistoAnecoico/cistoAnecoico";
import CistoSebaceo from "../partesMoles/cistoSebaceo/cistoSebaceo";
import Colecao from "../partesMoles/paredeAbdominal/colecao";
import HerniaIncisional from "../partesMoles/paredeAbdominal/herniaIncisional";
import HerniaSupraUmbilical from "../partesMoles/paredeAbdominal/herniaSupra-Umbilical";
import HerniaUmbilical from "../partesMoles/paredeAbdominal/herniaUmbilical";
import ParedeAbdominalNormal from "../partesMoles/paredeAbdominal/normal";
import Partes_Moles from "../partesMoles/partes_moles/partesMoles";
import {
  default as Direita,
  default as Esquerda
} from "../partesMoles/regiaoInguinal/direita";

function PartesMoles() {
  return (
    <>
      
      <Box ml="10px">
        <Partes_Moles></Partes_Moles>

        <Box w="70%" display="flex" flexWrap="wrap">
          <Box mb="15px">
            <CistoSebaceo></CistoSebaceo>
          </Box>
          <Box mb="15px">
            <CistoAnecoico></CistoAnecoico>
          </Box>
        </Box>

        <Box w="70%" display="flex" flexWrap="wrap">
          <Box w="100%" mb="15px">
            <ParedeAbdominalNormal></ParedeAbdominalNormal>
          </Box>
          <Box w="400px" mb="15px">
            <HerniaUmbilical></HerniaUmbilical>
          </Box>
          <Box w="400px" mb="15px">
            <HerniaSupraUmbilical></HerniaSupraUmbilical>
          </Box>
          <Box w="400px" mb="15px">
            <HerniaIncisional></HerniaIncisional>
          </Box>
          <Box w="400px" mb="15px">
            <Colecao></Colecao>
          </Box>
        </Box>
        <Box w="70%" display="flex" flexWrap="wrap">
          <Box w="400px" mb="15px">
            <Direita></Direita>
          </Box>
          <Box w="400px" mb="15px">
            <Esquerda></Esquerda>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default PartesMoles;
//FIXME Problemas no com o lado direito e esquerdo na Regiao Iguinal