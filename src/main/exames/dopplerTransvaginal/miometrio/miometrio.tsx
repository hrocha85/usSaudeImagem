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
  const [ConclusaoMiometrio, setConclusaoMiometrio] = useState<any>([]);

  var numberArray = [1, 2, 3, 4, 5];

  const [VerificaConclusaoEsquerda, setVerificaConclusaoEsquerda] = useState(false)
  const [VerificaConclusaoDireita, setVerificaConclusaoDireita] = useState(false)

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

  const [dopplerMedidasCheckBox, setdopplerMedidasCheckBox] = useState(false);

  const [MedidaDireitaIR, setMedidaDireitaIR] = useState<number>(0.6);
  const [MedidaDireitaIP, setMedidaDireitaIP] = useState<number>(1.5);

  const [MedidaEsquerdaIR, setMedidaEsquerdaIR] = useState<number>(0.6);
  const [MedidaEsquerdaIP, setMedidaEsquerdaIP] = useState<number>(1.5);

  const [tamanhoNoduloInput, setTamanhoNoduloInput] = useState("");
  const [posicaoNodulosSelect, setPosicaoNodulosSelect] = useState("");
  const [localizacaoNodulosSelect, setlocalizacaoNodulosSelect] = useState("");

  const [multiplosNodulosCheckBox, setmultiplosNodulosCheckBox] =
    useState(false);

  const [VascularizacaoNormalCheckBox, setVascularizacaoNormalCheckBox] =
    useState(false);

  const [DopplerNodulosSelect, setDopplerNodulosSelect] = useState("");

  const [VascularizacaoAumentadaCheckBox, setVascularizacaoAumentadaCheckBox] =
    useState(false);


  const [miometrioSemNodulosCheckBox, setmiometrioSemNodulosCheckBox] =
    useState(true);

  const handleChangeNoduloInput = (event) => {
    setTamanhoNoduloInput(event.target.value);
  };

  const HandleChangeMedidaDireitaIR = (event) => {
    setMedidaDireitaIR(event.target.value);
  };
  const HandleChangeMedidaDireitaIP = (event) => {
    setMedidaDireitaIP(event.target.value);
  };

  const HandleChangeMedidaEsquerdaIR = (event) => {
    setMedidaEsquerdaIR(event.target.value);
  };
  const HandleChangeMedidaEsquerdaIP = (event) => {
    setMedidaEsquerdaIP(event.target.value);
  };

  const criaStringMultiplosNodulos = (tamanhoNoduloInput, nodulosSelect, localizado, DopplerNodulosSelect) => {
    var string = 'O miométrio encontra-se heterogêneo, apresentando de múltiplos nódulos de mioma, o maior'
    removeMultiplosNodulos(string);
    if (DopplerNodulosSelect !== "" && tamanhoNoduloInput !== "" && nodulosSelect !== "" && localizado !== "") {
      string = `${string} ${localizado}, localizado na ${nodulosSelect} medindo ${tamanhoNoduloInput} mm com vasculazição ${DopplerNodulosSelect}.`;
      setFrasesMiometrio((arr) => [...arr, string]);
    }
  };

  useEffect(() => {
    var string = "Ao estudo doppler observamos vascularização normal do miométrio.";
    if (VascularizacaoNormalCheckBox) {
      setFrasesMiometrio((arr) => [...arr, string]);
    } else {
      removeItemString(string);
    }
  }, [VascularizacaoNormalCheckBox]);

  useEffect(() => {
    const string = "Ao estudo doppler observamos vascularização difusa aumentada do miométrio.";
    const conclusao = 'Aumento difuso da vascularização do miométrio.'
    if (VascularizacaoAumentadaCheckBox) {
      setFrasesMiometrio((arr) => [...arr, string]);
      setConclusaoMiometrio((arr) => [...arr, conclusao]);
    } else {
      removeItemConclusao(conclusao)
      removeItemString(string);
    }
  }, [VascularizacaoAumentadaCheckBox]);

  const removeMultiplosNodulos = (value) => {
    frasesMiometrio.map((e) => {
      if (e.includes(value)) {
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
  const removeItemConclusao = (value) => {
    // console.log("valor remove = ", value);
    var index = ConclusaoMiometrio.indexOf(value);
    //caso o valor enviado exista no array, vai remover com splice e setar array novamente
    if (index > -1) {
      ConclusaoMiometrio.splice(index, 1);
      setConclusaoMiometrio((arr) => [...arr]);
      new Format_Laudo(titulo_exame).Remove_Conclusao(value)
    }
  };
  const criaStringArteriaDireitaIR = () => {
    var string = 'Índice de resistência da artéria uterina direita'
    const conclusao = 'Artéria uterina direita com aumento da resistência vascular.'
    removeItemConclusao(conclusao)
    removeStringArteriaUterina(string);
    if (dopplerMedidasCheckBox) {
      if (MedidaDireitaIR < 0.6 && MedidaDireitaIP > 0.9) {
        setConclusaoMiometrio((arr) => [...arr, conclusao]);
      }
      if (MedidaDireitaIR !== 0) {
        string = `${string} : ${MedidaDireitaIR} (normal entre 0,6 e 0,9)`;
        setFrasesMiometrio((arr) => [...arr, string]);
      }
    }
  };

  useEffect(() => {
    criaStringArteriaDireitaIR();
  }, [MedidaDireitaIR, dopplerMedidasCheckBox]);

  const criaStringArteriaDireitaIP = () => {
    var string = 'Índice de pulsatilidade da artéria uterina direita'
    const conclusao = 'Artéria uterina direita com aumento da resistência vascular.'
    removeItemConclusao(conclusao)
    removeStringArteriaUterina(string);
    if (dopplerMedidasCheckBox) {
      if (MedidaDireitaIP > 3 && MedidaDireitaIP < 1.5) {
        setConclusaoMiometrio((arr) => [...arr, conclusao]);
      }
      if (MedidaDireitaIP !== 0) {
        string = `${string} : ${MedidaDireitaIP} (normal entre 1,5 e 3,0)`;
        setFrasesMiometrio((arr) => [...arr, string]);
      }
    }
  };


  useEffect(() => {
    criaStringArteriaDireitaIP();
  }, [MedidaDireitaIP, dopplerMedidasCheckBox]);

  const criaStringArteriaEsquerdaIR = () => {
    var string = 'Índice de resistência da artéria uterina esquerda'
    const conclusao = 'Artéria uterina esquerda com aumento da resistência vascular.'
    removeItemConclusao(conclusao)
    removeStringArteriaUterina(string);
    if (dopplerMedidasCheckBox) {
      if (MedidaEsquerdaIR < 0.6 && MedidaEsquerdaIP > 0.9) {
        setConclusaoMiometrio((arr) => [...arr, conclusao]);
      }
      if (MedidaEsquerdaIR !== 0) {
        string = `${string}: ${MedidaEsquerdaIR} (normal entre 0,6 e 0,9)`;
        setFrasesMiometrio((arr) => [...arr, string]);
      }
    }
  };

  useEffect(() => {
    criaStringArteriaEsquerdaIR();
  }, [MedidaEsquerdaIR, dopplerMedidasCheckBox]);

  const criaStringArteriaEsquerdaIP = () => {
    var string = 'Índice de pulsatilidade da artéria uterina esquerda'
    const conclusao = 'Artéria uterina esquerda com aumento da resistência vascular.'
    removeItemConclusao(conclusao)
    removeStringArteriaUterina(string);
    if (dopplerMedidasCheckBox) {
      if (MedidaEsquerdaIP > 3 && MedidaEsquerdaIP < 1.5) {
        setConclusaoMiometrio((arr) => [...arr, conclusao]);
      }
      if (MedidaEsquerdaIP !== 0) {
        string = `${string} : ${MedidaEsquerdaIP} (normal entre 1,5 e 3,0)`;
        setFrasesMiometrio((arr) => [...arr, string]);
      }
    }
  };
  useEffect(() => {
    criaStringArteriaEsquerdaIP();
  }, [MedidaEsquerdaIP, dopplerMedidasCheckBox]);



  // const CriaStringConclusaoArterias = () => {
  //   setVerificaConclusaoEsquerda(false)
  //   setVerificaConclusaoDireita(false)
  //   var conclusao;
  //   removeItemConclusao('Artéria uterina direita e esquerda com aumento da resistência vascular.')
  //   removeItemConclusao('Artéria uterina direita com aumento da resistência vascular.')
  //   removeItemConclusao('Artéria uterina esquerda com aumento da resistência vascular.')
  //   removeItemConclusao('Estudo doppler velocimétrico dentro dos limites da normalidade.')
  //   if (dopplerMedidasCheckBox) {
  //     if (VerificaConclusaoEsquerda && VerificaConclusaoDireita) {
  //       conclusao = 'Artéria uterina direita e esquerda com aumento da resistência vascular.'
  //     } else if (VerificaConclusaoEsquerda && !VerificaConclusaoDireita) {
  //       conclusao = 'Artéria uterina esquerda com aumento da resistência vascular.'

  //     } else if (!VerificaConclusaoEsquerda && VerificaConclusaoDireita) {
  //       conclusao = 'Artéria uterina direita com aumento da resistência vascular.'
  //     } else {
  //       conclusao = 'Estudo doppler velocimétrico dentro dos limites da normalidade.'
  //     }
  //   }
  //   setConclusaoMiometrio((arr) => [...arr, conclusao])
  // }
  // useEffect(() => {
  //   CriaStringConclusaoArterias()
  // }, [MedidaEsquerdaIP, MedidaEsquerdaIR, MedidaDireitaIP, MedidaDireitaIR, dopplerMedidasCheckBox])

  const removeStringArteriaUterina = (value) => {
    frasesMiometrio.map((e) => {
      if (
        e.includes(value)
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
    if (!dopplerMedidasCheckBox) {
      setMedidaDireitaIR(0.6);
      setMedidaDireitaIP(1.5);
      setMedidaEsquerdaIR(0.6);
      setMedidaEsquerdaIP(1.5);
    }
  }, [dopplerMedidasCheckBox]);

  useEffect(() => {
    criaStringMultiplosNodulos(
      tamanhoNoduloInput,
      posicaoNodulosSelect,
      localizacaoNodulosSelect,
      DopplerNodulosSelect
    );
    if (multiplosNodulosCheckBox) {
      setDisableSelect(false);
    } else {
      setDisableSelect(true);
      setTamanhoNoduloInput("");
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
        frasesMiometrio,
        ConclusaoMiometrio
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesMiometrio,
        ConclusaoMiometrio
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
                      isDisabled={!dopplerMedidasCheckBox}
                      w="60px"
                      h="77x"
                      padding="0px"
                      value={MedidaDireitaIR}
                      textAlign="center"
                      onChange={HandleChangeMedidaDireitaIR}
                      placeholder={"mm"}
                    />
                  </Box>
                  <Box alignItems="center" display="flex">
                    <Text mr="10px">IP</Text>
                    <Input
                      isDisabled={!dopplerMedidasCheckBox}
                      w="60px"
                      h="77x"
                      padding="0px"
                      value={MedidaDireitaIP}
                      textAlign="center"
                      onChange={HandleChangeMedidaDireitaIP}
                      placeholder={"mm"}
                    />
                  </Box>
                </Box>
                <Box alignItems="center" display="flex" gap="25px" mb="10px">
                  <Text>Artéria uterina esquerda</Text>
                  <Box alignItems="center" display="flex">
                    <Text mr="10px">IR</Text>
                    <Input
                      isDisabled={!dopplerMedidasCheckBox}
                      w="60px"
                      h="77x"
                      padding="0px"
                      value={MedidaEsquerdaIR}
                      textAlign="center"
                      onChange={HandleChangeMedidaEsquerdaIR}
                      placeholder={"mm"}
                    />
                  </Box>
                  <Box alignItems="center" display="flex">
                    <Text mr="10px">IP</Text>
                    <Input
                      isDisabled={!dopplerMedidasCheckBox}
                      w="60px"
                      h="77x"
                      padding="0px"
                      value={MedidaEsquerdaIP}
                      textAlign="center"
                      onChange={HandleChangeMedidaEsquerdaIP}
                      placeholder={"mm"}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
            <Stack>
              <Checkbox
                mt="10px"
                isDisabled={VascularizacaoAumentadaCheckBox}
                onChange={() =>
                  setVascularizacaoNormalCheckBox(!VascularizacaoNormalCheckBox)
                }
              >
                Miométrio com vascularização normal
              </Checkbox>
              <Checkbox
                isDisabled={VascularizacaoNormalCheckBox}
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
