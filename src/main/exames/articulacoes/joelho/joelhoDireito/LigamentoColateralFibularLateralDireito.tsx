/* eslint-disable array-callback-return */

import { Box, Checkbox, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function LigColFibularLateralDireito({ Disable }) {
  const altura = "100%";
  const largura = "100%";

  const [LigamentoFibularLateral, setLigamentoFibularLateral] = useState<any>([]);
  const [ConclusaoLigamentoFibularLateral, setConclusaoLigamentoFibularLateral] = useState<any>([]);

  const subExame = `Ligamento colateral fibular/lateral joelho direito`
  const titulo_exame = 'Articulações'

  useEffect(() => {
    if (Object.keys(LigamentoFibularLateral).length === 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        LigamentoFibularLateral,
        ConclusaoLigamentoFibularLateral
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        LigamentoFibularLateral,
        ConclusaoLigamentoFibularLateral
      ).Format_Laudo_Create_Storage();
    }
  }, [LigamentoFibularLateral]);


  const [disableAspectoNormal, setdisableAspectoNormal] = useState(false)
  const [disableLesaoEspessamento, setdisableLesaoEspessamento] = useState(false)
  const [disableLesaoAfilamento, setdisableLesaoAfilamento] = useState(false)

  const [AspectoNormalCheckbox, setAspectoNormalCheckbox] = useState(false);
  const [LesaoAfilamentoCheckbox, setLesaoAfilamentoCheckbox] = useState(false);
  const [LesaoEspessamentoCheckbox, setLesaoEspessamentoCheckbox] = useState(false);

  //Funcoes Padrao Micropolicistico - Inicio
  const criaStringAspectoNormal = () => {
    const string = "Tendões do quadríceps femoral, do bíceps femoral e patelar com ecotextura e espessura preservadas e contornos normais.";
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
  const [Normal, setNormal] = useState(false)

  useEffect(() => {
    Disable ? setNormal(true) : setNormal(false)
  }, [Disable])

  useEffect(() => {
    const string = "Tendões do quadríceps femoral, do bíceps femoral e patelar com ecotextura e espessura preservadas e contornos normais.";
    Normal ? setAspectoNormalCheckbox(true) : setAspectoNormalCheckbox(false)
  }, [Normal])

  useEffect(() => {
    criaStringAspectoNormal()
  }, [AspectoNormalCheckbox])
  const criaStringLesaoAfilamento = () => {
    const string = "Ligamento colateral fibular afilado e com alteração ecotextural, com aspecto sugestivo de lesão parcial.";
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
    const conclusao = 'Sinais de lesão parcial/estiramento do ligamento colateral fibular.'
    const string = "Ligamento colateral fibular espessado e com alteração ecotextural, com aspecto compatível com lesão parcial/estiramento.";
    if (LesaoEspessamentoCheckbox) {
      setLigamentoFibularLateral((arr) => [...arr, string]);
      setConclusaoLigamentoFibularLateral((arr) => [...arr, conclusao]);
      setdisableLesaoAfilamento(true)
      setdisableAspectoNormal(true)
    } else {
      setdisableAspectoNormal(false)
      setdisableLesaoAfilamento(false)
      removeItemString(string);
      removeItemStringConclusao(conclusao)
    }
  };

  useEffect(() => {
    criaStringLesaoEspessamento()
  }, [LesaoEspessamentoCheckbox])

  const removeItemString = (value) => {
    const index = LigamentoFibularLateral.indexOf(value);

    if (index > -1) {
      LigamentoFibularLateral.splice(index, 1);
      setLigamentoFibularLateral((arr) => [...arr]);
    }
  };

  const removeItemStringConclusao = (value) => {
    const index = ConclusaoLigamentoFibularLateral.indexOf(value);

    if (index > -1) {
      ConclusaoLigamentoFibularLateral.splice(index, 1);
      setConclusaoLigamentoFibularLateral((arr) => [...arr]);
      new Format_Laudo(titulo_exame).Remove_Conclusao(value)
    }
  };

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
          isChecked={Normal}
          isDisabled={disableAspectoNormal}
          onChange={() => {
            setNormal(!Normal)
            setAspectoNormalCheckbox(!AspectoNormalCheckbox);
          }}
        >
          Aspecto Normal
        </Checkbox>

        <Checkbox
          isDisabled={disableLesaoAfilamento}
          onChange={() => {
            setLesaoAfilamentoCheckbox(!LesaoAfilamentoCheckbox);
          }}
        >Lesão com afilamento (lesão parcial)
        </Checkbox>

        <Checkbox
          isDisabled={disableLesaoEspessamento}
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
