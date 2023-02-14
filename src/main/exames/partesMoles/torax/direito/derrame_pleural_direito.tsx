import { Box, Radio, RadioGroup, Select, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../component/function_format_laudo";

export default function Derrame_Pleural_Direito({ Disable }) {
  const [value, setValue] = useState("1");
  const [frasesTorax, setFrasesTorax] = useState<any>([]);

  const [valueSelect1, setValueSelect1] = useState("");
  const [valueSelect2, setValueSelect2] = useState("");
  const [valueSelect3, setValueSelect3] = useState("");

  const [enableSelects, setEnableSelects] = useState<boolean>(false);

  const subExame = "Hemitórax Direito. Parênquima Pulmonar";
  const titulo_exame = "Partes Moles";

  const removeSelectString = () => {
    frasesTorax.map((e) => {
      if (e.includes("Derrame Pleural ")) {
        var index = frasesTorax.indexOf(e);

        if (index > -1) {
          frasesTorax.splice(index, 1);
          setFrasesTorax((arr) => [...arr]);
        }
      }
    });
    frasesTorax.map((e) => {
      if (e.includes("Ausência de derrame ")) {
        var index = frasesTorax.indexOf(e);

        if (index > -1) {
          frasesTorax.splice(index, 1);
          setFrasesTorax((arr) => [...arr]);
        }
      }
    });
  };
  const removeSelectStringMobilidade = () => {
    frasesTorax.map((e) => {
      if (e.includes("Mobilidade da cúpula frênica ")) {
        var index = frasesTorax.indexOf(e);

        if (index > -1) {
          frasesTorax.splice(index, 1);
          setFrasesTorax((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (value.includes("Derrame Pleural")) {
      setEnableSelects(true);
    } else {
      if (value == "1") {
        setFrasesTorax([]);
        setEnableSelects(false);
      } else {
        setEnableSelects(false);
        setFrasesTorax([]);
        setFrasesTorax((arr) => [...arr, value]);
      }
    }
  }, [value]);

  useEffect(() => {
    var select = `Derrame Pleural ${valueSelect1} ${valueSelect2}`;
    var mobilidade =
      valueSelect3 != "1" ? `Mobilidade da cúpula frênica ${valueSelect3}` : "";

    if (valueSelect1 != "" && valueSelect2 != "") {
      removeSelectString();
      setFrasesTorax((arr) => [...arr, select]);
    }

    if (valueSelect3 != "") {
      removeSelectStringMobilidade();
      setFrasesTorax((arr) => [...arr, mobilidade]);
    }
  }, [valueSelect1, valueSelect2, valueSelect3]);

  useEffect(() => {
    if (Object.keys(frasesTorax).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesTorax
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesTorax
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesTorax]);

  return (
    <Stack>
      <Box borderWidth="2px" borderColor="blue.100" borderRadius="lg">
        <Text fontWeight="semibold" padding="10px">
          Derrame Pleural
        </Text>
        <RadioGroup isDisabled={Disable} onChange={setValue} value={value} padding="10px">
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
      </Box>
    </Stack>
  );
}
