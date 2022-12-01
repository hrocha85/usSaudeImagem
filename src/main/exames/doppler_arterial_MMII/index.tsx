import { Box, Center, HStack, VStack } from "@chakra-ui/react";
import BoxTitleBackground from "../../component/box_title_background";
import Exames from "../../folha_laudos/Laudos";
import styles from "./Doppler.module.css";
import Femoral_Comum_Direita from "./femoral_comum/femoral_comum_direita";
import Femoral_Comum_Esquerda from "./femoral_comum/femoral_comum_esquerda";
import Femoral_Profunda_Direita from "./femoral_profunda/femoral_profunda_direita";
import Femoral_Profunda_Esquerda from "./femoral_profunda/femoral_profunda_esquerda";
import Femoral_Superficial_Direita from "./femoral_superficial/femoral_superficial_direita";
import Femoral_Superficial_Esquerda from "./femoral_superficial/femoral_superficial_esquerda";
import Fibular_Direita from "./fibular/fibular_direita";
import Fibular_Esquerda from "./fibular/fibular_esquerda";
import Lado from "./lado";
import Observacoes_Direita from "./observacoes/observacoes_direita";
import Observacoes_Esquerda from "./observacoes/observacoes_esquerda";

import Poplitea_Direita from "./poplitea/poplitea_direita";
import Poplitea_Esquerda from "./poplitea/poplitea_esquerda";
import Tibial_Anterior_Direita from "./tibial_anterior/tibial_anterior_direita";
import Tibial_Anterior_Esquerda from "./tibial_anterior/tibial_anterior_esquerda";
import Tibial_Posterior_Direita from "./tibial_posterior/tibial_posterior_direita";
import Tibial_Posterior_Esquerda from "./tibial_posterior/tibial_posterior_esquerda";

import Box_Default_With_Sidebar from "../../component/box_default_sidebar";

function Doppler_Arterial_MMII() {
  return (
    <Box_Default_With_Sidebar>
      <BoxTitleBackground
        PadLeft="23px"
        fontsize="16px"
        tamanho="260px"
        titulo="Doppler Arterial de MMII "
      />

      <Exames></Exames>

      <Box ml="10px">
        <HStack>
          <VStack w="32.5%">
            <Lado lado={"Esquerdo"} />

            <Femoral_Comum_Esquerda />
            <Femoral_Superficial_Esquerda />
            <Femoral_Profunda_Esquerda />
            <Poplitea_Esquerda />
            <Tibial_Anterior_Esquerda />
            <Tibial_Posterior_Esquerda />
            <Fibular_Esquerda />
            <Observacoes_Esquerda />
          </VStack>
          <Center>
            <span className={styles.vl}></span>
          </Center>
          <VStack w="33%">
            <Lado lado={"Direito"} />
            <Femoral_Comum_Direita />
            <Femoral_Superficial_Direita />
            <Femoral_Profunda_Direita />
            <Poplitea_Direita />
            <Tibial_Anterior_Direita />
            <Tibial_Posterior_Direita />
            <Fibular_Direita />
            <Observacoes_Direita />
          </VStack>
        </HStack>
      </Box>
    </Box_Default_With_Sidebar>
  );
}

export default Doppler_Arterial_MMII;
