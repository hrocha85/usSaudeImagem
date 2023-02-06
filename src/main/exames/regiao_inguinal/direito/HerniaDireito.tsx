/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Radio, RadioGroup, Select, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function HerniaDireito() {
  const altura = "100%";
  const largura = "95%";

  const [FraseHerniaDireito, setFraseHerniaDireito] = useState<any>([]);

  const subExame = `Hernia Direita`
  const titulo_exame = 'Região Inguinal'

  useEffect(() => {
    if (Object.keys(FraseHerniaDireito).length === 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        FraseHerniaDireito
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        FraseHerniaDireito
      ).Format_Laudo_Create_Storage();
    }
  }, [FraseHerniaDireito]);

  const [value, setValue] = useState("1");
  const [enableSelects, setEnableSelects] = useState<boolean>(false);


  const [valueSelect1, setValueSelect1] = useState("");
  const [valueSelect2, setValueSelect2] = useState("");
  const [valueSelect3, setValueSelect3] = useState("");

  const removeSelectString = () => {
    FraseHerniaDireito.map((e) => {
      if (e.includes("Derrame Pleural ")) {
        var index = FraseHerniaDireito.indexOf(e);

        if (index > -1) {
          FraseHerniaDireito.splice(index, 1);
          setFraseHerniaDireito((arr) => [...arr]);
        }
      }
    });
    FraseHerniaDireito.map((e) => {
      if (e.includes("Ausência de derrame ")) {
        var index = FraseHerniaDireito.indexOf(e);

        if (index > -1) {
          FraseHerniaDireito.splice(index, 1);
          setFraseHerniaDireito((arr) => [...arr]);
        }
      }
    });
  };
  const removeSelectStringMobilidade = () => {
    FraseHerniaDireito.map((e) => {
      if (e.includes("Mobilidade da cúpula frênica ")) {
        var index = FraseHerniaDireito.indexOf(e);

        if (index > -1) {
          FraseHerniaDireito.splice(index, 1);
          setFraseHerniaDireito((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (value.includes("Derrame Pleural")) {
      setEnableSelects(true);
    } else {
      if (value == "1") {
        setFraseHerniaDireito([]);
        setEnableSelects(false);
      } else {
        setEnableSelects(false);
        setFraseHerniaDireito([]);
        setFraseHerniaDireito((arr) => [...arr, value]);
      }
    }
  }, [value]);

  useEffect(() => {
    var select = `Derrame Pleural ${valueSelect1} ${valueSelect2}`;
    var mobilidade =
      valueSelect3 != "1" ? `Mobilidade da cúpula frênica ${valueSelect3}` : "";

    if (valueSelect1 != "" && valueSelect2 != "") {
      removeSelectString();
      setFraseHerniaDireito((arr) => [...arr, select]);
    }

    if (valueSelect3 != "") {
      removeSelectStringMobilidade();
      setFraseHerniaDireito((arr) => [...arr, mobilidade]);
    }
  }, [valueSelect1, valueSelect2, valueSelect3]);



  return (
    <Box
      bg="#FAFAFA"
      w={largura}
      h={altura}
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="10.85px"
      boxShadow="md"
      padding="15px"
      mt="15px"
    >
      <TituloNomeExame titulo="Hérnia Direita" />
      <Stack>

        <RadioGroup onChange={setValue} value={value} padding="10px">
          <Stack direction="column">
            <Radio value="1">Não citar</Radio>
            <Radio value="Ausência de derrame pleural detectável.">
              Ausência de derrame pleural
            </Radio>
            <Box>
              <Radio value="Derrame Pleural">Derrame Pleural</Radio>
              <Stack direction="row">
                <Select
                  placeholder="Selecione Opção"
                  isDisabled={!enableSelects}
                  onChange={(e) => setValueSelect1(e.target.value)}
                >
                  <option value="laminar">laminar</option>
                  <option value="discreto">discreto</option>
                  <option value="pequeno">pequeno</option>
                  <option value="moderado">moderado</option>
                  <option value="volumoso">volumoso</option>
                </Select>
                <Select
                  placeholder="Selecione Opção"
                  isDisabled={!enableSelects}
                  onChange={(e) => setValueSelect2(e.target.value)}
                >
                  <option value="sem septos visíveis">
                    sem septos visíveis
                  </option>
                  <option value="septado">septado</option>
                </Select>
              </Stack>
              <Stack direction="row" marginTop="10px">
                <Text>Mobilidade da cúpula frênica: </Text>
                <Select
                  placeholder="Selecione Opção"
                  isDisabled={!enableSelects}
                  onChange={(e) => setValueSelect3(e.target.value)}
                >
                  <option value="1">não citar</option>
                  <option value="normal">normal</option>
                  <option value="diminuída">diminuída</option>
                  <option value="diminuída, com elevação diafragmática">
                    diminuída, com elevação diafragmática
                  </option>
                </Select>
              </Stack>
            </Box>
          </Stack>
        </RadioGroup>
      </Stack>
    </Box >
  );
}
export default HerniaDireito;
