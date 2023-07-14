/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Radio, RadioGroup, Select, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Impressoes({ Disable }) {
  const altura = "100%";
  const largura = "50%";

  const [FraseVagina, setFraseVagina] = useState<any>([]);

  const [value, setValue] = useState("1");

  const [DentroDosPadroesCheckbox, setDentroDosPadroesCheckbox] = useState(false);

  const [HerniaEncarceradaDireita, setHerniaEncarceradaDireita] = useState(false);

  const [HerniaEncarceradaEsquerda, setHerniaEncarceradaEsquerda] = useState(false);

  const [Normal, setNormal] = useState(false);

  useEffect(() => {
    Disable ? setNormal(true) : setNormal(false);
  }, [Disable])

  useEffect(() => {
    if (Normal) {
      setDentroDosPadroesCheckbox(true)
    } else {
      setDentroDosPadroesCheckbox(false)

      removeItemString('Exame da região inguinal dentro dos padrões da normalidade.')
    }
  }, [Normal])


  const removeSelectString = () => {
    FraseVagina.map((e) => {
      if (e.includes("Hernia inguinal")) {
        var index = FraseVagina.indexOf(e);

        if (index > -1) {
          FraseVagina.splice(index, 1);
          setFraseVagina((arr) => [...arr]);
        }
      }
    });
  }
  useEffect(() => {
    if (value == "1") {
      removeSelectString()
    } else {
      removeSelectString()
      setFraseVagina((arr) => [...arr, value]);
    }
  }, [value]);

  const removeItemString = (value) => {
    var index = FraseVagina.indexOf(value);

    if (index > -1) {
      FraseVagina.splice(index, 1);
      setFraseVagina((arr) => [...arr]);
    }
  };

  useEffect(() => {
    const string = 'Exame da região inguinal dentro dos padrões da normalidade.'
    DentroDosPadroesCheckbox ? setFraseVagina((arr) => ([...arr, string])) : removeItemString(string)
  }, [DentroDosPadroesCheckbox])


  useEffect(() => {
    const string = 'Imagem sugestiva de Hérnia ínguino-escrotal encarcerada à Direita.'
    HerniaEncarceradaDireita ? setFraseVagina((arr) => ([...arr, string])) : removeItemString(string)
  }, [HerniaEncarceradaDireita])
  useEffect(() => {
    const string = 'Imagem sugestiva de Hérnia ínguino-escrotal encarcerada à Esquerda.'
    HerniaEncarceradaEsquerda ? setFraseVagina((arr) => ([...arr, string])) : removeItemString(string)
  }, [HerniaEncarceradaEsquerda])


  const subExame = "Impressão Diagnóstica";
  const titulo_exame = 'Região Inguinal'

  useEffect(() => {
    if (Object.keys(FraseVagina).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        FraseVagina
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        FraseVagina
      ).Format_Laudo_Create_Storage();
    }
  }, [FraseVagina]);

  return (
    <Box
      bg="#FAFAFA"
      w={largura}
      h={altura}
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="10.85px"
      boxShadow="md"
      padding="24px 15px 20px 15px"
      mt='10px'
      ml='10px'
    >
      <TituloNomeExame titulo="Impressão Diagnóstica" />

      <Box gap="5px" display="flex" flexWrap="wrap" mt="10px">
        <Checkbox
          isChecked={Normal}
          onChange={() => {
            setNormal(!Normal)
            setDentroDosPadroesCheckbox(!DentroDosPadroesCheckbox);
          }}
        >
          Exame da região inguinal dentro dos padrões da normalidade
        </Checkbox>
        <Checkbox
          onChange={() => {
            setHerniaEncarceradaDireita(!HerniaEncarceradaDireita);
          }}
        >
          Imagem sugestiva de Hérnia ínguino-escrotal encarcerada à Direita.
        </Checkbox>
        <Checkbox
          onChange={() => {
            setHerniaEncarceradaEsquerda(!HerniaEncarceradaEsquerda);
          }}
        >
          Imagem sugestiva de Hérnia ínguino-escrotal encarcerada à Esquerda.
        </Checkbox>
        <RadioGroup onChange={setValue} value={value} >
          <Stack direction="column">
            <Radio value="1">Não citar</Radio>
            <Radio value="Hernia inguinal direita sem sinais de encarceramento.">Hernia inguinal direita sem sinais de encarceramento</Radio>

            <Radio value="Hernia inguinal esquerda sem sinais de encarceramento">Hernia inguinal esquerda sem sinais de encarceramento</Radio>
            <Radio value="Hernia inguinal direita/esquerda sem sinais de encarceramento">Hernia inguinal direita/esquerda sem sinais de encarceramento</Radio>
          </Stack>
        </RadioGroup>

      </Box>
    </Box>
  );
}
export default Impressoes;
