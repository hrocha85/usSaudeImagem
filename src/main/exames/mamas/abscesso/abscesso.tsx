/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Input, Select, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Abscesso() {
  const altura = "100%";
  const largura = "95%";

  const [frasesAbcesso, setFrasesAbcesso] = useState<any>([]);

  const [checkboxAbscessoPresente, setCheckboxAbscessoPresente] =
    useState(false);
  const [disableAbscessoPresente, setDisableAbscessoPresente] = useState(true);
  const [
    valueSelectDistanciaAbscessoPresente,
    setValueSelectDistanciaAbscessoPresente,
  ] = useState("");
  const [
    valueSelectLocalAbscessoPresente,
    setValueSelectLocalAbscessoPresente,
  ] = useState("");
  const [
    valueInputTamanhoAbscessoPresente,
    setValueInputTamanhoAbscessoPresente,
  ] = useState("");
  const [
    valueInputTamanho2AbscessoPresente,
    setValueInputTamanho2AbscessoPresente,
  ] = useState("");

  const criaStringAbscessoPresente = () => {
    removeFraseAbscessoPresente();
    console.log("aqui");
    if (checkboxAbscessoPresente) {
      setDisableAbscessoPresente(false);
      if (
        valueSelectDistanciaAbscessoPresente !== "" &&
        valueSelectLocalAbscessoPresente !== "" &&
        valueInputTamanhoAbscessoPresente !== "" &&
        valueInputTamanho2AbscessoPresente !== ""
      ) {
        let string = `Abscesso presente ${valueSelectDistanciaAbscessoPresente}, na ${valueSelectLocalAbscessoPresente}
                distando ${valueInputTamanhoAbscessoPresente} x ${valueInputTamanho2AbscessoPresente} mm`;
        setFrasesAbcesso((arr) => [...arr, string]);
      }
    } else {
      setDisableAbscessoPresente(true);
      setValueSelectLocalAbscessoPresente("");
      setValueInputTamanhoAbscessoPresente("");
      setValueInputTamanho2AbscessoPresente("");
      setValueSelectDistanciaAbscessoPresente("");
    }
  };
  const removeFraseAbscessoPresente = () => {
    frasesAbcesso.map((e) => {
      if (e.includes("Abscesso presente ")) {
        let index = frasesAbcesso.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesAbcesso.splice(index, 1);
          setFrasesAbcesso((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    criaStringAbscessoPresente();
  }, [
    valueSelectDistanciaAbscessoPresente,
    checkboxAbscessoPresente,
    valueSelectLocalAbscessoPresente,
    valueInputTamanhoAbscessoPresente,
    valueInputTamanho2AbscessoPresente,
  ]);
//  const [frasesAbcesso, setFrasesAbcesso] = useState<any>([]);

  const subExame = "Abcesso";
  const titulo_exame = "Mamas";

  useEffect(() => {
    if (Object.keys(frasesAbcesso).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesAbcesso
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesAbcesso
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesAbcesso]);

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
        <TituloNomeExame titulo="Abscesso" />

        <Box gap="25px" display="flex" flexWrap="wrap" mb="10px">
          <Box gap="5px" display="flex" flexWrap="wrap">
            <Checkbox
              onChange={(e) => {
                setCheckboxAbscessoPresente(!checkboxAbscessoPresente);
              }}
            >
              Presente
            </Checkbox>
            <Select
              w="150px"
              isDisabled={disableAbscessoPresente}
              onChange={(e) => {
                setValueSelectDistanciaAbscessoPresente(e.target.value);
              }}
              value={valueSelectDistanciaAbscessoPresente}
            >
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="à 1 hora">à 1 hora</option>
              <option value="às 2 horas">às 2 horas</option>
              <option value="às 3 horas">às 3 horas</option>
              <option value="às 4 horas">às 4 horas</option>
              <option value="às 5 horas">às 5 horas</option>
              <option value="às 6 horas">às 6 horas</option>
              <option value="às 7 horas">às 7 horas</option>
              <option value="às 8 horas">às 8 horas</option>
              <option value="às 9 horas">às 9 horas</option>
              <option value="às 10 horas">às 10 horas</option>
              <option value="às 11 horas">às 11 horas</option>
              <option value="às 12 horas">às 12 horas</option>
              <option value="na região retropapilar">
                na região retropapilar
              </option>
            </Select>
            <Select
              w="150px"
              isDisabled={disableAbscessoPresente}
              onChange={(e) => {
                setValueSelectLocalAbscessoPresente(e.target.value);
              }}
              value={valueSelectLocalAbscessoPresente}
            >
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="mama direita">mama direita</option>
              <option value="mama esquerda">mama esquerda</option>
            </Select>
            <Text alignSelf="center">mede</Text>
            <Input
              value={valueInputTamanhoAbscessoPresente}
              isDisabled={disableAbscessoPresente}
              w="60px"
              h="77x"
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => {
                setValueInputTamanhoAbscessoPresente(e.target.value);
              }}
              placeholder={"mm"}
            />
            <Text alignSelf="center">x</Text>
            <Input
              value={valueInputTamanho2AbscessoPresente}
              isDisabled={disableAbscessoPresente}
              w="60px"
              h="77x"
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => {
                setValueInputTamanho2AbscessoPresente(e.target.value);
              }}
              placeholder={"mm"}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Abscesso;
