import { Box, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../component/function_format_laudo";

export default function Gordura_Kager_Direito() {
  const [value, setValue] = useState("1");
  const [frasesTornozelo, setFrasesTornozelo] = useState<any>([]);

  const subExame = "Gordura Kager Direito";
  const titulo_exame = "Articulações";

  useEffect(() => {
    switch (value) {
      case "1":
        {
          setFrasesTornozelo([]);
        }
        break;
      case "Normal":
        {
          setFrasesTornozelo([]);

          setFrasesTornozelo((arr) => [
            ...arr,
            `Gordura de Kager com aspecto preservado.`,
          ]);
        }
        break;
    }
  }, [value]);

  useEffect(() => {
    if (Object.keys(frasesTornozelo).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesTornozelo
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesTornozelo
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesTornozelo]);

  return (
    <Stack>
      <Box
        borderWidth="2px"
        borderColor="blue.100"
        borderRadius="lg"
        marginTop="5px"
      >
        <Text fontWeight="semibold" padding="10px">
          Gordura de Kager
        </Text>
        <RadioGroup onChange={setValue} value={value} padding="10px">
          <Stack direction="column">
            <Radio value="1">Não citar</Radio>
            <Radio value="Normal">Normal</Radio>
          </Stack>
        </RadioGroup>
      </Box>
    </Stack>
  );
}
