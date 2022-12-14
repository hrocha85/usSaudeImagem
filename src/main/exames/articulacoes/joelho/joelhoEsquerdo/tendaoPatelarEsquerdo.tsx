/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Select, Stack, Text, } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../../context/LuadosContext";
import { JoelhoEsquerdoNormalContext } from "../../../../../context/JoelhoEsquerdoNormalContext"
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function TendaoPatelarEsquerdo() {
  const altura = "100%";
  const largura = "95%";

  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);
  let { JoelhoEsquerdoLaudoNormal } = useContext(JoelhoEsquerdoNormalContext)
  const [disableTudo, setDisableTudo] = useState(false)

  const [ArtroseCheckbox, setArtroseCheckbox] = useState(true);
  const [CistoBakerCheckbox, setCistoBakerCheckbox] = useState(true);
  const [RoturaCheckbox, setRoturaCheckbox] = useState(true);

  //Funcoes Padrao Micropolicistico - Inicio
  const criaStringArtrose = () => {
    var string = "TendaoQuadriceps Esquerdo com Artrose";
    if (ArtroseCheckbox) {
      setLaudoPrin((arr) => [...arr, string]);
      setArtroseCheckbox(false);
    } else {
      removeItemString(string);
    }
  };
  const criaStringRotura = () => {
    var string = "TendaoQuadriceps Esquerdo com Rotura";
    if (RoturaCheckbox) {
      setLaudoPrin((arr) => [...arr, string]);
      setRoturaCheckbox(false);
    } else {
      removeItemString(string);
    }
  };
  const criaStringCistoBaker = () => {
    var string = "TendaoQuadriceps Esquerdo com CistoBaker";
    if (CistoBakerCheckbox) {
      setLaudoPrin((arr) => [...arr, string]);
      setCistoBakerCheckbox(false);
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
    JoelhoEsquerdoLaudoNormal ? setDisableTudo(true) : setDisableTudo(false)

  }, [JoelhoEsquerdoLaudoNormal])

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
      <TituloNomeExame titulo="Tendão patelar" />

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
            setCistoBakerCheckbox(true);
            criaStringCistoBaker();
          }}
        >Cisto de Baker
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
export default TendaoPatelarEsquerdo;