import { Box, Checkbox, Input, Select } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { NormalContext } from "../../../../context/NormalContext";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function VesiculaBiliar() {
  const altura = "100%";
  const largura = "66%";

  let calculoUnico = document.querySelector(
    "#CalculoUnico"
  ) as HTMLInputElement;
  let multiplosCalculos = document.querySelector(
    "#MultiplosCalculos"
  ) as HTMLInputElement;
  let polipoUnico = document.querySelector("#PolipoUnico") as HTMLInputElement;
  let multiplosPolipos = document.querySelector(
    "#MultiplosPolipos"
  ) as HTMLInputElement;
  let colesterolose = document.querySelector(
    "#colesterolose"
  ) as HTMLInputElement;
  let naoVisibilizado = document.querySelector(
    "#NaoVisibilizado"
  ) as HTMLInputElement;
  let emPorcelana = document.querySelector("#EmPorcelana") as HTMLInputElement;
  let billeEspessa = document.querySelector(
    "#BilleEspessa"
  ) as HTMLInputElement;
  let vazia = document.querySelector("#Vazia") as HTMLInputElement;

  let InputMultiplosCalculos = document.querySelector(
    "#InputMultiplosCalculos"
  ) as HTMLInputElement;
  let InputCalculoUnico = document.querySelector(
    "#InputCalculoUnico"
  ) as HTMLInputElement;

  let InputPopiloUnico = document.querySelector(
    "#InputPopiloUnico"
  ) as HTMLInputElement;
  let InputMultiplosPolipos = document.querySelector(
    "#InputMultiplosPolipos"
  ) as HTMLInputElement;

  let SelectNaoVisibilizado = document.querySelector(
    "#SelectNaoVisibilizado"
  ) as HTMLInputElement;

  const [defaultValueNormal, setDefaultValueNormal] = useState({
    defaultValueNormal: false,
  });

  const { laudoNormal } = useContext(NormalContext);
  const [inputCalculoUnico, setInputCalculoUnico] = useState("");

  const [inputPoliposUnico, setInputPoliposUnico] = useState("");

  const [frasesVesicula, setFrasesVesicula] = useState<any>([]);

  const [checkValueNormal, setCheckvalueNormal] = useState({
    normal: false,
  });
  const [checkValueCalculoUnico, setCheckvalueCalculoUnico] = useState({
    CalculoUnico: false,
    InputCalculoUnico: true,
  });
  const [checkValueMultiplosCalculos, setCheckvalueMultiplosCalculos] =
    useState({
      MultiplosCalculos: false,
      InputMultiplosCalculos: true,
    });
  const [checkValuePolipoUnico, setCheckvaluePolipoUnico] = useState({
    PolipoUnico: false,
    InputCalculoUnico: true,
  });
  const [checkValueMultiplosPolipos, setCheckvalueMultiplosPolipos] = useState({
    MultiplosPolipos: false,
    InputMultiplosPolipos: true,
  });
  const [checkValueColesterolose, setCheckvalueColesterolose] = useState({
    colesterolose: false,
  });
  const [checkValueNaoVisibilizado, setCheckvalueNaoVisibilizado] = useState({
    NaoVisibilizado: false,
    SelectNaoVisibilizado: true,
  });
  const [checkValueEmPorcelana, setCheckvalueEmPorcelana] = useState({
    EmPorcelana: false,
  });
  const [checkValueBileEspessa, setCheckvalueBileEspessa] = useState({
    BilleEspessa: false,
  });
  const [checkValueVazia, setCheckvalueVazia] = useState({
    Vazia: false,
  });

  const criarString = (value, valueId?, valueInput?) => {
    //console.log("Valor cria string = ", value);
    //arr => [...arr] captura os dados que já estavam e os mantem no array
    setFrasesVesicula((arr) => [...arr, value]);
    //console.log("criaString = ", laudoPrin)
  };

  const removeItemString = (value) => {
    // console.log("valor remove = ", value);
    var index = frasesVesicula.indexOf(value);
    //caso o valor enviado exista no array, vai remover com splice e setar array novamente
    if (index > -1) {
      frasesVesicula.splice(index, 1);
      setFrasesVesicula((arr) => [...arr]);
    }
    // console.log('posicao', index)
    // console.log("laudosPrin", laudoPrin)
  };

  const pegaValorInputCalculo = (value) => {
    let dadoInputCalculo = value.value;
    if (value.id === "InputCalculoUnico") {
      const valorInput = "Cálculo único com " + dadoInputCalculo + "mm ";
      setFrasesVesicula((arr) => [...arr, valorInput]);
      setInputCalculoUnico(valorInput);
    } else if (value.id === "InputMultiplosCalculos") {
      const valorInput = "Múltiplos cálculos com " + dadoInputCalculo + "mm ";
      setFrasesVesicula((arr) => [...arr, valorInput]);
      setInputCalculoUnico(valorInput);
    }
  };
  const removeStringCalculo = () => {
    const index = frasesVesicula.indexOf(inputCalculoUnico);
    if (index > -1) {
      frasesVesicula.splice(index, 1);
      setFrasesVesicula((arr) => [...arr]);
    }
    InputCalculoUnico.value = "";
    InputMultiplosCalculos.value = "";
  };

  const pegaValorInputPopilo = (value) => {
    let dadoInputCalculo = value.value;
    if (value.id === "InputPopiloUnico") {
      const valorInput = "Pópilo único com " + dadoInputCalculo + "mm ";
      setFrasesVesicula((arr) => [...arr, valorInput]);
      setInputPoliposUnico(valorInput);
    } else if (value.id === "InputMultiplosPolipos") {
      const valorInput = "Múltiplos Pópilos com " + dadoInputCalculo + "mm ";
      setFrasesVesicula((arr) => [...arr, valorInput]);
      setInputPoliposUnico(valorInput);
    }
  };
  const removeStringPopilo = () => {
    const index = frasesVesicula.indexOf(inputPoliposUnico);
    if (index > -1) {
      frasesVesicula.splice(index, 1);
      setFrasesVesicula((arr) => [...arr]);
    }
    InputPopiloUnico.value = "";
    InputMultiplosPolipos.value = "";
  };
  const DeterminaCondicaoCheckNormal = () => {
    if (
      calculoUnico.checked === true ||
      multiplosCalculos.checked === true ||
      polipoUnico.checked === true ||
      naoVisibilizado.checked === true ||
      emPorcelana.checked === true ||
      billeEspessa.checked === true ||
      vazia.checked === true ||
      multiplosPolipos.checked === true ||
      colesterolose.checked === true
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

  useEffect(() => {
    if (laudoNormal === true) {
      setDefaultValueNormal({ defaultValueNormal: true });
      criarString("Vesicula biliar Normal");
      setCheckvalueCalculoUnico({
        CalculoUnico: true,
        InputCalculoUnico: true,
      });
      setCheckvalueMultiplosCalculos({
        MultiplosCalculos: true,
        InputMultiplosCalculos: true,
      });
      setCheckvaluePolipoUnico({
        PolipoUnico: true,
        InputCalculoUnico: true,
      });
      setCheckvalueMultiplosPolipos({
        MultiplosPolipos: true,
        InputMultiplosPolipos: true,
      });
      setCheckvalueColesterolose({
        colesterolose: true,
      });
      setCheckvalueNaoVisibilizado({
        NaoVisibilizado: true,
        SelectNaoVisibilizado: true,
      });
      setCheckvalueEmPorcelana({
        EmPorcelana: true,
      });
      setCheckvalueBileEspessa({
        BilleEspessa: true,
      });
      setCheckvalueVazia({
        Vazia: true,
      });
    } else {
      setDefaultValueNormal({ defaultValueNormal: false });
      setCheckvalueCalculoUnico({
        CalculoUnico: false,
        InputCalculoUnico: true,
      });
      setCheckvalueMultiplosCalculos({
        MultiplosCalculos: false,
        InputMultiplosCalculos: true,
      });
      setCheckvaluePolipoUnico({
        PolipoUnico: false,
        InputCalculoUnico: true,
      });
      setCheckvalueMultiplosPolipos({
        MultiplosPolipos: false,
        InputMultiplosPolipos: true,
      });
      setCheckvalueColesterolose({
        colesterolose: false,
      });
      setCheckvalueNaoVisibilizado({
        NaoVisibilizado: false,
        SelectNaoVisibilizado: true,
      });
      setCheckvalueEmPorcelana({
        EmPorcelana: false,
      });
      setCheckvalueBileEspessa({
        BilleEspessa: false,
      });
      setCheckvalueVazia({
        Vazia: false,
      });
    }
  }, [laudoNormal]);

  const verificaChecked = (value) => {
    switch (value.id) {
      case "normal":
        if (value.checked === true) {
          setDefaultValueNormal({ defaultValueNormal: true });
          criarString(value.value);
          setCheckvalueCalculoUnico({
            CalculoUnico: true,
            InputCalculoUnico: true,
          });
          setCheckvalueMultiplosCalculos({
            MultiplosCalculos: true,
            InputMultiplosCalculos: true,
          });
          setCheckvaluePolipoUnico({
            PolipoUnico: true,
            InputCalculoUnico: true,
          });
          setCheckvalueMultiplosPolipos({
            MultiplosPolipos: true,
            InputMultiplosPolipos: true,
          });
          setCheckvalueColesterolose({
            colesterolose: true,
          });
          setCheckvalueNaoVisibilizado({
            NaoVisibilizado: true,
            SelectNaoVisibilizado: true,
          });
          setCheckvalueEmPorcelana({
            EmPorcelana: true,
          });
          setCheckvalueBileEspessa({
            BilleEspessa: true,
          });
          setCheckvalueVazia({
            Vazia: true,
          });
        } else {
          setDefaultValueNormal({ defaultValueNormal: false });
          setCheckvalueCalculoUnico({
            CalculoUnico: false,
            InputCalculoUnico: true,
          });
          setCheckvalueMultiplosCalculos({
            MultiplosCalculos: false,
            InputMultiplosCalculos: true,
          });
          setCheckvaluePolipoUnico({
            PolipoUnico: false,
            InputCalculoUnico: true,
          });
          setCheckvalueMultiplosPolipos({
            MultiplosPolipos: false,
            InputMultiplosPolipos: true,
          });
          setCheckvalueColesterolose({
            colesterolose: false,
          });
          setCheckvalueNaoVisibilizado({
            NaoVisibilizado: false,
            SelectNaoVisibilizado: true,
          });
          setCheckvalueEmPorcelana({
            EmPorcelana: false,
          });
          setCheckvalueBileEspessa({
            BilleEspessa: false,
          });
          setCheckvalueVazia({
            Vazia: false,
          });
          removeItemString(value.value);
        }
        break;
      case "CalculoUnico":
        if (value.checked === true) {
          setCheckvalueMultiplosCalculos({
            MultiplosCalculos: true,
            InputMultiplosCalculos: true,
          });
          setCheckvalueCalculoUnico({
            CalculoUnico: false,
            InputCalculoUnico: false,
          });
        } else {
          setCheckvalueCalculoUnico({
            CalculoUnico: false,
            InputCalculoUnico: true,
          });
          setCheckvalueMultiplosCalculos({
            MultiplosCalculos: false,
            InputMultiplosCalculos: true,
          });
          removeStringCalculo();
        }
        DeterminaCondicaoCheckNormal();
        break;
      case "InputCalculoUnico":
        pegaValorInputCalculo(value);
        break;
      case "MultiplosCalculos":
        if (value.checked === true) {
          setCheckvalueMultiplosCalculos({
            MultiplosCalculos: false,
            InputMultiplosCalculos: false,
          });
          setCheckvalueCalculoUnico({
            CalculoUnico: true,
            InputCalculoUnico: true,
          });
        } else {
          setCheckvalueMultiplosCalculos({
            MultiplosCalculos: false,
            InputMultiplosCalculos: true,
          });
          setCheckvalueCalculoUnico({
            CalculoUnico: false,
            InputCalculoUnico: true,
          });
          removeStringCalculo();
        }
        DeterminaCondicaoCheckNormal();
        break;
      case "InputMultiplosCalculos":
        pegaValorInputCalculo(value);
        break;
      case "PolipoUnico":
        if (value.checked === true) {
          setCheckvaluePolipoUnico({
            PolipoUnico: false,
            InputCalculoUnico: false,
          });
          setCheckvalueMultiplosPolipos({
            MultiplosPolipos: true,
            InputMultiplosPolipos: true,
          });
        } else {
          setCheckvaluePolipoUnico({
            PolipoUnico: false,
            InputCalculoUnico: true,
          });
          setCheckvalueMultiplosPolipos({
            MultiplosPolipos: false,
            InputMultiplosPolipos: true,
          });
          removeStringPopilo();
        }
        DeterminaCondicaoCheckNormal();
        break;
      case "InputPopiloUnico":
        pegaValorInputPopilo(value);
        break;
      case "MultiplosPolipos":
        if (value.checked === true) {
          setCheckvalueMultiplosPolipos({
            MultiplosPolipos: false,
            InputMultiplosPolipos: false,
          });
          setCheckvaluePolipoUnico({
            PolipoUnico: true,
            InputCalculoUnico: true,
          });
        } else {
          setCheckvalueMultiplosPolipos({
            MultiplosPolipos: false,
            InputMultiplosPolipos: true,
          });
          setCheckvaluePolipoUnico({
            PolipoUnico: false,
            InputCalculoUnico: true,
          });
          removeStringPopilo();
        }
        DeterminaCondicaoCheckNormal();
        break;
      case "InputMultiplosPolipos":
        pegaValorInputPopilo(value);
        break;
      case "colesterolose":
        if (value.checked === true) {
          criarString(value.value);
        } else {
          removeItemString(value.value);
        }
        DeterminaCondicaoCheckNormal();
        break;
      case "NaoVisibilizado":
        if (value.checked === true) {
          setCheckvalueNaoVisibilizado({
            NaoVisibilizado: false,
            SelectNaoVisibilizado: false,
          });
        } else {
          setCheckvalueNaoVisibilizado({
            NaoVisibilizado: false,
            SelectNaoVisibilizado: true,
          });
          removeItemString("Ausencia Cirurgica");
          removeItemString("Interposição Gasosa");
          SelectNaoVisibilizado.value = " ";
        }
        DeterminaCondicaoCheckNormal();
        break;
      case "SelectNaoVisibilizado":
        if (value.value === "Ausencia Cirurgica") {
          removeItemString("Interposição Gasosa");
          criarString(value.value);
        } else {
          removeItemString("Ausencia Cirurgica");
          criarString(value.value);
        }
        break;
      case "EmPorcelana":
        if (value.checked === true) {
          criarString(value.value);
        } else {
          removeItemString(value.value);
        }
        DeterminaCondicaoCheckNormal();
        break;
      case "BilleEspessa":
        if (value.checked === true) {
          criarString(value.value);
        } else {
          removeItemString(value.value);
        }
        DeterminaCondicaoCheckNormal();
        break;
      case "Vazia":
        if (value.checked === true) {
          criarString(value.value);
        } else {
          removeItemString(value.value);
        }
        DeterminaCondicaoCheckNormal();
        break;
    }
  };

  const subExame = "Vesícula Biliar";
  const titulo_exame = "Abdomen Superior";

  useEffect(() => {
    if (Object.keys(frasesVesicula).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesVesicula
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesVesicula
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
      <Box borderBottom="1px">
        <TituloNomeExame titulo="Vesícula Biliar" />

        <Box gap="25px" display="flex" flexWrap="wrap" mt="20px">
          <Box>
            <Checkbox
              isChecked={defaultValueNormal.defaultValueNormal}
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={checkValueNormal.normal}
              value="Vesicula biliar Normal"
              id="normal"
            >
              Normal
            </Checkbox>
          </Box>

          <Box w="150px">
            <Checkbox
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={checkValueCalculoUnico.CalculoUnico}
              id="CalculoUnico"
            >
              Cálculo Único
            </Checkbox>
            <Input
              onBlur={(e) => {
                verificaChecked(e.target);
              }}
              disabled={checkValueCalculoUnico.InputCalculoUnico}
              id="InputCalculoUnico"
              placeholder="mm"
            />
          </Box>

          <Box w="261px">
            <Checkbox
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              id="MultiplosCalculos"
              disabled={checkValueMultiplosCalculos.MultiplosCalculos}
            >
              Múltiplos cálculos, o maior mede:
            </Checkbox>
            <Input
              onBlur={(e) => {
                verificaChecked(e.target);
              }}
              id="InputMultiplosCalculos"
              disabled={checkValueMultiplosCalculos.InputMultiplosCalculos}
              placeholder="mm"
            />
          </Box>

          <Box w="120px">
            <Checkbox
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              value="Colesterolose"
              id="colesterolose"
              disabled={checkValueColesterolose.colesterolose}
            >
              Colesterolose
            </Checkbox>
          </Box>
          <Box>
            <Checkbox
              id="Vazia"
              value="Vazia"
              onChange={(e) => {
                verificaChecked(e.target);
              }}
              disabled={checkValueVazia.Vazia}
            >
              Vazia
            </Checkbox>
          </Box>
        </Box>
      </Box>

      <Box gap="15px" display="flex" flexWrap="wrap" mt="20px">
        <Box w="256px">
          <Checkbox
            onChange={(e) => {
              verificaChecked(e.target);
            }}
            id="MultiplosPolipos"
            disabled={checkValueMultiplosPolipos.MultiplosPolipos}
          >
            Múltiplos Pólipos, o maior mede:
          </Checkbox>
          <Input
            onBlur={(e) => {
              verificaChecked(e.target);
            }}
            id="InputMultiplosPolipos"
            disabled={checkValueMultiplosPolipos.InputMultiplosPolipos}
            w="150px"
            placeholder="mm"
          />
        </Box>
        <Box w="150px">
          <Checkbox
            onChange={(e) => {
              verificaChecked(e.target);
            }}
            id="PolipoUnico"
            disabled={checkValuePolipoUnico.PolipoUnico}
          >
            Pólipo único
          </Checkbox>
          <Input
            onBlur={(e) => {
              verificaChecked(e.target);
            }}
            id="InputPopiloUnico"
            disabled={checkValuePolipoUnico.InputCalculoUnico}
            mb="10px"
            placeholder="mm"
          />
        </Box>
        <Box w="150px">
          <Checkbox
            onChange={(e) => {
              verificaChecked(e.target);
            }}
            id="NaoVisibilizado"
            disabled={checkValueNaoVisibilizado.NaoVisibilizado}
          >
            Não visibilizado
          </Checkbox>
          <Select
            onChange={(e) => {
              verificaChecked(e.target);
            }}
            disabled={checkValueNaoVisibilizado.SelectNaoVisibilizado}
            id="SelectNaoVisibilizado"
            mb="10px"
            w="150px"
          >
            <option value="" disabled selected>
              Selecione
            </option>
            <option value="Ausencia Cirurgica">Ausência cirúrgica</option>
            <option value="Interposição Gasosa">Interposição gasosa</option>
          </Select>
        </Box>
        <Box w="100px">
          <Checkbox
            id="EmPorcelana"
            value="Em Porcelana"
            onChange={(e) => {
              verificaChecked(e.target);
            }}
            disabled={checkValueEmPorcelana.EmPorcelana}
          >
            Em Porcelana
          </Checkbox>
        </Box>
        <Box w="100px">
          <Checkbox
            id="BilleEspessa"
            value="Bille Espessa"
            onChange={(e) => {
              verificaChecked(e.target);
            }}
            disabled={checkValueBileEspessa.BilleEspessa}
          >
            Bile Espessa
          </Checkbox>
        </Box>
      </Box>
    </Box>
  );
}

export default VesiculaBiliar;
