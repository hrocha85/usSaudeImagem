/* eslint-disable array-callback-return */

import { Box, Checkbox, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Assimetria() {
  const altura = "100%";
  const largura = "300px";

  const [FraseAssimetria, setFraseAssimetria] = useState<any>([]);

  const [AssimetriaUnicaCheckbox, setAssimetriaUnicaCheckbox] = useState(false);

  const [AssimetriaGlobalCheckbox, setAssimetriaGlobalCheckbox] = useState(false);

  const [AssimetriaFocalCheckbox, setAssimetriaFocalCheckbox] = useState(false);

  const [AssimetriaDesenvolvimentoCheckbox, setAssimetriaDesenvolvimentoCheckbox] = useState(false);

  const removeItemString = (value) => {
    const index = FraseAssimetria.indexOf(value);
    if (index > -1) {
      FraseAssimetria.splice(index, 1);
      setFraseAssimetria((arr) => [...arr]);
    }
  };

  useEffect(() => {
    const string = 'Assimetria - única incidência.'
    AssimetriaUnicaCheckbox ? setFraseAssimetria((arr) => [...arr, string]) : removeItemString(string)
  }, [AssimetriaUnicaCheckbox]);

  useEffect(() => {
    const string = 'Assimetria global.'
    AssimetriaGlobalCheckbox ? setFraseAssimetria((arr) => [...arr, string]) : removeItemString(string)
  }, [AssimetriaGlobalCheckbox]);
  useEffect(() => {
    const string = 'Assimetria focal.'
    AssimetriaFocalCheckbox ? setFraseAssimetria((arr) => [...arr, string]) : removeItemString(string)
  }, [AssimetriaFocalCheckbox]);
  useEffect(() => {
    const string = 'Assimetria em desenvolvimento.'
    AssimetriaDesenvolvimentoCheckbox ? setFraseAssimetria((arr) => [...arr, string]) : removeItemString(string)
  }, [AssimetriaDesenvolvimentoCheckbox]);

  const subExame = "Assimetria";
  const titulo_exame = "Mamas";

  useEffect(() => {
    if (Object.keys(FraseAssimetria).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        FraseAssimetria
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        FraseAssimetria
      ).Format_Laudo_Create_Storage();
    }
  }, [FraseAssimetria]);

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
      mt="20px"
    >
      <Box >
        <TituloNomeExame titulo="Assimetria" />

        <Box gap="5px" display="flex" flexWrap="wrap" mb="10px">

          <Checkbox
            onChange={(e) => {
              setAssimetriaUnicaCheckbox(!AssimetriaUnicaCheckbox);
            }}
          >
            Assimetria - única incidência
          </Checkbox>
          <Checkbox
            onChange={(e) => {
              setAssimetriaGlobalCheckbox(
                !AssimetriaGlobalCheckbox
              );
            }}
          >
            Assimetria global
          </Checkbox>
          <Checkbox
            onChange={(e) => {
              setAssimetriaFocalCheckbox(
                !AssimetriaFocalCheckbox
              );
            }}
          >
            Assimetria focal
          </Checkbox>
          <Checkbox
            onChange={(e) => {
              setAssimetriaDesenvolvimentoCheckbox(
                !AssimetriaDesenvolvimentoCheckbox
              );
            }}
          >
            Assimetria Desenvolvimento
          </Checkbox>
        </Box>
      </Box>
    </Box>
  );
}

export default Assimetria;
