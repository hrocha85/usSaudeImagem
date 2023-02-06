import { Box } from "@chakra-ui/react";

import LadoDireito from "../dopplerRenal/direito/ladoDireito";
import LadoEsquerdo from "../dopplerRenal/esquerdo/ladoEsquerdo";
import IndexCirurgias from "./ladoDireito/CirurgiasSafenaDireito/indexCirurgia";
import InsuficienciaSafenaMangnaDireito from "./ladoDireito/InsuficienciaSafenaMagnaDireito/insuficienciaSafenaMagmaDireito";
import InsuficienciaSafenaParvaDireito from "./ladoDireito/InsuficienciaSafenaParvaDireito/insuficienciaSafenaParvaDireito";
import MedidasDireito from "./ladoDireito/medidasDireito/medidasDireito";
import ObservacoesDireito from "./ladoDireito/observacoesDireito/observacoesDireito";
import RefluxoVeiasProfundasDireita from "./ladoDireito/refluxoVeiasProfundas/refluxoVeiasProfundasDireita";
import TeleangiectasiasDireito from "./ladoDireito/teleangiectasiasDireito/teleangiectasiasDireito";
import TromboflebiteDireito from "./ladoDireito/tromboflebite/tromboflebite";
import VeiasPerfurantesDireito from "./ladoDireito/veiasPerfurantesDireito/veiasPerfurantesDireito";
import VeiasProfundasTromboDireito from "./ladoDireito/veiasProfundasTrombo/veiasProfundasTrombo";
import VeiasReticularesDireito from "./ladoDireito/veiasReticularesDireito/veiasReticularesDireito";
import VeiasTributariasDireito from "./ladoDireito/veiasTributariasDireito/veiasTributariasDireito";
import IndexCirurgiasEsquerdo from "./ladoEsquerdo/CirurgiasSafenaEsquerdo/indexCirurgia";
import InsuficienciaSafenaMangnaEsquerdo from "./ladoEsquerdo/InsuficienciaSafenaMagnaEsquerdo/insuficienciaSafenaMagmaEsquerdo";
import InsuficienciaSafenaParvaEsquerdo from "./ladoEsquerdo/InsuficienciaSafenaParvaEsquerdo/insuficienciaSafenaParvaEsquerdo";
import Veias_Superficiais_Refluxo_Esquerdo from "./ladoEsquerdo/medidasEsquerdo/medidasEsquerdo";
import ObservacoesEsquerdo from "./ladoEsquerdo/observacoesEsquerdo/observacoesEsquerdo";
import RefluxoVeiasProfundasEsquerdo from "./ladoEsquerdo/refluxoVeiasProfundasEsquerdo/refluxoVeiasProfundasEsquerdo";
import TeleangiectasiasEsquerdo from "./ladoEsquerdo/teleangiectasiasEsquerdo/teleangiectasiasEsquerdo";
import TromboflebiteEsquerdo from "./ladoEsquerdo/tromboflebiteEsquerdo/tromboflebiteEsquerdo";
import VeiasPerfurantesEsquerdo from "./ladoEsquerdo/veiasPerfurantesEsquerdo/veiasPerfurantesEsquerdo";
import VeiasProfundasTromboEsquerdo from "./ladoEsquerdo/veiasProfundasTrombo/veiasProfundasTrombo";
import VeiasReticularesEsquerdo from "./ladoEsquerdo/veiasReticularesEsquerdo/veiasReticularesEsquerdo";
import VeiasTributariasEsquerdo from "./ladoEsquerdo/veiasTributariasEsquerdo/veiasTributariasEsquerdo";

function DopplerVenosoMMII() {
  return (
    <>
      <Box display="flex" flexWrap="wrap" w="66%" ml="10px">
        <Box
          w="45%"
          // display='flex'
          // flexWrap='wrap'
        >
          <Box w="450px" textAlign="center">
            <LadoEsquerdo />
          </Box>

          <Box w="450px" mb="15px">
            <RefluxoVeiasProfundasEsquerdo />
          </Box>
          <Box w="450px" mb="15px">
            <VeiasProfundasTromboEsquerdo />
          </Box>
          <Box w="450px" mb="15px">
            <Veias_Superficiais_Refluxo_Esquerdo />
          </Box>

          <Box w="450px" mb="15px">
            <InsuficienciaSafenaMangnaEsquerdo />
          </Box>

          <Box w="450px" mb="15px">
            <InsuficienciaSafenaParvaEsquerdo />
          </Box>

          <Box w="450px" mb="15px">
            <VeiasPerfurantesEsquerdo />
          </Box>

          <Box w="450px" mb="15px">
            <VeiasTributariasEsquerdo />
          </Box>

          <Box w="450px" mb="15px">
            <IndexCirurgiasEsquerdo />
          </Box>

          <Box w="450px" mb="15px">
            <TromboflebiteEsquerdo />
          </Box>

          <Box w="450px" mb="15px">
            <TromboflebiteEsquerdo />
          </Box>

          <Box w="450px" mb="15px">
            <VeiasReticularesEsquerdo />
          </Box>

          <Box w="450px" mb="15px">
            <TeleangiectasiasEsquerdo />
          </Box>

          <Box w="450px" mb="15px">
            <ObservacoesEsquerdo />
          </Box>
        </Box>

        <Box>
          <Box w="450px" textAlign="center">
            <LadoDireito />
          </Box>

          <Box w="450px" mb="15px">
            <RefluxoVeiasProfundasDireita />
          </Box>
          <Box w="450px" mb="15px">
            <VeiasProfundasTromboDireito />
          </Box>
          <Box>
            <Box w="450px" mb="15px">
              <MedidasDireito />
            </Box>

            <Box w="450px" mb="15px">
              <InsuficienciaSafenaMangnaDireito />
            </Box>

            <Box w="450px" mb="15px">
              <InsuficienciaSafenaParvaDireito />
            </Box>

            <Box w="450px" mb="15px">
              <VeiasPerfurantesDireito />
            </Box>
            <Box w="450px" mb="15px">
              <VeiasTributariasDireito />
            </Box>

            <Box w="450px" mb="15px">
              <IndexCirurgias />
            </Box>

            <Box w="450px" mb="15px">
              <TromboflebiteDireito />
            </Box>

            <Box w="450px" mb="15px">
              <TromboflebiteDireito />
            </Box>

            <Box w="450px" mb="15px">
              <VeiasReticularesDireito />
            </Box>

            <Box w="450px" mb="15px">
              <TeleangiectasiasDireito />
            </Box>

            <Box w="450px" mb="15px">
              <ObservacoesDireito />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default DopplerVenosoMMII;
