/* eslint-disable array-callback-return */

import { Box, Checkbox, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Observacoes() {
  const altura = "100%";
  const largura = "66%";

  const [frasesOBS, setFrasesOBS] = useState<any>([]);

  const [semExameAnterior, setSemExameAnterior] = useState(true);

  const [checkboxNaoObservado, setCheckboxNaoObservado] = useState(false);
  const [disableSelectNaoObservado, setDisableSelectNaoObservado] =
    useState(true);
  const [valueSelectNaoObservado, setValueSelectNaoObservado] = useState("");

  const criaStringPresenteSemAlteracoes = () => {
    const string = `Sem exame anterior para comparação`;
    if (semExameAnterior) {
      setFrasesOBS((arr) => [...arr, string]);
    } else {
      removeItemString(string);
    }
  };

  const removeItemString = (value) => {
    // console.log("valor remove = ", value);
    const index = frasesOBS.indexOf(value);
    //caso o valor enviado exista no array, vai remover com splice e setar array novamente
    if (index > -1) {
      frasesOBS.splice(index, 1);
      setFrasesOBS((arr) => [...arr]);
    }
  };

  const criaStringNaoObservado = () => {
    removeFraseNaoObservado();
    if (checkboxNaoObservado) {
      setDisableSelectNaoObservado(false);
      if (valueSelectNaoObservado !== "") {
        const string = `Não foi visibilizado o nódulo na ${valueSelectNaoObservado} descrito no exame anterior. Sugerimos controle ultra-sonográfico.`;
        setFrasesOBS((arr) => [...arr, string]);
      }
    } else {
      setDisableSelectNaoObservado(true);
      setValueSelectNaoObservado("");
    }
  };
  const removeFraseNaoObservado = () => {
    frasesOBS.map((e) => {
      if (e.includes("Não foi visibilizado o nódulo")) {
        const index = frasesOBS.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesOBS.splice(index, 1);
          setFrasesOBS((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    criaStringNaoObservado();
  }, [valueSelectNaoObservado, checkboxNaoObservado]);

  const subExame = "Observações";
  const titulo_exame = "Mamas";

  useEffect(() => {
    if (Object.keys(frasesOBS).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesOBS
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesOBS
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesOBS]);
  return (
    <Box
      bg="#FAFAFA"
      w={largura}
      h={altura}
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="10.85px"
      boxShadow="md"
      padding="24px 15px 10px 15px"
      mt="20px"
    >
      <Box mb="20px">
        {/* <TituloNomeExame titulo="Observacoes" /> */}

        <Box gap="25px" display="flex" flexWrap="wrap" mb="10px">
          <Checkbox
            onChange={(e) => {
              setSemExameAnterior(!semExameAnterior);
              criaStringPresenteSemAlteracoes();
            }}
          >
            Sem exame anterior para comparação
          </Checkbox>
          {/* <Box display="flex" flexWrap="wrap">
            <Checkbox
              onChange={(e) => {
                setCheckboxNaoObservado(!checkboxNaoObservado);
              }}
            >
              Não observado nódulo descrito em exame anterior.
            </Checkbox>
            <Select
              w="150px"
              isDisabled={disableSelectNaoObservado}
              onChange={(e) => {
                setValueSelectNaoObservado(e.target.value);
              }}
              value={valueSelectNaoObservado}
            >
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="mama direita">Mama direita</option>
              <option value="mama esquerda">Mama esquerda</option>
            </Select>
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
}

export default Observacoes;
