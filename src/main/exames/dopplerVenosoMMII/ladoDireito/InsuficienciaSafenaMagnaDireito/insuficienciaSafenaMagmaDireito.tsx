/* eslint-disable array-callback-return */

import { Box, Checkbox, Select, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function InsuficienciaSafenaMangnaDireito() {
  const altura = "100%";
  const largura = "95%";

  const [frasesInsufSafena, setFrasesInsufSafena] = useState<any>([]);

  const [DisableSelect, setDisableSelect] = useState(true);

  const [DesdeSelect, setDesdeSelect] = useState("");
  const [LocalizacaoFinalSelect, setLocalizacaoFinalSelect] = useState("");
  const [DesdeCheckBox, setDesdeCheckBox] = useState(false);
  const [DisableDesdeCheckBox, setDisableDesdeCheckBox] = useState(false);

  const [DisableEmTodoTrajetoCheckBox, setDisableEmTodoTrajetoCheckBox] =
    useState(false);
  const [emTodoTrajetoCheckBox, setEmTodoTrajetoCheckBox] = useState(true);

  const removeDesde = () => {
    frasesInsufSafena.map((e) => {
      if (e.includes("Desde")) {
        const index = frasesInsufSafena.indexOf(e);

        if (index > -1) {
          frasesInsufSafena.splice(index, 1);
          setFrasesInsufSafena((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringDesde = (desdeSelect, localizado) => {
    removeDesde();
    let string;

    if (desdeSelect !== "" && localizado !== "") {
      string = `Desde ${desdeSelect} até ${localizado}`;
      setFrasesInsufSafena((arr) => [...arr, string]);
    } else {
      removeDesde();
    }
  };

  const criaStringEmTodoTrajeto = () => {
    const string = "Em todo o trajeto ";
    if (emTodoTrajetoCheckBox) {
      setFrasesInsufSafena((arr) => [...arr, string]);
      setEmTodoTrajetoCheckBox(false);
      setDisableDesdeCheckBox(true);
    } else {
      setDisableDesdeCheckBox(false);
      removeItemString(string);
    }
  };

  const removeItemString = (value) => {
    const index = frasesInsufSafena.indexOf(value);

    if (index > -1) {
      frasesInsufSafena.splice(index, 1);
      setFrasesInsufSafena((arr) => [...arr]);
    }
  };

  useEffect(() => {
    if (DesdeCheckBox) {
      criaStringDesde(DesdeSelect, LocalizacaoFinalSelect);
      setDisableEmTodoTrajetoCheckBox(true);
      setDisableSelect(false);
    } else {
      setDisableEmTodoTrajetoCheckBox(false);
      setDisableSelect(true);
      removeDesde();
      setDesdeSelect("");
      setLocalizacaoFinalSelect("");
    }
  }, [DesdeCheckBox, DesdeSelect, LocalizacaoFinalSelect]);

  const subExame = "Insuficiência Safena Magna Direita";
  const titulo_exame = "Doppler Venoso de MMII";

  useEffect(() => {
    if (Object.keys(frasesInsufSafena).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesInsufSafena
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesInsufSafena
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesInsufSafena]);

  return (
    <Box
      bg="#FAFAFA"
      w={largura}
      h={altura}
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="10.85px"
      boxShadow="md"
      padding="24px 15px 20px 15px"
      mt="15px"
    >
      <TituloNomeExame titulo="Insuficiência da safena magna" />
      <Stack>
        <Checkbox
          isDisabled={DisableEmTodoTrajetoCheckBox}
          onChange={() => {
            setEmTodoTrajetoCheckBox(true);
            criaStringEmTodoTrajeto();
          }}
        >
          Em todo o trajeto
        </Checkbox>
      </Stack>
      <Checkbox
        whiteSpace="nowrap"
        isDisabled={DisableDesdeCheckBox}
        onChange={() => setDesdeCheckBox(!DesdeCheckBox)}
      >
        Desde
      </Checkbox>
      <Box>
        <Select
          w="200px"
          isDisabled={DisableSelect}
          onChange={(e) => {
            setDesdeSelect(e.target.value);
          }}
          value={DesdeSelect}
        >
          <option value="" disabled selected>
            Posição inicial
          </option>
          <option value="a crossa">a crossa</option>
          <option value="o terço superior da coxa">
            o terço superior da coxa{" "}
          </option>
          <option value="o terço médio da coxa">o terço médio da coxa</option>
          <option value="o terço inferior da coxa">
            o terço inferior da coxa
          </option>
          <option value="a interlinha do joelho">a interlinha do joelho</option>
          <option value="o terço superior da perna">
            o terço superior da perna
          </option>
          <option value="o terço médio da perna">o terço médio da perna</option>
        </Select>
        <Text alignSelf="center">até</Text>
        <Select
          w="200px"
          isDisabled={DisableSelect}
          onChange={(e) => {
            setLocalizacaoFinalSelect(e.target.value);
          }}
          value={LocalizacaoFinalSelect}
        >
          <option value="" disabled selected>
            até
          </option>
          <option value="o terço superior da coxa">
            o terço superior da coxa
          </option>
          <option value="o terço médio da coxa">o terço médio da coxa</option>
          <option value="o terço inferior da coxa">
            o terço inferior da coxa
          </option>
          <option value="a interlinha do joelho">a interlinha do joelho</option>
          <option value="o terço superior da perna">
            o terço superior da perna
          </option>
          <option value="o terço médio da perna">o terço médio da perna</option>
          <option value="o terço inferior da perna">
            o terço inferior da perna
          </option>
          <option value="a face plantar">a face plantar</option>
        </Select>
      </Box>
    </Box>
  );
}
export default InsuficienciaSafenaMangnaDireito;
