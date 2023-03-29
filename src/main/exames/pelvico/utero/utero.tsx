import {
  Box,
  Checkbox,
  HStack,
  Input,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Utero({ Disable }) {
  const [frasesUtero, setFrasesUtero] = useState<any>([]);
  const [ConclusaoUtero, setConclusaoUtero] = useState<any>([]);

  const subExame = "Útero";
  const titulo_exame = "Pélvico";
  useEffect(() => {
    if (Object.keys(frasesUtero).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesUtero,
        ConclusaoUtero
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesUtero,
        ConclusaoUtero
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesUtero]);

  const altura = "100%";
  const largura = "66%";

  const [medidaUtero1, setmedidaUtero1] = useState("");
  const [medidaUtero2, setmedidaUtero2] = useState("");
  const [medidaUtero3, setmedidaUtero3] = useState("");
  const [medidaUtero4, setmedidaUtero4] = useState(0);

  const [medidaPolipo1, setmedidaPolipo1] = useState("");
  const [medidaPolipo2, setmedidaPolipo2] = useState("");

  const [polipoCheckBox, setPolipoCheckBox] = useState(false);
  const [disablePolipoInput, setdisablePolipoInput] = useState(true);

  const handleChangeMedidaPolipo1 = (event) =>
    setmedidaPolipo1(event.target.value);

  const handleChangeMedidaPolipo2 = (event) => {
    setmedidaPolipo2(event.target.value);
  };

  const [DIUDistanciaCheckBox, setDIUDistanciaCheckBox] = useState(false);
  const [disableDIUInput, setDisableDIUInput] = useState(true);
  const [distanciaDIUInput, setDistanciaDIUInput] = useState("");

  const handleChangeDistanciaDIU = (event) => {
    setDistanciaDIUInput(event.target.value);
  };

  const [cistoNabothInput, setCistoNabothInput] = useState("");
  const [disableCistoNabothInput, setdisableCistoNabothInput] = useState(true);
  const [cistoNabothCheckBox, setCistoNabothCheckBox] = useState(false);

  const handleChangeCistoNaboth = (event) => {
    setCistoNabothInput(event.target.value);
  };

  const [liquidoEndometrialCheckBox, setLiquidoEndometrialCheckBox] =
    useState(false);

  const [DIUBemPosicionadoCheckBox, setDIUBemPosicionadoCheckBox] =
    useState(false);

  const [endometrio, setEndometrio] = useState<string | null>(null);

  const [endometrioCheckBox, setEndometrioCheckBox] = useState(false);

  const [PosicaoSelect, setPosicaoSelect] = useState("");

  const CriaStringPosicao = (value) => {
    var frase = `Útero em`;
    removePosicao();
    if (value != "") {
      frase = `${frase} ${value}`;
      setFrasesUtero((arr) => [...arr, frase]);
    }
  };

  

  const removePosicao = () => {
    frasesUtero.map((e) => {
      if (e.includes("Útero em")) {
        var index = frasesUtero.indexOf(e);

        if (index > -1) {
          frasesUtero.splice(index, 1);
          setFrasesUtero((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringMedidasUtero = () => {
    if (medidaUtero1 != "" && medidaUtero2 != "" && medidaUtero3 != "" && PosicaoSelect != "") {
      var medida4 =
        (parseInt(medidaUtero1) *
          parseInt(medidaUtero2) *
          parseInt(medidaUtero3)) /
        1000;
      setmedidaUtero4(medida4);

      var string = `Útero em ${PosicaoSelect}. A forma é típicam com os limites precisos e contornos regulares, medindo ${medidaUtero1} x ${medidaUtero2} x ${medidaUtero3} mm (${medida4} cm³) `;
      setFrasesUtero((arr) => [...arr, string]);
    } else {
      setmedidaUtero4(0);
    }
  };
  const removeMedidas = () => {
    frasesUtero.map((e) => {
      if (e.includes("Útero em ")) {
        var index = frasesUtero.indexOf(e);

        if (index > -1) {
          frasesUtero.splice(index, 1);
          setFrasesUtero((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringEndometrio = () => {
    if (endometrio != null && endometrio != "") {
      var string = `Eco endometrial é regular medindo ${endometrio} mm de espessura `;
      removeEndometrio();
      setFrasesUtero((arr) => [...arr, string]);
    }
    setEndometrio(null);
  };

  const removeEndometrio = () => {
    frasesUtero.map((e) => {
      if (e.includes("`Eco endometrial ")) {
        var index = frasesUtero.indexOf(e);

        if (index > -1) {
          frasesUtero.splice(index, 1);
          setFrasesUtero((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringEndometrioCheckBox = () => {
    var string = "Endométrio heterogêneo e espessado ";
    var conclusao = "Espessamento endometrial.";
    if (endometrioCheckBox) {
      setFrasesUtero((arr) => [...arr, string]);
      setConclusaoUtero((arr) => [...arr, conclusao]);
    } else {
      removeItemString(string);
      removeItemConclusao(conclusao);
    }
  };

  useEffect(() => {
    criaStringEndometrioCheckBox();
  }, [endometrioCheckBox]);

  const criaStringPolipoEndometrial = (medida1, medida2) => {
    const conclusao = "Imagem nodular sugestiva de pólipo endometrial.";
    removePolipoEndometrial();
    removeItemConclusao(conclusao);
    if (medidaPolipo1 != "" && medidaPolipo2 != "") {
      var string = `Pólipo mede ${medida1} x ${medida2} mm `;
      setFrasesUtero((arr) => [...arr, string]);
      setConclusaoUtero((arr) => [...arr, conclusao]);
    }
  };
  const removePolipoEndometrial = () => {
    frasesUtero.map((e) => {
      if (e.includes("Pólipo")) {
        var index = frasesUtero.indexOf(e);

        if (index > -1) {
          frasesUtero.splice(index, 1);
          setFrasesUtero((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringDIUBemPosicionado = () => {
    var string = "DIU bem posicionado.";
    var conclusao = "DIU normoposicionado.";
    if (DIUBemPosicionadoCheckBox) {
      setFrasesUtero((arr) => [...arr, string]);
      setConclusaoUtero((arr) => [...arr, conclusao]);
    } else {
      removeItemConclusao(conclusao);
      removeItemString(string);
    }
  };

  const criaStringDIUDistancia = (distancia) => {
    removeDIUDistancia();
    if (distancia != "") {
      var string = `DIU distando ${distancia} mm do fundo da cavidade uterina `;
      setFrasesUtero((arr) => [...arr, string]);
    }
  };
  const removeDIUDistancia = () => {
    frasesUtero.map((e) => {
      if (e.includes("DIU distando")) {
        var index = frasesUtero.indexOf(e);

        if (index > -1) {
          frasesUtero.splice(index, 1);
          setFrasesUtero((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringLiquidoEndometrial = () => {
    var string = "Líquido na cavidade endometrial ";
    var conclusao = "Pequena quantidade de líquido na cavidade endometrial.";
    if (liquidoEndometrialCheckBox) {
      setFrasesUtero((arr) => [...arr, string]);
      setConclusaoUtero((arr) => [...arr, conclusao]);
    } else {
      removeLiquidoEndometrial();
      removeItemConclusao(conclusao);
    }
  };

  const removeLiquidoEndometrial = () => {
    frasesUtero.map((e) => {
      if (e.includes("Líquido")) {
        var index = frasesUtero.indexOf(e);

        if (index > -1) {
          frasesUtero.splice(index, 1);
          setFrasesUtero((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringCistoNaboth = (medida) => {
    let conclusao = "Cistos de Naboth";
    removeCistoNaboth();
    removeItemConclusao(conclusao);
    if (medida != "") {
      var string = `Cisto de Naboth com ${medida} mm `;
      setFrasesUtero((arr) => [...arr, string]);
      setConclusaoUtero((arr) => [...arr, conclusao]);
    }
  };
  const removeCistoNaboth = () => {
    frasesUtero.map((e) => {
      if (e.includes("Naboth")) {
        var index = frasesUtero.indexOf(e);

        if (index > -1) {
          frasesUtero.splice(index, 1);
          setFrasesUtero((arr) => [...arr]);
        }
      }
    });
  };

  const removeItemString = (value) => {
    var index = frasesUtero.indexOf(value);

    if (index > -1) {
      frasesUtero.splice(index, 1);
      setFrasesUtero((arr) => [...arr]);
    }
  };
  const removeItemConclusao = (value) => {
    var index = ConclusaoUtero.indexOf(value);

    if (index > -1) {
      ConclusaoUtero.splice(index, 1);
      setConclusaoUtero((arr) => [...arr]);
      new Format_Laudo(titulo_exame).Remove_Conclusao(value);
    }
  };

  useEffect(() => {
    removeMedidas();
    criaStringMedidasUtero();
  }, [medidaUtero1, medidaUtero2, medidaUtero3,PosicaoSelect]);

  useEffect(() => {
    criaStringEndometrio();
  }, [endometrio]);

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

  useEffect(() => {
    criaStringPolipoEndometrial(medidaPolipo1, medidaPolipo2);
  }, [medidaPolipo1, medidaPolipo2]);

  useEffect(() => {
    criaStringLiquidoEndometrial();
  }, [liquidoEndometrialCheckBox]);

  useEffect(() => {
    criaStringDIUBemPosicionado();
  }, [DIUBemPosicionadoCheckBox]);

  useEffect(() => {
    if (DIUDistanciaCheckBox) {
      console.log(ConclusaoUtero);
      setDisableDIUInput(false);
    } else {
      removeDIUDistancia();
      setDisableDIUInput(true);
      setDistanciaDIUInput("");
    }
  }, [DIUDistanciaCheckBox]);

  useEffect(() => {
    criaStringDIUDistancia(distanciaDIUInput);
  }, [distanciaDIUInput]);

  useEffect(() => {
    if (cistoNabothCheckBox) {
      setdisableCistoNabothInput(false);
    } else {
      removeCistoNaboth();
      setdisableCistoNabothInput(true);
      setCistoNabothInput("");
    }
  }, [cistoNabothCheckBox]);

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
            onChange={(e) => {
              setPosicaoSelect(e.target.value);
            }}
          >
            <option selected disabled value="">
              Selecione
            </option>
            <option value="">Não citar</option>
            <option value="Anteversoflexão">Anteversoflexão</option>
            <option value="Retroversoflexão">Retroversoflexão</option>
            <option value="Médio versão">Médio versão</option>
          </Select>
        </Box>

        <Box w="300px">
          <Text>Medidas:</Text>
          <HStack marginTop="5px">
            <Input
              isDisabled={Disable}
              w="80px"
              h="30px"
              padding="5px"
              textAlign="center"
              onChange={(e) => setmedidaUtero1(e.target.value)}
            />
            <Text>x</Text>
            <Input
              isDisabled={Disable}
              w="80px"
              h="30px"
              padding="5px"
              textAlign="center"
              onChange={(e) => setmedidaUtero2(e.target.value)}
            />
            <Text>x</Text>
            <Input
              isDisabled={Disable}
              w="80px"
              h="30px"
              padding="5px"
              textAlign="center"
              onChange={(e) => {
                setmedidaUtero3(e.target.value);
              }}
            />
            <Text>mm</Text>
            <Input
              isDisabled={Disable}
              w="80px"
              h="30px"
              value={medidaUtero4}
              padding="5px"
              textAlign="center"
            />
            <Text>cm³</Text>
          </HStack>
        </Box>

        <Box w="200px">
          <Text>Endométrio:</Text>
          <HStack marginTop="5px">
            <Input
              isDisabled={Disable}
              w="50px"
              h="30px"
              padding="5px"
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
            isDisabled={Disable}
            onChange={() => {
              setEndometrioCheckBox(!endometrioCheckBox);
            }}
          >
            Endométrio heterogêneo e espessado
          </Checkbox>

          <HStack>
            <Checkbox
              isDisabled={Disable}
              onChange={() => setPolipoCheckBox(!polipoCheckBox)}
            >
              Pólipo endometrial
            </Checkbox>
            <Input
              isDisabled={disablePolipoInput}
              w="35px"
              h="30px"
              value={medidaPolipo1}
              padding="5px"
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
              textAlign="center"
              onChange={handleChangeMedidaPolipo2}
            />
            <Text>mm</Text>
          </HStack>
          <Checkbox
            isDisabled={Disable}
            onChange={() =>
              setLiquidoEndometrialCheckBox(!liquidoEndometrialCheckBox)
            }
          >
            Líquido na cavidade endometrial
          </Checkbox>
          <Checkbox
            isDisabled={Disable}
            onChange={() =>
              setDIUBemPosicionadoCheckBox(!DIUBemPosicionadoCheckBox)
            }
          >
            DIU bem posicionado
          </Checkbox>

          <HStack>
            <Checkbox
              isDisabled={Disable}
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
              textAlign="center"
              onChange={handleChangeDistanciaDIU}
            />
            <Text>mm do fundo da cavidade uterina</Text>
          </HStack>
          <HStack>
            <Checkbox
              isDisabled={Disable}
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
