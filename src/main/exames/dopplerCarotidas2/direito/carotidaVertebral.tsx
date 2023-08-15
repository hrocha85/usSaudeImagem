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

function CarotidaVertebralDireita() {
  const altura = "100%";
  const largura = "95%";

  const [frasesCarotidaVertebral, setFrasesCarotidaVertebral] = useState<any>(
    []
  );

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
  const [FluxoRetrogradoCheckBox, setFluxoRetrogradoCheckBox] = useState(true);

  //State Nao Visibilizado
  const [FluxoAusenteCheckBox, setFluxoAusenteCheckBox] = useState(true);

  //Funcoes Padrao Micropolicistico - Fim

  //Funcoes Placa - Inicio
  const criaStringPlaca = (medida, Placa) => {
    removePlaca();
    if (medida !== "") {
      const string = `Carótida Vertebral direita com placa ${Placa} medindo ${medida} mm `;
      setFrasesCarotidaVertebral((arr) => [...arr, string]);
    }
  };

  const removePlaca = () => {
    frasesCarotidaVertebral.map((e) => {
      if (e.includes("Carótida Vertebral direita")) {
        const index = frasesCarotidaVertebral.indexOf(e);

        if (index > -1) {
          frasesCarotidaVertebral.splice(index, 1);
          setFrasesCarotidaVertebral((arr) => [...arr]);
        }
      }
    });
  };
  //Funcoes Placa - Fim

  //Funcoes Padrao Micropolicistico - Inicio
  const criaStringFluxoRetrogrado = () => {
    const string = "Carótida Vertebral com fluxo retrógrado";
    if (FluxoRetrogradoCheckBox) {
      setFrasesCarotidaVertebral((arr) => [...arr, string]);
      setFluxoRetrogradoCheckBox(false);
    } else {
      removeItemString(string);
    }
  };

  //Função Nao Visibilizado
  const criaStringFluxoAusente = () => {
    const string = "Carótida Vertebral direita com fluxo ausente";
    if (FluxoAusenteCheckBox) {
      setFrasesCarotidaVertebral((arr) => [...arr, string]);
      setFluxoAusenteCheckBox(false);
    } else {
      removeItemString(string);
    }
  };

  const removeItemString = (value) => {
    const index = frasesCarotidaVertebral.indexOf(value);

    if (index > -1) {
      frasesCarotidaVertebral.splice(index, 1);
      setFrasesCarotidaVertebral((arr) => [...arr]);
    }
  };

  const criaStringMedidaDireitaVPS = (medida) => {
    removeStringMedidaDireitaVPS();
    if (MedidaDireitaVPS !== "") {
      const string = `Carótida Vertebral direita medindo: VPS(ACCD)  ${medida} cm/s `;
      setFrasesCarotidaVertebral((arr) => [...arr, string]);
    }
  };
  const removeStringMedidaDireitaVPS = () => {
    frasesCarotidaVertebral.map((e) => {
      if (e.includes(`Carótida Vertebral direita medindo: VPS(ACCD) `)) {
        const index = frasesCarotidaVertebral.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesCarotidaVertebral.splice(index, 1);
          setFrasesCarotidaVertebral((arr) => [...arr]);
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
      const string = `Carótida Vertebral direita medindo: EMI(ACCD)  ${medida} cm/s `;
      setFrasesCarotidaVertebral((arr) => [...arr, string]);
    }
  };
  const removeStringMedidaDireitaEMI = () => {
    frasesCarotidaVertebral.map((e) => {
      if (e.includes(`Carótida Vertebral direita medindo: EMI(ACCD) `)) {
        const index = frasesCarotidaVertebral.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesCarotidaVertebral.splice(index, 1);
          setFrasesCarotidaVertebral((arr) => [...arr]);
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
      const string = `Carótida Vertebral direita medindo: VDF(ACCD) ${medida} cm/s `;
      setFrasesCarotidaVertebral((arr) => [...arr, string]);
    }
  };
  const removeStringMedidaDireitaVDF = () => {
    frasesCarotidaVertebral.map((e) => {
      if (e.includes(`Carótida Vertebral direita medindo: VDF(ACCD) `)) {
        const index = frasesCarotidaVertebral.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesCarotidaVertebral.splice(index, 1);
          setFrasesCarotidaVertebral((arr) => [...arr]);
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

  const subExame = "Carótida Vertebral Direita";
  const titulo_exame = "Doppler das Carótidas 2";

  useEffect(() => {
    if (Object.keys(frasesCarotidaVertebral).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesCarotidaVertebral
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesCarotidaVertebral
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesCarotidaVertebral]);

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
      <TituloNomeExame titulo="Carótida Vertebral DIR." />

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
            <Box alignItems="center" display="flex">
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
              setFluxoAusenteCheckBox(true);
              criaStringFluxoAusente();
            }}
          >
            Fluxo Ausente
          </Checkbox>

          <Checkbox
            onChange={() => {
              setFluxoRetrogradoCheckBox(true);
              criaStringFluxoRetrogrado();
            }}
          >
            Fluxo Retrógrado
          </Checkbox>
        </Stack>
      </Box>
    </Box>
  );
}
export default CarotidaVertebralDireita;
