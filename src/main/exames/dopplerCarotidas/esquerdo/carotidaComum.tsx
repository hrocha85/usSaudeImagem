/* eslint-disable array-callback-return */

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

function CarotidaComumEsquerda() {
  const altura = "100%";
  const largura = "380px";

  const [frasesCarotidaEsquerda, setFrasesCarotidaEsquerda] = useState<any>([]);

  const [MedidasCheckBox, setMedidasCheckBox] = useState(false);
  const [disableInputsMedidas, setDisableInputsMedidas] = useState(true);

  const [MedidaEsquerdaVPS, setMedidaEsquerdaVPS] = useState("");
  const [MedidaEsquerdaVDF, setMedidaEsquerdaVDF] = useState("");
  const [MedidaEsquerdaEMI, setMedidaEsquerdaEMI] = useState("");
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
    const string = "Carótida Comum Esquerda com SubOclusão";
    if (SubOclusaoCheckBox) {
      setFrasesCarotidaEsquerda((arr) => [...arr, string]);
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
      const string = `Carótida comum Esquerda com placa ${Placa} medindo ${medida} mm `;
      setFrasesCarotidaEsquerda((arr) => [...arr, string]);
    }
  };

  const removePlaca = () => {
    frasesCarotidaEsquerda.map((e) => {
      if (e.includes("Carótida comum Esquerda")) {
        const index = frasesCarotidaEsquerda.indexOf(e);

        if (index > -1) {
          frasesCarotidaEsquerda.splice(index, 1);
          setFrasesCarotidaEsquerda((arr) => [...arr]);
        }
      }
    });
  };
  //Funcoes Placa - Fim

  //Função Nao Visibilizado
  const criaStringOclusao = () => {
    const string = "Carótida comum Esquerda com oclusão";
    if (OclusaoCheckBox) {
      setFrasesCarotidaEsquerda((arr) => [...arr, string]);
      setOclusaoCheckBox(false);
    } else {
      removeItemString(string);
    }
  };

  const removeItemString = (value) => {
    const index = frasesCarotidaEsquerda.indexOf(value);

    if (index > -1) {
      frasesCarotidaEsquerda.splice(index, 1);
      setFrasesCarotidaEsquerda((arr) => [...arr]);
    }
  };

  const criaStringMedidaEsquerdaVPS = (medida) => {
    removeStringMedidaEsquerdaVPS();
    if (MedidaEsquerdaVPS !== "") {
      const string = `Carótida comum Esquerda medindo: VPS(ACCD)  ${medida} cm/s `;
      setFrasesCarotidaEsquerda((arr) => [...arr, string]);
    }
  };
  const removeStringMedidaEsquerdaVPS = () => {
    frasesCarotidaEsquerda.map((e) => {
      if (e.includes(`Carótida comum Esquerda medindo: VPS(ACCD) `)) {
        const index = frasesCarotidaEsquerda.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesCarotidaEsquerda.splice(index, 1);
          setFrasesCarotidaEsquerda((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    criaStringMedidaEsquerdaVPS(MedidaEsquerdaVPS);
  }, [MedidaEsquerdaVPS]);

  const criaStringMedidaEsquerdaEMI = (medida) => {
    removeStringMedidaEsquerdaEMI();
    if (MedidaEsquerdaEMI !== "") {
      const string = `Carótida comum Esquerda medindo: EMI(ACCD)  ${medida} cm/s `;
      setFrasesCarotidaEsquerda((arr) => [...arr, string]);
    }
  };
  const removeStringMedidaEsquerdaEMI = () => {
    frasesCarotidaEsquerda.map((e) => {
      if (e.includes(`Carótida comum Esquerda medindo: EMI(ACCD) `)) {
        const index = frasesCarotidaEsquerda.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesCarotidaEsquerda.splice(index, 1);
          setFrasesCarotidaEsquerda((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    criaStringMedidaEsquerdaEMI(MedidaEsquerdaEMI);
  }, [MedidaEsquerdaEMI]);

  const criaStringMedidaEsquerdaVDF = (medida) => {
    removeStringMedidaEsquerdaVDF();
    if (MedidaEsquerdaVDF !== "") {
      const string = `Carótida comum Esquerda medindo: VDF(ACCD) ${medida} cm/s `;
      setFrasesCarotidaEsquerda((arr) => [...arr, string]);
    }
  };
  const removeStringMedidaEsquerdaVDF = () => {
    frasesCarotidaEsquerda.map((e) => {
      if (e.includes(`Carótida comum Esquerda medindo: VDF(ACCD) `)) {
        const index = frasesCarotidaEsquerda.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesCarotidaEsquerda.splice(index, 1);
          setFrasesCarotidaEsquerda((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    criaStringMedidaEsquerdaVDF(MedidaEsquerdaVDF);
  }, [MedidaEsquerdaVDF]);

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
      setMedidaEsquerdaVPS("");
      setMedidaEsquerdaVDF("");
      setMedidaEsquerdaEMI("");
      removeStringMedidaEsquerdaVPS();
      removeStringMedidaEsquerdaVDF();
      removeStringMedidaEsquerdaEMI();
      setDisableInputsMedidas(true);
    }
  }, [MedidasCheckBox]);

  const subExame = "Carótida Comum Esquerda";
  const titulo_exame = "Doppler das Carótidas";

  useEffect(() => {
    if (Object.keys(frasesCarotidaEsquerda).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesCarotidaEsquerda
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesCarotidaEsquerda
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesCarotidaEsquerda]);

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
      <TituloNomeExame titulo="Carótida comum ESQ." />

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
                value={MedidaEsquerdaVPS}

                textAlign="center"
                onChange={(e) => {
                  setMedidaEsquerdaVPS(e.target.value);
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
                value={MedidaEsquerdaVDF}

                textAlign="center"
                onChange={(e) => {
                  setMedidaEsquerdaVDF(e.target.value);
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
                value={MedidaEsquerdaEMI}

                textAlign="center"
                onChange={(e) => {
                  setMedidaEsquerdaEMI(e.target.value);
                }}
                placeholder={"mm"}
              />
              <Text mr="10px">mm</Text>
            </Box>
          </Box>
        </Box>

        <Stack>
          <Box alignItems='center' gap='5px' display='flex' flexWrap='wrap'>
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
          </Box>
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
export default CarotidaComumEsquerda;
