/* eslint-disable array-callback-return */

import { Box, Checkbox, Select, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";

function Extra() {
  const altura = "100%";
  let largura = "60%";
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
  isLargerThan600 ? largura = "57.5%": largura = "100%"

  const [frasesExtra, setFrasesExtra] = useState<any>([]);

  const [checkboxAlteracoes, setCheckboxAlteracoes] = useState(true);

  const [checkboxEcstasia, setCheckboxEcstasia] = useState(false);
  const [disableSelectEcstasia, setDisableSelectEcstasia] = useState(true);
  const [valueSelectEcstasia, setValueSelectEcstasia] = useState("");

  const criaStringAlteracoes = () => {
    const string = `Alterações funcionais benignas`;
    if (checkboxAlteracoes) {
      setFrasesExtra((arr) => [...arr, string]);
    } else {
      removeItemString(string);
    }
  };

  const removeItemString = (value) => {
    // console.log("valor remove = ", value);
    const index = frasesExtra.indexOf(value);
    //caso o valor enviado exista no array, vai remover com splice e setar array novamente
    if (index > -1) {
      frasesExtra.splice(index, 1);
      setFrasesExtra((arr) => [...arr]);
    }
  };

  const criaStringEcstasia = () => {
    removeFraseEcstasia();
    if (checkboxEcstasia) {
      setDisableSelectEcstasia(false);
      if (valueSelectEcstasia !== "") {
        const string = `Ecstasia Ductal na ${valueSelectEcstasia}`;
        setFrasesExtra((arr) => [...arr, string]);
      }
    } else {
      setDisableSelectEcstasia(true);
      setValueSelectEcstasia("");
    }
  };
  const removeFraseEcstasia = () => {
    frasesExtra.map((e) => {
      if (e.includes("Ecstasia")) {
        const index = frasesExtra.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesExtra.splice(index, 1);
          setFrasesExtra((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    criaStringEcstasia();
  }, [valueSelectEcstasia, checkboxEcstasia]);

  const subExame = "Extra";
  const titulo_exame = "Mamas";

  useEffect(() => {
    if (Object.keys(frasesExtra).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesExtra
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesExtra
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesExtra]);

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
      mt='20px'
    >
      <Checkbox
        onChange={(e) => {
          setCheckboxAlteracoes(!checkboxAlteracoes);
          criaStringAlteracoes();
        }}
      >
        Alterações funcionais benignas
      </Checkbox>
      <Box display="flex" mt="20px">
        <Checkbox
          onChange={(e) => {
            setCheckboxEcstasia(!checkboxEcstasia);
          }}
        >
          Ecstasia Ductal
        </Checkbox>
        <Select
          w="150px"
          isDisabled={disableSelectEcstasia}
          onChange={(e) => {
            setValueSelectEcstasia(e.target.value);
          }}
          value={valueSelectEcstasia}
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
  );
}

export default Extra;
