import { Box, Flex } from "@chakra-ui/react";

import Abscesso from "./abscesso/abscesso";
import Axila_direita from "./axilas/axila_direita";
import Axila_esquerda from "./axilas/axila_esquerda";

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
    <>


      <Box ml="10px">
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


      </Box>
    </>
  );
}

export default Mamas;
