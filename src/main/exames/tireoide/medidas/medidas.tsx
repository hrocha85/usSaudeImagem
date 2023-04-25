/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Flex, HStack, Input, Radio, RadioGroup, Select, Spacer, Stack, Text } from "@chakra-ui/react";
import { StyleSheet } from "@react-pdf/renderer";
import { useEffect, useState } from "react";
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

  const [ValueInput1LoboDireito, setValueInput1LoboDireito] = useState('')
  const [ValueInput2LoboDireito, setValueInput2LoboDireito] = useState('')
  const [ValueInput3LoboDireito, setValueInput3LoboDireito] = useState('')
  const [ValueInput4LoboDireito, setValueInput4LoboDireito] = useState<number>(0)

  const [ValueInput1LoboEsquerdo, setValueInput1LoboEsquerdo] = useState('')
  const [ValueInput2LoboEsquerdo, setValueInput2LoboEsquerdo] = useState('')
  const [ValueInput3LoboEsquerdo, setValueInput3LoboEsquerdo] = useState('')
  const [ValueInput4LoboEsquerdo, setValueInput4LoboEsquerdo] = useState<number>(0)


  const [ValueInput1Istmo, setValueInput1Istmo] = useState('')
  const [ValueInput2Istmo, setValueInput2Istmo] = useState('')
  const [ValueInput3Istmo, setValueInput3Istmo] = useState('')
  const [ValueInput4Istmo, setValueInput4Istmo] = useState<number>(0)

  const [IstmoDesprezivelCheckbox, setIstmoDesprezivelCheckbox] = useState(false)

  const [ValueSelectRADS, setValueSelectRADS] = useState('')


  const [ValueInput4Soma, setValueInput4Soma] = useState<number>(0)

  useEffect(() => {

    setValueInput4Soma(ValueInput4LoboDireito + ValueInput4LoboEsquerdo + ValueInput4Istmo)

  }, [ValueInput4LoboDireito, ValueInput4LoboEsquerdo, ValueInput4Istmo])

  const criaStringLoboDireito = () => {
    var string = 'Lobo Direito: '
    removeFraseLobo(string)
    if (LoboDireitoCheckbox) {
      if (ValueInput1LoboDireito && ValueInput2LoboDireito && ValueInput3LoboDireito) {
        let medida4 = +(parseFloat(ValueInput1LoboDireito.replace(",", ".")) * parseFloat(ValueInput2LoboDireito.replace(",", ".")) * parseFloat(ValueInput3LoboDireito.replace(",", ".")))
        setValueInput4LoboDireito(parseFloat(medida4.toFixed(2)))
        string = `${string} ${ValueInput1LoboDireito} x ${ValueInput2LoboDireito} x ${ValueInput3LoboDireito} cm (${medida4} cm³) `
        setFrasesMedidas((arr) => [...arr, string]);
      }
    } else {
      setValueInput1LoboDireito('')
      setValueInput2LoboDireito('')
      setValueInput3LoboDireito('')
      setValueInput4LoboDireito(0)
    }
  }


  useEffect(() => {

    criaStringLoboDireito()

  }, [LoboDireitoCheckbox, ValueInput1LoboDireito, ValueInput3LoboDireito, ValueInput2LoboDireito])

  const criaStringLoboEsquerdo = () => {
    var string = 'Lobo Esquerdo: '
    removeFraseLobo(string)
    if (LoboEsquerdoCheckbox) {
      if (ValueInput1LoboEsquerdo && ValueInput2LoboEsquerdo && ValueInput3LoboEsquerdo) {
        var medida4 = (parseFloat(ValueInput1LoboEsquerdo.replace(",", ".")) * parseFloat(ValueInput2LoboEsquerdo.replace(",", ".")) * parseFloat(ValueInput3LoboEsquerdo.replace(",", ".")))
        setValueInput4LoboEsquerdo(parseFloat(medida4.toFixed(2)))
        string = `${string} ${ValueInput1LoboEsquerdo} x ${ValueInput2LoboEsquerdo} x ${ValueInput3LoboEsquerdo} cm (${medida4} cm³)`
        setFrasesMedidas((arr) => [...arr, string]);
      }
    } else {
      setValueInput1LoboEsquerdo('')
      setValueInput2LoboEsquerdo('')
      setValueInput3LoboEsquerdo('')
      setValueInput4LoboEsquerdo(0)
    }
  }

  const removeFraseLobo = (value) => {
    FrasesMedidas.map((e) => {
      if (e.includes(value)) {
        var index = FrasesMedidas.indexOf(e);
        if (index > -1) {
          FrasesMedidas.splice(index, 1);
          setFrasesMedidas((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    criaStringLoboEsquerdo()

  }, [LoboEsquerdoCheckbox, ValueInput1LoboEsquerdo, ValueInput3LoboEsquerdo, ValueInput2LoboEsquerdo])

  const criaStringIstmo = () => {
    var string = 'Istmo: '
    removeFraseLobo(string)

    if (IstmoCheckbox) {
      if (ValueInput1Istmo && ValueInput2Istmo && ValueInput3Istmo) {
        var medida4 = (parseFloat(ValueInput1Istmo.replace(",", ".")) * parseFloat(ValueInput2Istmo.replace(",", ".")) * parseFloat(ValueInput3Istmo.replace(",", ".")))
        setValueInput4Istmo(parseFloat(medida4.toFixed(2)))
        string = `${string} ${ValueInput1Istmo} x ${ValueInput2Istmo} x ${ValueInput3Istmo} cm ${(parseFloat(medida4.toFixed(2)))} cm³`
        setFrasesMedidas((arr) => [...arr, string]);
      }
    } else {
      setValueInput1Istmo('')
      setValueInput2Istmo('')
      setValueInput3Istmo('')
      setValueInput4Istmo(0)
    }
  }
  const removeString = (value) => {
    var index = FrasesMedidas.indexOf(value);
    if (index > -1) {
      FrasesMedidas.splice(index, 1);
      setFrasesMedidas((arr) => [...arr]);
    }
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

  useEffect(() => {
    var string = `VOLUME TOTAL:`
    removeFraseLobo(string)
    if (ValueInput4Soma) {
      string = `${string} ${ValueInput4Soma.toFixed(2)} cm³ (normal 6 a 15cm³)`
      setFrasesMedidas((arr) => [...arr, string])
    }
  }, [ValueInput4Soma])

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
                p='0'
                textAlign='center'
                w='60px'
                value={ValueInput1LoboDireito}
                isDisabled={!LoboDireitoCheckbox}
                onChange={(e) => setValueInput1LoboDireito(e.target.value)}
                placeholder="0"
              />
              <Text alignSelf='center'>x</Text>
              <Input
                p='0'
                textAlign='center'
                w='60px'
                value={ValueInput2LoboDireito}
                isDisabled={!LoboDireitoCheckbox}
                onChange={(e) => setValueInput2LoboDireito(e.target.value)}
                placeholder="0"
              />
              <Text alignSelf='center'>x</Text>
              <Input
                p='0'
                textAlign='center'
                w='60px'
                value={ValueInput3LoboDireito}
                isDisabled={!LoboDireitoCheckbox}
                onChange={(e) => setValueInput3LoboDireito(e.target.value)}
                placeholder="0"
              />
              <Text alignSelf='center'>cm</Text>
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
                p='0'
                textAlign='center'
                w='60px'
                value={ValueInput1LoboEsquerdo}
                isDisabled={!LoboEsquerdoCheckbox}
                onChange={(e) => setValueInput1LoboEsquerdo(e.target.value)}
                placeholder="0"
              />
              <Text alignSelf='center'>x</Text>
              <Input
                p='0'
                textAlign='center'
                w='60px'
                isDisabled={!LoboEsquerdoCheckbox}
                value={ValueInput2LoboEsquerdo}
                onChange={(e) => setValueInput2LoboEsquerdo(e.target.value)}
                placeholder="0"
              />
              <Text alignSelf='center'>x</Text>
              <Input
                p='0'
                textAlign='center'
                w='60px'
                value={ValueInput3LoboEsquerdo}
                isDisabled={!LoboEsquerdoCheckbox}
                onChange={(e) => setValueInput3LoboEsquerdo(e.target.value)}
                placeholder="0"
              />
              <Text alignSelf='center'>cm</Text>
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
                onChange={(e) => setIstmoDesprezivelCheckbox(!IstmoDesprezivelCheckbox)}
              >
                Istmo desprezível
              </Checkbox>
            </HStack>
            <Box display='flex' flexWrap='wrap'>
              <Input
                p='0'
                textAlign='center'
                w='60px'
                value={ValueInput1Istmo}
                isDisabled={!IstmoCheckbox}
                onChange={(e) => setValueInput1Istmo(e.target.value)}
                placeholder="0"
              />
              <Text alignSelf='center'>x</Text>
              <Input
                p='0'
                textAlign='center'
                w='60px'
                isDisabled={!IstmoCheckbox}
                value={ValueInput2Istmo}
                onChange={(e) => setValueInput2Istmo(e.target.value)}
                placeholder="0"
              />
              <Text alignSelf='center'>x</Text>
              <Input
                p='0'
                textAlign='center'
                w='60px'
                value={ValueInput3Istmo}
                isDisabled={!IstmoCheckbox}
                onChange={(e) => setValueInput3Istmo(e.target.value)}
                placeholder="0"
              />
              <Text alignSelf='center'>cm</Text>
              <Text alignSelf='center'> ({ValueInput4Istmo} cm³)</Text>
            </Box>

          </Box>
        </Stack>
        <Spacer />
        <Stack>
          <Box >
            <Text alignSelf='center'>
              Vol: Lobo Direito + Esquerdo + Istmo
            </Text>

            <Text fontWeight="bold" alignSelf='center'> ({ValueInput4Soma} cm³)</Text>

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
