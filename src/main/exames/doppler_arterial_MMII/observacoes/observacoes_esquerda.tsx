import {
  Box,
  Button,
  Checkbox,
  Flex,
  HStack,
  Select,
  Stack,
  Text,
  Textarea
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

export default function Observacoes_Esquerda() {
  const altura = "100%";
  const largura = "100%";

  const [frasesObsEsquerda, setFrasesObsEsquerda] = useState<any>([]);

  const [CistoBakerCheckBox, setCistoBakerCheckBox] = useState(false);

  const [EdemaCheckBox, setEdemaCheckBox] = useState(false);
  const [TipoEdemaSelect, setTipoEdemaSelect] = useState("");
  const [LocalEdemaSelect, setLocalEdemaSelect] = useState("");

  const [LinfedemaCheckBox, setLinfedemaCheckBox] = useState(false);
  const [TipoLinfedemaSelect, setTipoLinfedemaSelect] = useState("");
  const [LocalLinfedemaSelect, setLocalLinfedemaSelect] = useState("");

  const [SegmentoCheckBox, setSegmentoCheckBox] = useState(false);
  const [SegmentoSelect, setSegmentoSelect] = useState("");

  const [OutrasObservacoesCheckBox, setOutrasObservacoesCheckBox] =
    useState(false);
  const [OutrasObservacoesInput, setOutrasObservacoesInput] = useState("");

  const handleOutrasObservacoesInput = (event) => {
    setOutrasObservacoesInput(event.target.value);
  };

  const criaStringCistoBaker = () => {
    const string = `Cisto Baker lado esquerdo `;
    setFrasesObsEsquerda((arr) => [...arr, string]);
  };

  const removeCistoBaker = () => {
    frasesObsEsquerda.map((e) => {
      if (e.includes("Baker")) {
        const index = frasesObsEsquerda.indexOf(e);

        if (index > -1) {
          frasesObsEsquerda.splice(index, 1);
          setFrasesObsEsquerda((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringEdema = () => {
    removeEdema();

    if (TipoEdemaSelect != "" && LocalEdemaSelect != "") {
      const stringEdema = `Edema ${TipoEdemaSelect} na ${LocalEdemaSelect} esquerda `;
      setFrasesObsEsquerda((arr) => [...arr, stringEdema]);
      console.log(frasesObsEsquerda);
    }
  };

  const removeEdema = () => {
    frasesObsEsquerda.some((e) => {
      if (e.includes("Edema") && e.includes("esquerda")) {
        const index = frasesObsEsquerda.indexOf(e);

        if (index > -1) {
          frasesObsEsquerda.splice(index, 1);
          setFrasesObsEsquerda((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringLinfedema = () => {
    removeLinfedema();

    if (TipoLinfedemaSelect != "" && LocalLinfedemaSelect != "") {
      const stringLinfedema = `Linfedema ${TipoLinfedemaSelect} na ${LocalLinfedemaSelect} esquerda `;

      setFrasesObsEsquerda((arr) => [...arr, stringLinfedema]);
    }
  };

  const removeLinfedema = () => {
    frasesObsEsquerda.some((e) => {
      if (e.includes("Linfedema") && e.includes("esquerda")) {
        const index = frasesObsEsquerda.indexOf(e);

        if (index > -1) {
          frasesObsEsquerda.splice(index, 1);
          setFrasesObsEsquerda((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringSegmento = () => {
    removeSegmento();

    if (SegmentoSelect != "") {
      const stringSegmento = `Segmento não avaliado devido à presença de curativo oclusivo no ${SegmentoSelect} esquerda `;

      setFrasesObsEsquerda((arr) => [...arr, stringSegmento]);
    }
  };

  const removeSegmento = () => {
    frasesObsEsquerda.some((e) => {
      if (e.includes("Segmento") && e.includes("esquerda")) {
        const index = frasesObsEsquerda.indexOf(e);

        if (index > -1) {
          frasesObsEsquerda.splice(index, 1);
          setFrasesObsEsquerda((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringOutrasObservacoes = () => {
    removeOutrasObservacoes();
    if (OutrasObservacoesInput != "") {
      setFrasesObsEsquerda((arr) => [...arr, OutrasObservacoesInput]);
    }
  };

  const removeOutrasObservacoes = () => {
    frasesObsEsquerda.map((e) => {
      if (OutrasObservacoesInput != "") {
        if (e.includes(OutrasObservacoesInput)) {
          const index = frasesObsEsquerda.indexOf(e);

          if (index > -1) {
            frasesObsEsquerda.splice(index, 1);
            setFrasesObsEsquerda((arr) => [...arr]);
            setOutrasObservacoesInput("");
          }
        }
      }
    });
  };

  useEffect(() => {
    if (CistoBakerCheckBox) {
      criaStringCistoBaker();
    } else {
      removeCistoBaker();
    }
  }, [CistoBakerCheckBox]);

  useEffect(() => {
    if (EdemaCheckBox) {
      criaStringEdema();
    } else {
      removeEdema();
      setLocalEdemaSelect("");
      setTipoEdemaSelect("");
    }
  }, [EdemaCheckBox, TipoEdemaSelect, LocalEdemaSelect]);

  useEffect(() => {
    if (LinfedemaCheckBox) {
      criaStringLinfedema();
    } else {
      removeLinfedema();
      setLocalLinfedemaSelect("");
      setTipoLinfedemaSelect("");
    }
  }, [LinfedemaCheckBox, TipoLinfedemaSelect, LocalLinfedemaSelect]);

  useEffect(() => {
    if (SegmentoCheckBox) {
      criaStringSegmento();
    } else {
      removeSegmento();
      setSegmentoSelect("");
    }
  }, [SegmentoCheckBox, SegmentoSelect]);

  useEffect(() => {
    if (!OutrasObservacoesCheckBox) {
      removeOutrasObservacoes();
    }
  }, [OutrasObservacoesCheckBox]);

  const subExame = "Observações Lado Esquerdo";
  const titulo_exame = "Doppler Arterial de MMII";

  useEffect(() => {
    if (Object.keys(frasesObsEsquerda).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesObsEsquerda
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesObsEsquerda
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesObsEsquerda]);

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
      <TituloNomeExame titulo="Observações" />

      <Box gap="30px" display="flex" flexWrap="wrap" mt="20px">
        <Flex flexWrap="wrap" gap="2">
          <Stack>
            <Checkbox
              whiteSpace="nowrap"
              onChange={() => setCistoBakerCheckBox(!CistoBakerCheckBox)}
            >
              Cisto Baker
            </Checkbox>
            <HStack>
              <Checkbox
                whiteSpace="nowrap"
                onChange={() => setEdemaCheckBox(!EdemaCheckBox)}
              >
                Edema
              </Checkbox>
              <Select
                w="auto"
                isDisabled={!EdemaCheckBox}
                onChange={(e) => {
                  setTipoEdemaSelect(e.target.value);
                }}
                value={TipoEdemaSelect}
              >
                <option value="" disabled selected>
                  Grau
                </option>
                <option value="leve">Leve</option>
                <option value="moderado">Moderado</option>
                <option value="acentuado">Acentuado</option>
              </Select>
              <Select
                w="auto"
                isDisabled={!EdemaCheckBox}
                onChange={(e) => {
                  setLocalEdemaSelect(e.target.value);
                }}
                value={LocalEdemaSelect}
              >
                <option value="" disabled selected>
                  Posição
                </option>
                <option value="perna">Perna</option>
                <option value="coxa">Coxa</option>
                <option value="perna e coxa">Perna e Coxa</option>
              </Select>
            </HStack>

            <HStack>
              <Checkbox
                whiteSpace="nowrap"
                onChange={() => setLinfedemaCheckBox(!LinfedemaCheckBox)}
              >
                Linfedema
              </Checkbox>
              <Select
                w="auto"
                isDisabled={!LinfedemaCheckBox}
                onChange={(e) => {
                  setTipoLinfedemaSelect(e.target.value);
                }}
                value={TipoLinfedemaSelect}
              >
                <option value="" disabled selected>
                  Grau
                </option>
                <option value="leve">Leve</option>
                <option value="moderado">Moderado</option>
                <option value="acentuado">Acentuado</option>
              </Select>
              <Select
                w="auto"
                isDisabled={!LinfedemaCheckBox}
                onChange={(e) => {
                  setLocalLinfedemaSelect(e.target.value);
                }}
                value={LocalLinfedemaSelect}
              >
                <option value="" disabled selected>
                  Posição
                </option>
                <option value="perna">Perna</option>
                <option value="coxa">Coxa</option>
                <option value="perna e coxa">Perna e Coxa</option>
              </Select>
            </HStack>
            <HStack>
              <Checkbox
                whiteSpace="nowrap"
                onChange={() => setSegmentoCheckBox(!SegmentoCheckBox)}
              >
                <Text whiteSpace="pre-line" fontSize="14.5px">
                  Segmento não avaliado devido à presença de curativo oclusivo
                </Text>
              </Checkbox>

              <Select
                w="auto"
                isDisabled={!SegmentoCheckBox}
                onChange={(e) => {
                  setSegmentoSelect(e.target.value);
                }}
                value={SegmentoSelect}
              >
                <option value="" disabled selected>
                  Segmento
                </option>
                <option value="terço inferior da perna">
                  Terço inferior da perna
                </option>
                <option value="terço médio da perna">
                  Terço médio da perna
                </option>
                <option value="terço superior da perna">
                  Terço superior da perna
                </option>
                <option value="terços médio e inferior">
                  Terços médio e inferior
                </option>
                <option value="segmento da perna">Segmento da perna</option>
              </Select>
            </HStack>

            <Checkbox
              whiteSpace="nowrap"
              onChange={() =>
                setOutrasObservacoesCheckBox(!OutrasObservacoesCheckBox)
              }
            >
              Outras Observações
            </Checkbox>
            <Textarea
              isDisabled={!OutrasObservacoesCheckBox}
              placeholder="Observações"
              borderColor="black"
              value={OutrasObservacoesInput}
              onChange={(e) => setOutrasObservacoesInput(e.target.value)}
            />
            <Button
              isDisabled={!OutrasObservacoesCheckBox}
              colorScheme="blue"
              onClick={() => criaStringOutrasObservacoes()}
            >
              Adicionar Observação
            </Button>
          </Stack>
        </Flex>
      </Box>
    </Box>
  );
}
