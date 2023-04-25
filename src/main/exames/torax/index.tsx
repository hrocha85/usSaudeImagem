/* eslint-disable react/jsx-pascal-case */
import { Box, Checkbox, Grid } from "@chakra-ui/react";
import { useState } from "react";

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
import Nodulos from "./partes_moles/nodulos";
import Achados_Normais from "./torax/achados_normais";
import Torax from "./torax/torax";

function PartesMoles() {
  const altura = '100%'
  const largura = '220px'
  const [Disable, SetDisable] = useState(false)
  return (
    <>
      <Box
        bg="#FAFAFA"
        w={largura}
        h={altura}
        bgPosition="center"
        bgRepeat="no-repeat"
        borderRadius="10.85px"
        boxShadow="md"
        padding='10px 15px 10px 15px'
        mt='2px'
        mb='5px'>

        <Checkbox
          id="tudoNormal"
          onChange={(e) => { SetDisable(!Disable) }}
        >Partes moles normal</Checkbox>

      </Box >

      <Achados_Normais Disable={Disable} />
      {/*<Partes_Moles Disable={Disable} />*/}
      <Nodulos Disable={Disable} />
      <Torax Disable={Disable} />
      <Grid templateColumns="repeat(2, 1fr)" gap={4} maxW="66%">
        <CistoSebaceo Disable={Disable} />
        <CistoAnecoico Disable={Disable} />
        <ParedeAbdominalNormal Disable={Disable} />
        <Hernia_Epigastrica Disable={Disable} />
        <HerniaUmbilical Disable={Disable} />
        <HerniaIncisional Disable={Disable} />
        <HerniaSupraUmbilical Disable={Disable} />
        <Colecao Disable={Disable} />
        <Diastase_Musculo_Reto Disable={Disable} />

      </Grid>
    </>
  );
}

export default PartesMoles;
