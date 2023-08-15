
/* eslint-disable no-lone-blocks */
import {
  Box,
  Checkbox,
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

export default function Tendao_Fibular_Longo_Esquerdo({ Disable }) {
  const [value, setValue] = useState("1");
  const [frasesTornozelo, setFrasesTornozelo] = useState<any>([]);
  const [ConclusoesFrasesTornozelo, setConclusoesFrasesTornozelo] = useState<any>([]);

  const [valueSelect1, setValueSelect1] = useState("");

  const [enableSelects, setEnableSelects] = useState<boolean>(false);

  const [disableCheckBox, setdisableCheckBox] = useState(false);

  const [disableInputs, setdisableInputs] = useState(true);

  const [valueCheckBox, setValueCheckBox] = useState(false);
  const [medida1Lesao, setMedida1Lesao] = useState("");
  const [medida2Lesao, setMedida2Lesao] = useState("");
  const [medida3Lesao, setMedida3Lesao] = useState("");

  const subExame = "Tendão Fibular Longo Esquerdo";
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

  const removeConclusao = () => {
    ConclusoesFrasesTornozelo.map((e) => {
      if (e.includes("Sinais de tendinopatia do fibular longo")) {
        const index = ConclusoesFrasesTornozelo.indexOf(e);

        if (index > -1) {
          ConclusoesFrasesTornozelo.splice(index, 1);
          setConclusoesFrasesTornozelo((arr) => [...arr]);
          new Format_Laudo(titulo_exame).Remove_Conclusao_Select('Sinais de tendinopatia do fibular longo')
        }
      }
    });
  }

  useEffect(() => {
    switch (value) {
      case "1":
        {
          removeConclusao()
          setFrasesTornozelo([]);
          setEnableSelects(false);
          setdisableCheckBox(false);
          setdisableInputs(true);
          setMedida1Lesao("");
          setMedida2Lesao("");
          setMedida3Lesao("");
        }
        break;
      case "Aspecto Normal":
        {
          removeConclusao()
          setFrasesTornozelo([]);
          setdisableCheckBox(true);
          setdisableInputs(true);
          setMedida1Lesao("");
          setMedida2Lesao("");
          setMedida3Lesao("");
          setFrasesTornozelo(
            !valueCheckBox
              ? (arr) => [
                ...arr,
                "Com ecotextura e espessura preservadas e contornos normais.",
              ]
              : (arr) => [
                ...arr,
                `Com ecotextura e espessura preservadas e contornos normais, com líquido peritendíneo fisiológico`,
              ]
          );
        }
        break;
      case "Tendinopatia sem rotura":
        {
          const conclusao = 'Sinais de tendinopatia do fibular longo esquerdo.'
          removeConclusao()
          setFrasesTornozelo([]);
          setEnableSelects(true);
          setdisableInputs(true);
          setMedida1Lesao("");
          setMedida2Lesao("");
          setMedida3Lesao("");
          if (valueSelect1 != "") {
            setConclusoesFrasesTornozelo([conclusao])
            setFrasesTornozelo((arr) => [
              ...arr,
              `Espessado, com alteração ecotextural, mas sem evidências de rotura, ${valueSelect1}`,
            ]);
          }
        }
        break;
      case "Lesão parcial medindo": {
        const conclusao = 'Sinais de tendinopatia do fibular longo com lesão parcial esquerdo.'
        removeConclusao()
        setFrasesTornozelo([]);
        setdisableInputs(false);
        if (medida1Lesao != "" && medida2Lesao != "" && medida3Lesao != "") {
          setConclusoesFrasesTornozelo((arr) => [...arr, conclusao])
          setFrasesTornozelo((arr) => [
            ...arr,
            `Espessado, com alteração ecotextural, observando-se sinais de lesão parcial medindo ${new Convert_Medida(
              medida1Lesao
            ).Convert_Medida()}x${new Convert_Medida(
              medida2Lesao
            ).Convert_Medida()}x${new Convert_Medida(
              medida3Lesao
            ).Convert_Medida()} cm`,
          ]);
        }
      }
    }
  }, [
    value,
    valueCheckBox,
    valueSelect1,
    medida1Lesao,
    medida2Lesao,
    medida3Lesao,
  ]);

  useEffect(() => {
    Disable ? setValue("Aspecto Normal") : setValue('1')
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
          Tendão Fibular Longo{" "}
        </Text>
        <RadioGroup onChange={setValue} value={value} padding="10px">
          <Stack direction="column">
            <Radio value="1">Não citar</Radio>
            <HStack>
              <Flex flexWrap="wrap" gap={1}>
                <Radio value="Aspecto Normal">Aspecto Normal</Radio>
                <Checkbox
                  isDisabled={!disableCheckBox}
                  onChange={() => setValueCheckBox(!valueCheckBox)}
                >
                  com líquido peritendíneo fisiológico
                </Checkbox>
              </Flex>
            </HStack>
            <HStack>
              <Flex flexWrap="wrap" gap={1}>
                <Radio value="Tendinopatia sem rotura">
                  Tendinopatia sem rotura
                </Radio>
                <Select
                  placeholder="Selecione Opção"
                  isDisabled={!enableSelects}
                  onChange={(e) => setValueSelect1(e.target.value)}
                >
                  <option value="com líquido peritendíneo">
                    com líquido peritendíneo
                  </option>
                  <option value="sem líquido peritendíneo">
                    sem líquido peritendíneo
                  </option>
                </Select>
              </Flex>
            </HStack>
            <HStack>
              <Flex flexWrap="wrap" gap={1}>
                <Radio value="Lesão parcial medindo">
                  Lesão parcial medindo
                </Radio>
                <HStack>
                  <Input
                    isDisabled={disableInputs}
                    w="35px"
                    h="30px"
                    value={medida1Lesao}
                    padding="5px"

                    textAlign="center"
                    onChange={(e) => {
                      setMedida1Lesao(e.target.value);
                    }}
                  />
                  <Text>x</Text>
                  <Input
                    isDisabled={disableInputs}
                    w="35px"
                    h="30px"
                    value={medida2Lesao}
                    padding="5px"

                    textAlign="center"
                    onChange={(e) => {
                      setMedida2Lesao(e.target.value);
                    }}
                  />
                  <Text>x</Text>
                  <Input
                    isDisabled={disableInputs}
                    w="35px"
                    h="30px"
                    value={medida3Lesao}
                    padding="5px"

                    textAlign="center"
                    onChange={(e) => {
                      setMedida3Lesao(e.target.value);
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
