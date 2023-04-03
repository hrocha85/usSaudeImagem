/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Bexiga() {
  const altura = "100%";
  const largura = "95%";

  const [FrasesBexiga, setFrasesBexiga] = useState<any>([]);
  const [ConclusaoBexiga, setConclusaoBexiga] = useState<any>([]);

  const [disableCheckboxCalculoInput, setDisableCheckboxCalculo] =
    useState(false);

  const [CalculoMedeCheckbox, setCalculoMedeCheckbox] = useState(false);
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

  const removeFraseConclusao = (value) => {
    ConclusaoBexiga.map((e) => {
      if (e.includes(value)) {
        var index = ConclusaoBexiga.indexOf(e);
        if (index > -1) {
          ConclusaoBexiga.splice(index, 1);
          setConclusaoBexiga((arr) => [...arr]);
          new Format_Laudo(titulo_exame).Remove_Conclusao_Select(value);
        }
      }
    });
  };

  const criaStringEsforco = () => {
    const string = "Com boa repleção, de paredes espessadas, com aspecto serrilhado, apresentando pseudo-divertículos com colo de comunicação com o lúmen vesical.";
    const conclusao = 'Bexiga de esforço.'
    removeItemString(string)
    removeFraseConclusao(conclusao)
    if (EsforcoCheckbox) {
      setFrasesBexiga((arr) => [...arr, string]);
      setConclusaoBexiga((arr) => [...arr, conclusao]);
    }
  };

  useEffect(() => {
    criaStringEsforco()
  }, [EsforcoCheckbox])


  const criaStringVazia = () => {
    var string = "com repleção insuficiente pra análise.";
    VaziaCheckbox ? setFrasesBexiga((arr) => [...arr, string]) : removeItemString(string);
  };
  useEffect(() => {
    criaStringVazia()
  }, [VaziaCheckbox])

  const criaStringNormal = () => {
    var string = "Paredes finas e regulares, conteúdo anecóico e homogêneo.";
    Normalcheckbox ? setFrasesBexiga((arr) => [...arr, string]) : removeItemString(string);
  };
  useEffect(() => {
    criaStringNormal()
  }, [Normalcheckbox])

  const criaStringCalculoMede = () => {
    var string = 'Nota-se no interior da bexiga imagem arredondada, de limites precisos, contornos regulares, hiperecogênica, com sombra acústica posterior, móvel com o decúbito, medindo'
    const conclusao = 'Litíase vesical.'
    removeStringSelect(string);
    removeFraseConclusao(conclusao)
    if (CalculoMedeCheckbox) {
      if (distanciaCalculoInput != "") {
        string = `${string} ${distanciaCalculoInput} mm.`;
        setFrasesBexiga((arr) => [...arr, string]);
        setConclusaoBexiga((arr) => [...arr, conclusao]);
      }
    } else {
      setDistanciaCalculoInput("");
    }
  };


  useEffect(() => {
    criaStringCalculoMede();
  }, [CalculoMedeCheckbox, distanciaCalculoInput]);

  const criaStringDiverticulo = () => {
    var string = 'Paredes finas e irregulares, conteúdo anecóico e homogêneo, apresentando uma imagem de divertículo com colo de'
    const conclusao = 'Divertículo na bexiga.'
    removeStringSelect(string);
    removeFraseConclusao(conclusao)
    if (DiverticuloMedeCheckbox) {
      if (DiverticuloMedeInput != "") {
        string = `${string} ${DiverticuloMedeInput} mm.`;
        setFrasesBexiga((arr) => [...arr, string]);
        setConclusaoBexiga((arr) => [...arr, conclusao]);
      }
    } else {
      setDiverticuloMedeInput("");
    }
  };


  useEffect(() => {
    criaStringDiverticulo();
  }, [DiverticuloMedeCheckbox, DiverticuloMedeInput]);

  const criaStringUretocele = () => {
    var string = 'Nota-se no interior da bexiga imagem arredondada, de limites precisos, contornos regulares, anecóica, medindo'
    const conclusao = 'Uretrocele.'
    removeStringSelect(string);
    removeFraseConclusao(conclusao)
    if (UretroceleMedeCheckbox) {
      if (UretroceleMedeInput != "") {
        string = `${string} ${UretroceleMedeInput} mm.`;
        setFrasesBexiga((arr) => [...arr, string]);
        setConclusaoBexiga((arr) => [...arr, conclusao]);
      }
    } else {
      setUretroceleMedeInput("");
    }
  };


  useEffect(() => {
    criaStringUretocele();
  }, [UretroceleMedeCheckbox, UretroceleMedeInput]);


  const removeStringSelect = (value) => {
    FrasesBexiga.map((e) => {
      if (e.includes(value)) {
        var index = FrasesBexiga.indexOf(e);

        if (index > -1) {
          FrasesBexiga.splice(index, 1);
          setFrasesBexiga((arr) => [...arr]);
        }
      }
    });
  };

  const removeItemString = (value) => {
    var index = FrasesBexiga.indexOf(value);

    if (index > -1) {
      FrasesBexiga.splice(index, 1);
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


  const subExame = "Bexiga";
  const titulo_exame = "Rins e Vias Urinárias";

  useEffect(() => {
    if (Object.keys(FrasesBexiga).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        FrasesBexiga,
        ConclusaoBexiga
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        FrasesBexiga,
        ConclusaoBexiga
      ).Format_Laudo_Create_Storage();
    }
  }, [FrasesBexiga]);

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
            }}
          >
            Normal
          </Checkbox>

          <Checkbox
            isDisabled={VaziaCheckbox || Normalcheckbox || OmitirBexigaCheckbox}
            onChange={() => {
              setEsforcoCheckbox(!EsforcoCheckbox);
            }}
          >
            De esforço
          </Checkbox>

          <Checkbox
            isDisabled={OmitirBexigaCheckbox || EsforcoCheckbox || Normalcheckbox}
            onChange={() => {
              setVaziaCheckbox(!VaziaCheckbox);
            }}
          >
            Vazia
          </Checkbox>

          <Checkbox
            isDisabled={Normalcheckbox || EsforcoCheckbox || VaziaCheckbox}
            onChange={() => {
              setOmitirBexigaCheckbox(!OmitirBexigaCheckbox);
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
              isDisabled={!CalculoMedeCheckbox}
              value={distanciaCalculoInput}
              w="35px"
              h="30px"
              padding="0px"
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
              isDisabled={!DiverticuloMedeCheckbox}
              value={DiverticuloMedeInput}
              w="35px"
              h="30px"
              padding="0px"
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
              padding="0px"
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
