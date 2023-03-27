/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Select } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Baco() {
  const altura = "100%";
  const largura = "66%";

  const [FrasesBaco, setFrasesBaco] = useState<any>([]);
  const [ConclusaoBaco, setConclusaoBaco] = useState<any>([]);

  const [CheckboxValueNormal, setCheckboxValueNormal] = useState(false);

  const [CheckboxValueAumentadoEcotextura, setCheckboxValueAumentadoEcotextura] = useState(false);

  const [SelectAumentadoComEcotextura, setSelectAumentadoComEcotextura] = useState('');

  const [CheckboxValueNaoVisibilizado, setCheckboxValueNaoVisibilizado] = useState(false);

  const [SelectNaoVisibilizado, setSelectNaoVisibilizado] = useState('');

  const [CheckboxValueBacoAcessorio, setCheckboxValueBacoAcessorio] = useState(false)

  const [InputBacoAcessorio1, setInputBacoAcessorio1] = useState('');
  const [InputBacoAcessorio2, setInputBacoAcessorio2] = useState('');

  const [CheckboxValueCalcificacoes, setCheckboxValueCalcificacoes] = useState(false);
  const [InputCalcificacoes, setInputCalcificacoes] = useState('');


  const [CheckboxValueCisto, setCheckboxValueCisto] = useState(false);
  const [InputCisto, setInputCisto] = useState('');

  const removeItemString = (value) => {
    var index = FrasesBaco.indexOf(value);

    if (index > -1) {
      FrasesBaco.splice(index, 1);
      setFrasesBaco((arr) => [...arr]);
    }
  };

  const removeItemSelect = (value) => {
    FrasesBaco.map((e) => {
      if (e.includes(value)) {
        var index = FrasesBaco.indexOf(e);
        if (index > -1) {
          FrasesBaco.splice(index, 1);
          setFrasesBaco((arr) => [...arr]);
        }
      }
    });
  }

  const removeItemConclusao = (value) => {
    var index = ConclusaoBaco.indexOf(value);
    if (index > -1) {
      ConclusaoBaco.splice(index, 1);
      setConclusaoBaco((arr) => [...arr]);
      new Format_Laudo(titulo_exame).Remove_Conclusao(value);
    }
  };

  const removeItemConclusaoSelect = (value) => {
    ConclusaoBaco.map((e) => {
      if (e.includes(value)) {
        var index = ConclusaoBaco.indexOf(e);
        if (index > -1) {
          ConclusaoBaco.splice(index, 1);
          setConclusaoBaco((arr) => [...arr]);
          new Format_Laudo(titulo_exame).Remove_Conclusao_Select(value);
        }
      }
    });
  }


  //pega valor enviado pelo value, cria string e seta ela no laudo principal
  //setInputBaço é usado para armezenar string para remover posteriormente




  // const verificaChecked = (value) => {
  //   switch (value.id) {
  //     case "normal":
  //       if (value.checked === true) {
  //         setDefaultValueNormal({ defaultValueNormal: true });
  //         criarString(value.value);
  //         setCheckboxvalueAumentadoEcotextura({
  //           aumentadoComEcotextura: true,
  //           SelectAumentadoComEcotextura: true,
  //         });
  //         setCheckboxvalueNaoVisibilizado({
  //           naoVisibilizado: true,
  //           SelectNaoVisibilizado: true,
  //         });
  //         setCheckboxvalueBacoAcessorio({
  //           bacoAcessorio: true,
  //           InputBacoAcessorio: true,
  //         });
  //         setCheckboxvalueCalcificacoes({
  //           calcificacoes: true,
  //           InputCalcificacoes: true,
  //         });
  //         setCheckboxvalueCisto({
  //           cisto: true,
  //           InputCisto: true,
  //         });
  //       } else {
  //         setDefaultValueNormal({ defaultValueNormal: false });
  //         removeItemString(value.value);
  //         setCheckboxvalueAumentadoEcotextura({
  //           aumentadoComEcotextura: false,
  //           SelectAumentadoComEcotextura: true,
  //         });
  //         setCheckboxvalueNaoVisibilizado({
  //           naoVisibilizado: false,
  //           SelectNaoVisibilizado: true,
  //         });
  //         setCheckboxvalueBacoAcessorio({
  //           bacoAcessorio: false,
  //           InputBacoAcessorio: true,
  //         });
  //         setCheckboxvalueCalcificacoes({
  //           calcificacoes: false,
  //           InputCalcificacoes: true,
  //         });
  //         setCheckboxvalueCisto({
  //           cisto: false,
  //           InputCisto: true,
  //         });
  //       }
  //       break;
  //     case "aumentadoComEcotextura":
  //       if (value.checked === true) {
  //         setCheckboxvalueAumentadoEcotextura({
  //           aumentadoComEcotextura: false,
  //           SelectAumentadoComEcotextura: false,
  //         });
  //         console.log(FrasesBaco);
  //         TrocaCorBorda(value);
  //       } else {
  //         setCheckboxvalueAumentadoEcotextura({
  //           aumentadoComEcotextura: false,
  //           SelectAumentadoComEcotextura: true,
  //         });
  //         console.log(FrasesBaco);

  //         TrocaCorBorda(value);

  //         removeItemString("Aumentado com ecotextura heterogênea ");
  //         removeItemString("Aumentado com ecotextura homogênea ");

  //         SelectAumentadoComEcotextura.value = "";
  //       }
  //       DeterminaCondicaoCheckNormal();
  //       break;
  //     case "SelectAumentadoComEcotextura":
  //       if (value.value === "Aumentado com ecotextura homogênea ") {
  //         removeItemString("Aumentado com ecotextura heterogênea ");
  //         criarString(value.value);
  //       } else {
  //         removeItemString("Aumentado com ecotextura homogênea ");
  //         criarString(value.value);
  //       }
  //       break;
  //     case "naoVisibilizado":
  //       if (value.checked === true) {
  //         setCheckboxvalueNaoVisibilizado({
  //           naoVisibilizado: false,
  //           SelectNaoVisibilizado: false,
  //         });
  //         console.log(FrasesBaco);
  //         TrocaCorBorda(value);
  //       } else {
  //         setCheckboxvalueNaoVisibilizado({
  //           naoVisibilizado: false,
  //           SelectNaoVisibilizado: true,
  //         });
  //         console.log(FrasesBaco);
  //         TrocaCorBorda(value);

  //         removeItemString("Não visibilizado com interposição gasosa ");
  //         removeItemString("Não visibilizado com Ausênsia cirurgica ");
  //         SelectNaoVisibilizado.value = "";
  //       }
  //       DeterminaCondicaoCheckNormal();
  //       break;
  //     case "SelectNaoVisibilizado":
  //       console.log(FrasesBaco);
  //       if (value.value === "Não visibilizado com interposição gasosa ") {
  //         removeItemString("Não visibilizado com Ausênsia cirurgica ");
  //         criarString(value.value);
  //       } else {
  //         removeItemString("Não visibilizado com interposição gasosa ");
  //         criarString(value.value);
  //       }

  //       break;
  //     case "bacoAcessorio":
  //       if (value.checked === true) {
  //         setCheckboxvalueBacoAcessorio({
  //           bacoAcessorio: false,
  //           InputBacoAcessorio: false,
  //         });

  //         TrocaCorBorda(value);
  //       } else {
  //         setCheckboxvalueBacoAcessorio({
  //           bacoAcessorio: false,
  //           InputBacoAcessorio: true,
  //         });
  //         TrocaCorBorda(value);
  //         removeStringBaco();

  //         Input1BacoAcessorio.value = "";
  //         Input2BacoAcessorio.value = "";
  //       }
  //       DeterminaCondicaoCheckNormal();
  //       break;
  //     case "Input1BacoAcessorio":
  //       setinputBacoAcessorio(value.value);
  //       break;
  //     case "Input2BacoAcessorio":
  //       criaValorInputBaco(value);
  //       break;
  //     case "calcificacoes":
  //       if (value.checked === true) {
  //         setCheckboxvalueCalcificacoes({
  //           calcificacoes: false,
  //           InputCalcificacoes: false,
  //         });
  //         TrocaCorBorda(value);
  //       } else {
  //         setCheckboxvalueCalcificacoes({
  //           calcificacoes: false,
  //           InputCalcificacoes: true,
  //         });
  //         TrocaCorBorda(value);
  //         removeStringCalcificacoes();
  //         InputCalcificacoes.value = "";
  //       }
  //       DeterminaCondicaoCheckNormal();
  //       break;
  //     case "InputCalcificacoes":
  //       pegaValorInputCalcificacao(value);
  //       break;
  //     case "cisto":
  //       if (value.checked === true) {
  //         setCheckboxvalueCisto({
  //           cisto: false,
  //           InputCisto: false,
  //         });

  //         TrocaCorBorda(value);
  //       } else {
  //         setCheckboxvalueCisto({
  //           cisto: false,
  //           InputCisto: true,
  //         });
  //         TrocaCorBorda(value);

  //         removeStringCisto();
  //         InputCisto.value = "";
  //       }
  //       DeterminaCondicaoCheckNormal();
  //       break;
  //     case "InputCisto":
  //       pegaValorInputCisto(value);
  //       break;
  //     default:
  //       console.log("esta aqui", value.id);
  //       console.log("nao achou o id");
  //       break;
  //   }
  // };

  const criaStringAumentadoEcotextura = () => {
    let string = 'Tópico, limites precisos, forma típica, ecotextura'
    let conclusao = 'Esplenomegalia.'
    removeItemSelect(string)
    removeItemConclusao(conclusao)
    if (CheckboxValueAumentadoEcotextura) {
      if (SelectAumentadoComEcotextura !== '') {
        string = `${string} ${SelectAumentadoComEcotextura} e dimensões aumentadas.`
        setFrasesBaco((arr) => [...arr, string])
        setConclusaoBaco((arr) => [...arr, conclusao])

      }
    } else {
      setSelectAumentadoComEcotextura('')
    }
  }

  useEffect(() => {
    criaStringAumentadoEcotextura()
  }, [CheckboxValueAumentadoEcotextura, SelectAumentadoComEcotextura])

  const criaStringNaoVisibilizado = () => {
    let string = 'Não caracterizado'
    removeItemSelect(string)
    removeItemConclusao('Interposição gasosa das alças intestinais.')
    removeItemConclusao('Esplenectomia.')
    if (CheckboxValueNaoVisibilizado) {
      if (SelectNaoVisibilizado !== '') {
        string = `${string} ${SelectNaoVisibilizado}`
        setFrasesBaco((arr) => [...arr, string])
        if (SelectNaoVisibilizado == '.') setConclusaoBaco((arr) => [...arr, 'Interposição gasosa das alças intestinais.'])
        if (SelectNaoVisibilizado == ' (status pós-cirúrgico).') setConclusaoBaco((arr) => [...arr, 'Esplenectomia.'])

      }
    } else {
      setSelectNaoVisibilizado('')
    }
  }

  useEffect(() => {
    criaStringNaoVisibilizado()
  }, [CheckboxValueNaoVisibilizado, SelectNaoVisibilizado])

  const criaStringBaco = () => {
    let string = 'Nota-se imagem nodular, sólida, de contornos bem definidos e regulares, isoecogênica ao parênquima esplênico, ínfero-medialmente ao baço, medindo'
    const conclusao = 'Baço acessório.'
    removeItemSelect(string)
    removeItemConclusao(conclusao)
    if (CheckboxValueBacoAcessorio) {
      if (InputBacoAcessorio1 !== '' && InputBacoAcessorio2 !== '') {
        string = `${string} ${InputBacoAcessorio1} x ${InputBacoAcessorio2} mm, compatível com baço acessório.`
        setFrasesBaco((arr) => [...arr, string])
        setConclusaoBaco((arr) => [...arr, conclusao])
      }
    } else {
      setInputBacoAcessorio1('')
      setInputBacoAcessorio2('')
    }
  }

  useEffect(() => {
    criaStringBaco()
  }, [CheckboxValueBacoAcessorio, InputBacoAcessorio1, InputBacoAcessorio2])

  const criaStringCalcificao = () => {
    let string = 'Nota-se foco hiperecogênico, irregular, provido de acústica posterior, medindo'
    const conclusao = 'Calcificação esplênica.'
    removeItemSelect(string)
    removeItemConclusao(conclusao)
    if (CheckboxValueCalcificacoes) {
      if (InputCalcificacoes !== '') {
        string = `${string} ${InputCalcificacoes} mm.`
        setFrasesBaco((arr) => [...arr, string])
        setConclusaoBaco((arr) => [...arr, conclusao])
      }
    } else {
      setInputCalcificacoes('')
    }
  }

  useEffect(() => {
    criaStringCalcificao()
  }, [CheckboxValueCalcificacoes, InputCalcificacoes])

  const criaStringCisto = () => {
    let string = 'Nota-se formação cística, anecóica, homogênea, de contornos regulares, medindo'
    const conclusao = 'Cisto esplênico.'
    removeItemSelect(string)
    removeItemConclusao(conclusao)
    if (CheckboxValueCisto) {
      if (InputCisto !== '') {
        string = `${string} ${InputCisto} mm.`
        setFrasesBaco((arr) => [...arr, string])
        setConclusaoBaco((arr) => [...arr, conclusao])
      }
    } else {
      setInputCisto('')
    }
  }

  useEffect(() => {
    criaStringCisto()
  }, [CheckboxValueCisto, InputCisto])

  useEffect(() => {
    const conclusao = 'Tópico, limites precisos, forma típica, ecotextura e dimensões normais.'
    CheckboxValueNormal ? setFrasesBaco((arr) => [...arr, conclusao]) : removeItemString(conclusao)
  }, [CheckboxValueNormal])

  const subExame = "Baço";
  const titulo_exame = "Abdomen Superior";


  useEffect(() => {
    if (Object.keys(FrasesBaco).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        FrasesBaco,
        ConclusaoBaco
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        FrasesBaco,
        ConclusaoBaco
      ).Format_Laudo_Create_Storage();
    }
  }, [FrasesBaco]);

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
        <Box w="100px">
          <Checkbox

            onChange={(e) => {
              setCheckboxValueNormal(!CheckboxValueNormal);
            }}
          >
            Normal
          </Checkbox>
        </Box>

        <Box w="220px">
          <Checkbox
            onChange={(e) => {
              setCheckboxValueAumentadoEcotextura(!CheckboxValueAumentadoEcotextura);
            }}
          >
            Aumentado com ecotextura
          </Checkbox>
          <Select
            value={SelectAumentadoComEcotextura}
            isDisabled={!CheckboxValueAumentadoEcotextura}
            onChange={(e) => {
              setSelectAumentadoComEcotextura(e.target.value);
            }}
          >
            <option value="" disabled selected>
              Selecione
            </option>
            <option value="homogênea">
              Homogênea
            </option>
            <option value="heterogênea">
              Heterogênea
            </option>
          </Select>
        </Box>

        <Box w="150px">
          <Checkbox
            onChange={(e) => {
              setCheckboxValueNaoVisibilizado(!CheckboxValueNaoVisibilizado);
            }}
          >
            Não visibilizado
          </Checkbox>
          <Select
            isDisabled={!CheckboxValueNaoVisibilizado}
            value={SelectNaoVisibilizado}
            onChange={(e) => {
              setSelectNaoVisibilizado(e.target.value);
            }}
          >
            <option value="" disabled selected>
              Selecione
            </option>
            <option value=" (status pós-cirúrgico).">
              ausência cirúrgica
            </option>
            <option value=".">
              interposição gasosa
            </option>
          </Select>
        </Box>

        <Box w="140px">
          <Checkbox

            onChange={(e) => {
              setCheckboxValueBacoAcessorio(!CheckboxValueBacoAcessorio);
            }}
          >
            Baço Acessório
          </Checkbox>
          <Input
            textAlign='center'
            p='0'
            value={InputBacoAcessorio1}
            isDisabled={!CheckboxValueBacoAcessorio}
            w="50px"
            onChange={(e) => {
              setInputBacoAcessorio1(e.target.value);
            }}
            placeholder="0"
          />
          x
          <Input
            textAlign='center'
            p='0'
            value={InputBacoAcessorio2}
            isDisabled={!CheckboxValueBacoAcessorio}
            w="50px"
            onChange={(e) => {
              setInputBacoAcessorio2(e.target.value);
            }}
            placeholder="0"
          />
          mm
        </Box>

        <HStack>
          <Checkbox
            onChange={(e) => {
              setCheckboxValueCalcificacoes(!CheckboxValueCalcificacoes);
            }}
          >
            Calcificações
          </Checkbox>
          <Input
            isDisabled={!CheckboxValueCalcificacoes}
            textAlign='center'
            value={InputCalcificacoes}
            p='0'
            w='50px'
            onChange={(e) => {
              setInputCalcificacoes(e.target.value);
            }}
            placeholder="mm"
          />
        </HStack>
        <HStack>
          <Checkbox
            onChange={(e) => {
              setCheckboxValueCisto(!CheckboxValueCisto);
            }}
          >
            Cisto
          </Checkbox>
          <Input
            textAlign='center'
            p='0'
            w='50px'
            value={InputCisto}
            isDisabled={!CheckboxValueCisto}
            onChange={(e) => {
              setInputCisto(e.target.value);
            }}
            placeholder="mm"
          />
        </HStack>
      </Box>
    </Box>
  );
}

export default Baco;
