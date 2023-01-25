/* eslint-disable react/jsx-pascal-case */
import { Grid } from "@chakra-ui/react";

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
      <Achados_Normais />
      <Partes_Moles />
      <Torax />
      <Grid templateColumns="repeat(2, 1fr)" gap={4} maxW="66%">
        <CistoSebaceo />
        <CistoAnecoico />
        <ParedeAbdominalNormal />
        <Hernia_Epigastrica />
        <HerniaUmbilical />
        <HerniaIncisional />
        <HerniaSupraUmbilical />
        <Colecao />
        <Diastase_Musculo_Reto />
        <Direita />
        <Esquerda />
      </Grid>
    </>
  );
}

export default PartesMoles;
//FIXME Problemas no com o lado direito e esquerdo na Regiao Iguinal
