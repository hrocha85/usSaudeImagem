
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

function Ovario_Esquerdo() {
  const altura = "100%";
  const largura = "400px";

  const [frasesOVD, setFrasesOVD] = useState<any>([]);
  const [ConclusaoOVD, setConclusaoOVD] = useState<any>([]);

  const [dopplerMedidasCheckbox, setdopplerMedidasCheckbox] = useState(false);
  const [disableInputsDoppler, setDisableInputsDoppler] = useState(true);

  const [MedidaEsquerdaIR, setMedidaEsquerdaIR] = useState("");
  const [MedidaEsquerdaIP, setMedidaEsquerdaIP] = useState("");

  //States medidas ovario - Inicio
  const [medidaOvario1, setmedidaOvario1] = useState(5);
  const [medidaOvario2, setmedidaOvario2] = useState(5);
  const [medidaOvario3, setmedidaOvario3] = useState(5);
  const [medidaOvario4, setmedidaOvario4] = useState(0);
  const [CitarMedidaCheckbox, setCitarMedidaCheckbox] = useState(false);
  //States medidas ovario - Fim

  //States cisto - input,checkbox e select - Inicio
  const [cistoInput, setCistoInput] = useState("");
  const [cistoCheckbox, setCistoCheckbox] = useState(false);
  const [cistoSelect, setCistoSelect] = useState("");

  const handleChangeCistoInput = (event) => {
    setCistoInput(event.target.value);
  };
  const handleChangeMedida1Input = (event) => {
    setmedidaOvario1(event.target.value);
  };
  const handleChangeMedida2Input = (event) => {
    setmedidaOvario2(event.target.value);
  };
  const handleChangeMedida3Input = (event) => {
    setmedidaOvario3(event.target.value);
  };
  //States cisto - input,checkbox e select - Fim

  //State checkbox Padrao Micropolicistico
  const [padraoMicropolicisticoCheckbox, setpadraoMicropolicisticoCheckbox] =
    useState(false);

  //State Padrao Folicular
  const [padraoFolicularCheckbox, setpadraoFolicularCheckbox] = useState(false);

  //State Nao Visibilizado
  const [naoVisibilizadoCheckbox, setnaoVisibilizadoCheckbox] = useState(false);

  //Funcoes medidas ovario - Inicio



  const criaStringMedidasOvario = () => {
    let string = 'Medida ovário'
    removeItemSelect(string);
    if (CitarMedidaCheckbox) {
      if (medidaOvario1 != 0 && medidaOvario2 != 0 && medidaOvario3 != 0) {
        const medida4 = (medidaOvario1 * (medidaOvario2) * (medidaOvario3) / 1000) / 2
        setmedidaOvario4(medida4)
        string = `${string} ${medidaOvario1} x ${medidaOvario2} x ${medidaOvario3} mm (Vol= ${medida4}cm³).`;
        setFrasesOVD((arr) => [...arr, string]);
      }
    }
  };

  useEffect(() => {
    criaStringMedidasOvario();
  }, [medidaOvario1, medidaOvario2, medidaOvario3, CitarMedidaCheckbox]);


  //Funcoes Padrao Folicular - Inicio
  const criaStringPadraoFolicular = () => {
    const conclusao = 'Ovário Esquerdo com padrão folicular'
    const string = "O parênquima exibe em seu interior múltiplos folículos, de paredes finas e regulares, conteúdo anecóide, sem septos ou debris.";
    removeItemString(string)
    removeItemConclusao(conclusao)
    if (padraoFolicularCheckbox) {
      setFrasesOVD((arr) => [...arr, string]);
      setConclusaoOVD((arr) => [...arr, conclusao]);
    }
  };

  useEffect(() => {

    criaStringPadraoFolicular();

  }, [padraoFolicularCheckbox]);

  //Funcoes Padrao Folicular - Fim

  //Funcoes Padrao Micropolicistico - Inicio
  const criaStringPadraoMicropolicistico = () => {
    const conclusao = 'Ovário Esquerdo com aspecto micropolicístico.'
    const string = "O parênquima exibe em seu interior múltiplos folículos, de paredes finas e regulares, conteúdo anecóide, sem septos ou debris.";
    removeItemString(string)
    removeItemConclusao(conclusao)
    if (padraoMicropolicisticoCheckbox) {
      setFrasesOVD((arr) => [...arr, string]);
      setConclusaoOVD((arr) => [...arr, conclusao]);
    }
  };
  const removeItemConclusao = (value) => {
    // console.log("valor remove = ", value);
    const index = ConclusaoOVD.indexOf(value);
    //caso o valor enviado exista no array, vai remover com splice e setar array novamente
    if (index > -1) {
      ConclusaoOVD.splice(index, 1);
      setConclusaoOVD((arr) => [...arr]);
      new Format_Laudo(titulo_exame).Remove_Conclusao(value)
    }
  };
  const removeItemConclusaoSelect = (value) => {
    // console.log("valor remove = ", value);
    ConclusaoOVD.map((e) => {
      if (e.includes(value)) {
        const index = ConclusaoOVD.indexOf(e);

        if (index > -1) {
          ConclusaoOVD.splice(index, 1);
          setConclusaoOVD((arr) => [...arr]);
        }
      }
      new Format_Laudo(titulo_exame).Remove_Conclusao_Select(value)
    });

  };

  const removeItemSelect = (value) => {
    frasesOVD.map((e) => {
      if (e.includes(value)) {
        const index = frasesOVD.indexOf(e);

        if (index > -1) {
          frasesOVD.splice(index, 1);
          setFrasesOVD((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    criaStringPadraoMicropolicistico();
  }, [padraoMicropolicisticoCheckbox]);
  //Funcoes Padrao Micropolicistico - Fim

  //Funcoes Cisto - Inicio
  const criaStringCisto = (medida, cisto) => {
    let string = `O parênquima apresenta imagem arredondada, anecóica de limites precisos e contornos regulares, com finos debrís em seu interior, medindo`;
    let conclusao = 'Imagem cística sugestiva de'
    removeItemSelect(string);
    removeItemConclusaoSelect(conclusao)
    if (cistoCheckbox) {
      if (medida != "" && cisto != '') {
        string = `${string} ${medida} mm.`
        conclusao = `${conclusao} ${cisto} no ovário Esquerdo.`
        setFrasesOVD((arr) => [...arr, string]);
        setConclusaoOVD((arr) => [...arr, conclusao]);
      }
    } else {
      setCistoInput('')
      setCistoSelect('')

    }
  };

  useEffect(() => {
    criaStringCisto(cistoInput, cistoSelect);
  }, [cistoCheckbox, cistoInput, cistoSelect]);

  //Funcoes Cisto - Fim

  //Função Nao Visibilizado
  const criaStringNaoVisibilizado = () => {
    const string = "Ovário Esquerdo não visibilizado ";
    removeItemString(string);
    if (naoVisibilizadoCheckbox) {
      setFrasesOVD((arr) => [...arr, string]);
    }
  };
  useEffect(() => {
    criaStringNaoVisibilizado()
  }, [naoVisibilizadoCheckbox])

  const removeItemString = (value) => {
    const index = frasesOVD.indexOf(value);

    if (index > -1) {
      frasesOVD.splice(index, 1);
      setFrasesOVD((arr) => [...arr]);
    }
  };

  const criaStringArteriaEsquerdaIR = (medida) => {
    removeStringArteriaEsquerdaIR();
    if (MedidaEsquerdaIR !== "") {
      const string = `Índice de resistência da artéria uterina 
      Esquerda: ${medida} (normal entre 0,6 e 0,9)`;
      setFrasesOVD((arr) => [...arr, string]);
    }
  };
  const removeStringArteriaEsquerdaIR = () => {
    frasesOVD.map((e) => {
      if (
        e.includes(`Índice de resistência da artéria uterina 
      Esquerda`)
      ) {
        const index = frasesOVD.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesOVD.splice(index, 1);
          setFrasesOVD((arr) => [...arr]);
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
      const string = `Índice de pulsatilidade da artéria uterina 
      Esquerda: ${medida} (normal entre 1,5 e 3,0)`;
      setFrasesOVD((arr) => [...arr, string]);
    }
  };
  const removeStringArteriaEsquerdaIP = () => {
    frasesOVD.map((e) => {
      if (
        e.includes(`Índice de pulsatilidade da artéria uterina 
      Esquerda`)
      ) {
        const index = frasesOVD.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesOVD.splice(index, 1);
          setFrasesOVD((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    criaStringArteriaEsquerdaIP(MedidaEsquerdaIP);
  }, [MedidaEsquerdaIP]);


  useEffect(() => {
    if (dopplerMedidasCheckbox) {
      setDisableInputsDoppler(false);
    } else {
      setMedidaEsquerdaIR("");
      setMedidaEsquerdaIP("");
      removeStringArteriaEsquerdaIR();
      removeStringArteriaEsquerdaIP();
      setDisableInputsDoppler(true);
    }
  }, [dopplerMedidasCheckbox]);

  const subExame = "Ovário Esquerdo";
  const titulo_exame = "Doppler Transvaginal";

  useEffect(() => {
    if (Object.keys(frasesOVD).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesOVD,
        ConclusaoOVD
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesOVD,
        ConclusaoOVD
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
      <TituloNomeExame titulo="Ovário Esquerdo" />

      <Box display="flex" flexWrap="wrap" mt="20px">
        <Stack borderBottom="1px">
          <Box w="250px">
            <Checkbox
              isDisabled={naoVisibilizadoCheckbox}
              onChange={(e) => setCitarMedidaCheckbox(!CitarMedidaCheckbox)}>
              Medidas:
            </Checkbox>
            <HStack marginTop="5px">
              <Input
                isDisabled={!CitarMedidaCheckbox}
                w="80px"
                h="30px"
                padding="0px"
                value={medidaOvario1}
                textAlign="center"
                onChange={handleChangeMedida1Input}
              />
              <Text>x</Text>
              <Input
                isDisabled={!CitarMedidaCheckbox}
                w="80px"
                h="30px"
                padding="0px"
                value={medidaOvario2}
                textAlign="center"
                onChange={handleChangeMedida2Input}
              />
              <Text>x</Text>
              <Input
                isDisabled={!CitarMedidaCheckbox}
                w="80px"
                h="30px"
                padding="0px"
                value={medidaOvario3}
                textAlign="center"
                onChange={handleChangeMedida3Input}
              />
              <Text>mm</Text>
              <Input
                w="100px"
                h="30px"
                value={medidaOvario4}
                padding="0px"
                textAlign="center"

              />
              <Text>cm³</Text>
            </HStack>
          </Box>

          <Stack>
            <Checkbox
              isDisabled={CitarMedidaCheckbox}
              onChange={() => setnaoVisibilizadoCheckbox(!naoVisibilizadoCheckbox)}
            >
              Não visibilizado
            </Checkbox>

            <Checkbox
              onChange={() =>
                setpadraoMicropolicisticoCheckbox(
                  !padraoMicropolicisticoCheckbox
                )
              }
            >
              Padrão micropolicístico
            </Checkbox>
            <Checkbox
              onChange={() =>
                setpadraoFolicularCheckbox(!padraoFolicularCheckbox)
              }
            >
              Padrão Folicular
            </Checkbox>

            <HStack>
              <Checkbox onChange={() => setCistoCheckbox(!cistoCheckbox)}>
                Cisto
              </Checkbox>
              <Input
                isDisabled={!cistoCheckbox}
                value={cistoInput}
                w="45px"
                h="30px"
                padding="5px"
                textAlign="center"
                onChange={handleChangeCistoInput}
              />
              <Text>mm</Text>
              <Select
                isDisabled={!cistoCheckbox}
                value={cistoSelect}
                onChange={(e) => {
                  setCistoSelect(e.target.value);
                }}
              >
                <option value="" selected disabled>Selecione</option>
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
                setdopplerMedidasCheckbox(!dopplerMedidasCheckbox)
              }
            >
              Citar medidas
            </Checkbox>
            <Box>
              <Box mb="5px" alignItems="center" display="flex" gap="25px">
                <Text mr="22px">Artéria uterina Esquerda</Text>
                <Box alignItems="center" display="flex">
                  <Text mr="10px">IR</Text>
                  <Input
                    isDisabled={disableInputsDoppler}
                    w="60px"
                    h="77x"
                    padding="5px"
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
        </Box>
      </Box>
    </Box>
  );
}
export default Ovario_Esquerdo;
