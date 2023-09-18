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

function CarotidaInternaEsquerda() {
  const altura = "100%";
  const largura = "380px";

  const [frasesCarotidaInterna, setFrasesCarotidaInterna] = useState<any>([]);

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

  const [AcotovelamentoCheckBox, setAcotovelamentoCheckBox] = useState(true);

  //State Nao Visibilizado
  const [OclusaoCheckBox, setOclusaoCheckBox] = useState(true);

  //Funcoes Padrao Micropolicistico - Fim

  //Funcoes Placa - Inicio
  const criaStringPlaca = (medida, Placa) => {
    removePlaca();
    if (medida !== "") {
      const string = `Carótida Interna Esquerda com placa ${Placa} medindo ${medida} mm `;
      setFrasesCarotidaInterna((arr) => [...arr, string]);
    }
  };

  const removePlaca = () => {
    frasesCarotidaInterna.map((e) => {
      if (e.includes("Carótida Interna Esquerda")) {
        const index = frasesCarotidaInterna.indexOf(e);

        if (index > -1) {
          frasesCarotidaInterna.splice(index, 1);
          setFrasesCarotidaInterna((arr) => [...arr]);
        }
      }
    });
  };
  //Funcoes Placa - Fim

  //Funcoes Padrao Micropolicistico - Inicio
  const criaStringSubOclusao = () => {
    const string = "Carótida Interna Esquerda com SubOclusão";
    if (SubOclusaoCheckBox) {
      setFrasesCarotidaInterna((arr) => [...arr, string]);
      setSubOclusaoCheckBox(false);
    } else {
      removeItemString(string);
    }
  };

  //Função Nao Visibilizado
  const criaStringOclusao = () => {
    const string = "Carótida Interna Esquerda com oclusão";
    if (OclusaoCheckBox) {
      setFrasesCarotidaInterna((arr) => [...arr, string]);
      setOclusaoCheckBox(false);
    } else {
      removeItemString(string);
    }
  };

  const removeItemString = (value) => {
    const index = frasesCarotidaInterna.indexOf(value);

    if (index > -1) {
      frasesCarotidaInterna.splice(index, 1);
      setFrasesCarotidaInterna((arr) => [...arr]);
    }
  };

  const criaStringAcotovelamento = () => {
    const string = "Carótida Interna Esquerda com Acotovelamento";
    if (AcotovelamentoCheckBox) {
      setFrasesCarotidaInterna((arr) => [...arr, string]);
      setAcotovelamentoCheckBox(false);
    } else {
      removeItemString(string);
    }
  };

  const criaStringMedidaEsquerdaVPS = (medida) => {
    removeStringMedidaEsquerdaVPS();
    if (MedidaEsquerdaVPS !== "") {
      const string = `Carótida Interna Esquerda medindo: VPS(ACCD)  ${medida} cm/s `;
      setFrasesCarotidaInterna((arr) => [...arr, string]);
    }
  };
  const removeStringMedidaEsquerdaVPS = () => {
    frasesCarotidaInterna.map((e) => {
      if (e.includes(`Carótida Interna Esquerda medindo: VPS(ACCD) `)) {
        const index = frasesCarotidaInterna.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesCarotidaInterna.splice(index, 1);
          setFrasesCarotidaInterna((arr) => [...arr]);
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
      const string = `Carótida Interna Esquerda medindo: EMI(ACCD)  ${medida} cm/s `;
      setFrasesCarotidaInterna((arr) => [...arr, string]);
    }
  };
  const removeStringMedidaEsquerdaEMI = () => {
    frasesCarotidaInterna.map((e) => {
      if (e.includes(`Carótida Interna Esquerda medindo: EMI(ACCD) `)) {
        const index = frasesCarotidaInterna.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesCarotidaInterna.splice(index, 1);
          setFrasesCarotidaInterna((arr) => [...arr]);
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
      const string = `Carótida Interna Esquerda medindo: VDF(ACCD) ${medida} cm/s `;
      setFrasesCarotidaInterna((arr) => [...arr, string]);
    }
  };
  const removeStringMedidaEsquerdaVDF = () => {
    frasesCarotidaInterna.map((e) => {
      if (e.includes(`Carótida Interna Esquerda medindo: VDF(ACCD) `)) {
        const index = frasesCarotidaInterna.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesCarotidaInterna.splice(index, 1);
          setFrasesCarotidaInterna((arr) => [...arr]);
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

  const subExame = "Carótida Interna Esquerda";
  const titulo_exame = "Doppler das Carótidas";

  useEffect(() => {
    if (Object.keys(frasesCarotidaInterna).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesCarotidaInterna
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesCarotidaInterna
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesCarotidaInterna]);

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
      <TituloNomeExame titulo="Carótida Interna ESQ." />

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
            <Box alignItems="center" display="flex">
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
          <Checkbox
            onChange={() => {
              setAcotovelamentoCheckBox(true);
              criaStringAcotovelamento();
            }}
          >
            Acotovelamento
          </Checkbox>
        </Stack>
      </Box>
    </Box>
  );
}
export default CarotidaInternaEsquerda;
