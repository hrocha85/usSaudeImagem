import { Box, Checkbox, Input, Select } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { NormalContext } from "../../../../context/NormalContext";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Baco() {
  const altura = "100%";
  const largura = "66%";

  let aumentadoComEcotextura = document.querySelector(
    "#aumentadoComEcotextura"
  ) as HTMLInputElement;
  let naoVisibilizado = document.querySelector(
    "#naoVisibilizado"
  ) as HTMLInputElement;
  let bacoAcessorio = document.querySelector(
    "#bacoAcessorio"
  ) as HTMLInputElement;
  let calcificacoes = document.querySelector(
    "#calcificacoes"
  ) as HTMLInputElement;
  let cisto = document.querySelector("#cisto") as HTMLInputElement;

  let SelectAumentadoComEcotextura = document.querySelector(
    "#SelectAumentadoComEcotextura"
  ) as HTMLInputElement;
  let SelectNaoVisibilizado = document.querySelector(
    "#SelectNaoVisibilizado"
  ) as HTMLInputElement;
  let Input1BacoAcessorio = document.querySelector(
    "#Input1BacoAcessorio"
  ) as HTMLInputElement;
  let Input2BacoAcessorio = document.querySelector(
    "#Input2BacoAcessorio"
  ) as HTMLInputElement;
  let InputCalcificacoes = document.querySelector(
    "#InputCalcificacoes"
  ) as HTMLInputElement;
  let InputCisto = document.querySelector("#InputCisto") as HTMLInputElement;

  const { laudoNormal } = useContext(NormalContext);
  const [frasesBaco, setFrasesBaco] = useState<any>([]);

  const [inputBacoAcessorio, setinputBacoAcessorio] = useState("");
  const [inputBaco, setInputBaco] = useState("");
  const [inputCalcificacoes, setInputCalcificacoes] = useState("");
  const [inputCisto, setInputCisto] = useState("");

  const [corBordaAumentadoEcotextura, setCorBordaAumentadoEcotextura] =
    useState("#E0E0E0");
  const [corBordaNaoVisibilizado, setCorBordaNaoVisibilizado] =
    useState("#E0E0E0");
  const [corBordaBacoAcessorio, setCorBordaBacoAcessorio] = useState("#E0E0E0");
  const [corBordaCalcificacoes, setCorBordaCalcificacoes] = useState("#E0E0E0");
  const [corBordaCisto, setCorBordaCisto] = useState("#E0E0E0");

  const [defaultValueNormal, setDefaultValueNormal] = useState({
    defaultValueNormal: false,
  });

  const [checkValueNormal, setCheckvalueNormal] = useState({
    normal: false,
  });

  const [checkValueAumentadoEcotextura, setCheckvalueAumentadoEcotextura] =
    useState({
      aumentadoComEcotextura: false,
      SelectAumentadoComEcotextura: true,
    });

  const [checkValueNaoVisibilizado, setCheckvalueNaoVisibilizado] = useState({
    naoVisibilizado: false,
    SelectNaoVisibilizado: true,
  });

  const [checkValueBacoAcessorio, setCheckvalueBacoAcessorio] = useState({
    bacoAcessorio: false,
    InputBacoAcessorio: true,
  });
  const [checkValueCalcificacoes, setCheckvalueCalcificacoes] = useState({
    calcificacoes: false,
    InputCalcificacoes: true,
  });
  const [checkValueCisto, setCheckvalueCisto] = useState({
    cisto: false,
    InputCisto: true,
  });

  const criarString = (value, valueId?, valueInput?) => {
    //console.log("Valor cria string = ", value);
    //arr => [...arr] captura os dados que já estavam e os mantem no array
    setFrasesBaco((arr) => [...arr, value]);
    //console.log("criaString = ", laudoPrin)
  };

  const removeItemString = (value) => {
    // console.log("valor remove = ", value);
    var index = frasesBaco.indexOf(value);
    //caso o valor enviado exista no array, vai remover com splice e setar array novamente
    if (index > -1) {
      frasesBaco.splice(index, 1);
      setFrasesBaco((arr) => [...arr]);
    }
    // console.log('posicao', index)
    // console.log("laudosPrin", laudoPrin)
  };

  //pega valor enviado pelo value, cria string e seta ela no laudo principal
  //setInputBaço é usado para armezenar string para remover posteriormente
  const criaValorInputBaco = (value) => {
    let dadoInputBaco2 = value.value;
    const valorInput =
      "Baço acessório com " +
      inputBacoAcessorio +
      " x " +
      dadoInputBaco2 +
      "mm ";
    setFrasesBaco((arr) => [...arr, valorInput]);
    setInputBaco(valorInput);
  };

  //captura posição usando inputBaco, remove e seta laudo Principal novamente
  const removeStringBaco = () => {
    const index = frasesBaco.indexOf(inputBaco);
    if (index > -1) {
      frasesBaco.splice(index, 1);
      setFrasesBaco((arr) => [...arr]);
    }
  };

  const pegaValorInputCalcificacao = (value) => {
    let dadoInputCalcificacao = value.value;
    const valorInput = "Calcificações com " + dadoInputCalcificacao + "mm ";
    setFrasesBaco((arr) => [...arr, valorInput]);
    setInputCalcificacoes(valorInput);
  };

  const removeStringCalcificacoes = () => {
    const index = frasesBaco.indexOf(inputCalcificacoes);
    if (index > -1) {
      frasesBaco.splice(index, 1);
      setFrasesBaco((arr) => [...arr]);
    }
  };

  const pegaValorInputCisto = (value) => {
    let dadoInputCisto = value.value;
    const valorInput = "Cisto com " + dadoInputCisto + "mm ";
    setFrasesBaco((arr) => [...arr, valorInput]);
    setInputCisto(valorInput);
  };

  const removeStringCisto = () => {
    const index = frasesBaco.indexOf(inputCisto);
    if (index > -1) {
      frasesBaco.splice(index, 1);
      setFrasesBaco((arr) => [...arr]);
    }
  };

  //caso algum item esteja selecionado, normal fica bloqueado
  const DeterminaCondicaoCheckNormal = () => {
    if (
      aumentadoComEcotextura.checked === true ||
      naoVisibilizado.checked === true ||
      bacoAcessorio.checked === true ||
      calcificacoes.checked === true ||
      cisto.checked === true
    ) {
      setCheckvalueNormal({
        normal: true,
      });
    } else {
      setCheckvalueNormal({
        normal: false,
      });
    }
  };

  const TrocaCorBorda = (value) => {
    value.id === "aumentadoComEcotextura" &&
    aumentadoComEcotextura.checked === true
      ? setCorBordaAumentadoEcotextura("#0000FF")
      : setCorBordaAumentadoEcotextura("#E0E0E0");

    value.id === "naoVisibilizado" && naoVisibilizado.checked === true
      ? setCorBordaNaoVisibilizado("#0000FF")
      : setCorBordaNaoVisibilizado("#E0E0E0");

    value.id === "bacoAcessorio" && bacoAcessorio.checked === true
      ? setCorBordaBacoAcessorio("#0000FF")
      : setCorBordaBacoAcessorio("#E0E0E0");

    value.id === "calcificacoes" && calcificacoes.checked === true
      ? setCorBordaCalcificacoes("#0000FF")
      : setCorBordaCalcificacoes("#E0E0E0");

    value.id === "cisto" && cisto.checked === true
      ? setCorBordaCisto("#0000FF")
      : setCorBordaCisto("#E0E0E0");
  };

  useEffect(() => {
    if (laudoNormal === true) {
      setDefaultValueNormal({ defaultValueNormal: true });
      criarString("paciente está normal ");
      setCheckvalueAumentadoEcotextura({
        aumentadoComEcotextura: true,
        SelectAumentadoComEcotextura: true,
      });
      setCheckvalueNaoVisibilizado({
        naoVisibilizado: true,
        SelectNaoVisibilizado: true,
      });
      setCheckvalueBacoAcessorio({
        bacoAcessorio: true,
        InputBacoAcessorio: true,
      });
      setCheckvalueCalcificacoes({
        calcificacoes: true,
        InputCalcificacoes: true,
      });
      setCheckvalueCisto({
        cisto: true,
        InputCisto: true,
      });
    } else {
      setDefaultValueNormal({ defaultValueNormal: false });
      //   removeNormal()
      setCheckvalueAumentadoEcotextura({
        aumentadoComEcotextura: false,
        SelectAumentadoComEcotextura: true,
      });
      setCheckvalueNaoVisibilizado({
        naoVisibilizado: false,
        SelectNaoVisibilizado: true,
      });
      setCheckvalueBacoAcessorio({
        bacoAcessorio: false,
        InputBacoAcessorio: true,
      });
      setCheckvalueCalcificacoes({
        calcificacoes: false,
        InputCalcificacoes: true,
      });
      setCheckvalueCisto({
        cisto: false,
        InputCisto: true,
      });
    }
  }, [laudoNormal]);

  const verificaChecked = (value) => {
    switch (value.id) {
      case "normal":
        if (value.checked === true) {
          setDefaultValueNormal({ defaultValueNormal: true });
          criarString(value.value);
          setCheckvalueAumentadoEcotextura({
            aumentadoComEcotextura: true,
            SelectAumentadoComEcotextura: true,
          });
          setCheckvalueNaoVisibilizado({
            naoVisibilizado: true,
            SelectNaoVisibilizado: true,
          });
          setCheckvalueBacoAcessorio({
            bacoAcessorio: true,
            InputBacoAcessorio: true,
          });
          setCheckvalueCalcificacoes({
            calcificacoes: true,
            InputCalcificacoes: true,
          });
          setCheckvalueCisto({
            cisto: true,
            InputCisto: true,
          });
        } else {
          setDefaultValueNormal({ defaultValueNormal: false });
          removeItemString(value.value);
          setCheckvalueAumentadoEcotextura({
            aumentadoComEcotextura: false,
            SelectAumentadoComEcotextura: true,
          });
          setCheckvalueNaoVisibilizado({
            naoVisibilizado: false,
            SelectNaoVisibilizado: true,
          });
          setCheckvalueBacoAcessorio({
            bacoAcessorio: false,
            InputBacoAcessorio: true,
          });
          setCheckvalueCalcificacoes({
            calcificacoes: false,
            InputCalcificacoes: true,
          });
          setCheckvalueCisto({
            cisto: false,
            InputCisto: true,
          });
        }
        break;
      case "aumentadoComEcotextura":
        if (value.checked === true) {
          setCheckvalueAumentadoEcotextura({
            aumentadoComEcotextura: false,
            SelectAumentadoComEcotextura: false,
          });
          console.log(frasesBaco);
          TrocaCorBorda(value);
        } else {
          setCheckvalueAumentadoEcotextura({
            aumentadoComEcotextura: false,
            SelectAumentadoComEcotextura: true,
          });
          console.log(frasesBaco);

          TrocaCorBorda(value);

          removeItemString("Aumentado com ecotextura heterogênea ");
          removeItemString("Aumentado com ecotextura homogênea ");

          SelectAumentadoComEcotextura.value = "";
        }
        DeterminaCondicaoCheckNormal();
        break;
      case "SelectAumentadoComEcotextura":
        if (value.value === "Aumentado com ecotextura homogênea ") {
          removeItemString("Aumentado com ecotextura heterogênea ");
          criarString(value.value);
        } else {
          removeItemString("Aumentado com ecotextura homogênea ");
          criarString(value.value);
        }
        break;
      case "naoVisibilizado":
        if (value.checked === true) {
          setCheckvalueNaoVisibilizado({
            naoVisibilizado: false,
            SelectNaoVisibilizado: false,
          });
          console.log(frasesBaco);
          TrocaCorBorda(value);
        } else {
          setCheckvalueNaoVisibilizado({
            naoVisibilizado: false,
            SelectNaoVisibilizado: true,
          });
          console.log(frasesBaco);
          TrocaCorBorda(value);

          removeItemString("Não visibilizado com interposição gasosa ");
          removeItemString("Não visibilizado com Ausênsia cirurgica ");
          SelectNaoVisibilizado.value = "";
        }
        DeterminaCondicaoCheckNormal();
        break;
      case "SelectNaoVisibilizado":
        console.log(frasesBaco);
        if (value.value === "Não visibilizado com interposição gasosa ") {
          removeItemString("Não visibilizado com Ausênsia cirurgica ");
          criarString(value.value);
        } else {
          removeItemString("Não visibilizado com interposição gasosa ");
          criarString(value.value);
        }

        break;
      case "bacoAcessorio":
        if (value.checked === true) {
          setCheckvalueBacoAcessorio({
            bacoAcessorio: false,
            InputBacoAcessorio: false,
          });

          TrocaCorBorda(value);
        } else {
          setCheckvalueBacoAcessorio({
            bacoAcessorio: false,
            InputBacoAcessorio: true,
          });
          TrocaCorBorda(value);
          removeStringBaco();

          Input1BacoAcessorio.value = "";
          Input2BacoAcessorio.value = "";
        }
        DeterminaCondicaoCheckNormal();
        break;
      case "Input1BacoAcessorio":
        setinputBacoAcessorio(value.value);
        break;
      case "Input2BacoAcessorio":
        criaValorInputBaco(value);
        break;
      case "calcificacoes":
        if (value.checked === true) {
          setCheckvalueCalcificacoes({
            calcificacoes: false,
            InputCalcificacoes: false,
          });
          TrocaCorBorda(value);
        } else {
          setCheckvalueCalcificacoes({
            calcificacoes: false,
            InputCalcificacoes: true,
          });
          TrocaCorBorda(value);
          removeStringCalcificacoes();
          InputCalcificacoes.value = "";
        }
        DeterminaCondicaoCheckNormal();
        break;
      case "InputCalcificacoes":
        pegaValorInputCalcificacao(value);
        break;
      case "cisto":
        if (value.checked === true) {
          setCheckvalueCisto({
            cisto: false,
            InputCisto: false,
          });

          TrocaCorBorda(value);
        } else {
          setCheckvalueCisto({
            cisto: false,
            InputCisto: true,
          });
          TrocaCorBorda(value);

          removeStringCisto();
          InputCisto.value = "";
        }
        DeterminaCondicaoCheckNormal();
        break;
      case "InputCisto":
        pegaValorInputCisto(value);
        break;
      default:
        console.log("esta aqui", value.id);
        console.log("nao achou o id");
        break;
    }
  };

  const subExame = "Baço";
  const titulo_exame = "Abdomen Superior";

  useEffect(() => {
    if (Object.keys(frasesBaco).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesBaco
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesBaco
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
      <Box borderBottom="1px">
        <TituloNomeExame titulo="Baço" />

        <Box mb="20px" gap="30px" display="flex" flexWrap="wrap" mt="20px">
          <Box w="100px">
            <Checkbox
              isChecked={defaultValueNormal.defaultValueNormal}
              disabled={checkValueNormal.normal}
              id="normal"
              value="paciente está normal "
              onChange={(e) => {
                verificaChecked(e.target);
              }}
            >
              Normal
            </Checkbox>
          </Box>

          <Box w="220px">
            <Checkbox
              disabled={checkValueAumentadoEcotextura.aumentadoComEcotextura}
              id="aumentadoComEcotextura"
              onChange={(e) => {
                verificaChecked(e.target);
              }}
            >
              Aumentado com ecotextura
            </Checkbox>
            <Select
              borderColor={corBordaAumentadoEcotextura}
              disabled={
                checkValueAumentadoEcotextura.SelectAumentadoComEcotextura
              }
              id="SelectAumentadoComEcotextura"
              onChange={(e) => {
                verificaChecked(e.target);
              }}
            >
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="Aumentado com ecotextura homogênea ">
                Homogênea
              </option>
              <option value="Aumentado com ecotextura heterogênea ">
                Heterogênea
              </option>
            </Select>
          </Box>

          <Box w="150px">
            <Checkbox
              disabled={checkValueNaoVisibilizado.naoVisibilizado}
              id="naoVisibilizado"
              onChange={(e) => {
                verificaChecked(e.target);
              }}
            >
              Não visibilizado
            </Checkbox>
            <Select
              disabled={checkValueNaoVisibilizado.SelectNaoVisibilizado}
              borderColor={corBordaNaoVisibilizado}
              id="SelectNaoVisibilizado"
              onChange={(e) => {
                verificaChecked(e.target);
              }}
            >
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="Não visibilizado com Ausênsia cirurgica ">
                ausência cirúrgica
              </option>
              <option value="Não visibilizado com interposição gasosa ">
                interposição gasosa
              </option>
            </Select>
          </Box>

          <Box w="140px">
            <Checkbox
              disabled={checkValueBacoAcessorio.bacoAcessorio}
              id="bacoAcessorio"
              onChange={(e) => {
                verificaChecked(e.target);
              }}
            >
              Baço Acessório
            </Checkbox>
            <Input
              w="50px"
              disabled={checkValueBacoAcessorio.InputBacoAcessorio}
              id="Input1BacoAcessorio"
              borderColor={corBordaBacoAcessorio}
              onBlur={(e) => {
                verificaChecked(e.target);
              }}
              placeholder="0"
            />
            x
            <Input
              w="50px"
              disabled={checkValueBacoAcessorio.InputBacoAcessorio}
              id="Input2BacoAcessorio"
              borderColor={corBordaBacoAcessorio}
              onBlur={(e) => {
                verificaChecked(e.target);
              }}
              placeholder="0"
            />
            mm
          </Box>

          <Box w="100px">
            <Checkbox
              disabled={checkValueCalcificacoes.calcificacoes}
              id="calcificacoes"
              onChange={(e) => {
                verificaChecked(e.target);
              }}
            >
              Calcificações
            </Checkbox>
            <Input
              disabled={checkValueCalcificacoes.InputCalcificacoes}
              id="InputCalcificacoes"
              borderColor={corBordaCalcificacoes}
              onBlur={(e) => {
                verificaChecked(e.target);
              }}
              placeholder="mm"
            />
          </Box>
        </Box>
      </Box>

      <Box w="100px" mt="20px">
        <Checkbox
          disabled={checkValueCisto.cisto}
          id="cisto"
          onChange={(e) => {
            verificaChecked(e.target);
          }}
        >
          Cisto
        </Checkbox>
        <Input
          disabled={checkValueCisto.InputCisto}
          id="InputCisto"
          borderColor={corBordaCisto}
          onBlur={(e) => {
            verificaChecked(e.target);
          }}
          placeholder="mm"
        />
      </Box>
    </Box>
  );
}

export default Baco;
