/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Flex, HStack, Input, Radio, RadioGroup, Select, Spacer, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Convert_Medida } from "../../../component/function_convert_medidas";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Medidas() {
  const altura = "100%";
  const largura = "66%";

  const [value, setValue] = useState("1");
  const [FrasesMedidas, setFrasesMedidas] = useState<any>([]);


  useEffect(() => {
    if (value == "1") {
      setFrasesMedidas([]);
    } else {
      setFrasesMedidas([]);
      setFrasesMedidas((arr) => [...arr, value]);
    }
  }, [value]);

  const [LoboDireitoCheckbox, setLoboDireitoCheckbox] = useState(false)
  const [LoboEsquerdoCheckbox, setLoboEsquerdoCheckbox] = useState(false)
  const [IstmoCheckbox, setIstmoCheckbox] = useState(false)

  const [DisableInputsLoboDireito, setDisableInputsLoboDireito] = useState(true)
  const [ValueInput1LoboDireito, setValueInput1LoboDireito] = useState<number>(0)
  const [ValueInput2LoboDireito, setValueInput2LoboDireito] = useState<number>(0)
  const [ValueInput3LoboDireito, setValueInput3LoboDireito] = useState<number>(0)
  const [ValueInput4LoboDireito, setValueInput4LoboDireito] = useState<number>(0)

  const [DisableInputsLoboEsquerdo, setDisableInputsLoboEsquerdo] = useState(true)
  const [ValueInput1LoboEsquerdo, setValueInput1LoboEsquerdo] = useState<number>(0)
  const [ValueInput2LoboEsquerdo, setValueInput2LoboEsquerdo] = useState<number>(0)
  const [ValueInput3LoboEsquerdo, setValueInput3LoboEsquerdo] = useState<number>(0)
  const [ValueInput4LoboEsquerdo, setValueInput4LoboEsquerdo] = useState<number>(0)

  const [ValueInput1Istmo, setValueInput1Istmo] = useState<number>(0)
  const [ValueInput2Istmo, setValueInput2Istmo] = useState<number>(0)
  const [ValueInput3Istmo, setValueInput3Istmo] = useState<number>(0)
  const [ValueInput4Istmo, setValueInput4Istmo] = useState<number>(0)
  const [IstmoDesprezivelCheckbox, setIstmoDesprezivelCheckbox] = useState(false)

  const [ValueSelectRADS, setValueSelectRADS] = useState('')

  const [ValueInput1Soma, setValueInput1Soma] = useState<number>(0)
  const [ValueInput2Soma, setValueInput2Soma] = useState<number>(0)
  const [ValueInput3Soma, setValueInput3Soma] = useState<number>(0)
  const [ValueInput4Soma, setValueInput4Soma] = useState<number>(0)

  const handleChangeInput1LoboDireito = (e) => {
    setValueInput1LoboDireito(e.target.value)
  }
  const handleChangeInput2LoboDireito = (e) => {
    setValueInput2LoboDireito(e.target.value)
  }
  const handleChangeInput3LoboDireito = (e) => {
    setValueInput3LoboDireito(e.target.value)
  }

  const handleChangeInput1LoboEsquerdo = (e) => {
    setValueInput1LoboEsquerdo(e.target.value)
  }
  const handleChangeInput2LoboEsquerdo = (e) => {
    setValueInput2LoboEsquerdo(e.target.value)
  }
  const handleChangeInput3LoboEsquerdo = (e) => {
    setValueInput3LoboEsquerdo(e.target.value)
  }

  const handleChangeInput1Istmo = (e) => {
    setValueInput1Istmo(e.target.value)
  }
  const handleChangeInput2Istmo = (e) => {
    setValueInput2Istmo(e.target.value)
  }
  const handleChangeInput3Istmo = (e) => {
    setValueInput3Istmo(e.target.value)
  }


  const criaStringLoboDireito = () => {
    var string = 'Lobo Direito: '
    removeFraseLoboDireito()
    if (LoboDireitoCheckbox) {
      var medida4 = ((ValueInput1LoboDireito) * (ValueInput2LoboDireito) * (ValueInput3LoboDireito)) / 1000
      setValueInput4LoboDireito(medida4)
      string = `${string} ${ValueInput1LoboDireito} x ${ValueInput2LoboDireito} x ${ValueInput3LoboDireito} mm (${medida4} cm³) `
      setFrasesMedidas((arr) => [...arr, string]);
    }
  }

  const removeFraseLoboDireito = () => {
    FrasesMedidas.map((e) => {
      if (e.includes("Lobo Direito: ")) {
        var index = FrasesMedidas.indexOf(e);
        if (index > -1) {
          FrasesMedidas.splice(index, 1);
          setFrasesMedidas((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (ValueInput1LoboDireito != 0 || ValueInput3LoboDireito != 0 || ValueInput2LoboDireito != 0 ||
      ValueInput1LoboEsquerdo != 0 || ValueInput3LoboEsquerdo != 0 || ValueInput2LoboEsquerdo != 0 ||
      ValueInput1Istmo != 0 || ValueInput2Istmo != 0 || ValueInput3Istmo) {
      var soma1 = ValueInput1LoboDireito + ValueInput1LoboEsquerdo + ValueInput1Istmo
      var soma2 = ValueInput2LoboDireito + ValueInput2LoboEsquerdo + ValueInput2Istmo
      var soma3 = ValueInput3LoboDireito + ValueInput3LoboEsquerdo + ValueInput3Istmo

      setValueInput1Soma(soma1)
      setValueInput2Soma(!Number.isNaN(soma2) ? soma2 : 0)
      setValueInput3Soma(!Number.isNaN(soma3) ? soma3 : 0)
    }
  }, [ValueInput1LoboDireito, ValueInput3LoboDireito, ValueInput2LoboDireito,
    ValueInput1LoboEsquerdo, ValueInput3LoboEsquerdo, ValueInput2LoboEsquerdo,
    ValueInput1Istmo, ValueInput2Istmo, ValueInput3Istmo])

  useEffect(() => {

    criaStringLoboDireito()

  }, [LoboDireitoCheckbox, ValueInput1LoboDireito, ValueInput3LoboDireito, ValueInput2LoboDireito])

  const criaStringLoboEsquerdo = () => {
    var string = 'Lobo Esquerdo: '
    removeFraseLoboEsquerdo()
    if (ValueInput1LoboEsquerdo && ValueInput2LoboEsquerdo && ValueInput3LoboEsquerdo) {
      var medida4 = ((ValueInput1LoboEsquerdo) * (ValueInput2LoboEsquerdo) * (ValueInput3LoboEsquerdo)) / 1000
      setValueInput4LoboEsquerdo(medida4)
      string = `${string} ${ValueInput1LoboEsquerdo} x ${ValueInput2LoboEsquerdo} x ${ValueInput3LoboEsquerdo} mm (${medida4} cm³)`
      setFrasesMedidas((arr) => [...arr, string]);
    }
  }

  const removeFraseLoboEsquerdo = () => {
    FrasesMedidas.map((e) => {
      if (e.includes("Lobo Esquerdo: ")) {
        var index = FrasesMedidas.indexOf(e);
        if (index > -1) {
          FrasesMedidas.splice(index, 1);
          setFrasesMedidas((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (LoboEsquerdoCheckbox) {
      criaStringLoboEsquerdo()
      setDisableInputsLoboEsquerdo(false)
    } else {
      removeFraseLoboEsquerdo()
      setDisableInputsLoboEsquerdo(true)
      setValueInput1LoboEsquerdo(0)
      setValueInput2LoboEsquerdo(0)
      setValueInput3LoboEsquerdo(0)
      setValueInput4LoboEsquerdo(0)
    }
  }, [LoboEsquerdoCheckbox, ValueInput1LoboEsquerdo, ValueInput3LoboEsquerdo, ValueInput2LoboEsquerdo])

  const criaStringIstmo = () => {
    var string = 'Lobo Istmo: '
    removeFraseIstmo()

    if (IstmoCheckbox) {
      if (ValueInput1Istmo && ValueInput2Istmo && ValueInput3Istmo) {
        var medida4 = ((ValueInput1Istmo) * (ValueInput2Istmo) * (ValueInput3Istmo)) / 1000
        setValueInput4Istmo(medida4)
        string = `${string} ${ValueInput1Istmo} x ${ValueInput2Istmo} x ${ValueInput3Istmo} mm ${(medida4)} cm³`
        setFrasesMedidas((arr) => [...arr, string]);
      }
    } else {
      setValueInput1Istmo(0)
      setValueInput2Istmo(0)
      setValueInput3Istmo(0)
    }
  }
  const removeString = (value) => {
    var index = FrasesMedidas.indexOf(value);
    if (index > -1) {
      FrasesMedidas.splice(index, 1);
      setFrasesMedidas((arr) => [...arr]);
    }
  };

  const removeFraseIstmo = () => {
    FrasesMedidas.map((e) => {
      if (e.includes("Lobo Istmo: ")) {
        var index = FrasesMedidas.indexOf(e);
        if (index > -1) {
          FrasesMedidas.splice(index, 1);
          setFrasesMedidas((arr) => [...arr]);
        }
      }
    });
  };
  useEffect(() => {
    criaStringIstmo()
  }, [ValueInput1Istmo, ValueInput2Istmo, ValueInput3Istmo, IstmoCheckbox])

  useEffect(() => {
    const string = 'Istmo desprezível.'
    removeString(string)
    IstmoDesprezivelCheckbox ? setFrasesMedidas((arr) => [...arr, string]) : removeString(string)
  }, [IstmoDesprezivelCheckbox])



  const criaStringRADS = () => {
    let string = `TI-RADS global`
    removeFraseRADS()
    if (ValueSelectRADS) {
      string = `${string} ${ValueSelectRADS}`
      setFrasesMedidas((arr) => [...arr, string]);
    }
  }

  const removeFraseRADS = () => {
    FrasesMedidas.map((e) => {
      if (e.includes("TI-RADS global")) {
        var index = FrasesMedidas.indexOf(e);
        if (index > -1) {
          FrasesMedidas.splice(index, 1);
          setFrasesMedidas((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (ValueSelectRADS) {
      criaStringRADS()
    } else {
      removeFraseRADS()
    }
  }, [ValueSelectRADS])

  const subExame = "Medidas";
  const titulo_exame = "Tireóide";

  useEffect(() => {
    if (Object.keys(FrasesMedidas).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        FrasesMedidas
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        FrasesMedidas
      ).Format_Laudo_Create_Storage();
    }
  }, [FrasesMedidas]);

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
      <TituloNomeExame titulo="Medidas" />
      <HStack>

        <Stack gap="10px" mb="10px">
          <Box >
            <Checkbox
              id="LoboDireito"
              onChange={() => {
                setLoboDireitoCheckbox(!LoboDireitoCheckbox)
              }}
            >
              Lobo Direito
            </Checkbox>
            <Box display='flex' flexWrap='wrap'>
              <Input
                w='60px'
                isDisabled={!LoboDireitoCheckbox}
                onChange={(e) => { handleChangeInput1LoboDireito(e) }}
                placeholder="0"
              />
              <Text alignSelf='center'>x</Text>
              <Input
                w='60px'
                isDisabled={!LoboDireitoCheckbox}
                onChange={(e) => { handleChangeInput2LoboDireito(e) }}
                placeholder="0"
              />
              <Text alignSelf='center'>x</Text>
              <Input
                w='60px'
                isDisabled={!LoboDireitoCheckbox}
                onChange={(e) => { handleChangeInput3LoboDireito(e) }}
                placeholder="0"
              />
              <Text alignSelf='center'>mm</Text>
              <Text alignSelf='center'> ({ValueInput4LoboDireito} cm³)</Text>
            </Box>
          </Box>
          <Box >
            <Checkbox
              id="LoboEsquerdo"
              onChange={() => {
                setLoboEsquerdoCheckbox(!LoboEsquerdoCheckbox)
              }}
            >
              Lobo Esquerdo
            </Checkbox>
            <Box display='flex' flexWrap='wrap'>
              <Input
                w='60px'
                value={ValueInput1LoboEsquerdo}
                isDisabled={DisableInputsLoboEsquerdo}
                onChange={(e) => { handleChangeInput1LoboEsquerdo(e) }}
                placeholder="0"
              />
              <Text alignSelf='center'>x</Text>
              <Input
                w='60px'
                isDisabled={DisableInputsLoboEsquerdo}
                value={ValueInput2LoboEsquerdo}
                onChange={(e) => { handleChangeInput2LoboEsquerdo(e) }}
                placeholder="0"
              />
              <Text alignSelf='center'>x</Text>
              <Input
                w='60px'
                value={ValueInput3LoboEsquerdo}
                isDisabled={DisableInputsLoboEsquerdo}
                onChange={(e) => { handleChangeInput3LoboEsquerdo(e) }}
                placeholder="0"
              />
              <Text alignSelf='center'>mm</Text>
              <Text alignSelf='center'> ({ValueInput4LoboEsquerdo} cm³)</Text>
            </Box>
          </Box>
          <Box >
            <HStack>
              <Checkbox
                isDisabled={IstmoDesprezivelCheckbox}
                onChange={() => {
                  setIstmoCheckbox(!IstmoCheckbox)
                }}
              >
                Istmo
              </Checkbox>
              <Checkbox
                isDisabled={IstmoCheckbox}
                onChange={(e) => { handleChangeInput3LoboEsquerdo(e) }}
              >
                Istmo desprezível
              </Checkbox>
            </HStack>
            <Box display='flex' flexWrap='wrap'>
              <Input
                w='60px'
                value={ValueInput1Istmo}
                isDisabled={!IstmoCheckbox}
                onChange={(e) => { handleChangeInput1Istmo(e) }}
                placeholder="0"
              />
              <Text alignSelf='center'>x</Text>
              <Input
                w='60px'
                isDisabled={!IstmoCheckbox}
                value={ValueInput2Istmo}
                onChange={(e) => { handleChangeInput2Istmo(e) }}
                placeholder="0"
              />
              <Text alignSelf='center'>x</Text>
              <Input
                w='60px'
                value={ValueInput3Istmo}
                isDisabled={!IstmoCheckbox}
                onChange={(e) => { handleChangeInput3Istmo(e.target.value) }}
                placeholder="0"
              />
              <Text alignSelf='center'>mm</Text>
              <Text alignSelf='center'> ({ValueInput4Istmo} cm³)</Text>
            </Box>

          </Box>
        </Stack>
        <Spacer />
        <Stack>
          <Box >
            <Text alignSelf='center'>
              Lobo Direito + Esquerdo + Istmo
            </Text>
            <Box display='flex' flexWrap='wrap'>
              <Input
                w='60px'
                value={ValueInput1Soma}
                placeholder="0"
              />
              <Text alignSelf='center'>x</Text>
              <Input
                w='60px'
                value={ValueInput2Soma}

                placeholder="0"
              />
              <Text alignSelf='center'>x</Text>
              <Input
                w='60px'
                value={ValueInput3Soma}

                placeholder="0"
              />
              <Text alignSelf='center'>mm</Text>
              <Text alignSelf='center'> ({ValueInput4LoboDireito} cm³)</Text>
            </Box>
          </Box>
        </Stack>

        <Spacer />
        <Stack>
          <Box borderWidth="2px" borderColor="blue.100" borderRadius="lg" padding='5px' h='100%' w='100%'>
            <Text fontWeight="bold" textAlign='center'>Sexo</Text>
            <RadioGroup w='auto' onChange={setValue} value={value} padding="10px">
              <Stack direction="column">
                <Flex>
                  <Stack>
                    <Radio w='auto' value="1">Não citar</Radio>
                    <Radio w='auto' value="Feminino">
                      Feminino
                    </Radio>
                    <Radio value="Masculino">
                      Masculino
                    </Radio>
                  </Stack>
                </Flex>
              </Stack>
            </RadioGroup>
          </Box>
          <Stack>
            <Text fontWeight="bold" textAlign='center'>TI-RADS global</Text>
            <Select w='150px'
              value={ValueSelectRADS}
              onChange={(e) => setValueSelectRADS(e.target.value)}
            >
              <option selected disabled value="">Selecione</option>
              <option value="">Não citar</option>
              <option value="terço superior">terço superior</option>
              <option value="terço médio">terço médio</option>

            </Select>
          </Stack>
        </Stack>
      </HStack>
    </Box >
  );
}

export default Medidas;
