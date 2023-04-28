/* eslint-disable react-hooks/exhaustive-deps */
import {
  Box,
  Button,
  Checkbox,
  HStack,
  Input,
  Select,
  Stack,
  Text
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";
import IndividualizarPolipo from "./IndividualizaPolipoEndometrial/individualizar_Polipo";
import IndividualizarNodulos from "./individualizar_nodulos";

function Utero({ Disable }) {
  const [FrasesUtero, setFrasesUtero] = useState<any>([]);
  const [ConclusaoUtero, setConclusaoUtero] = useState<any>([]);

  const subExame = "Útero";
  const titulo_exame = "Pélvico";

  useEffect(() => {
    if (Object.keys(FrasesUtero).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        FrasesUtero,
        ConclusaoUtero
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        FrasesUtero,
        ConclusaoUtero
      ).Format_Laudo_Create_Storage();
    }
  }, [FrasesUtero]);

  const altura = "100%";
  const largura = "66%";

  //States Medidas Utero - Inicio
  const [medidaUtero1, setmedidaUtero1] = useState<number>(10);
  const [medidaUtero2, setmedidaUtero2] = useState<number>(10);
  const [medidaUtero3, setmedidaUtero3] = useState<number>(10);
  const [medidaUtero4, setmedidaUtero4] = useState<number>(0.5);
  //States Medidas Utero - Fim

  //States Medida Polipo - Inicio
  const [medidaPolipo1, setmedidaPolipo1] = useState("");
  const [medidaPolipo2, setmedidaPolipo2] = useState("");

  const [polipoCheckBox, setPolipoCheckBox] = useState(false);


  const [UpdateCalculos, setUpdateCalculos] = useState(false);
  const [numberArray, setNumberArray] = useState([1]);

  function Calculos() {
    return (
      <>
        {numberArray.map((num, key) => {
          return <IndividualizarPolipo key={key} numCisto={num} />;
        })}
      </>
    );
  }

  useEffect(() => {
    if (UpdateCalculos) {
      setUpdateCalculos(false);
      setNumberArray([...numberArray, numberArray.length + 1]);
      Calculos();
    }
  }, [UpdateCalculos]);

  //Handles para setar os valores do input no state
  const handleChangeMedidaUtero1 = (event) =>
    setmedidaUtero1(event.target.value);

  const handleChangeMedidaUtero2 = (event) =>
    setmedidaUtero2(event.target.value);

  const handleChangeMedidaUtero3 = (event) =>
    setmedidaUtero3(event.target.value);

  const handleChangeMedidaPolipo1 = (event) =>
    setmedidaPolipo1(event.target.value);

  const handleChangeMedidaPolipo2 = (event) => {
    setmedidaPolipo2(event.target.value);
  };
  //States Medida Polipo - Fim

  //States Distancia DIU- Inicio
  const [DIUDistanciaCheckBox, setDIUDistanciaCheckBox] = useState(false);
  const [distanciaDIUInput, setDistanciaDIUInput] = useState("");

  const handleChangeDistanciaDIU = (event) => {
    setDistanciaDIUInput(event.target.value);
  };
  //States Distancia DIU- Fim

  //States Cisto de Naboth - Inicio
  const [cistoNabothInput, setCistoNabothInput] = useState("");
  const [cistoNabothCheckBox, setCistoNabothCheckBox] = useState(false);

  const handleChangeCistoNaboth = (event) => {
    setCistoNabothInput(event.target.value);
  };
  const handleChangeEndometrio = (event) => {
    setEndometrio(event.target.value);
  };
  //States Cisto de Naboth - Fim

  //CheckBox Liquido Endometrial
  const [liquidoEndometrialCheckBox, setLiquidoEndometrialCheckBox] =
    useState(false);

  // CheckBox DIU posicionado
  const [DIUBemPosicionadoCheckBox, setDIUBemPosicionadoCheckBox] =
    useState(false);

  //Endometrio medida
  const [endometrio, setEndometrio] = useState<number>(0);

  //Endometrio checkbox
  const [endometrioCheckBox, setEndometrioCheckBox] = useState(false);

  const [PosicaoSelect, setPosicaoSelect] = useState('');

  useEffect(() => {
    var medida4 = ((medidaUtero1) * (medidaUtero2) * (medidaUtero3) / 1000) / 2
    setmedidaUtero4(medida4)
  }, [medidaUtero1, medidaUtero2, medidaUtero3])

  // Funcoes medidas Utero - Inicio
  const criaStringMedidasUtero = () => {
    let string = 'A forma é típica, com os limites precisos e contornos regulares, medindo'
    removeStringSelect(string)
    if (PosicaoSelect != '') {
      string = `mediano, no ${PosicaoSelect}. ${string} ${medidaUtero1} x ${medidaUtero2} x ${medidaUtero3} mm (Vol = ${medidaUtero4} cm³).`;
      setFrasesUtero((arr) => [...arr, string]);
    }
  };

  useEffect(() => {
    criaStringMedidasUtero();
  }, [medidaUtero1, medidaUtero2, medidaUtero3, PosicaoSelect]);


  //Funcoes medida Endometrio - Inicio
  const criaStringEndometrio = () => {
    var string = 'O eco endometrial'
    removeStringSelect(string)
    if (endometrio != 0) {
      if (endometrioCheckBox) {
        string = `${string} está espessado e heterogêneo,`
      }
      string = `${string} ${endometrio} mm de espessura.`;
      setFrasesUtero((arr) => [...arr, string]);
    }
  };

  useEffect(() => {
    criaStringEndometrio();
  }, [endometrio, endometrioCheckBox]);


  //Funcoes Polipo endometrial - Inicio
  const criaStringPolipoEndometrial = (medida1, medida2) => {
    const conclusao = 'Imagem nodular sugestiva de pólipo endometrial.'
    var string = 'Nota-se no interior da cavidade, imagem ovalada hiperecóica , de limites precisos e contornos regulares, medindo:'
    removeStringSelect(string);
    removeItemConclusao(conclusao);
    if (polipoCheckBox) {
      if (medidaPolipo1 != "" && medidaPolipo2 != "") {
        string = `${string} ${medida1} x ${medida2} mm `;
        setFrasesUtero((arr) => [...arr, string]);
        setConclusaoUtero((arr) => [...arr, conclusao]);
      }
    } else {
      setmedidaPolipo1("");
      setmedidaPolipo2("");
    }
  };

  useEffect(() => {
    criaStringPolipoEndometrial(medidaPolipo1, medidaPolipo2);
  }, [polipoCheckBox, medidaPolipo1, medidaPolipo2]);


  const criaStringDIUBemPosicionado = () => {
    var string = "Observa-se imagem linear,ecogênica, com reverberação acústica posterior, de geometria compatível com DIU.";
    var conclusao = 'DIU normoposicionado.'
    if (DIUBemPosicionadoCheckBox) {
      setFrasesUtero((arr) => [...arr, string]);
      setConclusaoUtero((arr) => [...arr, conclusao]);
    } else {
      removeItemConclusao(conclusao)
      removeItemString(string)
    }
  };

  useEffect(() => {
    criaStringDIUBemPosicionado();
  }, [DIUBemPosicionadoCheckBox]);

  //Funcoes Distancia DIU - Inicio
  const criaStringDIUDistancia = (distancia) => {
    var string = 'A distância entre o DIU e o fundo da cavidade uterina mediu'
    const conclusao = 'DIU de inserção baixa.'
    removeStringSelect(string);
    removeItemConclusao(conclusao);
    if (DIUDistanciaCheckBox) {
      if (distancia != "") {
        string = `${string} ${distancia} mm.`;
        setFrasesUtero((arr) => [...arr, string]);
        setConclusaoUtero((arr) => [...arr, conclusao]);
      }
    } else {
      setDistanciaDIUInput("");
    }
  };

  useEffect(() => {
    criaStringDIUDistancia(distanciaDIUInput);
  }, [DIUDistanciaCheckBox, distanciaDIUInput]);

  const criaStringLiquidoEndometrial = () => {
    var string = "Presença de pequena quantidade de líquido na cavidade endometrial.";
    var conclusao = "Pequena quantidade de líquido na cavidade endometrial."
    removeItemConclusao(conclusao)
    removeStringSelect(string)
    if (liquidoEndometrialCheckBox) {
      setFrasesUtero((arr) => [...arr, string]);
      setConclusaoUtero((arr) => [...arr, conclusao]);
    }
  };

  useEffect(() => {
    criaStringLiquidoEndometrial();
  }, [liquidoEndometrialCheckBox]);

  //Funcoes Cisto Naboth - Incio
  const criaStringCistoNaboth = (medida) => {
    let conclusao = 'Cistos de Naboth'
    var string = 'Presença de algumas imagens císticas, anecóicas, na topografia do colo uterino, a maior medindo'
    removeStringSelect(string)
    removeItemConclusao(conclusao)
    if (cistoNabothCheckBox) {
      if (medida != "") {
        string = `${string} ${medida} mm.`;
        setFrasesUtero((arr) => [...arr, string]);
        setConclusaoUtero((arr) => [...arr, conclusao]);
      }
    } else {
      setCistoNabothInput("");
    }
  };

  useEffect(() => {
    criaStringCistoNaboth(cistoNabothInput);
  }, [cistoNabothCheckBox, cistoNabothInput]);

  //Funcoes Cisto Naboth - Fim

  //Remove string generico
  const removeItemString = (value) => {
    // console.log("valor remove = ", value);
    var index = FrasesUtero.indexOf(value);
    //caso o valor enviado exista no array, vai remover com splice e setar array novamente
    if (index > -1) {
      FrasesUtero.splice(index, 1);
      setFrasesUtero((arr) => [...arr]);
    }
  };
  const removeItemConclusao = (value) => {
    // console.log("valor remove = ", value);
    var index = ConclusaoUtero.indexOf(value);
    //caso o valor enviado exista no array, vai remover com splice e setar array novamente
    if (index > -1) {
      ConclusaoUtero.splice(index, 1);
      setConclusaoUtero((arr) => [...arr]);
      new Format_Laudo(titulo_exame).Remove_Conclusao(value)
    }
  };

  const removeStringSelect = (value) => {
    // console.log("valor remove = ", value);
    FrasesUtero.map((e) => {
      if (e.includes(value)) {
        var index = FrasesUtero.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          FrasesUtero.splice(index, 1);
          setFrasesUtero((arr) => [...arr]);
        }
      }
    });
  };

  //------------------------------------------------------------------------------------------------------------
  //------------------------------------------------------------------------------------------------------------
  //------------------------------------------------------------------------------------------------------------
  const [UpdateNodulos, setUpdateNodulos] = useState(false);
  const [numberArrayMiometrio, setNumberArrayMiometrio] = useState([1]);

  function Nodulos() {
    return (
      <>
        {numberArrayMiometrio.map((num, key) => {
          return <IndividualizarNodulos
            key={key}
            numNodulo={num}
            disable={!miometrioSemNodulosCheckBox}
          />
        })}
      </>
    );
  }

  useEffect(() => {
    if (UpdateNodulos) {
      setUpdateNodulos(false);
      setNumberArrayMiometrio([...numberArrayMiometrio, numberArrayMiometrio.length + 1]);
      Nodulos();
    }
  }, [UpdateNodulos]);

  const [tamanhoNoduloInput, settamanhoNoduloInput] = useState("");
  const [posicaoNodulosSelect, setPosicaoNodulosSelect] = useState("");
  const [localizacaoNodulosSelect, setlocalizacaoNodulosSelect] = useState("");

  const [multiplosNodulosCheckBox, setmultiplosNodulosCheckBox] =
    useState(false);

  const [miometrioSemNodulosCheckBox, setmiometrioSemNodulosCheckBox] = useState(true);

  const [MiometrioHomogeneoSemNodulosCheckBox, setMiometrioHomogeneoSemNodulosCheckBox] = useState(false);

  const handleChangeNoduloInput = (event) => {
    settamanhoNoduloInput(event.target.value);
  };

  const criaStringMultiplosNodulos = (tamanhoNoduloInput, nodulosSelect, localizado) => {
    const conclusao = 'Miomatose uterina.'
    removeMultiplosNodulos();
    removeItemStringConclusao(conclusao)
    if (tamanhoNoduloInput !== "" && nodulosSelect !== "" && localizado !== "") {
      var string = `O miométrio encontra-se heterogêneo, apresentando de múltiplos nódulos de mioma, o maior ${nodulosSelect}, localizado na parede ${localizado} e medindo ${tamanhoNoduloInput} mm.`;
      setFrasesUtero((arr) => [...arr, string]);
      setConclusaoUtero((arr) => [...arr, conclusao]);
    }
  };

  const removeMultiplosNodulos = () => {
    FrasesUtero.map((e) => {
      if (e.includes("O miométrio encontra-se heterogêneo, apresentando de múltiplos nódulos de mioma,")
      ) {
        var index = FrasesUtero.indexOf(e);

        if (index > -1) {
          FrasesUtero.splice(index, 1);
          setFrasesUtero((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringMiometrioSemNodulos = () => {
    var string =
      "O miométrio apresenta estratificação normal e ecotextura habitual.";
    const conclusao = 'Alteração textural miometrial.'
    if (miometrioSemNodulosCheckBox) {
      setFrasesUtero((arr) => [...arr, string]);
      setConclusaoUtero((arr) => [...arr, conclusao]);
      setmiometrioSemNodulosCheckBox(false);
    } else {
      removeItemString(string);
      removeItemStringConclusao(conclusao);
    }
  };
  const criaStringMiometrioHomogeneoSemNodulos = () => {
    var string = 'Miométrio homogêneo sem nódulos'
    const conclusao = 'Miométrio homogêneo sem nódulos.'
    if (MiometrioHomogeneoSemNodulosCheckBox) {
      setFrasesUtero((arr) => [...arr, string]);
      setConclusaoUtero((arr) => [...arr, conclusao]);
    } else {
      removeItemString(string);
      removeItemStringConclusao(conclusao);
    }
  };
  useEffect(() => {
    criaStringMiometrioHomogeneoSemNodulos()
  }, [MiometrioHomogeneoSemNodulosCheckBox])


  const removeItemStringConclusao = (value) => {
    var index = ConclusaoUtero.indexOf(value);
    if (index > -1) {
      ConclusaoUtero.splice(index, 1);
      setConclusaoUtero((arr) => [...arr]);
      new Format_Laudo(titulo_exame).Remove_Conclusao(value);
    }
  };

  useEffect(() => {
    if (multiplosNodulosCheckBox) {
      criaStringMultiplosNodulos(
        tamanhoNoduloInput,
        posicaoNodulosSelect,
        localizacaoNodulosSelect
      );
    } else {
      removeItemStringConclusao('Miomatose uterina.')
      removeMultiplosNodulos();
      settamanhoNoduloInput("");
      setPosicaoNodulosSelect("");
      setlocalizacaoNodulosSelect("");
    }
  }, [
    multiplosNodulosCheckBox,
    posicaoNodulosSelect,
    tamanhoNoduloInput,
    localizacaoNodulosSelect,
  ]);


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
            <option selected disabled value="">Selecione</option>
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

              value={medidaUtero1}
              w="80px"
              h="30px"
              padding="0px"
              textAlign="center"
              onChange={handleChangeMedidaUtero1}
            />
            <Text>x</Text>
            <Input
              value={medidaUtero2}
              w="80px"
              h="30px"
              padding="0px"
              textAlign="center"
              onChange={handleChangeMedidaUtero2}
            />
            <Text>x</Text>
            <Input
              value={medidaUtero3}
              w="80px"
              h="30px"
              padding="0px"
              textAlign="center"
              onChange={handleChangeMedidaUtero3}
            />
            <Text>mm</Text>
            <Input
              w="100px"
              h="30px"
              value={medidaUtero4}
              padding="0px"
              textAlign="center"

            />
            <Text>cm³</Text>
          </HStack>
        </Box>


        <Stack>
          <Box gap='10px' display='flex' flexWrap='wrap'>
            <Checkbox onChange={() => {
              setEndometrioCheckBox(!endometrioCheckBox);
            }}
            >
              Endométrio heterogêneo e espessado
            </Checkbox>
            <Box w="200px">
              <Text>Endométrio:</Text>
              <HStack marginTop="5px">
                <Input
                  placeholder='0'
                  value={endometrio}
                  w="50px"
                  h="30px"
                  padding="0px"
                  textAlign="center"
                  onChange={handleChangeEndometrio}
                />
                <Text>mm</Text>
              </HStack>
            </Box>
          </Box>
          <Box gap="25px" display="flex" flexWrap="wrap">
            {Calculos()}
            <Button

              colorScheme="blue"
              onClick={() => {
                setUpdateCalculos(true);
              }}
            >
              +1 Pólipo
            </Button>
          </Box>
          <Checkbox onChange={() =>
            setLiquidoEndometrialCheckBox(!liquidoEndometrialCheckBox)
          }
          >
            Líquido na cavidade endometrial
          </Checkbox>
          <Checkbox onChange={() =>
            setDIUBemPosicionadoCheckBox(!DIUBemPosicionadoCheckBox)
          }
          >
            DIU bem posicionado
          </Checkbox>

          <HStack>
            <Checkbox onChange={() => setDIUDistanciaCheckBox(!DIUDistanciaCheckBox)}
            >
              DIU distando
            </Checkbox>
            <Input
              isDisabled={!DIUDistanciaCheckBox}
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
            <Checkbox onChange={() => setCistoNabothCheckBox(!cistoNabothCheckBox)}
            >
              Cisto de Naboth
            </Checkbox>
            <Input
              isDisabled={!cistoNabothCheckBox}
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
      <Box gap="30px" display="flex" flexWrap="wrap" mt="20px">
        <Stack>
          <Stack>
            <Checkbox onChange={() => {
              setmiometrioSemNodulosCheckBox(true);
              criaStringMiometrioSemNodulos();
            }}
            >
              Miométrio heterogêneo sem nódulos
            </Checkbox>
            <Checkbox onChange={() => {
              setMiometrioHomogeneoSemNodulosCheckBox(!MiometrioHomogeneoSemNodulosCheckBox);
            }}
            >
              Miométrio homogêneo sem nódulos
            </Checkbox>
            <Box>
              <HStack>
                <Checkbox
                  whiteSpace="nowrap"
                  isDisabled={!miometrioSemNodulosCheckBox}
                  onChange={() =>
                    setmultiplosNodulosCheckBox(!multiplosNodulosCheckBox)
                  }
                >
                  Múltiplos nódulos de mioma, o maior mede
                </Checkbox>

                <Input
                  isDisabled={!miometrioSemNodulosCheckBox}
                  value={tamanhoNoduloInput}
                  w="60px"
                  h="77x"
                  padding="5px"
                  textAlign="center"
                  onChange={handleChangeNoduloInput}
                  placeholder={"mm"}
                />
                <Select
                  w="auto"
                  isDisabled={!miometrioSemNodulosCheckBox}
                  onChange={(e) => {
                    setPosicaoNodulosSelect(e.target.value);
                  }}
                  value={posicaoNodulosSelect}
                >
                  <option value="" disabled selected>
                    Posição
                  </option>
                  <option value="Intramural">Intramural</option>
                  <option value="Subseroso">Subseroso </option>
                  <option value="Submucoso">Submucoso</option>
                  <option value="médio versão">Médio versão</option>
                </Select>

                <Select
                  w="auto"
                  isDisabled={!miometrioSemNodulosCheckBox}
                  onChange={(e) => {
                    setlocalizacaoNodulosSelect(e.target.value);
                  }}
                  value={localizacaoNodulosSelect}
                >
                  <option value="" disabled selected>
                    Localizado
                  </option>
                  <option value="corporal anterior">Corporal anterior</option>
                  <option value="corporal posterior">Corporal posterior</option>
                  <option value="fúndica">Fúndica</option>
                  <option value="lateral direita">Lateral direita</option>
                  <option value="lateral esquerda">Lateral esquerda</option>
                  <option value="cervical">Cervical</option>
                </Select>
              </HStack>
            </Box>

            <Box borderBottom="1px"></Box>
            <Text fontWeight="semibold" fontSize="16px">
              Individualizar Nódulos
            </Text>
            <Stack>
              <Box gap="25px" display="flex" flexWrap="wrap">
                {Nodulos()}
                <Button

                  colorScheme="blue"
                  onClick={() => {
                    setUpdateNodulos(true);
                  }}
                >
                  +1 Nódulo
                </Button>
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
export default Utero;
