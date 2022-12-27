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
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../context/LuadosContext";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Ovario_Esquerdo() {
  const altura = "100%";
  const largura = "32.5%";

  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);
  const [frasesOvarioEsquerdo, setfrasesOvarioEsquerdo] = useState<any>([]);

  const subExameOvario = "Ovário Esquerdo";

  useEffect(() => {
    if (Object.keys(frasesOvarioEsquerdo).length == 0) {
      new Format_Laudo(
        false,
        subExameOvario,
        true,
        frasesOvarioEsquerdo
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        true,
        subExameOvario,
        false,
        frasesOvarioEsquerdo
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesOvarioEsquerdo]);

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
    if (medidaOvario1 !== "" && medidaOvario2 !== "" && medidaOvario3 !== "") {
      var string = `Ovário Esquerdo mede ${medidaOvario1} x ${medidaOvario2} x ${medidaOvario3} mm `;
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
    var string = "Ovário esquerdo com padrão folicular ";
    setfrasesOvarioEsquerdo((arr) => [...arr, string]);
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
  };
  //Funcoes Padrao Folicular - Fim

  //Funcoes Padrao Micropolicistico - Inicio
  const criaStringPadraoMicropolicistico = () => {
    var string =
      "Ovário esquerdo: para uterino, a forma é típica e os limites bem definidos. O parênquima exibe em seu interior múltiplas imagens císticas, distribuídas predominantemente na periferia, de paredes finas e regulares, conteúdo anecóide, sem septos ou debris.";
    setfrasesOvarioEsquerdo((arr) => [...arr, string]);
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
  };
  //Funcoes Padrao Micropolicistico - Fim

  //Funcoes Cisto - Inicio
  const criaStringCisto = (medida, cisto) => {
    removeCisto();
    if (medida !== "" && cisto !== "") {
      var string = `${cisto}, medindo ${medida} mm `;
      setfrasesOvarioEsquerdo((arr) => [...arr, string]);
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
