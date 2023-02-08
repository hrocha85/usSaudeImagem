import { Box } from "@chakra-ui/react";
import Box_Default_With_Sidebar from "../../component/screen_exames";
import BoxTitleBackground from "../../component/box_title_background";
 
import Cirurgias from "./cirurgias/cirurgias";
import Cisto from "./cisto/cisto";
import Normal from "./dopplerTireoide2Normal/normal";
import EcotexturaParenquima from "./EcotexturaParenquima/EcotexturaParenquima";
import Idade from "./idade/idade";
import Medidas from "./medidas/medidas";
import Nodulos from "./nodulos/nodulos";

function DopplerTireoide2() {
  return (
    <>
      

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

export default DopplerTireoide2;
