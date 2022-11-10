import { Box } from "@chakra-ui/react";
import BoxTitleBackground from "../../component/box_title_background";
import Exames from "../../folha_laudos/Laudos";
import BGImage from "../../images/bg_img.png";
import Hematoma from "./hematoma/hematoma";
import Microlitiase from "./microlitiase/microlitiase";
import CistosTesticulares from "./cistosTesticulares/cistoTesticulares";
import Utero from "./medidas/medidas";
import CistoEpididimarios from "./cistosEpididimarios/cistoEpididimarios";
import NodulosTesticulares from "./nodulosTesticulares/nodulosTesticulares";
import Hidrocele from "./hidrocele/hidrocele";
import Orquite from "./orquite/orquite";
import Orquiepididimite from "./orquiepididimite/orquiepididimite";
import Torcao from "./torcao/torcao";
import Virococele from "./varicocele/varicocele";

function Testiculo() {
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
        PadLeft="40px"
        fontsize="19px"
        tamanho="180px"
        titulo="Testículo"
      />
      <Exames></Exames>

      <Box ml="10px">
        <Utero />
        <CistosTesticulares />
        <CistoEpididimarios />
        <NodulosTesticulares />

        <Box w='70%'
          display='flex'
          flexWrap='wrap'
        >
          <Box
            w='450px'
            mb='15px'>
            <Microlitiase />
          </Box>
          <Box
            w='450px'
            mb='15px'>
            <Hidrocele />
          </Box>
        </Box>

        <Box w='70%'
          display='flex'
          flexWrap='wrap'
        >
          <Box
            w='450px'
            mb='15px'>
            <Hematoma />
          </Box>
          <Box
            w='450px'
            mb='15px'>
            <Orquite />
          </Box>
        </Box>
        <Box w='70%'
          display='flex'
          flexWrap='wrap'
        >
          <Box
            w='450px'
            mb='15px'>
            <Orquiepididimite />
          </Box>
          <Box
            w='450px'
            mb='15px'>
            <Torcao />
          </Box>
        </Box>
        <Box
          w='450px'          >
          <Virococele />
        </Box>
      </Box>
    </Box>
  );
}

export default Testiculo;
