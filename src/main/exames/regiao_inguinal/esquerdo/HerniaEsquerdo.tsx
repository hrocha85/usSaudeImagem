/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Radio, RadioGroup, Select, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function HerniaEsquerdo() {
  const altura = "100%";
  const largura = "95%";

  const [FraseHerniaEsquerdo, setFraseHerniaEsquerdo] = useState<any>([]);

  const subExame = `Hernia Esquerda`
  const titulo_exame = 'Região Inguinal'

  useEffect(() => {
    if (Object.keys(FraseHerniaEsquerdo).length === 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        FraseHerniaEsquerdo
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        FraseHerniaEsquerdo
      ).Format_Laudo_Create_Storage();
    }
  }, [FraseHerniaEsquerdo]);

  const [value, setValue] = useState("1");
  const [enableSelects, setEnableSelects] = useState<boolean>(false);


  const [valueSelect1, setValueSelect1] = useState("");
  const [valueSelect2, setValueSelect2] = useState("");
  const [valueSelect3, setValueSelect3] = useState('1');

  const removeSelectString = () => {
    FraseHerniaEsquerdo.map((e) => {
      if (e.includes("Derrame Pleural ")) {
        var index = FraseHerniaEsquerdo.indexOf(e);

        if (index > -1) {
          FraseHerniaEsquerdo.splice(index, 1);
          setFraseHerniaEsquerdo((arr) => [...arr]);
        }
      }
    });
    FraseHerniaEsquerdo.map((e) => {
      if (e.includes("Ausência de derrame ")) {
        var index = FraseHerniaEsquerdo.indexOf(e);

        if (index > -1) {
          FraseHerniaEsquerdo.splice(index, 1);
          setFraseHerniaEsquerdo((arr) => [...arr]);
        }
      }
    });
  };
  const removeSelectStringMobilidade = () => {
    FraseHerniaEsquerdo.map((e) => {
      if (e.includes("Mobilidade da cúpula frênica ")) {
        var index = FraseHerniaEsquerdo.indexOf(e);

        if (index > -1) {
          FraseHerniaEsquerdo.splice(index, 1);
          setFraseHerniaEsquerdo((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (value.includes("Derrame Pleural")) {
      setEnableSelects(true);
    } else {
      setValueSelect1("")
      setValueSelect2("")
      setValueSelect3("1")
      if (value == "1") {
        setFraseHerniaEsquerdo([]);
        setEnableSelects(false);
      } else {
        setEnableSelects(false);
        setFraseHerniaEsquerdo([]);
        setFraseHerniaEsquerdo((arr) => [...arr, value]);
      }
    }
  }, [value]);

  useEffect(() => {
    var select = `Derrame Pleural ${valueSelect1} ${valueSelect2}`;
    var mobilidade =
      valueSelect3 != "1" ? `Mobilidade da cúpula frênica ${valueSelect3}` : "";

    if (valueSelect1 != "" && valueSelect2 != "") {
      removeSelectString();
      setFraseHerniaEsquerdo((arr) => [...arr, select]);
    }

    if (valueSelect3 != "") {
      removeSelectStringMobilidade();
      setFraseHerniaEsquerdo((arr) => [...arr, mobilidade]);
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
      <TituloNomeExame titulo="Hérnia Esquerda" />
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
                  isDisabled={!enableSelects}
                  value={valueSelect1}
                  onChange={(e) => setValueSelect1(e.target.value)}
                >
                  <option selected disabled value="">Selecione</option>
                  <option value="laminar">laminar</option>
                  <option value="discreto">discreto</option>
                  <option value="pequeno">pequeno</option>
                  <option value="moderado">moderado</option>
                  <option value="volumoso">volumoso</option>
                </Select>
                <Select
                  value={valueSelect2}
                  isDisabled={!enableSelects}
                  onChange={(e) => setValueSelect2(e.target.value)}
                >
                  <option selected disabled value="">Selecione</option>
                  <option value="sem septos visíveis">
                    sem septos visíveis
                  </option>
                  <option value="septado">septado</option>
                </Select>
              </Stack>
              <Stack direction="row" marginTop="10px">
                <Text>Mobilidade da cúpula frênica: </Text>
                <Select
                  value={valueSelect3}
                  isDisabled={!enableSelects}
                  onChange={(e) => setValueSelect3(e.target.value)}
                >
                  <option selected disabled value="1">Selecione</option>
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
export default HerniaEsquerdo;
