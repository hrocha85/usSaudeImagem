/* eslint-disable array-callback-return */

import { Box, Checkbox, Select, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Extra1() {
  const altura = "100%";
  let largura = "60%";
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
  isLargerThan600 ? largura = "57.5%": largura = "100%"

  const [FraseExtra1, setFraseExtra1] = useState<any>([]);

  const [PresencaEspessamentoCheckbox, setPresencaEspessamentoCheckbox] = useState(false);

  const [AusenciaEspessamentoCheckbox, setAusenciaEspessamentoCheckbox] = useState(false);

  const [AusenciaEspessamentoRetracoesCheckbox, setAusenciaEspessamentoRetracoesCheckbox] = useState(false);
  const [PresencaEspessamentoRetracoesCheckbox, setPresencaEspessamentoRetracoesCheckbox] = useState(false);

  const removeItemString = (value) => {
    const index = FraseExtra1.indexOf(value);
    if (index > -1) {
      FraseExtra1.splice(index, 1);
      setFraseExtra1((arr) => [...arr]);
    }
  };

  useEffect(() => {
    const string = 'Ausência de espessamento.'
    AusenciaEspessamentoCheckbox ? setFraseExtra1((arr) => [...arr, string]) : removeItemString(string)
  }, [AusenciaEspessamentoCheckbox]);

  useEffect(() => {
    const string = 'Presença de espessamento.'
    PresencaEspessamentoCheckbox ? setFraseExtra1((arr) => [...arr, string]) : removeItemString(string)
  }, [PresencaEspessamentoCheckbox]);

  useEffect(() => {
    const string = 'Ausência de espessamento retrações de pele ou mamilos.'
    AusenciaEspessamentoRetracoesCheckbox ? setFraseExtra1((arr) => [...arr, string]) : removeItemString(string)
  }, [AusenciaEspessamentoRetracoesCheckbox]);

  useEffect(() => {
    const string = 'Presença de espessamento retrações de pele ou mamilos.'
    PresencaEspessamentoRetracoesCheckbox ? setFraseExtra1((arr) => [...arr, string]) : removeItemString(string)
  }, [PresencaEspessamentoRetracoesCheckbox]);

  const subExame = "Extra";
  const titulo_exame = "Mamas";

  useEffect(() => {
    if (Object.keys(FraseExtra1).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        FraseExtra1
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        FraseExtra1
      ).Format_Laudo_Create_Storage();
    }
  }, [FraseExtra1]);

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
      <Box gap="10px" display="flex" flexWrap="wrap" mb="10px">
        <Checkbox
          disabled={PresencaEspessamentoCheckbox}
          onChange={(e) => {
            setAusenciaEspessamentoCheckbox(
              !AusenciaEspessamentoCheckbox
            );
          }}
        >
          Ausência de espessamento
        </Checkbox>
        <Checkbox
          disabled={AusenciaEspessamentoCheckbox}
          onChange={(e) => {
            setPresencaEspessamentoCheckbox(!PresencaEspessamentoCheckbox);
          }}
        >
          Presença de espessamento
        </Checkbox>
        <Checkbox
          disabled={PresencaEspessamentoRetracoesCheckbox}
          onChange={(e) => {
            setAusenciaEspessamentoRetracoesCheckbox(!AusenciaEspessamentoRetracoesCheckbox);
          }}
        >
          Ausência de espessamento retrações
        </Checkbox>
        <Checkbox
          disabled={AusenciaEspessamentoRetracoesCheckbox}
          onChange={(e) => {
            setPresencaEspessamentoRetracoesCheckbox(!PresencaEspessamentoRetracoesCheckbox);
          }}
        >
          Presença de espessamento retrações
        </Checkbox>
      </Box>
    </Box>
  );
}

export default Extra1;
