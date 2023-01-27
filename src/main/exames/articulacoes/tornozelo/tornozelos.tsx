import { Box, Stack, Text } from "@chakra-ui/react";
import TituloNomeExame from "../../../component/titulo_nome_exame";
import Derrame_Articular_Direito from "./direito/derrame_articular_direito";
import Lado_Direito_Torn from "./direito/lado_direito_box";
import Tendao_Extensor_Dedos_Direito from "./direito/tendao_extendor_dedos_direito";
import Tendao_Extensor_Halux_Direito from "./direito/tendao_extensor_halux_direito";
import Tendao_Flexor_Dedos_Direito from "./direito/tendao_flexor_dedos_direito";
import Tendao_Flexor_Halux_Direito from "./direito/tendao_flexor_halux_direito";
import Tendao_Tibial_Anterior_Direito from "./direito/tendao_tibial_anterior_direito";
import Tendao_Tibial_Posterior_Direito from "./direito/tendao_tibial_posterior_direito";
import Derrame_Articular_Esquerdo from "./esquerdo/derrame_articular_esquerdo";
import Lado_Esquerdo_Torn from "./esquerdo/lado_esquerdo_box";
import Tendao_Extensor_Dedos_Esquerdo from "./esquerdo/tendao_extendor_dedos_esquerdo";
import Tendao_Extensor_Halux_Esquerdo from "./esquerdo/tendao_extensor_halux_esquerdo";
import Tendao_Flexor_Dedos_Esquerdo from "./esquerdo/tendao_flexor_dedos_esquerdo";
import Tendao_Flexor_Halux_Esquerdo from "./esquerdo/tendao_flexor_halux_esquerdo";
import Tendao_Tibial_Anterior_Esquerdo from "./esquerdo/tendao_tibial_anterior_esquerdo";
import Tendao_Tibial_Posterior_Esquerdo from "./esquerdo/tendao_tibial_posterior_esquerdo";

export default function Tornozelos() {
  const altura = "100%";
  const largura = "auto";
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
      <TituloNomeExame titulo="Tornozelos/Pés" />

      <Box gap="15px" display="flex" flexWrap="wrap" flexDirection="column">
        <Stack direction="row" justify="space-between">
          <Box>
            <Box w="100%">
              <Box textAlign="center" margin="10px">
                <Lado_Esquerdo_Torn />
              </Box>
            </Box>
            <Derrame_Articular_Esquerdo />
            <Tendao_Tibial_Anterior_Esquerdo />
            <Tendao_Extensor_Halux_Esquerdo />
            <Tendao_Extensor_Dedos_Esquerdo />
            <Tendao_Tibial_Posterior_Esquerdo />
            <Tendao_Flexor_Halux_Esquerdo />
            <Tendao_Flexor_Dedos_Esquerdo />
          </Box>
          <Box>
            <Box w="100%">
              <Box textAlign="center" margin="10px">
                <Lado_Direito_Torn />
              </Box>
            </Box>
            <Derrame_Articular_Direito />
            <Tendao_Tibial_Anterior_Direito />
            <Tendao_Extensor_Halux_Direito />
            <Tendao_Extensor_Dedos_Direito />
            <Tendao_Tibial_Posterior_Direito />
            <Tendao_Flexor_Halux_Direito />
            <Tendao_Flexor_Dedos_Direito />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
