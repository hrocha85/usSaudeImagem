/* eslint-disable array-callback-return */

import { Box, Checkbox, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function OutrasPatologicas() {
  const altura = "100%";
  const largura = "50%";

  const [FrasePatologicas, setFrasePatologicas] = useState<any>([]);

  const [PresencaCheckbox, setPresencaCheckbox] = useState(false);

  const [AusenciaCheckbox, setAusenciaCheckbox] = useState(false);
  const [CavosAxilaresCheckbox, setCavosAxilaresCheckbox] = useState(false);

  const removeItemString = (value) => {
    const index = FrasePatologicas.indexOf(value);
    if (index > -1) {
      FrasePatologicas.splice(index, 1);
      setFrasePatologicas((arr) => [...arr]);
    }
  };

  useEffect(() => {
    const string = 'Presença de outras alterações patológicas no parênquima mamário.'
    PresencaCheckbox ? setFrasePatologicas((arr) => [...arr, string]) : removeItemString(string)
  }, [PresencaCheckbox]);
  useEffect(() => {
    const string = 'Ausência de outras alterações patológicas no parênquima mamário.'
    AusenciaCheckbox ? setFrasePatologicas((arr) => [...arr, string]) : removeItemString(string)
  }, [AusenciaCheckbox]);
  useEffect(() => {
    const string = 'Cavos axilares livres.'
    CavosAxilaresCheckbox ? setFrasePatologicas((arr) => [...arr, string]) : removeItemString(string)
  }, [CavosAxilaresCheckbox]);

  const subExame = "Outras alterações patológicas";
  const titulo_exame = "Mamas";

  useEffect(() => {
    if (Object.keys(FrasePatologicas).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        FrasePatologicas
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        FrasePatologicas
      ).Format_Laudo_Create_Storage();
    }
  }, [FrasePatologicas]);

  return (
    <Box
      bg="#FAFAFA"
      w={largura}
      h={altura}
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="10.85px"
      boxShadow="md"
      padding="24px 15px 10px 15px"
      mt='20px'
    >
      <Box >
        <TituloNomeExame titulo="Outras alterações patológicas" />

        <Box gap="5px" display="flex" flexWrap="wrap" mb="10px">

          <Checkbox
            disabled={AusenciaCheckbox}
            onChange={(e) => {
              setPresencaCheckbox(!PresencaCheckbox);
            }}
          >
            Presença de outras alterações patológicas no parênquima mamário.
          </Checkbox>
          <Checkbox
            disabled={PresencaCheckbox}
            onChange={(e) => {
              setAusenciaCheckbox(
                !AusenciaCheckbox
              );
            }}
          >
            Ausência de outras alterações patológicas no parênquima mamário.
          </Checkbox>

          <Checkbox
            onChange={(e) => {
              setCavosAxilaresCheckbox(
                !CavosAxilaresCheckbox
              );
            }}
          >
            Cavos axilares livres.
          </Checkbox>
        </Box>
      </Box>
    </Box>
  );
}

export default OutrasPatologicas;
