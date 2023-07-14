/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Radio, RadioGroup, Select, Stack, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { DerramePleuralDireitaContext } from "../../../../../context/DerramePleuralDireitaContext";
import { DerramePleuralEsquerdaContext } from "../../../../../context/DerramePleuralEsquerdaContext";
import { Format_Laudo } from "../../../../component/function_format_laudo";

export default function Derrame_Pleural_Direito({ Disable }) {
  const [value, setValue] = useState("1");
  const [frasesTorax, setFrasesTorax] = useState<any>([]);
  const [ConclusaoTorax, setConclusaoTorax] = useState<any>([]);

  const [valueSelect1, setValueSelect1] = useState("");
  const [valueSelect2, setValueSelect2] = useState("");
  const [valueSelect3, setValueSelect3] = useState("");

  const { DerramePleuralDireita, setDerramePleuralDireita } = useContext(DerramePleuralDireitaContext)
  const { DerramePleuralEsquerda } = useContext(DerramePleuralEsquerdaContext)

  const [enableSelects, setEnableSelects] = useState<boolean>(false);

  const subExame = "Hemitórax Direito. Parênquima Pulmonar";
  const titulo_exame = "Torax";

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

  const removeSelectConclusao = () => {
    ConclusaoTorax.map((e) => {
      if (e.includes("Derrame pleural")) {
        var index = ConclusaoTorax.indexOf(e);

        if (index > -1) {
          ConclusaoTorax.splice(index, 1);
          setConclusaoTorax((arr) => [...arr]);
          new Format_Laudo(titulo_exame).Remove_Conclusao_Select('Derrame pleural');
        }
      }

    });
  }
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
      setDerramePleuralDireita(true)
    } else {
      setDerramePleuralDireita(false)
      removeSelectConclusao()
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
    Disable ? setValue('Ausência de derrame pleural detectável.') : setValue('1')
  }, [Disable])

  useEffect(() => {
    removeSelectConclusao()
    var conclusao = 'Derrame pleural direita.'
    var conclusaoBilateral = 'Derrame pleural Bilateral.'
    var select = `Derrame Pleural ${valueSelect1} ${valueSelect2}`;
    var mobilidade = valueSelect3 != "1" ? `Mobilidade da cúpula frênica ${valueSelect3}` : "";
    if (valueSelect1 != "" && valueSelect2 != "") {
      if (DerramePleuralEsquerda) {
        setConclusaoTorax((arr) => [...arr, conclusaoBilateral]);
      } else {
        setConclusaoTorax((arr) => [...arr, conclusao]);
      }
      removeSelectString();
      setFrasesTorax((arr) => [...arr, select]);
    }

    if (valueSelect3 != "") {
      removeSelectStringMobilidade();
      setFrasesTorax((arr) => [...arr, mobilidade]);
    }
  }, [DerramePleuralEsquerda, valueSelect1, valueSelect2, valueSelect3]);

  useEffect(() => {
    if (Object.keys(frasesTorax).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesTorax,
        ConclusaoTorax
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesTorax,
        ConclusaoTorax
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesTorax, ConclusaoTorax]);

  return (
    <Stack>
      <Box borderWidth="2px" borderColor="blue.100" borderRadius="lg">
        <Text fontWeight="semibold" padding="10px">
          Derrame Pleural
        </Text>
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
      </Box>
    </Stack>
  );
}
