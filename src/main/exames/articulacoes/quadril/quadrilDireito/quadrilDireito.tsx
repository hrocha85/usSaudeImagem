/* eslint-disable array-callback-return */

import { Box, Checkbox, HStack, Input, Select, Stack, Text, } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../../context/LuadosContext";
import { QuadrilDireitoNormalContext } from "../../../../../context/QuadrilDireitoNormalContext"
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function QuadrilDireito() {
  const altura = "100%";
  const largura = "100%";

  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);
  const { QuadrilDireitoLaudoNormal } = useContext(QuadrilDireitoNormalContext)
  const [disableTudo, setDisableTudo] = useState(false)

  const [ArtroseCheckbox, setArtroseCheckbox] = useState(true);
  const [BursiteCheckbox, setBursiteCheckbox] = useState(true);
  const [DerrameArticularCheckbox, setDerrameArticularCheckbox] = useState(true);

  //Funcoes Padrao Micropolicistico - Inicio
  const criaStringArtrose = () => {
    const string = "Quadril direito com Artrose";
    if (ArtroseCheckbox) {
      setLaudoPrin((arr) => [...arr, string]);
      setArtroseCheckbox(false);
    } else {
      removeItemString(string);
    }
  };
  const criaStringDerrameArticular = () => {
    const string = "Quadril direito com DerrameArticular";
    if (DerrameArticularCheckbox) {
      setLaudoPrin((arr) => [...arr, string]);
      setDerrameArticularCheckbox(false);
    } else {
      removeItemString(string);
    }
  };
  const criaStringBursite = () => {
    const string = "Quadril direito com Bursite";
    if (BursiteCheckbox) {
      setLaudoPrin((arr) => [...arr, string]);
      setBursiteCheckbox(false);
    } else {
      removeItemString(string);
    }
  };

  const removeItemString = (value) => {
    const index = laudoPrin.indexOf(value);

    if (index > -1) {
      laudoPrin.splice(index, 1);
      setLaudoPrin((arr) => [...arr]);
    }
  };

  useEffect(() => {
    QuadrilDireitoLaudoNormal ? setDisableTudo(true) : setDisableTudo(false)

  }, [QuadrilDireitoLaudoNormal])

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
      <TituloNomeExame titulo="Quadril" />

      <Box display="flex" flexWrap="wrap">

      </Box>

      <Stack>

        <Checkbox
          isDisabled={disableTudo}
          onChange={() => {
            setArtroseCheckbox(true);
            criaStringArtrose();
          }}
        >
          Artrose
        </Checkbox>
        <Checkbox
          isDisabled={disableTudo}
          onChange={() => {
            setBursiteCheckbox(true);
            criaStringBursite();
          }}
        >Bursite
        </Checkbox>
        <Checkbox
          isDisabled={disableTudo}
          onChange={() => {
            setDerrameArticularCheckbox(true);
            criaStringDerrameArticular();
          }}
        >Derrame Articular
        </Checkbox>

      </Stack>
    </Box>

  );
}
export default QuadrilDireito;
