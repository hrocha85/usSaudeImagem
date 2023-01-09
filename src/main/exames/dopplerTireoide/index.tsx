import { Box } from "@chakra-ui/react";
import Exames from "../../folha_laudos/Laudos";
import Cirurgias from "./cirurgias/cirurgias";
import Cisto from "./cisto/cisto";
import Normal from "./dopplerTireoideNormal/normal";
import EcotexturaParenquima from "./EcotexturaParenquima/EcotexturaParenquima";
import Idade from "./idade/idade";
import Medidas from "./medidas/medidas";
import Nodulos from "./nodulos/nodulos";

function DopplerTireoide() {
  return (
    <>
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

export default DopplerTireoide;
