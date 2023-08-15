/* eslint-disable eqeqeq */

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

export default function Tendao_Tibial_Posterior_Direito({ Disable }) {
  const [value, setValue] = useState("1");
  const [frasesTornozelo, setFrasesTornozelo] = useState<any>([]);
  const [ConclusoesTornozelo, setConclusoesTornozelo] = useState<any>([]);

  const [valueSelect1, setValueSelect1] = useState("");
  const [valueSelectOsso, setValueSelectOsso] = useState("");

  const [enableSelects, setEnableSelects] = useState<boolean>(false);

  const [disableCheckBox, setdisableCheckBox] = useState(false);
  const [disableCheckBoxOsso, setdisableCheckBoxOsso] = useState(true);
  const [valueCheckBoxOsso, setValueCheckBoxOsso] = useState(false);

  const [disableInputs, setdisableInputs] = useState(true);

  const [valueCheckBox, setValueCheckBox] = useState(false);
  const [medida1Lesao, setMedida1Lesao] = useState("");
  const [medida2Lesao, setMedida2Lesao] = useState("");
  const [medida3Lesao, setMedida3Lesao] = useState("");

  const subExame = "Tendão Tibial Posterior Direito";
  const titulo_exame = "Articulações";

  const removeConclusao = () => {
    ConclusoesTornozelo.map((e) => {
      if (e.includes("Sinais de tendinopatia do tibial posterior direito")) {
        const index = ConclusoesTornozelo.indexOf(e);

        if (index > -1) {
          ConclusoesTornozelo.splice(index, 1);
          setConclusoesTornozelo((arr) => [...arr]);

          new Format_Laudo(titulo_exame).Remove_Conclusao_Select('Sinais de tendinopatia do tibial posterior direito')
        }
      }
    });
    ConclusoesTornozelo.map((e) => {
      if (e.includes("Osso navicular acessório")) {
        const index = ConclusoesTornozelo.indexOf(e);

        if (index > -1) {
          ConclusoesTornozelo.splice(index, 1);
          setConclusoesTornozelo((arr) => [...arr]);
          new Format_Laudo(titulo_exame).Remove_Conclusao_Select('Osso navicular acessório')
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
          setdisableCheckBoxOsso(true);
          setMedida1Lesao("");
          setMedida2Lesao("");
          setMedida3Lesao("");
          setValueSelectOsso("");
        }
        break;
      case "Aspecto Normal":
        {
          removeConclusao()
          setFrasesTornozelo([]);
          setdisableCheckBox(true);
          setdisableCheckBoxOsso(true);
          setdisableInputs(true);
          setMedida1Lesao("");
          setMedida2Lesao("");
          setMedida3Lesao("");
          setValueSelectOsso("");

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
          removeConclusao()
          const conclusao = 'Sinais de tendinopatia do tibial posterior direito.'
          setFrasesTornozelo([]);
          setdisableCheckBoxOsso(true);
          setEnableSelects(true);
          setdisableInputs(true);
          setMedida1Lesao("");
          setMedida2Lesao("");
          setMedida3Lesao("");
          setValueSelectOsso("");
          if (valueSelect1 != "") {
            setConclusoesTornozelo((arr) => [...arr, conclusao])
            setFrasesTornozelo((arr) => [
              ...arr,
              `Espessado, com alteração ecotextural, mas sem evidências de rotura, ${valueSelect1}`,
            ]);
          }
        }
        break;
      case "Lesão parcial medindo": {
        removeConclusao()
        const conclusao = 'Sinais de tendinopatia do tibial posterior direito com lesão parcial.'
        let conclusaoOssoNavicular = 'Osso navicular acessório'
        setdisableCheckBoxOsso(false);
        setFrasesTornozelo([]);
        setdisableInputs(false);
        if (
          medida1Lesao != "" &&
          medida2Lesao != "" &&
          medida3Lesao != "" &&
          valueSelectOsso != ""
        ) {
          conclusaoOssoNavicular = `${conclusaoOssoNavicular} ${valueSelectOsso}`;
          setConclusoesTornozelo((arr) => [...arr, conclusao])
          setConclusoesTornozelo((arr) => [...arr, conclusaoOssoNavicular])
          setFrasesTornozelo((arr) => [
            ...arr,
            `Espessado, com alteração ecotextural, observando-se sinais de lesão parcial medindo ${new Convert_Medida(
              medida1Lesao
            ).Convert_Medida()}x${new Convert_Medida(
              medida2Lesao
            ).Convert_Medida()}x${new Convert_Medida(
              medida3Lesao
            ).Convert_Medida()} cm. Com presença de osso navicular acessório de ${valueSelectOsso}`,
          ]);
        } else if (medida1Lesao != "" &&
          medida2Lesao != "" &&
          medida3Lesao != "") {
          setConclusoesTornozelo((arr) => [...arr, conclusao])
          setFrasesTornozelo((arr) => [
            ...arr,
            `Espessado, com alteração ecotextural, observando-se sinais de lesão parcial medindo ${new Convert_Medida(
              medida1Lesao
            ).Convert_Medida()}x${new Convert_Medida(
              medida2Lesao
            ).Convert_Medida()}x${new Convert_Medida(
              medida3Lesao
            ).Convert_Medida()} cm.`,
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
    valueCheckBoxOsso,
    valueSelectOsso,
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
        frasesTornozelo,
        ConclusoesTornozelo
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesTornozelo,
        ConclusoesTornozelo
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
          Tendão Tibial Posterior
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
            <HStack paddingStart="20px">
              <Flex flexWrap="wrap" gap={1}>
                <Checkbox
                  isDisabled={disableCheckBoxOsso}
                  onChange={() => setValueCheckBoxOsso(!valueCheckBoxOsso)}
                >
                  presença de osso navicular acessório
                </Checkbox>
                <Select
                  placeholder="Tipo"
                  isDisabled={!valueCheckBoxOsso}
                  onChange={(e) => setValueSelectOsso(e.target.value)}
                >
                  <option value="Tipo I">Tipo I</option>
                  <option value="Tipo II">Tipo II</option>
                </Select>
              </Flex>
            </HStack>
          </Stack>
        </RadioGroup>
      </Box>
    </Stack>
  );
}
