import { Box } from "@chakra-ui/react";
import Box_Default_With_Sidebar from "../../component/box_default_sidebar";
import BoxTitleBackground from "../../component/box_title_background";
import Exames from "../../folha_laudos/Laudos";
import CistoEpididimarios from "./cistosEpididimarios/cistoEpididimarios";
import CistosTesticulares from "./cistosTesticulares/cistoTesticulares";
import Hematoma from "./hematoma/hematoma";
import Hidrocele from "./hidrocele/hidrocele";
import Utero from "./medidas/medidas";
import Microlitiase from "./microlitiase/microlitiase";
import NodulosTesticulares from "./nodulosTesticulares/nodulosTesticulares";
import Orquiepididimite from "./orquiepididimite/orquiepididimite";
import Orquite from "./orquite/orquite";
import Torcao from "./torcao/torcao";
import Virococele from "./varicocele/varicocele";

function Testiculo() {
  return (
    <>
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

        <Box w="70%" display="flex" flexWrap="wrap">
          <Box w="450px" mb="15px">
            <Microlitiase />
          </Box>
          <Box w="450px" mb="15px">
            <Hidrocele />
          </Box>
        </Box>

        <Box w="70%" display="flex" flexWrap="wrap">
          <Box w="450px" mb="15px">
            <Hematoma />
          </Box>
          <Box w="450px" mb="15px">
            <Orquite />
          </Box>
        </Box>
        <Box w="70%" display="flex" flexWrap="wrap">
          <Box w="450px" mb="15px">
            <Orquiepididimite />
          </Box>
          <Box w="450px" mb="15px">
            <Torcao />
          </Box>
        </Box>
        <Box w="450px">
          <Virococele />
        </Box>
      </Box>
    </>
  );
}

export default Testiculo;
