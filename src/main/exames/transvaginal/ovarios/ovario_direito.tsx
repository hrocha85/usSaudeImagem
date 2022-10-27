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

function Ovario_Direito() {
  const altura = "100%";
  const largura = "33%";

  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);

  //States medidas ovario - Inicio
  const [medidaOvario1, setmedidaOvario1] = useState("");
  const [medidaOvario2, setmedidaOvario2] = useState("");
  const [medidaOvario3, setmedidaOvario3] = useState("");
  //States medidas ovario - Fim

  //States cisto - input,checkbox e select - Inicio
  const [cistoInput, setCistoInput] = useState("");
  const [disableCistoInput, setdisableCistoInput] = useState(true);
  const [cistoCheckBox, setCistoCheckBox] = useState(false);
  const [cistoSelect, setCistoSelect] = useState("");

  const handleChangeCistoInput = (event) => {
    setCistoInput(event.target.value);
  };
  //States cisto - input,checkbox e select - Fim

  //State checkBox Padrao Micropolicistico
  const [padraoMicropolicisticoCheckBox, setpadraoMicropolicisticoCheckBox] =
    useState(false);

  //State Padrao Folicular
  const [padraoFolicularCheckBox, setpadraoFolicularCheckBox] = useState(false);

  //State Nao Visibilizado
  const [naoVisibilizadoCheckBox, setnaoVisibilizadoCheckBox] = useState(true);

  //Funcoes medidas ovario - Inicio
  const criaStringMedidasOvario = () => {
    if (medidaOvario1 != "" && medidaOvario2 != "" && medidaOvario3 != "") {
      var string = `Ovário Direito mede ${medidaOvario1} x ${medidaOvario2} x ${medidaOvario3} mm `;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };

  const removeMedidasOvario = () => {
    laudoPrin.map((e) => {
      if (e.includes("Ovário Direito")) {
        var index = laudoPrin.indexOf(e);

        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };
  //Funcoes medidas ovario - Fim

  //Funcoes Padrao Folicular - Inicio
  const criaStringPadraoFolicular = () => {
    var string = "Ovário direito com padrão folicular ";
    setLaudoPrin((arr) => [...arr, string]);
  };

  const removePadraoFolicular = () => {
    laudoPrin.map((e) => {
      if (e.includes("folicular")) {
        var index = laudoPrin.indexOf(e);

        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };
  //Funcoes Padrao Folicular - Fim

  //Funcoes Padrao Micropolicistico - Inicio
  const criaStringPadraoMicropolicistico = () => {
    var string = "Ovário direito com padrão micropolicístico ";
    setLaudoPrin((arr) => [...arr, string]);
    return string;
  };

  const removePadraoMicropolicistico = () => {
    laudoPrin.map((e) => {
      if (e.includes("micropolicístico")) {
        var index = laudoPrin.indexOf(e);

        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };
  //Funcoes Padrao Micropolicistico - Fim

  //Funcoes Cisto - Inicio
  const criaStringCisto = (medida, cisto) => {
    removeCisto();
    if (medida != "") {
      var string = `Cisto no ovário direito com ${medida}mm ${cisto} `;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };

  const removeCisto = () => {
    laudoPrin.map((e) => {
      if (e.includes("Cisto")) {
        var index = laudoPrin.indexOf(e);

        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };
  //Funcoes Cisto - Fim

  //Função Nao Visibilizado
  const criaStringNaoVisibilizado = () => {
    var string = "Ovário direito não visibilizado ";
    if (naoVisibilizadoCheckBox) {
      setLaudoPrin((arr) => [...arr, string]);
      setnaoVisibilizadoCheckBox(false);
    } else {
      removeItemString(string);
    }
  };

  const removeItemString = (value) => {
    var index = laudoPrin.indexOf(value);

    if (index > -1) {
      laudoPrin.splice(index, 1);
      setLaudoPrin((arr) => [...arr]);
    }
  };

  useEffect(() => {
    removeMedidasOvario();
    criaStringMedidasOvario();
  }, [medidaOvario1, medidaOvario2, medidaOvario3]);

  useEffect(() => {
    if (padraoMicropolicisticoCheckBox) {
      criaStringPadraoMicropolicistico();
    } else {
      removePadraoMicropolicistico();
    }
  }, [padraoMicropolicisticoCheckBox]);

  useEffect(() => {
    if (padraoFolicularCheckBox) {
      criaStringPadraoFolicular();
    } else {
      removePadraoFolicular();
    }
  }, [padraoFolicularCheckBox]);

  useEffect(() => {
    if (cistoCheckBox) {
      setdisableCistoInput(false);
    } else {
      removeCisto();
      setdisableCistoInput(true);
      setCistoInput("");
    }
  }, [cistoCheckBox]);

  useEffect(() => {
    criaStringCisto(cistoInput, cistoSelect);
  }, [cistoInput, cistoSelect]);

  return (
    <Box
      bg="#FAFAFA"
      w={largura}
      h={altura}
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="10.85px"
      boxShadow="md"
      padding="24px 15px 20px 15px"
      mt="15px"
    >
      <TituloNomeExame titulo="Ovário Direito" />

      <Box gap="30px" display="flex" flexWrap="wrap" mt="20px">
        <Stack>
          <Box w="200px">
            <Text>Medidas:</Text>
            <HStack marginTop="5px">
              <Input
                w="80px"
                h="30px"
                padding="5px"
                maxLength={2}
                textAlign="center"
                onChange={(e) => setmedidaOvario1(e.target.value)}
              />
              <Text>x</Text>
              <Input
                w="80px"
                h="30px"
                padding="5px"
                maxLength={2}
                textAlign="center"
                onChange={(e) => setmedidaOvario2(e.target.value)}
              />
              <Text>x</Text>
              <Input
                w="80px"
                h="30px"
                padding="5px"
                maxLength={2}
                textAlign="center"
                onChange={(e) => {
                  setmedidaOvario3(e.target.value);
                }}
              />
              <Text>mm</Text>
            </HStack>
          </Box>

          <Stack>
            <Checkbox
              onChange={() => {
                setnaoVisibilizadoCheckBox(true);
                criaStringNaoVisibilizado();
              }}
            >
              Não visibilizado
            </Checkbox>

            <Checkbox
              onChange={() =>
                setpadraoMicropolicisticoCheckBox(
                  !padraoMicropolicisticoCheckBox
                )
              }
            >
              Padrão micropolicístico
            </Checkbox>
            <Checkbox
              onChange={() =>
                setpadraoFolicularCheckBox(!padraoFolicularCheckBox)
              }
            >
              Padrão Folicular
            </Checkbox>

            <HStack>
              <Checkbox onChange={() => setCistoCheckBox(!cistoCheckBox)}>
                Cisto
              </Checkbox>
              <Input
                isDisabled={disableCistoInput}
                value={cistoInput}
                w="45px"
                h="30px"
                padding="5px"
                maxLength={2}
                textAlign="center"
                onChange={handleChangeCistoInput}
              />
              <Text>mm</Text>
              <Select
                isDisabled={disableCistoInput}
                onChange={(e) => {
                  setCistoSelect(e.target.value);
                }}
              >
                <option value="Cisto simples">Cisto Simples</option>
                <option value="Cisto septação fina">Cisto septação fina</option>
                <option value="Multiloculado">Multiloculado</option>
                <option value="Hemorrágico">Hemorrágico</option>
                <option value="Endometrioma">Endometrioma</option>
                <option value="Corpo lúteo">Corpo lúteo</option>
                <option value="Cisto dermóide">Cisto dermóide</option>
              </Select>
            </HStack>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
export default Ovario_Direito;
