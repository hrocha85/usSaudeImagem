import { Box } from "@chakra-ui/react";
import Exames from "../../folha_laudos/Laudos";
import Aorta from "./aorta";
import ArteriaInterlobarDireita from "./direito/arteriaInterlobar";
import ArteriaRenalDireita from "./direito/arteriaRenal";
import ArteriaSegmentarDireita from "./direito/arteriaSegmentar";
import LadoDireito from "./direito/ladoDireito";
import ArteriaInterlobarEsquerda from "./esquerdo/arteriaInterlobar";
import ArteriaRenalEsquerda from "./esquerdo/arteriaRenal";
import ArteriaSegmentarEsquerda from "./esquerdo/arteriaSegmentar";
import LadoEsquerdo from "./esquerdo/ladoEsquerdo";

function DopplerRenal() {
  return (
    <>
      <Exames></Exames>

      <Box ml="10px">
        <Box textAlign="center">
          <Aorta />
        </Box>

        <Box display="flex" flexWrap="wrap" w="66%">
          <Box mb="10px">
            <Box w="450px" textAlign="center">
              <LadoDireito />
            </Box>

            <Box w="450px" mb="15px">
              <ArteriaRenalDireita />
            </Box>

            <Box w="450px" mb="15px">
              <ArteriaSegmentarDireita />
            </Box>
            <Box w="450px" mb="15px">
              <ArteriaInterlobarDireita />
            </Box>
          </Box>

          <Box w="45%">
            <Box w="450px" textAlign="center">
              <LadoEsquerdo />
            </Box>
            <Box w="450px" mb="15px">
              <ArteriaRenalEsquerda />
            </Box>
            <Box w="450px" mb="15px">
              <ArteriaSegmentarEsquerda />
            </Box>

            <Box w="450px" mb="15px">
              <ArteriaInterlobarEsquerda />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default DopplerRenal;
