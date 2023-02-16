/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Convert_Medida } from "../../../component/function_convert_medidas";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function VesiculaBiliar({ Disable }) {
  const altura = "100%";
  const largura = "66%";

  const [frasesVesicula, setFrasesVesicula] = useState<any>([]);
  const [ConclusoesVesicula, setConclusoesVesicula] = useState<any>([]);

  const [NormalCheckbox, setNormalCheckbox] = useState(false)
  const [ColesteroloseCheckbox, setColesteroloseCheckbox] = useState(false)
  const [VaziaCheckbox, setVaziaCheckbox] = useState(false)
  const [AusenteCheckbox, setAusenteCheckbox] = useState(false)

  const [EspessuraParedeCheckbox, setEspessuraParedeCheckbox] = useState(false)
  const [CitarEspessuraInput, setCitarEspessuraInput] = useState('')
  const [DisableCitarEspessuraInput, setDisableCitarEspessuraInput] = useState(true)

  const [CalculoUnicoCheckbox, setCalculoUnicoCheckbox] = useState(false)
  const [CalculoUnicoInput, setCalculoUnicoInput] = useState('')
  const [DisableCalculoUnicoInput, setDisableCalculoUnicoInput] = useState(true)
  const [CalculoUnicoColecisiteCheckbox, setCalculoUnicoColecisiteCheckbox] = useState(false)

  const [MultiplosCalculosCheckbox, setMultiplosCalculosCheckbox] = useState(false)
  const [MultiplosCalculosInput1, setMultiplosCalculosInput1] = useState('')
  const [MultiplosCalculosInput2, setMultiplosCalculosInput2] = useState('')
  const [DisableMultiplosCalculosInput, setDisableMultiplosCalculosInput] = useState(true)
  const [MultiplosCalculosColecisiteCheckbox, setMultiplosCalculosColecisiteCheckbox] = useState(false)

  const [DoisCalculosCheckbox, setDoisCalculosCheckbox] = useState(false)
  const [DoisCalculosInput1, setDoisCalculosInput1] = useState('')
  const [DoisCalculosInput2, setDoisCalculosInput2] = useState('')
  const [DisableDoisCalculosInput, setDisableDoisCalculosInput] = useState(true)
  const [DoisCalculosColecisiteCheckbox, setDoisCalculosColecisiteCheckbox] = useState(false)

  const [PolipoUnicoCheckbox, setPolipoUnicoCheckbox] = useState(false)
  const [PolipoUnicoInput, setPolipoUnicoInput] = useState('')
  const [DisablePolipoUnicoInput, setDisablePolipoUnicoInput] = useState(true)

  const [MultiplosPoliposCheckbox, setMultiplosPoliposCheckbox] = useState(false)
  const [MultiplosPoliposInput1, setMultiplosPoliposInput1] = useState('')
  const [MultiplosPoliposInput2, setMultiplosPoliposInput2] = useState('')
  const [DisableMultiplosPoliposInput, setDisableMultiplosPoliposInput] = useState(true)

  const removeItemString = (value) => {
    var index = frasesVesicula.indexOf(value);
    if (index > -1) {
      frasesVesicula.splice(index, 1);
      setFrasesVesicula((arr) => [...arr]);
    }
  };
  const removeItemConclusao = (value) => {
    var index = ConclusoesVesicula.indexOf(value);
    if (index > -1) {
      ConclusoesVesicula.splice(index, 1);
      setConclusoesVesicula((arr) => [...arr]);
    }
  };

  useEffect(() => {
    const string = 'Vesícula biliar com forma e dimensões normais, paredes finas e regulares, apresentando conteúdo anecogênico sem imagens calculosas.'
    NormalCheckbox ? setFrasesVesicula((arr) => [...arr, string]) : removeItemString(string)
  }, [NormalCheckbox])

  useEffect(() => {
    const string = 'Sinais de colesterolose vesicular.'
    ColesteroloseCheckbox ? setFrasesVesicula((arr) => [...arr, string]) : removeItemString(string)
    ColesteroloseCheckbox ? setConclusoesVesicula((arr) => [...arr, string]) : removeItemConclusao(string)
  }, [ColesteroloseCheckbox])

  useEffect(() => {
    const string = 'Vesícula biliar vazia, sem condições satisfatórias para análise.'
    const conclusaoVazia = 'Vesícula biliar vazia.'
    VaziaCheckbox ? setFrasesVesicula((arr) => [...arr, string]) : removeItemString(string)
    VaziaCheckbox ? setConclusoesVesicula((arr) => [...arr, conclusaoVazia]) : removeItemConclusao(conclusaoVazia)
  }, [VaziaCheckbox])

  useEffect(() => {
    const string = 'Vesícula biliar não caracterizada (status pós-cirúrgico).'
    AusenteCheckbox ? setFrasesVesicula((arr) => [...arr, string]) : removeItemString(string)
  }, [AusenteCheckbox])

  const criaStringCitarEspessura = (dados) => {
    var string = 'Espessura da parede vesicular'
    removeFraseCitarEspessura()
    const medida = new Convert_Medida(dados).Convert_Medida()
    if (dados != '') {
      string = `${string} = ${medida} cm.`
      setFrasesVesicula((arr) => [...arr, string])
    }
  }

  const removeFraseCitarEspessura = () => {
    frasesVesicula.map((e) => {
      if (e.includes("Espessura da parede vesicular")) {
        var index = frasesVesicula.indexOf(e);
        if (index > -1) {
          frasesVesicula.splice(index, 1);
          setFrasesVesicula((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (EspessuraParedeCheckbox) {
      criaStringCitarEspessura(CitarEspessuraInput)
      setDisableCitarEspessuraInput(false)
    } else {
      setDisableCitarEspessuraInput(true)
      removeFraseCitarEspessura()
      setCitarEspessuraInput('')
    }
  }, [EspessuraParedeCheckbox, CitarEspessuraInput])

  const criaStringCalculoUnico = (dados) => {
    var string = 'Vesícula biliar'
    removeFraseCalculoUnico()
    const medida = new Convert_Medida(dados).Convert_Medida()
    if (dados != '' && CalculoUnicoColecisiteCheckbox) {
      string = `${string} distendida, com paredes espessadas, apresentando uma imagem calculosa fixa no infundíbulo, medindo ${medida} cm.`
      setFrasesVesicula((arr) => [...arr, string])
    } else if (dados != '') {
      string = `${string} com forma e dimensões normais, paredes finas e regulares, apresentando uma imagem calculosa em seu interior, móvel às mudanças de decúbito, medindo ${medida} cm`
      setFrasesVesicula((arr) => [...arr, string])
    }
  }

  const removeFraseCalculoUnico = () => {
    frasesVesicula.map((e) => {
      var index;
      if (e.includes("distendida, com paredes espessadas, apresentando uma imagem calculosa fixa no infundíbulo, medindo")) {
        index = frasesVesicula.indexOf(e);
        if (index > -1) {
          frasesVesicula.splice(index, 1);
          setFrasesVesicula((arr) => [...arr]);
        }
      } else if (e.includes("com forma e dimensões normais, paredes finas e regulares, apresentando uma imagem calculosa em seu interior, móvel às mudanças de decúbito,")) {
        index = frasesVesicula.indexOf(e);
        if (index > -1) {
          frasesVesicula.splice(index, 1);
          setFrasesVesicula((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (CalculoUnicoCheckbox) {
      criaStringCalculoUnico(CalculoUnicoInput)
      setDisableCalculoUnicoInput(false)
    } else {
      setDisableCalculoUnicoInput(true)
      removeFraseCalculoUnico()
      setCalculoUnicoInput('')
    }
  }, [CalculoUnicoCheckbox, CalculoUnicoInput, CalculoUnicoColecisiteCheckbox])

  const criaStringMultiplosCalculos = (dados1, dados2) => {
    var string = 'Vesícula biliar'
    removeFraseMultiplosCalculos()
    const medida1 = new Convert_Medida(dados1).Convert_Medida()
    const medida2 = new Convert_Medida(dados2).Convert_Medida()
    if (dados1 != '' && dados2 != '' && MultiplosCalculosColecisiteCheckbox) {
      string = `${string} distendida, com paredes espessadas, apresentando múltiplas imagens calculosas em seu interior, medindo de ${medida1} a ${medida2} cm.`
      setFrasesVesicula((arr) => [...arr, string])
    } else if (dados1 != '' && dados2 != '') {
      string = `${string} com forma e dimensões normais, paredes finas e regulares, apresentando imagens calculosas em seu interior, móveis às mudanças de decúbito, medindo de ${medida1} a ${medida2} cm`
      setFrasesVesicula((arr) => [...arr, string])
    }
  }

  const removeFraseMultiplosCalculos = () => {
    frasesVesicula.map((e) => {
      var index;
      if (e.includes("distendida, com paredes espessadas, apresentando múltiplas imagens calculosas em seu interior, medindo de")) {
        index = frasesVesicula.indexOf(e);
        if (index > -1) {
          frasesVesicula.splice(index, 1);
          setFrasesVesicula((arr) => [...arr]);
        }
      } else if (e.includes("com forma e dimensões normais, paredes finas e regulares, apresentando imagens calculosas em seu interior, móveis às mudanças de decúbito, medindo de")) {
        index = frasesVesicula.indexOf(e);
        if (index > -1) {
          frasesVesicula.splice(index, 1);
          setFrasesVesicula((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (MultiplosCalculosCheckbox) {
      criaStringMultiplosCalculos(MultiplosCalculosInput1, MultiplosCalculosInput2)
      setDisableMultiplosCalculosInput(false)
    } else {
      setDisableMultiplosCalculosInput(true)
      removeFraseMultiplosCalculos()
      setMultiplosCalculosInput1('')
      setMultiplosCalculosInput2('')
    }
  }, [MultiplosCalculosCheckbox, MultiplosCalculosInput1, MultiplosCalculosInput2, MultiplosCalculosColecisiteCheckbox])

  const criaStringDoisCalculos = (dados1, dados2) => {
    var string = 'Vesícula biliar'
    removeFraseDoisCalculos()
    const medida1 = new Convert_Medida(dados1).Convert_Medida()
    const medida2 = new Convert_Medida(dados2).Convert_Medida()
    if (dados1 != '' && dados2 != '' && DoisCalculosColecisiteCheckbox) {
      string = `${string} distendida, com paredes espessadas, apresentando duas imagens calculosas em seu interior, medindo ${medida1} e ${medida2} cm.`
      setFrasesVesicula((arr) => [...arr, string])
    } else if (dados1 != '' && dados2 != '') {
      string = `${string} com forma e dimensões normais, paredes finas e regulares, apresentando duas imagens calculosas em seu interior, móveis às mudanças de decúbito, medindo ${medida1} e ${medida2} cm`
      setFrasesVesicula((arr) => [...arr, string])
    }
  }

  const removeFraseDoisCalculos = () => {
    frasesVesicula.map((e) => {
      var index;
      if (e.includes("distendida, com paredes espessadas, apresentando duas imagens calculosas em seu interior,")) {
        index = frasesVesicula.indexOf(e);
        if (index > -1) {
          frasesVesicula.splice(index, 1);
          setFrasesVesicula((arr) => [...arr]);
        }
      } else if (e.includes("com forma e dimensões normais, paredes finas e regulares, apresentando duas imagens calculosas em seu interior, móveis às mudanças de decúbito,")) {
        index = frasesVesicula.indexOf(e);
        if (index > -1) {
          frasesVesicula.splice(index, 1);
          setFrasesVesicula((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (DoisCalculosCheckbox) {
      criaStringDoisCalculos(DoisCalculosInput1, DoisCalculosInput2)
      setDisableDoisCalculosInput(false)
    } else {
      setDisableDoisCalculosInput(true)
      removeFraseDoisCalculos()
      setDoisCalculosInput1('')
      setDoisCalculosInput2('')
    }
  }, [DoisCalculosCheckbox, DoisCalculosInput1, DoisCalculosInput2, DoisCalculosColecisiteCheckbox])

  const criaStringPolipoUnico = (dados1) => {
    var string = 'Imagem polipoide hiperecogênica aderida à parede da vesícula, medindo'
    removeFrasePolipoUnico()
    const medida1 = new Convert_Medida(dados1).Convert_Medida()
    if (dados1 != '') {
      string = `${string} ${medida1} cm`
      setFrasesVesicula((arr) => [...arr, string])
    }
  }

  const removeFrasePolipoUnico = () => {
    frasesVesicula.map((e) => {
      if (e.includes("Imagem polipoide hiperecogênica aderida à parede da vesícula, medindo")) {
        var index = frasesVesicula.indexOf(e);
        if (index > -1) {
          frasesVesicula.splice(index, 1);
          setFrasesVesicula((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    const conclusaoPolipos = 'Imagem compatível com pólipo na vesícula biliar.'
    removeItemString(conclusaoPolipos)
    if (PolipoUnicoInput != '' || MultiplosPoliposInput2 != '') {
      setConclusoesVesicula((arr) => [...arr, conclusaoPolipos])
    } else {
      removeItemString(conclusaoPolipos)
    }
  }, [PolipoUnicoInput, MultiplosPoliposInput2])

  useEffect(() => {
    if (PolipoUnicoCheckbox) {
      criaStringPolipoUnico(PolipoUnicoInput)
      setDisablePolipoUnicoInput(false)
    } else {
      setDisablePolipoUnicoInput(true)
      removeFrasePolipoUnico()
      setPolipoUnicoInput('')
    }
  }, [PolipoUnicoCheckbox, PolipoUnicoInput])
  const criaStringMultiplosPolipos = (dados1, dados2) => {
    var string = 'Imagens polipoides hiperecogênicas aderidas às paredes da vesícula, medindo de'
    removeFraseMultiplosPolipos()
    const medida1 = new Convert_Medida(dados1).Convert_Medida()
    const medida2 = new Convert_Medida(dados2).Convert_Medida()
    if (dados1 != '' && dados2 != '') {
      string = `${string} ${medida1} a ${medida2} cm`
      setFrasesVesicula((arr) => [...arr, string])
    }
  }

  const removeFraseMultiplosPolipos = () => {
    frasesVesicula.map((e) => {
      if (e.includes("Imagens polipoides hiperecogênicas aderidas às paredes da vesícula, medindo de")) {
        var index = frasesVesicula.indexOf(e);
        if (index > -1) {
          frasesVesicula.splice(index, 1);
          setFrasesVesicula((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (MultiplosPoliposCheckbox) {
      criaStringMultiplosPolipos(MultiplosPoliposInput1, MultiplosPoliposInput2)
      setDisableMultiplosPoliposInput(false)
    } else {
      setDisableMultiplosPoliposInput(true)
      removeFraseMultiplosPolipos()
      setMultiplosPoliposInput1('')
      setMultiplosPoliposInput2('')
    }
  }, [MultiplosPoliposCheckbox, MultiplosPoliposInput1, MultiplosPoliposInput2])

  const subExame = "Vesícula Biliar";
  const titulo_exame = "Abdômen total";

  useEffect(() => {
    if (Object.keys(frasesVesicula).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesVesicula,
        ConclusoesVesicula
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesVesicula,
        ConclusoesVesicula,
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesVesicula]);

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
      <TituloNomeExame titulo="Vesícula Biliar" />

      <Box gap="25px" display="flex" flexWrap="wrap" mt="20px">

        <Box>
          <Checkbox
            isDisabled={Disable}
            onChange={(e) => setNormalCheckbox(!NormalCheckbox)}
          >
            Normal
          </Checkbox>
        </Box>

        <Box w="150px">
          <Checkbox
            isDisabled={Disable}
            onChange={(e) =>
              setEspessuraParedeCheckbox(!EspessuraParedeCheckbox)}
          >
            Citar espessura da parede:
          </Checkbox>
          <HStack>
            <Input
              w='60px'
              onChange={(e) => {
                setCitarEspessuraInput(e.target.value);
              }}
              value={CitarEspessuraInput}
              disabled={DisableCitarEspessuraInput}
              placeholder="mm"
            />
            <Text alignSelf='center'>mm</Text>
          </HStack>
        </Box>

        <Box w="150px">
          <Checkbox
            isDisabled={Disable}
            onChange={(e) =>
              setCalculoUnicoCheckbox(!CalculoUnicoCheckbox)}
          >
            Cálculo Único de
          </Checkbox>
          <Input
            onChange={(e) => {
              setCalculoUnicoInput(e.target.value);
            }}
            value={CalculoUnicoInput}
            disabled={DisableCalculoUnicoInput}
            placeholder="mm"
          />
          <Checkbox
            onChange={(e) => {
              setCalculoUnicoColecisiteCheckbox(!CalculoUnicoColecisiteCheckbox);
            }}
            disabled={DisableCalculoUnicoInput}
          >
            colecisite aguda?
          </Checkbox>
        </Box>

        <Box w="180px">
          <Checkbox
            onChange={(e) => setMultiplosCalculosCheckbox(!MultiplosCalculosCheckbox)}
          >
            Múltiplos cálculos de
          </Checkbox>
          <HStack>
            <Input
              value={MultiplosCalculosInput1}
              w='50px'
              onChange={(e) => setMultiplosCalculosInput1(e.target.value)}
              disabled={DisableMultiplosCalculosInput}
              placeholder="00"
            />
            <Text alignSelf='center'>a</Text>
            <Input
              value={MultiplosCalculosInput2}
              w='50px'
              onChange={(e) => setMultiplosCalculosInput2(e.target.value)}
              disabled={DisableMultiplosCalculosInput}
              placeholder="00"
            />
            <Text alignSelf='center'>mm</Text>
          </HStack>
          <Checkbox
            onChange={(e) => {
              setMultiplosCalculosColecisiteCheckbox(!MultiplosCalculosColecisiteCheckbox);
            }}
            disabled={DisableMultiplosCalculosInput}
          >
            colecisite aguda?
          </Checkbox>
        </Box>

        <Box w="180px">
          <Checkbox
            isDisabled={Disable}
            onChange={(e) => setDoisCalculosCheckbox(!DoisCalculosCheckbox)}
          >
            Dois cálculos de
          </Checkbox>
          <HStack>
            <Input
              w='50px'
              value={DoisCalculosInput1}
              onChange={(e) => setDoisCalculosInput1(e.target.value)}
              disabled={DisableDoisCalculosInput}
              placeholder="00"
            />
            <Text alignSelf='center'>e</Text>
            <Input
              value={DoisCalculosInput2}
              w='50px'
              onChange={(e) =>
                setDoisCalculosInput2(e.target.value)}
              disabled={DisableDoisCalculosInput}
              placeholder="00"
            />
            <Text alignSelf='center'>mm</Text>
          </HStack>
          <Checkbox
            onChange={(e) => {
              setDoisCalculosColecisiteCheckbox(!DoisCalculosColecisiteCheckbox);
            }}
            disabled={DisableDoisCalculosInput}
          >
            colecisite aguda?
          </Checkbox>
        </Box>

        <Box w="150px">
          <Checkbox
            isDisabled={Disable}
            onChange={(e) => setPolipoUnicoCheckbox(!PolipoUnicoCheckbox)}
          >
            pólipo único de
          </Checkbox>
          <HStack>
            <Input
              value={PolipoUnicoInput}
              w='60px'
              onChange={(e) => setPolipoUnicoInput(e.target.value)}
              disabled={DisablePolipoUnicoInput}
              placeholder="mm"
            />
            <Text alignSelf='center'>mm</Text>
          </HStack>
        </Box>

        <Box w="180px">
          <Checkbox
            isDisabled={Disable}
            onChange={(e) => setMultiplosPoliposCheckbox(!MultiplosPoliposCheckbox)}
          >
            Múltiplos pólipos de
          </Checkbox>
          <HStack>
            <Input
              value={MultiplosPoliposInput1}
              w='50px'
              onChange={(e) => setMultiplosPoliposInput1(e.target.value)}
              disabled={DisableMultiplosPoliposInput}
              placeholder="00"
            />
            <Text alignSelf='center'>a</Text>
            <Input
              value={MultiplosPoliposInput2}
              w='50px'
              onChange={(e) => setMultiplosPoliposInput2(e.target.value)}
              disabled={DisableMultiplosPoliposInput}
              placeholder="00"
            />
            <Text alignSelf='center'>mm</Text>
          </HStack>
        </Box>

        <Box w="120px">
          <Checkbox
            onChange={(e) => setColesteroloseCheckbox(!ColesteroloseCheckbox)}
            isDisabled={Disable}
          >
            Colesterolose
          </Checkbox>
        </Box>
        <Box>
          <Checkbox
            isDisabled={Disable}
            onChange={(e) => setVaziaCheckbox(!VaziaCheckbox)}
          >
            Vazia
          </Checkbox>
        </Box>
        <Box>
          <Checkbox
            isDisabled={Disable}
            onChange={(e) => setAusenteCheckbox(!AusenteCheckbox)}
          >
            Ausente
          </Checkbox>
        </Box>
      </Box>
    </Box >
  );
}

export default VesiculaBiliar;
