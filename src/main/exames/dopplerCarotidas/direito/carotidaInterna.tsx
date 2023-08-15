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

function CarotidaInternaDireita() {
  const altura = "100%";
  const largura = "380px";

  const [frasesCarotidaID, setFrasesCarotidaID] = useState<any>([]);

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

  const [AcotovelamentoCheckBox, setAcotovelamentoCheckBox] = useState(true);

  //State Nao Visibilizado
  const [OclusaoCheckBox, setOclusaoCheckBox] = useState(true);

  //Funcoes Padrao Micropolicistico - Fim

  //Funcoes Placa - Inicio
  const criaStringPlaca = (medida, Placa) => {
    removePlaca();
    if (medida !== "") {
      const string = `Carótida Interna direita com placa ${Placa} medindo ${medida} mm `;
      setFrasesCarotidaID((arr) => [...arr, string]);
    }
  };

  const removePlaca = () => {
    frasesCarotidaID.map((e) => {
      if (e.includes("Carótida Interna direita")) {
        const index = frasesCarotidaID.indexOf(e);

        if (index > -1) {
          frasesCarotidaID.splice(index, 1);
          setFrasesCarotidaID((arr) => [...arr]);
        }
      }
    });
  };
  //Funcoes Placa - Fim

  //Funcoes Padrao Micropolicistico - Inicio
  const criaStringSubOclusao = () => {
    const string = "Carótida Interna direita com SubOclusão";
    if (SubOclusaoCheckBox) {
      setFrasesCarotidaID((arr) => [...arr, string]);
      setSubOclusaoCheckBox(false);
    } else {
      removeItemString(string);
    }
  };

  //Função Nao Visibilizado
  const criaStringOclusao = () => {
    const string = "Carótida Interna direita com oclusão";
    if (OclusaoCheckBox) {
      setFrasesCarotidaID((arr) => [...arr, string]);
      setOclusaoCheckBox(false);
    } else {
      removeItemString(string);
    }
  };

  const removeItemString = (value) => {
    const index = frasesCarotidaID.indexOf(value);

    if (index > -1) {
      frasesCarotidaID.splice(index, 1);
      setFrasesCarotidaID((arr) => [...arr]);
    }
  };

  const criaStringAcotovelamento = () => {
    const string = "Carótida Interna direita com Acotovelamento";
    if (AcotovelamentoCheckBox) {
      setFrasesCarotidaID((arr) => [...arr, string]);
      setAcotovelamentoCheckBox(false);
    } else {
      removeItemString(string);
    }
  };

  const criaStringMedidaDireitaVPS = (medida) => {
    removeStringMedidaDireitaVPS();
    if (MedidaDireitaVPS !== "") {
      const string = `Carótida Interna direita medindo: VPS(ACCD)  ${medida} cm/s `;
      setFrasesCarotidaID((arr) => [...arr, string]);
    }
  };
  const removeStringMedidaDireitaVPS = () => {
    frasesCarotidaID.map((e) => {
      if (e.includes(`Carótida Interna direita medindo: VPS(ACCD) `)) {
        const index = frasesCarotidaID.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesCarotidaID.splice(index, 1);
          setFrasesCarotidaID((arr) => [...arr]);
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
      const string = `Carótida Interna direita medindo: EMI(ACCD)  ${medida} cm/s `;
      setFrasesCarotidaID((arr) => [...arr, string]);
    }
  };
  const removeStringMedidaDireitaEMI = () => {
    frasesCarotidaID.map((e) => {
      if (e.includes(`Carótida Interna direita medindo: EMI(ACCD) `)) {
        const index = frasesCarotidaID.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesCarotidaID.splice(index, 1);
          setFrasesCarotidaID((arr) => [...arr]);
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
      const string = `Carótida Interna direita medindo: VDF(ACCD) ${medida} cm/s `;
      setFrasesCarotidaID((arr) => [...arr, string]);
    }
  };
  const removeStringMedidaDireitaVDF = () => {
    frasesCarotidaID.map((e) => {
      if (e.includes(`Carótida Interna direita medindo: VDF(ACCD) `)) {
        const index = frasesCarotidaID.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesCarotidaID.splice(index, 1);
          setFrasesCarotidaID((arr) => [...arr]);
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

  const subExame = "Carótida Interna Direita";
  const titulo_exame = "Doppler das Carótidas";

  useEffect(() => {
    if (Object.keys(frasesCarotidaID).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesCarotidaID
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesCarotidaID
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesCarotidaID]);

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
      <TituloNomeExame titulo="Carótida Interna DIR." />

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
                w="45px"
                padding="0px"
                value={MedidaDireitaVPS}
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
                w="45px"
                padding="0px"
                value={MedidaDireitaVDF}
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
          <Box gap='5px' alignItems='center' display='flex' flexWrap='wrap'>
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
              padding="0px"
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
export default CarotidaInternaDireita;
