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

function CarotidaComumDireita() {
  const altura = "100%";
  const largura = "95%";

  const [frasesCarotidaComum, setFrasesCarotidaComum] = useState<any>([]);

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

  //State Nao Visibilizado
  const [OclusaoCheckBox, setOclusaoCheckBox] = useState(true);

  //Funcoes Padrao Micropolicistico - Inicio
  const criaStringSubOclusao = () => {
    var string = "Carótida Comum direita com SubOclusão";
    if (SubOclusaoCheckBox) {
      setFrasesCarotidaComum((arr) => [...arr, string]);
      setSubOclusaoCheckBox(false);
    } else {
      removeItemString(string);
    }
  };
  //Funcoes Padrao Micropolicistico - Fim

  //Funcoes Placa - Inicio
  const criaStringPlaca = (medida, Placa) => {
    removePlaca();
    if (medida !== "") {
      var string = `Carótida comum direita com placa ${Placa} medindo ${medida} mm `;
      setFrasesCarotidaComum((arr) => [...arr, string]);
    }
  };

  const removePlaca = () => {
    frasesCarotidaComum.map((e) => {
      if (e.includes("Carótida comum direita")) {
        var index = frasesCarotidaComum.indexOf(e);

        if (index > -1) {
          frasesCarotidaComum.splice(index, 1);
          setFrasesCarotidaComum((arr) => [...arr]);
        }
      }
    });
  };
  //Funcoes Placa - Fim

  //Função Nao Visibilizado
  const criaStringOclusao = () => {
    var string = "Carótida comum direita com oclusão";
    if (OclusaoCheckBox) {
      setFrasesCarotidaComum((arr) => [...arr, string]);
      setOclusaoCheckBox(false);
    } else {
      removeItemString(string);
    }
  };

  const removeItemString = (value) => {
    var index = frasesCarotidaComum.indexOf(value);

    if (index > -1) {
      frasesCarotidaComum.splice(index, 1);
      setFrasesCarotidaComum((arr) => [...arr]);
    }
  };

  const criaStringMedidaDireitaVPS = (medida) => {
    removeStringMedidaDireitaVPS();
    if (MedidaDireitaVPS !== "") {
      var string = `Carótida comum direita medindo: VPS(ACCD)  ${medida} cm/s `;
      setFrasesCarotidaComum((arr) => [...arr, string]);
    }
  };
  const removeStringMedidaDireitaVPS = () => {
    frasesCarotidaComum.map((e) => {
      if (e.includes(`Carótida comum direita medindo: VPS(ACCD) `)) {
        var index = frasesCarotidaComum.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesCarotidaComum.splice(index, 1);
          setFrasesCarotidaComum((arr) => [...arr]);
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
      var string = `Carótida comum direita medindo: EMI(ACCD)  ${medida} cm/s `;
      setFrasesCarotidaComum((arr) => [...arr, string]);
    }
  };
  const removeStringMedidaDireitaEMI = () => {
    frasesCarotidaComum.map((e) => {
      if (e.includes(`Carótida comum direita medindo: EMI(ACCD) `)) {
        var index = frasesCarotidaComum.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesCarotidaComum.splice(index, 1);
          setFrasesCarotidaComum((arr) => [...arr]);
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
      var string = `Carótida comum direita medindo: VDF(ACCD) ${medida} cm/s `;
      setFrasesCarotidaComum((arr) => [...arr, string]);
    }
  };
  const removeStringMedidaDireitaVDF = () => {
    frasesCarotidaComum.map((e) => {
      if (e.includes(`Carótida comum direita medindo: VDF(ACCD) `)) {
        var index = frasesCarotidaComum.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesCarotidaComum.splice(index, 1);
          setFrasesCarotidaComum((arr) => [...arr]);
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

  const subExame = "Carótida Comum Direita";
  const titulo_exame = "Doppler das Carótidas 2";

  useEffect(() => {
    if (Object.keys(frasesCarotidaComum).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesCarotidaComum
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesCarotidaComum
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesCarotidaComum]);

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
      <TituloNomeExame titulo="Carótida comum DIR." />

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
                
                textAlign="center"
                onChange={(e) => {
                  setMedidaDireitaVPS(e.target.value);
                }}
                placeholder={"00"}
              />
              <Text mr="10px">cm/s</Text>
            </Box>
            <Box alignItems="center" display="flex" mb="5px">
              <Text mr="10px">VDF</Text>
              <Input
                isDisabled={disableInputsMedidas}
                w="60px"
                h="77x"
                padding="5px"
                value={MedidaDireitaVDF}
                
                textAlign="center"
                onChange={(e) => {
                  setMedidaDireitaVDF(e.target.value);
                }}
                placeholder={"00"}
              />
              <Text mr="10px">cm/s</Text>
            </Box>
            <Box alignItems="center" display="flex">
              <Text mr="10px">EMI</Text>
              <Input
                isDisabled={disableInputsMedidas}
                w="60px"
                h="77x"
                padding="5px"
                value={MedidaDireitaEMI}
                
                textAlign="center"
                onChange={(e) => {
                  setMedidaDireitaEMI(e.target.value);
                }}
                placeholder={"mm"}
              />
              <Text mr="10px">mm</Text>
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
        </Stack>
      </Box>
    </Box>
  );
}
export default CarotidaComumDireita;
