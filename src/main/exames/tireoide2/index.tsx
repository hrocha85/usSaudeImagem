import { Box } from "@chakra-ui/react";

import Cirurgias from "./cirurgias/cirurgias";
import EcotexturaParenquima from "./EcotexturaParenquima/EcotexturaParenquima";
import Idade from "./idade/idade";
import Medidas from "./medidas/medidas";

function Tireoide2() {
  return (
    <>
      <Box ml="10px">
        <Medidas></Medidas>
        <EcotexturaParenquima></EcotexturaParenquima>
        <Cirurgias></Cirurgias>
        <Idade></Idade>
      </Box>
    </>
  );
}

export default Tireoide2;
