import {
  Box,
  Flex,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Convert_Medida } from "../../../../component/function_convert_medidas";
import { Format_Laudo } from "../../../../component/function_format_laudo";

export default function Cisto_Direito({ Disable }) {
  const [value, setValue] = useState("1");
  const [frasesTornozelo, setFrasesTornozelo] = useState<any>([]);

  const [enableSelects, setEnableSelects] = useState<boolean>(false);
  const [disableInputs, setdisableInputs] = useState<boolean>(true);

  const [valueSelect1, setValueSelect1] = useState("");
  const [medida1Cisto, setMedida1Cisto] = useState("");
  const [medida2Cisto, setMedida2Cisto] = useState("");

  const subExame = "Cisto Direito";
  const titulo_exame = "Articulações";

  const removeSelectString = () => {
    frasesTornozelo.map((e) => {
      if (e.includes("Derrame articular ")) {
        const index = frasesTornozelo.indexOf(e);

        if (index > -1) {
          frasesTornozelo.splice(index, 1);
          setFrasesTornozelo((arr) => [...arr]);
        }
      }
    });
    frasesTornozelo.map((e) => {
      if (e.includes("Ausência de derrame ")) {
        const index = frasesTornozelo.indexOf(e);

        if (index > -1) {
          frasesTornozelo.splice(index, 1);
          setFrasesTornozelo((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    switch (value) {
      case "1":
        {
          setFrasesTornozelo([]);
          setEnableSelects(false);
          setdisableInputs(true);
          setMedida1Cisto("");
          setMedida2Cisto("");
        }
        break;
      case "Ausente":
        {
          setFrasesTornozelo([]);
          setdisableInputs(true);
          setMedida1Cisto("");
          setMedida2Cisto("");

          setFrasesTornozelo((arr) => [
            ...arr,
            `Ausência de cistos sinoviais ou ganglionares.`,
          ]);
        }
        break;
      case "Presente":
        {
          setFrasesTornozelo([]);
          setEnableSelects(true);
          setdisableInputs(false);

          if (valueSelect1 != "" && medida1Cisto != "" && medida2Cisto != "") {
            setFrasesTornozelo((arr) => [
              ...arr,
              `Presença de cisto de contornos regulares e conteúdo homogêneo situado na ${valueSelect1}, medindo ${new Convert_Medida(
                medida1Cisto
              ).Convert_Medida()} x ${new Convert_Medida(
                medida2Cisto
              ).Convert_Medida()} cm.`,
            ]);
          }
        }
        break;
    }
  }, [value, valueSelect1, medida1Cisto, medida2Cisto]);


  useEffect(() => {
    Disable ? setValue("Ausente") : setValue('1')
  }, [Disable])



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
        bg="#FAFAFA"
      >
        <Text fontWeight="semibold" padding="10px">
          Cisto
        </Text>
        <RadioGroup onChange={setValue} value={value} padding="10px">
          <Stack direction="column">
            <Radio value="1">Não citar</Radio>
            <Radio value="Ausente">Ausente</Radio>

            <HStack>
              <Flex flexWrap="wrap" gap={1}>
                <Radio value="Presente">Presente na</Radio>
                <Select
                  w="auto"
                  placeholder="Selecione Opção"
                  isDisabled={!enableSelects}
                  onChange={(e) => setValueSelect1(e.target.value)}
                >
                  <option value="face anterior do tornozelo">
                    face anterior do tornozelo
                  </option>
                  <option value="face lateral do tornozelo">
                    face lateral do tornozelo
                  </option>
                  <option value="face medial do tornozelo">
                    face medial do tornozelo
                  </option>
                </Select>
                <HStack>
                  <Input
                    isDisabled={disableInputs}
                    w="35px"
                    h="30px"
                    value={medida1Cisto}
                    padding="5px"

                    textAlign="center"
                    onChange={(e) => {
                      setMedida1Cisto(e.target.value);
                    }}
                  />
                  <Text>x</Text>
                  <Input
                    isDisabled={disableInputs}
                    w="35px"
                    h="30px"
                    value={medida2Cisto}
                    padding="5px"

                    textAlign="center"
                    onChange={(e) => {
                      setMedida2Cisto(e.target.value);
                    }}
                  />
                  <Text>mm</Text>
                </HStack>
              </Flex>
            </HStack>
          </Stack>
        </RadioGroup>
      </Box>
    </Stack>
  );
}
