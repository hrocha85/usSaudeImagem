/* eslint-disable array-callback-return */

import { Box, Checkbox, Select, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Cirurgia() {
  const altura = "100%";
  let largura = "60%";
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
  isLargerThan600 ? largura = "57.5%": largura = "100%"

  const [frasesCirurgia, setFrasesCirurgia] = useState<any>([]);

  const [checkboxCirurgiaMastectomia, setCheckboxCirurgiaMastectomia] =
    useState(false);
  const [
    disableSelectCirurgiaMastectomia,
    setDisableSelectCirurgiaMastectomia,
  ] = useState(true);
  const [valueSelectCirurgiaMastectomia, setValueSelectCirurgiaMastectomia] =
    useState("");

  const [checkboxCirurgiaQuadrantectomia, setCheckboxCirurgiaQuadrantectomia] =
    useState(false);

  const [
    disableSelectCirurgiaQuadrantectomia,
    setDisableSelectCirurgiaQuadrantectomia,
  ] = useState(true);
  const [
    valueSelectCirurgiaQuadrantectomia,
    setValueSelectCirurgiaQuadrantectomia,
  ] = useState("");

  const criaStringCirurgiaMastectomia = () => {
    if (checkboxCirurgiaMastectomia) {
      setDisableSelectCirurgiaMastectomia(false);
      if (valueSelectCirurgiaMastectomia !== "") {
        const string = `Mastectomia ${valueSelectCirurgiaMastectomia}`;
        setFrasesCirurgia((arr) => [...arr, string]);
      }
    } else {
      setDisableSelectCirurgiaMastectomia(true);
      setValueSelectCirurgiaMastectomia("");
    }
  };
  const removeFraseCirurgiaMastectomia = () => {
    frasesCirurgia.map((e) => {
      if (e.includes("Mastectomia")) {
        const index = frasesCirurgia.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesCirurgia.splice(index, 1);
          setFrasesCirurgia((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    criaStringCirurgiaMastectomia();
  }, [valueSelectCirurgiaMastectomia, checkboxCirurgiaMastectomia]);

  const criaStringCirurgiaQuadrantectomia = () => {
    removeFraseCirurgiaQuadrantectomia();
    if (checkboxCirurgiaQuadrantectomia) {
      setDisableSelectCirurgiaQuadrantectomia(false);
      if (valueSelectCirurgiaQuadrantectomia !== "") {
        const string = `Quadrantectomia  ${valueSelectCirurgiaQuadrantectomia}`;
        setFrasesCirurgia((arr) => [...arr, string]);
      }
    } else {
      setDisableSelectCirurgiaQuadrantectomia(true);
      setValueSelectCirurgiaQuadrantectomia("");
    }
  };
  const removeFraseCirurgiaQuadrantectomia = () => {
    frasesCirurgia.map((e) => {
      if (e.includes("Quadrantectomia ")) {
        const index = frasesCirurgia.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesCirurgia.splice(index, 1);
          setFrasesCirurgia((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    criaStringCirurgiaQuadrantectomia();
  }, [valueSelectCirurgiaQuadrantectomia, checkboxCirurgiaQuadrantectomia]);

  const subExame = "Cirurgia";
  const titulo_exame = "Mamas";

  useEffect(() => {
    if (Object.keys(frasesCirurgia).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesCirurgia
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesCirurgia
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesCirurgia]);

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
        <TituloNomeExame titulo="Cirurgia" />

        <Box gap="25px" display="flex" flexWrap="wrap" mb="10px">
          <Box display="flex">
            <Checkbox
              onChange={(e) => {
                setCheckboxCirurgiaMastectomia(!checkboxCirurgiaMastectomia);
              }}
            >
              Mastectomia
            </Checkbox>
            <Select
              w="150px"
              isDisabled={disableSelectCirurgiaMastectomia}
              onChange={(e) => {
                setValueSelectCirurgiaMastectomia(e.target.value);
              }}
              value={valueSelectCirurgiaMastectomia}
            >
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="mama direita">mama direita</option>
              <option value="mama esquerda">mama esquerda</option>
              <option value="bilateral">bilateral</option>
            </Select>
          </Box>
          <Box display="flex">
            <Checkbox
              onChange={(e) => {
                setCheckboxCirurgiaQuadrantectomia(
                  !checkboxCirurgiaQuadrantectomia
                );
              }}
            >
              Quadrantectomia
            </Checkbox>
            <Select
              w="150px"
              isDisabled={disableSelectCirurgiaQuadrantectomia}
              onChange={(e) => {
                setValueSelectCirurgiaQuadrantectomia(e.target.value);
              }}
              value={valueSelectCirurgiaQuadrantectomia}
            >
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="mama direita">mama direita</option>
              <option value="mama esquerda">mama esquerda</option>
              <option value="bilateral">bilateral</option>
            </Select>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Cirurgia;
