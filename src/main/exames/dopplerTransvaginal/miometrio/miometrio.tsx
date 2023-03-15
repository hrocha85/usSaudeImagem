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
import IndividualizarNodulos from "./individualizar_nodulos";

function Miometrio() {
  const altura = "100%";
  const largura = "66%";

  const [frasesMiometrio, setFrasesMiometrio] = useState<any>([]);

  var numberArray = [1, 2, 3, 4, 5];

  const [HomogeneaNormalCheckbox, setHomogeneaNormalCheckbox] = useState(false);
  const [DisableHomogeneaNormal, setDisableHomogeneaNormal] = useState(false);

  const [HeterogeneaCheckbox, setHeterogeneaCheckbox] = useState(false);
  const [DisableHeterogenea, setDisableHeterogenea] = useState(false);

  const [HomogeneaExcetoCheckbox, setHomogeneaExcetoCheckbox] = useState(false);
  const [DisableHomogeneaExceto, setDisableHomogeneaExceto] = useState(false);


  const [RegularCheckbox, setRegularCheckbox] = useState(false);
  const [DisableRegularCheckbox, setDisableRegularCheckbox] = useState(false);

  const [IrregularCheckbox, setIrregularCheckbox] = useState(false);
  const [DisableIrregularCheckbox, setDisableIrregularCheckbox] = useState(false);

  const [DisableSelect, setDisableSelect] = useState(true);

  const [disableInputsDoppler, setDisableInputsDoppler] = useState(true);
  const [dopplerMedidasCheckBox, setdopplerMedidasCheckBox] = useState(false);

  const [MedidaDireitaIR, setMedidaDireitaIR] = useState("");
  const [MedidaDireitaIP, setMedidaDireitaIP] = useState("");

  const [MedidaEsquerdaIR, setMedidaEsquerdaIR] = useState("");
  const [MedidaEsquerdaIP, setMedidaEsquerdaIP] = useState("");

  const [tamanhoNoduloInput, settamanhoNoduloInput] = useState("");
  const [posicaoNodulosSelect, setPosicaoNodulosSelect] = useState("");
  const [localizacaoNodulosSelect, setlocalizacaoNodulosSelect] = useState("");

  const [multiplosNodulosCheckBox, setmultiplosNodulosCheckBox] =
    useState(false);

  const [VascularizacaoNormalCheckBox, setVascularizacaoNormalCheckBox] =
    useState(false);
  const [
    DisableVascularizacaoNormalCheckBox,
    setDisableVascularizacaoNormalCheckBox,
  ] = useState(false);

  const [DopplerNodulosSelect, setDopplerNodulosSelect] = useState("");

  const [VascularizacaoAumentadaCheckBox, setVascularizacaoAumentadaCheckBox] =
    useState(false);
  const [
    DisableVascularizacaoAumentadaCheckBox,
    setDisableVascularizacaoAumentadaCheckBox,
  ] = useState(false);

  const [miometrioSemNodulosCheckBox, setmiometrioSemNodulosCheckBox] =
    useState(true);

  const handleChangeNoduloInput = (event) => {
    settamanhoNoduloInput(event.target.value);
  };

  const criaStringMultiplosNodulos = (
    tamanhoNoduloInput,
    nodulosSelect,
    localizado,
    DopplerNodulosSelect
  ) => {
    removeMultiplosNodulos();
    var string;
    if (
      DopplerNodulosSelect !== "" &&
      tamanhoNoduloInput !== "" &&
      nodulosSelect !== "" &&
      localizado !== ""
    ) {
      string = `Múltiplos nódulos de mioma, o maior mede ${tamanhoNoduloInput}mm ${nodulosSelect} localizado ${localizado}, doppler ${DopplerNodulosSelect} `;
      setFrasesMiometrio((arr) => [...arr, string]);
    } else if (
      tamanhoNoduloInput !== "" &&
      nodulosSelect !== "" &&
      localizado !== ""
    ) {
      string = `Múltiplos nódulos de mioma, o maior mede ${tamanhoNoduloInput}mm ${nodulosSelect} localizado ${localizado} `;
      setFrasesMiometrio((arr) => [...arr, string]);
    }
  };

  useEffect(() => {
    var string = "Miométrio com vascularização normal";
    if (VascularizacaoNormalCheckBox) {
      setFrasesMiometrio((arr) => [...arr, string]);
      setDisableVascularizacaoAumentadaCheckBox(true);
    } else {
      setDisableVascularizacaoAumentadaCheckBox(false);
      setVascularizacaoNormalCheckBox(false);
      removeItemString(string);
    }
  }, [VascularizacaoNormalCheckBox]);

  useEffect(() => {
    var string = "Miométrio com vascularização Aumentada";
    if (VascularizacaoAumentadaCheckBox) {
      setFrasesMiometrio((arr) => [...arr, string]);
      setDisableVascularizacaoNormalCheckBox(true);
    } else {
      setDisableVascularizacaoNormalCheckBox(false);
      setVascularizacaoAumentadaCheckBox(false);
      removeItemString(string);
    }
  }, [VascularizacaoAumentadaCheckBox]);

  const removeMultiplosNodulos = () => {
    frasesMiometrio.map((e) => {
      if (e.includes("mioma")) {
        var index = frasesMiometrio.indexOf(e);

        if (index > -1) {
          frasesMiometrio.splice(index, 1);
          setFrasesMiometrio((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringMiometrioSemNodulos = () => {
    var string = "Miométrio heterogêneo sem nódulos ";
    if (miometrioSemNodulosCheckBox) {
      setFrasesMiometrio((arr) => [...arr, string]);
      setmiometrioSemNodulosCheckBox(false);
    } else {
      removeItemString(string);
    }
  };

  const removeItemString = (value) => {
    var index = frasesMiometrio.indexOf(value);

    if (index > -1) {
      frasesMiometrio.splice(index, 1);
      setFrasesMiometrio((arr) => [...arr]);
    }
  };

  const criaStringArteriaDireitaIR = (medida) => {
    removeStringArteriaDireitaIR();
    if (MedidaDireitaIR !== "") {
      var string = `Índice de resistência da artéria uterina 
      direita: ${medida} (normal entre 0,6 e 0,9)`;
      setFrasesMiometrio((arr) => [...arr, string]);
    }
  };
  const removeStringArteriaDireitaIR = () => {
    frasesMiometrio.map((e) => {
      if (
        e.includes(`Índice de resistência da artéria uterina 
      direita`)
      ) {
        var index = frasesMiometrio.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesMiometrio.splice(index, 1);
          setFrasesMiometrio((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    criaStringArteriaDireitaIR(MedidaDireitaIR);
  }, [MedidaDireitaIR]);

  const criaStringArteriaDireitaIP = (medida) => {
    removeStringArteriaDireitaIP();
    if (MedidaDireitaIP !== "") {
      var string = `Índice de pulsatilidade da artéria uterina 
      direita: ${medida} (normal entre 1,5 e 3,0)`;
      setFrasesMiometrio((arr) => [...arr, string]);
    }
  };
  const removeStringArteriaDireitaIP = () => {
    frasesMiometrio.map((e) => {
      if (
        e.includes(`Índice de pulsatilidade da artéria uterina 
      direita`)
      ) {
        var index = frasesMiometrio.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesMiometrio.splice(index, 1);
          setFrasesMiometrio((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    criaStringArteriaDireitaIP(MedidaDireitaIP);
  }, [MedidaDireitaIP]);

  const criaStringArteriaEsquerdaIR = (medida) => {
    removeStringArteriaEsquerdaIR();
    if (MedidaEsquerdaIR !== "") {
      var string = `Índice de resistência da artéria uterina 
      Esquerda: ${medida} (normal entre 0,6 e 0,9)`;
      setFrasesMiometrio((arr) => [...arr, string]);
    }
  };
  const removeStringArteriaEsquerdaIR = () => {
    frasesMiometrio.map((e) => {
      if (
        e.includes(`Índice de resistência da artéria uterina 
      Esquerda`)
      ) {
        var index = frasesMiometrio.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesMiometrio.splice(index, 1);
          setFrasesMiometrio((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    criaStringArteriaEsquerdaIR(MedidaEsquerdaIR);
  }, [MedidaEsquerdaIR]);

  const criaStringArteriaEsquerdaIP = (medida) => {
    removeStringArteriaEsquerdaIP();
    if (MedidaEsquerdaIP !== "") {
      var string = `Índice de pulsatilidade da artéria uterina 
      Esquerda: ${medida} (normal entre 1,5 e 3,0)`;
      setFrasesMiometrio((arr) => [...arr, string]);
    }
  };
  const removeStringArteriaEsquerdaIP = () => {
    frasesMiometrio.map((e) => {
      if (
        e.includes(`Índice de pulsatilidade da artéria uterina 
      Esquerda`)
      ) {
        var index = frasesMiometrio.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesMiometrio.splice(index, 1);
          setFrasesMiometrio((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    criaStringArteriaEsquerdaIP(MedidaEsquerdaIP);
  }, [MedidaEsquerdaIP]);

  useEffect(() => {
    if (dopplerMedidasCheckBox) {
      setDisableInputsDoppler(false);
    } else {
      setMedidaDireitaIR("");
      setMedidaDireitaIP("");
      setMedidaEsquerdaIR("");
      setMedidaEsquerdaIP("");
      removeStringArteriaDireitaIR();
      removeStringArteriaDireitaIP();
      removeStringArteriaEsquerdaIR();
      removeStringArteriaEsquerdaIP();
      setDisableInputsDoppler(true);
    }
  }, [dopplerMedidasCheckBox]);

  useEffect(() => {
    if (multiplosNodulosCheckBox) {
      criaStringMultiplosNodulos(
        tamanhoNoduloInput,
        posicaoNodulosSelect,
        localizacaoNodulosSelect,
        DopplerNodulosSelect
      );
      setDisableSelect(false);
    } else {
      setDisableSelect(true);
      removeMultiplosNodulos();
      settamanhoNoduloInput("");
      setPosicaoNodulosSelect("");
      setlocalizacaoNodulosSelect("");
      setDopplerNodulosSelect("");
    }
  }, [
    multiplosNodulosCheckBox,
    posicaoNodulosSelect,
    tamanhoNoduloInput,
    localizacaoNodulosSelect,
    DopplerNodulosSelect,
  ]);

  useEffect(() => {
    const string = 'Miométrio Regular ou Normal'
    if (RegularCheckbox) {
      setDisableIrregularCheckbox(true)
      setFrasesMiometrio((arr) => [...arr, string])
    } else {
      setDisableIrregularCheckbox(false)
      removeItemString(string)
    }
  }, [RegularCheckbox])

  useEffect(() => {
    const string = 'Miométrio irregular'
    if (IrregularCheckbox) {
      setDisableRegularCheckbox(true)
      setFrasesMiometrio((arr) => [...arr, string])
    } else {
      setDisableRegularCheckbox(false)
      removeItemString(string)
    }
  }, [IrregularCheckbox])

  useEffect(() => {
    const string = 'Textura Homogênea ou normal'
    if (HomogeneaNormalCheckbox) {
      setDisableHeterogenea(true)
      setDisableHomogeneaExceto(true)
      setFrasesMiometrio((arr) => [...arr, string])
    } else {
      setDisableHeterogenea(false)
      setDisableHomogeneaExceto(false)
      removeItemString(string)
    }
  }, [HomogeneaNormalCheckbox])

  useEffect(() => {
    const string = 'Textura Heterogênea'
    if (HeterogeneaCheckbox) {
      setDisableHomogeneaNormal(true)
      setDisableHomogeneaExceto(true)
      setFrasesMiometrio((arr) => [...arr, string])
    } else {
      setDisableHomogeneaNormal(false)
      setDisableHomogeneaExceto(false)
      removeItemString(string)
    }
  }, [HeterogeneaCheckbox])

  useEffect(() => {
    const string = 'Textura Homogênea exceto por:'
    if (HomogeneaExcetoCheckbox) {
      setDisableHomogeneaNormal(true)
      setDisableHeterogenea(true)
      setFrasesMiometrio((arr) => [...arr, string])
    } else {
      setDisableHomogeneaNormal(false)
      setDisableHeterogenea(false)
      removeItemString(string)
    }
  }, [HomogeneaExcetoCheckbox])


  const subExame = "Miométrio";
  const titulo_exame = "Doppler Transvaginal";

  useEffect(() => {
    if (Object.keys(frasesMiometrio).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesMiometrio
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesMiometrio
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesMiometrio]);

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
          <Box gap='10px' display='flex' flexWrap='wrap'>
            <Checkbox
              disabled={DisableRegularCheckbox}
              onChange={() => {
                setRegularCheckbox(!RegularCheckbox);
              }}
            >
              Regular ou Normal
            </Checkbox>
            <Checkbox
              disabled={DisableIrregularCheckbox}
              onChange={() => {
                setIrregularCheckbox(!IrregularCheckbox)
              }}
            >
              Irregular
            </Checkbox>
          </Box>
          <Box>
            <Checkbox
              onChange={() => {
                setmiometrioSemNodulosCheckBox(true);
                criaStringMiometrioSemNodulos();
              }}
            >
              Miométrio heterogêneo sem nódulos
            </Checkbox>
            <Box gap="10px" display="flex" flexWrap="wrap">
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
            <HStack mt="5px" ml="25px" color="red">
              <Text>Nódulo com vascularização</Text>

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
                <option value="central e periférica">
                  central e periférica
                </option>
              </Select>
            </HStack>
          </Box>
          <Text fontWeight="semibold" fontSize="16px">
            Textura
          </Text>
          <Box gap='10px' display='flex' flexWrap='wrap'>
            <Checkbox
              disabled={DisableHomogeneaNormal}
              onChange={() => {
                setHomogeneaNormalCheckbox(!HomogeneaNormalCheckbox);
              }}
            >
              Homogênea ou normal
            </Checkbox>
            <Checkbox
              disabled={DisableHeterogenea}
              onChange={() => {
                setHeterogeneaCheckbox(!HeterogeneaCheckbox)
              }}
            >
              Heterogênea
            </Checkbox>
            <Checkbox
              disabled={DisableHomogeneaExceto}
              onChange={() => {
                setHomogeneaExcetoCheckbox(!HomogeneaExcetoCheckbox)
              }}
            >
              Homogênea exceto por:
            </Checkbox>
          </Box>


          <Text fontWeight="semibold" fontSize="16px">
            Individualizar Nódulos
          </Text>

          <Stack borderBottom="1px" w="100%">
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

          <Box mt="20px" gap="25px" color="red">
            <Text w="100%" fontWeight="semibold" fontSize="16px">
              Doppler
            </Text>
            <Box borderBottom="1px" gap="25px" display="flex" flexWrap="wrap">
              <Checkbox
                onChange={() =>
                  setdopplerMedidasCheckBox(!dopplerMedidasCheckBox)
                }
              >
                Citar medidas
              </Checkbox>
              <Box>
                <Box mb="5px" alignItems="center" display="flex" gap="25px">
                  <Text mr="22px">Artéria uterina direita</Text>
                  <Box alignItems="center" display="flex">
                    <Text mr="10px">IR</Text>
                    <Input
                      isDisabled={disableInputsDoppler}
                      w="60px"
                      h="77x"
                      padding="5px"
                      value={MedidaDireitaIR}
                      maxLength={2}
                      textAlign="center"
                      onChange={(e) => {
                        setMedidaDireitaIR(e.target.value);
                      }}
                      placeholder={"mm"}
                    />
                  </Box>
                  <Box alignItems="center" display="flex">
                    <Text mr="10px">IP</Text>
                    <Input
                      isDisabled={disableInputsDoppler}
                      w="60px"
                      h="77x"
                      padding="5px"
                      value={MedidaDireitaIP}
                      maxLength={2}
                      textAlign="center"
                      onChange={(e) => {
                        setMedidaDireitaIP(e.target.value);
                      }}
                      placeholder={"mm"}
                    />
                  </Box>
                </Box>
                <Box alignItems="center" display="flex" gap="25px" mb="10px">
                  <Text>Artéria uterina esquerda</Text>
                  <Box alignItems="center" display="flex">
                    <Text mr="10px">IR</Text>
                    <Input
                      isDisabled={disableInputsDoppler}
                      w="60px"
                      h="77x"
                      padding="5px"
                      maxLength={2}
                      value={MedidaEsquerdaIR}
                      textAlign="center"
                      onChange={(e) => {
                        setMedidaEsquerdaIR(e.target.value);
                      }}
                      placeholder={"mm"}
                    />
                  </Box>
                  <Box alignItems="center" display="flex">
                    <Text mr="10px">IP</Text>
                    <Input
                      isDisabled={disableInputsDoppler}
                      w="60px"
                      h="77x"
                      padding="5px"
                      value={MedidaEsquerdaIP}
                      maxLength={2}
                      textAlign="center"
                      onChange={(e) => {
                        setMedidaEsquerdaIP(e.target.value);
                      }}
                      placeholder={"mm"}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
            <Stack>
              <Checkbox
                mt="10px"
                isDisabled={DisableVascularizacaoNormalCheckBox}
                onChange={() =>
                  setVascularizacaoNormalCheckBox(!VascularizacaoNormalCheckBox)
                }
              >
                Miométrio com vascularização normal
              </Checkbox>
              <Checkbox
                isDisabled={DisableVascularizacaoAumentadaCheckBox}
                onChange={() =>
                  setVascularizacaoAumentadaCheckBox(
                    !VascularizacaoAumentadaCheckBox
                  )
                }
              >
                Miométrio com vascularização aumentada
              </Checkbox>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
export default Miometrio;
