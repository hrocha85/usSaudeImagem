import { Box } from "@chakra-ui/react";
import Box_Default_With_Sidebar from "../../component/box_default_sidebar";
import BoxTitleBackground from "../../component/box_title_background";
import Exames from "../../folha_laudos/Laudos";
import Cirurgias from "./cirurgias/cirurgias";
import Cisto from "./cisto/cisto";
import Normal from "./dopplerTireoide2Normal/normal";
import EcotexturaParenquima from "./EcotexturaParenquima/EcotexturaParenquima";
import Idade from "./idade/idade";
import Medidas from "./medidas/medidas";
import Nodulos from "./nodulos/nodulos";

function DopplerTireoide2() {
  return (
    <Box_Default_With_Sidebar>
      <BoxTitleBackground
        PadLeft="30px"
        fontsize="19px"
        tamanho="252px 67px"
        titulo="Doppler da Tireoide 2"
      />

      <Exames></Exames>

      <Box ml="10px">
        <Normal></Normal>

        <Medidas></Medidas>

        <EcotexturaParenquima></EcotexturaParenquima>

        <Cirurgias></Cirurgias>

        <Cisto></Cisto>

        <Idade></Idade>

        <Nodulos></Nodulos>
      </Box>
    </Box_Default_With_Sidebar>
  );
}

export default DopplerTireoide2;
