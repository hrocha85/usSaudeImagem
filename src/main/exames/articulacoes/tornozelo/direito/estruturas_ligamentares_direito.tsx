import {
  Box,
  Flex,
  HStack,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../component/function_format_laudo";

export default function Estruturas_Ligamentares_Direito({ Disable }) {
  const [value, setValue] = useState("1");
  const [frasesTornozelo, setFrasesTornozelo] = useState<any>([]);

  const [valueSelect1, setValueSelect1] = useState("");
  const [valueSelect2, setValueSelect2] = useState("");
  const [valueSelect3, setValueSelect3] = useState("");

  const [enableSelects1, setEnableSelects1] = useState<boolean>(false);
  const [enableSelects2, setEnableSelects2] = useState<boolean>(false);
  const [enableSelects3, setEnableSelects3] = useState<boolean>(false);

  const subExame = "Estruturas Ligamentares Direito";
  const titulo_exame = "Articulações";

  useEffect(() => {
    switch (value) {
      case "1":
        {
          setFrasesTornozelo([]);
          setEnableSelects1(false);
          setEnableSelects2(false);
          setEnableSelects3(false);
        }
        break;
      case "Normais":
        {
          setFrasesTornozelo([]);
          setEnableSelects1(false);
          setEnableSelects2(false);
          setEnableSelects3(false);

          setFrasesTornozelo((arr) => [
            ...arr,
            "Ligamentos talofibular anterior, calcaneofibular e deltoide íntegros.",
          ]);
        }
        break;
      case "Parcial Talofibular":
        {
          setFrasesTornozelo([]);
          setEnableSelects1(false);
          setEnableSelects2(false);
          setEnableSelects3(false);

          setFrasesTornozelo((arr) => [
            ...arr,
            `Sinais de rotura parcial do ligamento talofibular anterior, caracterizados por espessamento e hipoecogenicidade ligamentar.`,
          ]);
        }
        break;
      case "Completa Talofibular":
        {
          setFrasesTornozelo([]);
          setEnableSelects1(true);
          setEnableSelects2(false);
          setEnableSelects3(false);

          if (valueSelect1 != "") {
            setFrasesTornozelo((arr) => [
              ...arr,
              `Sinais de rotura completa do ligamento talofibular anterior, ${valueSelect1}`,
            ]);
          }
        }
        break;
      case "Parcial Tibiofibular":
        {
          setFrasesTornozelo([]);
          setEnableSelects1(false);
          setEnableSelects2(false);
          setEnableSelects3(false);

          setFrasesTornozelo((arr) => [
            ...arr,
            `Sinais de rotura parcial do ligamento tibiofibular anterior, caracterizados por espessamento e hipoecogenicidade ligamentar.`,
          ]);
        }
        break;
      case "Completa Tibiofibular":
        {
          setFrasesTornozelo([]);
          setEnableSelects2(true);
          setEnableSelects1(false);
          setEnableSelects3(false);

          if (valueSelect2 != "") {
            setFrasesTornozelo((arr) => [
              ...arr,
              `Sinais de rotura completa do ligamento tibiofibular anterior, ${valueSelect2}`,
            ]);
          }
        }
        break;
      case "Parcial Calcaneofibular":
        {
          setFrasesTornozelo([]);
          setEnableSelects1(false);
          setEnableSelects2(false);
          setEnableSelects3(false);

          setFrasesTornozelo((arr) => [
            ...arr,
            `Sinais de rotura parcial do ligamento calcaneofibular, caracterizados por espessamento e hipoecogenicidade ligamentar.`,
          ]);
        }
        break;
      case "Completa Calcaneofibular":
        {
          setFrasesTornozelo([]);
          setEnableSelects3(true);
          setEnableSelects1(false);
          setEnableSelects2(false);

          if (valueSelect3 != "") {
            setFrasesTornozelo((arr) => [
              ...arr,
              `Sinais de rotura completa do ligamento calcaneofibular, ${valueSelect3}`,
            ]);
          }
        }
        break;
    }
  }, [value, valueSelect1, valueSelect2, valueSelect3]);

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
          Estruturas Ligamentares{" "}
        </Text>
        <RadioGroup isDisabled={Disable} onChange={setValue} value={value} padding="10px">

          <Stack direction="column">
            <Flex flexWrap='wrap' gap={1}>

              <Radio value="1">Não citar</Radio>
              <HStack>
                <Radio value="Normais">Normais</Radio>
              </HStack>
              <HStack>
                <Radio value="Parcial Talofibular">
                  Sinais de lesão parcial do talofibular anterior
                </Radio>
              </HStack>
              <HStack>
                <Radio value="Completa Talofibular">
                  Sinais de lesão completa do talofibular anterior
                </Radio>
                <Select
                  placeholder="Selecione Opção"
                  isDisabled={!enableSelects1}
                  onChange={(e) => setValueSelect1(e.target.value)}
                >
                  <option value="com líquido periligamentar">
                    com líquido periligamentar
                  </option>
                  <option value="sem líquido periligamentar">
                    sem líquido periligamentar
                  </option>
                </Select>
              </HStack>
              <Radio value="Parcial Tibiofibular">
                Sinais de lesão parcial do tibiofibular anterior
              </Radio>
              <HStack>
                <Radio value="Completa Tibiofibular">
                  Sinais de lesão completa do tibiofibular anterior
                </Radio>
                <Select
                  placeholder="Selecione Opção"
                  isDisabled={!enableSelects2}
                  onChange={(e) => setValueSelect2(e.target.value)}
                >
                  <option value="com líquido periligamentar">
                    com líquido periligamentar
                  </option>
                  <option value="sem líquido periligamentar">
                    sem líquido periligamentar
                  </option>
                </Select>
              </HStack>
              <Radio value="Parcial Calcaneofibular">
                Sinais de lesão parcial do calcaneofibular
              </Radio>
              <HStack>
                <Radio value="Completa Calcaneofibular">
                  Sinais de lesão completa do calcaneofibular
                </Radio>
                <Select
                  placeholder="Selecione Opção"
                  isDisabled={!enableSelects3}
                  onChange={(e) => setValueSelect3(e.target.value)}
                >
                  <option value="com líquido periligamentar">
                    com líquido periligamentar
                  </option>
                  <option value="sem líquido periligamentar">
                    sem líquido periligamentar
                  </option>
                </Select>
              </HStack>
            </Flex>
          </Stack>
        </RadioGroup>
      </Box>
    </Stack>
  );
}
