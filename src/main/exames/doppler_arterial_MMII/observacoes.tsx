import {
    Box,
    Checkbox,
    Flex,
    HStack,
    Select,
    Stack,
    Text
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../context/LuadosContext";
import TituloNomeExame from "../../component/titulo_nome_exame";

export default function Observacoes({ lado }) {
  const altura = "100%";
  const largura = "100%";

  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);

  const [CistoBakerCheckBox, setCistoBakerCheckBox] = useState(false);

  const [EdemaCheckBox, setEdemaCheckBox] = useState(false);
  const [TipoEdemaSelect, setTipoEdemaSelect] = useState("");
  const [LocalEdemaSelect, setLocalEdemaSelect] = useState("");

  const [LinfedemaCheckBox, setLinfedemaCheckBox] = useState(false);
  const [TipoLinfedemaSelect, setTipoLinfedemaSelect] = useState("");
  const [LocalLinfedemaSelect, setLocalLinfedemaSelect] = useState("");

  const [SegmentoCheckBox, setSegmentoCheckBox] = useState(false);
  const [SegmentoSelect, setSegmentoSelect] = useState("");

  const criaStringCistoBaker = () => {
    var string = `Cisto Baker lado ${lado}`;
    setLaudoPrin((arr) => [...arr, string]);
  };

  const removeCistoBaker = () => {
    laudoPrin.map((e) => {
      if (e.includes("Baker")) {
        var index = laudoPrin.indexOf(e);

        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringEdema = () => {
    removeEdema();

    if (TipoEdemaSelect != "" && LocalEdemaSelect != "") {
      var string = `Edema ${TipoEdemaSelect} na ${LocalEdemaSelect} ${lado}`;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };

  const removeEdema = () => {
    laudoPrin.map((e) => {
      if (e.includes("Edema")) {
        var index = laudoPrin.indexOf(e);

        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringLinfedema = () => {
    removeLinfedema();

    if (TipoLinfedemaSelect != "" && LocalLinfedemaSelect != "") {
      var string = `Linfedema ${TipoLinfedemaSelect} na ${LocalLinfedemaSelect} ${lado}`;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };

  const removeLinfedema = () => {
    laudoPrin.map((e) => {
      if (e.includes("Linfedema")) {
        var index = laudoPrin.indexOf(e);

        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringSegmento = () => {
    removeSegmento();

    if (SegmentoSelect != "") {
      var string = `Segmento não avaliado devido à presença de curativo oclusivo no ${SegmentoSelect} ${lado}`;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };

  const removeSegmento = () => {
    laudoPrin.map((e) => {
      if (e.includes("Segmento")) {
        var index = laudoPrin.indexOf(e);

        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
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
                <Text whiteSpace="pre-line">
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
          </Stack>
        </Flex>
      </Box>
    </Box>
  );
}
