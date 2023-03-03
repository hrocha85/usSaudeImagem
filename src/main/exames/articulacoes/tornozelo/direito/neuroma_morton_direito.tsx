/* eslint-disable no-lone-blocks */
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

export default function Neuroma_Morton_Direito({ Disable }) {
  const [value, setValue] = useState("1");
  const [frasesTornozelo, setFrasesTornozelo] = useState<any>([]);
  const [ConclusoesFrasesTornozelo, setConclusoesFrasesTornozelo] = useState<any>([]);

  const [enableMortonSelect, setEnableMortonSelect] = useState<boolean>(false);
  const [MortonInput, setMortonInput] = useState<boolean>(true);

  const [valueSelect1, setValueSelect1] = useState("");
  const [medida1Morton, setMedida1Morton] = useState("");
  const [medida2Morton, setMedida2Morton] = useState("");
  const [medida3Morton, setMedida3Morton] = useState("");

  const subExame = "Neuroma de Morton Direito";
  const titulo_exame = "Articulações";

  useEffect(() => {
    switch (value) {
      case "1":
        {
          new Format_Laudo(titulo_exame).Remove_Conclusao('Imagem compatível com neuroma de Morton.')
          setConclusoesFrasesTornozelo([]);
          setFrasesTornozelo([]);
          setEnableMortonSelect(false);
          setMedida1Morton("");
          setMedida2Morton("");
          setMedida3Morton("");
          setMortonInput(true);
        }
        break;
      case "Ausente":
        {
          new Format_Laudo(titulo_exame).Remove_Conclusao('Imagem compatível com neuroma de Morton.')
          setConclusoesFrasesTornozelo([]);
          setFrasesTornozelo([]);
          setMedida1Morton("");
          setMedida2Morton("");
          setMedida3Morton("");
          setEnableMortonSelect(false);
          setMortonInput(true);
          setFrasesTornozelo((arr) => [
            ...arr,
            `Ausência de lesões compatíveis com neuroma de Morton.`,
          ]);
        }
        break;

      case "Presente":
        {
          setFrasesTornozelo([]);
          setEnableMortonSelect(true);
          setMortonInput(false);

          if (
            medida1Morton != "" &&
            medida2Morton != "" &&
            medida3Morton != "" &&
            valueSelect1 != ""
          ) {
            setConclusoesFrasesTornozelo(['Imagem compatível com neuroma de Morton.'])
            setFrasesTornozelo((arr) => [
              ...arr,
              `Presença de nódulo hipoecogênico de contornos regulares medindo ${new Convert_Medida(
                medida1Morton
              ).Convert_Medida()} x ${new Convert_Medida(
                medida2Morton
              ).Convert_Medida()} x ${new Convert_Medida(
                medida3Morton
              ).Convert_Medida()} cm, situado no ${valueSelect1} espaço intermetatarsal, com insinuação para a região plantar.`,
            ]);
          }
        }
        break;
    }
  }, [value, valueSelect1, medida1Morton, medida2Morton, medida3Morton]);

  useEffect(() => {
    if (Object.keys(frasesTornozelo).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesTornozelo,
        ConclusoesFrasesTornozelo
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesTornozelo,
        ConclusoesFrasesTornozelo
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
          Neuroma de Morton
        </Text>
        <RadioGroup isDisabled={Disable} onChange={setValue} value={value} padding="10px">
          <Stack direction="column">
            <Radio value="1">Não citar</Radio>
            <Radio value="Ausente">Ausente</Radio>
            <HStack>
              <Flex flexWrap="wrap" gap={1}>
                <Radio value="Presente">Presente no</Radio>
                <Select
                  w="auto"
                  placeholder="Opção"
                  isDisabled={!enableMortonSelect}
                  onChange={(e) => setValueSelect1(e.target.value)}
                >
                  <option value="I">I</option>
                  <option value="II">II</option>
                  <option value="III">III</option>
                  <option value="IV">IV</option>
                </Select>
                <Text>espaço intermetatarsal, com</Text>
                <Input
                  isDisabled={MortonInput}
                  w="35px"
                  h="30px"
                  value={medida1Morton}
                  padding="5px"
                  maxLength={2}
                  textAlign="center"
                  onChange={(e) => {
                    setMedida1Morton(e.target.value);
                  }}
                />
                <Text>x</Text>
                <Input
                  isDisabled={MortonInput}
                  w="35px"
                  h="30px"
                  value={medida2Morton}
                  padding="5px"
                  maxLength={2}
                  textAlign="center"
                  onChange={(e) => {
                    setMedida2Morton(e.target.value);
                  }}
                />
                <Text>x</Text>
                <Input
                  isDisabled={MortonInput}
                  w="35px"
                  h="30px"
                  value={medida3Morton}
                  padding="5px"
                  maxLength={2}
                  textAlign="center"
                  onChange={(e) => {
                    setMedida3Morton(e.target.value);
                  }}
                />

                <Text>mm</Text>
              </Flex>
            </HStack>
          </Stack>
        </RadioGroup>
      </Box>
    </Stack>
  );
}
