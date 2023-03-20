import { Box, Flex } from "@chakra-ui/react";

import Abscesso from "./abscesso/abscesso";
import Assimetria from "./Assimetria/Assimetria";
import Axila_direita from "./axilas/axila_direita";
import Axila_esquerda from "./axilas/axila_esquerda";

import Birads from "./birads/birads";
import Cirurgia from "./cirurgia/cirurgia";
import Cistos from "./cistos/cistos";
import Conclusoes from "./conclusao/Conclusoes";
import Extra from "./extra/extra";
import Extra1 from "./extra1/Extra1";
import Extra2 from "./extra2/Extra2";
import Extra3 from "./extra3/Extra3";
import Extra4 from "./Extra4/Extra4";
import Implantes from "./implantes/implantes";
import MamaMasculina from "./mamaMasculina/mamaMasculina";
import Microcalcificacoes from "./MIcrocalcificacoes/Microcalcificacoes";
import Nodulo from "./nodulos/nodulos";
import Observacoes from "./observacoes/observacoes";
import OutrasPatologicas from "./OutrasPatologicas/OutrasPatologicas";
import Simetria from "./simetria/Simetria";

function Mamas() {
  return (
    <>


      <Box ml="10px">
        <Box display='flex' flexWrap='wrap' gap='15px'>
          <Simetria />
          <Assimetria />
          <Extra1 />
          <Extra2 />
          <Microcalcificacoes />
          <OutrasPatologicas />
          <Extra3 />
        </Box >

        <Nodulo />
        <Cistos />



        <Cirurgia />

        <Box display='flex' flexWrap='wrap' gap='15px'>
          <Axila_esquerda />
          <Axila_direita />
        </Box >

        <Implantes />

        <Observacoes />

        <Birads />

        <Abscesso />

        <MamaMasculina />

        <Extra />

        <Extra4 />
        <Conclusoes />
      </Box>
    </>
  );
}

export default Mamas;
