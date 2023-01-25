/* eslint-disable react/jsx-pascal-case */
import { Box, Center } from "@chakra-ui/react";

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
  default as Esquerda,
} from "../partesMoles/regiaoInguinal/direita";
import Diastase_Musculo_Reto from "./paredeAbdominal/diastase_musculo_reto";
import Hernia_Epigastrica from "./paredeAbdominal/hernia_epigastrica";
import Achados_Normais from "./torax/achados_normais";
import Torax from "./torax/torax";

function PartesMoles() {
  return (
    <>
      <Box ml="10px">
        
        <Achados_Normais />
        <Partes_Moles />
        <Torax />

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
            <ParedeAbdominalNormal />
          </Box>
          <Box w="500px" mb="15px" marginEnd="10px">
              <Hernia_Epigastrica />
            </Box>
            <Box w="400px" mb="15px">
              <HerniaUmbilical />
            </Box>
            
            <Box w="400px" mb="15px">
            <HerniaIncisional />
          </Box>
          <Box w="400px" mb="15px">
            <HerniaSupraUmbilical />
          </Box>
          <Box w="400px" mb="15px">
            <Colecao />
          </Box>
          <Box w="500px" mb="15px" marginEnd="10px">
            <Diastase_Musculo_Reto />
          </Box>
          
        </Box>
        <Box w="70%" display="flex" flexWrap="wrap">
          <Box w="400px" mb="15px">
            <Direita />
          </Box>
          <Box w="400px" mb="15px">
            <Esquerda />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default PartesMoles;
//FIXME Problemas no com o lado direito e esquerdo na Regiao Iguinal
