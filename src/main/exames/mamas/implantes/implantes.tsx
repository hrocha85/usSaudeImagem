/* eslint-disable array-callback-return */

import { Box, Checkbox, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Implantes() {
  const altura = "100%";
  const largura = "66%";

  const [frasesIMP, setFrasesIMP] = useState<any>([]);

  const [checkboxPresenteSemAlteracoes, setCheckboxPresenteSemAlteracoes] =
    useState(true);
  const [
    disableCheckboxPresenteSemAlteracoes,
    setDisableCheckboxPresenteSemAlteracoes,
  ] = useState(false);

  const [checkboxDobradura, setCheckboxDobradura] = useState(false);
  const [disabledCheckboxDobradura, setDisabledCheckboxDobradura] =
    useState(false);
  const [disableSelectDobradura, setDisableSelectDobradura] = useState(true);
  const [valueSelectDobradura, setValueSelectDobradura] = useState("");

  const [checkboxRotura, setCheckboxRotura] = useState(false);
  const [disabledCheckboxRotura, setDisabledCheckboxRotura] = useState(false);
  const [disableSelectRotura, setDisableSelectRotura] = useState(true);
  const [valueSelectRotura, setValueSelectRotura] = useState("");

  const criaStringPresenteSemAlteracoes = () => {
    const string = `Presente sem alterações`;
    if (checkboxPresenteSemAlteracoes) {
      setDisabledCheckboxDobradura(true);
      setDisabledCheckboxRotura(true);
      setFrasesIMP((arr) => [...arr, string]);
    } else {
      setDisabledCheckboxDobradura(false);
      setDisabledCheckboxRotura(false);
      removeItemString(string);
    }
  };

  const removeItemString = (value) => {
    // console.log("valor remove = ", value);
    const index = frasesIMP.indexOf(value);
    //caso o valor enviado exista no array, vai remover com splice e setar array novamente
    if (index > -1) {
      frasesIMP.splice(index, 1);
      setFrasesIMP((arr) => [...arr]);
    }
  };

  const criaStringDobradura = () => {
    removeFraseDobradura();
    if (checkboxDobradura) {
      setDisableSelectDobradura(false);
      if (valueSelectDobradura !== "") {
        const string = `Dobradura ${valueSelectDobradura}`;
        setFrasesIMP((arr) => [...arr, string]);
      }
    } else {
      setDisableSelectDobradura(true);
      setValueSelectDobradura("");
    }
  };
  const removeFraseDobradura = () => {
    frasesIMP.map((e) => {
      if (e.includes("Dobradura")) {
        const index = frasesIMP.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesIMP.splice(index, 1);
          setFrasesIMP((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    criaStringDobradura();
  }, [valueSelectDobradura, checkboxDobradura]);

  const criaStringRotura = () => {
    removeFraseRotura();
    if (checkboxRotura) {
      console.log(valueSelectRotura);
      setDisableSelectRotura(false);
      if (valueSelectRotura !== "") {
        const string = `Rotura ${valueSelectRotura}`;
        setFrasesIMP((arr) => [...arr, string]);
      }
    } else {
      setDisableSelectRotura(true);
      setValueSelectRotura("");
    }
  };
  const removeFraseRotura = () => {
    frasesIMP.map((e) => {
      if (e.includes("Rotura ")) {
        const index = frasesIMP.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesIMP.splice(index, 1);
          setFrasesIMP((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    criaStringRotura();
  }, [valueSelectRotura, checkboxRotura]);

  useEffect(() => {
    if (checkboxRotura || checkboxDobradura) {
      setDisableCheckboxPresenteSemAlteracoes(true);
    } else {
      setDisableCheckboxPresenteSemAlteracoes(false);
    }
  }, [checkboxRotura, checkboxDobradura]);

  const subExame = "Implantes";
  const titulo_exame = "Mamas";

  useEffect(() => {
    if (Object.keys(frasesIMP).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesIMP
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesIMP
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesIMP]);

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
        <TituloNomeExame titulo="Implantes" />

        <Box gap="25px" display="flex" flexWrap="wrap" mb="10px">
          <Checkbox
            onChange={(e) => {
              setCheckboxPresenteSemAlteracoes(!checkboxPresenteSemAlteracoes);
              criaStringPresenteSemAlteracoes();
            }}
            isDisabled={disableCheckboxPresenteSemAlteracoes}
          >
            Presentes sem alterações
          </Checkbox>
          <Box display="flex">
            <Checkbox
              onChange={(e) => {
                setCheckboxDobradura(!checkboxDobradura);
              }}
              isDisabled={disabledCheckboxDobradura}
            >
              Dobradura
            </Checkbox>
            <Select
              w="150px"
              isDisabled={disableSelectDobradura}
              onChange={(e) => {
                setValueSelectDobradura(e.target.value);
              }}
              value={valueSelectDobradura}
            >
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="mama direita">Mama direita</option>
              <option value="mama esquerda">Mama esquerda</option>
              <option value="bilateral">bilateral</option>
            </Select>
          </Box>
          <Box display="flex">
            <Checkbox
              onChange={(e) => {
                setCheckboxRotura(!checkboxRotura);
              }}
              isDisabled={disabledCheckboxRotura}
            >
              Rotura
            </Checkbox>
            <Select
              w="150px"
              isDisabled={disableSelectRotura}
              onChange={(e) => {
                setValueSelectRotura(e.target.value);
              }}
              value={valueSelectRotura}
            >
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="mama direita">Mama direita</option>
              <option value="mama esquerda">Mama esquerda</option>
              <option value="bilateral">bilateral</option>
            </Select>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Implantes;
