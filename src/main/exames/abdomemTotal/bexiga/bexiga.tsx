/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Flex, HStack, Input, Radio, RadioGroup, Select, Spacer, Stack, Text, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Bexiga({ Disable }) {
  const altura = "100%";
  let largura = "60%";
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
  isLargerThan600 ? largura = "60%": largura = "100%"

  const [value, setValue] = useState("1");
  const [FraseBexiga, setFraseBexiga] = useState<any>([]);
  const [ConclusoesBexiga, setConclusoesBexiga] = useState<any>([]);

  const [StringParedes, setStringParedes] = useState("");

  const [valueSelect1, setValueSelect1] = useState("");
  const [valueInput1, setValueInput1] = useState("");
  const [valueInput2, setValueInput2] = useState("");

  const [valueSelect1EstudoUltrassonográfico, setValueSelect1EstudoUltrassonográfico] = useState("");
  const [DisableEstudoUltrassonografico, setDisableEstudoUltrassonografico] = useState(true);

  const [enableSelects, setEnableSelects] = useState<boolean>(true);

  const [valueInputCalculo, setValueInputCalculo] = useState("");
  const [DisableInputCalculo, setDisableInputCalculo] = useState(true);
  const [valueSelectCalculo, setValueSelectCalculo] = useState("");

  const [SondaFoleyCheckbox, setSondaFoleyCheckbox] = useState(false)

  const [CheiaCheckbox, setCheiaCheckbox] = useState(false)
  const [DisableCheia, setDisableCheia] = useState(false)
  const [VaziaCheckbox, setVaziaCheckbox] = useState(false)
  const [DisableVazia, setDisableVazia] = useState(false)
  const [NaoVisibilizadaCheckbox, setNaoVisibilizadaCheckbox] = useState(false)
  const [DisableNaoVisibilizada, setDisableNaoVisibilizada] = useState(false)

  const [NormoEspessasCheckbox, setNormoEspessasCheckbox] = useState(false)
  const [DisableNormoEspessadas, setDisableNormoEspessadas] = useState(false)
  const [EspessadasCheckbox, setEspessadasCheckbox] = useState(false)
  const [DisableEspessadas, setDisableEspessadas] = useState(false)
  const [DisableParedes, setDisableParedes] = useState(true)

  const [ImagensCalculosasCheckbox, setImagensCalculosasCheckbox] = useState(false)
  const [ImagensCalculosasSelect, setImagensCalculosasSelect] = useState('')

  const [ColecaoPelvicaCheckbox, setColecaoPelvicaCheckbox] = useState(false)
  const [ColecaoPelvicaSelect, setColecaoPelvicaSelect] = useState('')

  const [VolumePreMiccionalInput1, setVolumePreMiccionalInput1] = useState('')
  const [VolumePreMiccionalInput2, setVolumePreMiccionalInput2] = useState('')
  const [VolumePreMiccionalInput3, setVolumePreMiccionalInput3] = useState('')
  const [VolumePreMiccionalInput4, setVolumePreMiccionalInput4] = useState<any>(0)
  const [NaoCitarVolume, setNaoCitarVolume] = useState(false)

  const [ResiduoInput1, setResiduoInput1] = useState('')
  const [ResiduoInput2, setResiduoInput2] = useState('')
  const [ResiduoInput3, setResiduoInput3] = useState('')
  const [ResiduoInput4, setResiduoInput4] = useState<any>(0)
  const [NaoCitarResiduo, setNaoCitarResiduo] = useState(false)


  const criaStringColecaoPelvica = () => {
    removeStringColecaoPelvica()
    var string = `de massa ou de coleção pélvica de qualquer natureza.`
    if (ColecaoPelvicaCheckbox) {
      if (ColecaoPelvicaSelect != '') {
        string = `${ColecaoPelvicaSelect} ${string}`;
        setFraseBexiga((arr) => [...arr, string])
      }
    } else {
      setColecaoPelvicaSelect('')
    }
  }
  const removeStringColecaoPelvica = () => {
    var index;
    FraseBexiga.map((e) => {
      if (e.includes("massa ou de coleção pélvica de qualquer natureza.")) {
        index = FraseBexiga.indexOf(e);
        if (index > -1) {
          FraseBexiga.splice(index, 1);
          setFraseBexiga((arr) => [...arr]);

        }
      }
    });
  };

  useEffect(() => {
    criaStringColecaoPelvica()
  }, [ColecaoPelvicaCheckbox, ColecaoPelvicaSelect])

  const criaStringImagensCalculosas = () => {
    removeStringImagensCalculosas()
    var string = `${ImagensCalculosasSelect}`
    if (ImagensCalculosasCheckbox) {
      if (ImagensCalculosasSelect != '') {
        setFraseBexiga((arr) => [...arr, string])
      }
    } else {
      setImagensCalculosasSelect('')
    }
  }
  const removeStringImagensCalculosas = () => {
    var index;
    FraseBexiga.map((e) => {
      if (e.includes("Não se notam imagens calculosas.")) {
        index = FraseBexiga.indexOf(e);
        if (index > -1) {
          FraseBexiga.splice(index, 1);
          setFraseBexiga((arr) => [...arr]);

        }
      }
      if (e.includes("Presença de imagem hiper ecogênica, produtora de sombra acústica posterior, compatível com calculo.")) {
        index = FraseBexiga.indexOf(e);
        if (index > -1) {
          FraseBexiga.splice(index, 1);
          setFraseBexiga((arr) => [...arr]);

        }
      }
    });
  };

  useEffect(() => {
    criaStringImagensCalculosas()
  }, [ImagensCalculosasCheckbox, ImagensCalculosasSelect])

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
  const removeStringLesaoVegetanteConclusao = () => {
    var index;
    ConclusoesBexiga.map((e) => {
      if (e.includes("Lesão vegetante na parede vesical.")) {
        index = ConclusoesBexiga.indexOf(e);
        if (index > -1) {
          ConclusoesBexiga.splice(index, 1);
          setConclusoesBexiga((arr) => [...arr]);
          new Format_Laudo(titulo_exame).Remove_Conclusao('Lesão vegetante na parede vesical.');
        }
      }
    });
  };

  useEffect(() => {
    if (value.includes("lesão vegetante")) {
      setEnableSelects(false);
      setDisableEstudoUltrassonografico(true)
      setValueSelect1EstudoUltrassonográfico('')
      setValueInputCalculo('')
      setValueSelectCalculo('')
      setDisableInputCalculo(true)
    } else if (value.includes("contendo cálculo medindo")) {
      setDisableInputCalculo(false)
      setDisableEstudoUltrassonografico(true)
      setValueSelect1EstudoUltrassonográfico('')
      setValueInput1('')
      setValueInput2('')
      setValueSelect1('')
      setEnableSelects(true);
    } else if (value.includes("Estudo ultrassonográfico")) {
      setDisableEstudoUltrassonografico(false)
      setValueSelect1EstudoUltrassonográfico('')
      setEnableSelects(true);
      setDisableInputCalculo(true)
    } else {
      removeStringConclusao()
      removeStringLesaoVegetanteConclusao()
      setValueSelect1EstudoUltrassonográfico('')
      setValueInput1('')
      setValueInput2('')
      setValueSelect1('')
      setValueInputCalculo('')
      setValueSelectCalculo('')
      setDisableEstudoUltrassonografico(true)
      setDisableInputCalculo(true)
      setEnableSelects(true);
      if (value != "1") {
        if (value == 'Bexiga com boa repleção, de conteúdo anecogênico, apresentando paredes difusamente espessadas e trabeculadas.') {
          setConclusoesBexiga((arr) => [...arr, 'Bexiga com trabeculações.'])
        } else {
          removeStringConclusao()
          removeStringLesaoVegetanteConclusao()
        }
        setFraseBexiga([]);
        setFraseBexiga((arr) => [...arr, value]);
      } else {
        removeStringConclusao()
        removeStringLesaoVegetanteConclusao()
        setFraseBexiga([]);
      }
    }
  }, [value]);

  useEffect(() => {
    removeSelectString()
    var frase;
    if (valueSelect1EstudoUltrassonográfico != '') {
      frase = `Bexiga Apresentando ${valueSelect1EstudoUltrassonográfico} de caracterização limitada ao estudo ultrassonográfico.`;
      setFraseBexiga((arr) => [...arr, frase]);
    }
  }, [valueSelect1EstudoUltrassonográfico]);

  useEffect(() => {
    removeSelectString()
    const conclusaoLesaoVegetante = 'Lesão vegetante na parede vesical.'
    var select;
    if (valueInput1 != '' && valueInput2 != '' && valueSelect1 != '') {
      select = `Bexiga com boa repleção, notando-se lesão polipoide de superfície irregular medindo 
      ${valueInput1} x ${valueInput2} cm, fixa ${valueSelect1}.`;
      setFraseBexiga((arr) => [...arr, select]);
      setConclusoesBexiga((arr) => [...arr, conclusaoLesaoVegetante]);
    } else {
      removeItemStringConclusao(conclusaoLesaoVegetante)
    }
  }, [valueSelect1, valueInput1, valueInput2]);

  const removeItemStringConclusao = (value) => {
    var index = ConclusoesBexiga.indexOf(value);
    if (index > -1) {
      ConclusoesBexiga.splice(index, 1);
      setConclusoesBexiga((arr) => [...arr]);
    }
  };
  const removeItemString = (value) => {
    var index = FraseBexiga.indexOf(value);
    if (index > -1) {
      FraseBexiga.splice(index, 1);
      setFraseBexiga((arr) => [...arr]);
    }
  };

  useEffect(() => {
    removeSelectString()
    var string;
    if (valueInputCalculo != '' && valueSelectCalculo != '') {
      string = `Bexiga com boa repleção, com paredes ${valueSelectCalculo}, notando-se no lúmen vesical imagem 
      hiperecogênica com sombra acústica posterior, móvel com as mudanças de decúbito, medindo ${valueInputCalculo} cm.`
      setFraseBexiga([]);
      setFraseBexiga((arr) => [...arr, string]);
    }
  }, [valueSelectCalculo, valueInputCalculo])


  const criaStringSondaFoley = () => {
    const string = 'Presença de sonda com balão visível no lúmen vesical.'
    const conclusaoSondaFoley = 'Presença de sonda vesical.'
    removeFraseSondaFoley()
    removeItemStringConclusao(conclusaoSondaFoley)
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


  useEffect(() => {
    var string = `${StringParedes} de paredes normo-espessas.`
    if (CheiaCheckbox || VaziaCheckbox || NaoVisibilizadaCheckbox) {
      if (NormoEspessasCheckbox) {
        setFraseBexiga((arr) => [...arr, string]);
        setDisableEspessadas(true)
      } else {
        setDisableEspessadas(false)
        removeItemString(string)
      }
    } else {
      removeItemString(string)
    }
  }, [NormoEspessasCheckbox, CheiaCheckbox, VaziaCheckbox, NaoVisibilizadaCheckbox])

  useEffect(() => {
    var string = `${StringParedes} de paredes espessadas.`
    if (CheiaCheckbox || VaziaCheckbox || NaoVisibilizadaCheckbox) {
      if (EspessadasCheckbox) {
        setFraseBexiga((arr) => [...arr, string]);
        setDisableNormoEspessadas(true)
      } else {
        setDisableNormoEspessadas(false)
        removeItemString(string)
      }
      removeItemString(string)
    }
  }, [EspessadasCheckbox, VaziaCheckbox, VaziaCheckbox, NaoVisibilizadaCheckbox])


  useEffect(() => {
    if (CheiaCheckbox || VaziaCheckbox || NaoVisibilizadaCheckbox) {
      setDisableParedes(false)
    } else {
      setDisableParedes(true)
    }

  }, [CheiaCheckbox, VaziaCheckbox, NaoVisibilizadaCheckbox])
  useEffect(() => {
    if (CheiaCheckbox) {
      setDisableVazia(true)
      setDisableNaoVisibilizada(true)
    } else {
      setDisableVazia(false)
      setDisableNaoVisibilizada(false)
    }
  }, [CheiaCheckbox])

  useEffect(() => {
    if (VaziaCheckbox) {
      setDisableCheia(true)
      setDisableNaoVisibilizada(true)
    } else {
      setDisableCheia(false)
      setDisableNaoVisibilizada(false)
    }
  }, [VaziaCheckbox])

  useEffect(() => {
    if (NaoVisibilizadaCheckbox) {

      setDisableCheia(true)
      setDisableVazia(true)
    } else {
      setDisableCheia(false)
      setDisableVazia(false)
    }
  }, [NaoVisibilizadaCheckbox])

  useEffect(() => {
    Disable ? setValue('Bexiga com boa repleção, paredes finas e regulares, conteúdo anecogênico.') : setValue('1')
  }, [Disable])

  const criaStringVolumePreMiccional = (dados1, dados2, dados3) => {
    var string = 'Volume vesical pré-miccional estimado em'
    removeFraseVolumePreMiccional()
    let volume = (parseInt(dados1) + parseInt(dados2) + parseInt(dados3)) / 1000
    setVolumePreMiccionalInput4(volume)
    if (!NaoCitarVolume) {
      if (dados1 != '' && dados2 != '' && dados3 != '' && VolumePreMiccionalInput4 != '') {
        string = `${string} ${VolumePreMiccionalInput4} ml`
        setFraseBexiga((arr) => [...arr, string])
      } else if (dados1 != '' && dados2 != '' && dados3 != '') {
        string = `${string} ${dados1}x${dados2}x${dados3} cm`
        setFraseBexiga((arr) => [...arr, string])
      }
    } else {
      removeFraseVolumePreMiccional()
    }
  }

  const removeFraseVolumePreMiccional = () => {
    FraseBexiga.map((e) => {
      if (e.includes("Volume vesical pré-miccional estimado em")) {
        var index = FraseBexiga.indexOf(e);
        if (index > -1) {
          FraseBexiga.splice(index, 1);
          setFraseBexiga((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (VolumePreMiccionalInput1 != '' && VolumePreMiccionalInput2 != '' && VolumePreMiccionalInput3 != '') {
      criaStringVolumePreMiccional(VolumePreMiccionalInput1, VolumePreMiccionalInput2, VolumePreMiccionalInput3)
    } else {
      removeFraseVolumePreMiccional()
    }

  }, [VolumePreMiccionalInput1, VolumePreMiccionalInput2, VolumePreMiccionalInput3, VolumePreMiccionalInput4, NaoCitarVolume])

  const criaStringResiduo = (dados1, dados2, dados3) => {
    var string = 'Volume residuo estimado em'
    removeFraseResiduo()
    let volume = (parseInt(dados1) + parseInt(dados2) + parseInt(dados3)) / 1000
    setResiduoInput4(volume)
    if (!NaoCitarResiduo) {
      if (dados1 != '' && dados2 != '' && dados3 != '' && ResiduoInput4 != '') {
        string = `${string} ${ResiduoInput4} ml`
        setFraseBexiga((arr) => [...arr, string])
      } else if (dados1 != '' && dados2 != '' && dados3 != '') {
        string = `${string}`
        setFraseBexiga((arr) => [...arr, string])
      }
    } else {
      removeFraseResiduo()
    }
  }

  const removeFraseResiduo = () => {
    FraseBexiga.map((e) => {
      if (e.includes("Volume residuo estimado em")) {
        var index = FraseBexiga.indexOf(e);
        if (index > -1) {
          FraseBexiga.splice(index, 1);
          setFraseBexiga((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (ResiduoInput1 != '' && ResiduoInput2 != '' && ResiduoInput3 != '') {
      criaStringResiduo(ResiduoInput1, ResiduoInput2, ResiduoInput3)
    } else {
      removeFraseResiduo()
    }

  }, [ResiduoInput1, ResiduoInput2, ResiduoInput3, ResiduoInput4, NaoCitarResiduo])

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

        onChange={setValue} value={value} padding="10px">
        <Stack direction="column">
          
            <Stack>
              <Radio value="1">Não citar Bexiga</Radio>
              <Radio  value="Bexiga com boa repleção, paredes finas e regulares, conteúdo anecogênico.">
                Normal
              </Radio>
              <Radio value="Bexiga com boa repleção, de conteúdo anecogênico, apresentando paredes difusamente espessadas e trabeculadas.">
                Difusamente trabeculada (de esforço)
              </Radio>
              <Flex flexWrap={'wrap'}>
                <Radio value="contendo cálculo medindo">
                  Contendo cálculo medindo
                </Radio>

                <Input
                  p='0'
                  textAlign='center'
                  value={valueInputCalculo}
                  isDisabled={DisableInputCalculo}
                  w='60px'
                  placeholder="00"
                  onChange={(e) => setValueInputCalculo(e.target.value)}
                />
                <Text alignSelf='center'>cm com paredes</Text>
                <Select w={'90px'}
                  isDisabled={DisableInputCalculo}
                  value={valueSelectCalculo}
                  onChange={(e) => setValueSelectCalculo(e.target.value)}
                >
                  <option selected disabled value="">Selecione</option>
                  <option value="de espessura normal">de espessura normal</option>
                  <option value="difusamente trabeculadas">difusamente trabeculadas</option>
                </Select>

              </Flex>
              <HStack>
                <Radio value="Estudo ultrassonográfico">
                  Estudo ultrassonográfico
                </Radio>
                <Select w='150px'
                  isDisabled={DisableEstudoUltrassonografico}
                  value={valueSelect1EstudoUltrassonográfico}
                  onChange={(e) => setValueSelect1EstudoUltrassonográfico(e.target.value)}
                >
                  <option selected disabled value="">Selecione</option>
                  <option value="média">Média</option>
                  <option value="repleção">Repleção</option>
                </Select>

              </HStack>
            </Stack>         
          <Box>
            <HStack >
              <Radio value="lesão vegetante">Lesão vegetante medindo</Radio>
              <Input
                p='0'
                textAlign='center' w='60px'
                value={valueInput1}
                placeholder="00"
                isDisabled={enableSelects}
                onChange={(e) => setValueInput1(e.target.value)}
              />
              <Text alignSelf='center'>x</Text>
              <Input
                p='0'
                textAlign='center' w='60px'
                value={valueInput2}
                placeholder="00"
                isDisabled={enableSelects}
                onChange={(e) => setValueInput2(e.target.value)}
              />
              <Text alignSelf='center'>cm</Text>
            </HStack>
            <Box display='flex' flexWrap='wrap' ml='30px'>
              <Text alignSelf='center'>situada</Text>
              <Select w='150px'
                isDisabled={enableSelects}
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
      <Box gap='25px' display='flex' flexWrap='wrap'>

        <Checkbox w={'100%'}
          onChange={() => setSondaFoleyCheckbox(!SondaFoleyCheckbox)}>
          Presença de sonda Foley
        </Checkbox>

        <Checkbox
          disabled={DisableCheia}
          onChange={() => {
            setStringParedes('Cheia,')
            setCheiaCheckbox(!CheiaCheckbox)
          }}
        >
          Cheia
        </Checkbox>
        <Checkbox
          disabled={DisableVazia}
          onChange={() => {
            setStringParedes('Vazia,')
            setVaziaCheckbox(!VaziaCheckbox)
          }}
        >
          Vazia
        </Checkbox>
        <Checkbox
          disabled={DisableNaoVisibilizada}
          onChange={() => {
            setStringParedes('Não visibilizada,')
            setNaoVisibilizadaCheckbox(!NaoVisibilizadaCheckbox)
          }}
        >
          Não visibilizada
        </Checkbox>
      </Box >
      <Box gap='25px' display='flex' flexWrap='wrap'>
        <Checkbox
          disabled={DisableParedes || DisableNormoEspessadas}
          onChange={() => setNormoEspessasCheckbox(!NormoEspessasCheckbox)}
        >
          Paredes normo-espessas
        </Checkbox>
        <Checkbox
          disabled={DisableParedes || DisableEspessadas}
          onChange={() => setEspessadasCheckbox(!EspessadasCheckbox)}
        >
          Paredes espessadas
        </Checkbox>
      </Box>
      <Box display='flex' flexWrap='wrap'>
        <Box display='flex' flexWrap='wrap'>
          <Checkbox
            onChange={() => setImagensCalculosasCheckbox(!ImagensCalculosasCheckbox)}
          >
            Imagens calculosas
          </Checkbox>
          <Select w='150px'
            isDisabled={!ImagensCalculosasCheckbox}
            value={ImagensCalculosasSelect}
            onChange={(e) => setImagensCalculosasSelect(e.target.value)}
          >
            <option selected disabled value="">Selecione</option>
            <option value="Não se notam imagens calculosas.">Ausente</option>
            <option value="Presença de imagem hiper ecogênica, produtora de sombra acústica posterior, compatível com calculo.">Presente</option>
          </Select>
        </Box >
        <Box display='flex' flexWrap='wrap'>
          <Checkbox
            onChange={() => setColecaoPelvicaCheckbox(!ColecaoPelvicaCheckbox)}
          >
            Massa ou de coleção pélvica
          </Checkbox>
          <Select w='150px'
            isDisabled={!ColecaoPelvicaCheckbox}
            value={ColecaoPelvicaSelect}
            onChange={(e) => setColecaoPelvicaSelect(e.target.value)}
          >
            <option selected disabled value="">Selecione</option>
            <option value="Ausência">Ausente</option>
            <option value="Presença">Presente</option>
          </Select>
        </Box >
      </Box >

      <Box mb="20px" gap="10px" display="flex" flexWrap="wrap" mt="20px">


        <Box>
          <Box>
            <Text>Vol. pré-miccional:</Text>
            <HStack flexWrap="wrap" alignItems="center" gap={1}>
              <Input
                p='0'
                textAlign='center'
                w="50px"
                value={VolumePreMiccionalInput1}
                onChange={(e) => {
                  setVolumePreMiccionalInput1(e.target.value);
                }}
                placeholder="0"
              />
              <Text>x</Text>
              <Input
                p='0'
                textAlign='center'
                w="50px"
                value={VolumePreMiccionalInput2}
                onChange={(e) => {
                  setVolumePreMiccionalInput2(e.target.value);
                }}
                placeholder="0"
              />
              <Text>x</Text>
              <Input
                p='0'
                textAlign='center'
                w="50px"
                value={VolumePreMiccionalInput3}
                onChange={(e) => {
                  setVolumePreMiccionalInput3(e.target.value);
                }}
                placeholder="0"
              />
              <Text>cm = </Text>
              <Input
                p='0'
                textAlign='center'
                w="50px"
                value={VolumePreMiccionalInput4}
                onChange={(e) => {
                  setVolumePreMiccionalInput4(e.target.value);
                }}
                placeholder="0"
              />
              <Text>ml</Text>
              <Checkbox
                onChange={() => setNaoCitarVolume(!NaoCitarVolume)}>
                Não citar
              </Checkbox>
            </HStack>
          </Box>
        </Box>
        <Box>
          <Text>Resíduo:</Text>
          <HStack flexWrap="wrap" alignItems="center" gap={1}>
            <Input
              p='0'
              textAlign='center'
              w="50px"
              value={ResiduoInput1}
              onChange={(e) => {
                setResiduoInput1(e.target.value);
              }}
              placeholder="0"
            />
            <Text>x</Text>
            <Input
              p='0'
              textAlign='center'
              w="50px"
              value={ResiduoInput2}
              onChange={(e) => {
                setResiduoInput2(e.target.value);
              }}
              placeholder="0"
            />
            <Text>x</Text>
            <Input
              p='0'
              textAlign='center'
              w="50px"
              value={ResiduoInput3}
              onChange={(e) => {
                setResiduoInput3(e.target.value);
              }}
              placeholder="0"
            />
            <Text>cm = </Text>
            <Input
              p='0'
              textAlign='center'
              w="50px"
              value={ResiduoInput4}
              onChange={(e) => {
                setResiduoInput4(e.target.value);
              }}
              placeholder="0"
            />
            <Text>ml</Text>
            <Checkbox
              onChange={() => setNaoCitarResiduo(!NaoCitarResiduo)}>
              Não citar
            </Checkbox>
          </HStack>
        </Box>
      </Box>
    </Box >
  );
}

export default Bexiga