/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Axilas() {
  const altura = "100%";
  const largura = "95%";

  const [frasesAxilas, setFrasesAxilas] = useState<any>([]);

  const [checkboxAxilasLinfadenomegalia, setCheckboxAxilasLinfadenomegalia] =
    useState(false);
  const [
    disableSelectAxilasLinfadenomegalia,
    setDisableSelectAxilasLinfadenomegalia,
  ] = useState(true);
  const [
    valueSelectAxilasLinfadenomegalia,
    setValueSelectAxilasLinfadenomegalia,
  ] = useState("");

  const [checkboxAxilasaxilaAcessoria, setCheckboxAxilasaxilaAcessoria] =
    useState(false);

  const [
    disableSelectAxilasaxilaAcessoria,
    setDisableSelectAxilasaxilaAcessoria,
  ] = useState(true);
  const [valueSelectAxilasaxilaAcessoria, setValueSelectAxilasaxilaAcessoria] =
    useState("");

  const criaStringAxilasLinfadenomegalia = () => {
    removeFraseAxilasLinfadenomegalia();
    if (checkboxAxilasLinfadenomegalia) {
      console.log(valueSelectAxilasLinfadenomegalia);
      setDisableSelectAxilasLinfadenomegalia(false);
      if (valueSelectAxilasLinfadenomegalia !== "") {
        let string = `Linfadenomegalia ${valueSelectAxilasLinfadenomegalia}`;
        setFrasesAxilas((arr) => [...arr, string]);
      }
    } else {
      setDisableSelectAxilasLinfadenomegalia(true);
      setValueSelectAxilasLinfadenomegalia("");
    }
  };
  const removeFraseAxilasLinfadenomegalia = () => {
    frasesAxilas.map((e) => {
      if (e.includes("Linfadenomegalia")) {
        let index = frasesAxilas.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesAxilas.splice(index, 1);
          setFrasesAxilas((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    criaStringAxilasLinfadenomegalia();
  }, [valueSelectAxilasLinfadenomegalia, checkboxAxilasLinfadenomegalia]);

  const criaStringAxilasaxilaAcessoria = () => {
    removeFraseAxilasaxilaAcessoria();
    if (checkboxAxilasaxilaAcessoria) {
      console.log(valueSelectAxilasaxilaAcessoria);
      setDisableSelectAxilasaxilaAcessoria(false);
      if (valueSelectAxilasaxilaAcessoria !== "") {
        let string = `axila acessória  ${valueSelectAxilasaxilaAcessoria}`;
        setFrasesAxilas((arr) => [...arr, string]);
      }
    } else {
      setDisableSelectAxilasaxilaAcessoria(true);
      setValueSelectAxilasaxilaAcessoria("");
    }
  };
  const removeFraseAxilasaxilaAcessoria = () => {
    frasesAxilas.map((e) => {
      if (e.includes("axila acessória ")) {
        let index = frasesAxilas.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesAxilas.splice(index, 1);
          setFrasesAxilas((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    criaStringAxilasaxilaAcessoria();
  }, [valueSelectAxilasaxilaAcessoria, checkboxAxilasaxilaAcessoria]);

  const subExame = "Axilas";
  const titulo_exame = "Mamas";

  useEffect(() => {
    if (Object.keys(frasesAxilas).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesAxilas
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesAxilas
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesAxilas]);

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
        <TituloNomeExame titulo="Axilas" />

        <Box gap="25px" display="flex" flexWrap="wrap" mb="10px">
          <Box display="flex">
            <Checkbox
              onChange={(e) => {
                setCheckboxAxilasLinfadenomegalia(
                  !checkboxAxilasLinfadenomegalia
                );
              }}
            >
              Linfadenomegalia
            </Checkbox>
            <Select
              w="150px"
              isDisabled={disableSelectAxilasLinfadenomegalia}
              onChange={(e) => {
                setValueSelectAxilasLinfadenomegalia(e.target.value);
              }}
              value={valueSelectAxilasLinfadenomegalia}
            >
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="na axila direita">axila direita</option>
              <option value="na axila esquerda">axila esquerda</option>
              <option value="bilateral">bilateral</option>
            </Select>
          </Box>
          <Box display="flex">
            <Checkbox
              onChange={(e) => {
                setCheckboxAxilasaxilaAcessoria(!checkboxAxilasaxilaAcessoria);
              }}
            >
              axilaAcessoria
            </Checkbox>
            <Select
              w="150px"
              isDisabled={disableSelectAxilasaxilaAcessoria}
              onChange={(e) => {
                setValueSelectAxilasaxilaAcessoria(e.target.value);
              }}
              value={valueSelectAxilasaxilaAcessoria}
            >
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="na axila direita">axila direita</option>
              <option value="na axila esquerda">axila esquerda</option>
              <option value="bilateral">bilateral</option>
            </Select>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Axilas;
