/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Select, Stack, Text, } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../../context/LuadosContext";
import { TornozeloDireitoNormalContext } from "../../../../../context/TornozeloDireitoNormalContext"
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function FibularesDireito() {
  const altura = "100%";
  const largura = "95%";

  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);
  let { TornozeloDireitoLaudoNormal } = useContext(TornozeloDireitoNormalContext)
  const [disableTudo, setDisableTudo] = useState(false)

  const [TenossinoviteCheckbox, setTenossinoviteCheckbox] = useState(true);
  const [RoturaCheckbox, setRoturaCheckbox] = useState(true);

  //Funcoes Padrao Micropolicistico - Inicio
  const criaStringTenossinovite = () => {
    var string = "Fibulares direito com Tenossinovite";
    if (TenossinoviteCheckbox) {
      setLaudoPrin((arr) => [...arr, string]);
      setTenossinoviteCheckbox(false);
    } else {
      removeItemString(string);
    }
  };
  const criaStringRotura = () => {
    var string = "Fibulares direito com Rotura";
    if (RoturaCheckbox) {
      setLaudoPrin((arr) => [...arr, string]);
      setRoturaCheckbox(false);
    } else {
      removeItemString(string);
    }
  };

  const removeItemString = (value) => {
    var index = laudoPrin.indexOf(value);

    if (index > -1) {
      laudoPrin.splice(index, 1);
      setLaudoPrin((arr) => [...arr]);
    }
  };

  useEffect(() => {
    TornozeloDireitoLaudoNormal ? setDisableTudo(true) : setDisableTudo(false)

  }, [TornozeloDireitoLaudoNormal])

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
      <TituloNomeExame titulo="Fibulares" />

      <Box display="flex" flexWrap="wrap">

      </Box>

      <Stack>

        <Checkbox
          isDisabled={disableTudo}
          onChange={() => {
            setTenossinoviteCheckbox(true);
            criaStringTenossinovite();
          }}
        >
          Tenossinovite
        </Checkbox>

        <Checkbox
          isDisabled={disableTudo}
          onChange={() => {
            setRoturaCheckbox(true);
            criaStringRotura();
          }}
        >Rotura
        </Checkbox>

      </Stack>
    </Box>

  );
}
export default FibularesDireito;