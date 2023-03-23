import { Box } from "@chakra-ui/react";

import Cirurgias from "./cirurgias/cirurgias";
import Cisto from "./cisto/cisto";
import EcotexturaParenquima from "./EcotexturaParenquima/EcotexturaParenquima";
import Idade from "./idade/idade";
import Medidas from "./medidas/medidas";
import Nodulos from "./nodulos/nodulos";

function DopplerTireoide2() {
  return (
    <>


      <Box ml="10px">


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
