import { Box, Checkbox } from "@chakra-ui/react";
import { useState } from "react";

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

function Tireoide() {
  const altura = '100%'
  const largura = '180px'
  const [Normal, setNormal] = useState(false)


  return (
    <>
      <Box
        bg="#FAFAFA"
        w={largura}
        h={altura}
        bgPosition="center"
        bgRepeat="no-repeat"
        borderRadius="10.85px"
        boxShadow="md"
        padding='10px 15px 10px 15px'
        mt='2px'
        mb='5px'>
        <Box w='150px' >
          <Checkbox
            id="tudoNormal"
            onChange={(e) => setNormal(!Normal)}
          >Tireoide normal</Checkbox>
        </Box>
      </Box >

      <Box ml="10px">
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
