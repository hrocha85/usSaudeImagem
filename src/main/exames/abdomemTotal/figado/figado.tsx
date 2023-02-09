/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Select, Stack, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { NormalContext } from "../../../../context/NormalContext";
import { Convert_Medida } from "../../../component/function_convert_medidas";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Figado() {
  const altura = "100%";
  const largura = "66%";

  const { laudoNormal } = useContext(NormalContext);

  const [HomogeneoCheckbox, setHomogeneoCheckbox] = useState(false)
  const [EsteatoseCheckbox, setEsteatoseCheckbox] = useState(false)
  const [HepatopatiaCronicaCheckbox, setHepatopatiaCronicaCheckbox] = useState(false)
  const [CistoSimplesCheckbox, setCistoSimplesCheckbox] = useState(false)
  const [VariosCistosCheckbox, setVariosCistosCheckbox] = useState(false)
  const [NoduloCheckbox, setNoduloCheckbox] = useState(false)
  const [VariosNodulosCheckbox, setVariosNodulosCheckbox] = useState(false)
  const [CalcificacaoGrosseiraCheckbox, setCalcificacaoGrosseiraCheckbox] = useState(false)

  const [DisableEsteatoseSelect, setDisableEsteatoseSelect] = useState(true)
  const [DisableHepatopatiaCronicaSelect, setDisableHepatopatiaCronicaSelect] = useState(true)

  const [DisableCistoSimplesSelect, setDisableCistoSimplesSelect] = useState(true)

  const [DisableVariosCistosSelect, setDisableVariosCistosSelect] = useState(true)

  const [DisableNoduloSelect1, setDisableNoduloSelect1] = useState(true)

  const [DisableVariosNodulosSelect1, setDisableVariosNodulosSelect1] = useState(true)

  const [DisableCalcificacaoGrosseiraSelect, setDisableCalcificacaoGrosseiraSelect] = useState(true)

  const [EsteatoseSelect, setEsteatoseSelect] = useState('')
  const [HepatopatiaCronicaSelect, setHepatopatiaCronicaSelect] = useState('')
  const [CistoSimplesSelect, setCistoSimplesSelect] = useState('')
  const [CistoSimplesInput, setCistoSimplesInput] = useState('')

  const [VariosCistosSelect, setVariosCistosSelect] = useState('')
  const [VariosCistosInput, setVariosCistosInput] = useState('')

  const [NoduloSelect1, setNoduloSelect1] = useState('')
  const [NoduloSelect2, setNoduloSelect2] = useState('')
  const [NoduloInput1, setNoduloInput1] = useState('')
  const [NoduloInput2, setNoduloInput2] = useState('')
  const [NoduloSelect3, setNoduloSelect3] = useState('')

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

  const subExame = "Fígado";
  const titulo_exame = "Abdomen total";


  const [frasesFigado, setFrasesFigado] = useState<any>([]);
  useEffect(() => {
    if (Object.keys(frasesFigado).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesFigado
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesFigado
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesFigado]);

  const removeItemString = (value) => {
    var index = frasesFigado.indexOf(value);
    if (index > -1) {
      frasesFigado.splice(index, 1);
      setFrasesFigado((arr) => [...arr]);
    }
  };

  useEffect(() => {
    var string = 'Fígado com dimensões normais, contornos regulares, bordas finas e ecotextura homogênea.'
    HomogeneoCheckbox ? setFrasesFigado((arr) => [...arr, string]) : removeItemString(string)
  }, [HomogeneoCheckbox])

  const criaStringEsteatose = (select) => {
    var string = 'Fígado com dimensões normais, contornos regulares e bordas finas, apresentando '
    removeFraseEsteatose()
    if (select !== '') {
      string = `${string} ${select}`;
      setFrasesFigado((arr) => [...arr, string]);
    }
  };
  const removeFraseEsteatose = () => {
    frasesFigado.map((e) => {
      if (e.includes("Fígado com dimensões normais, contornos regulares e bordas finas, apresentando ")) {
        var index = frasesFigado.indexOf(e);

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
    var string = 'Fígado com dimensões normais e ecotextura difusamente heterogênea '
    removeFraseHepatopatiaCronica()
    if (select !== '') {
      string = `${string} ${select}`;
      setFrasesFigado((arr) => [...arr, string]);
    }
  };
  const removeFraseHepatopatiaCronica = () => {
    frasesFigado.map((e) => {
      if (e.includes("Fígado com dimensões normais e ecotextura difusamente heterogênea")) {
        var index = frasesFigado.indexOf(e);

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

  const criaStringCistoSimples = (select, input) => {
    var string = 'Cisto de conteúdo anecogênico, com paredes finas e contornos regulares '
    removeFraseCistoSimples()
    var medida = new Convert_Medida(input).Convert_Medida()
    if (select !== '' && input !== '') {
      string = `${string}, medindo ${medida} cm, localizado no ${select}. Veia porta e veias hepáticas sem alterações `;
      setFrasesFigado((arr) => [...arr, string]);
    }
  };
  const removeFraseCistoSimples = () => {
    frasesFigado.map((e) => {
      if (e.includes("Cisto de conteúdo anecogênico, com paredes finas e contornos regulares")) {
        var index = frasesFigado.indexOf(e);

        if (index > -1) {
          frasesFigado.splice(index, 1);
          setFrasesFigado((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (CistoSimplesCheckbox) {
      criaStringCistoSimples(CistoSimplesSelect, CistoSimplesInput)
      setDisableCistoSimplesSelect(false)
    } else {
      setCistoSimplesSelect('')
      setCistoSimplesInput('')
      setDisableCistoSimplesSelect(true)
      removeFraseCistoSimples()
    }
  }, [CistoSimplesCheckbox, CistoSimplesSelect, CistoSimplesInput])

  const criaStringVariosCistos = (select, input) => {
    var string = 'Cistos de conteúdo anecogênico, com paredes finas e contornos regulares '
    removeFraseVariosCistos()
    var medida = new Convert_Medida(input).Convert_Medida()
    if (select !== '' && input !== '') {
      string = `${string}, medindo até ${medida} cm, o maior localizado no ${select}. Veia porta e veias hepáticas sem alterações.`;
      setFrasesFigado((arr) => [...arr, string]);
    }
  };
  const removeFraseVariosCistos = () => {
    frasesFigado.map((e) => {
      if (e.includes("Cistos de conteúdo anecogênico, com paredes finas e contornos regulares")) {
        var index = frasesFigado.indexOf(e);

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

  const criaStringNodulo = (select1, select2, select3, input1, input2) => {
    var string = 'Nodulo'
    var medida1 = new Convert_Medida(input1).Convert_Medida()
    var medida2 = new Convert_Medida(input2).Convert_Medida()
    removeFraseNodulo()
    if (select1 !== '' && input1 !== '' && select2 !== '' && select3 !== '' && input2) {
      string = `${string} ${select1} de contornos ${select2}, medindo ${medida1} x ${medida2} cm, situado no ${select3}`;
      setFrasesFigado((arr) => [...arr, string]);
    }
  };
  const removeFraseNodulo = () => {
    frasesFigado.map((e) => {
      if (e.includes("Nodulo")) {
        var index = frasesFigado.indexOf(e);

        if (index > -1) {
          frasesFigado.splice(index, 1);
          setFrasesFigado((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (NoduloCheckbox) {
      criaStringNodulo(NoduloSelect1, NoduloSelect2, NoduloSelect3, NoduloInput1, NoduloInput2)
      setDisableNoduloSelect1(false)

    } else {
      setDisableNoduloSelect1(true)
      setNoduloSelect1('')
      setNoduloSelect2('')
      setNoduloSelect3('')
      setNoduloInput1('')
      setNoduloInput2('')
      removeFraseNodulo()
    }
  }, [NoduloCheckbox, NoduloSelect1, NoduloSelect2, NoduloSelect3, NoduloInput1, NoduloInput2])

  const criaStringVariosNodulos = (select1, select2, select3, select4, input1, input2) => {
    var string = 'Presença de'
    var medida1 = new Convert_Medida(input1).Convert_Medida()
    var medida2 = new Convert_Medida(input2).Convert_Medida()
    removeFraseVariosNodulos()
    if (select1 !== '' && input1 !== '' && select2 !== '' && select3 !== '' && select4 !== '' && input2) {
      string = `${string} ${select1} ${select2} de contornos regulares medindo ${medida1} cm(${select3}) e ${medida2} cm (${select4}). Veia porta e veias hepáticas sem alterações.`;
      setFrasesFigado((arr) => [...arr, string]);
    }
  };
  const removeFraseVariosNodulos = () => {
    frasesFigado.map((e) => {
      if (e.includes("Presença de")) {
        var index = frasesFigado.indexOf(e);

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
    var string = 'Nota-se uma calcificação grosseira de '
    var medida = new Convert_Medida(input).Convert_Medida()
    removeFraseCalcificacaoGrosseira()
    if (select !== '' && input !== '') {
      string = `${string} ${medida} cm localizada no ${select}.`;
      setFrasesFigado((arr) => [...arr, string]);
    }
  };
  const removeFraseCalcificacaoGrosseira = () => {
    frasesFigado.map((e) => {
      if (e.includes("Nota-se uma calcificação grosseira de")) {
        var index = frasesFigado.indexOf(e);

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
    var string = 'Fígado com dimensões'
    var medidaLD = new Convert_Medida(LDMedida).Convert_Medida()
    var medidaLE = new Convert_Medida(LEMedida).Convert_Medida()
    var medidaLC = new Convert_Medida(LCMedida).Convert_Medida()
    removeFraseDimensoes()
    if (select !== '') {
      string = `${string} ${select}, contornos regulares, bordas finas e ecotextura homogênea. Veia 
      porta e veias hepáticas sem alterações`;

      if (LDMedida !== '') {
        string = `${string}. Eixo longitudinal do lobo direito mede ${medidaLD} cm,`;
      }
      if (LEMedida !== '') {
        string = `${string}. Eixo longitudinal do lobo esquerdo mede ${medidaLE} cm,`;
      }
      if (LCMedida !== '') {
        string = `${string}. Eixo longitudinal do lobo caudado mede ${medidaLC} cm,`;
      }
      string = `${string} veia porta e veias hepáticas sem alterações.`
      setFrasesFigado((arr) => [...arr, string]);
    }
  };
  const removeFraseDimensoes = () => {
    frasesFigado.map((e) => {
      if (e.includes("Fígado com dimensões")) {
        var index = frasesFigado.indexOf(e);

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

              id="normal"
              value="Figado está normal "
              onChange={(e) => {
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
                    w='60px'
                    isDisabled={DisableLDInput}
                    value={LDInput}
                    onChange={(e) => {
                      setLDInput(e.target.value);
                    }}
                    placeholder="mm"
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
                    w='60px'
                    isDisabled={DisableLEInput}
                    value={LEInput}
                    onChange={(e) => {
                      setLEInput(e.target.value);
                    }}
                    placeholder="mm"
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
                    w='60px'
                    isDisabled={DisableLCInput}
                    value={LCInput}
                    onChange={(e) => {
                      setLCInput(e.target.value);
                    }}
                    placeholder="mm"
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
        <Box
          gap='5px'
          display='flex'
          flexWrap='wrap'>
          <Checkbox
            w='150px'
            onChange={(e) => {
              setCistoSimplesCheckbox(!CistoSimplesCheckbox);
            }}
          >
            Cisto simples de
          </Checkbox>
          <Input
            w='60px'
            isDisabled={DisableCistoSimplesSelect}
            value={CistoSimplesInput}
            onChange={(e) => {
              setCistoSimplesInput(e.target.value);
            }}
            placeholder="mm"
          />
          <Text alignSelf='center'>mm, atuando no</Text>
          <Select
            w='150px'
            isDisabled={DisableCistoSimplesSelect}
            value={CistoSimplesSelect}
            onChange={(e) => {
              setCistoSimplesSelect(e.target.value);
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
            w='60px'
            isDisabled={DisableVariosCistosSelect}
            value={VariosCistosInput}
            onChange={(e) => {
              setVariosCistosInput(e.target.value);
            }}
            placeholder="mm"
          />
          <Text alignSelf='center'>mm, atuando no</Text>
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
          <Box display='flex'
            flexWrap='wrap'
            gap='5px'>
            <Checkbox
              onChange={(e) => {
                setNoduloCheckbox(!NoduloCheckbox);
              }}
            >
              Nódulo
            </Checkbox>
            <Select
              w='150px'
              isDisabled={DisableNoduloSelect1}
              value={NoduloSelect1}
              onChange={(e) => {
                setNoduloSelect1(e.target.value);
              }}
            >
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="hiperecongênico">Hiperecongênico</option>
              <option value="hipoecogênico">Hipoecogênico</option>
              <option value="hipoecogênico (hemangioma)">Hipoecogênico (hemangioma)</option>

            </Select>
            <Text alignSelf='center'>de contornos</Text>
            <Select
              w='150px'
              isDisabled={DisableNoduloSelect1}
              value={NoduloSelect2}
              onChange={(e) => {
                setNoduloSelect2(e.target.value);
              }}
            >
              <option value="" disabled selected>
                Contornos
              </option>
              <option value="Regulares">Regulares</option>
              <option value="Lobulados">Lobulados</option>
              <option value="Irregulares">Irregulares</option>
            </Select>
            <Text alignSelf='center'>medindo</Text>
            <Input
              w='60px'
              isDisabled={DisableNoduloSelect1}
              value={NoduloInput1}
              onChange={(e) => {
                setNoduloInput1(e.target.value);
              }}
              placeholder="mm"
            />

            <Text alignSelf='center'>x</Text>
            <Input
              w='60px'
              isDisabled={DisableNoduloSelect1}
              value={NoduloInput2}
              onChange={(e) => {
                setNoduloInput2(e.target.value);
              }}
              placeholder="mm"
            />
            <Text alignSelf='center'>mm, situado no</Text>
            <Select
              w='150px'
              isDisabled={DisableNoduloSelect1}
              value={NoduloSelect3}
              onChange={(e) => {
                setNoduloSelect3(e.target.value);
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
              w='60px'
              isDisabled={DisableVariosNodulosSelect1}
              value={VariosNodulosInput1}
              onChange={(e) => {
                setVariosNodulosInput1(e.target.value);
              }}
              placeholder="mm"
            />
            <Text alignSelf='center'>mm</Text>
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
              w='60px'
              isDisabled={DisableVariosNodulosSelect1}
              value={VariosNodulosInput2}
              onChange={(e) => {
                setVariosNodulosInput2(e.target.value);
              }}
              placeholder="mm"
            />
            <Text alignSelf='center'>mm</Text>
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
              w='60px'
              isDisabled={DisableCalcificacaoGrosseiraSelect}
              value={CalcificacaoGrosseiraInput}
              onChange={(e) => {
                setCalcificacaoGrosseiraInput(e.target.value);
              }}
              placeholder="mm"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Figado;
