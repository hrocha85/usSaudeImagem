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
import Femoral_Comum from "./femoral_comum/femoral_comum";

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
          <VStack w="33%" backgroundColor="yellow">
            <Femoral_Comum />
          </VStack>
          <Center>
            <span className={styles.vl}></span>
          </Center>
          <VStack w="33%" backgroundColor="yellow">
            <Femoral_Comum />
          </VStack>
        </HStack>
      </Box>
    </Box>
  );
}

export default Doppler_Arterial_MMII;
