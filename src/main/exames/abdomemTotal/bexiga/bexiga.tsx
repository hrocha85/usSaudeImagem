/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Flex, HStack, Input, Radio, RadioGroup, Select, Spacer, Stack, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Convert_Medida } from "../../../component/function_convert_medidas";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Bexiga({ Disable }) {
  const altura = "100%";
  const largura = "66%";

  const [value, setValue] = useState("1");
  const [FraseBexiga, setFraseBexiga] = useState<any>([]);
  const [ConclusoesBexiga, setConclusoesBexiga] = useState<any>([]);

  const [valueSelect1, setValueSelect1] = useState("");
  const [valueInput1, setValueInput1] = useState("");
  const [valueInput2, setValueInput2] = useState("");

  const [enableSelects, setEnableSelects] = useState<boolean>(false);

  const [valueInputCalculo, setValueInputCalculo] = useState("");
  const [DisableInputCalculo, setDisableInputCalculo] = useState(true);
  const [valueSelectCalculo, setValueSelectCalculo] = useState("");

  const [SondaFoleyCheckbox, setSondaFoleyCheckbox] = useState(false)

  const removeSelectString = () => {
    var index;
    FraseBexiga.map((e) => {
      if (e.includes("Bexiga")) {
        index = FraseBexiga.indexOf(e);
        if (index > -1) {
          FraseBexiga.splice(index, 1);
          setFraseBexiga((arr) => [...arr]);
        }
      }
    });
  };
  const removeStringConclusao = () => {
    var index;
    ConclusoesBexiga.map((e) => {
      if (e.includes("Bexiga com trabeculações.")) {
        index = ConclusoesBexiga.indexOf(e);
        if (index > -1) {
          ConclusoesBexiga.splice(index, 1);
          setConclusoesBexiga((arr) => [...arr]);
          new Format_Laudo(titulo_exame).Remove_Conclusao('Bexiga com trabeculações.');
        }
      }
    });
  };

  useEffect(() => {
    if (value.includes("lesão vegetante")) {
      setEnableSelects(true);
      setValueInputCalculo('')
      setValueSelectCalculo('')
      setDisableInputCalculo(true)
    } else if (value.includes("contendo cálculo medindo")) {
      setDisableInputCalculo(false)
      setValueInput1('')
      setValueInput2('')
      setValueSelect1('')
      setEnableSelects(false);

    } else {
      setDisableInputCalculo(true)
      setValueInput1('')
      setValueInput2('')
      setValueSelect1('')
      setValueInputCalculo('')
      setValueSelectCalculo('')
      setEnableSelects(false);
      if (value != "1") {
        if (value == 'Bexiga com boa repleção, de conteúdo anecogênico, apresentando paredes difusamente espessadas e trabeculadas.') {
          setConclusoesBexiga((arr) => [...arr, 'Bexiga com trabeculações.'])
        } else {
          removeStringConclusao()
        }
        setFraseBexiga([]);
        setFraseBexiga((arr) => [...arr, value]);
      } else {
        setFraseBexiga([]);
      }
    }
  }, [value]);

  useEffect(() => {
    removeSelectString()
    const conclusaoLesaoVegetante = 'Lesão vegetante na parede vesical.'
    var select;
    var medida1 = new Convert_Medida(valueInput1).Convert_Medida()
    var medida2 = new Convert_Medida(valueInput2).Convert_Medida()
    if (valueInput1 != '' && valueInput2 != '' && valueSelect1 != '') {
      select = `Bexiga com boa repleção, notando-se lesão polipoide de superfície irregular medindo 
      ${medida1} x ${medida2} cm, fixa ${valueSelect1}.`;
      setFraseBexiga((arr) => [...arr, select]);
      setConclusoesBexiga((arr) => [...arr, conclusaoLesaoVegetante]);
    } else {
      removeItemString(conclusaoLesaoVegetante)
    }
  }, [valueSelect1, valueInput1, valueInput2]);

  const removeItemString = (value) => {
    var index = ConclusoesBexiga.indexOf(value);
    if (index > -1) {
      ConclusoesBexiga.splice(index, 1);
      setConclusoesBexiga((arr) => [...arr]);
    }
  };

  useEffect(() => {
    removeSelectString()
    var string;
    if (valueInputCalculo != '' && valueSelectCalculo != '') {
      var medida = new Convert_Medida(valueInputCalculo).Convert_Medida()
      string = `Bexiga com boa repleção, com paredes ${valueSelectCalculo}, notando-se no lúmen vesical imagem 
      hiperecogênica com sombra acústica posterior, móvel com as mudanças de decúbito, medindo ${medida} cm.`
      setFraseBexiga([]);
      setFraseBexiga((arr) => [...arr, string]);
    }
  }, [valueSelectCalculo, valueInputCalculo])


  const criaStringSondaFoley = () => {
    const string = 'Presença de sonda com balão visível no lúmen vesical.'
    const conclusaoSondaFoley = 'Presença de sonda vesical.'
    removeFraseSondaFoley()
    removeItemString(conclusaoSondaFoley)
    if (SondaFoleyCheckbox) {
      setFraseBexiga((arr) => [...arr, string])
      setConclusoesBexiga((arr) => [...arr, conclusaoSondaFoley])
    }
  }

  const removeFraseSondaFoley = () => {
    FraseBexiga.map((e) => {
      if (e.includes("Presença de sonda com balão visível no lúmen vesical.")) {
        var index = FraseBexiga.indexOf(e);
        if (index > -1) {
          FraseBexiga.splice(index, 1);
          setFraseBexiga((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (SondaFoleyCheckbox) {
      criaStringSondaFoley()
    } else {
      removeFraseSondaFoley()
    }
  }, [SondaFoleyCheckbox])



  const subExame = "Bexiga";
  const titulo_exame = "Abdômen total";

  useEffect(() => {
    if (Object.keys(FraseBexiga).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        FraseBexiga,
        ConclusoesBexiga
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        FraseBexiga,
        ConclusoesBexiga
      ).Format_Laudo_Create_Storage();
    }
  }, [FraseBexiga]);

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
      <TituloNomeExame titulo="Bexiga" />


      <RadioGroup
        isDisabled={Disable}
        w='auto' onChange={setValue} value={value} padding="10px">
        <Stack direction="column">
          <Flex>
            <Stack>
              <Radio w='auto' value="1">Não citar Bexiga</Radio>
              <Radio w='auto' value="Bexiga com boa repleção, paredes finas e regulares, conteúdo anecogênico.">
                Normal
              </Radio>
              <Radio value="Bexiga com boa repleção, de conteúdo anecogênico, apresentando paredes difusamente espessadas e trabeculadas.">
                Difusamente trabeculada (de esforço)
              </Radio>
              <HStack>
                <Radio value="contendo cálculo medindo">
                  Contendo cálculo medindo
                </Radio>

                <Input
                  value={valueInputCalculo}
                  isDisabled={DisableInputCalculo}
                  w='60px'
                  placeholder="00"
                  onChange={(e) => setValueInputCalculo(e.target.value)}
                />
                <Text alignSelf='mm'>mm com paredes</Text>
                <Select w='150px'
                  isDisabled={DisableInputCalculo}
                  value={valueSelectCalculo}
                  onChange={(e) => setValueSelectCalculo(e.target.value)}
                >
                  <option selected disabled value="">Selecione</option>
                  <option value="de espessura normal">de espessura normal</option>
                  <option value="difusamente trabeculadas">difusamente trabeculadas</option>
                </Select>

              </HStack>
            </Stack>
            <Spacer />
            <Stack>
              <Stack>
                <Checkbox
                  isDisabled={Disable}
                  onChange={() => setSondaFoleyCheckbox(!SondaFoleyCheckbox)}>
                  Presença de sonda Foley
                </Checkbox>

              </Stack>
            </Stack>
          </Flex>
          <Box w='auto'>
            <HStack >
              <Radio value="lesão vegetante">Lesão vegetante medindo</Radio>
              <Input w='60px'
                value={valueInput1}
                placeholder="00"
                isDisabled={!enableSelects}
                onChange={(e) => setValueInput1(e.target.value)}
              />
              <Text alignSelf='center'>x</Text>
              <Input w='60px'
                value={valueInput2}
                placeholder="00"
                isDisabled={!enableSelects}
                onChange={(e) => setValueInput2(e.target.value)}
              />
              <Text alignSelf='center'>mm</Text>
            </HStack>
            <Box display='flex' flexWrap='wrap' ml='30px'>
              <Text alignSelf='center'>situada</Text>
              <Select w='150px'
                isDisabled={!enableSelects}
                value={valueSelect1}
                onChange={(e) => setValueSelect1(e.target.value)}
              >
                <option selected disabled value="">Selecione</option>
                <option value="fusifome">Fusifome</option>
                <option value="sacular">Sacular</option>
              </Select>
            </Box >
          </Box>
          <Radio value="Bexiga com repleção insuficiente para análise.">
            Com repleção insuficiente
          </Radio>
        </Stack>
      </RadioGroup>

    </Box >
  );
}

export default Bexiga