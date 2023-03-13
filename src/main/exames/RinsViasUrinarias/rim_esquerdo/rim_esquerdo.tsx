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

function RimEsquerdo() {
  const altura = "100%";
  const largura = "66%";

  const [frasesRimE, setFrasesRimE] = useState<any>([]);

  const [checkboxMedidas, setCheckboxMedidas] = useState(false);
  const [disableMedidas, setDisableMedidas] = useState(true);
  const [valueInput1Medida, setValueInput1Medida] = useState("");
  const [valueInput2Medida, setValueInput2Medida] = useState("");
  const [valueParenquima, setValueParenquima] = useState("");

  const [checkboxPresente, setCheckboxPresente] = useState(true);
  const [disablePresente, setDisablePresente] = useState(false);

  const [checkboxAusente, setCheckboxAusente] = useState(false);
  const [disableAusente, setDisableAusente] = useState(false);
  const [disableSelectAusente, setDisableSelectAusente] = useState(true);
  const [valueSelectAusente, setValueSelectAusente] = useState("");

  const [checkboxDimensoes, setCheckboxDimensoes] = useState(false);

  const [checkboxRimFerradura, setCheckboxRimFerradura] = useState(false);
  const [checkboxNefropatiaCronica, setCheckboxNefropatiaCronica] =
    useState(false);
  const [checkboxRimPelvico, setCheckboxRimPelvico] = useState(false);

  const removeItemString = (value) => {
    var index = frasesRimE.indexOf(value);

    if (index > -1) {
      frasesRimE.splice(index, 1);
      setFrasesRimE((arr) => [...arr]);
    }
  };

  const CriaStringMedidas = () => {
    removeStringMedidas();
    if (checkboxMedidas) {
      setDisableMedidas(false);
      if (valueInput1Medida.length == 4 && valueParenquima.length == 4) {
        const valorInput = `Rim Esquerdo medindo ${valueInput1Medida} mm  e parênquima de ${valueParenquima} mm `;
        setFrasesRimE((arr) => [...arr, valorInput]);
      }
    } else {
      setDisableMedidas(true);
      removeStringMedidas();
      setValueInput1Medida("");
      setValueInput2Medida("");
      setValueParenquima("");
    }
  };

  const removeStringMedidas = () => {
    frasesRimE.map((e) => {
      if (e.includes("Rim Esquerdo medindo")) {
        let index = frasesRimE.indexOf(e);

        if (index > -1) {
          frasesRimE.splice(index, 1);
          setFrasesRimE((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringPresente = () => {
    let string = "Rim Esquerdo Presente";
    if (checkboxPresente) {
      setFrasesRimE((arr) => [...arr, string]);
      setCheckboxPresente(false);
      setDisableAusente(true);
      setDisableSelectAusente(true);
      removeFraseAusente();
    } else {
      setDisableAusente(false);
      removeItemString(string);
    }
  };

  const criaStringDimensoesReduzidas = () => {
    let string = "Dimensões reduzidas";
    if (checkboxDimensoes) {
      setFrasesRimE((arr) => [...arr, string]);
    } else {
      removeItemString(string);
    }
  };

  const criaStringAusente = () => {
    removeFraseAusente();
    if (checkboxAusente) {
      console.log(valueSelectAusente);
      setDisableSelectAusente(false);
      setDisablePresente(true);
      if (valueSelectAusente !== "") {
        let string = `Rim Esquerdo ausente ${valueSelectAusente}`;
        setFrasesRimE((arr) => [...arr, string]);
      }
    } else {
      setDisablePresente(false);
      setDisableSelectAusente(true);
      setValueSelectAusente("");
    }
  };

  const removeFraseAusente = () => {
    frasesRimE.map((e) => {
      if (e.includes("Rim Esquerdo ausente")) {
        let index = frasesRimE.indexOf(e);

        if (index > -1) {
          frasesRimE.splice(index, 1);
          setFrasesRimE((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringNefropatiaCronica = () => {
    let string = "Rim Esquerdo com nefropatia crônica";
    if (checkboxNefropatiaCronica) {
      setFrasesRimE((arr) => [...arr, string]);
    } else {
      removeItemString(string);
    }
  };

  const criaStringRimFerradura = () => {
    let string = "Rim Esquerdo em Ferradura";
    if (checkboxRimFerradura) {
      setFrasesRimE((arr) => [...arr, string]);
    } else {
      removeItemString(string);
    }
  };

  const criaStringRimPelvico = () => {
    let string = "Rim Esquerdo pélvico";
    if (checkboxRimPelvico) {
      setFrasesRimE((arr) => [...arr, string]);
    } else {
      removeItemString(string);
    }
  };

  useEffect(() => {
    CriaStringMedidas();
    removeStringMedidas();
  }, [checkboxMedidas, valueInput1Medida, valueInput2Medida, valueParenquima]);

  useEffect(() => {
    criaStringDimensoesReduzidas();
  }, [checkboxDimensoes]);

  useEffect(() => {
    criaStringAusente();
  }, [valueSelectAusente, checkboxAusente]);

  useEffect(() => {
    criaStringRimFerradura();
  }, [checkboxRimFerradura]);

  useEffect(() => {
    criaStringNefropatiaCronica();
  }, [checkboxNefropatiaCronica]);

  useEffect(() => {
    criaStringRimPelvico();
  }, [checkboxRimPelvico]);

  const subExame = "Rim Esquerdo";
  const titulo_exame = "Rins e Vias Urinárias";

  useEffect(() => {
    if (Object.keys(frasesRimE).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesRimE
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesRimE
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesRimE]);

  return (
    <Box
      bg="#FAFAFA"
      w={largura}
      h={altura}
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="10.85px"
      boxShadow="md"
      padding="24px 15px 10px 15px"
      mt="20px"
    >
      <Box mb="20px">
        <TituloNomeExame titulo="Rim Esquerdo" />

        <Box
          borderBottom="1px"
          gap="25px"
          display="flex"
          flexWrap="wrap"
          mb="10px"
        >
          <Box w="100px">
            <Checkbox
              value="Rim Esquerdo presente"
              disabled={disablePresente}
              onChange={() => {
                setCheckboxPresente(true);
                criaStringPresente();
              }}
            >
              Presente
            </Checkbox>
          </Box>

          <Box w="150px">
            <Checkbox
              isDisabled={disableAusente}
              onChange={(e) => {
                setCheckboxAusente(!checkboxAusente);
              }}
            >
              Ausente
            </Checkbox>
            <Select
              isDisabled={disableSelectAusente}
              onChange={(e) => {
                setValueSelectAusente(e.target.value);
              }}
              value={valueSelectAusente}
              w="100%"
            >
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="Ausência Cirurgica">Ausência cirúrgica</option>
              <option value="Interposição Gasosa">Interposição gasosa</option>
            </Select>
          </Box>
          <Stack paddingBottom="5px">
            <HStack w="220px">
              <Checkbox
                id="Medidas"
                onChange={(e) => {
                  setCheckboxMedidas(!checkboxMedidas);
                }}
              >
                Medidas
              </Checkbox>
              <Input
                value={valueInput1Medida}
                onChange={(e) => {
                  setValueInput1Medida(e.target.value);
                }}
                isDisabled={disableMedidas}
                w="auto"
                placeholder="00"
              />
              <Text>mm</Text>
            </HStack>
            <Input
              value={valueParenquima}
              onChange={(e) => {
                setValueParenquima(e.target.value);
              }}
              isDisabled={disableMedidas}
              mt="5px"
              w="auto"
              maxWidth="173px"
              placeholder="Parênquima(mm)"
            />
          </Stack>

          <Box w="200px">
            <Checkbox
              onChange={(e) => {
                setCheckboxDimensoes(!checkboxDimensoes);
              }}
            >
              Dimensões Reduzidas
            </Checkbox>
          </Box>
        </Box>
        <Box gap="25px" display="flex" flexWrap="wrap" mb="10px">
          <Box w="160px">
            <Checkbox
              onChange={(e) => {
                setCheckboxRimFerradura(!checkboxRimFerradura);
              }}
            >
              Rim em Ferradura
            </Checkbox>
          </Box>

          <Box w="160px">
            <Checkbox
              onChange={(e) => {
                setCheckboxNefropatiaCronica(!checkboxNefropatiaCronica);
              }}
            >
              Nefropatia Crônica
            </Checkbox>
          </Box>

          <Box w="160px">
            <Checkbox
              onChange={(e) => {
                setCheckboxRimPelvico(!checkboxRimPelvico);
              }}
            >
              Rim Pélvico
            </Checkbox>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default RimEsquerdo;
