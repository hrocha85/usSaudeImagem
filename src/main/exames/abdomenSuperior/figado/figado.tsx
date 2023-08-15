/* eslint-disable array-callback-return */

import { Box, Button, Checkbox, HStack, Input, Select, Stack, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Convert_Medida } from "../../../component/function_convert_medidas";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";
import IndividualizarCistos from "./individualizarCistoSimples";
import IndividualizarNodulos from "./individualizarNodulos";

function Figado({ Disable }) {
  const altura = "100%";
  const largura = "66%";

  const [numberArray, setNumberArray] = useState([1]);

  const [UpdateCistos, setUpdateCistos] = useState(false);

  function Cistos() {
    return (
      <>
        {numberArray.map((num, key) => {
          return <IndividualizarCistos key={key} numCalculo={num} />;
        })}
      </>
    );
  }

  useEffect(() => {
    if (UpdateCistos) {
      setUpdateCistos(false);
      setNumberArray([...numberArray, numberArray.length + 1]);
      Cistos();
    }
  }, [UpdateCistos]);

  const [numberArrayNodulos, setNumberArrayNodulos] = useState([1]);

  const [UpdateNodulos, setUpdateNodulos] = useState(false);

  function Nodulos() {
    return (
      <>
        {numberArrayNodulos.map((num, key) => {
          return <IndividualizarNodulos key={key} numCalculo={num} />;
        })}
      </>
    );
  }

  useEffect(() => {
    if (UpdateNodulos) {
      setUpdateNodulos(false);
      setNumberArrayNodulos([...numberArrayNodulos, numberArrayNodulos.length + 1]);
      Nodulos();
    }
  }, [UpdateNodulos]);

  const [HemangiomaCheckbox, setHemangiomaCheckbox] = useState(false)
  const [HomogeneoCheckbox, setHomogeneoCheckbox] = useState(false)
  const [EsteatoseCheckbox, setEsteatoseCheckbox] = useState(false)
  const [HepatopatiaCronicaCheckbox, setHepatopatiaCronicaCheckbox] = useState(false)

  const [VariosCistosCheckbox, setVariosCistosCheckbox] = useState(false)

  const [VariosNodulosCheckbox, setVariosNodulosCheckbox] = useState(false)
  const [CalcificacaoGrosseiraCheckbox, setCalcificacaoGrosseiraCheckbox] = useState(false)

  const [DisableEsteatoseSelect, setDisableEsteatoseSelect] = useState(true)
  const [DisableHepatopatiaCronicaSelect, setDisableHepatopatiaCronicaSelect] = useState(true)

  const [DisableVariosCistosSelect, setDisableVariosCistosSelect] = useState(true)


  const [DisableVariosNodulosSelect1, setDisableVariosNodulosSelect1] = useState(true)

  const [DisableCalcificacaoGrosseiraSelect, setDisableCalcificacaoGrosseiraSelect] = useState(true)

  const [EsteatoseSelect, setEsteatoseSelect] = useState('')
  const [HepatopatiaCronicaSelect, setHepatopatiaCronicaSelect] = useState('')


  const [VariosCistosSelect, setVariosCistosSelect] = useState('')
  const [VariosCistosInput, setVariosCistosInput] = useState('')


  const [VariosNodulosSelect1, setVariosNodulosSelect1] = useState('')
  const [VariosNodulosSelect2, setVariosNodulosSelect2] = useState('')
  const [VariosNodulosInput1, setVariosNodulosInput1] = useState('')
  const [VariosNodulosInput2, setVariosNodulosInput2] = useState('')
  const [VariosNodulosSelect3, setVariosNodulosSelect3] = useState('')
  const [VariosNodulosSelect4, setVariosNodulosSelect4] = useState('')

  const [CalcificacaoGrosseiraSelect, setCalcificacaoGrosseiraSelect] = useState('')
  const [CalcificacaoGrosseiraInput, setCalcificacaoGrosseiraInput] = useState('')

  const [DimensoesSelect, setDimensoesSelect] = useState('')
  const [LDInput, setLDInput] = useState('')
  const [LEInput, setLEInput] = useState('')
  const [LCInput, setLCInput] = useState('')
  const [LDCheckbox, setLDCheckbox] = useState(false)
  const [LECheckbox, setLECheckbox] = useState(false)
  const [LCCheckbox, setLCCheckbox] = useState(false)
  const [DimensoesCheckbox, setDimensoesCheckbox] = useState(false)
  const [DisableDimensoesOptions, setDisableDimensoesOptions] = useState(false)

  const [DisableLDInput, setDisableLDInput] = useState(true)
  const [DisableLEInput, setDisableLEInput] = useState(true)
  const [DisableLCInput, setDisableLCInput] = useState(true)

  useEffect(() => {
    const string = 'Presença de Hemangioma'
    HemangiomaCheckbox ? setFrasesFigado((arr) => [...arr, string]) : removeItemString(string)
  }, [HemangiomaCheckbox])

  const subExame = "Fígado";
  const titulo_exame = "Abdomen Superior";

  const [frasesFigado, setFrasesFigado] = useState<any>([]);
  const [ConclusoesFigado, setConclusoesFigado] = useState<any>([]);

  useEffect(() => {
    if (Object.keys(frasesFigado).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesFigado,
        ConclusoesFigado
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesFigado,
        ConclusoesFigado
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesFigado]);

  const removeItemString = (value) => {
    const index = frasesFigado.indexOf(value);
    if (index > -1) {
      frasesFigado.splice(index, 1);
      setFrasesFigado((arr) => [...arr]);
    }
  };
  const removeItemStringConclusao = (value) => {
    const index = ConclusoesFigado.indexOf(value);
    if (index > -1) {
      ConclusoesFigado.splice(index, 1);
      setConclusoesFigado((arr) => [...arr]);
      new Format_Laudo(titulo_exame).Remove_Conclusao(value);
    }
  };

  useEffect(() => {
    const string = 'Fígado com dimensões normais, contornos regulares, bordas finas e ecotextura homogênea.'
    HomogeneoCheckbox ? setFrasesFigado((arr) => [...arr, string]) : removeItemString(string)
  }, [HomogeneoCheckbox])


  const criaStringEsteatose = (select) => {
    let string = 'Fígado com dimensões normais, contornos regulares e bordas finas, apresentando '
    removeFraseEsteatose()
    if (select !== '') {
      string = `${string} ${select}`;
      setFrasesFigado((arr) => [...arr, string]);
    }
  };
  const removeFraseEsteatose = () => {
    frasesFigado.map((e) => {
      if (e.includes("Fígado com dimensões normais, contornos regulares e bordas finas, apresentando ")) {
        const index = frasesFigado.indexOf(e);

        if (index > -1) {
          frasesFigado.splice(index, 1);
          setFrasesFigado((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (EsteatoseCheckbox) {
      criaStringEsteatose(EsteatoseSelect)
      setDisableEsteatoseSelect(false)
    } else {
      setEsteatoseSelect('')
      setDisableEsteatoseSelect(true)
      removeFraseEsteatose()
    }
  }, [EsteatoseCheckbox, EsteatoseSelect])

  const criaStringHepatopatiaCronica = (select) => {
    let string = 'Fígado com dimensões normais e ecotextura difusamente heterogênea '
    removeFraseHepatopatiaCronica()
    if (select !== '') {
      string = `${string} ${select}`;
      setFrasesFigado((arr) => [...arr, string]);
    }
  };
  const removeFraseHepatopatiaCronica = () => {
    frasesFigado.map((e) => {
      if (e.includes("Fígado com dimensões normais e ecotextura difusamente heterogênea")) {
        const index = frasesFigado.indexOf(e);

        if (index > -1) {
          frasesFigado.splice(index, 1);
          setFrasesFigado((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (HepatopatiaCronicaCheckbox) {
      criaStringHepatopatiaCronica(HepatopatiaCronicaSelect)
      setDisableHepatopatiaCronicaSelect(false)
    } else {
      setHepatopatiaCronicaSelect('')
      setDisableHepatopatiaCronicaSelect(true)
      removeFraseHepatopatiaCronica()
    }
  }, [HepatopatiaCronicaCheckbox, HepatopatiaCronicaSelect])



  const criaStringVariosCistos = (select, input) => {
    let string = 'Cistos de conteúdo anecogênico, com paredes finas e contornos regulares '
    removeFraseVariosCistos()
    const medida = new Convert_Medida(input).Convert_Medida()
    if (select !== '' && input !== '') {
      string = `${string}, medindo até ${medida} cm, o maior localizado no ${select}. Veia porta e veias hepáticas sem alterações.`;
      setFrasesFigado((arr) => [...arr, string]);
    }
  };
  const removeFraseVariosCistos = () => {
    frasesFigado.map((e) => {
      if (e.includes("Cistos de conteúdo anecogênico, com paredes finas e contornos regulares")) {
        const index = frasesFigado.indexOf(e);

        if (index > -1) {
          frasesFigado.splice(index, 1);
          setFrasesFigado((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (VariosCistosCheckbox) {
      criaStringVariosCistos(VariosCistosSelect, VariosCistosInput)
      setDisableVariosCistosSelect(false)
    } else {
      setDisableVariosCistosSelect(true)
      setVariosCistosSelect('')
      setVariosCistosInput('')
      removeFraseVariosCistos()
    }
  }, [VariosCistosCheckbox, VariosCistosSelect, VariosCistosInput])




  const removeFraseConclusaoNodulo = () => {
    ConclusoesFigado.map((e) => {
      if (e.includes("Nódulo hepático.")) {
        const index = ConclusoesFigado.indexOf(e);

        if (index > -1) {
          ConclusoesFigado.splice(index, 1);
          setConclusoesFigado((arr) => [...arr]);
          new Format_Laudo(titulo_exame).Remove_Conclusao('Nódulo hepático.');
        }
      }
    });
  };


  const criaStringVariosNodulos = (select1, select2, select3, select4, input1, input2) => {
    let string = 'Presença de'
    const conclusaoNodulos = 'Nódulo hepático.'

    removeFraseVariosNodulos()
    if (select1 !== '' && input1 !== '' && select2 !== '' && select3 !== '' && select4 !== '' && input2) {
      string = `${string} ${select1} ${select2} de contornos regulares medindo ${input1} cm(${select3}) e ${input2} cm (${select4}). Veia porta e veias hepáticas sem alterações.`;
      setFrasesFigado((arr) => [...arr, string]);
      removeFraseConclusaoNodulo()
      setConclusoesFigado((arr) => [...arr, conclusaoNodulos]);
    }
  };
  const removeFraseVariosNodulos = () => {
    frasesFigado.map((e) => {
      if (e.includes("Presença de")) {
        const index = frasesFigado.indexOf(e);

        if (index > -1) {
          frasesFigado.splice(index, 1);
          setFrasesFigado((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (VariosNodulosCheckbox) {
      criaStringVariosNodulos(VariosNodulosSelect1, VariosNodulosSelect2, VariosNodulosSelect3, VariosNodulosSelect4, VariosNodulosInput1, VariosNodulosInput2)
      setDisableVariosNodulosSelect1(false)
    } else {
      removeFraseConclusaoNodulo()
      setDisableVariosNodulosSelect1(true)
      setVariosNodulosSelect1('')
      setVariosNodulosSelect2('')
      setVariosNodulosSelect3('')
      setVariosNodulosSelect4('')
      setVariosNodulosInput1('')
      setVariosNodulosInput2('')
      removeFraseVariosNodulos()
    }
  }, [VariosNodulosCheckbox, VariosNodulosSelect1, VariosNodulosSelect2, VariosNodulosSelect3, VariosNodulosSelect4, VariosNodulosInput1, VariosNodulosInput2])

  const criaStringCalcificacaoGrosseira = (select, input) => {
    let string = 'Nota-se uma calcificação grosseira de '

    removeFraseCalcificacaoGrosseira()
    if (select !== '' && input !== '') {
      string = `${string} ${input} cm localizada no ${select}.`;
      setFrasesFigado((arr) => [...arr, string]);
    }
  };
  const removeFraseCalcificacaoGrosseira = () => {
    frasesFigado.map((e) => {
      if (e.includes("Nota-se uma calcificação grosseira de")) {
        const index = frasesFigado.indexOf(e);

        if (index > -1) {
          frasesFigado.splice(index, 1);
          setFrasesFigado((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (CalcificacaoGrosseiraCheckbox) {
      criaStringCalcificacaoGrosseira(CalcificacaoGrosseiraSelect, CalcificacaoGrosseiraInput)
      setDisableCalcificacaoGrosseiraSelect(false)
    } else {
      setCalcificacaoGrosseiraSelect('')
      setCalcificacaoGrosseiraInput('')
      setDisableCalcificacaoGrosseiraSelect(true)
      removeFraseCalcificacaoGrosseira()
    }
  }, [CalcificacaoGrosseiraCheckbox, CalcificacaoGrosseiraSelect, CalcificacaoGrosseiraInput])

  const criaStringDimensoes = (select, LDMedida, LEMedida, LCMedida) => {
    let string = 'Fígado com dimensões'
    removeFraseDimensoes()
    if (select !== '') {
      string = `${string} ${select}, contornos regulares, bordas finas e ecotextura homogênea. Veia 
      porta e veias hepáticas sem alterações`;
      if (select == 'aumentadas') {
        setConclusoesFigado((arr) => [...arr, 'Hepatomegalia.'])
      } else {
        removeItemStringConclusao('Hepatomegalia.')
      }
      if (LDMedida !== '') {
        string = `${string}. Eixo longitudinal do lobo direito mede ${LDMedida} cm,`;
      }
      if (LEMedida !== '') {
        string = `${string}. Eixo longitudinal do lobo esquerdo mede ${LEMedida} cm,`;
      }
      if (LCMedida !== '') {
        string = `${string}. Eixo longitudinal do lobo caudado mede ${LCMedida} cm,`;
      }
      string = `${string} veia porta e veias hepáticas sem alterações.`
      setFrasesFigado((arr) => [...arr, string]);
    }
  };
  const removeFraseDimensoes = () => {
    frasesFigado.map((e) => {
      if (e.includes("Fígado com dimensões")) {
        const index = frasesFigado.indexOf(e);

        if (index > -1) {
          frasesFigado.splice(index, 1);
          setFrasesFigado((arr) => [...arr]);
        }
      }
    });
  };


  useEffect(() => {
    if (DimensoesCheckbox) {
      criaStringDimensoes(DimensoesSelect, LDInput, LEInput, LCInput)
      setDisableDimensoesOptions(false)
    } else {
      setDisableDimensoesOptions(true)
      setDimensoesSelect('')
      setLDInput('')
      setLEInput('')
      setLCInput('')
      setDisableLDInput(true)
      setDisableLCInput(true)
      setDisableLEInput(true)
      removeFraseDimensoes()
    }
  }, [DimensoesCheckbox, DimensoesSelect, LDInput, LEInput, LCInput])

  useEffect(() => {
    if (LDCheckbox) {
      setDisableLDInput(false)
    } else {
      setLDInput('')
      setDisableLDInput(true)
    }
  }, [LDCheckbox])

  useEffect(() => {
    if (LECheckbox) {
      setDisableLEInput(false)
    } else {
      setLEInput('')
      setDisableLEInput(true)
    }
  }, [LECheckbox])

  useEffect(() => {
    if (LCCheckbox) {
      setDisableLCInput(false)
    } else {
      setLCInput('')
      setDisableLCInput(true)
    }
  }, [LCCheckbox])

  const [Normal, setNormal] = useState(false)

  useEffect(() => {
    Disable ? setNormal(true) : setNormal(false)
  }, [Disable])

  useEffect(() => {
    Normal ? setHomogeneoCheckbox(true) : setHomogeneoCheckbox(false)
  }, [Normal])

  return (
    <Box
      bg="#FAFAFA"
      w={largura}
      h={altura}
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="10.85px"
      boxShadow="md"
      padding="24px 15px 15px 15px"
    >
      <Box borderBottom="1px">
        <TituloNomeExame titulo="Fígado" />

        <Box gap="25px" display="flex" flexWrap="wrap" mb="10px">
          <Box>
            <Checkbox
              isChecked={Normal}
              onChange={(e) => {
                setNormal(!Normal)
                setHomogeneoCheckbox(!HomogeneoCheckbox);
              }}
            >
              Homogêneo
            </Checkbox>
          </Box>
          <Box>
            <Checkbox

              onChange={(e) => {
                setEsteatoseCheckbox(!EsteatoseCheckbox);
              }}
            >
              Esteatose
            </Checkbox>
            <Select
              w="100%"
              isDisabled={DisableEsteatoseSelect}
              value={EsteatoseSelect}
              onChange={(e) => {
                setEsteatoseSelect(e.target.value);
              }}
            >
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="aumento difuso da ecogenicidade que determina atenuação posterior do feixe acústico.">Grau não especificado</option>
              <option value="discreto aumento difuso da ecogenicidade.">Discreta</option>
              <option value="Sinais de esteatose hepática moderada (grau II).">Moderada</option>
              <option value="acentuada">Acentuada</option>
            </Select>
          </Box>
          <Box>
            <Checkbox

              onChange={(e) => {
                setHepatopatiaCronicaCheckbox(!HepatopatiaCronicaCheckbox)
              }}
            >
              Hepatopatia crônica
            </Checkbox>
            <Select
              w="100%"
              isDisabled={DisableHepatopatiaCronicaSelect}
              value={HepatopatiaCronicaSelect}
              onChange={(e) => {
                setHepatopatiaCronicaSelect(e.target.value);
              }}
            >
              <option value="" disabled selected>
                Selecione
              </option>
              <option value=", com bordas discretamente rombas, conservando contornos regulares.">Incipiente</option>
              <option value=", contornos serrilhados e bordas rombas.">Avançada</option>
            </Select>
          </Box >

          <Box borderWidth="2px" borderColor="blue.100" borderRadius="lg" p='5px'>
            <HStack>
              <Box>
                <Checkbox

                  onChange={(e) => {
                    setDimensoesCheckbox(!DimensoesCheckbox)
                  }}
                >
                  Dimensões
                </Checkbox>
                <Select
                  isDisabled={DisableDimensoesOptions}
                  w="100%"
                  value={DimensoesSelect}
                  onChange={(e) => {
                    setDimensoesSelect(e.target.value);
                  }}
                >
                  <option value="" disabled selected>
                    Selecione
                  </option>
                  <option value="normais">Normais</option>
                  <option value="aumentadas">Aumentadas</option>
                  <option value="aumentadas à custa do lobo direito">Aumentadas à custa do lobo direito</option>
                  <option value="aumentadas à custa do lobo esquerdo">Aumentadas à custa do lobo esquerdo</option>
                  <option value="reduzidas">Reduzidas</option>
                </Select>
              </Box>
              <Stack>
                <HStack>
                  <Checkbox
                    isDisabled={DisableDimensoesOptions}
                    onChange={(e) => {
                      setLDCheckbox(!LDCheckbox)
                    }}
                  >
                    LD
                  </Checkbox>
                  <Input
                    p='0px'
                    textAlign='center'
                    w='60px'
                    isDisabled={DisableLDInput}
                    value={LDInput}
                    onChange={(e) => {
                      setLDInput(e.target.value);
                    }}
                    placeholder="cm"
                  />
                </HStack>
                <HStack>
                  <Checkbox
                    isDisabled={DisableDimensoesOptions}
                    onChange={(e) => {
                      setLECheckbox(!LECheckbox)
                    }}
                  >
                    LE
                  </Checkbox>
                  <Input
                    p='0px'
                    textAlign='center'
                    w='60px'
                    isDisabled={DisableLEInput}
                    value={LEInput}
                    onChange={(e) => {
                      setLEInput(e.target.value);
                    }}
                    placeholder="cm"
                  />
                </HStack>
                <HStack>
                  <Checkbox
                    isDisabled={DisableDimensoesOptions}
                    onChange={(e) => {
                      setLCCheckbox(!LCCheckbox)
                    }}
                  >
                    LC
                  </Checkbox>
                  <Input
                    p='0px'
                    textAlign='center'
                    w='60px'
                    isDisabled={DisableLCInput}
                    value={LCInput}
                    onChange={(e) => {
                      setLCInput(e.target.value);
                    }}
                    placeholder="cm"
                  />
                </HStack>
              </Stack>
            </HStack>
          </Box>

        </Box>
      </Box>

      {/* ------------------------------------------------------------------------------------------------------------ */}

      <Box
        mt="20px"
      >
        <Box gap="10px" display="flex" flexWrap="wrap">
          {Cistos()}
          <Button
            colorScheme="blue"
            onClick={() => {
              setUpdateCistos(true);
            }}
          >
            +1 Cisto
          </Button>
        </Box>


        <Box
          mt='10px'
          gap='5px'
          display='flex'
          flexWrap='wrap'>
          <Checkbox

            w='auto'
            onChange={(e) => {
              setVariosCistosCheckbox(!VariosCistosCheckbox);
            }}
          >
            Vários cistos, o maior com
          </Checkbox>
          <Input
            p='0px'
            textAlign='center'
            w='60px'
            isDisabled={DisableVariosCistosSelect}
            value={VariosCistosInput}
            onChange={(e) => {
              setVariosCistosInput(e.target.value);
            }}
            placeholder="cm"
          />
          <Text alignSelf='center'>cm, atuando no</Text>
          <Select
            w='150px'
            isDisabled={DisableVariosCistosSelect}
            value={VariosCistosSelect}
            onChange={(e) => {
              setVariosCistosSelect(e.target.value);
            }}
          >
            <option value="" disabled selected>
              Selecione
            </option>
            <option value="Segmento I">Segmento I</option>
            <option value="Segmento II">Segmento II</option>
            <option value="Segmento III">Segmento III</option>
            <option value="Segmento IV">Segmento IV</option>
            <option value="Segmento V">Segmento V</option>
            <option value="Segmento VI">Segmento VI</option>
            <option value="Segmento VII">Segmento VII</option>
            <option value="Segmento VIII">Segmento VIII</option>
          </Select>
        </Box>

        {/* ------------------------------------------------------------------------------------------------------------ */}

        <Box mt="20px" gap="25px" >
          <Box gap="10px" display="flex" flexWrap="wrap">
            {Nodulos()}
            <Button
              colorScheme="blue"
              onClick={() => {
                setUpdateNodulos(true);
              }}
            >
              +1 Nodulo
            </Button>
          </Box>


          <Box
            display='flex'
            flexWrap='wrap'
            gap='5px'>
            <Checkbox

              onChange={(e) => {
                setVariosNodulosCheckbox(!VariosNodulosCheckbox);
              }}
            >
              Nódulos
            </Checkbox>
            <Select
              w='150px'
              isDisabled={DisableVariosNodulosSelect1}
              value={VariosNodulosSelect1}
              onChange={(e) => {
                setVariosNodulosSelect1(e.target.value);
              }}
            >
              <option value="" disabled selected>
                Localizado
              </option>
              <option value="hiperecongênico">Hiperecongênico</option>
              <option value="hipoecogênico">Hipoecogênico</option>
              <option value="hipoecogênico (hemangioma)">Hipoecogênico (hemangioma)</option>
            </Select>
            <Select
              w='150px'
              isDisabled={DisableVariosNodulosSelect1}
              value={VariosNodulosSelect2}
              onChange={(e) => {
                setVariosNodulosSelect2(e.target.value);
              }}
            >
              <option value="" disabled selected>
                Contornos
              </option>
              <option value="dois no total">Dois no total</option>
              <option value="os dois maiores">Os dois maiores</option>

            </Select>
            <Text alignSelf='center'>medindo</Text>
            <Input
              p='0px'
              textAlign='center'
              w='60px'
              isDisabled={DisableVariosNodulosSelect1}
              value={VariosNodulosInput1}
              onChange={(e) => {
                setVariosNodulosInput1(e.target.value);
              }}
              placeholder="cm"
            />
            <Text alignSelf='center'>cm</Text>
            <Text alignSelf='center'>no</Text>
            <Select
              w='150px'
              isDisabled={DisableVariosNodulosSelect1}
              value={VariosNodulosSelect3}
              onChange={(e) => {
                setVariosNodulosSelect3(e.target.value);
              }}
            >
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="Segmento I">Segmento I</option>
              <option value="Segmento II">Segmento II</option>
              <option value="Segmento III">Segmento III</option>
              <option value="Segmento IV">Segmento IV</option>
              <option value="Segmento V">Segmento V</option>
              <option value="Segmento VI">Segmento VI</option>
              <option value="Segmento VII">Segmento VII</option>
              <option value="Segmento VIII">Segmento VIII</option>
            </Select>
            <Text alignSelf='center'>, e medindo</Text>
            <Input
              p='0px'
              textAlign='center'
              w='60px'
              isDisabled={DisableVariosNodulosSelect1}
              value={VariosNodulosInput2}
              onChange={(e) => {
                setVariosNodulosInput2(e.target.value);
              }}
              placeholder="cm"
            />
            <Text alignSelf='center'>cm</Text>
            <Text alignSelf='center'>no</Text>

            <Select
              w='150px'
              isDisabled={DisableVariosNodulosSelect1}
              value={VariosNodulosSelect4}
              onChange={(e) => {
                setVariosNodulosSelect4(e.target.value);
              }}
            >
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="Segmento I">Segmento I</option>
              <option value="Segmento II">Segmento II</option>
              <option value="Segmento III">Segmento III</option>
              <option value="Segmento IV">Segmento IV</option>
              <option value="Segmento V">Segmento V</option>
              <option value="Segmento VI">Segmento VI</option>
              <option value="Segmento VII">Segmento VII</option>
              <option value="Segmento VIII">Segmento VIII</option>
            </Select>
          </Box>

          <Box
            mt='10px'
            display='flex'
            flexWrap='wrap'
            gap='5px'>
            <Checkbox

              onChange={(e) => {
                setCalcificacaoGrosseiraCheckbox(!CalcificacaoGrosseiraCheckbox);
              }}
            >
              Calcificação grosseira de
            </Checkbox>
            <Select
              w='150px'
              isDisabled={DisableCalcificacaoGrosseiraSelect}
              value={CalcificacaoGrosseiraSelect}
              onChange={(e) => {
                setCalcificacaoGrosseiraSelect(e.target.value);
              }}
            >
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="Segmento I">Segmento I</option>
              <option value="Segmento II">Segmento II</option>
              <option value="Segmento III">Segmento III</option>
              <option value="Segmento IV">Segmento IV</option>
              <option value="Segmento V">Segmento V</option>
              <option value="Segmento VI">Segmento VI</option>
              <option value="Segmento VII">Segmento VII</option>
              <option value="Segmento VIII">Segmento VIII</option>
            </Select>
            <Input
              p='0px'
              textAlign='center'
              w='60px'
              isDisabled={DisableCalcificacaoGrosseiraSelect}
              value={CalcificacaoGrosseiraInput}
              onChange={(e) => {
                setCalcificacaoGrosseiraInput(e.target.value);
              }}
              placeholder="cm"
            />
          </Box>
        </Box>
      </Box>
      <Box>
        <Checkbox

          onChange={(e) => {
            setHemangiomaCheckbox(!HemangiomaCheckbox);
          }}
        >
          Hemangioma
        </Checkbox>
      </Box>
    </Box>
  );
}

export default Figado;
