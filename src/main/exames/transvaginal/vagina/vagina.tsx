/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Flex, HStack, Input, Radio, RadioGroup, Select, Spacer, Stack, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Convert_Medida } from "../../../component/function_convert_medidas";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Vagina({ Disable }) {
  const altura = "100%";
  const largura = "66%";

  const [FraseVagina, setFraseVagina] = useState<any>([]);


  const [AlteradaCheckbox, setAlteradaCheckbox] = useState(false)
  const [NaoAlteradaCheckbox, setNaoAlteradaCheckbox] = useState(false)


  const removeItemString = (value) => {
    var index = FraseVagina.indexOf(value);
    if (index > -1) {
      FraseVagina.splice(index, 1);
      setFraseVagina((arr) => [...arr]);
    }
  };

  useEffect(() => {
    const string = 'Vagina com alterações'
    AlteradaCheckbox ? setFraseVagina((arr) => [...arr, string]) : removeItemString(string)
  }, [AlteradaCheckbox])
  useEffect(() => {
    const string = 'Vagina  sem alterações'
    NaoAlteradaCheckbox ? setFraseVagina((arr) => [...arr, string]) : removeItemString(string)
  }, [NaoAlteradaCheckbox])

  const subExame = "Vagina";
  const titulo_exame = "Transvaginal";

  useEffect(() => {
    if (Object.keys(FraseVagina).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        FraseVagina,
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        FraseVagina,
      ).Format_Laudo_Create_Storage();
    }
  }, [FraseVagina]);

  return (
    <Box
      bg="#FAFAFA"
      w={largura}
      h={altura}
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="10.85px"
      boxShadow="md"
      padding="15px"
      mt="15px"
    >
      <TituloNomeExame titulo="Vagina" />
      <Box gap='25px' display='flex' flexWrap='wrap'>
        <Checkbox
          disabled={NaoAlteradaCheckbox}
          onChange={() =>
            setAlteradaCheckbox(!AlteradaCheckbox)
          }
        >
          Alterada
        </Checkbox>
        <Checkbox
          disabled={AlteradaCheckbox}
          onChange={() =>
            setNaoAlteradaCheckbox(!NaoAlteradaCheckbox)
          }
        >
          Não Alterada
        </Checkbox>

      </Box>
    </Box >
  );
}

export default Vagina