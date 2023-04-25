import { Box, Stack, Text } from "@chakra-ui/react";
import TituloNomeExame from "../../../component/titulo_nome_exame";
import Derrame_Pleural_Direito from "./direito/derrame_pleural_direito";
import Linha_Pleural_Direito from "./direito/linha_pleural_direito";
import Parenquima_Pulmonar_Direito from "./direito/parenquima_pulmonar_direito";
import Derrame_Pleural_Esquerdo from "./esquerdo/derrame_pleural_esquerdo";
import Linha_Pleural_Esquerdo from "./esquerdo/linha_pleural_esquerdo";
import Parenquima_Pulmonar_Esquedo from "./esquerdo/parenquima_pulmonar_esquedo";

export default function SubTorax({ Disable }) {
  const altura = "100%";
  const largura = "66%";
  return (
    <Box
      bg="#FAFAFA"
      w={largura}
      h={altura}
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="10.85px"
      boxShadow="md"
      padding="15px 15px 20px 15px"
      mt="10px"
    >
      <TituloNomeExame titulo="Tórax" />

      <Box gap="15px" display="flex" flexWrap="wrap" flexDirection="column">
        <Stack direction="row" justify='space-between'>
          <Box>
            <Text fontWeight="semibold" fontSize="lg">
              Hemitórax Esquerdo
            </Text>
            <Linha_Pleural_Esquerdo Disable={Disable} />
            <Parenquima_Pulmonar_Esquedo Disable={Disable} />
            <Derrame_Pleural_Esquerdo Disable={Disable} />
          </Box>
          <Box>
            <Text fontWeight="semibold" fontSize="lg">
              Hemitórax Direito
            </Text>
            <Linha_Pleural_Direito Disable={Disable} />
            <Parenquima_Pulmonar_Direito Disable={Disable} />
            <Derrame_Pleural_Direito Disable={Disable} />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
