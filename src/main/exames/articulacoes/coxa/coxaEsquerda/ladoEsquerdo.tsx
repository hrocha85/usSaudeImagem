/* eslint-disable array-callback-return */

import { Box } from "@chakra-ui/react";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function LadoEsquerdo() {
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
      padding="15px"
      mt="15px"
    >
      <TituloNomeExame titulo="Coxa Esquerda" />
    </Box >
  );
}
export default LadoEsquerdo;
