import { Box } from "@chakra-ui/react";
import Box_Default_With_Sidebar from "../../component/box_default_sidebar";
import BoxTitleBackground from "../../component/box_title_background";
import Exames from "../../folha_laudos/Laudos";
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
    <Box_Default_With_Sidebar>
      <BoxTitleBackground
        PadLeft="30px"
        fontsize="19px"
        tamanho="252px 67px"
        titulo="Doppler da Carotidas"
      />

      <Exames></Exames>

      <Box ml="10px">
        <Box textAlign="center">
          <LadoDireito />
        </Box>
        <Box w="70%" display="flex" flexWrap="wrap">
          <Box w="450px" mb="15px">
            <CarotidaComumDireita />
          </Box>
          <Box w="450px" mb="15px">
            <CarotidaInternaDireita />
          </Box>
        </Box>
        <Box w="70%" display="flex" flexWrap="wrap">
          <Box w="450px" mb="15px">
            <CarotidaExternaDireita />
          </Box>
          <Box w="450px" mb="15px">
            <CarotidaVertebralDireita />
          </Box>
        </Box>
        <Box textAlign="center">
          <BulboCarotideoDireito />
        </Box>
        <Box textAlign="center">
          <LadoEsquerdo />
        </Box>
        <Box w="70%" display="flex" flexWrap="wrap">
          <Box w="450px" mb="15px">
            <CarotidaComumEsquerda />
          </Box>
          <Box w="450px" mb="15px">
            <CarotidaInternaEsquerda />
          </Box>
        </Box>
        <Box w="70%" display="flex" flexWrap="wrap">
          <Box w="450px" mb="15px">
            <CarotidaExternaEsquerda />
          </Box>
          <Box w="450px" mb="15px">
            <CarotidaVertebralEsquerda />
          </Box>
        </Box>
        <Box textAlign="center">
          <BulboCarotideoEsquerdo />
        </Box>
      </Box>
    </Box_Default_With_Sidebar>
  );
}

export default DopplerCarotidas;
