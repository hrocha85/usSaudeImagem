/* eslint-disable react-hooks/exhaustive-deps */
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

function Ovario_Esquerdo() {
  const altura = "100%";
  const largura = "95%";

  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);

  const [dopplerMedidasCheckBox, setdopplerMedidasCheckBox] =
    useState(false);
  const [disableInputsDoppler, setDisableInputsDoppler] = useState(true);


  const [MedidaEsquerdaIR, setMedidaEsquerdaIR] = useState("")
  const [MedidaEsquerdaIP, setMedidaEsquerdaIP] = useState("")

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
      var string = `Ovário Esquerdo mede ${medidaOvario1} x ${medidaOvario2} x ${medidaOvario3} mm `;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };

  const removeMedidasOvario = () => {
    laudoPrin.map((e) => {
      if (e.includes("Ovário Esquerdo")) {
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
    var string = "Ovário Esquerdo com padrão folicular ";
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
    var string = "Ovário Esquerdo com padrão micropolicístico ";
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
      var string = `Cisto no ovário Esquerdo com ${medida}mm ${cisto} `;
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
    var string = "Ovário Esquerdo não visibilizado ";
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


  const criaStringArteriaEsquerdaIR = (medida) => {
    removeStringArteriaEsquerdaIR()
    if (MedidaEsquerdaIR !== "") {
      var string = `Índice de resistência da artéria uterina 
      Esquerda: ${medida} (normal entre 0,6 e 0,9)`;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };
  const removeStringArteriaEsquerdaIR = () => {
    laudoPrin.map((e) => {
      if (e.includes(`Índice de resistência da artéria uterina 
      Esquerda`)) {
        var index = laudoPrin.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    criaStringArteriaEsquerdaIR(MedidaEsquerdaIR)
  }, [MedidaEsquerdaIR])

  const criaStringArteriaEsquerdaIP = (medida) => {
    removeStringArteriaEsquerdaIP()
    if (MedidaEsquerdaIP !== "") {
      var string = `Índice de pulsatilidade da artéria uterina 
      Esquerda: ${medida} (normal entre 1,5 e 3,0)`;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };
  const removeStringArteriaEsquerdaIP = () => {
    laudoPrin.map((e) => {
      if (e.includes(`Índice de pulsatilidade da artéria uterina 
      Esquerda`)) {
        var index = laudoPrin.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    criaStringArteriaEsquerdaIP(MedidaEsquerdaIP)
  }, [MedidaEsquerdaIP])

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

  useEffect(() => {
    if (dopplerMedidasCheckBox) {
      setDisableInputsDoppler(false)
    } else {
      setMedidaEsquerdaIR('')
      setMedidaEsquerdaIP('')
      removeStringArteriaEsquerdaIR()
      removeStringArteriaEsquerdaIP()
      setDisableInputsDoppler(true)
    }
  }, [dopplerMedidasCheckBox])


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
      <TituloNomeExame titulo="Ovário Esquerdo" />

      <Box display="flex" flexWrap="wrap" mt="20px">
        <Stack
          borderBottom='1px'>
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
        <Box
          mt='5px'
          color="red"
        >
          <Text
            w='100%'
            fontWeight="semibold" fontSize="16px">
            Doppler
          </Text>
          <Box
            display='flex'
            flexWrap='wrap'>
            <Checkbox
              onChange={() => setdopplerMedidasCheckBox(!dopplerMedidasCheckBox)}>
              Citar medidas
            </Checkbox>
            <Box>
              <Box
                mb='5px'
                alignItems='center'
                display='flex'
                gap='25px'
              >
                <Text>Artéria uterina esquerda</Text>
                <Box
                  alignItems='center'
                  display='flex'
                >
                  <Text mr='10px'>IR</Text>
                  <Input
                    isDisabled={disableInputsDoppler}
                    w="60px"
                    h="77x"
                    padding="5px"
                    value={MedidaEsquerdaIR}
                    maxLength={2}
                    textAlign="center"
                    onChange={(e) => { setMedidaEsquerdaIR(e.target.value) }}
                    placeholder={"mm"}
                  />
                </Box>
                <Box
                  alignItems='center'
                  display='flex'
                >
                  <Text mr='10px'>IP</Text>
                  <Input
                    isDisabled={disableInputsDoppler}
                    w="60px"
                    h="77x"
                    padding="5px"
                    value={MedidaEsquerdaIP}
                    maxLength={2}
                    textAlign="center"
                    onChange={(e) => { setMedidaEsquerdaIP(e.target.value) }}
                    placeholder={"mm"}
                  />
                </Box>
              </Box>
            </Box>
          </Box>

        </Box>
      </Box>
    </Box>
  );
}
export default Ovario_Esquerdo;
