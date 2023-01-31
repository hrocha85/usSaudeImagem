import { Box, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../component/function_format_laudo";

export default function Bolsa_Esquerdo() {
  const [value, setValue] = useState("1");
  const [frasesTornozelo, setFrasesTornozelo] = useState<any>([]);

  const subExame = "Bolsa Esquerdo";
  const titulo_exame = "Articulações";

  useEffect(() => {
    switch (value) {
      case "1":
        {
          setFrasesTornozelo([]);
        }
        break;
      case "Ausente":
        {
          setFrasesTornozelo([]);

          setFrasesTornozelo((arr) => [
            ...arr,
            `Ausência de coleção líquida na bolsa retrocalcaniana.`,
          ]);
        }
        break;
      case "Presente":
        {
          setFrasesTornozelo([]);

          setFrasesTornozelo((arr) => [
            ...arr,
            `Presença de coleção líquida na bolsa retrocalcaniana.`,
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
          Bolsas
        </Text>
        <RadioGroup onChange={setValue} value={value} padding="10px">
          <Stack direction="column">
            <Radio value="1">Não citar</Radio>
            <Radio value="Ausente">Ausência de Líquido</Radio>
            <Radio value="Presente">Líquido na bolsa retrocalcaniana</Radio>
          </Stack>
        </RadioGroup>
      </Box>
    </Stack>
  );
}
