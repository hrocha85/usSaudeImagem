/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import { Box, Checkbox, HStack, Input, Radio, RadioGroup, Stack, Text, useMediaQuery } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Convert_Medida } from "../../../component/function_convert_medidas";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function ViasBiliares({ Disable }) {
  const altura = "100%";
  let largura = "60%";
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
  isLargerThan600 ? largura = "60%": largura = "100%"

  const [frasesVias, setFrasesVias] = useState<any>([]);
  const [ConclusoesVias, setConclusoesVias] = useState<any>([]);

  const [value, setValue] = useState("1");

  useEffect(() => {
    if (value == "1") {
      setFrasesVias([]);
    } else {
      if (value == 'Espessada e Irregular') {
        setConclusoesVias((arr) => [...arr, 'Ectasia do colédoco.'])
      } else {
        removeItemConclusoes('Ectasia do colédoco.')
      }
      setFrasesVias([]);
      setFrasesVias((arr) => [...arr, value]);
    }
  }, [value]);


  const [DilatacaoCheckbox, setDilatacaoCheckbox] = useState(false)
  const [CitarCalibresCheckbox, setCitarCalibresCheckbox] = useState(false)
  const [CitarCalibresInput1, setCitarCalibresInput1] = useState('')
  const [CitarCalibresInput2, setCitarCalibresInput2] = useState('')
  const [DisableCitarCalibresInput, setDisableCitarCalibresInput] = useState(true)


  useEffect(() => {
    var string = 'Observa-se dilatação de vias biliares intra-hepáticas.'
    var conclusao = 'Dilatação de vias biliares intra-hepáticas.'
    DilatacaoCheckbox ? setFrasesVias((arr) => [...arr, string]) : removeItemString(string)
    DilatacaoCheckbox ? setConclusoesVias((arr) => [...arr, conclusao]) : removeItemConclusoes(conclusao)
  }, [DilatacaoCheckbox])

  const criaStringCitarCalibre = (dados, calculo) => {
    var string = 'Colédoco ectasiado, com calibre de'
    removeFraseCitarCalibre()
    const medida = new Convert_Medida(dados).Convert_Medida()
    const medida2 = new Convert_Medida(calculo).Convert_Medida()
    if (dados != '' && calculo != '') {
      string = `${string} ${medida} cm. Em seu lúmen observa-se imagem calculosa medindo ${medida2} cm.`
      setFrasesVias((arr) => [...arr, string])
    } else if (dados != '') {
      string = `${string} ${medida} cm. Não é possível caracterizar fatores obstrutivos ou conteúdo anômalo em seu lúmen.`
      setFrasesVias((arr) => [...arr, string])

    }
  }

  const removeFraseCitarCalibre = () => {
    frasesVias.map((e) => {
      if (e.includes("Colédoco ectasiado, com calibre de")) {
        var index = frasesVias.indexOf(e);
        if (index > -1) {
          frasesVias.splice(index, 1);
          setFrasesVias((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (CitarCalibresCheckbox) {
      criaStringCitarCalibre(CitarCalibresInput1, CitarCalibresInput2)
      setDisableCitarCalibresInput(false)
    } else {
      setDisableCitarCalibresInput(true)
      removeFraseCitarCalibre()
      setCitarCalibresInput1('')
      setCitarCalibresInput2('')
    }
  }, [CitarCalibresCheckbox, CitarCalibresInput1, CitarCalibresInput2])

  const removeItemString = (value) => {
    // console.log("valor remove = ", value);
    var index = frasesVias.indexOf(value);
    //caso o valor enviado exista no array, vai remover com splice e setar array novamente
    if (index > -1) {
      frasesVias.splice(index, 1);
      setFrasesVias((arr) => [...arr]);
    }
  };

  const removeItemConclusoes = (value) => {
    // console.log("valor remove = ", value);
    var index = ConclusoesVias.indexOf(value);
    //caso o valor enviado exista no array, vai remover com splice e setar array novamente
    if (index > -1) {
      ConclusoesVias.splice(index, 1);
      setConclusoesVias((arr) => [...arr]);
      new Format_Laudo(titulo_exame).Remove_Conclusao(value);
    }
  };

  useEffect(() => {
    if (Disable) {
      setValue('Não há dilatação das vias biliares intra ou extra-hepáticas')
    } else {
      setValue('1')
    }
  }, [Disable])

  const subExame = "Vias Biliares";
  const titulo_exame = "Abdômen total";

  useEffect(() => {
    if (Object.keys(frasesVias).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesVias,
        ConclusoesVias
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesVias,
        ConclusoesVias
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesVias]);

  return (
    <Box
      bg="#FAFAFA"
      w={largura}
      h={altura}
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="10.85px"
      boxShadow="md"
      padding="24px 15px 24px 15px"
      mt="15px"
    >
      <TituloNomeExame titulo="Vias Biliares" />

      <Box gap="25px" display="flex" flexWrap="wrap">
        <RadioGroup
          onChange={setValue} value={value} padding="10px">
          <Stack direction="column">
            <Radio value="1">Não citar</Radio>
            <Radio value="Não há dilatação das vias biliares intra ou extra-hepáticas">Colédoco normal</Radio>
            <Radio value="Espessada e Irregular">Colédoco ectasiado</Radio>
          </Stack>
        </RadioGroup>
        <Stack>
          <Box>
            <Checkbox
              onChange={(e) => {
                setDilatacaoCheckbox(!DilatacaoCheckbox);
              }}
            >
              Dilatação de vias biliares intra-hepáticas
            </Checkbox>
          </Box>
          <Stack >
            <Box textAlign={'center'}>
              <Checkbox
                onChange={(e) => {
                  setCitarCalibresCheckbox(!CitarCalibresCheckbox);
                }}
              >
                Citar calibres:
              </Checkbox>
            </Box>
            <HStack justifyContent={'center'}>
              <Input
                textAlign='center'
                p='0px'
                w='20px'
                value={CitarCalibresInput1}
                onChange={(e) => setCitarCalibresInput1(e.target.value)}
                disabled={DisableCitarCalibresInput}
                placeholder="00"
              />
              { <Text alignItems='center'>mm. Cálculo de </Text> }
              <Input
                textAlign='center'
                p='0px'
                w='20px'
                value={CitarCalibresInput2}
                onChange={(e) => setCitarCalibresInput2(e.target.value)}
                disabled={DisableCitarCalibresInput}
                placeholder="00"
              />
              <Text alignItems='center'>mm</Text>
            </HStack>
          </Stack>
        </Stack>
      </Box >
    </Box >
  );
}

export default ViasBiliares;
