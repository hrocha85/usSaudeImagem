/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box } from "@chakra-ui/react";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function LadoEsquerdo() {
  const altura = "100%";
  const largura = "95%";

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
      <TituloNomeExame titulo=" Cotovelo Esquerdo" />
    </Box >
  );
}
export default LadoEsquerdo;
