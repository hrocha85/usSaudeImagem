/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Select, Stack, Text, } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../../context/LuadosContext";
import { OmbroEsquerdoNormalContext } from "../../../../../context/OmbroEsquerdoNormalContext";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function TendaoLongoBicepsOmbroEsquerdo() {
  const altura = "100%";
  const largura = "95%";

  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);
  let { OmbroEsquerdoLaudoNormal } = useContext(OmbroEsquerdoNormalContext)
  const [disableTudo, setDisableTudo] = useState(false)

  //States Tendinite - input,checkbox e select - Inicio

  const [TenossinoviteCheckBox, setTenossinoviteCheckBox] = useState(true);
  const [LuxacaoCheckBox, setLuxacaoCheckBox] = useState(true);

  //Funcoes Padrao Micropolicistico - Inicio
  const criaStringTenossinovite = () => {
    var string = "Ombro Esquerdo com Tenossinovite";
    if (TenossinoviteCheckBox) {
      setLaudoPrin((arr) => [...arr, string]);
      setTenossinoviteCheckBox(false);
    } else {
      removeItemString(string);
    }
  };
  const criaStringLuxacao = () => {
    var string = "Ombro Esquerdo com Luxação";
    if (LuxacaoCheckBox) {
      setLaudoPrin((arr) => [...arr, string]);
      setLuxacaoCheckBox(false);
    } else {
      removeItemString(string);
    }
  };
  //Funcoes Padrao Micropolicistico - Fim

  const removeItemString = (value) => {
    var index = laudoPrin.indexOf(value);

    if (index > -1) {
      laudoPrin.splice(index, 1);
      setLaudoPrin((arr) => [...arr]);
    }
  };

  useEffect(() => {
    OmbroEsquerdoLaudoNormal ? setDisableTudo(true) : setDisableTudo(false)

  }, [OmbroEsquerdoLaudoNormal])



  return (
    <Box
      bg="#FAFAFA"
      w={largura}
      h={altura}
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="10.85px"
      boxShadow="md"
      padding="15px"
      mt="15px"
    >
      <TituloNomeExame titulo="Tendão longo do biceps" />

      <HStack gap='10px'>

        <Checkbox isDisabled={disableTudo}
          onChange={() => {
            setTenossinoviteCheckBox(true);
            criaStringTenossinovite();
          }}
        >
          Tenossinovite
        </Checkbox>

        <Checkbox isDisabled={disableTudo}
          onChange={() => {
            setLuxacaoCheckBox(true);
            criaStringLuxacao();
          }}
        >
          Luxação
        </Checkbox>
      </HStack>
    </Box>

  );
}
export default TendaoLongoBicepsOmbroEsquerdo;
