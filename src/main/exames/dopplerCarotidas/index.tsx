import { Box } from "@chakra-ui/react";

import BulboCarotideoDireito from "./direito/bulboCarotideo";
import CarotidaComumDireita from "./direito/carotidaComum";
import CarotidaExternaDireita from "./direito/carotidaExterna";
import CarotidaInternaDireita from "./direito/carotidaInterna";
import CarotidaVertebralDireita from "./direito/carotidaVertebral";
import LadoDireito from "./direito/ladoDireito";
import BulboCarotideoEsquerdo from "./esquerdo/bulboCarotideo";
import CarotidaComumEsquerda from "./esquerdo/carotidaComum";
import CarotidaExternaEsquerda from "./esquerdo/carotidaExterna";
import CarotidaInternaEsquerda from "./esquerdo/carotidaInterna";
import CarotidaVertebralEsquerda from "./esquerdo/carotidaVertebral";
import LadoEsquerdo from "./esquerdo/ladoEsquerdo";

function DopplerCarotidas() {
  return (
    <>
      <Box ml="10px">
        <Box textAlign="center">
          <LadoDireito />
        </Box>

        <Box gap='10px' display='flex' flexWrap='wrap'>
          <CarotidaComumDireita />
          <CarotidaInternaDireita />
          <CarotidaExternaDireita />
          <CarotidaVertebralDireita />
        </Box>

        <Box textAlign="center">
          <BulboCarotideoDireito />
        </Box>
        <Box textAlign="center">
          <LadoEsquerdo />
        </Box>

        <Box w='66%' gap='10px' display='flex' flexWrap='wrap'>
          <CarotidaComumEsquerda />
          <CarotidaInternaEsquerda />
          <CarotidaExternaEsquerda />
          <CarotidaVertebralEsquerda />
        </Box>

        <Box textAlign="center">
          <BulboCarotideoEsquerdo />
        </Box>
      </Box>
    </>
  );
}

export default DopplerCarotidas;
