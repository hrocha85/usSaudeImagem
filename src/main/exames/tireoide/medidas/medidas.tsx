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
  const [ValueInput1LoboDireito, setValueInput1LoboDireito] = useState('')
  const [ValueInput2LoboDireito, setValueInput2LoboDireito] = useState('')
  const [ValueInput3LoboDireito, setValueInput3LoboDireito] = useState('')

  const [DisableInputsLoboEsquerdo, setDisableInputsLoboEsquerdo] = useState(true)
  const [ValueInput1LoboEsquerdo, setValueInput1LoboEsquerdo] = useState('')
  const [ValueInput2LoboEsquerdo, setValueInput2LoboEsquerdo] = useState('')
  const [ValueInput3LoboEsquerdo, setValueInput3LoboEsquerdo] = useState('')

  const [DisableInputsIstmo, setDisableInputsIstmo] = useState(true)
  const [ValueInput1Istmo, setValueInput1Istmo] = useState('')
  const [ValueInput2Istmo, setValueInput2Istmo] = useState('')
  const [ValueInput3Istmo, setValueInput3Istmo] = useState('')
  const [IstmoFiliformeCheckbox, setIstmoFiliformeCheckbox] = useState(false)

  const [ValueSelectRADS, setValueSelectRADS] = useState('')

  const criaStringLoboDireito = () => {
    var string = 'Lobo Direito Falta'
    removeFraseLoboDireito()
    var medida1cm = new Convert_Medida(ValueInput1LoboDireito).Convert_Medida()
    var medida2cm = new Convert_Medida(ValueInput2LoboDireito).Convert_Medida()
    var medida3cm = new Convert_Medida(ValueInput3LoboDireito).Convert_Medida()
    if (ValueInput1LoboDireito != '' && ValueInput2LoboDireito != '' && ValueInput3LoboDireito != '') {
      string = `${string} ${medida1cm} x ${medida2cm} x ${medida3cm} cm`
      setFrasesMedidas((arr) => [...arr, string]);
    }
  }

  const removeFraseLoboDireito = () => {
    FrasesMedidas.map((e) => {
      if (e.includes("Lobo Direito Falta")) {
        var index = FrasesMedidas.indexOf(e);
        if (index > -1) {
          FrasesMedidas.splice(index, 1);
          setFrasesMedidas((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (LoboDireitoCheckbox) {
      criaStringLoboDireito()
      setDisableInputsLoboDireito(false)
    } else {
      removeFraseLoboDireito()
      setDisableInputsLoboDireito(true)
      setValueInput1LoboDireito('')
      setValueInput2LoboDireito('')
      setValueInput3LoboDireito('')
    }
  }, [LoboDireitoCheckbox, ValueInput1LoboDireito, ValueInput3LoboDireito, ValueInput2LoboDireito])

  const criaStringLoboEsquerdo = () => {
    var string = 'Lobo Esquerdo Falta'
    removeFraseLoboEsquerdo()
    var medida1cm = new Convert_Medida(ValueInput1LoboEsquerdo).Convert_Medida()
    var medida2cm = new Convert_Medida(ValueInput2LoboEsquerdo).Convert_Medida()
    var medida3cm = new Convert_Medida(ValueInput3LoboEsquerdo).Convert_Medida()
    if (ValueInput1LoboEsquerdo != '' && ValueInput2LoboEsquerdo != '' && ValueInput3LoboEsquerdo != '') {
      string = `${string} ${medida1cm} x ${medida2cm} x ${medida3cm} cm`
      setFrasesMedidas((arr) => [...arr, string]);
    }
  }

  const removeFraseLoboEsquerdo = () => {
    FrasesMedidas.map((e) => {
      if (e.includes("Lobo Esquerdo Falta")) {
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
      setValueInput1LoboEsquerdo('')
      setValueInput2LoboEsquerdo('')
      setValueInput3LoboEsquerdo('')
    }
  }, [LoboEsquerdoCheckbox, ValueInput1LoboEsquerdo, ValueInput3LoboEsquerdo, ValueInput2LoboEsquerdo])

  const criaStringIstmo = () => {
    var string = 'Lobo Istmo Falta'
    removeFraseIstmo()
    var medida1cm = new Convert_Medida(ValueInput1Istmo).Convert_Medida()
    var medida2cm = new Convert_Medida(ValueInput2Istmo).Convert_Medida()
    var medida3cm = new Convert_Medida(ValueInput3Istmo).Convert_Medida()
    if (ValueInput1Istmo != '' && ValueInput2Istmo != '' && ValueInput3Istmo != '') {
      string = `${string} ${medida1cm} x ${medida2cm} x ${medida3cm} cm`
      setFrasesMedidas((arr) => [...arr, string]);
    }
  }

  const removeFraseIstmo = () => {
    FrasesMedidas.map((e) => {
      if (e.includes("Lobo Istmo Falta")) {
        var index = FrasesMedidas.indexOf(e);
        if (index > -1) {
          FrasesMedidas.splice(index, 1);
          setFrasesMedidas((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (IstmoCheckbox) {
      criaStringIstmo()
      setDisableInputsIstmo(false)
    } else {
      removeFraseIstmo()
      setDisableInputsIstmo(true)
      setValueInput1Istmo('')
      setValueInput2Istmo('')
      setValueInput3Istmo('')
    }
  }, [IstmoCheckbox, ValueInput1Istmo, ValueInput3Istmo, ValueInput2Istmo])

  const criaStringRADS = () => {
    let string = `TI-RADS global`
    removeFraseRADS()
    if (ValueSelectRADS != '') {
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
    if (ValueSelectRADS != '') {
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
          <Box w="200px">
            <Checkbox
              id="LoboDireito"
              onChange={() => {
                setLoboDireitoCheckbox(!LoboDireitoCheckbox)
              }}
            >
              Lobo Direito
            </Checkbox>
            <Box>
              <Input
                value={ValueInput1LoboDireito}
                isDisabled={DisableInputsLoboDireito}
                onChange={(e) => {
                  setValueInput1LoboDireito(e.target.value)
                }}
                w="25%"
                placeholder="0"
              />
              x
              <Input
                isDisabled={DisableInputsLoboDireito}
                value={ValueInput2LoboDireito}
                onChange={(e) => {
                  setValueInput2LoboDireito(e.target.value)
                }}
                w="25%"
                placeholder="0"
              />
              x
              <Input
                value={ValueInput3LoboDireito}
                isDisabled={DisableInputsLoboDireito}
                onChange={(e) => {
                  setValueInput3LoboDireito(e.target.value)
                }}
                w="25%"
                placeholder="0"
              />
              mm
            </Box>
          </Box>
          <Box w="200px">
            <Checkbox
              id="LoboEsquerdo"
              onChange={(e) => {
                setLoboEsquerdoCheckbox(!LoboEsquerdoCheckbox)
              }}
            >
              Lobo Esquerdo
            </Checkbox>
            <Box>
              <Input
                value={ValueInput1LoboEsquerdo}
                isDisabled={DisableInputsLoboEsquerdo}
                onChange={(e) => {
                  setValueInput1LoboEsquerdo(e.target.value)
                }}
                w="25%"
                placeholder="0"
              />
              x
              <Input
                value={ValueInput2LoboEsquerdo}
                isDisabled={DisableInputsLoboEsquerdo}
                onChange={(e) => {
                  setValueInput2LoboEsquerdo(e.target.value)
                }}
                w="25%"
                placeholder="0"
              />
              x
              <Input
                value={ValueInput3LoboEsquerdo}
                isDisabled={DisableInputsLoboEsquerdo}
                onChange={(e) => {
                  setValueInput3LoboEsquerdo(e.target.value)
                }}

                w="25%"
                placeholder="0"
              />
              mm
            </Box>
          </Box>
          <Box w="200px">

            <Checkbox
              id="Istmo"
              onChange={(e) => {
                setIstmoCheckbox(!IstmoCheckbox)
              }}
            >
              Istmo
            </Checkbox>
            <Box>
              <Input
                value={ValueInput1Istmo}
                isDisabled={DisableInputsIstmo}
                onChange={(e) => {
                  setValueInput1Istmo(e.target.value)
                }}
                w="25%"
                placeholder="0"
              />
              x
              <Input
                isDisabled={DisableInputsIstmo}
                value={ValueInput2Istmo}
                onChange={(e) => {
                  setValueInput2Istmo(e.target.value)
                }}
                w="25%"
                placeholder="0"
              />
              x
              <Input
                isDisabled={DisableInputsIstmo}
                value={ValueInput3Istmo}
                onChange={(e) => {
                  setValueInput3Istmo(e.target.value)
                }}
                w="25%"
                placeholder="0"
              />
              mm
              <Checkbox
                isDisabled={DisableInputsIstmo}
                onChange={(e) => {
                  setIstmoFiliformeCheckbox(!IstmoFiliformeCheckbox)
                }}
              >
                o istmo é filiforme? (não mensurável)
              </Checkbox>
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
    </Box>
  );
}

export default Medidas;
