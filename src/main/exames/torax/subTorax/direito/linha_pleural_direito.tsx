import { Box, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../component/function_format_laudo";

export default function Linha_Pleural_Direito({ Disable }) {
  const [value, setValue] = useState("1");
  const [frasesTorax, setFrasesTorax] = useState<any>([]);

  const subExame = "Hemitórax Direito. Linha Pleural";
  const titulo_exame = "Torax";

  useEffect(() => {
    if (value == "1") {
      setFrasesTorax([]);
    } else {
      setFrasesTorax([]);
      setFrasesTorax((arr) => [...arr, value]);
    }
  }, [value]);
  useEffect(() => {
    Disable ? setValue('Fina e Regular') : setValue('1')
  }, [Disable])
  useEffect(() => {
    if (Object.keys(frasesTorax).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesTorax
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesTorax
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesTorax]);

  return (
    <Stack marginBottom='10px'>
      <Box borderWidth="2px" borderColor="blue.100" borderRadius="lg">
        <Text fontWeight="semibold" padding="10px">
          Linha Pleural
        </Text>
        <RadioGroup onChange={setValue} value={value} padding="10px">
          <Stack direction="column">
            <Radio value="1">Não citar</Radio>
            <Radio value="Fina e Regular">Fina e Regular</Radio>
            <Radio value="Espessada e Irregular">Espessada e Irregular</Radio>
          </Stack>
        </RadioGroup>
      </Box>
    </Stack>
  );
}
