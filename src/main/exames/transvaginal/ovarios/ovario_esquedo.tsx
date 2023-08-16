/* eslint-disable eqeqeq */

import {
  Box,
  Button,
  Checkbox,
  HStack,
  Input,
  Select,
  Stack,
  Text, 
  useMediaQuery
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";
import IndividualizarNodulosEsquerda from "./individualizar_nodulosEsquerda";
import IndividualizarCistosEsquerdo from "./individualizar_CistoEsquerda";

function Ovario_Esquerdo() {
  const altura = "100%";
  let largura = "60%";
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
  isLargerThan600 ? largura = "60%": largura = "100%"

  const [frasesOvarioesquerdo, setFrasesOvarioesquerdo] = useState<any>([]);
  const [ConclusaoOvarioesquerdo, setConclusaoOvarioesquerdo] = useState<any>([]);

  const [UpdateNodulos, setUpdateNodulos] = useState(false);
  const [numberArrayMiometrio, setNumberArrayMiometrio] = useState([1]);

  function Nodulos() {
    return (
      <>
        {numberArrayMiometrio.map((num, key) => {
          return <IndividualizarNodulosEsquerda
            key={key}
            numNodulo={num}
          />
        })}
      </>
    );
  }

  useEffect(() => {
    if (UpdateNodulos) {
      setUpdateNodulos(false);
      setNumberArrayMiometrio([...numberArrayMiometrio, numberArrayMiometrio.length + 1]);
      Nodulos();
    }
  }, [UpdateNodulos]);

  const [UpdateCistos, setUpdateCistos] = useState(false);
  const [numberArrayCistos, setNumberArrayCistos] = useState([1]);

  function Cistos() {
    return (
      <>
        {numberArrayCistos.map((num, key) => {
          return <IndividualizarCistosEsquerdo
            key={key}
            numCisto={num}
          />
        })}
      </>
    );
  }

  useEffect(() => {
    if (UpdateCistos) {
      setUpdateCistos(false);
      setNumberArrayCistos([...numberArrayCistos, numberArrayCistos.length + 1]);
      Cistos();
    }
  }, [UpdateCistos]);

  const subExame = "Ovário esquerdo";
  const titulo_exame = "Transvaginal";

  useEffect(() => {
    if (Object.keys(frasesOvarioesquerdo).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesOvarioesquerdo,
        ConclusaoOvarioesquerdo
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesOvarioesquerdo,
        ConclusaoOvarioesquerdo
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesOvarioesquerdo]);

  //States medidas ovario - Inicio
  const [medidaOvario1, setmedidaOvario1] = useState("");
  const [medidaOvario2, setmedidaOvario2] = useState("");
  const [medidaOvario3, setmedidaOvario3] = useState("");
  const [medidaOvario4, setmedidaOvario4] = useState(0);
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
  const [NaoVisibilizadoCheckBox, setNaoVisibilizadoCheckBox] = useState(false);

  const [NaoVisibilizadoDisable, setNaoVisibilizadoDisable] = useState(false);

  //Funcoes medidas ovario - Inicio
  const criaStringMedidasOvario = () => {
    let string = 'Medida do ovário:'
    removeStringSelect(string)
    const medida1STR: string = medidaOvario1.toString().replace(',', '.');
    const medida1: number = parseFloat(medida1STR);
    const medida2STR: string = medidaOvario2.toString().replace(',', '.');
    const medida2: number = parseFloat(medida2STR);
    const medida3STR: string = medidaOvario3.toString().replace(',', '.');
    const medida3: number = parseFloat(medida3STR);
    if (medidaOvario1 != "" && medidaOvario2 != "" && medidaOvario3 != "") {
      const medida4 = ((medida1) * (medida2) * (medida3) / 1000) / 2
      setmedidaOvario4(medida4)
      string = `${string} ${medida1} x ${medida2} x ${medida3} mm (${medida4.toFixed(2)} cm³)`;
      setFrasesOvarioesquerdo((arr) => [...arr, string]);
    } else {
      setmedidaOvario4(0)
    }
  };

  const removeStringSelect = (value) => {
    frasesOvarioesquerdo.map((e) => {
      if (e.includes(value)) {
        const index = frasesOvarioesquerdo.indexOf(e);

        if (index > -1) {
          frasesOvarioesquerdo.splice(index, 1);
          setFrasesOvarioesquerdo((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    criaStringMedidasOvario();
  }, [medidaOvario1, medidaOvario2, medidaOvario3]);

  //Funcoes medidas ovario - Fim

  //Funcoes Padrao Folicular - Inicio
  const criaStringPadraoFolicular = () => {
    const conclusao = 'Ovário esquerdo com padrão folicular.'
    const string = "Ovário esquerdo com padrão folicular ";
    setFrasesOvarioesquerdo((arr) => [...arr, string]);
    setConclusaoOvarioesquerdo((arr) => [...arr, conclusao]);
  };

  const removePadraoFolicular = () => {
    frasesOvarioesquerdo.map((e) => {
      if (e.includes("folicular")) {
        const index = frasesOvarioesquerdo.indexOf(e);

        if (index > -1) {
          frasesOvarioesquerdo.splice(index, 1);
          setFrasesOvarioesquerdo((arr) => [...arr]);
        }
      }
    });
    ConclusaoOvarioesquerdo.map((e) => {
      if (e.includes("Ovário esquerdo com padrão folicular.")) {
        const index = ConclusaoOvarioesquerdo.indexOf(e);

        if (index > -1) {
          ConclusaoOvarioesquerdo.splice(index, 1);
          setConclusaoOvarioesquerdo((arr) => [...arr]);
          new Format_Laudo(titulo_exame).Remove_Conclusao('Ovário esquerdo com padrão folicular.');
        }
      }
    });
  };
  //Funcoes Padrao Folicular - Fim

  //Funcoes Padrao Micropolicistico - Inicio
  const criaStringPadraoMicropolicistico = () => {
    const string =
      "Ovário esquerdo: para uterino, a forma é típica e os limites bem definidos. O parênquima exibe em seu interior múltiplas imagens císticas, distribuídas predominantemente na periferia, de paredes finas e regulares, conteúdo anecóide, sem septos ou debris.";
    const conclusao = 'Ovário esquerdo com aspecto micropolicístico.'
    setFrasesOvarioesquerdo((arr) => [...arr, string]);
    setConclusaoOvarioesquerdo((arr) => [...arr, conclusao]);
    return string;
  };

  const removePadraoMicropolicistico = () => {
    frasesOvarioesquerdo.map((e) => {
      if (
        e.includes(
          "Ovário esquerdo: para uterino, a forma é típica e os limites bem definidos. O parênquima exibe em seu interior múltiplas imagens císticas, distribuídas predominantemente na periferia, de paredes finas e regulares, conteúdo anecóide, sem septos ou debris."
        )
      ) {
        const index = frasesOvarioesquerdo.indexOf(e);

        if (index > -1) {
          frasesOvarioesquerdo.splice(index, 1);
          setFrasesOvarioesquerdo((arr) => [...arr]);
        }
      }
    });
    ConclusaoOvarioesquerdo.map((e) => {
      if (e.includes(
        "Ovário esquerdo com aspecto micropolicístico."
      )
      ) {
        const index = ConclusaoOvarioesquerdo.indexOf(e);
        if (index > -1) {
          ConclusaoOvarioesquerdo.splice(index, 1);
          setConclusaoOvarioesquerdo((arr) => [...arr]);
          new Format_Laudo(titulo_exame).Remove_Conclusao('Ovário esquerdo com aspecto micropolicístico.');

        }
      }
    });
  };
  //Funcoes Padrao Micropolicistico - Fim

  //Funcoes Cisto - Inicio
  const criaStringCisto = (medida, cisto) => {
    let conclusao = ' no ovário esquerdo.'
    let SelectConclusao;
    removeCisto();

    if (cisto === 'Ovário esquerdo: para uterino, a forma é típica e os limites bem definidos. O parênquima exibe imagem cística anecóica, de limites precisos e contornos regulares, com reforço acústico posterior') {
      SelectConclusao = 'Cisto simples'
    } else if (cisto === 'Ovário esquerdo: para uterino, a forma é típica e os limites bem definidos. O parênquima exibe imagem cística anecóica, de limites precisos e contornos regulares, com reforço acústico posterior e septação fina') {
      SelectConclusao = 'Cisto septado'
    } else if (cisto === 'Ovário esquerdo: para uterino, a forma é típica e os limites bem definidos. O parênquima exibe imagem cística anecóica, multiloculada, de limites precisos e contornos regulares, com reforço acústico posterior') {
      SelectConclusao = 'Cisto multiloculado'
    } else if (cisto === 'Ovário esquerdo: para uterino, a forma é típica e os limites bem definidos. O parênquima exibe imagem cística, de paredes espessas e irregulares, conteúdo anecóide, com septos espessos e moderados debris de permeio') {
      SelectConclusao = 'Cisto hemorrágico'
    } else if (cisto === 'Ovário esquerdo: para uterino, a forma é típica e os limites bem definidos. O parênquima apresenta imagem arredondada, anecóica de limites precisos e contornos regulares, com finos debrís em seu interior') {
      SelectConclusao = 'Imagem cística sugestiva de endometrioma'
    } else if (cisto === 'Ovário esquerdo: para uterino, a forma é típica e os limites bem definidos. O parênquima exibe imagem cística, de paredes espessas e regulares, conteúdo anecóide, sem septos ou debris') {
      SelectConclusao = 'Cisto de corpo lúteo'
    } else if (cisto === 'Ovário esquerdo: para uterino, a forma é típica e os limites bem definidos. O parênquima apresenta imagem nodular hiperecogênica de limites precisos e contornos definidos, apresentando reforço acústico posterior, com área cística em seu interior') {
      SelectConclusao = 'Imagem sugestiva de cisto dermóide'
    }


    if (medida !== "" && cisto !== "") {
      const string = `${cisto}, medindo ${medida} mm `;
      conclusao = `${SelectConclusao} ${conclusao}`
      setFrasesOvarioesquerdo((arr) => [...arr, string]);
      setConclusaoOvarioesquerdo((arr) => [...arr, conclusao]);
    }
  };

  const removeCisto = () => {
    frasesOvarioesquerdo.map((e) => {
      if (e.includes("medindo")) {
        const index = frasesOvarioesquerdo.indexOf(e);

        if (index > -1) {
          frasesOvarioesquerdo.splice(index, 1);
          setFrasesOvarioesquerdo((arr) => [...arr]);
        }
      }
    });

    ConclusaoOvarioesquerdo.map((e) => {
      if (e.includes(" no ovário esquerdo.")) {
        const index = ConclusaoOvarioesquerdo.indexOf(e);

        if (index > -1) {
          ConclusaoOvarioesquerdo.splice(index, 1);
          setConclusaoOvarioesquerdo((arr) => [...arr]);
          new Format_Laudo(titulo_exame).Remove_Conclusao_Select(' no ovário esquerdo.');
        }
      }
    });

  };
  //Funcoes Cisto - Fim

  //Função Nao Visibilizado
  useEffect(() => {
    const string = "Ovário esquerdo não visibilizado.";
    if (NaoVisibilizadoCheckBox) {
      setFrasesOvarioesquerdo((arr) => [...arr, string])
      setCistoInput("");
      setCistoInput("");
      setmedidaOvario1('')
      setmedidaOvario2('')
      setmedidaOvario3('')
      setCistoSelect('')
    } else {
      removeItemString(string);

    }
  }, [NaoVisibilizadoCheckBox])

  const removeItemString = (value) => {
    const index = frasesOvarioesquerdo.indexOf(value);

    if (index > -1) {
      frasesOvarioesquerdo.splice(index, 1);
      setFrasesOvarioesquerdo((arr) => [...arr]);
    }
  };


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
      setCistoSelect("")
      setdisableCistoInput(true);
      setCistoInput("");
    }
  }, [cistoCheckBox]);

  useEffect(() => {
    criaStringCisto(cistoInput, cistoSelect);
  }, [cistoInput, cistoSelect]);

  useEffect(() => {
    if ((medidaOvario1 != '' && medidaOvario2 != '' && medidaOvario3 != '') || padraoMicropolicisticoCheckBox
      || padraoFolicularCheckBox || cistoCheckBox) {
      setNaoVisibilizadoDisable(true)
    } else {
      setNaoVisibilizadoDisable(false)
    }
  }, [padraoFolicularCheckBox, cistoCheckBox, padraoMicropolicisticoCheckBox,
    medidaOvario3, medidaOvario2, medidaOvario1])

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

      <Box gap="30px" display="flex" flexWrap="wrap" mt="20px">
        <Stack>
          <Box w="260px">
            <Text>Medidas:</Text>
            <HStack marginTop="5px">
              <Input isDisabled={NaoVisibilizadoCheckBox}
                value={medidaOvario1}
                w="80px"
                h="30px"
                padding="0px"
                textAlign="center"
                onChange={(e) => setmedidaOvario1(e.target.value)}
              />
              <Text>x</Text>
              <Input isDisabled={NaoVisibilizadoCheckBox}
                w="80px"
                h="30px"
                value={medidaOvario2}
                padding="0px"
                textAlign="center"
                onChange={(e) => setmedidaOvario2(e.target.value)}
              />
              <Text>x</Text>
              <Input isDisabled={NaoVisibilizadoCheckBox}
                w="80px"
                h="30px"
                value={medidaOvario3}
                padding="0px"
                textAlign="center"
                onChange={(e) => {
                  setmedidaOvario3(e.target.value);
                }}
              />
              <Text>mm</Text>
              <Input isDisabled={NaoVisibilizadoCheckBox}
                w="100px"
                h="30px"
                padding="0px"
                value={medidaOvario4.toFixed(2)}
                textAlign="center"
              />
              <Text>cm³</Text>
            </HStack>
          </Box>

          <Stack>
            <Checkbox isDisabled={NaoVisibilizadoDisable}
              onChange={() => {
                setNaoVisibilizadoCheckBox(!NaoVisibilizadoCheckBox);
              }}
            >
              Não visibilizado
            </Checkbox>

            <Checkbox isDisabled={NaoVisibilizadoCheckBox}
              onChange={() =>
                setpadraoMicropolicisticoCheckBox(
                  !padraoMicropolicisticoCheckBox
                )
              }
            >
              Padrão micropolicístico
            </Checkbox>
            <Checkbox isDisabled={NaoVisibilizadoCheckBox}
              onChange={() =>
                setpadraoFolicularCheckBox(!padraoFolicularCheckBox)
              }
            >
              Padrão Folicular
            </Checkbox>

            <Stack>
              <Box gap="10px" display="flex" flexWrap="wrap">
                {Cistos()}
                <Button

                  colorScheme="blue"
                  onClick={() => {
                    setUpdateCistos(true);
                  }}
                >
                  +1 Cisto
                </Button>
              </Box>
            </Stack>
          </Stack>
          <Stack>
            <Box gap="25px" display="flex" flexWrap="wrap">
              {Nodulos()}
              <Button

                colorScheme="blue"
                onClick={() => {
                  setUpdateNodulos(true);
                }}
              >
                +1 Nódulo
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
export default Ovario_Esquerdo;
