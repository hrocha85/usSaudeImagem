
import { Box, Checkbox, HStack, Input, Radio, RadioGroup, Select, Stack, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Baco({ Disable }) {
  const altura = "100%";
  const largura = "66%";

  const [frasesBaco, setFrasesBaco] = useState<any>([]);
  const [ConclusoesBaco, setConclusoesBaco] = useState<any>([]);


  const [valueSelect, setValueSelect] = useState("");
  const [value, setValue] = useState("1");
  const [enableSelectAumentado, setEnableSelectAumentado] = useState<boolean>(false);

  const [DimensoesCheckbox, setDimensoesCheckbox] = useState(false)
  const [DimensoesInput1, setDimensoesInput1] = useState('')
  const [DimensoesInput2, setDimensoesInput2] = useState('')
  const [DisableDimensoesInput, setDisableDimensoesInput] = useState(true)

  const [CitarIndiceCheckbox, setCitarIndiceCheckbox] = useState(false)

  const [BacoAcessorioCheckbox, setBacoAcessorioCheckbox] = useState(false)
  const [BacoAcessorioInput1, setBacoAcessorioInput1] = useState('')
  const [BacoAcessorioInput2, setBacoAcessorioInput2] = useState('')
  const [DisableBacoAcessorioInput, setDisableBacoAcessorioInput] = useState(true)

  const [CalcificacaoCheckbox, setCalcificacaoCheckbox] = useState(false)
  const [CalcificacaoInput, setCalcificacaoInput] = useState('')
  const [DisableCalcificacaoInput, setDisableCalcificacaoInput] = useState(true)

  const removeSelectString = () => {
    let index;
    frasesBaco.map((e) => {
      if (e.includes("ecotextura")) {
        index = frasesBaco.indexOf(e);

        if (index > -1) {
          frasesBaco.splice(index, 1);
          setFrasesBaco((arr) => [...arr]);
        }
      } else if (e.includes('Baço com dimensões normais')) {
        index = frasesBaco.indexOf(e);

        if (index > -1) {
          frasesBaco.splice(index, 1);
          setFrasesBaco((arr) => [...arr]);
        }
      } else if (e.includes('Baço não caracterizado (esplenectomia)')) {
        index = frasesBaco.indexOf(e);

        if (index > -1) {
          frasesBaco.splice(index, 1);
          setFrasesBaco((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (value == "enable") {
      setEnableSelectAumentado(true);
    } else {
      setValueSelect('')
      if (value == "1") {
        setFrasesBaco([]);
        setEnableSelectAumentado(false);
      } else {
        setFrasesBaco([]);
        setFrasesBaco((arr) => [...arr, value]);
        setEnableSelectAumentado(false);
      }
    }
  }, [value]);

  useEffect(() => {
    const conclusao = 'Esplenomegalia.'
    if (valueSelect != "") {
      removeSelectString();
      const select = ` ${valueSelect}`;
      setFrasesBaco((arr) => [...arr, select]);
      setConclusoesBaco((arr) => [...arr, conclusao]);
    } else {
      removeItemConclusao(conclusao)
    }
  }, [valueSelect]);

  const criaStringBacoAcessorio = (dados1, dados2) => {
    let string = 'Presença de baço acessório (variação anatômica) medindo'
    removeFraseBacoAcessorio()
    if (dados1 != '' && dados2 != '') {
      string = `${string} ${dados1} x ${dados2} cm.`
      setFrasesBaco((arr) => [...arr, string])
    }
  }

  const removeFraseBacoAcessorio = () => {
    frasesBaco.map((e) => {
      if (e.includes("Presença de baço acessório (variação anatômica) medindo")) {
        const index = frasesBaco.indexOf(e);
        if (index > -1) {
          frasesBaco.splice(index, 1);
          setFrasesBaco((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (BacoAcessorioCheckbox) {
      criaStringBacoAcessorio(BacoAcessorioInput1, BacoAcessorioInput2)
      setDisableBacoAcessorioInput(false)
    } else {
      setDisableBacoAcessorioInput(true)
      removeFraseBacoAcessorio()
      setBacoAcessorioInput1('')
      setBacoAcessorioInput2('')
    }

  }, [BacoAcessorioCheckbox, BacoAcessorioInput1, BacoAcessorioInput2])

  const criaStringCalcificacao = (dados1) => {
    let string = 'Nota-se calcificação parenquimatosa medindo'
    removeFraseCalcificacao()
    if (dados1 != '') {
      string = `${string} ${dados1} cm, de provável natureza sequelar.`
      setFrasesBaco((arr) => [...arr, string])
    }
  }

  const removeFraseCalcificacao = () => {
    frasesBaco.map((e) => {
      if (e.includes("Nota-se calcificação parenquimatosa medindo")) {
        const index = frasesBaco.indexOf(e);
        if (index > -1) {
          frasesBaco.splice(index, 1);
          setFrasesBaco((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (CalcificacaoCheckbox) {
      criaStringCalcificacao(CalcificacaoInput)
      setDisableCalcificacaoInput(false)
    } else {
      setDisableCalcificacaoInput(true)
      removeFraseCalcificacao()
      setCalcificacaoInput('')
    }

  }, [CalcificacaoCheckbox, CalcificacaoInput])

  const removeItemConclusao = (value) => {

    const index = ConclusoesBaco.indexOf(value);

    if (index > -1) {
      ConclusoesBaco.splice(index, 1);
      setConclusoesBaco((arr) => [...arr]);
      new Format_Laudo(titulo_exame).Remove_Conclusao(value);
    }


  };


  const criaStringDimensoes = (dados1, dados2) => {
    let string = 'Mede'
    removeFraseDimensoes()
    if (dados1 != '' && dados2 != '' && CitarIndiceCheckbox) {
      string = `${string} ${dados1} x ${dados2} cm em seu maior e menor eixo (índice esplênico uniplanar).`
      setFrasesBaco((arr) => [...arr, string])

    } else if (dados1 != '' && dados2 != '') {
      string = `${string} ${dados1} x ${dados2} cm em seu maior e menor eixo.`
      setFrasesBaco((arr) => [...arr, string])

    }
  }

  const removeFraseDimensoes = () => {
    frasesBaco.map((e) => {
      if (e.includes("Mede")) {
        const index = frasesBaco.indexOf(e);
        if (index > -1) {
          frasesBaco.splice(index, 1);
          setFrasesBaco((arr) => [...arr]);
        }
      }
    });
  };


  useEffect(() => {
    if (DimensoesCheckbox) {
      criaStringDimensoes(DimensoesInput1, DimensoesInput2)
      setDisableDimensoesInput(false)
    } else {
      setDisableDimensoesInput(true)
      removeFraseDimensoes()
      setDimensoesInput1('')
      setDimensoesInput2('')
    }
  }, [DimensoesCheckbox, DimensoesInput1, DimensoesInput2, CitarIndiceCheckbox])

  useEffect(() => {
    Disable ? setValue("Baço com dimensões normais, contornos regulares e ecotextura homogênea.") : setValue('1')
  }, [Disable])

  const subExame = "Baço";
  const titulo_exame = "Abdomen Superior";


  useEffect(() => {
    if (Object.keys(frasesBaco).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesBaco,
        ConclusoesBaco,
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesBaco,
        ConclusoesBaco
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesBaco]);
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
      mt="15px"
    >

      <TituloNomeExame titulo="Baço" />

      <Box mb="20px" gap="30px" display="flex" flexWrap="wrap" mt="20px">

        <RadioGroup
          onChange={setValue} value={value} padding="10px">
          <Stack direction="column">
            <Radio value="1">Não citar</Radio>
            <Radio value="Baço com dimensões normais, contornos regulares e ecotextura homogênea.">
              Tamanho normal
            </Radio>
            <Radio value="enable">Aumentado</Radio>
            <Select
              placeholder="Selecione Opção"
              isDisabled={!enableSelectAumentado}
              onChange={(e) => setValueSelect(e.target.value)}
            >
              <option value="Baço com dimensões aumentadas, contornos regulares e ecotextura homogênea.">
                ecotextura homogênea
              </option>
              <option value="Baço com dimensões aumentadas, contornos regulares e ecotextura heterogênea.">
                ecotextura heterogênea
              </option>

            </Select>
            <Radio value="Baço não caracterizado (esplenectomia).">
              Ausente
            </Radio>

          </Stack>
        </RadioGroup>
        <Box borderWidth="2px" borderColor="blue.100" borderRadius="lg" padding='5px' h='100%' w='280px'>
          <Text fontWeight="bold" textAlign='center'>Dimensões (espessura)</Text>
          <HStack>
            <Checkbox
              onChange={(e) => {
                setDimensoesCheckbox(!DimensoesCheckbox);
              }}
            >

            </Checkbox>
            <Input
              p='0'
              textAlign='center'
              w='55px'
              value={DimensoesInput1}
              onChange={(e) => setDimensoesInput1(e.target.value)}
              disabled={DisableDimensoesInput}
              placeholder="00"
            />
            <Text alignItems='center'>x</Text>
            <Input
              p='0'
              textAlign='center'
              w='55px'
              value={DimensoesInput2}
              onChange={(e) => setDimensoesInput2(e.target.value)}
              disabled={DisableDimensoesInput}
              placeholder="00"
            />
            <Text alignItems='center'>cm</Text>
          </HStack>
          <HStack>
            <Checkbox
              onChange={(e) => {
                setCitarIndiceCheckbox(!CitarIndiceCheckbox);
              }}
            >
              Citar o índice esplênico
            </Checkbox>

          </HStack>
        </Box>
        <Box display='flex' flexWrap='wrap' gap='10px'>
          <Box w="200px">
            <Checkbox
              onChange={(e) => {
                setBacoAcessorioCheckbox(!BacoAcessorioCheckbox);
              }}
            >
              Presença de baço acessório medindo
            </Checkbox>
            <Input
              p='0'
              textAlign='center'
              isDisabled={DisableBacoAcessorioInput}
              w="50px"
              value={BacoAcessorioInput1}
              onChange={(e) => {
                setBacoAcessorioInput1(e.target.value);
              }}
              placeholder="0"
            />
            x
            <Input
              p='0'
              textAlign='center'
              w="50px"
              isDisabled={DisableBacoAcessorioInput}
              value={BacoAcessorioInput2}
              onChange={(e) => {
                setBacoAcessorioInput2(e.target.value);
              }}
              placeholder="0"
            />
            cm
          </Box>

          <Box w="200px">
            <Checkbox
              onChange={(e) => {
                setCalcificacaoCheckbox(!CalcificacaoCheckbox);
              }}
            >
              Calcificação esplênica medindo
            </Checkbox>
            <Input
              p='0'
              textAlign='center'
              w='70px'
              value={CalcificacaoInput}
              isDisabled={DisableCalcificacaoInput}
              onChange={(e) => {
                setCalcificacaoInput(e.target.value);
              }}
              placeholder="cm"
            />
          </Box>
        </Box>
      </Box>

    </Box>
  );
}

export default Baco;
