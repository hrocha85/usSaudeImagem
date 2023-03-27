/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Input, Select } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function VesiculaBiliar() {
  const altura = "100%";
  const largura = "66%";

  const [FrasesVesicula, setFrasesVesicula] = useState<any>([]);
  const [ConclusaoVesicula, setConclusaoVesicula] = useState<any>([]);

  const [NormalCheckbox, setNormalCheckbox] = useState(false)
  const [CalculoUnicoCheckbox, setCalculoUnicoCheckbox] = useState(false)
  const [CalculoUnicoInput, setCalculoUnicoInput] = useState('')
  const [MultiplosCalculosCheckbox, setMultiplosCalculosCheckbox] = useState(false)
  const [MultiplosCalculosInput, setMultiplosCalculosInput] = useState('')
  const [ColesteroloseCheckbox, setColesteroloseCheckbox] = useState(false)
  const [VaziaCheckbox, setVaziaCheckbox] = useState(false)
  const [MultiplosPoliposCheckbox, setMultiplosPoliposCheckbox] = useState(false)
  const [MultiplosPoliposInput, setMultiplosPoliposInput] = useState('')
  const [PolipoUnicoCheckbox, setPolipoUnicoCheckbox] = useState(false)
  const [PolipoUnicoInput, setPolipoUnicoInput] = useState('')
  const [NaoVisibilizadoCheckbox, setNaoVisibilizadoCheckbox] = useState(false)
  const [NaoVisibilizadoSelect, setNaoVisibilizadoSelect] = useState('')
  const [PorcelanaCheckbox, setPorcelanaCheckbox] = useState(false)
  const [BileEpessaCheckbox, setBileEpessaCheckbox] = useState(false)

  const criaStringNaoVisibilizado = () => {
    var string = 'não caracterizada'
    var conclusao = 'Interposição gasosa das alças intestinais.'
    removeItemSelect(string)
    removeStringConclusao(conclusao)
    removeStringConclusao('Colecistectomia.')
    if (NaoVisibilizadoCheckbox) {
      if (NaoVisibilizadoSelect != '') {
        string = `${NaoVisibilizadoSelect}.`
        setFrasesVesicula((arr) => [...arr, string])
        if (NaoVisibilizadoSelect === 'não caracterizada (status pós-cirúrgico).') {
          setConclusaoVesicula((arr) => [...arr, conclusao])
        } else {
          conclusao = 'Colecistectomia.'
          setConclusaoVesicula((arr) => [...arr, conclusao])
        }
      }
    } else {
      setNaoVisibilizadoSelect('')
    }
  }

  useEffect(() => {
    criaStringNaoVisibilizado()
  }, [NaoVisibilizadoCheckbox, NaoVisibilizadoSelect])

  const criaStringCalculoUnico = () => {
    var string = 'com paredes e mucosa regulares, apresentando imagem irregular, hiperecóica, com sombra acústica posterior, medindo'
    const conclusao = 'Colelitíase biliar.'
    removeItemSelect(string)
    removeStringConclusao(conclusao)
    if (CalculoUnicoCheckbox) {
      if (CalculoUnicoInput != '') {
        string = `${string} ${CalculoUnicoInput} mm.`
        setFrasesVesicula((arr) => [...arr, string])
        setConclusaoVesicula((arr) => [...arr, conclusao])
      }
    } else {
      setCalculoUnicoInput('')
    }
  }

  useEffect(() => {
    criaStringCalculoUnico()
  }, [CalculoUnicoCheckbox, CalculoUnicoInput])

  const criaStringMultiplosCalculos = () => {
    var string = 'com paredes e mucosa regulares, apresentando imagens irregulares, hiperecóicas, com sombra acústica posterior, a maior medindo'
    const conclusao = 'Colelitíase biliar.'
    removeItemSelect(string)
    removeStringConclusao(conclusao)
    if (MultiplosCalculosCheckbox) {
      if (MultiplosCalculosInput != '') {
        string = `${string} ${MultiplosCalculosInput} mm.`
        setFrasesVesicula((arr) => [...arr, string])
        setConclusaoVesicula((arr) => [...arr, conclusao])
      }
    } else {
      setMultiplosCalculosInput('')
    }
  }

  useEffect(() => {
    criaStringMultiplosCalculos()
  }, [MultiplosCalculosCheckbox, MultiplosCalculosInput])

  const criaStringMultiplosPolipos = () => {
    var string = 'normodistendida, com paredes finas, apresentando imagens nodulares, sólidas, hiperecogênicas, de aspecto polipóide, com contornos regulares, imóveis à mudança de decúbito, a maior medindo'
    const conclusao = 'Imagens nodulares intra-vesiculares compatíveis com pólipos.'
    removeItemSelect(string)
    removeStringConclusao(conclusao)
    if (MultiplosPoliposCheckbox) {
      if (MultiplosPoliposInput != '') {
        string = `${string} ${MultiplosPoliposInput}.`
        setFrasesVesicula((arr) => [...arr, string])
        setConclusaoVesicula((arr) => [...arr, conclusao])
      }
    } else {
      setMultiplosPoliposInput('')
    }
  }

  useEffect(() => {
    criaStringMultiplosPolipos()
  }, [MultiplosPoliposCheckbox, MultiplosPoliposInput])

  const criaStringPolipoUnico = () => {
    var string = 'normodistendida, com paredes finas, apresentando imagem nodular, sólida, hiperecogênica, de aspecto polipóide, com contornos regulares, imóvel à mudança de decúbito, medindo'
    const conclusao = 'Imagem nodular intra-vesicular compatível com pólipo.'
    removeItemSelect(string)
    removeStringConclusao(conclusao)
    if (PolipoUnicoCheckbox) {
      if (PolipoUnicoInput != '') {
        string = `${string} ${PolipoUnicoInput} mm.`
        setFrasesVesicula((arr) => [...arr, string])
        setConclusaoVesicula((arr) => [...arr, conclusao])
      }
    } else {
      setPolipoUnicoInput('')
    }
  }

  useEffect(() => {
    criaStringPolipoUnico()
  }, [PolipoUnicoCheckbox, PolipoUnicoInput])

  useEffect(() => {
    const string = 'com paredes e mucosa regulares, lúmen anecóico.'
    NormalCheckbox ? setFrasesVesicula((arr) => [...arr, string]) : removeItemString(string)
  }, [NormalCheckbox])
  useEffect(() => {
    const string = 'normodistendida, com paredes finas apresentando pequenos focos hiperecogênicos de artefatos em cauda de cometa, medindo até 0,2 cm, podendo corresponder a colesterolose.'
    const conclusao = 'Colesterolose vesicular.'
    ColesteroloseCheckbox ? setFrasesVesicula((arr) => [...arr, string]) : removeItemString(string)
    ColesteroloseCheckbox ? setConclusaoVesicula((arr) => [...arr, conclusao]) : removeStringConclusao(conclusao)
  }, [ColesteroloseCheckbox])
  useEffect(() => {
    const string = 'apresenta-se hipodistendida.'
    const conclusao = 'Vesícula biliar hipodistendida.'
    VaziaCheckbox ? setFrasesVesicula((arr) => [...arr, string]) : removeItemString(string)
    VaziaCheckbox ? setConclusaoVesicula((arr) => [...arr, conclusao]) : removeStringConclusao(conclusao)
  }, [VaziaCheckbox])
  useEffect(() => {
    const string = 'com paredes e mucosa regulares, lúmen apresentando bile espessa.'
    const conclusao = 'Bile espessa.'
    BileEpessaCheckbox ? setFrasesVesicula((arr) => [...arr, string]) : removeItemString(string)
    BileEpessaCheckbox ? setConclusaoVesicula((arr) => [...arr, conclusao]) : removeStringConclusao(conclusao)
  }, [BileEpessaCheckbox])
  useEffect(() => {
    const string = 'sombra acústica compacta em loja vesicular com não caracterização da parede anterior.'
    const conclusao = 'Vesícula biliar em porcelana.'
    PorcelanaCheckbox ? setFrasesVesicula((arr) => [...arr, string]) : removeItemString(string)
    PorcelanaCheckbox ? setConclusaoVesicula((arr) => [...arr, conclusao]) : removeStringConclusao(conclusao)
  }, [PorcelanaCheckbox])

  const removeItemSelect = (value) => {
    FrasesVesicula.map((e) => {
      if (e.includes(value)) {
        var index = FrasesVesicula.indexOf(e);
        if (index > -1) {
          FrasesVesicula.splice(index, 1);
          setFrasesVesicula((arr) => [...arr]);
        }
      }
    });
  }

  const removeStringConclusao = (value) => {
    var index;
    ConclusaoVesicula.map((e) => {
      if (e.includes(value)) {
        index = ConclusaoVesicula.indexOf(e);
        if (index > -1) {
          ConclusaoVesicula.splice(index, 1);
          setConclusaoVesicula((arr) => [...arr]);
          new Format_Laudo(titulo_exame).Remove_Conclusao(value);
        }
      }
    });
  };

  const removeItemString = (value) => {
    // console.log("valor remove = ", value);
    var index = FrasesVesicula.indexOf(value);
    //caso o valor enviado exista no array, vai remover com splice e setar array novamente
    if (index > -1) {
      FrasesVesicula.splice(index, 1);
      setFrasesVesicula((arr) => [...arr]);
    }
    // console.log('posicao', index)
    // console.log("laudosPrin", laudoPrin)
  };

  const subExame = "Vesícula Biliar";
  const titulo_exame = "Abdomen Superior";

  useEffect(() => {
    if (Object.keys(FrasesVesicula).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        FrasesVesicula,
        ConclusaoVesicula
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        FrasesVesicula,
        ConclusaoVesicula
      ).Format_Laudo_Create_Storage();
    }
  }, [FrasesVesicula]);

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

      <Box columnGap="20px" display="flex" flexWrap="wrap" mt="20px">
        <Box>
          <Checkbox
            isDisabled={CalculoUnicoCheckbox || MultiplosCalculosCheckbox ||
              ColesteroloseCheckbox || VaziaCheckbox || MultiplosPoliposCheckbox ||
              PolipoUnicoCheckbox || NaoVisibilizadoCheckbox || PorcelanaCheckbox || BileEpessaCheckbox}
            onChange={(e) => setNormalCheckbox(!NormalCheckbox)}
          >
            Normal
          </Checkbox>
        </Box>

        <Box w="150px">
          <Checkbox
            isDisabled={NormalCheckbox}
            onChange={(e) => setCalculoUnicoCheckbox(!CalculoUnicoCheckbox)}
          >
            Cálculo Único
          </Checkbox>
          <Input
            textAlign='center'
            p='0'
            w='50px'
            value={CalculoUnicoInput}
            isDisabled={!CalculoUnicoCheckbox}
            onChange={(e) => setCalculoUnicoInput(e.target.value)}
          />
        </Box>

        <Box w="261px">
          <Checkbox
            isDisabled={NormalCheckbox}
            onChange={(e) => setMultiplosCalculosCheckbox(!MultiplosCalculosCheckbox)}
          >
            Múltiplos cálculos, o maior mede:
          </Checkbox>
          <Input
            textAlign='center'
            p='0'
            w='50px'
            value={MultiplosCalculosInput}
            isDisabled={!MultiplosCalculosCheckbox}
            onChange={(e) => setMultiplosCalculosInput(e.target.value)}
          />
        </Box>

        <Box w="120px">
          <Checkbox
            isDisabled={NormalCheckbox}
            onChange={(e) => setColesteroloseCheckbox(!ColesteroloseCheckbox)}

          >
            Colesterolose
          </Checkbox>
        </Box>
        <Box>
          <Checkbox
            isDisabled={NormalCheckbox}
            onChange={(e) => setVaziaCheckbox(!VaziaCheckbox)}
          >
            Vazia
          </Checkbox>
        </Box>

        <Box w="256px">
          <Checkbox
            isDisabled={NormalCheckbox}
            onChange={(e) => setMultiplosPoliposCheckbox(!MultiplosPoliposCheckbox)}
          >
            Múltiplos Pólipos, o maior mede:
          </Checkbox>
          <Input
            textAlign='center'
            p='0'
            w='50px'
            value={MultiplosPoliposInput}
            isDisabled={!MultiplosPoliposCheckbox}
            onChange={(e) => setMultiplosPoliposInput(e.target.value)}
          />
        </Box>
        <Box w="150px">
          <Checkbox
            isDisabled={NormalCheckbox}
            onChange={(e) => setPolipoUnicoCheckbox(!PolipoUnicoCheckbox)}
          >
            Pólipo único
          </Checkbox>
          <Input
            textAlign='center'
            p='0'
            w='50px'
            value={PolipoUnicoInput}
            isDisabled={!PolipoUnicoCheckbox}
            onChange={(e) => setPolipoUnicoInput(e.target.value)}
          />
        </Box>
        <Box w="150px">
          <Checkbox
            isDisabled={NormalCheckbox}
            onChange={(e) => setNaoVisibilizadoCheckbox(!NaoVisibilizadoCheckbox)}
          >
            Não visibilizado
          </Checkbox>
          <Select
            isDisabled={!NaoVisibilizadoCheckbox}
            onChange={(e) => setNaoVisibilizadoSelect(e.target.value)}
            value={NaoVisibilizadoSelect}
          >
            <option value="" disabled selected>
              Selecione
            </option>
            <option value="não caracterizada (status pós-cirúrgico).">Ausência cirúrgica</option>
            <option value="não caracterizada.">Interposição gasosa</option>
          </Select>
        </Box>
        <Box >
          <Checkbox
            isDisabled={NormalCheckbox}
            onChange={(e) => setPorcelanaCheckbox(!PorcelanaCheckbox)}
          >
            Em Porcelana
          </Checkbox>
        </Box>
        <Box >
          <Checkbox
            isDisabled={NormalCheckbox}
            onChange={(e) => setBileEpessaCheckbox(!BileEpessaCheckbox)}
          >
            Bile Espessa
          </Checkbox>
        </Box>
      </Box>
    </Box>

  );
}

export default VesiculaBiliar;
