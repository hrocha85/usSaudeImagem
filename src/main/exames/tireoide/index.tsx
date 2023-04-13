import { Box, Checkbox } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { Format_Laudo } from "../../component/function_format_laudo";
import CistosColoides from "./CistosColoides/CistosColoides";
import DopplerParenquima from "./DopplerParenquima/DopplerParenquima";
import EcotexturaParenquima from "./EcotexturaParenquima/EcotexturaParenquima";
import Linfonodomegalias from "./Linfonodomegalias/Linfonodomegalias";
import Cirurgias from "./cirurgias/cirurgias";
import Medidas from "./medidas/medidas";
import Nodulos from "./nodulos/nodulos";

function Tireoide() {
  const altura = "100%";
  const largura = "180px";
  const [Normal, setNormal] = useState(false);

  const [FrasesTireoide, setFrasesTireoide] = useState<any>([]);
  const [ConclusaoTireoide, setConclusaoTireoide] = useState<any>(
    []
  );

  const subExame = "Tireóide";
  const titulo_exame = "Tireóide";

  useEffect(() => {
    Normal
      ? setFrasesTireoide(["Exame tiróide não apresenta alterações."])
      : setFrasesTireoide([]);
  }, [Normal]);

  useEffect(() => {
    if (Object.keys(FrasesTireoide).length === 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        FrasesTireoide,
        ConclusaoTireoide
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        FrasesTireoide,
        ConclusaoTireoide
      ).Format_Laudo_Create_Storage();
    }
  }, [FrasesTireoide]);

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
        padding="10px 15px 10px 15px"
        mt="2px"
        mb="5px"
      >
        <Box w="150px">
          <Checkbox id="tudoNormal" onChange={(e) => setNormal(!Normal)}>
            Tireoide normal
          </Checkbox>
        </Box>
      </Box>

      <Box ml="10px">
        <EcotexturaParenquima />
        <DopplerParenquima />
        <Medidas />
        <Linfonodomegalias />
        <Cirurgias />
        <CistosColoides />
        <Nodulos />
      </Box>
    </>
  );
}

export default Tireoide;
