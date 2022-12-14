/* eslint-disable array-callback-return */
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
import IndividualizarNodulos from "./individualizar_nodulos";

function Miometrio() {
  const altura = "100%";
  const largura = "66%";

  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);
  var numberArray = [1, 2, 3, 4, 5];


  const [DisableSelect, setDisableSelect] =
    useState(true);

  const [disableInputsDoppler, setDisableInputsDoppler] = useState(true);
  const [dopplerMedidasCheckBox, setdopplerMedidasCheckBox] =
    useState(false);

  const [MedidaDireitaIR, setMedidaDireitaIR] = useState("")
  const [MedidaDireitaIP, setMedidaDireitaIP] = useState("")

  const [MedidaEsquerdaIR, setMedidaEsquerdaIR] = useState("")
  const [MedidaEsquerdaIP, setMedidaEsquerdaIP] = useState("")

  const [tamanhoNoduloInput, settamanhoNoduloInput] = useState("");
  const [posicaoNodulosSelect, setPosicaoNodulosSelect] = useState("");
  const [localizacaoNodulosSelect, setlocalizacaoNodulosSelect] = useState("");

  const [multiplosNodulosCheckBox, setmultiplosNodulosCheckBox] =
    useState(false);

  const [VascularizacaoNormalCheckBox, setVascularizacaoNormalCheckBox] = useState(false);
  const [DisableVascularizacaoNormalCheckBox, setDisableVascularizacaoNormalCheckBox] = useState(false);

  const [DopplerNodulosSelect, setDopplerNodulosSelect] = useState("");

  const [VascularizacaoAumentadaCheckBox, setVascularizacaoAumentadaCheckBox] = useState(false);
  const [DisableVascularizacaoAumentadaCheckBox, setDisableVascularizacaoAumentadaCheckBox] = useState(false);

  const [miometrioSemNodulosCheckBox, setmiometrioSemNodulosCheckBox] = useState(true);

  const handleChangeNoduloInput = (event) => {
    settamanhoNoduloInput(event.target.value);
  };

  const criaStringMultiplosNodulos = (tamanhoNoduloInput, nodulosSelect, localizado, DopplerNodulosSelect) => {
    removeMultiplosNodulos();
    var string;
    if (DopplerNodulosSelect !== '' && tamanhoNoduloInput !== "" && nodulosSelect !== "" && localizado !== "") {
      string = `Múltiplos nódulos de mioma, o maior mede ${tamanhoNoduloInput}mm ${nodulosSelect} localizado ${localizado}, doppler ${DopplerNodulosSelect} `;
      setLaudoPrin((arr) => [...arr, string]);
    } else if (tamanhoNoduloInput !== "" && nodulosSelect !== "" && localizado !== "") {
      string = `Múltiplos nódulos de mioma, o maior mede ${tamanhoNoduloInput}mm ${nodulosSelect} localizado ${localizado} `;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };

  useEffect(() => {
    var string = "Miométrio com vascularização normal";
    if (VascularizacaoNormalCheckBox) {
      setLaudoPrin((arr) => [...arr, string]);
      setDisableVascularizacaoAumentadaCheckBox(true)
    } else {
      setDisableVascularizacaoAumentadaCheckBox(false)
      setVascularizacaoNormalCheckBox(false);
      removeItemString(string);
    }
  }, [VascularizacaoNormalCheckBox])

  useEffect(() => {
    var string = "Miométrio com vascularização Aumentada";
    if (VascularizacaoAumentadaCheckBox) {
      setLaudoPrin((arr) => [...arr, string]);
      setDisableVascularizacaoNormalCheckBox(true)
    } else {
      setDisableVascularizacaoNormalCheckBox(false)
      setVascularizacaoAumentadaCheckBox(false);
      removeItemString(string);
    }
  }, [VascularizacaoAumentadaCheckBox])

  const removeMultiplosNodulos = () => {
    laudoPrin.map((e) => {
      if (e.includes("mioma")) {
        var index = laudoPrin.indexOf(e);

        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };


  const criaStringMiometrioSemNodulos = () => {
    var string = "Miométrio heterogêneo sem nódulos ";
    if (miometrioSemNodulosCheckBox) {
      setLaudoPrin((arr) => [...arr, string]);
      setmiometrioSemNodulosCheckBox(false);
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

  const criaStringArteriaDireitaIR = (medida) => {
    removeStringArteriaDireitaIR()
    if (MedidaDireitaIR !== "") {
      var string = `Índice de resistência da artéria uterina 
      direita: ${medida} (normal entre 0,6 e 0,9)`;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };
  const removeStringArteriaDireitaIR = () => {
    laudoPrin.map((e) => {
      if (e.includes(`Índice de resistência da artéria uterina 
      direita`)) {
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
    criaStringArteriaDireitaIR(MedidaDireitaIR)
  }, [MedidaDireitaIR])

  const criaStringArteriaDireitaIP = (medida) => {
    removeStringArteriaDireitaIP()
    if (MedidaDireitaIP !== "") {
      var string = `Índice de pulsatilidade da artéria uterina 
      direita: ${medida} (normal entre 1,5 e 3,0)`;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };
  const removeStringArteriaDireitaIP = () => {
    laudoPrin.map((e) => {
      if (e.includes(`Índice de pulsatilidade da artéria uterina 
      direita`)) {
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
    criaStringArteriaDireitaIP(MedidaDireitaIP)
  }, [MedidaDireitaIP])

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
    if (dopplerMedidasCheckBox) {
      setDisableInputsDoppler(false)
    } else {
      setMedidaDireitaIR('')
      setMedidaDireitaIP('')
      setMedidaEsquerdaIR('')
      setMedidaEsquerdaIP('')
      removeStringArteriaDireitaIR()
      removeStringArteriaDireitaIP()
      removeStringArteriaEsquerdaIR()
      removeStringArteriaEsquerdaIP()
      setDisableInputsDoppler(true)
    }
  }, [dopplerMedidasCheckBox])

  useEffect(() => {
    if (multiplosNodulosCheckBox) {
      criaStringMultiplosNodulos(
        tamanhoNoduloInput,
        posicaoNodulosSelect,
        localizacaoNodulosSelect,
        DopplerNodulosSelect
      );
      setDisableSelect(false)
    } else {
      setDisableSelect(true)
      removeMultiplosNodulos();
      settamanhoNoduloInput("");
      setPosicaoNodulosSelect("");
      setlocalizacaoNodulosSelect("");
      setDopplerNodulosSelect("")
    }
  }, [
    multiplosNodulosCheckBox,
    posicaoNodulosSelect,
    tamanhoNoduloInput,
    localizacaoNodulosSelect,
    DopplerNodulosSelect
  ]);

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
      <TituloNomeExame titulo="Miométrio" />

      <Box gap="30px" display="flex" flexWrap="wrap" mt="20px">
        <Stack>
          <Box>
            <Checkbox
              onChange={() => {
                setmiometrioSemNodulosCheckBox(true);
                criaStringMiometrioSemNodulos();
              }}
            >
              Miométrio heterogêneo sem nódulos
            </Checkbox>
            <Box
              gap='10px'
              display='flex'
              flexWrap="wrap"
            >
              <Checkbox
                whiteSpace="nowrap"
                isDisabled={!miometrioSemNodulosCheckBox}
                onChange={() =>
                  setmultiplosNodulosCheckBox(!multiplosNodulosCheckBox)
                }
              >
                Múltiplos nódulos de mioma, o maior mede
              </Checkbox>
              <Input
                isDisabled={DisableSelect}
                value={tamanhoNoduloInput}
                w="60px"
                h="77x"
                padding="5px"
                maxLength={2}
                textAlign="center"
                onChange={handleChangeNoduloInput}
                placeholder={"mm"}
              />
              <Select
                w="auto"
                isDisabled={DisableSelect}
                onChange={(e) => {
                  setPosicaoNodulosSelect(e.target.value);
                }}
                value={posicaoNodulosSelect}
              >
                <option value="" disabled selected>
                  Posição
                </option>
                <option value="Intramural">Intramural</option>
                <option value="Subseroso">Subseroso </option>
                <option value="Submucoso">Submucoso</option>
              </Select>

              <Select
                w="auto"
                isDisabled={DisableSelect}
                onChange={(e) => {
                  setlocalizacaoNodulosSelect(e.target.value);
                }}
                value={localizacaoNodulosSelect}
              >
                <option value="" disabled selected>
                  Localizado
                </option>
                <option value="corporal anterior">Corporal anterior</option>
                <option value="corporal posterior">Corporal posterior</option>
                <option value="fúndica">Fúndica</option>
                <option value="lateral direita">Lateral direita</option>
                <option value="lateral esquerda">Lateral esquerda</option>
                <option value="cervical">Cervical</option>
              </Select>

            </Box>
            <HStack
              mt='5px'
              ml='25px'
              color='red'>
              <Text>
                Nódulo com vascularização
              </Text>

              <Select
                w="auto"
                isDisabled={DisableSelect}
                onChange={(e) => {
                  setDopplerNodulosSelect(e.target.value);
                }}
                value={DopplerNodulosSelect}
              >
                <option value="" disabled selected>
                  Doppler
                </option>
                <option value="ausente">ausente</option>
                <option value="periférica">periférica</option>
                <option value="central">central</option>
                <option value="central e periférica">central e periférica</option>
              </Select>
            </HStack >
          </Box>
          <Text fontWeight="semibold" fontSize="16px">
            Individualizar Nódulos
          </Text>

          <Stack
            borderBottom='1px'
            w='100%'>
            <>
              {numberArray.map((num, key) => {
                return (
                  <IndividualizarNodulos
                    key={key}
                    numNodulo={num}
                    disable={!miometrioSemNodulosCheckBox}
                  />
                );
              })}
            </>
          </Stack>

          <Box
            mt='20px'
            gap='25px'
            color="red"
          >
            <Text
              w='100%'
              fontWeight="semibold" fontSize="16px">
              Doppler
            </Text>
            <Box
              borderBottom='1px'
              gap='25px'
              display='flex'
              flexWrap='wrap'>
              <Checkbox
                onChange={() => setdopplerMedidasCheckBox(!dopplerMedidasCheckBox)}>
                Citar medidas
              </Checkbox>
              <Box               >
                <Box
                  mb='5px'
                  alignItems='center'
                  display='flex'
                  gap='25px'
                >
                  <Text mr='22px'>Artéria uterina direita</Text>
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
                      value={MedidaDireitaIR}
                      maxLength={2}
                      textAlign="center"
                      onChange={(e) => { setMedidaDireitaIR(e.target.value) }}
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
                      value={MedidaDireitaIP}
                      maxLength={2}
                      textAlign="center"
                      onChange={(e) => { setMedidaDireitaIP(e.target.value) }}
                      placeholder={"mm"}
                    />
                  </Box>
                </Box>
                <Box
                  alignItems='center'
                  display='flex'
                  gap='25px'
                  mb='10px'
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
                      maxLength={2}
                      value={MedidaEsquerdaIR}
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
            <Stack>
              <Checkbox
                mt='10px'
                isDisabled={DisableVascularizacaoNormalCheckBox}
                onChange={() => setVascularizacaoNormalCheckBox(!VascularizacaoNormalCheckBox)}
              >
                Miométrio com vascularização normal
              </Checkbox>
              <Checkbox
                isDisabled={DisableVascularizacaoAumentadaCheckBox}
                onChange={() => setVascularizacaoAumentadaCheckBox(!VascularizacaoAumentadaCheckBox)}
              >
                Miométrio com vascularização aumentada
              </Checkbox>
            </Stack>
          </Box>
        </Stack >
      </Box >
    </Box >
  );
}
export default Miometrio;