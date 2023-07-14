import { Box, Text, Radio, RadioGroup, Stack, Flex } from "@chakra-ui/react";
import { useState } from "react";

import Abscesso from "./abscesso/abscesso";
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
import Mama_direita from "./mama_fem_esquerda_direita/mama_direita";
import Mama_esquerda from "./mama_fem_esquerda_direita/mama_esquerda";
import Mama_masc_direita from "./mama_masc_esquerda_direita/mama_direita";
import Mama_masc_esquerda from "./mama_masc_esquerda_direita/mama_esquerda";
import Microcalcificacoes from "./MIcrocalcificacoes/Microcalcificacoes";
import Nodulo from "./nodulos/nodulos";
import Obs from "./Obs/Obs";
import Observacoes from "./observacoes/observacoes";
import OutrasPatologicas from "./OutrasPatologicas/OutrasPatologicas";
import Simetria from "./simetria/Simetria";

function Mamas() {
  const altura = '100%'
  const largura = '220px'
  const [Sexo, SetSexo] = useState('1')

  const MamaSexo = () => {
    if (Sexo == '2') {
      return (
        <Box display='flex' flexWrap='wrap' gap='15px'>
          <Mama_masc_esquerda />
          <Mama_masc_direita />
          <MamaMasculina />
        </Box >
      )
    } else {
      return (
        <Box display='flex' flexWrap='wrap' gap='15px'>
          <Mama_esquerda />
          <Mama_direita />
        </Box >
      )
    }
  }

  return (
    <>
      <Box ml="10px" rowGap='20px' >

        <Box
          bg="#FAFAFA"
          w={largura}
          h={altura}
          bgPosition="center"
          bgRepeat="no-repeat"
          borderRadius="10.85px"
          boxShadow="md"
          padding='10px 15px 10px 15px'
          mt='15px'
        >
          <Text>Gênero: </Text>
          <RadioGroup onChange={SetSexo} value={Sexo}>
            <Stack direction='row'>
              <Radio value='1' defaultChecked>Feminio</Radio>
              <Radio value='2'>Masculino</Radio>
            </Stack>
          </RadioGroup>
        </Box >

        {MamaSexo()}

        <Implantes />

        <Abscesso />

        <Extra />

        <Microcalcificacoes />
        <Nodulo />
        <Cistos />

        <Cirurgia />

        <Birads />

        <Extra4 />

        <Simetria />

        <Extra1 />

        <Extra2 />


        <OutrasPatologicas />

        <Obs />
        <Extra3 />

        {/* <Observacoes /> */}
        <Conclusoes />
      </Box >
    </>
  );
}

export default Mamas;
