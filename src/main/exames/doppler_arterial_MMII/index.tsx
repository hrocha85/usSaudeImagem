import {
  Box,
  Button,
  Center,
  Divider,
  HStack,
  Stack,
  VStack,
} from "@chakra-ui/react";
import BoxTitleBackground from "../../component/box_title_background";
import Exames from "../../folha_laudos/Laudos";
import BGImage from "../../images/bg_img.png";
import Ovario_Direito from "../transvaginal/ovarios/ovario_direito";
import Ovario_Esquerdo from "../transvaginal/ovarios/ovario_esquedo";
import styles from "./Doppler.module.css";
import Femoral_Comum_Direita from "./femoral_comum/femoral_comum_direita";
import Femoral_Comum_Esquerda from "./femoral_comum/femoral_comum_esquerda";
import Femoral_Superficial_Esquerda from "./femoral_superficial/femoral_superficial_esquerda";

function Doppler_Arterial_MMII() {
  return (
    <Box
      w="100%"
      h="100%"
      verticalAlign="center"
      alignSelf="center"
      alignItems="center"
      backgroundImage={BGImage}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
    >
      <BoxTitleBackground
        PadLeft="2px"
        fontsize="15px"
        tamanho="220px"
        titulo="Doppler Arterial de MMII "
      />

      <Exames></Exames>

      <Box ml="10px">
        <HStack>
          <VStack w="32.5%">
            <Femoral_Comum_Esquerda />
            <Femoral_Superficial_Esquerda />
          </VStack>
          <Center>
            <span className={styles.vl}></span>
          </Center>
          <VStack w="33%">
            <Femoral_Comum_Direita />
          </VStack>
        </HStack>
      </Box>
    </Box>
  );
}

export default Doppler_Arterial_MMII;
