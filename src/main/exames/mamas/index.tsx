import { Box } from "@chakra-ui/react";
import Box_Default_With_Sidebar from "../../component/box_default_sidebar";
import BoxTitleBackground from "../../component/box_title_background";
import Exames from "../../folha_laudos/Laudos";
import Abscesso from "./abscesso/abscesso";
import Axilas from "./axilas/axilas";
import Birads from "./birads/birads";
import Cirurgia from "./cirurgia/cirurgia";
import Cistos from "./cistos/cistos";
import Extra from "./extra/extra";
import Implantes from "./implantes/implantes";
import MamaMasculina from "./mamaMasculina/mamaMasculina";
import Nodulo from "./nodulos/nodulos";
import Observacoes from "./observacoes/observacoes";

function Mamas() {
  return (
    <Box_Default_With_Sidebar>
      <BoxTitleBackground
        PadLeft="24px"
        fontsize="19px"
        tamanho="150px 64px"
        titulo="Mamas"
      />

      <Exames></Exames>

      <Box ml="10px">
        <Nodulo />
        <Cistos />

        <Box w="70%" display="flex" flexWrap="wrap">
          <Box w="450px" mb="15px">
            <Cirurgia />
          </Box>
          <Box w="450px" mb="15px">
            <Axilas />
          </Box>
        </Box>
        <Box w="70%" display="flex" flexWrap="wrap">
          <Box w="450px" mb="15px">
            <Implantes />
          </Box>
          <Box w="450px" mb="15px">
            <Observacoes />
          </Box>
        </Box>
        <Box w="70%" display="flex" flexWrap="wrap">
          <Box w="450px" mb="15px">
            <Birads />
          </Box>
          <Box w="450px" mb="15px">
            <Abscesso />
          </Box>
        </Box>
        <Box w="70%" display="flex" flexWrap="wrap">
          <Box w="450px" mb="15px">
            <MamaMasculina />
          </Box>
          <Box w="450px" mb="15px">
            <Extra />
          </Box>
        </Box>
      </Box>
    </Box_Default_With_Sidebar>
  );
}

export default Mamas;
