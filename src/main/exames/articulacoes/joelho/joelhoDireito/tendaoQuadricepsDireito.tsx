/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Select, Stack, Text, } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../../context/LuadosContext";
import { JoelhoDireitoNormalContext } from "../../../../../context/JoelhoDireitoNormalContext"
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function TendaoQuadricepsDireito() {
  const altura = "100%";
  const largura = "95%";

  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);
  let { JoelhoDireitoLaudoNormal } = useContext(JoelhoDireitoNormalContext)
  const [disableTudo, setDisableTudo] = useState(false)

  const [TendiniteCheckbox, setTendiniteCheckbox] = useState(true);
  const [TendinoseCheckbox, setTendinoseCheckbox] = useState(true);

  //Funcoes Padrao Micropolicistico - Inicio
  const criaStringTendinite = () => {
    var string = "TendaoQuadriceps direito com Tendinite";
    if (TendiniteCheckbox) {
      setLaudoPrin((arr) => [...arr, string]);
      setTendiniteCheckbox(false);
    } else {
      removeItemString(string);
    }
  };
  const criaStringTendinose = () => {
    var string = "TendaoQuadriceps direito com Tendinose";
    if (TendinoseCheckbox) {
      setLaudoPrin((arr) => [...arr, string]);
      setTendinoseCheckbox(false);
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
    JoelhoDireitoLaudoNormal ? setDisableTudo(true) : setDisableTudo(false)

  }, [JoelhoDireitoLaudoNormal])

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
      <TituloNomeExame titulo="Tendão quadriceps" />

      <Box display="flex" flexWrap="wrap">

      </Box>

      <Stack>

        <Checkbox
          isDisabled={disableTudo}
          onChange={() => {
            setTendiniteCheckbox(true);
            criaStringTendinite();
          }}
        >
          Tendinite
        </Checkbox>

        <Checkbox
          isDisabled={disableTudo}
          onChange={() => {
            setTendinoseCheckbox(true);
            criaStringTendinose();
          }}
        >Tendinose
        </Checkbox>

      </Stack>
    </Box>

  );
}
export default TendaoQuadricepsDireito;
