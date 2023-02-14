import {
  Box,
  Checkbox,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../component/function_format_laudo";

export default function Derrame_Articular_Esquerdo({ Disable }) {
  const altura = "100%";
  const largura = "100%";

  const [value, setValue] = useState("1");
  const [frasesTornozelo, setFrasesTornozelo] = useState<any>([]);

  const [valueSelect1, setValueSelect1] = useState("");

  const [enableSelects, setEnableSelects] = useState<boolean>(false);

  const [disableCheckBox, setdisableCheckBox] = useState(false);

  const [valueCheckBox, setValueCheckBox] = useState(false);

  const subExame = "Derrame Articular Esquerdo";
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

  useEffect(() => {
    if (value.includes("Derrame articular")) {
      setEnableSelects(true);
    } else {
      if (value == "1") {
        setFrasesTornozelo([]);
        setEnableSelects(false);
        setdisableCheckBox(false);
      } else {
        setdisableCheckBox(false);
        setEnableSelects(false);
        setFrasesTornozelo([]);
        setFrasesTornozelo((arr) => [...arr, value]);
      }
    }
  }, [value]);

  useEffect(() => {
    var select = `Derrame articular ${valueSelect1} `;
    var select_checkbox = `Derrame articular ${valueSelect1} com espessamento sinovial`;

    if (valueSelect1 != "") {
      removeSelectString();
      setFrasesTornozelo(
        valueCheckBox
          ? (arr) => [...arr, select_checkbox]
          : (arr) => [...arr, select]
      );
      setdisableCheckBox(true);
    }
  }, [valueSelect1, valueCheckBox]);

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
          Derrame articular
        </Text>
        <RadioGroup isDisabled={Disable} onChange={setValue} value={value} padding="10px">
          <Stack direction="column">
            <Radio value="1">Não citar</Radio>
            <Radio value="Ausência de derrame articular detectável.">
              Ausência de derrame articular
            </Radio>
            <Box>
              <Stack direction="row">
                <Radio value="Derrame articular">Derrame articular</Radio>

                <Select
                  w="200px"
                  placeholder="Selecione Opção"
                  isDisabled={!enableSelects}
                  onChange={(e) => setValueSelect1(e.target.value)}
                >
                  <option value="no recesso tibiotalar anterior">
                    no recesso tibiotalar anterior
                  </option>
                  <option value="no recesso tibiotalar posterior">
                    no recesso tibiotalar posterior
                  </option>
                  <option value="nos recessos tibiotalares anterior e posterior">
                    nos recessos tibiotalares anterior e posterior
                  </option>
                </Select>
              </Stack>
              <Checkbox

                isDisabled={!disableCheckBox}
                onChange={() => setValueCheckBox(!valueCheckBox)}
              >
                com espessamento sinovial
              </Checkbox>
            </Box>
          </Stack>
        </RadioGroup>
      </Box>
    </Stack>
  );
}
