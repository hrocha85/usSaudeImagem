/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Select, Stack, Text, } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../../context/LuadosContext";
import { JoelhoDireitoNormalContext } from "../../../../../context/JoelhoDireitoNormalContext"
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function LigColFibularLateralDireito() {
  const altura = "100%";
  const largura = "95%";

  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);
  let { JoelhoDireitoLaudoNormal } = useContext(JoelhoDireitoNormalContext)
  const [disableTudo, setDisableTudo] = useState(false)
  const [disableAspectoNormal, setdisableAspectoNormal] = useState(false)
  const [disableLesaoEspessamento, setdisableLesaoEspessamento] = useState(false)
  const [disableLesaoAfilamento, setdisableLesaoAfilamento] = useState(false)

  const [AspectoNormalCheckbox, setAspectoNormalCheckbox] = useState(true);
  const [LesaoAfilamentoCheckbox, setLesaoAfilamentoCheckbox] = useState(true);
  const [LesaoEspessamentoCheckbox, setLesaoEspessamentoCheckbox] = useState(true);

  //Funcoes Padrao Micropolicistico - Inicio
  const criaStringAspectoNormal = () => {
    var string = "TendaoQuadriceps direito com AspectoNormal";
    if (AspectoNormalCheckbox) {
      setLaudoPrin((arr) => [...arr, string]);
      setdisableLesaoEspessamento(true)
      setdisableLesaoAfilamento(true)
      setAspectoNormalCheckbox(false);
    } else {
      setdisableLesaoAfilamento(false)
      setdisableLesaoEspessamento(false)
      removeItemString(string);
    }
  };
  const criaStringLesaoAfilamento = () => {
    var string = "TendaoQuadriceps direito com LesaoAfilamento";
    if (LesaoAfilamentoCheckbox) {
      setLaudoPrin((arr) => [...arr, string]);
      setdisableLesaoEspessamento(true)
      setdisableAspectoNormal(true)
      setLesaoAfilamentoCheckbox(false);
    } else {
      setdisableAspectoNormal(false)
      setdisableLesaoEspessamento(false)
      removeItemString(string);
    }
  };
  const criaStringLesaoEspessamento = () => {
    var string = "TendaoQuadriceps direito com LesaoEspessamento";
    if (LesaoAfilamentoCheckbox) {
      setLaudoPrin((arr) => [...arr, string]);
      setdisableLesaoAfilamento(true)
      setdisableAspectoNormal(true)
      setLesaoAfilamentoCheckbox(false);
    } else {
      setdisableAspectoNormal(false)
      setdisableLesaoAfilamento(false)
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
      <TituloNomeExame titulo="Ligamento colateral fibular / lateral direito" />

      <Box display="flex" flexWrap="wrap">

      </Box>

      <Stack>

        <Checkbox
          isDisabled={disableTudo || disableAspectoNormal}
          onChange={() => {
            setAspectoNormalCheckbox(!AspectoNormalCheckbox);
            criaStringAspectoNormal();
          }}
        >
          Aspecto Normal
        </Checkbox>

        <Checkbox
          isDisabled={disableTudo || disableLesaoAfilamento}
          onChange={() => {
            setLesaoAfilamentoCheckbox(!LesaoAfilamentoCheckbox);
            criaStringLesaoAfilamento();
          }}
        >Lesão com afilamento (lesão parcial)
        </Checkbox>

        <Checkbox
          isDisabled={disableTudo || disableLesaoEspessamento}
          onChange={() => {
            setLesaoEspessamentoCheckbox(!LesaoEspessamentoCheckbox);
            criaStringLesaoEspessamento();
          }}
        >Lesão com espessamento (lesão parcial/estiramento)
        </Checkbox>

      </Stack>
    </Box>

  );
}
export default LigColFibularLateralDireito;
