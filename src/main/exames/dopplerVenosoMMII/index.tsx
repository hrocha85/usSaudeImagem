import { Box } from "@chakra-ui/react";
import BoxTitleBackground from "../../component/box_title_background";
import Exames from "../../folha_laudos/Laudos";
import BGImage from "../../images/bg_img.png";
import CirurgiasSafenaDireito from "./ladoDireito/CirurgiasSafenaDireito/CirurgiasSafenaMagmaDireito";
import IndexCirurgias from "./ladoDireito/CirurgiasSafenaDireito/indexCirurgia";
import InsuficienciaSafenaMangnaDireito from "./ladoDireito/InsuficienciaSafenaMagnaDireito/insuficienciaSafenaMagmaDireito";
import InsuficienciaSafenaParvaDireito from "./ladoDireito/InsuficienciaSafenaParvaDireito/insuficienciaSafenaParvaDireito";

import MedidasDireito from "./ladoDireito/medidasDireito/medidasDireito";
import ObservacoesDireito from "./ladoDireito/observacoesDireito/observacoesDireito";
import RefluxoVeiasProfundas from "./ladoDireito/refluxoVeiasProfundas/refluxoVeiasProfundas";
import TeleangiectasiasDireito from "./ladoDireito/teleangiectasiasDireito/teleangiectasiasDireito";
import TromboflebiteDireito from "./ladoDireito/tromboflebite/tromboflebite";
import VeiasPerfurantesDireito from "./ladoDireito/veiasPerfurantesDireito/veiasPerfurantesDireito";
import VeiasReticularesDireito from "./ladoDireito/veiasReticularesDireito/veiasReticularesDireito";
import VeiasTributariasDireito from "./ladoDireito/veiasTributariasDireito/veiasTributariasDireito";

function DopplerVenosoMMII() {
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
        tamanho="250px 70px"
        titulo="Doppler Venoso MMII"
      />
      <Exames></Exames>

      <Box ml="10px">

        <Box w='70%'
        // display='flex'
        // flexWrap='wrap'
        >
          <Box
            w='450px'
            mb='15px'>
            <MedidasDireito />
          </Box>


          <Box
            w='450px'
            mb='15px'>
            <InsuficienciaSafenaMangnaDireito />
          </Box>


          <Box
            w='450px'
            mb='15px'>
            <InsuficienciaSafenaParvaDireito />
          </Box>


          <Box
            w='450px'
            mb='15px'>
            <VeiasPerfurantesDireito />
          </Box>


          <Box
            w='450px'
            mb='15px'>
            <VeiasTributariasDireito />
          </Box>

          <Box
            w='450px'
            mb='15px'>
            <IndexCirurgias />
          </Box>


          <Box
            w='450px'
            mb='15px'>
            <RefluxoVeiasProfundas />
          </Box>



          <Box
            w='450px'
            mb='15px'>
            <TromboflebiteDireito />
          </Box>



          <Box
            w='450px'
            mb='15px'>
            <TromboflebiteDireito />
          </Box>


          <Box
            w='450px'
            mb='15px'>
            <VeiasReticularesDireito />
          </Box>

          <Box
            w='450px'
            mb='15px'>
            <TeleangiectasiasDireito />
          </Box>
          <Box
            w='450px'
            mb='15px'>
            <ObservacoesDireito />
          </Box>

        </Box>
      </Box>
    </Box>
  );
}

export default DopplerVenosoMMII;
