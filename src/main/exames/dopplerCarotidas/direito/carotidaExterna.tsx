/* eslint-disable array-callback-return */
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

function CarotidaExternaDireita() {
  const altura = "100%";
  const largura = "95%";

  const [frasesCarotidaExterna, setFrasesCarotidaExterna] = useState<any>([]);

  const [MedidasCheckBox, setMedidasCheckBox] = useState(false);
  const [disableInputsMedidas, setDisableInputsMedidas] = useState(true);

  const [MedidaDireitaVPS, setMedidaDireitaVPS] = useState("");
  const [MedidaDireitaVDF, setMedidaDireitaVDF] = useState("");
  const [MedidaDireitaEMI, setMedidaDireitaEMI] = useState("");
  //States Placa - input,checkbox e select - Inicio
  const [PlacaInput, setPlacaInput] = useState("");
  const [disablePlacaInput, setdisablePlacaInput] = useState(true);
  const [PlacaCheckBox, setPlacaCheckBox] = useState(false);
  const [PlacaSelect, setPlacaSelect] = useState("");

  //States Placa - input,checkbox e select - Fim

  //State checkBox Padrao Micropolicistico
  const [SubOclusaoCheckBox, setSubOclusaoCheckBox] = useState(true);

  const [NaoVisibilizadaCheckBox, setNaoVisibilizadaCheckBox] = useState(true);

  //State Nao Visibilizado
  const [OclusaoCheckBox, setOclusaoCheckBox] = useState(true);

  //Funcoes Padrao Micropolicistico - Fim

  //Funcoes Placa - Inicio
  const criaStringPlaca = (medida, Placa) => {
    removePlaca();
    if (medida !== "") {
      var string = `Carótida Externa direita com placa ${Placa} medindo ${medida} mm `;
      setFrasesCarotidaExterna((arr) => [...arr, string]);
    }
  };

  const removePlaca = () => {
    frasesCarotidaExterna.map((e) => {
      if (e.includes("Carótida Externa direita")) {
        var index = frasesCarotidaExterna.indexOf(e);

        if (index > -1) {
          frasesCarotidaExterna.splice(index, 1);
          setFrasesCarotidaExterna((arr) => [...arr]);
        }
      }
    });
  };
  //Funcoes Placa - Fim

  //Funcoes Padrao Micropolicistico - Inicio
  const criaStringSubOclusao = () => {
    var string = "Carótida Externa direita com SubOclusão";
    if (SubOclusaoCheckBox) {
      setFrasesCarotidaExterna((arr) => [...arr, string]);
      setSubOclusaoCheckBox(false);
    } else {
      removeItemString(string);
    }
  };

  //Função Nao Visibilizado
  const criaStringOclusao = () => {
    var string = "Carótida Externa direita com oclusão";
    if (OclusaoCheckBox) {
      setFrasesCarotidaExterna((arr) => [...arr, string]);
      setOclusaoCheckBox(false);
    } else {
      removeItemString(string);
    }
  };

  const removeItemString = (value) => {
    var index = frasesCarotidaExterna.indexOf(value);

    if (index > -1) {
      frasesCarotidaExterna.splice(index, 1);
      setFrasesCarotidaExterna((arr) => [...arr]);
    }
  };

  const criaStringNaoVisibilizada = () => {
    var string = "Carótida Externa direita não visibilizada (intra-craniana)";
    if (NaoVisibilizadaCheckBox) {
      setFrasesCarotidaExterna((arr) => [...arr, string]);
      setNaoVisibilizadaCheckBox(false);
    } else {
      removeItemString(string);
    }
  };

  const criaStringMedidaDireitaVPS = (medida) => {
    removeStringMedidaDireitaVPS();
    if (MedidaDireitaVPS !== "") {
      var string = `Carótida Externa direita medindo: VPS(ACCD)  ${medida} cm/s `;
      setFrasesCarotidaExterna((arr) => [...arr, string]);
    }
  };
  const removeStringMedidaDireitaVPS = () => {
    frasesCarotidaExterna.map((e) => {
      if (e.includes(`Carótida Externa direita medindo: VPS(ACCD) `)) {
        var index = frasesCarotidaExterna.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesCarotidaExterna.splice(index, 1);
          setFrasesCarotidaExterna((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    criaStringMedidaDireitaVPS(MedidaDireitaVPS);
  }, [MedidaDireitaVPS]);

  const criaStringMedidaDireitaEMI = (medida) => {
    removeStringMedidaDireitaEMI();
    if (MedidaDireitaEMI !== "") {
      var string = `Carótida Externa direita medindo: EMI(ACCD)  ${medida} cm/s `;
      setFrasesCarotidaExterna((arr) => [...arr, string]);
    }
  };
  const removeStringMedidaDireitaEMI = () => {
    frasesCarotidaExterna.map((e) => {
      if (e.includes(`Carótida Externa direita medindo: EMI(ACCD) `)) {
        var index = frasesCarotidaExterna.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesCarotidaExterna.splice(index, 1);
          setFrasesCarotidaExterna((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    criaStringMedidaDireitaEMI(MedidaDireitaEMI);
  }, [MedidaDireitaEMI]);

  const criaStringMedidaDireitaVDF = (medida) => {
    removeStringMedidaDireitaVDF();
    if (MedidaDireitaVDF !== "") {
      var string = `Carótida Externa direita medindo: VDF(ACCD) ${medida} cm/s `;
      setFrasesCarotidaExterna((arr) => [...arr, string]);
    }
  };
  const removeStringMedidaDireitaVDF = () => {
    frasesCarotidaExterna.map((e) => {
      if (e.includes(`Carótida Externa direita medindo: VDF(ACCD) `)) {
        var index = frasesCarotidaExterna.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesCarotidaExterna.splice(index, 1);
          setFrasesCarotidaExterna((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    criaStringMedidaDireitaVDF(MedidaDireitaVDF);
  }, [MedidaDireitaVDF]);

  useEffect(() => {
    if (PlacaCheckBox) {
      setdisablePlacaInput(false);
    } else {
      removePlaca();
      setdisablePlacaInput(true);
      setPlacaInput("");
    }
  }, [PlacaCheckBox]);

  useEffect(() => {
    criaStringPlaca(PlacaInput, PlacaSelect);
  }, [PlacaInput, PlacaSelect]);

  useEffect(() => {
    if (MedidasCheckBox) {
      setDisableInputsMedidas(false);
    } else {
      setMedidaDireitaVPS("");
      setMedidaDireitaVDF("");
      setMedidaDireitaEMI("");
      removeStringMedidaDireitaVPS();
      removeStringMedidaDireitaVDF();
      removeStringMedidaDireitaEMI();
      setDisableInputsMedidas(true);
    }
  }, [MedidasCheckBox]);

  const subExame = "Carótida Externa Direita";
  const titulo_exame = "Doppler das Carótidas";

  useEffect(() => {
    if (Object.keys(frasesCarotidaExterna).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesCarotidaExterna
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesCarotidaExterna
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesCarotidaExterna]);

  return (
    <Box
      bg="#FAFAFA"
      w={largura}
      h={altura}
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="10.85px"
      boxShadow="md"
      padding="15px"
      mt="15px"
    >
      <TituloNomeExame titulo="Carótida Externa DIR." />

      <Box display="flex" flexWrap="wrap">
        <Box display="flex" flexWrap="wrap">
          <Checkbox
            mr="20px"
            onChange={() => setMedidasCheckBox(!MedidasCheckBox)}
          >
            Citar medidas
          </Checkbox>

          <Box mb="5px" alignItems="center">
            <Box alignItems="center" display="flex" mb="5px">
              <Text mr="10px">VPS</Text>
              <Input
                isDisabled={disableInputsMedidas}
                w="60px"
                h="77x"
                padding="5px"
                value={MedidaDireitaVPS}
                maxLength={2}
                textAlign="center"
                onChange={(e) => {
                  setMedidaDireitaVPS(e.target.value);
                }}
                placeholder={"00"}
              />
              <Text mr="10px">cm/s</Text>
            </Box>
            <Box alignItems="center" display="flex">
              <Text mr="10px">VDF</Text>
              <Input
                isDisabled={disableInputsMedidas}
                w="60px"
                h="77x"
                padding="5px"
                value={MedidaDireitaVDF}
                maxLength={2}
                textAlign="center"
                onChange={(e) => {
                  setMedidaDireitaVDF(e.target.value);
                }}
                placeholder={"00"}
              />
              <Text mr="10px">cm/s</Text>
            </Box>
          </Box>
        </Box>

        <Stack>
          <HStack>
            <Checkbox onChange={() => setPlacaCheckBox(!PlacaCheckBox)}>
              Placa
            </Checkbox>
            <Select
              w="170px"
              isDisabled={disablePlacaInput}
              onChange={(e) => {
                setPlacaSelect(e.target.value);
              }}
            >
              <option value="não complicada">não complicada</option>
              <option value="complicada">complicada</option>
            </Select>
            <Input
              isDisabled={disablePlacaInput}
              value={PlacaInput}
              w="45px"
              h="30px"
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => {
                setPlacaInput(e.target.value);
              }}
            />
            <Text>mm</Text>
          </HStack>
          <Checkbox
            onChange={() => {
              setOclusaoCheckBox(true);
              criaStringOclusao();
            }}
          >
            Oclusão
          </Checkbox>

          <Checkbox
            onChange={() => {
              setSubOclusaoCheckBox(true);
              criaStringSubOclusao();
            }}
          >
            SubOclusão
          </Checkbox>
          <Checkbox
            onChange={() => {
              setNaoVisibilizadaCheckBox(true);
              criaStringNaoVisibilizada();
            }}
          >
            Não visibilizada (intra-craniana)
          </Checkbox>
        </Stack>
      </Box>
    </Box>
  );
}
export default CarotidaExternaDireita;
