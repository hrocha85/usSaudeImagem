import { Box, Radio, RadioGroup, Select, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../component/function_format_laudo";

export default function Parenquima_Pulmonar_Direito({ Disable }) {
  const [value, setValue] = useState("1");
  const [frasesTorax, setFrasesTorax] = useState<any>([]);

  const [valueSelect, setValueSelect] = useState("");
  const [enableSelectConsolidacao, setEnableSelectConsolidacao] =
    useState<boolean>(false);

  const subExame = "Hemitórax Direito. Parênquima Pulmonar";
  const titulo_exame = "Partes Moles";

  const removeSelectString = () => {
    frasesTorax.map((e) => {
      if (e.includes("Consolidação com broncogramas ")) {
        const index = frasesTorax.indexOf(e);

        if (index > -1) {
          frasesTorax.splice(index, 1);
          setFrasesTorax((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (value == "enable") {
      setEnableSelectConsolidacao(true);
    } else {
      if (value == "1") {
        setFrasesTorax([]);
        setEnableSelectConsolidacao(false);
      } else {
        setFrasesTorax([]);
        setFrasesTorax((arr) => [...arr, value]);
        setEnableSelectConsolidacao(false);
      }
    }
  }, [value]);

  useEffect(() => {
    if (valueSelect != "") {
      removeSelectString();
      const select = `Consolidação com broncogramas ${valueSelect}`;
      setFrasesTorax((arr) => [...arr, select]);
    }
  }, [valueSelect]);

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
    <Stack marginBottom="10px">
      <Box borderWidth="2px" borderColor="blue.100" borderRadius="lg">
        <Text fontWeight="semibold" padding="10px">
          Parênquima Pulmonar
        </Text>
        <RadioGroup isDisabled={Disable} onChange={setValue} value={value} padding="10px">
          <Stack direction="column">
            <Radio value="1">Não citar</Radio>
            <Radio value="Normal nos segmentos acessíveis (Linhas A presentes, Linhas B raras/ausentes)">
              Normal nos segmentos acessíveis (Linhas A presentes, Linhas B
              raras/ausentes)
            </Radio>
            <Radio value="Presença de faixas verticais de reverberação (linhas B) delgadas e não confluentes, sugerindo redução moderada da aeração do parênquima, visíveis">
              Perda Moderada da aeração (Linhas B delgadas e bem definidas)
            </Radio>
            <Radio value="Presença de faixas verticais de reverberação (linhas B) espessas e  confluentes, sugerindo redução significativa da aeração do parênquima, visíveis">
              Perda Severa da aeração (Linhas B espessas e confluentes)
            </Radio>
            <Radio value="enable">Consolidação com broncogramas</Radio>
            <Select
              placeholder="Selecione Opção"
              isDisabled={!enableSelectConsolidacao}
              onChange={(e) => setValueSelect(e.target.value)}
            >
              <option value="com distribuição heterogênea difusa">
                com distribuição heterogênea difusa
              </option>
              <option value="na região anterior superior do hemitórax">
                na região anterior superior do hemitórax
              </option>
              <option value="na região anterior inferior do hemitórax">
                na região anterior inferior do hemitórax
              </option>
              <option value="na região lateral superior do hemitórax">
                na região lateral superior do hemitórax
              </option>
              <option value="na região lateral inferior do hemitórax">
                na região lateral inferior do hemitórax
              </option>
              <option value="na região posterior superior do hemitórax">
                na região posterior superior do hemitórax
              </option>
              <option value="na região posterior inferior do hemitórax">
                na região posterior inferior do hemitórax
              </option>
            </Select>
          </Stack>
        </RadioGroup>
      </Box>
    </Stack>
  );
}
