/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
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

function Bexiga() {
  const altura = "100%";
  const largura = "95%";

  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);


  //States Distancia DIU- Inicio

  const [disableCheckboxCalculoInput, setDisableCheckboxCalculo] = useState(false);
  const [CalculoMedeCheckbox, setCalculoMedeCheckbox] = useState(false);
  const [disableCalculoInput, setDisableCalculoInput] = useState(true);
  const [distanciaCalculoInput, setDistanciaCalculoInput] = useState("");

  //States Distancia DIU- Fim

  //States Cisto de Naboth - Inicio
  const [disableCheckboxDiverticuloMedeInput, setdisableCheckboxDiverticuloMede] = useState(false);
  const [DiverticuloMedeInput, setDiverticuloMedeInput] = useState("");
  const [disableDiverticuloMedeInput, setdisableDiverticuloMedeInput] = useState(true);
  const [DiverticuloMedeCheckbox, setDiverticuloMedeCheckbox] = useState(false);

  const [disableCheckboxUretroceleMede, setdisableCheckboxUretroceleMede] = useState(false);
  const [UretroceleMedeInput, setUretroceleMedeInput] = useState("");
  const [disableUretroceleMedeInput, setdisableUretroceleMedeInput] = useState(true);
  const [UretroceleMedeCheckbox, setUretroceleMedeCheckbox] = useState(false);

  //States Cisto de Naboth - Fim

  //Checkbox Liquido Endometrial
  const [DisableEsforcoCheckbox, setDisableEsforcoCheckbox] = useState(false);
  const [EsforcoCheckbox, setEsforcoCheckbox] = useState(false);

  // Checkbox DIU posicionado
  const [DisableVaziaCheckbox, setDisableVaziaCheckbox] = useState(false);
  const [VaziaCheckbox, setVaziaCheckbox] = useState(false);

  const [DisableOmitirBexigaCheckbox, setDisableOmitirBexigaCheckbox] = useState(false);
  const [OmitirBexigaCheckbox, setOmitirBexigaCheckbox] = useState(false);

  //Endometrio checkbox
  const [DisableNormalcheckbox, setDisableNormalcheckbox] = useState(false);
  const [Normalcheckbox, setNormalcheckbox] = useState(false);



  //Funcao checkbox Endometrio
  const criaStringNormalcheckbox = () => {
    var string = "Bexiga está normal";
    if (!Normalcheckbox) {
      setDisableCheckboxCalculo(true)
      setdisableCheckboxDiverticuloMede(true)
      setdisableCheckboxUretroceleMede(true)
      setDisableEsforcoCheckbox(true)
      setDisableVaziaCheckbox(true)
      setDisableOmitirBexigaCheckbox(true)
      setLaudoPrin((arr) => [...arr, string]);
    } else {
      setDisableCheckboxCalculo(false)
      setdisableCheckboxDiverticuloMede(false)
      setdisableCheckboxUretroceleMede(false)
      setDisableEsforcoCheckbox(false)
      setDisableVaziaCheckbox(false)
      setDisableOmitirBexigaCheckbox(false)
      removeItemString(string);
    }
  };

  const criaStringEsforco = () => {
    var string = "Líquido na cavidade endometrial ";
    if (!EsforcoCheckbox) {
      setLaudoPrin((arr) => [...arr, string]);
    } else {
      removeItemString(string);
    }
  };

  const criaStringVazia = () => {
    var string = "Bexiga vazia ";
    if (!VaziaCheckbox) {
      setLaudoPrin((arr) => [...arr, string]);
    } else {
      removeItemString(string);
    }
  };
  const criaStringOmitirBexiga = () => {
    var string = "Omitir bexiga ";
    if (!OmitirBexigaCheckbox) {
      setLaudoPrin((arr) => [...arr, string]);
    } else {
      removeItemString(string);
    }
  };



  //Funcoes Distancia DIU - Inicio
  const criaStringCalculoMede = (distancia) => {
    removeCalculoMede();
    if (distancia !== "") {
      var string = `Cálculo mede ${distancia} mm `;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };
  const removeCalculoMede = () => {
    laudoPrin.map((e) => {
      if (e.includes("Cálculo mede ")) {
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

  //Funcoes Cisto Naboth - Incio
  const criaStringDiverticuloMede = (medida) => {
    removeDiverticuloMede();
    if (medida !== "") {
      var string = `Diverticulo mede ${medida}mm `;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };
  const removeDiverticuloMede = () => {
    laudoPrin.map((e) => {
      if (e.includes("Diverticulo mede ")) {
        var index = laudoPrin.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringUretroceleMede = (medida) => {
    removeUretroceleMede();
    if (medida !== "") {
      var string = `Uretrocele mede ${medida}mm `;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };
  const removeUretroceleMede = () => {
    laudoPrin.map((e) => {
      if (e.includes("Uretrocele mede ")) {
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


  useEffect(() => {
    if (UretroceleMedeCheckbox || EsforcoCheckbox || VaziaCheckbox || OmitirBexigaCheckbox
      || DiverticuloMedeCheckbox || CalculoMedeCheckbox) {
      setDisableNormalcheckbox(true)
    } else {
      setDisableNormalcheckbox(false)
    }
  }, [UretroceleMedeCheckbox, EsforcoCheckbox, VaziaCheckbox, OmitirBexigaCheckbox, CalculoMedeCheckbox, DiverticuloMedeCheckbox])



  useEffect(() => {
    if (CalculoMedeCheckbox) {
      setDisableCalculoInput(false);
    } else {
      removeCalculoMede();
      setDisableCalculoInput(true);
      setDistanciaCalculoInput("");
    }
  }, [CalculoMedeCheckbox]);

  //Observa o input distancia DIU, chama a funcao criar string
  useEffect(() => {
    criaStringCalculoMede(distanciaCalculoInput);
  }, [distanciaCalculoInput]);

  //Observa o state do checkbox Cisto Naboth,
  //Quando checked habilita os Input para inserir os valores
  //Quando unchecked desabilita os Input, remove a string do laudos Array e zera os states
  useEffect(() => {
    if (DiverticuloMedeCheckbox) {
      setdisableDiverticuloMedeInput(false);
    } else {
      removeDiverticuloMede();
      setdisableDiverticuloMedeInput(true);
      setDiverticuloMedeInput("");
    }
  }, [DiverticuloMedeCheckbox]);

  useEffect(() => {
    if (UretroceleMedeCheckbox) {
      setdisableUretroceleMedeInput(false);
    } else {
      removeUretroceleMede();
      setdisableUretroceleMedeInput(true);
      setUretroceleMedeInput("");
    }
  }, [UretroceleMedeCheckbox]);

  //Observa o input Cisto Naboth, chama a funcao criar string
  useEffect(() => {
    criaStringDiverticuloMede(DiverticuloMedeInput);
  }, [DiverticuloMedeInput]);

  useEffect(() => {
    criaStringUretroceleMede(UretroceleMedeInput);
  }, [UretroceleMedeInput]);

  return (
    <Box
      bg="#FAFAFA"
      w={largura}
      h={altura}
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="10.85px"
      boxShadow="md"
      padding="24px 15px 2px 15px"
      mt="15px"
    >
      <TituloNomeExame titulo="Bexiga" />

      <Box gap="30px" display="flex" flexWrap="wrap" mt="20px">

        <Stack>
          <Checkbox
            isDisabled={DisableNormalcheckbox}
            onChange={() => {
              setNormalcheckbox(!Normalcheckbox);
              criaStringNormalcheckbox();
            }}
          >
            Normal
          </Checkbox>


          <Checkbox
            isDisabled={DisableEsforcoCheckbox}
            onChange={() => {
              setEsforcoCheckbox(!EsforcoCheckbox);
              criaStringEsforco();
            }}
          >
            De esforço
          </Checkbox>

          <Checkbox
            isDisabled={DisableVaziaCheckbox}
            onChange={() => {
              setVaziaCheckbox(!VaziaCheckbox)
              criaStringVazia()
            }}
          >
            Vazia
          </Checkbox>

          <Checkbox
            isDisabled={DisableOmitirBexigaCheckbox}
            onChange={() => {
              setOmitirBexigaCheckbox(!OmitirBexigaCheckbox)
              criaStringOmitirBexiga()
            }}
          >
            Omitir bexiga
          </Checkbox>

          <HStack>
            <Checkbox
              isDisabled={disableCheckboxCalculoInput}
              onChange={() => setCalculoMedeCheckbox(!CalculoMedeCheckbox)}
            >
              Cálculo mede
            </Checkbox>
            <Input
              isDisabled={disableCalculoInput}
              value={distanciaCalculoInput}
              w="35px"
              h="30px"
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => { setDistanciaCalculoInput(e.target.value) }}
            />
            <Text>mm</Text>
          </HStack>
          <HStack>
            <Checkbox
              isDisabled={disableCheckboxDiverticuloMedeInput}
              onChange={() => setDiverticuloMedeCheckbox(!DiverticuloMedeCheckbox)}
            >
              Diverticulo mede
            </Checkbox>
            <Input
              isDisabled={disableDiverticuloMedeInput}
              value={DiverticuloMedeInput}
              w="35px"
              h="30px"
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => { setDiverticuloMedeInput(e.target.value); }}
            />
            <Text>mm</Text>
          </HStack>
          <HStack>
            <Checkbox
              isDisabled={disableCheckboxUretroceleMede}
              onChange={() => setUretroceleMedeCheckbox(!UretroceleMedeCheckbox)}
            >
              Uretrocele mede
            </Checkbox>
            <Input
              isDisabled={disableUretroceleMedeInput}
              value={UretroceleMedeInput}
              w="35px"
              h="30px"
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => { setUretroceleMedeInput(e.target.value); }}
            />
            <Text>mm</Text>
          </HStack>
        </Stack>
      </Box>
    </Box >
  );
}
export default Bexiga;
