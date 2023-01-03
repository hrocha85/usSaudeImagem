import { Box } from "@chakra-ui/react";
import Box_Default_With_Sidebar from "../../component/box_default_sidebar";
import BoxTitleBackground from "../../component/box_title_background";
import Exames from "../../folha_laudos/Laudos";
import Cirurgias from "./cirurgias/cirurgias";
import Cisto from "./cisto/cisto";
import EcotexturaParenquima from "./EcotexturaParenquima/EcotexturaParenquima";
import Idade from "./idade/idade";
import Medidas from "./medidas/medidas";
import Nodulos from "./nodulos/nodulos";
import Normal from "./Tireoide2Normal/normal";

function Tireoide2() {
  return (
    <>
      <BoxTitleBackground
        PadLeft="30px"
        fontsize="19px"
        tamanho="150px 65px"
        titulo="Tireoide 2"
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
    </>
  );
}

export default Tireoide2;
