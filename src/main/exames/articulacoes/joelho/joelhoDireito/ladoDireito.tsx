/* eslint-disable array-callback-return */

import { Box, Center } from "@chakra-ui/react";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function LadoDireito() {
  const altura = "100%";
  const largura = "100%";

  return (
    <Box
      bg="#FAFAFA"
      w={largura}
      h={altura}
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="10.85px"
      boxShadow="md"
      padding="24px 15px 20px 15px"
      mt="15px"
    >
      <Center>
        <TituloNomeExame titulo={'Joelho Direito'} />
      </Center>
    </Box>
  );
}
export default LadoDireito;
