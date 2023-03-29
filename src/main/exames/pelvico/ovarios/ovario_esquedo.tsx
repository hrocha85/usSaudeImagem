/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
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

function Ovario_Esquerdo({ Disable }) {
  const altura = "100%";
  const largura = "32.5%";

  const [frasesOvarioEsquerdo, setfrasesOvarioEsquerdo] = useState<any>([]);
  const [ConclusaoOvarioEsquerdo, setConclusaoOvarioEsquerdo] = useState<any>([]);

  const subExame = "Ovário Esquerdo";
  const titulo_exame = "Pélvico";
  useEffect(() => {
    if (Object.keys(frasesOvarioEsquerdo).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesOvarioEsquerdo,
        ConclusaoOvarioEsquerdo
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesOvarioEsquerdo,
        ConclusaoOvarioEsquerdo
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesOvarioEsquerdo]);

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
  const [naoVisibilizadoCheckBox, setnaoVisibilizadoCheckBox] = useState(true);

  //Funcoes medidas ovario - Inicio
  const criaStringMedidasOvario = () => {
    if (medidaOvario1 !== "" && medidaOvario2 !== "" && medidaOvario3 !== "") {
      var medida4 = (parseInt(medidaOvario1) * parseInt(medidaOvario2) * parseInt(medidaOvario3) / 1000)
      setmedidaOvario4(medida4)

      var string = `Ovário Esquerdo mede ${medidaOvario1} x ${medidaOvario2} x ${medidaOvario3} mm (${medida4} cm³)`;
      setfrasesOvarioEsquerdo((arr) => [...arr, string]);
    }
  };

  const removeMedidasOvario = () => {
    frasesOvarioEsquerdo.map((e) => {
      if (e.includes("Ovário Esquerdo mede")) {
        var index = frasesOvarioEsquerdo.indexOf(e);

        if (index > -1) {
          frasesOvarioEsquerdo.splice(index, 1);
          setfrasesOvarioEsquerdo((arr) => [...arr]);
        }
      }
    });
  };
  //Funcoes medidas ovario - Fim

  //Funcoes Padrao Folicular - Inicio
  const criaStringPadraoFolicular = () => {
    var string = "Ovário esquerdo com padrão folicular.";
    const conclusao = 'Ovário esquerdo com padrão folicular.'
    setfrasesOvarioEsquerdo((arr) => [...arr, string]);
    setConclusaoOvarioEsquerdo((arr) => [...arr, conclusao]);
  };

  const removePadraoFolicular = () => {
    frasesOvarioEsquerdo.map((e) => {
      if (e.includes("folicular")) {
        var index = frasesOvarioEsquerdo.indexOf(e);

        if (index > -1) {
          frasesOvarioEsquerdo.splice(index, 1);
          setfrasesOvarioEsquerdo((arr) => [...arr]);
        }
      }
    });
    ConclusaoOvarioEsquerdo.map((e) => {
      if (e.includes("Ovário esquerdo com padrão folicular.")) {
        var index = ConclusaoOvarioEsquerdo.indexOf(e);

        if (index > -1) {
          ConclusaoOvarioEsquerdo.splice(index, 1);
          setConclusaoOvarioEsquerdo((arr) => [...arr]);
          new Format_Laudo(titulo_exame).Remove_Conclusao("Ovário esquerdo com padrão folicular.")
        }
      }
    });
  };
  //Funcoes Padrao Folicular - Fim

  //Funcoes Padrao Micropolicistico - Inicio
  const criaStringPadraoMicropolicistico = () => {
    var string =
      "Ovário esquerdo: para uterino, a forma é típica e os limites bem definidos. O parênquima exibe em seu interior múltiplas imagens císticas, distribuídas predominantemente na periferia, de paredes finas e regulares, conteúdo anecóide, sem septos ou debris.";
    const conclusao = 'Ovário esquerdo com aspecto micropolicístico.'
    setfrasesOvarioEsquerdo((arr) => [...arr, string]);
    setConclusaoOvarioEsquerdo((arr) => [...arr, conclusao]);
    return string;
  };

  const removePadraoMicropolicistico = () => {
    frasesOvarioEsquerdo.map((e) => {
      if (
        e.includes(
          "Ovário esquerdo: para uterino, a forma é típica e os limites bem definidos. O parênquima exibe em seu interior múltiplas imagens císticas, distribuídas predominantemente na periferia, de paredes finas e regulares, conteúdo anecóide, sem septos ou debris."
        )
      ) {
        var index = frasesOvarioEsquerdo.indexOf(e);

        if (index > -1) {
          frasesOvarioEsquerdo.splice(index, 1);
          setfrasesOvarioEsquerdo((arr) => [...arr]);
        }
      }
    });
    ConclusaoOvarioEsquerdo.map((e) => {
      if (e.includes("Ovário esquerdo com aspecto micropolicístico.")) {
        var index = ConclusaoOvarioEsquerdo.indexOf(e);

        if (index > -1) {
          ConclusaoOvarioEsquerdo.splice(index, 1);
          setConclusaoOvarioEsquerdo((arr) => [...arr]);
          new Format_Laudo(titulo_exame).Remove_Conclusao("Ovário esquerdo com aspecto micropolicístico.")
        }
      }
    });
  };
  //Funcoes Padrao Micropolicistico - Fim

  const criaStringCisto = (medida, cisto) => {
    var conclusao = ' no ovário esquerdo.'
    var SelectConclusao;
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
      var string = `${cisto}, medindo ${medida} mm `;
      conclusao = `${SelectConclusao} ${conclusao}`
      setfrasesOvarioEsquerdo((arr) => [...arr, string]);
      setConclusaoOvarioEsquerdo((arr) => [...arr, conclusao]);
    }
  };

  const removeCisto = () => {
    frasesOvarioEsquerdo.map((e) => {
      if (e.includes("medindo")) {
        var index = frasesOvarioEsquerdo.indexOf(e);

        if (index > -1) {
          frasesOvarioEsquerdo.splice(index, 1);
          setfrasesOvarioEsquerdo((arr) => [...arr]);
        }
      }
    });
    ConclusaoOvarioEsquerdo.map((e) => {
      if (e.includes(' no ovário esquerdo.')) {
        var index = ConclusaoOvarioEsquerdo.indexOf(e);

        if (index > -1) {
          ConclusaoOvarioEsquerdo.splice(index, 1);
          setConclusaoOvarioEsquerdo((arr) => [...arr]);
          new Format_Laudo(titulo_exame).Remove_Conclusao_Select(" no ovário esquerdo.")
        }
      }
    });

  };
  //Funcoes Cisto - Fim

  //Função Nao Visibilizado
  const criaStringNaoVisibilizado = () => {
    var string = "Ovário esquerdo não visibilizado ";
    if (naoVisibilizadoCheckBox) {
      setfrasesOvarioEsquerdo((arr) => [...arr, string]);
      setnaoVisibilizadoCheckBox(false);
    } else {
      removeItemString(string);
    }
  };

  const removeItemString = (value) => {
    var index = frasesOvarioEsquerdo.indexOf(value);

    if (index > -1) {
      frasesOvarioEsquerdo.splice(index, 1);
      setfrasesOvarioEsquerdo((arr) => [...arr]);
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
      setCistoSelect("")
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
      <TituloNomeExame titulo="Ovário Esquerdo" />

      <Box gap="30px" display="flex" flexWrap="wrap" mt="20px">
        <Stack>
          <Box w="260px">
            <Text>Medidas:</Text>
            <HStack marginTop="5px">
              <Input isDisabled={Disable}
                w="80px"
                h="30px"
                padding="5px"
                textAlign="center"
                onChange={(e) => setmedidaOvario1(e.target.value)}
              />
              <Text>x</Text>
              <Input isDisabled={Disable}
                w="80px"
                h="30px"
                padding="5px"
                textAlign="center"
                onChange={(e) => setmedidaOvario2(e.target.value)}
              />
              <Text>x</Text>
              <Input isDisabled={Disable}
                w="80px"
                h="30px"
                padding="5px"
                textAlign="center"
                onChange={(e) => {
                  setmedidaOvario3(e.target.value);
                }}
              />
              <Text>mm</Text>
              <Input isDisabled={Disable}
                w="80px"
                h="30px"
                value={medidaOvario4}
                padding="5px"
                textAlign="center"

              />
              <Text>cm³</Text>
            </HStack>
          </Box>

          <Stack>
            <Checkbox isDisabled={Disable}
              onChange={() => {
                setnaoVisibilizadoCheckBox(true);
                criaStringNaoVisibilizado();
              }}
            >
              Não visibilizado
            </Checkbox>

            <Checkbox isDisabled={Disable}
              onChange={() =>
                setpadraoMicropolicisticoCheckBox(
                  !padraoMicropolicisticoCheckBox
                )
              }
            >
              Padrão micropolicístico
            </Checkbox>
            <Checkbox isDisabled={Disable}
              onChange={() =>
                setpadraoFolicularCheckBox(!padraoFolicularCheckBox)
              }
            >
              Padrão Folicular
            </Checkbox>

            <HStack>
              <Checkbox isDisabled={Disable} onChange={() => setCistoCheckBox(!cistoCheckBox)}>
                Cisto
              </Checkbox>
              <Input
                isDisabled={disableCistoInput}
                value={cistoInput}
                w="45px"
                h="30px"
                padding="5px"
                textAlign="center"
                onChange={handleChangeCistoInput}
              />
              <Text>mm</Text>
              <Select
                value={cistoSelect}
                isDisabled={disableCistoInput}
                onChange={(e) => {
                  setCistoSelect(e.target.value);
                }}
              >
                <option value="" disabled selected>
                  Selecione
                </option>
                <option value="Ovário esquerdo: para uterino, a forma é típica e os limites bem definidos. O parênquima exibe imagem cística anecóica, de limites precisos e contornos regulares, com reforço acústico posterior">
                  Cisto Simples
                </option>
                <option value="Ovário esquerdo: para uterino, a forma é típica e os limites bem definidos. O parênquima exibe imagem cística anecóica, de limites precisos e contornos regulares, com reforço acústico posterior e septação fina">
                  Cisto septação fina
                </option>
                <option value="Ovário esquerdo: para uterino, a forma é típica e os limites bem definidos. O parênquima exibe imagem cística anecóica, multiloculada, de limites precisos e contornos regulares, com reforço acústico posterior">
                  Multiloculado
                </option>
                <option value="Ovário esquerdo: para uterino, a forma é típica e os limites bem definidos. O parênquima exibe imagem cística, de paredes espessas e irregulares, conteúdo anecóide, com septos espessos e moderados debris de permeio">
                  Hemorrágico
                </option>
                <option value="Ovário esquerdo: para uterino, a forma é típica e os limites bem definidos. O parênquima apresenta imagem arredondada, anecóica de limites precisos e contornos regulares, com finos debrís em seu interior">
                  Endometrioma
                </option>
                <option value="Ovário esquerdo: para uterino, a forma é típica e os limites bem definidos. O parênquima exibe imagem cística, de paredes espessas e regulares, conteúdo anecóide, sem septos ou debris">
                  Corpo lúteo
                </option>
                <option value="Ovário esquerdo: para uterino, a forma é típica e os limites bem definidos. O parênquima apresenta imagem nodular hiperecogênica de limites precisos e contornos definidos, apresentando reforço acústico posterior, com área cística em seu interior">
                  Cisto dermóide
                </option>
              </Select>
            </HStack>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
export default Ovario_Esquerdo;
