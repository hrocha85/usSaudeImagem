/* eslint-disable array-callback-return */

import { Box, Checkbox, Select, Stack, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Simetria() {
  const altura = "100%";
  let largura = "60%";
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
  isLargerThan600 ? largura = "57.5%": largura = "100%"

  const [FraseSimetria, setFraseSimetria] = useState<any>([]);

  const [SimetricoCheckbox, setSimetricoCheckbox] = useState(false);

  const [AssimetricoCheckbox, setAssimetricoCheckbox] = useState(false);

  const [AssimetriaUnicaCheckbox, setAssimetriaUnicaCheckbox] = useState(false);

  const [AssimetriaGlobalCheckbox, setAssimetriaGlobalCheckbox] = useState(false);

  const [AssimetriaFocalCheckbox, setAssimetriaFocalCheckbox] = useState(false);

  const [AssimetriaDesenvolvimentoCheckbox, setAssimetriaDesenvolvimentoCheckbox] = useState(false);

  const removeItemString = (value) => {
    const index = FraseSimetria.indexOf(value);
    if (index > -1) {
      FraseSimetria.splice(index, 1);
      setFraseSimetria((arr) => [...arr]);
    }
  };

  useEffect(() => {
    const string = 'Mamas simétricas'
    SimetricoCheckbox ? setFraseSimetria((arr) => [...arr, string]) : removeItemString(string)
  }, [SimetricoCheckbox]);
  useEffect(() => {
    const string = 'Mamas assimétricas'
    AssimetricoCheckbox ? setFraseSimetria((arr) => [...arr, string]) : removeItemString(string)
  }, [AssimetricoCheckbox]);

  useEffect(() => {
    const string = 'Assimetria - única incidência.'
    AssimetriaUnicaCheckbox ? setFraseSimetria((arr) => [...arr, string]) : removeItemString(string)
  }, [AssimetriaUnicaCheckbox]);

  useEffect(() => {
    const string = 'Assimetria global.'
    AssimetriaGlobalCheckbox ? setFraseSimetria((arr) => [...arr, string]) : removeItemString(string)
  }, [AssimetriaGlobalCheckbox]);
  useEffect(() => {
    const string = 'Assimetria focal.'
    AssimetriaFocalCheckbox ? setFraseSimetria((arr) => [...arr, string]) : removeItemString(string)
  }, [AssimetriaFocalCheckbox]);
  useEffect(() => {
    const string = 'Assimetria em desenvolvimento.'
    AssimetriaDesenvolvimentoCheckbox ? setFraseSimetria((arr) => [...arr, string]) : removeItemString(string)
  }, [AssimetriaDesenvolvimentoCheckbox]);


  const subExame = "Simetria";
  const titulo_exame = "Mamas";

  useEffect(() => {
    if (Object.keys(FraseSimetria).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        FraseSimetria
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        FraseSimetria
      ).Format_Laudo_Create_Storage();
    }
  }, [FraseSimetria]);

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
        <TituloNomeExame titulo="Simetria" />

        <Box gap="25px" display="flex" flexWrap="wrap" mb="10px">
          <Stack>
            <Checkbox
              disabled={AssimetricoCheckbox}
              onChange={(e) => {
                setSimetricoCheckbox(!SimetricoCheckbox);
              }}
            >
              Simétrico
            </Checkbox>
          </Stack>
          <Stack>
            <Checkbox
              disabled={SimetricoCheckbox}
              onChange={(e) => {
                setAssimetricoCheckbox(
                  !AssimetricoCheckbox
                );
              }}
            >
              Assimétrico
            </Checkbox>
            <Stack pl='20px'>
              <Checkbox
                isDisabled={!AssimetricoCheckbox}
                onChange={(e) => {
                  setAssimetriaUnicaCheckbox(!AssimetriaUnicaCheckbox);
                }}
              >
                Assimetria - única incidência
              </Checkbox>
              <Checkbox
                isDisabled={!AssimetricoCheckbox}
                onChange={(e) => {
                  setAssimetriaGlobalCheckbox(
                    !AssimetriaGlobalCheckbox
                  );
                }}
              >
                Assimetria global
              </Checkbox>
              <Checkbox
                isDisabled={!AssimetricoCheckbox}
                onChange={(e) => {
                  setAssimetriaFocalCheckbox(
                    !AssimetriaFocalCheckbox
                  );
                }}
              >
                Assimetria focal
              </Checkbox>
              <Checkbox
                isDisabled={!AssimetricoCheckbox}
                onChange={(e) => {
                  setAssimetriaDesenvolvimentoCheckbox(
                    !AssimetriaDesenvolvimentoCheckbox
                  );
                }}
              >
                Assimetria Desenvolvimento
              </Checkbox>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default Simetria;
