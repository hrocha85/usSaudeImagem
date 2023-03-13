/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../component/function_format_laudo";

import Cirurgias from "./cirurgias/cirurgias";
import Cisto from "./cisto/cisto";
import EcotexturaParenquima from "./EcotexturaParenquima/EcotexturaParenquima";
import Idade from "./idade/idade";
import Medidas from "./medidas/medidas";
import Nodulos from "./nodulos/nodulos";

function DopplerTireoide() {
  const altura = '100%'
  const largura = '180px'
  const [Disable, SetDisable] = useState(false)

  const [FraseNodulosDireito, setFraseNodulosDireito] = useState<any>([]);
  const [ConclusaoNodulosDireito, setConclusaoNodulosDireito] = useState<any>([]);

  const subExame = `Doppler da tireóide normal`;
  const titulo_exame = "Doppler da Tireóide";

  useEffect(() => {
    Disable ? setFraseNodulosDireito(['Exame Doppler da tireóide normal']) : setFraseNodulosDireito([])
  }, [Disable])

  useEffect(() => {
    if (Object.keys(FraseNodulosDireito).length === 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        FraseNodulosDireito,
        ConclusaoNodulosDireito
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        FraseNodulosDireito,
        ConclusaoNodulosDireito
      ).Format_Laudo_Create_Storage();
    }
  }, [FraseNodulosDireito]);

  return (
    <Box>
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
            onChange={(e) => { SetDisable(!Disable) }}
          >Doppler Tireoide normal</Checkbox>
        </Box>
      </Box >

      <Medidas Disable={Disable} />

      <EcotexturaParenquima Disable={Disable} />

      <Cirurgias Disable={Disable} />

      <Cisto Disable={Disable} />

      <Idade Disable={Disable} />

      <Nodulos Disable={Disable} />
    </Box>
  );
}

export default DopplerTireoide;
