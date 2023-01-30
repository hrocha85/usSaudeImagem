/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Stack } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { JoelhoDireitoNormalContext } from "../../../../../context/JoelhoDireitoNormalContext";
import { LaudosContext } from "../../../../../context/LuadosContext";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function LigColFibularLateralDireito() {
  const altura = "100%";
  const largura = "95%";

  const [LigamentoFibularLateral, setLigamentoFibularLateral] = useState<any>([]);

  const subExame = `Ligamento colateral fibular/lateral joelho Direito`
  const titulo_exame = 'Articulações'

  useEffect(() => {
    if (Object.keys(LigamentoFibularLateral).length === 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        LigamentoFibularLateral
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        LigamentoFibularLateral
      ).Format_Laudo_Create_Storage();
    }
  }, [LigamentoFibularLateral]);

  let { JoelhoDireitoLaudoNormal } = useContext(JoelhoDireitoNormalContext)
  const [disableTudo, setDisableTudo] = useState(false)
  const [disableAspectoNormal, setdisableAspectoNormal] = useState(false)
  const [disableLesaoEspessamento, setdisableLesaoEspessamento] = useState(false)
  const [disableLesaoAfilamento, setdisableLesaoAfilamento] = useState(false)

  const [AspectoNormalCheckbox, setAspectoNormalCheckbox] = useState(false);
  const [LesaoAfilamentoCheckbox, setLesaoAfilamentoCheckbox] = useState(false);
  const [LesaoEspessamentoCheckbox, setLesaoEspessamentoCheckbox] = useState(false);

  //Funcoes Padrao Micropolicistico - Inicio
  const criaStringAspectoNormal = () => {
    var string = "TendaoQuadriceps direito com AspectoNormal";
    if (AspectoNormalCheckbox) {
      setLigamentoFibularLateral((arr) => [...arr, string]);
      setdisableLesaoEspessamento(true)
      setdisableLesaoAfilamento(true)
    } else {
      setdisableLesaoAfilamento(false)
      setdisableLesaoEspessamento(false)
      removeItemString(string);
    }
  };
  useEffect(() => {
    criaStringAspectoNormal()
  }, [AspectoNormalCheckbox])
  const criaStringLesaoAfilamento = () => {
    var string = "TendaoQuadriceps direito com LesaoAfilamento";
    if (LesaoAfilamentoCheckbox) {
      setLigamentoFibularLateral((arr) => [...arr, string]);
      setdisableLesaoEspessamento(true)
      setdisableAspectoNormal(true)
    } else {
      setdisableAspectoNormal(false)
      setdisableLesaoEspessamento(false)
      removeItemString(string);
    }
  };

  useEffect(() => {
    criaStringLesaoAfilamento()
  }, [LesaoAfilamentoCheckbox])

  const criaStringLesaoEspessamento = () => {
    var string = "TendaoQuadriceps direito com LesaoEspessamento";
    if (LesaoEspessamentoCheckbox) {
      setLigamentoFibularLateral((arr) => [...arr, string]);
      setdisableLesaoAfilamento(true)
      setdisableAspectoNormal(true)
    } else {
      setdisableAspectoNormal(false)
      setdisableLesaoAfilamento(false)
      removeItemString(string);
    }
  };

  useEffect(() => {
    criaStringLesaoEspessamento()
  }, [LesaoEspessamentoCheckbox])

  const removeItemString = (value) => {
    var index = LigamentoFibularLateral.indexOf(value);

    if (index > -1) {
      LigamentoFibularLateral.splice(index, 1);
      setLigamentoFibularLateral((arr) => [...arr]);
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
      <TituloNomeExame titulo="Ligamento colateral fibular/lateral direito" />

      <Box display="flex" flexWrap="wrap">

      </Box>

      <Stack>

        <Checkbox
          isDisabled={disableTudo || disableAspectoNormal}
          onChange={() => {
            setAspectoNormalCheckbox(!AspectoNormalCheckbox);
          }}
        >
          Aspecto Normal
        </Checkbox>

        <Checkbox
          isDisabled={disableTudo || disableLesaoAfilamento}
          onChange={() => {
            setLesaoAfilamentoCheckbox(!LesaoAfilamentoCheckbox);
          }}
        >Lesão com afilamento (lesão parcial)
        </Checkbox>

        <Checkbox
          isDisabled={disableTudo || disableLesaoEspessamento}
          onChange={() => {
            setLesaoEspessamentoCheckbox(!LesaoEspessamentoCheckbox);
          }}
        >Lesão com espessamento (lesão parcial/estiramento)
        </Checkbox>

      </Stack>
    </Box>

  );
}
export default LigColFibularLateralDireito;
