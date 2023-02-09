/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Center, Flex } from "@chakra-ui/react";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function LadoEsquerdo() {
  const altura = "100%";
  const largura = "100%";
  return (
    <Flex
      bg="#FAFAFA"
      w={largura}
      h={altura}
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="10.85px"
      boxShadow="md"
      padding="24px 15px 20px 15px"
      mt="15px"
      marginBottom='10px'
      flexWrap='wrap'
    >
      <Center>
        <TituloNomeExame titulo='Cotovelo Esquerdo' />
      </Center>
    </Flex>
  );
}
export default LadoEsquerdo;
