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

export default function Fascia_Plantar_Direito({ Disable }) {
  const [value, setValue] = useState("1");
  const [frasesTornozelo, setFrasesTornozelo] = useState<any>([]);
  const [ConclusoesFrasesTornozelo, setConclusoesFrasesTornozelo] = useState<any>([]);

  const [enableFibromatoseSelect, setEnableFibromatoseSelect] =
    useState<boolean>(false);
  const [fasciliteInput, setFasciliteInput] = useState<boolean>(true);
  const [fibromatoseInput, setFibromatoseInput] = useState<boolean>(true);

  const [valueSelect1, setValueSelect1] = useState("");
  const [medida1Fibro, setMedida1Fibro] = useState("");
  const [medida2Fibro, setMedida2Fibro] = useState("");
  const [medida3Fibro, setMedida3Fibro] = useState("");

  const [medidaFascilite, setMedidaFascilite] = useState("");

  const subExame = "Fáscia Plantar Direito";
  const titulo_exame = "Articulações";

  useEffect(() => {
    switch (value) {
      case "1":
        {
          new Format_Laudo(titulo_exame).Remove_Conclusao('Nódulo na fáscia plantar direito.')
          new Format_Laudo(titulo_exame).Remove_Conclusao('Sinais de fascilíte plantar direito.')
          setConclusoesFrasesTornozelo([]);
          setFrasesTornozelo([]);
          setEnableFibromatoseSelect(false);
          setMedida1Fibro("");
          setMedida2Fibro("");
          setMedida3Fibro("");
          setMedidaFascilite("");
          setFasciliteInput(true);
          setFibromatoseInput(true);
        }
        break;
      case "Normal":
        {
          new Format_Laudo(titulo_exame).Remove_Conclusao('Nódulo na fáscia plantar direito.')
          new Format_Laudo(titulo_exame).Remove_Conclusao('Sinais de fascilíte plantar direito.')
          setConclusoesFrasesTornozelo([]);
          setFrasesTornozelo([]);
          setMedida1Fibro("");
          setMedida2Fibro("");
          setMedida3Fibro("");
          setMedidaFascilite("");
          setEnableFibromatoseSelect(false);
          setFasciliteInput(true);
          setFibromatoseInput(true);
          setFrasesTornozelo((arr) => [
            ...arr,
            `Fáscia plantar com espessura e ecogenicidade preservadas.`,
          ]);
        }
        break;
      case "Fascilite":
        {
          new Format_Laudo(titulo_exame).Remove_Conclusao('Nódulo na fáscia plantar direito.')
          setConclusoesFrasesTornozelo(['Sinais de fascilíte plantar direito.'])
          setFrasesTornozelo([]);
          setEnableFibromatoseSelect(false);
          setFasciliteInput(false);
          setFibromatoseInput(true);
          setMedida1Fibro("");
          setMedida2Fibro("");
          setMedida3Fibro("");

          if (medidaFascilite != "") {
            setFrasesTornozelo((arr) => [
              ...arr,
              `Espessamento e hipoecogenicidade da fáscia plantar próximo à sua origem, medindo ${new Convert_Medida(
                medidaFascilite
              ).Convert_Medida()} cm, sem evidências de rotura.`,
            ]);
          }
        }
        break;
      case "Fibromatose":
        {
          new Format_Laudo(titulo_exame).Remove_Conclusao('Sinais de fascilíte plantar direito.')
          setConclusoesFrasesTornozelo(['Nódulo na fáscia plantar direito.'])
          setFrasesTornozelo([]);
          setEnableFibromatoseSelect(true);
          setFasciliteInput(true);
          setFibromatoseInput(false);

          if (
            medida1Fibro != "" &&
            medida2Fibro != "" &&
            medida3Fibro != "" &&
            valueSelect1 != ""
          ) {
            setFrasesTornozelo((arr) => [
              ...arr,
              `Nódulo hipoecogênico no interior da fáscia plantar, visível na região do ${valueSelect1}, medindo ${new Convert_Medida(
                medida1Fibro
              ).Convert_Medida()} x ${new Convert_Medida(
                medida2Fibro
              ).Convert_Medida()} x ${new Convert_Medida(
                medida3Fibro
              ).Convert_Medida()} cm.`,
            ]);
          }
        }
        break;
    }
  }, [
    value,
    valueSelect1,
    medida1Fibro,
    medida2Fibro,
    medida3Fibro,
    medidaFascilite,
  ]);

  useEffect(() => {
    Disable ? setValue("Normal") : setValue('1')
  }, [Disable])



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
          Fáscia Plantar
        </Text>
        <RadioGroup onChange={setValue} value={value} padding="10px">
          <Stack direction="column">
            <Radio value="1">Não citar</Radio>
            <Radio value="Normal">Normal</Radio>

            <HStack>
              <Flex flexWrap="wrap" gap={1}>
                <Radio value="Fascilite">
                  Fascilíte: Espessamento e hipoecogenicidade focal medindo
                </Radio>
                <Input
                  isDisabled={fasciliteInput}
                  w="35px"
                  h="30px"
                  value={medidaFascilite}
                  padding="5px"

                  textAlign="center"
                  onChange={(e) => {
                    setMedidaFascilite(e.target.value);
                  }}
                />
                <Text>mm</Text>
              </Flex>
            </HStack>
            <HStack>
              <Flex flexWrap="wrap" gap={1}>
                <Radio value="Fibromatose">Fibromatose: nódulo no</Radio>
                <Select
                  w="auto"
                  placeholder="Selecione Opção"
                  isDisabled={!enableFibromatoseSelect}
                  onChange={(e) => setValueSelect1(e.target.value)}
                >
                  <option value="cavo plantar">cavo plantar</option>
                  <option value="antepé">antepé</option>
                </Select>
                <Text>com</Text>
                <Input
                  isDisabled={fibromatoseInput}
                  w="35px"
                  h="30px"
                  value={medida1Fibro}
                  padding="5px"

                  textAlign="center"
                  onChange={(e) => {
                    setMedida1Fibro(e.target.value);
                  }}
                />
                <Text>x</Text>
                <Input
                  isDisabled={fibromatoseInput}
                  w="35px"
                  h="30px"
                  value={medida2Fibro}
                  padding="5px"

                  textAlign="center"
                  onChange={(e) => {
                    setMedida2Fibro(e.target.value);
                  }}
                />
                <Text>x</Text>
                <Input
                  isDisabled={fibromatoseInput}
                  w="35px"
                  h="30px"
                  value={medida3Fibro}
                  padding="5px"

                  textAlign="center"
                  onChange={(e) => {
                    setMedida3Fibro(e.target.value);
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
