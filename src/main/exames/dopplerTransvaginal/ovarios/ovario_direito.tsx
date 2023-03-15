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

function Ovario_Direito() {
  const altura = "100%";
  const largura = "400px";

  const [frasesOVD, setFrasesOVD] = useState<any>([]);

  const [dopplerMedidasCheckBox, setdopplerMedidasCheckBox] = useState(false);
  const [disableInputsDoppler, setDisableInputsDoppler] = useState(true);

  const [MedidaDireitaIR, setMedidaDireitaIR] = useState("");
  const [MedidaDireitaIP, setMedidaDireitaIP] = useState("");

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
      setFrasesOVD((arr) => [...arr, string]);
    }
  };

  const removeMedidasOvario = () => {
    frasesOVD.map((e) => {
      if (e.includes("Ovário Direito")) {
        var index = frasesOVD.indexOf(e);

        if (index > -1) {
          frasesOVD.splice(index, 1);
          setFrasesOVD((arr) => [...arr]);
        }
      }
    });
  };
  //Funcoes medidas ovario - Fim

  //Funcoes Padrao Folicular - Inicio
  const criaStringPadraoFolicular = () => {
    var string = "Ovário direito com padrão folicular ";
    setFrasesOVD((arr) => [...arr, string]);
  };

  const removePadraoFolicular = () => {
    frasesOVD.map((e) => {
      if (e.includes("folicular")) {
        var index = frasesOVD.indexOf(e);

        if (index > -1) {
          frasesOVD.splice(index, 1);
          setFrasesOVD((arr) => [...arr]);
        }
      }
    });
  };
  //Funcoes Padrao Folicular - Fim

  //Funcoes Padrao Micropolicistico - Inicio
  const criaStringPadraoMicropolicistico = () => {
    var string = "Ovário direito com padrão micropolicístico ";
    setFrasesOVD((arr) => [...arr, string]);
    return string;
  };

  const removePadraoMicropolicistico = () => {
    frasesOVD.map((e) => {
      if (e.includes("micropolicístico")) {
        var index = frasesOVD.indexOf(e);

        if (index > -1) {
          frasesOVD.splice(index, 1);
          setFrasesOVD((arr) => [...arr]);
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
      setFrasesOVD((arr) => [...arr, string]);
    }
  };

  const removeCisto = () => {
    frasesOVD.map((e) => {
      if (e.includes("Cisto")) {
        var index = frasesOVD.indexOf(e);

        if (index > -1) {
          frasesOVD.splice(index, 1);
          setFrasesOVD((arr) => [...arr]);
        }
      }
    });
  };
  //Funcoes Cisto - Fim

  //Função Nao Visibilizado
  const criaStringNaoVisibilizado = () => {
    var string = "Ovário direito não visibilizado ";
    if (naoVisibilizadoCheckBox) {
      setFrasesOVD((arr) => [...arr, string]);
      setnaoVisibilizadoCheckBox(false);
    } else {
      removeItemString(string);
    }
  };

  const removeItemString = (value) => {
    var index = frasesOVD.indexOf(value);

    if (index > -1) {
      frasesOVD.splice(index, 1);
      setFrasesOVD((arr) => [...arr]);
    }
  };

  const criaStringArteriaDireitaIR = (medida) => {
    removeStringArteriaDireitaIR();
    if (MedidaDireitaIR !== "") {
      var string = `Índice de resistência da artéria uterina 
      direita: ${medida} (normal entre 0,6 e 0,9)`;
      setFrasesOVD((arr) => [...arr, string]);
    }
  };
  const removeStringArteriaDireitaIR = () => {
    frasesOVD.map((e) => {
      if (
        e.includes(`Índice de resistência da artéria uterina 
      direita`)
      ) {
        var index = frasesOVD.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesOVD.splice(index, 1);
          setFrasesOVD((arr) => [...arr]);
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
      setFrasesOVD((arr) => [...arr, string]);
    }
  };
  const removeStringArteriaDireitaIP = () => {
    frasesOVD.map((e) => {
      if (
        e.includes(`Índice de pulsatilidade da artéria uterina 
      direita`)
      ) {
        var index = frasesOVD.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesOVD.splice(index, 1);
          setFrasesOVD((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    criaStringArteriaDireitaIP(MedidaDireitaIP);
  }, [MedidaDireitaIP]);

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
      setDisableInputsDoppler(false);
    } else {
      setMedidaDireitaIR("");
      setMedidaDireitaIP("");
      removeStringArteriaDireitaIR();
      removeStringArteriaDireitaIP();
      setDisableInputsDoppler(true);
    }
  }, [dopplerMedidasCheckBox]);

  const subExame = "Ovário Direito";
  const titulo_exame = "Doppler Transvaginal";

  useEffect(() => {
    if (Object.keys(frasesOVD).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesOVD
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesOVD
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesOVD]);

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

      <Box display="flex" flexWrap="wrap" mt="20px">
        <Stack borderBottom="1px">
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
        <Box mt="5px" color="red">
          <Text w="100%" fontWeight="semibold" fontSize="16px">
            Doppler
          </Text>
          <Box display="flex" flexWrap="wrap">
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
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default Ovario_Direito;
