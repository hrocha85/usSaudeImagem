/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function LigColTibialMedialEsquerdo({ Disable }) {
  const altura = "100%";
  const largura = "100%";

  const [LigamentoTibialMedial, setLigamentoTibialMedial] = useState<any>([]);
  const [ConclusaoLigamentoTibialMedial, setConclusaoLigamentoTibialMedial] = useState<any>([]);

  const subExame = `Ligamento colateral tibial/medial joelho esquerdo`
  const titulo_exame = 'Articulações'

  useEffect(() => {
    if (Object.keys(LigamentoTibialMedial).length === 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        LigamentoTibialMedial,
        ConclusaoLigamentoTibialMedial
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        LigamentoTibialMedial,
        ConclusaoLigamentoTibialMedial
      ).Format_Laudo_Create_Storage();
    }
  }, [LigamentoTibialMedial]);

  const [disableAspectoNormal, setdisableAspectoNormal] = useState(false)
  const [disableLesaoEspessamento, setdisableLesaoEspessamento] = useState(false)
  const [disableLesaoAfilamento, setdisableLesaoAfilamento] = useState(false)

  const [AspectoNormalCheckbox, setAspectoNormalCheckbox] = useState(false);
  const [LesaoAfilamentoCheckbox, setLesaoAfilamentoCheckbox] = useState(false);
  const [LesaoEspessamentoCheckbox, setLesaoEspessamentoCheckbox] = useState(false);

  //Funcoes Padrao Micropolicistico - Inicio
  const criaStringAspectoNormal = () => {
    var string = "Ligamento colateral tibial e ligamento colateral fibular com ecotextura e espessura preservadas e contornos normais.";
    if (AspectoNormalCheckbox) {
      setLigamentoTibialMedial((arr) => [...arr, string]);
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
    var string = "Ligamento colateral tibial e ligamento colateral fibular com ecotextura e espessura preservadas e contornos normais.";
    Normal ? setAspectoNormalCheckbox(true) : setAspectoNormalCheckbox(false)
  }, [Normal])

  useEffect(() => {
    criaStringAspectoNormal()
  }, [AspectoNormalCheckbox])
  const criaStringLesaoAfilamento = () => {
    var string = "Ligamento colateral afilado e com alteração ecotextural, com aspecto sugestivo de lesão parcial.";
    if (LesaoAfilamentoCheckbox) {
      setLigamentoTibialMedial((arr) => [...arr, string]);
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
    const conclusao = 'Sinais de lesão parcial/estiramento do ligamento colateral tibial.'
    var string = "Ligamento colateral espessado e com alteração ecotextural, com aspecto compatível com lesão parcial/estiramento.";
    if (LesaoEspessamentoCheckbox) {
      setConclusaoLigamentoTibialMedial((arr) => [...arr, conclusao]);
      setLigamentoTibialMedial((arr) => [...arr, string]);
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
    var index = LigamentoTibialMedial.indexOf(value);

    if (index > -1) {
      LigamentoTibialMedial.splice(index, 1);
      setLigamentoTibialMedial((arr) => [...arr]);
    }
  };
  const removeItemStringConclusao = (value) => {
    var index = ConclusaoLigamentoTibialMedial.indexOf(value);

    if (index > -1) {
      ConclusaoLigamentoTibialMedial.splice(index, 1);
      setConclusaoLigamentoTibialMedial((arr) => [...arr]);
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
      <TituloNomeExame titulo="Ligamento colateral tibial/medial Esquerdo" />

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
export default LigColTibialMedialEsquerdo;
