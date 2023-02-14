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

  const subExame = `Ligamento colateral tibial/medial joelho esquerdo`
  const titulo_exame = 'Articulações'

  useEffect(() => {
    if (Object.keys(LigamentoTibialMedial).length === 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        LigamentoTibialMedial
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        LigamentoTibialMedial
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
    var string = "Ligamento colateral espessado e com alteração ecotextural, com aspecto compatível com lesão parcial/estiramento.";
    if (LesaoEspessamentoCheckbox) {
      setLigamentoTibialMedial((arr) => [...arr, string]);
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
    var index = LigamentoTibialMedial.indexOf(value);

    if (index > -1) {
      LigamentoTibialMedial.splice(index, 1);
      setLigamentoTibialMedial((arr) => [...arr]);
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
          isDisabled={Disable || disableAspectoNormal}
          onChange={() => {
            setAspectoNormalCheckbox(!AspectoNormalCheckbox);
          }}
        >
          Aspecto Normal
        </Checkbox>

        <Checkbox
          isDisabled={Disable || disableLesaoAfilamento}
          onChange={() => {
            setLesaoAfilamentoCheckbox(!LesaoAfilamentoCheckbox);
          }}
        >Lesão com afilamento (lesão parcial)
        </Checkbox>

        <Checkbox
          isDisabled={Disable || disableLesaoEspessamento}
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
