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

export default function Tendao_Calcaneo_Esquerdo({ Disable }) {
  const [value, setValue] = useState("1");
  const [frasesTornozelo, setFrasesTornozelo] = useState<any>([]);
  const [ConclusoesFrasesTornozelo, setConclusoesFrasesTornozelo] = useState<any>([]);

  const [valueSelect1, setValueSelect1] = useState("");

  const [enableSelects, setEnableSelects] = useState<boolean>(false);

  const [disableCheckBox, setdisableCheckBox] = useState(false);

  const [disableInputs, setdisableInputs] = useState(true);

  const [valueCheckBox, setValueCheckBox] = useState(false);
  const [entesofitoCheckBox, setEntesofitoCheckBox] = useState(false);

  const [medida1Lesao, setMedida1Lesao] = useState("");
  const [medida2Lesao, setMedida2Lesao] = useState("");
  const [medida3Lesao, setMedida3Lesao] = useState("");

  const [medidaInsercao, setMedidaInsercao] = useState("");
  const [medidaIntervalo, setMedidaIntervalo] = useState("");

  const [medidaEntesofito, setMedidaEntesofito] = useState("");

  const subExame = "Tendão Calcâneo Esquerdo";
  const titulo_exame = "Articulações";

  const removeSelectString = () => {
    frasesTornozelo.map((e) => {
      if (e.includes("Derrame articular ")) {
        var index = frasesTornozelo.indexOf(e);

        if (index > -1) {
          frasesTornozelo.splice(index, 1);
          setFrasesTornozelo((arr) => [...arr]);
        }
      }
    });
    frasesTornozelo.map((e) => {
      if (e.includes("Ausência de derrame ")) {
        var index = frasesTornozelo.indexOf(e);

        if (index > -1) {
          frasesTornozelo.splice(index, 1);
          setFrasesTornozelo((arr) => [...arr]);
        }
      }
    });
  };

  const removeConclusoes = () => {
    ConclusoesFrasesTornozelo.map((e) => {
      if (e.includes("Sinais de tendinopatia do calcâneo")) {
        var index = ConclusoesFrasesTornozelo.indexOf(e);

        if (index > -1) {
          ConclusoesFrasesTornozelo.splice(index, 1);
          setConclusoesFrasesTornozelo((arr) => [...arr]);
        }
      }
    });
    ConclusoesFrasesTornozelo.map((e) => {
      if (e.includes("Entesófito na inserção do tendão calcâneo")) {
        var index = ConclusoesFrasesTornozelo.indexOf(e);

        if (index > -1) {
          ConclusoesFrasesTornozelo.splice(index, 1);
          setConclusoesFrasesTornozelo((arr) => [...arr]);
        }
      }
    });
  }

  useEffect(() => {
    switch (value) {
      case "1":
        {
          new Format_Laudo(titulo_exame).Remove_Conclusao('Sinais de tendinopatia do calcâneo esquerdo.')
          new Format_Laudo(titulo_exame).Remove_Conclusao('Sinais de tendinopatia do calcâneo com lesão parcial esquerdo.')
          new Format_Laudo(titulo_exame).Remove_Conclusao('Sinais de rotura completa do tendão calcâneo esquerdo.')
          new Format_Laudo(titulo_exame).Remove_Conclusao('Entesófito na inserção do tendão calcâneo esquerdo.')
          setFrasesTornozelo([]);
          setEnableSelects(false);
          setdisableCheckBox(false);
          setdisableInputs(true);
          setMedida1Lesao("");
          setMedida2Lesao("");
          setMedida3Lesao("");
          setMedidaInsercao("");
          setMedidaIntervalo("");
          setMedidaEntesofito("");
          setEntesofitoCheckBox(true);
        }
        break;
      case "Aspecto Normal":
        {
          new Format_Laudo(titulo_exame).Remove_Conclusao('Sinais de tendinopatia do calcâneo esquerdo.')
          new Format_Laudo(titulo_exame).Remove_Conclusao('Sinais de tendinopatia do calcâneo com lesão parcial esquerdo.')
          new Format_Laudo(titulo_exame).Remove_Conclusao('Sinais de rotura completa do tendão calcâneo esquerdo.')
          new Format_Laudo(titulo_exame).Remove_Conclusao('Entesófito na inserção do tendão calcâneo esquerdo.')
          setFrasesTornozelo([]);
          setdisableCheckBox(true);
          setdisableInputs(true);
          setMedida1Lesao("");
          setMedida2Lesao("");
          setMedida3Lesao("");
          setMedidaInsercao("");
          setMedidaIntervalo("");
          setMedidaEntesofito("");
          setEntesofitoCheckBox(true);
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
          const conclusao = 'Sinais de tendinopatia do calcâneo esquerdo.'
          new Format_Laudo(titulo_exame).Remove_Conclusao('Sinais de tendinopatia do calcâneo com lesão parcial esquerdo.')
          new Format_Laudo(titulo_exame).Remove_Conclusao('Sinais de rotura completa do tendão calcâneo esquerdo.')
          new Format_Laudo(titulo_exame).Remove_Conclusao('Entesófito na inserção do tendão calcâneo esquerdo.')
          setFrasesTornozelo([]);
          setEnableSelects(true);
          setdisableInputs(true);
          setMedida1Lesao("");
          setMedida2Lesao("");
          setMedida3Lesao("");
          setMedidaInsercao("");
          setMedidaIntervalo("");
          setMedidaEntesofito("");
          setEntesofitoCheckBox(true);

          if (valueSelect1 != "") {
            setConclusoesFrasesTornozelo([conclusao])
            setFrasesTornozelo((arr) => [
              ...arr,
              `Espessado, com alteração ecotextural, mas sem evidências de rotura, ${valueSelect1}`,
            ]);
          }
        }
        break;
      case "Lesão parcial medindo":
        {
          const conclusao = 'Sinais de tendinopatia do calcâneo com lesão parcial esquerdo.'
          new Format_Laudo(titulo_exame).Remove_Conclusao('Sinais de tendinopatia do calcâneo esquerdo.')
          new Format_Laudo(titulo_exame).Remove_Conclusao('Sinais de rotura completa do tendão calcâneo esquerdo.')
          new Format_Laudo(titulo_exame).Remove_Conclusao('Entesófito na inserção do tendão calcâneo esquerdo.')
          setFrasesTornozelo([]);
          setdisableInputs(false);
          setMedidaInsercao("");
          setMedidaIntervalo("");
          setMedidaEntesofito("");
          setEntesofitoCheckBox(true);

          if (medida1Lesao != "" && medida2Lesao != "" && medida3Lesao != "") {
            setConclusoesFrasesTornozelo([conclusao])
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
        break;
      case "Lesão completa": {
        new Format_Laudo(titulo_exame).Remove_Conclusao('Sinais de tendinopatia do calcâneo esquerdo.')
        new Format_Laudo(titulo_exame).Remove_Conclusao('Sinais de tendinopatia do calcâneo com lesão parcial esquerdo.')

        const conclusao = 'Sinais de rotura completa do tendão calcâneo esquerdo.'
        const entesofito = 'Entesófito na inserção do tendão calcâneo esquerdo.'

        setFrasesTornozelo([]);
        setdisableInputs(false);

        if (
          entesofitoCheckBox &&
          medidaInsercao != "" &&
          medidaIntervalo != "" &&
          medidaEntesofito != ""
        ) {
          setConclusoesFrasesTornozelo([conclusao])
          setConclusoesFrasesTornozelo((arr) => [...arr, entesofito])
          setFrasesTornozelo((arr) => [
            ...arr,
            `Lesão completa a ${new Convert_Medida(
              medidaInsercao
            ).Convert_Medida()} cm da inserção. ${new Convert_Medida(
              medidaIntervalo
            ).Convert_Medida()} cm de intervalo. Entesófito medindo ${new Convert_Medida(
              medidaEntesofito
            ).Convert_Medida()} cm`,
          ]);
        } else if (medidaInsercao != "" && medidaIntervalo != "") {
          new Format_Laudo(titulo_exame).Remove_Conclusao('Entesófito na inserção do tendão calcâneo esquerdo.')
          setConclusoesFrasesTornozelo([conclusao])
          setFrasesTornozelo((arr) => [
            ...arr,
            `Lesão completa a ${new Convert_Medida(
              medidaInsercao
            ).Convert_Medida()} cm da inserção. ${new Convert_Medida(
              medidaIntervalo
            ).Convert_Medida()} cm de intervalo`,
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
    medidaInsercao,
    medidaIntervalo,
    medidaEntesofito,
    entesofitoCheckBox,
  ]);

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
          Tendão Calcâneo{" "}
        </Text>
        <RadioGroup isDisabled={Disable} onChange={setValue} value={value} padding="10px">
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
          <HStack>
            <Radio value="Lesão completa">Lesão completa a </Radio>
            <HStack>
              <Flex flexWrap="wrap" gap={1}>
                <Input
                  isDisabled={disableInputs}
                  w="35px"
                  h="30px"
                  value={medidaInsercao}
                  padding="5px"
                  
                  textAlign="center"
                  onChange={(e) => {
                    setMedidaInsercao(e.target.value);
                  }}
                />
                <Text>mm da inserção</Text>
                <Input
                  isDisabled={disableInputs}
                  w="35px"
                  h="30px"
                  value={medidaIntervalo}
                  padding="5px"
                  
                  textAlign="center"
                  onChange={(e) => {
                    setMedidaIntervalo(e.target.value);
                  }}
                />
                <Text>mm de intervalo</Text>
              </Flex>
            </HStack>
          </HStack>
          <HStack>
            <Flex flexWrap="wrap" gap={1}>
              <Checkbox
                marginStart="20px"
                isDisabled={disableInputs}
                onChange={() => setEntesofitoCheckBox(!entesofitoCheckBox)}
              >
                entesófito medindo
              </Checkbox>
              <Input
                isDisabled={disableInputs}
                w="35px"
                h="30px"
                value={medidaEntesofito}
                padding="5px"
                
                textAlign="center"
                onChange={(e) => {
                  setMedidaEntesofito(e.target.value);
                }}
              />
              <Text>mm</Text>
            </Flex>
          </HStack>
        </RadioGroup>
      </Box>
    </Stack>
  );
}
