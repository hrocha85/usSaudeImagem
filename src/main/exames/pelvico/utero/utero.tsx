/* eslint-disable react-hooks/exhaustive-deps */
import {
  Box,
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

function Utero() {
  const altura = "100%";
  const largura = "66%";

  const [FraseUtero, setFraseUtero] = useState<any>([]);
  const subExame = "Útero";
  const titulo_exame = "Pélvico";

  useEffect(() => {
    if (Object.keys(FraseUtero).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        FraseUtero,
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        FraseUtero,
      ).Format_Laudo_Create_Storage();
    }
  }, [FraseUtero]);

  //States Medidas Utero - Inicio
  const [medidaUtero1, setmedidaUtero1] = useState("");
  const [medidaUtero2, setmedidaUtero2] = useState("");
  const [medidaUtero3, setmedidaUtero3] = useState("");
  const [medidaUtero4, setmedidaUtero4] = useState(0);


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

  //Endometrio medida
  const [endometrio, setEndometrio] = useState<string | null>(null);

  //Endometrio checkbox
  const [endometrioCheckBox, setEndometrioCheckBox] = useState(true);

  const [PosicaoSelect, setPosicaoSelect] = useState('');


  const CriaStringPosicao = (value) => {
    var frase = `Útero em`
    removePosicao()
    if (value != '') {
      frase = `${frase} ${value}`
      setFraseUtero((arr) => [...arr, frase])
    }
  };

  useEffect(() => {
    CriaStringPosicao(PosicaoSelect)
  }, [PosicaoSelect])

  const removePosicao = () => {
    // console.log("valor remove = ", value);
    FraseUtero.map((e) => {
      if (e.includes("Útero em")) {
        var index = FraseUtero.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          FraseUtero.splice(index, 1);
          setFraseUtero((arr) => [...arr]);
        }
      }
    });
  };

  //Funcoes Posicao - Fim

  // Funcoes medidas Utero - Inicio
  const criaStringMedidasUtero = () => {
    if (medidaUtero1 != "" && medidaUtero2 != "" && medidaUtero3 != "") {
      var medida4 = (parseInt(medidaUtero1) * parseInt(medidaUtero2) * parseInt(medidaUtero3) / 1000)
      setmedidaUtero4(medida4)

      var string = `Útero com ${medidaUtero1} x ${medidaUtero2} x ${medidaUtero3} mm (${medida4} cm³) `;
      setFraseUtero((arr) => [...arr, string]);
    } else {
      setmedidaUtero4(0)

    }
  };
  const removeMedidas = () => {
    // console.log("valor remove = ", value);
    FraseUtero.map((e) => {
      if (e.includes("Útero com")) {
        var index = FraseUtero.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          FraseUtero.splice(index, 1);
          setFraseUtero((arr) => [...arr]);
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
      setFraseUtero((arr) => [...arr, string]);
    }
    setEndometrio(null);
  };
  const removeEndometrio = () => {
    // console.log("valor remove = ", value);
    FraseUtero.map((e) => {
      if (e.includes("Endométrio")) {
        var index = FraseUtero.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          FraseUtero.splice(index, 1);
          setFraseUtero((arr) => [...arr]);
        }
      }
    });
  };
  //Funcoes medida Endometrio - Fim

  //Funcao checkBox Endometrio
  const criaStringEndometrioCheckBox = () => {
    var string = "Endométrio heterogêneo e espessado ";
    if (endometrioCheckBox) {
      setFraseUtero((arr) => [...arr, string]);
      setEndometrioCheckBox(false);
    } else {
      removeItemString(string);
    }
  };



  //Funcoes Liquido Endometrial - Incio
  const criaStringLiquidoEndometrial = () => {
    var string = "Líquido na cavidade endometrial ";
    setFraseUtero((arr) => [...arr, string]);
    return string;
  };
  const removeLiquidoEndometrial = () => {
    // console.log("valor remove = ", value);
    FraseUtero.map((e) => {
      if (e.includes("Líquido")) {
        var index = FraseUtero.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          FraseUtero.splice(index, 1);
          setFraseUtero((arr) => [...arr]);
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
      setFraseUtero((arr) => [...arr, string]);
    }
  };
  const removeCistoNaboth = () => {
    FraseUtero.map((e) => {
      if (e.includes("Naboth")) {
        var index = FraseUtero.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          FraseUtero.splice(index, 1);
          setFraseUtero((arr) => [...arr]);
        }
      }
    });
  };
  //Funcoes Cisto Naboth - Fim

  //Remove string generico
  const removeItemString = (value) => {
    // console.log("valor remove = ", value);
    var index = FraseUtero.indexOf(value);
    //caso o valor enviado exista no array, vai remover com splice e setar array novamente
    if (index > -1) {
      FraseUtero.splice(index, 1);
      setFraseUtero((arr) => [...arr]);
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


  //Observa o state do checkBox DIU distancia,
  //Quando checked habilita os Input para inserir os valores
  //Quando unchecked desabilita os Input, remove a string do laudos Array e zera os states


  //Observa o input distancia DIU, chama a funcao criar string

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
              w="80px"
              h="30px"
              padding="5px"
              textAlign="center"
              onChange={(e) => setmedidaUtero1(e.target.value)}
            />
            <Text>x</Text>
            <Input
              w="80px"
              h="30px"
              padding="5px"
              textAlign="center"
              onChange={(e) => setmedidaUtero2(e.target.value)}
            />
            <Text>x</Text>
            <Input
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
            onChange={() => {
              setEndometrioCheckBox(true);
              criaStringEndometrioCheckBox();
            }}
          >
            Endométrio heterogêneo e espessado
          </Checkbox>


          <Checkbox
            onChange={() =>
              setLiquidoEndometrialCheckBox(!liquidoEndometrialCheckBox)
            }
          >
            Líquido na cavidade endometrial
          </Checkbox>
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
