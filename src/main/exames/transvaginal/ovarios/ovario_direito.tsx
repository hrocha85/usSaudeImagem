/* eslint-disable eqeqeq */
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

function Ovario_Direito({ Disable }) {
  const altura = "100%";
  const largura = "33%";

  const [frasesOvarioDireito, setFrasesOvarioDireito] = useState<any>([]);
  const [ConclusaoOvarioDireito, setConclusaoOvarioDireito] = useState<any>([]);

  const subExame = "Ovário Direito";
  const titulo_exame = "Transvaginal";

  useEffect(() => {
    if (Object.keys(frasesOvarioDireito).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesOvarioDireito,
        ConclusaoOvarioDireito
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesOvarioDireito,
        ConclusaoOvarioDireito
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesOvarioDireito]);

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
      setFrasesOvarioDireito((arr) => [...arr, string]);
    }
  };

  const removeMedidasOvario = () => {
    frasesOvarioDireito.map((e) => {
      if (e.includes("Ovário Direito mede")) {
        var index = frasesOvarioDireito.indexOf(e);

        if (index > -1) {
          frasesOvarioDireito.splice(index, 1);
          setFrasesOvarioDireito((arr) => [...arr]);
        }
      }
    });
  };
  //Funcoes medidas ovario - Fim

  //Funcoes Padrao Folicular - Inicio
  const criaStringPadraoFolicular = () => {
    const conclusao = 'Ovário direito com padrão folicular.'
    var string = "Ovário direito com padrão folicular ";
    setFrasesOvarioDireito((arr) => [...arr, string]);
    setConclusaoOvarioDireito((arr) => [...arr, conclusao]);
  };

  const removePadraoFolicular = () => {
    frasesOvarioDireito.map((e) => {
      if (e.includes("folicular")) {
        var index = frasesOvarioDireito.indexOf(e);

        if (index > -1) {
          frasesOvarioDireito.splice(index, 1);
          setFrasesOvarioDireito((arr) => [...arr]);
        }
      }
    });
    ConclusaoOvarioDireito.map((e) => {
      if (e.includes("Ovário direito com padrão folicular.")) {
        var index = ConclusaoOvarioDireito.indexOf(e);

        if (index > -1) {
          ConclusaoOvarioDireito.splice(index, 1);
          setConclusaoOvarioDireito((arr) => [...arr]);
          new Format_Laudo(titulo_exame).Remove_Conclusao('Ovário direito com padrão folicular.');
        }
      }
    });
  };
  //Funcoes Padrao Folicular - Fim

  //Funcoes Padrao Micropolicistico - Inicio
  const criaStringPadraoMicropolicistico = () => {
    var string =
      "Ovário direito: para uterino, a forma é típica e os limites bem definidos. O parênquima exibe em seu interior múltiplas imagens císticas, distribuídas predominantemente na periferia, de paredes finas e regulares, conteúdo anecóide, sem septos ou debris.";
    const conclusao = 'Ovário direito com aspecto micropolicístico.'
    setFrasesOvarioDireito((arr) => [...arr, string]);
    setConclusaoOvarioDireito((arr) => [...arr, conclusao]);
    return string;
  };

  const removePadraoMicropolicistico = () => {
    frasesOvarioDireito.map((e) => {
      if (
        e.includes(
          "Ovário direito: para uterino, a forma é típica e os limites bem definidos. O parênquima exibe em seu interior múltiplas imagens císticas, distribuídas predominantemente na periferia, de paredes finas e regulares, conteúdo anecóide, sem septos ou debris."
        )
      ) {
        var index = frasesOvarioDireito.indexOf(e);

        if (index > -1) {
          frasesOvarioDireito.splice(index, 1);
          setFrasesOvarioDireito((arr) => [...arr]);
        }
      }
    });
    ConclusaoOvarioDireito.map((e) => {
      if (e.includes(
        "Ovário direito com aspecto micropolicístico."
      )
      ) {
        var index = ConclusaoOvarioDireito.indexOf(e);
        if (index > -1) {
          ConclusaoOvarioDireito.splice(index, 1);
          setConclusaoOvarioDireito((arr) => [...arr]);
          new Format_Laudo(titulo_exame).Remove_Conclusao('Ovário direito com aspecto micropolicístico.');

        }
      }
    });
  };
  //Funcoes Padrao Micropolicistico - Fim

  //Funcoes Cisto - Inicio
  const criaStringCisto = (medida, cisto) => {
    var conclusao = ' no ovário direito.'
    var SelectConclusao;
    removeCisto();

    if (cisto === 'Ovário direito: para uterino, a forma é típica e os limites bem definidos. O parênquima exibe imagem cística anecóica, de limites precisos e contornos regulares, com reforço acústico posterior') {
      SelectConclusao = 'Cisto simples'
    } else if (cisto === 'Ovário direito: para uterino, a forma é típica e os limites bem definidos. O parênquima exibe imagem cística anecóica, de limites precisos e contornos regulares, com reforço acústico posterior e septação fina') {
      SelectConclusao = 'Cisto septado'
    } else if (cisto === 'Ovário direito: para uterino, a forma é típica e os limites bem definidos. O parênquima exibe imagem cística anecóica, multiloculada, de limites precisos e contornos regulares, com reforço acústico posterior') {
      SelectConclusao = 'Cisto multiloculado'
    } else if (cisto === 'Ovário direito: para uterino, a forma é típica e os limites bem definidos. O parênquima exibe imagem cística, de paredes espessas e irregulares, conteúdo anecóide, com septos espessos e moderados debris de permeio') {
      SelectConclusao = 'Cisto hemorrágico'
    } else if (cisto === 'Ovário direito: para uterino, a forma é típica e os limites bem definidos. O parênquima apresenta imagem arredondada, anecóica de limites precisos e contornos regulares, com finos debrís em seu interior') {
      SelectConclusao = 'Imagem cística sugestiva de endometrioma'
    } else if (cisto === 'Ovário direito: para uterino, a forma é típica e os limites bem definidos. O parênquima exibe imagem cística, de paredes espessas e regulares, conteúdo anecóide, sem septos ou debris') {
      SelectConclusao = 'Cisto de corpo lúteo'
    } else if (cisto === 'Ovário direito: para uterino, a forma é típica e os limites bem definidos. O parênquima apresenta imagem nodular hiperecogênica de limites precisos e contornos definidos, apresentando reforço acústico posterior, com área cística em seu interior') {
      SelectConclusao = 'Imagem sugestiva de cisto dermóide'
    }


    if (medida !== "" && cisto !== "") {
      var string = `${cisto}, medindo ${medida} mm `;
      conclusao = `${SelectConclusao} ${conclusao}`
      setFrasesOvarioDireito((arr) => [...arr, string]);
      setConclusaoOvarioDireito((arr) => [...arr, conclusao]);
    }
  };

  const removeCisto = () => {
    frasesOvarioDireito.map((e) => {
      if (e.includes("medindo")) {
        var index = frasesOvarioDireito.indexOf(e);

        if (index > -1) {
          frasesOvarioDireito.splice(index, 1);
          setFrasesOvarioDireito((arr) => [...arr]);
        }
      }
    });

    ConclusaoOvarioDireito.map((e) => {
      if (e.includes(" no ovário direito.")) {
        var index = ConclusaoOvarioDireito.indexOf(e);

        if (index > -1) {
          ConclusaoOvarioDireito.splice(index, 1);
          setConclusaoOvarioDireito((arr) => [...arr]);
          new Format_Laudo(titulo_exame).Remove_Conclusao_Select(' no ovário direito.');
        }
      }
    });

  };
  //Funcoes Cisto - Fim

  //Função Nao Visibilizado
  const criaStringNaoVisibilizado = () => {
    var string = "Ovário direito não visibilizado ";
    if (naoVisibilizadoCheckBox) {
      setFrasesOvarioDireito((arr) => [...arr, string]);
      setnaoVisibilizadoCheckBox(false);
    } else {
      removeItemString(string);
    }
  };

  const removeItemString = (value) => {
    var index = frasesOvarioDireito.indexOf(value);

    if (index > -1) {
      frasesOvarioDireito.splice(index, 1);
      setFrasesOvarioDireito((arr) => [...arr]);
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
      setCistoSelect("")
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
              <Input isDisabled={Disable}
                w="80px"
                h="30px"
                padding="5px"
                maxLength={2}
                textAlign="center"
                onChange={(e) => setmedidaOvario1(e.target.value)}
              />
              <Text>x</Text>
              <Input isDisabled={Disable}
                w="80px"
                h="30px"
                padding="5px"
                maxLength={2}
                textAlign="center"
                onChange={(e) => setmedidaOvario2(e.target.value)}
              />
              <Text>x</Text>
              <Input isDisabled={Disable}
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
                maxLength={2}
                textAlign="center"
                onChange={handleChangeCistoInput}
              />
              <Text>mm</Text>
              <Select
                isDisabled={disableCistoInput}
                value={cistoSelect}
                onChange={(e) => {
                  setCistoSelect(e.target.value);
                }}
              >
                <option value="" disabled selected>
                  Selecione
                </option>
                <option value="Ovário direito: para uterino, a forma é típica e os limites bem definidos. O parênquima exibe imagem cística anecóica, de limites precisos e contornos regulares, com reforço acústico posterior">
                  Cisto Simples
                </option>
                <option value="Ovário direito: para uterino, a forma é típica e os limites bem definidos. O parênquima exibe imagem cística anecóica, de limites precisos e contornos regulares, com reforço acústico posterior e septação fina">
                  Cisto septação fina
                </option>
                <option value="Ovário direito: para uterino, a forma é típica e os limites bem definidos. O parênquima exibe imagem cística anecóica, multiloculada, de limites precisos e contornos regulares, com reforço acústico posterior">
                  Multiloculado
                </option>
                <option value="Ovário direito: para uterino, a forma é típica e os limites bem definidos. O parênquima exibe imagem cística, de paredes espessas e irregulares, conteúdo anecóide, com septos espessos e moderados debris de permeio">
                  Hemorrágico
                </option>
                <option value="Ovário direito: para uterino, a forma é típica e os limites bem definidos. O parênquima apresenta imagem arredondada, anecóica de limites precisos e contornos regulares, com finos debrís em seu interior">
                  Endometrioma
                </option>
                <option value="Ovário direito: para uterino, a forma é típica e os limites bem definidos. O parênquima exibe imagem cística, de paredes espessas e regulares, conteúdo anecóide, sem septos ou debris">
                  Corpo lúteo
                </option>
                <option value="Ovário direito: para uterino, a forma é típica e os limites bem definidos. O parênquima apresenta imagem nodular hiperecogênica de limites precisos e contornos definidos, apresentando reforço acústico posterior, com área cística em seu interior">
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
export default Ovario_Direito;
