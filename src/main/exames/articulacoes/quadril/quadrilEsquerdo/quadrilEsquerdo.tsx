/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Select, Stack, Text, } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../../context/LuadosContext";
import { QuadrilEsquerdoNormalContext } from "../../../../../context/QuadrilEsquerdoNormalContext";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function QuadrilEsquerdo() {
  const altura = "100%";
  const largura = "100%";

  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);
  let { QuadrilEsquerdoLaudoNormal } = useContext(QuadrilEsquerdoNormalContext)
  const [disableTudo, setDisableTudo] = useState(false)

  const [ArtroseCheckbox, setArtroseCheckbox] = useState(true);
  const [BursiteCheckbox, setBursiteCheckbox] = useState(true);
  const [DerrameArticularCheckbox, setDerrameArticularCheckbox] = useState(true);

  //Funcoes Padrao Micropolicistico - Inicio
  const criaStringArtrose = () => {
    var string = "Quadril Esquerdo com Artrose";
    if (ArtroseCheckbox) {
      setLaudoPrin((arr) => [...arr, string]);
      setArtroseCheckbox(false);
    } else {
      removeItemString(string);
    }
  };
  const criaStringDerrameArticular = () => {
    var string = "Quadril Esquerdo com DerrameArticular";
    if (DerrameArticularCheckbox) {
      setLaudoPrin((arr) => [...arr, string]);
      setDerrameArticularCheckbox(false);
    } else {
      removeItemString(string);
    }
  };
  const criaStringBursite = () => {
    var string = "Quadril Esquerdo com Bursite";
    if (BursiteCheckbox) {
      setLaudoPrin((arr) => [...arr, string]);
      setBursiteCheckbox(false);
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
    QuadrilEsquerdoLaudoNormal ? setDisableTudo(true) : setDisableTudo(false)

  }, [QuadrilEsquerdoLaudoNormal])

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
export default QuadrilEsquerdo;
