/* eslint-disable array-callback-return */

import { Box, Checkbox, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function MamaMasculina() {
  const altura = "100%";
  const largura = "66%";

  const [frasesMamaMasc, setFrasesMamaMasc] = useState<any>([]);

  const [checkboxNormal, setCheckboxNormal] = useState(true);
  const [disableCheckboxNormal, setDisableCheckboxNormal] = useState(false);

  const [checkboxGinecomastia, setCheckboxGinecomastia] = useState(false);
  const [disabledCheckboxGinecomastia, setDisabledCheckboxGinecomastia] =
    useState(false);
  const [disableSelectGinecomastia, setDisableSelectGinecomastia] =
    useState(true);
  const [valueSelectGinecomastia, setValueSelectGinecomastia] = useState("");

  const criaStringNormal = () => {
    const string = `Mama masculina normal`;
    if (checkboxNormal) {
      setDisabledCheckboxGinecomastia(true);
      setFrasesMamaMasc((arr) => [...arr, string]);
    } else {
      setDisabledCheckboxGinecomastia(false);
      removeItemString(string);
    }
  };

  const removeItemString = (value) => {
    // console.log("valor remove = ", value);
    const index = frasesMamaMasc.indexOf(value);
    //caso o valor enviado exista no array, vai remover com splice e setar array novamente
    if (index > -1) {
      frasesMamaMasc.splice(index, 1);
      setFrasesMamaMasc((arr) => [...arr]);
    }
  };

  const criaStringGinecomastia = () => {
    removeFraseGinecomastia();
    if (checkboxGinecomastia) {
      setDisableCheckboxNormal(true);
      setDisableSelectGinecomastia(false);
      if (valueSelectGinecomastia !== "") {
        const string = `Ginecomastia na ${valueSelectGinecomastia}`;
        setFrasesMamaMasc((arr) => [...arr, string]);
      }
    } else {
      setDisableCheckboxNormal(false);
      setDisableSelectGinecomastia(true);
      setValueSelectGinecomastia("");
    }
  };
  const removeFraseGinecomastia = () => {
    frasesMamaMasc.map((e) => {
      if (e.includes("Ginecomastia")) {
        const index = frasesMamaMasc.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesMamaMasc.splice(index, 1);
          setFrasesMamaMasc((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    criaStringGinecomastia();
  }, [valueSelectGinecomastia, checkboxGinecomastia]);

  const subExame = "Mama Masculina";
  const titulo_exame = "Mamas";

  useEffect(() => {
    if (Object.keys(frasesMamaMasc).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesMamaMasc
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesMamaMasc
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesMamaMasc]);

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
        <TituloNomeExame titulo="Mama Masculina" />

        <Box gap="25px" display="flex" flexWrap="wrap" mb="10px">
          <Checkbox
            onChange={(e) => {
              setCheckboxNormal(!checkboxNormal);
              criaStringNormal();
            }}
            isDisabled={disableCheckboxNormal}
          >
            Normal
          </Checkbox>
          <Box display="flex">
            <Checkbox
              onChange={(e) => {
                setCheckboxGinecomastia(!checkboxGinecomastia);
              }}
              isDisabled={disabledCheckboxGinecomastia}
            >
              Ginecomastia
            </Checkbox>
            <Select
              w="150px"
              isDisabled={disableSelectGinecomastia}
              onChange={(e) => {
                setValueSelectGinecomastia(e.target.value);
              }}
              value={valueSelectGinecomastia}
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

export default MamaMasculina;
