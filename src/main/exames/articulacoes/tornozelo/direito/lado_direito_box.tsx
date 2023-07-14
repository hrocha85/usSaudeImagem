/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Center } from "@chakra-ui/react";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function Lado_Direito_Torn() {
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
      mt="15px"
    >
      <Center>
        <TituloNomeExame titulo='Direito' />
      </Center>
    </Box>
  );
}
export default Lado_Direito_Torn;
