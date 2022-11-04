import {
  Box,
  Checkbox,
  HStack,
  Input,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../context/LuadosContext";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Utero() {
  const altura = "100%";
  const largura = "66%";

  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);

  //States Medidas Utero - Inicio
  const [medidaUtero1, setmedidaUtero1] = useState("");
  const [medidaUtero2, setmedidaUtero2] = useState("");
  const [medidaUtero3, setmedidaUtero3] = useState("");
  //States Medidas Utero - Fim

  //States Medida Polipo - Inicio
  const [medidaPolipo1, setmedidaPolipo1] = useState("");
  const [medidaPolipo2, setmedidaPolipo2] = useState("");

  const [polipoCheckBox, setPolipoCheckBox] = useState(false);
  const [disablePolipoInput, setdisablePolipoInput] = useState(true);

  //Handles para setar os valores do input no state
  const handleChangeMedidaPolipo1 = (event) =>
    setmedidaPolipo1(event.target.value);

  const handleChangeMedidaPolipo2 = (event) => {
    setmedidaPolipo2(event.target.value);
  };
  //States Medida Polipo - Fim

  //States Distancia DIU- Inicio
  const [DIUDistanciaCheckBox, setDIUDistanciaCheckBox] = useState(false);
  const [disableDIUInput, setDisableDIUInput] = useState(true);
  const [distanciaDIUInput, setDistanciaDIUInput] = useState("");

  const handleChangeDistanciaDIU = (event) => {
    setDistanciaDIUInput(event.target.value);
  };
  //States Distancia DIU- Fim

  //States Cisto de Naboth - Inicio
  const [cistoNabothInput, setCistoNabothInput] = useState("");
  const [disableCistoNabothInput, setdisableCistoNabothInput] = useState(true);
  const [cistoNabothCheckBox, setCistoNabothCheckBox] = useState(false);

  const handleChangeCistoNaboth = (event) => {
    setCistoNabothInput(event.target.value);
  };
  //States Cisto de Naboth - Fim

  //CheckBox Liquido Endometrial
  const [liquidoEndometrialCheckBox, setLiquidoEndometrialCheckBox] =
    useState(false);

  // CheckBox DIU posicionado
  const [DIUBemPosicionadoCheckBox, setDIUBemPosicionadoCheckBox] =
    useState(false);

  //Endometrio medida
  const [endometrio, setEndometrio] = useState<string | null>(null);

  //Endometrio checkbox
  const [endometrioCheckBox, setEndometrioCheckBox] = useState(true);

  //Funcoes Posicao - Inicio
  const criaStringPosicaoUtero = (value) => {
    var string = `Útero em ${value} `;
    return string;
  };

  const checkPosicaoUtero = (value) => {
    switch (value) {
      case "Anteversoflexão":
        removeItemString(criaStringPosicaoUtero("Retroversoflexão"));
        setLaudoPrin((arr) => [...arr, criaStringPosicaoUtero(value)]);
        break;

      case "Retroversoflexão": {
        removeItemString(criaStringPosicaoUtero("Anteversoflexão"));
        setLaudoPrin((arr) => [...arr, criaStringPosicaoUtero(value)]);
        break;
      }
    }
  };
  //Funcoes Posicao - Fim

  // Funcoes medidas Utero - Inicio
  const criaStringMedidasUtero = () => {
    if (medidaUtero1 != "" && medidaUtero2 != "" && medidaUtero3 != "") {
      var string = `Útero com ${medidaUtero1} x ${medidaUtero2} x ${medidaUtero3} mm `;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };
  const removeMedidas = () => {
    // console.log("valor remove = ", value);
    laudoPrin.map((e) => {
      if (e.includes("Útero com")) {
        var index = laudoPrin.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };
  // Funcoes medidas Utero - Fim

  //Funcoes medida Endometrio - Inicio
  const criaStringEndometrio = () => {
    if (endometrio != null && endometrio != "") {
      var string = `Endométrio com ${endometrio} mm `;
      removeEndometrio();
      setLaudoPrin((arr) => [...arr, string]);
    }
    setEndometrio(null);
  };
  const removeEndometrio = () => {
    // console.log("valor remove = ", value);
    laudoPrin.map((e) => {
      if (e.includes("Endométrio")) {
        var index = laudoPrin.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };
  //Funcoes medida Endometrio - Fim

  //Funcao checkBox Endometrio
  const criaStringEndometrioCheckBox = () => {
    var string = "Endométrio heterogêneo e espessado ";
    if (endometrioCheckBox) {
      setLaudoPrin((arr) => [...arr, string]);
      setEndometrioCheckBox(false);
    } else {
      removeItemString(string);
    }
  };

  //Funcoes Polipo endometrial - Inicio
  const criaStringPolipoEndometrial = (medida1, medida2) => {
    removePolipoEndometrial();
    if (medidaPolipo1 != "" && medidaPolipo2 != "") {
      var string = `Pólipo mede ${medida1} x ${medida2} mm `;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };
  const removePolipoEndometrial = () => {
    laudoPrin.map((e) => {
      if (e.includes("Pólipo")) {
        var index = laudoPrin.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };
  //Funcoes Polipo endometrial - Fim

  //Funcoes DIU Posicionado - Inicio
  const criaStringDIUBemPosicionado = () => {
    var string = "DIU bem posicionado ";
    setLaudoPrin((arr) => [...arr, string]);
  };
  
  const removeDIUPosicionado = () => {
    laudoPrin.map((e) => {
      if (e.includes("DIU bem posicionado")) {
        var index = laudoPrin.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };
  //Funcoes DIU Posicionado - Fim

  //Funcoes Distancia DIU - Inicio
  const criaStringDIUDistancia = (distancia) => {
    removeDIUDistancia();
    if (distancia != "") {
      var string = `DIU distando ${distancia} mm do fundo da cavidade uterina `;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };
  const removeDIUDistancia = () => {
    laudoPrin.map((e) => {
      if (e.includes("DIU distando")) {
        var index = laudoPrin.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };
  //Funcoes Distancia DIU - Fim

  //Funcoes Liquido Endometrial - Incio
  const criaStringLiquidoEndometrial = () => {
    var string = "Líquido na cavidade endometrial ";
    setLaudoPrin((arr) => [...arr, string]);
    return string;
  };
  const removeLiquidoEndometrial = () => {
    // console.log("valor remove = ", value);
    laudoPrin.map((e) => {
      if (e.includes("Líquido")) {
        var index = laudoPrin.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };
  //Funcoes Liquido Endometrial - Fim

  //Funcoes Cisto Naboth - Incio
  const criaStringCistoNaboth = (medida) => {
    removeCistoNaboth();
    if (medida != "") {
      var string = `Cisto de Naboth com ${medida}mm `;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };
  const removeCistoNaboth = () => {
    laudoPrin.map((e) => {
      if (e.includes("Naboth")) {
        var index = laudoPrin.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };
  //Funcoes Cisto Naboth - Fim

  //Remove string generico
  const removeItemString = (value) => {
    // console.log("valor remove = ", value);
    var index = laudoPrin.indexOf(value);
    //caso o valor enviado exista no array, vai remover com splice e setar array novamente
    if (index > -1) {
      laudoPrin.splice(index, 1);
      setLaudoPrin((arr) => [...arr]);
    }
  };

  //Observa as mudancas nos inputs de medidas e chama a funcao criarstring
  useEffect(() => {
    removeMedidas();
    criaStringMedidasUtero();
  }, [medidaUtero1, medidaUtero2, medidaUtero3]);

  //Observa o state do endometrio e quando mudar chama a funcao para criar a string
  useEffect(() => {
    criaStringEndometrio();
  }, [endometrio]);

  //Observa o state do checkBox Polipo,
  //Quando checked habilita os Input para inserir os valores
  //Quando unchecked desabilita os Input, remove a string do laudos Array e zera os states
  useEffect(() => {
    if (polipoCheckBox) {
      setdisablePolipoInput(false);
    } else {
      setdisablePolipoInput(true);
      removePolipoEndometrial();
      setmedidaPolipo1("");
      setmedidaPolipo2("");
    }
  }, [polipoCheckBox]);

  //Observa os dois states de input da medida do Polipo e chama a funcao de criar string
  useEffect(() => {
    criaStringPolipoEndometrial(medidaPolipo1, medidaPolipo2);
  }, [medidaPolipo1, medidaPolipo2]);

  //Observa o checkBox do liquido endometrial
  //Quando checked chama a funcao de criar string
  //Quando unchecked chama a funcao para remover string
  useEffect(() => {
    if (liquidoEndometrialCheckBox) {
      criaStringLiquidoEndometrial();
    } else {
      removeLiquidoEndometrial();
    }
  }, [liquidoEndometrialCheckBox]);

  //Observa o checkBox de DIU bem posicionado
  //Quando checked chama a funcao de criar string
  //Quando unchecked chama a funcao para remover string
  useEffect(() => {
    if (DIUBemPosicionadoCheckBox) {
      criaStringDIUBemPosicionado();
    } else {
      removeDIUPosicionado();
    }
  }, [DIUBemPosicionadoCheckBox]);

  //Observa o state do checkBox DIU distancia,
  //Quando checked habilita os Input para inserir os valores
  //Quando unchecked desabilita os Input, remove a string do laudos Array e zera os states
  useEffect(() => {
    if (DIUDistanciaCheckBox) {
      setDisableDIUInput(false);
    } else {
      removeDIUDistancia();
      setDisableDIUInput(true);
      setDistanciaDIUInput("");
    }
  }, [DIUDistanciaCheckBox]);

  //Observa o input distancia DIU, chama a funcao criar string
  useEffect(() => {
    criaStringDIUDistancia(distanciaDIUInput);
  }, [distanciaDIUInput]);

  //Observa o state do checkBox Cisto Naboth,
  //Quando checked habilita os Input para inserir os valores
  //Quando unchecked desabilita os Input, remove a string do laudos Array e zera os states
  useEffect(() => {
    if (cistoNabothCheckBox) {
      setdisableCistoNabothInput(false);
    } else {
      removeCistoNaboth();
      setdisableCistoNabothInput(true);
      setCistoNabothInput("");
    }
  }, [cistoNabothCheckBox]);

  //Observa o input Cisto Naboth, chama a funcao criar string
  useEffect(() => {
    criaStringCistoNaboth(cistoNabothInput);
  }, [cistoNabothInput]);

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
      <TituloNomeExame titulo="Útero" />

      <Box gap="30px" display="flex" flexWrap="wrap" mt="20px">
        <Box>
          <Text>Posição:</Text>
          <Select
            placeholder="Posição"
            onChange={(e) => {
              checkPosicaoUtero(e.target.value);
            }}
          >
            <option value="Anteversoflexão">Anteversoflexão</option>
            <option value="Retroversoflexão">Retroversoflexão</option>
          </Select>
        </Box>

        <Box w="200px">
          <Text>Medidas:</Text>
          <HStack marginTop="5px">
            <Input
              w="80px"
              h="30px"
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => setmedidaUtero1(e.target.value)}
            />
            <Text>x</Text>
            <Input
              w="80px"
              h="30px"
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => setmedidaUtero2(e.target.value)}
            />
            <Text>x</Text>
            <Input
              w="80px"
              h="30px"
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => {
                setmedidaUtero3(e.target.value);
              }}
            />
            <Text>mm</Text>
          </HStack>
        </Box>

        <Box w="200px">
          <Text>Endométrio:</Text>
          <HStack marginTop="5px">
            <Input
              w="50px"
              h="30px"
              padding="5px"
              maxLength={2}
              textAlign="center"
              onBlur={(e) => {
                setEndometrio(e.target.value);
              }}
            />
            <Text>mm</Text>
          </HStack>
        </Box>
        <Stack>
          <Checkbox
            onChange={() => {
              setEndometrioCheckBox(true);
              criaStringEndometrioCheckBox();
            }}
          >
            Endométrio heterogêneo e espessado
          </Checkbox>

          <HStack>
            <Checkbox onChange={() => setPolipoCheckBox(!polipoCheckBox)}>
              Pólipo endometrial
            </Checkbox>
            <Input
              isDisabled={disablePolipoInput}
              w="35px"
              h="30px"
              value={medidaPolipo1}
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={handleChangeMedidaPolipo1}
            />
            <Text>x</Text>
            <Input
              isDisabled={disablePolipoInput}
              w="35px"
              h="30px"
              value={medidaPolipo2}
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={handleChangeMedidaPolipo2}
            />
            <Text>mm</Text>
          </HStack>
          <Checkbox
            onChange={() =>
              setLiquidoEndometrialCheckBox(!liquidoEndometrialCheckBox)
            }
          >
            Líquido na cavidade endometrial
          </Checkbox>
          <Checkbox
            onChange={() =>
              setDIUBemPosicionadoCheckBox(!DIUBemPosicionadoCheckBox)
            }
          >
            DIU bem posicionado
          </Checkbox>

          <HStack>
            <Checkbox
              onChange={() => setDIUDistanciaCheckBox(!DIUDistanciaCheckBox)}
            >
              DIU distando
            </Checkbox>
            <Input
              isDisabled={disableDIUInput}
              value={distanciaDIUInput}
              w="35px"
              h="30px"
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={handleChangeDistanciaDIU}
            />
            <Text>mm do fundo da cavidade uterina</Text>
          </HStack>
          <HStack>
            <Checkbox
              onChange={() => setCistoNabothCheckBox(!cistoNabothCheckBox)}
            >
              Cisto de Naboth
            </Checkbox>
            <Input
              isDisabled={disableCistoNabothInput}
              value={cistoNabothInput}
              w="35px"
              h="30px"
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={handleChangeCistoNaboth}
            />
            <Text>mm</Text>
          </HStack>
        </Stack>
      </Box>
    </Box>
  );
}
export default Utero;
