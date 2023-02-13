import { Box } from "@chakra-ui/react";

import Cirurgias from "./cirurgias/cirurgias";
import Cisto from "./cisto/cisto";
import CistosColoides from "./CistosColoides/CistosColoides";
import DopplerParenquima from "./DopplerParenquima/DopplerParenquima";
import EcotexturaParenquima from "./EcotexturaParenquima/EcotexturaParenquima";
import Idade from "./idade/idade";
import Linfonodomegalias from "./Linfonodomegalias/Linfonodomegalias";
import Medidas from "./medidas/medidas";
import Nodulos from "./nodulos/nodulos";
import Procedimentos from "./ProcedimentosDiagnosticos/Procedimentos_diagnosticos";
import Normal from "./TireoideNormal/normal";

function Tireoide() {
  return (
    <>


      <Box ml="10px">
        <Normal />

        <Medidas />

        <DopplerParenquima />

        <EcotexturaParenquima />
        <Procedimentos />

        <Cirurgias />

        <CistosColoides />
        <Nodulos />
        <Linfonodomegalias />
      </Box>
    </>
  );
}

export default Tireoide;
