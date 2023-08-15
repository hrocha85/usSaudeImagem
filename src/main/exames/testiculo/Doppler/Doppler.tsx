/* eslint-disable eqeqeq */

import {
  Box,
  Checkbox,
  Flex,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Doppler() {
  const altura = "100%";
  const largura = "66%";

  const [FrasesDoppler, setFrasesDoppler] = useState<any>(
    []
  );
  const [DescreverDoppler, setDescreverDoppler] = useState(false);

  const [Inflamacao, setInflamacao] = useState(false);
  const [NaoHaSinaisCheckbox, setNaoHaSinaisCheckbox] = useState(false);
  const [Dilatacao, setDilatacao] = useState(false);
  const [DilatacaoInput1, setDilatacaoInput1] = useState('');
  const [CalibreInput1, setCalibreInput1] = useState('');

  useEffect(() => {
    const string = 'Não há sinais de varizes a manobra de Valsalva no estudo doppler colorido.'
    NaoHaSinaisCheckbox ? setFrasesDoppler((arr) => [...arr, string]) : removeItemString(string)
  }, [NaoHaSinaisCheckbox])
  useEffect(() => {
    const string = 'Não sabemos a frase.'
    Inflamacao ? setFrasesDoppler((arr) => [...arr, string]) : removeItemString(string)
  }, [Inflamacao])

  const criaStringDilatacao = () => {
    let string = 'Dilatação e discreta tortuosidade de vasos do plexo pampiniforme, medindo no repouso'
    removeSelect(string)
    if (Dilatacao) {
      if (DilatacaoInput1 && CalibreInput1) {
        string = `${string} ${DilatacaoInput1} cm (normal <0.2-0,3cm) e acentuando-se com as manobras de Valsalva, alcançando calibre de ${CalibreInput1} cm, associado a refluxo valvar.`
        setFrasesDoppler((arr) => [...arr, string])
      }
    } else {
      setDilatacaoInput1('')
      setCalibreInput1('')
    }
  }

  useEffect(() => {
    criaStringDilatacao()
  }, [Dilatacao, CalibreInput1, DilatacaoInput1])

  const removeSelect = (value) => {
    FrasesDoppler.map((e) => {
      if (e.includes(value)) {
        const index = FrasesDoppler.indexOf(e);

        if (index > -1) {
          FrasesDoppler.splice(index, 1);
          setFrasesDoppler((arr) => [...arr]);
        }
      }
    });
  };

  const removeItemString = (value) => {
    FrasesDoppler.map((e) => {
      if (e.includes(value)) {
        const index = FrasesDoppler.indexOf(e);

        if (index > -1) {
          FrasesDoppler.splice(index, 1);
          setFrasesDoppler((arr) => [...arr]);
        }
      }
    });
  };
  useEffect(() => {
    if (DescreverDoppler) {
      new Format_Laudo().Change_Title("Testículo", titulo_exame, true);
    } else {
      new Format_Laudo().Change_Title("Testículo", titulo_exame, false);
    }
  }, [DescreverDoppler]);

  const subExame = "Doppler";
  lettitulo_exame = "Testículo com doppler";

  useEffect(() => {
    if (Object.keys(FrasesDoppler).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        FrasesDoppler
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        FrasesDoppler
      ).Format_Laudo_Create_Storage();
    }
  }, [FrasesDoppler]);


  return (
    <Box
      bg="#FAFAFA"
      w={largura}
      h={altura}
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="10.85px"
      boxShadow="md"
      padding="24px 15px 10px 15px"
      mt="20px"
    >
      <Checkbox onChange={() => setDescreverDoppler(!DescreverDoppler)}>
        <TituloNomeExame titulo="Descrever Doppler" />
      </Checkbox>
      <Box display='flex' flexWrap='wrap' gap='10px'>

        <Checkbox
          isDisabled={!DescreverDoppler || Dilatacao}
          onChange={() => setNaoHaSinaisCheckbox(!NaoHaSinaisCheckbox)}
        >
          Não há sinais de varizes
        </Checkbox>

        <HStack>
          <Checkbox
            isDisabled={!DescreverDoppler || NaoHaSinaisCheckbox}
            onChange={() => setDilatacao(!Dilatacao)}
          >
            Dilatação e discreta tortuosidade de vasos do plexo
          </Checkbox>
          <Text>Medida repouso</Text>
          <Input
            isDisabled={!Dilatacao}
            value={DilatacaoInput1}
            w='60px'
            padding="0px"
            textAlign="center"
            onChange={(e) => setDilatacaoInput1(e.target.value)}
            placeholder={"cm"}
          />
          <Text>Calibre</Text>
          <Input
            isDisabled={!Dilatacao}
            value={CalibreInput1}
            w='60px'
            padding="0px"
            textAlign="center"
            onChange={(e) => setCalibreInput1(e.target.value)}
            placeholder={"cm"}
          />

        </HStack>
        <Checkbox
          isDisabled={!DescreverDoppler}
          onChange={() => setInflamacao(!Inflamacao)}
        >
          Inflamação
        </Checkbox>
      </Box>

    </Box >
  );
}

export default Doppler;
