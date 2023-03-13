import { Box, Checkbox, HStack, Input, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Bexiga() {
  const altura = "100%";
  const largura = "95%";

  const [frasesBexgiga, setFrasesBexiga] = useState<any>([]);

  const [disableCheckboxCalculoInput, setDisableCheckboxCalculo] =
    useState(false);
  const [CalculoMedeCheckbox, setCalculoMedeCheckbox] = useState(false);
  const [disableCalculoInput, setDisableCalculoInput] = useState(true);
  const [distanciaCalculoInput, setDistanciaCalculoInput] = useState("");

  const [
    disableCheckboxDiverticuloMedeInput,
    setdisableCheckboxDiverticuloMede,
  ] = useState(false);
  const [DiverticuloMedeInput, setDiverticuloMedeInput] = useState("");
  const [disableDiverticuloMedeInput, setdisableDiverticuloMedeInput] =
    useState(true);
  const [DiverticuloMedeCheckbox, setDiverticuloMedeCheckbox] = useState(false);

  const [disableCheckboxUretroceleMede, setdisableCheckboxUretroceleMede] =
    useState(false);
  const [UretroceleMedeInput, setUretroceleMedeInput] = useState("");
  const [disableUretroceleMedeInput, setdisableUretroceleMedeInput] =
    useState(true);
  const [UretroceleMedeCheckbox, setUretroceleMedeCheckbox] = useState(false);

  const [DisableEsforcoCheckbox, setDisableEsforcoCheckbox] = useState(false);
  const [EsforcoCheckbox, setEsforcoCheckbox] = useState(false);

  const [DisableVaziaCheckbox, setDisableVaziaCheckbox] = useState(false);
  const [VaziaCheckbox, setVaziaCheckbox] = useState(false);

  const [DisableOmitirBexigaCheckbox, setDisableOmitirBexigaCheckbox] =
    useState(false);
  const [OmitirBexigaCheckbox, setOmitirBexigaCheckbox] = useState(false);

  const [DisableNormalcheckbox, setDisableNormalcheckbox] = useState(false);
  const [Normalcheckbox, setNormalcheckbox] = useState(false);

  const criaStringNormalcheckbox = () => {
    var string =
      "Cheia, de paredes normo-espessas. Não se notam imagens calculosas.";
    if (!Normalcheckbox) {
      setDisableCheckboxCalculo(true);
      setdisableCheckboxDiverticuloMede(true);
      setdisableCheckboxUretroceleMede(true);
      setDisableEsforcoCheckbox(true);
      setDisableVaziaCheckbox(true);
      setDisableOmitirBexigaCheckbox(true);
      setFrasesBexiga((arr) => [...arr, string]);
    } else {
      setDisableCheckboxCalculo(false);
      setdisableCheckboxDiverticuloMede(false);
      setdisableCheckboxUretroceleMede(false);
      setDisableEsforcoCheckbox(false);
      setDisableVaziaCheckbox(false);
      setDisableOmitirBexigaCheckbox(false);
      removeItemString(string);
    }
  };

  const criaStringEsforco = () => {
    var string = "Líquido na cavidade endometrial ";
    if (!EsforcoCheckbox) {
      setFrasesBexiga((arr) => [...arr, string]);
    } else {
      removeItemString(string);
    }
  };

  const criaStringVazia = () => {
    var string = "Bexiga vazia ";
    if (!VaziaCheckbox) {
      setFrasesBexiga((arr) => [...arr, string]);
    } else {
      removeItemString(string);
    }
  };
  
  const criaStringOmitirBexiga = () => {
    var string = "Omitir bexiga ";
    if (!OmitirBexigaCheckbox) {
      setFrasesBexiga((arr) => [...arr, string]);
    } else {
      removeItemString(string);
    }
  };

  const criaStringCalculoMede = (distancia) => {
    removeCalculoMede();
    if (distancia !== "") {
      var string = `Cálculo mede ${distancia} mm `;
      setFrasesBexiga((arr) => [...arr, string]);
    }
  };
  const removeCalculoMede = () => {
    frasesBexgiga.map((e) => {
      if (e.includes("Cálculo mede ")) {
        var index = frasesBexgiga.indexOf(e);

        if (index > -1) {
          frasesBexgiga.splice(index, 1);
          setFrasesBexiga((arr) => [...arr]);
        }
      }
    });
  };


  const criaStringDiverticuloMede = (medida) => {
    removeDiverticuloMede();
    if (medida !== "") {
      var string = `Diverticulo mede ${medida}mm `;
      setFrasesBexiga((arr) => [...arr, string]);
    }
  };

  const removeDiverticuloMede = () => {
    frasesBexgiga.map((e) => {
      if (e.includes("Diverticulo mede ")) {
        var index = frasesBexgiga.indexOf(e);

        if (index > -1) {
          frasesBexgiga.splice(index, 1);
          setFrasesBexiga((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringUretroceleMede = (medida) => {
    removeUretroceleMede();
    if (medida !== "") {
      var string = `Uretrocele mede ${medida}mm `;
      setFrasesBexiga((arr) => [...arr, string]);
    }
  };

  const removeUretroceleMede = () => {
    frasesBexgiga.map((e) => {
      if (e.includes("Uretrocele mede ")) {
        var index = frasesBexgiga.indexOf(e);

        if (index > -1) {
          frasesBexgiga.splice(index, 1);
          setFrasesBexiga((arr) => [...arr]);
        }
      }
    });
  };

  const removeItemString = (value) => {
    var index = frasesBexgiga.indexOf(value);

    if (index > -1) {
      frasesBexgiga.splice(index, 1);
      setFrasesBexiga((arr) => [...arr]);
    }
  };

  useEffect(() => {
    if (
      UretroceleMedeCheckbox ||
      EsforcoCheckbox ||
      VaziaCheckbox ||
      OmitirBexigaCheckbox ||
      DiverticuloMedeCheckbox ||
      CalculoMedeCheckbox
    ) {
      setDisableNormalcheckbox(true);
    } else {
      setDisableNormalcheckbox(false);
    }
  }, [
    UretroceleMedeCheckbox,
    EsforcoCheckbox,
    VaziaCheckbox,
    OmitirBexigaCheckbox,
    CalculoMedeCheckbox,
    DiverticuloMedeCheckbox,
  ]);

  useEffect(() => {
    if (CalculoMedeCheckbox) {
      setDisableCalculoInput(false);
    } else {
      removeCalculoMede();
      setDisableCalculoInput(true);
      setDistanciaCalculoInput("");
    }
  }, [CalculoMedeCheckbox]);

  useEffect(() => {
    criaStringCalculoMede(distanciaCalculoInput);
  }, [distanciaCalculoInput]);

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

  useEffect(() => {
    criaStringDiverticuloMede(DiverticuloMedeInput);
  }, [DiverticuloMedeInput]);

  useEffect(() => {
    criaStringUretroceleMede(UretroceleMedeInput);
  }, [UretroceleMedeInput]);

  const subExame = "Bexiga";
  const titulo_exame = "Rins e Vias Urinárias";

  useEffect(() => {
    if (Object.keys(frasesBexgiga).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesBexgiga
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesBexgiga
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesBexgiga]);

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
              setVaziaCheckbox(!VaziaCheckbox);
              criaStringVazia();
            }}
          >
            Vazia
          </Checkbox>

          <Checkbox
            isDisabled={DisableOmitirBexigaCheckbox}
            onChange={() => {
              setOmitirBexigaCheckbox(!OmitirBexigaCheckbox);
              criaStringOmitirBexiga();
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
              onChange={(e) => {
                setDistanciaCalculoInput(e.target.value);
              }}
            />
            <Text>mm</Text>
          </HStack>
          <HStack>
            <Checkbox
              isDisabled={disableCheckboxDiverticuloMedeInput}
              onChange={() =>
                setDiverticuloMedeCheckbox(!DiverticuloMedeCheckbox)
              }
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
              onChange={(e) => {
                setDiverticuloMedeInput(e.target.value);
              }}
            />
            <Text>mm</Text>
          </HStack>
          <HStack>
            <Checkbox
              isDisabled={disableCheckboxUretroceleMede}
              onChange={() =>
                setUretroceleMedeCheckbox(!UretroceleMedeCheckbox)
              }
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
              onChange={(e) => {
                setUretroceleMedeInput(e.target.value);
              }}
            />
            <Text>mm</Text>
          </HStack>
        </Stack>
      </Box>
    </Box>
  );
}
export default Bexiga;
